# My Open-Source Contributions — rva.creates

Hi, I'm **Ayush Nandi** ([@ayushnandi718-dev](https://github.com/ayushnandi718-dev)), also known as **rva.creates**. This repository is a living shout-out board for the work I've shipped in **other people's** public repositories, what each change actually did, and whether maintainers have credited me for it. My own projects are intentionally not listed here.

**Snapshot:** 2026-11-24 · **14 merged pull requests** · **7 external repositories**

> I only ask for contributor credit after checking a repo's contributor list first. The exact list, evidence and pending requests are in [AUDIT.md](AUDIT.md) and refreshed automatically every week.

---

## Highlights

### Session expiry that doesn't log out the wrong user — TaskFlow #109

When an API call returned `401`, TaskFlow cleared the token but left the user stranded on the page. I added a `setUnauthorizedHandler(fn)` bridge in the shared axios client so `AuthContext` can own the response without `api.js` importing React. The handler logs out once, redirects to `/login`, and shows one toast. Login/signup `401`s are excluded, and a stale `401` from a previous session can't log out a freshly signed-in user because the interceptor compares the request's token with the current one.

[PR #109](https://github.com/KEX-03/taskflow/pull/109) · credited in the project changelog and GitHub's contributor graph.

### Three zero-dependency fixes in env-saaf

- **#330 — array `choices`:** choices were compared against the whole coerced array, so they could never match. Fixed in all four layers: runtime validation, schema validation, generated JSON Schema (`items.enum`) and `.env.example` generation — with tests for int/boolean items, defaults, `minItems`/`maxItems`, `unique` and separators.
- **#331 — JSON Schema meta-tests:** added a hand-rolled structural checker for draft 2020-12 and ran it against full `toJsonSchema` exports, including negative cases. No runtime dependencies added.
- **#332 — structured error details:** `EnvSaafError.details` and the non-throwing result now expose `{ key, message }` entries that mirror `errors` one-to-one, without changing a single printable string. Approved, then merged.

[PR #330](https://github.com/abhi478jeetur-rgb/env-saaf/pull/330) · [PR #331](https://github.com/abhi478jeetur-rgb/env-saaf/pull/331) · [PR #332](https://github.com/abhi478jeetur-rgb/env-saaf/pull/332)

### Making a dashboard screen-reader friendly — TickerNet #43

Named all 16 icon-only `v-btn`s, the native table row-action buttons in `CronTicker.vue`/`TimeTicker.vue`, and the time zone control; turned the clickable header `div`s into one real `<router-link to="/">`; and added an AST-based regression test that scans every Vue SFC and fails on a new unnamed icon button. `npm ci`, `npm run build` and `npm test` pass (50 tests), and the test was mutation-checked by deleting a label. The reviewer approved and it's merged.

[PR #43](https://github.com/TickerNet/TickerNet/pull/43) · merged after review.

### Rebuilding a frontend — OrbitDine #1–#4

For OrbitDine I shipped the full Next.js frontend (marketing, dashboard, auth, admin, customer portal), removed the old backend, and fixed the production build by adding the missing Capacitor packages.

[PRs #1–#4](https://github.com/shaurya-crypto/OrbitDine/pull/4)

---

## All merged contributions

| Repository | PR(s) | What I did | Date |
| --- | --- | --- | --- |
| [abhi478jeetur-rgb/env-saaf](https://github.com/abhi478jeetur-rgb/env-saaf) | [#330](https://github.com/abhi478jeetur-rgb/env-saaf/pull/330), [#331](https://github.com/abhi478jeetur-rgb/env-saaf/pull/331), [#332](https://github.com/abhi478jeetur-rgb/env-saaf/pull/332) | Fixed per-item array `choices`; added JSON Schema meta-tests; exposed structured `{ key, message }` error details without changing output. | 2026-11-24 |
| [TickerNet/TickerNet](https://github.com/TickerNet/TickerNet) | [#22](https://github.com/TickerNet/TickerNet/pull/22), [#24](https://github.com/TickerNet/TickerNet/pull/24), [#43](https://github.com/TickerNet/TickerNet/pull/43) | Rewrote the Dashboard package README (install, setup, every public builder member, correct auth docs); completed EF Core and Utilities READMEs; added accessible labels to all icon-only dashboard buttons and an AST regression test. | 2026-11-24 |
| [KEX-03/taskflow](https://github.com/KEX-03/taskflow) | [#109](https://github.com/KEX-03/taskflow/pull/109) | Fixed expired-session handling: single logout/toast, redirect, stale-token guard, login/signup exclusions. | 2026-11-24 |
| [shaurya-crypto/OrbitDine](https://github.com/shaurya-crypto/OrbitDine) | [#1](https://github.com/shaurya-crypto/OrbitDine/pull/1)–[#4](https://github.com/shaurya-crypto/OrbitDine/pull/4) | Replaced the web app with the full Next.js frontend, removed the old backend, and fixed the production build with Capacitor packages. | 2026-08-07 → 08 |
| [0ex/more-awesome](https://github.com/0ex/more-awesome) | [#419](https://github.com/0ex/more-awesome/pull/419) | Added a System Design entry under Back-End Development linking to the system-design-primer. | 2026-10-24 |
| [firstcontributions/first-contributions](https://github.com/firstcontributions/first-contributions) | [#127060](https://github.com/firstcontributions/first-contributions/pull/127060) | Added my name to `Contributors.md` — my first open-source contribution. | 2026-10-21 |
| [refined-github/refined-github](https://github.com/refined-github/refined-github) | [#9788](https://github.com/refined-github/refined-github/pull/9788) | Replaced outdated `.Layout-sidebar` class selectors. | 2026-07-10 |

## Credit status

| Repository | Status | Evidence |
| --- | --- | --- |
| TickerNet | ✅ Listed | `CONTRIBUTORS.md` names `rva.creates (@ayushnandi718-dev)`. |
| firstcontributions | ✅ Listed | `Contributors.md` entry added by #127060. |
| KEX-03/taskflow | ✅ Credited | Changelog thanks + GitHub contributors graph; maintainer confirmed no separate file is kept. |
| env-saaf | ✅ Confirmed, queued | Maintainer [confirmed](https://github.com/abhi478jeetur-rgb/env-saaf/pull/332#issuecomment-7124877202) all three PRs are merged and I'm counted among contributors. The README list is updated in batches; my name is queued for the next docs pass. ([attribution link](https://github.com/abhi478jeetur-rgb/env-saaf/commits?author=ayushnandi718-dev&since=2026-11-23&until=2026-11-24)) |
| shaurya-crypto/OrbitDine | ⏳ Requested | [Credit request](https://github.com/shaurya-crypto/OrbitDine/pull/4#issuecomment-7124532268). |
| 0ex/more-awesome | ⏳ Requested | [Credit request](https://github.com/0ex/more-awesome/pull/419#issuecomment-7124532308). |
| refined-github/refined-github | ⏳ Asked | [Polling comment](https://github.com/refined-github/refined-github/pull/9788#issuecomment-7124532326). |

## Keeping an eye on it

- [`scripts/refresh-audit.mjs`](scripts/refresh-audit.mjs) queries the GitHub API for my merged PRs, checks each repo's contributor/credit files, and regenerates [`AUDIT.md`](AUDIT.md).
- [`.github/workflows/refresh-audit.yml`](.github/workflows/refresh-audit.yml) runs it every Monday and commits any changes, so the credit table never goes stale.

Run it locally with `GITHUB_TOKEN=$(gh auth token) node scripts/refresh-audit.mjs`.

---

**Handle:** [@ayushnandi718-dev](https://github.com/ayushnandi718-dev) · **Name:** rva.creates / Ayush Nandi
