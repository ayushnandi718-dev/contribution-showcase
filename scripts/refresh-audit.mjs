#!/usr/bin/env node
// Regenerates AUDIT.md from GitHub's public API. No third-party dependencies.
import { execFileSync } from 'node:child_process';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const HANDLE = 'ayushnandi718-dev';
const NAME_PATTERNS = [/ayushnandi718-dev/i, /rva\.creates/i, /ayush nandi/i];
const CREDIT_FILES = [
  'CONTRIBUTORS.md',
  'Contributors.md',
  'CONTRIBUTORS',
  'CREDITS.md',
  'AUTHORS.md',
  'README.md',
  'readme.md',
  'CHANGELOG.md',
];

function token() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
  try {
    return execFileSync('gh', ['auth', 'token'], { encoding: 'utf8' }).trim();
  } catch {
    throw new Error('Set GITHUB_TOKEN or authenticate with `gh auth login`.');
  }
}

const headers = {
  Accept: 'application/vnd.github+json',
  Authorization: `Bearer ${token()}`,
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'contribution-audit',
};

async function get(url, raw = false) {
  const response = await fetch(url, {
    headers: raw ? { ...headers, Accept: 'application/vnd.github.raw+json' } : headers,
  });
  if (response.status === 404) return null;
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`${response.status} ${url}: ${detail.slice(0, 300)}`);
  }
  return raw ? response.text() : response.json();
}

function clean(value) {
  return String(value ?? '').replace(/\|/g, '\\|').replace(/[\r\n]+/g, ' ').trim();
}

async function main() {
  const query = encodeURIComponent(`author:${HANDLE} is:pr is:merged`);
  const search = await get(
    `https://api.github.com/search/issues?q=${query}&per_page=100&sort=updated`,
  );
  const prs = (search?.items ?? []).filter((item) => item.pull_request && item.repository_url);

  const byRepo = new Map();
  for (const pr of prs) {
    const fullName = pr.repository_url.replace('https://api.github.com/repos/', '');
    if (!byRepo.has(fullName)) byRepo.set(fullName, []);
    byRepo.get(fullName).push(pr);
  }

  const rows = [];
  for (const [repo, items] of [...byRepo.entries()].sort()) {
    const checked = [];
    let listedIn = null;
    for (const file of CREDIT_FILES) {
      const text = await get(
        `https://api.github.com/repos/${repo}/contents/${file}`,
        true,
      );
      if (text === null) continue;
      checked.push(file);
      if (!listedIn && NAME_PATTERNS.some((pattern) => pattern.test(text))) listedIn = file;
    }

    const status = listedIn
      ? `✅ Listed in \`${listedIn}\``
      : checked.length
        ? '⏳ No current credit file mentions me'
        : '— No credit file in repo root';

    const links = items
      .slice()
      .sort((a, b) => a.closed_at.localeCompare(b.closed_at))
      .map((item) => `[#${item.number}](${item.html_url})`)
      .join(', ');
    const latest = items.map((item) => item.closed_at).sort().at(-1)?.slice(0, 10) ?? '';

    rows.push(`| [${clean(repo)}](https://github.com/${repo}) | ${links} | ${items.length} | ${latest} | ${status} | ${clean(checked.join(', ') || 'none')} |`);
  }

  const generated = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
  const body = `# Contribution credit audit

Generated ${generated} from the GitHub API for [@${HANDLE}](https://github.com/${HANDLE}).
This is a heuristic check of common credit files in each repository root; a "✅" means one of the
files contains my handle or name. A repo with no credit file is not necessarily refusing credit —
GitHub's own contributors graph still records merged commits.

| Repository | Merged PRs | Count | Latest merge | Credit status | Files checked |
| --- | --- | ---: | --- | --- | --- |
${rows.join('\n')}

Total: **${prs.length} merged PRs** across **${byRepo.size} repositories**.

To request credit, open or comment on a merged PR *after* confirming the name is genuinely missing.
See [README.md](README.md) for the detailed "what I did" write-up and the status of each request.
`;

  await writeFile(join(process.cwd(), 'AUDIT.md'), body, 'utf8');
  console.log(`Wrote AUDIT.md with ${prs.length} merged PRs across ${byRepo.size} repositories.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
