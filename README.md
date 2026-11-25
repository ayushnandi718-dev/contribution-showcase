# My Open-Source Contributions — rva.creates

Hi, I'm **Ayush Nandi** ([@ayushnandi718-dev](https://github.com/ayushnandi718-dev)), also known as **rva.creates**. This repository is a shout-out board for every contribution I've made to **other people's** public repositories — authored pull requests (merged, in review, or closed), code reviews on other people's PRs, and issues I reported. My own projects are intentionally not listed here.

**Snapshot:** 2026-11-25 · **35 authored pull requests + 3 reviews + 5 issues** · **24 external repositories** · 15 merged · 14 open · 6 closed without merge

> Entries are added manually and show their real status — nothing here is generated automatically. Contributor-credit checks are in [AUDIT.md](AUDIT.md).

---

## Highlights from merged work

### Session expiry that doesn't log out the wrong user — TaskFlow #109

When an API call returned `401`, TaskFlow cleared the token but left the user stranded on the page. I added a `setUnauthorizedHandler(fn)` bridge in the shared axios client so `AuthContext` can own the response without `api.js` importing React. The handler logs out once, redirects to `/login`, and shows one toast. Login/signup `401`s are excluded, and a stale `401` from a previous session can't log out a freshly signed-in user because the interceptor compares the request's token with the current one.

[PR #109](https://github.com/KEX-03/taskflow/pull/109) · all 8 CI checks green, merged. Credited in the project changelog and GitHub's contributor graph.

### Three zero-dependency fixes in env-saaf

- **#330 — array `choices`:** choices were compared against the whole coerced array, so they could never match. Fixed in runtime validation, schema validation, generated JSON Schema (`items.enum`) and `.env.example` generation.
- **#331 — JSON Schema meta-tests:** added a hand-rolled structural checker for draft 2020-12 and ran it against full `toJsonSchema` exports, including negative cases. No runtime dependencies added.
- **#332 — structured error details:** `EnvSaafError.details` and the non-throwing result now expose `{ key, message }` entries that mirror `errors` one-to-one, without changing a single printable string.

[PR #330](https://github.com/abhi478jeetur-rgb/env-saaf/pull/330) · [PR #331](https://github.com/abhi478jeetur-rgb/env-saaf/pull/331) · [PR #332](https://github.com/abhi478jeetur-rgb/env-saaf/pull/332) — all merged.

### Making a dashboard screen-reader friendly — TickerNet

Named all 16 icon-only `v-btn`s, the native table row-action buttons in `CronTicker.vue`/`TimeTicker.vue`, and the time zone control; added an AST-based regression test that scans every Vue SFC and fails on a new unnamed icon button. `npm ci`, `npm run build` and `npm test` pass (50 tests), and the test was mutation-checked by deleting a label.

[PR #43](https://github.com/TickerNet/TickerNet/pull/43) · approved, CI green, merged.

### Rebuilding a frontend — OrbitDine #1–#4

For OrbitDine I shipped the full Next.js frontend (marketing, dashboard, auth, admin, customer portal), removed the old backend, and fixed the production build by adding the missing Capacitor packages.

[PRs #1–#4](https://github.com/shaurya-crypto/OrbitDine/pull/4)

---

## Merged contributions (14)

| Repository | PR(s) | What I did | Date |
| --- | --- | --- | --- |
| [abhi478jeetur-rgb/env-saaf](https://github.com/abhi478jeetur-rgb/env-saaf) | [#330](https://github.com/abhi478jeetur-rgb/env-saaf/pull/330), [#331](https://github.com/abhi478jeetur-rgb/env-saaf/pull/331), [#332](https://github.com/abhi478jeetur-rgb/env-saaf/pull/332) | Fixed per-item array `choices`; added JSON Schema meta-tests; exposed structured `{ key, message }` error details. | 2026-11-24 |
| [TickerNet/TickerNet](https://github.com/TickerNet/TickerNet) | [#22](https://github.com/TickerNet/TickerNet/pull/22), [#24](https://github.com/TickerNet/TickerNet/pull/24), [#43](https://github.com/TickerNet/TickerNet/pull/43) | Rewrote Dashboard/EF Core/Utilities READMEs; added accessible labels to icon-only controls and an AST regression test. | 2026-11-24 |
| [KEX-03/taskflow](https://github.com/KEX-03/taskflow) | [#109](https://github.com/KEX-03/taskflow/pull/109) | Fixed expired-session handling: single logout/toast, redirect, stale-token guard. | 2026-11-24 |
| [shaurya-crypto/OrbitDine](https://github.com/shaurya-crypto/OrbitDine) | [#1](https://github.com/shaurya-crypto/OrbitDine/pull/1)–[#4](https://github.com/shaurya-crypto/OrbitDine/pull/4) | Full Next.js frontend, removed old backend, fixed production build with Capacitor packages. | 2026-08-07 → 08 |
| [0ex/more-awesome](https://github.com/0ex/more-awesome) | [#419](https://github.com/0ex/more-awesome/pull/419) | Added System Design entry under Back-End Development. | 2026-10-24 |
| [firstcontributions/first-contributions](https://github.com/firstcontributions/first-contributions) | [#127060](https://github.com/firstcontributions/first-contributions/pull/127060) | Added my name to `Contributors.md` — my first open-source contribution. | 2026-10-21 |
| [refined-github/refined-github](https://github.com/refined-github/refined-github) | [#9788](https://github.com/refined-github/refined-github/pull/9788) | Replaced outdated `.Layout-sidebar` class selectors. | 2026-07-10 |

## Open contributions — in review (15)

| Repository | PR | What I did | Status |
| --- | --- | --- | --- |
| [arunbhardwaj/LeetHub-2.0](https://github.com/arunbhardwaj/LeetHub-2.0) | [#255](https://github.com/arunbhardwaj/LeetHub-2.0/pull/255) | Multi-platform support, difficulty folders, custom commits and auto README. | Open — no maintainer feedback yet. |
| [bobeff/programming-math-science](https://github.com/bobeff/programming-math-science) | [#21](https://github.com/bobeff/programming-math-science/pull/21) | Added "Git from the Inside Out" to Version control tools. | Open — no maintainer feedback yet. |
| [e2b-dev/fragments](https://github.com/e2b-dev/fragments) | [#233](https://github.com/e2b-dev/fragments/pull/233) | Fix race condition in sandbox multi-file writes. | Open — awaiting review. |
| [erkamyaman/unslop-anything](https://github.com/erkamyaman/unslop-anything) | [#110](https://github.com/erkamyaman/unslop-anything/pull/110) | Extended SwiftUI `sparkle-icon` detection to match quoted SF Symbols such as `sparkles.rectangle.stack` and `wand.and.sparkles`, with regression tests. | Merged — all CodeRabbit findings addressed through `f9e882f` (74/74 root tests, 21/21 research tests locally); fork-PR `Test` runs expired awaiting approval, but the squash-merge run on `main` passed. Claimed issue #107 first. |
| [GDGAhmedabad/Awesome-Learning-Resources](https://github.com/GDGAhmedabad/Awesome-Learning-Resources) | [#407](https://github.com/GDGAhmedabad/Awesome-Learning-Resources/pull/407) | Added "The Rust Programming Language" official book. | Open — no maintainer feedback yet. |
| [lauragift21/awesome-learning-resources](https://github.com/lauragift21/awesome-learning-resources) | [#244](https://github.com/lauragift21/awesome-learning-resources/pull/244) | Added official Go documentation to Golang resources. | Open — no maintainer feedback yet. |
| [matthiasn/talk-transcripts](https://github.com/matthiasn/talk-transcripts) | [#122](https://github.com/matthiasn/talk-transcripts/pull/122) | Added a transcript of Stuart Sierra's *Thinking In Data* and linked it from the speaker index, closing issue #98. | Open — awaiting review; transcript generated from the talk's auto-generated captions because InfoQ has no public transcript text. |
| [nteract/papermill](https://github.com/nteract/papermill) | [#895](https://github.com/nteract/papermill/pull/895) | Added citation instructions for academic papers. | Open — awaiting review. |
| [PrefectHQ/prefect](https://github.com/PrefectHQ/prefect) | [#24087](https://github.com/PrefectHQ/prefect/pull/24087) | RFC-correct `Retry-After` handling in concurrency slot acquisition. | Open — all checks green (159 success, 4 skipped); awaiting maintainer review. |
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | [#11115](https://github.com/shadcn-ui/ui/pull/11115) | Sidebar: exclude Shift and Alt modifiers from keyboard shortcut. | Open — awaiting review. |
| [shahednasser/awesome-resources](https://github.com/shahednasser/awesome-resources) | [#889](https://github.com/shahednasser/awesome-resources/pull/889) | Added System Design Primer under System Design. | Open — no maintainer feedback yet. |
| [shaurya-crypto/OrbitDine](https://github.com/shaurya-crypto/OrbitDine) | [#5](https://github.com/shaurya-crypto/OrbitDine/pull/5) | Revert of the Capacitor production-build fix. | Open — awaiting maintainer decision. |
| [slvDev/esp32-ai](https://github.com/slvDev/esp32-ai) | [#11](https://github.com/slvDev/esp32-ai/pull/11), [#12](https://github.com/slvDev/esp32-ai/pull/12) | Verified model artifact downloader + gitignore docs; end-to-end reproducibility CI. | Open — no maintainer feedback yet. |
| [SoterCare/awesome-student-resources](https://github.com/SoterCare/awesome-student-resources) | [#2](https://github.com/SoterCare/awesome-student-resources/pull/2) | Added Exercism to interview preparation. | Open — one-time review request posted 2026-11-24. |

One-time review requests were posted on 2026-11-24 on the eight open PRs that had no maintainer feedback (the awesome-list PRs, LeetHub #255, esp32-ai #11/#12). Talk-transcripts #122 was not pinged separately: it directly fulfills the issue I claimed in #98.

## Closed without merge (6)

| Repository | PR | What I did | Why it closed |
| --- | --- | --- | --- |
| [academic/awesome-datascience](https://github.com/academic/awesome-datascience) | [#736](https://github.com/academic/awesome-datascience/pull/736) | Added Made With ML free course. | Maintainer asked for a $1 monthly tip because the linked course is paid. |
| [KEX-03/taskflow](https://github.com/KEX-03/taskflow) | [#82](https://github.com/KEX-03/taskflow/pull/82) | Error toast when loading/deleting tasks fails. | Reserved as a good-first-issue for newcomers; closed by maintainer. |
| [medusajs/medusa](https://github.com/medusajs/medusa) | [#17401](https://github.com/medusajs/medusa/pull/17401) | Gift card creation in comma-decimal locales. | Guardrail bot closed it; replacement issue [#17977](https://github.com/medusajs/medusa/issues/17977) was auto-flagged for the bot's own fix and closed after bot PR #17978 merged, so it could not be reassigned to me. Maintainer pinged. |
| [PrefectHQ/prefect](https://github.com/PrefectHQ/prefect) | [#23519](https://github.com/PrefectHQ/prefect/pull/23519) | Automation delete-all CLI change. | Superseded — equivalent fix merged in #23521. |
| [tldr-pages/tldr](https://github.com/tldr-pages/tldr) | [#23099](https://github.com/tldr-pages/tldr/pull/23099), [#23100](https://github.com/tldr-pages/tldr/pull/23100) | Added `net` pages. | CLA not signed. |

## Reviews on other people's PRs (3)

These are not my PRs — I reviewed them. Listed for completeness because the work was done in someone else's repository.

| Repository | PR | My review | Date |
| --- | --- | --- | --- |
| [nteract/papermill](https://github.com/nteract/papermill) | [#865](https://github.com/nteract/papermill/pull/865) (by Br1an67) | ✅ Approved — nbformat minimum bump for NumPy 2.0. | 2026-07-08 |
| [nteract/papermill](https://github.com/nteract/papermill) | [#890](https://github.com/nteract/papermill/pull/890) (by dhruvatr) | ✅ Approved — grammar fix in stale-PR notification. | 2026-07-08 |
| [nteract/papermill](https://github.com/nteract/papermill) | [#892](https://github.com/nteract/papermill/pull/892) (by paranoa233) | 💬 Commented — copying parameter cell metadata. | 2026-07-08 |

## Issues I opened in other people's repos (5)

| Repository | Issue | What I reported | Status |
| --- | --- | --- | --- |
| [medusajs/medusa](https://github.com/medusajs/medusa) | [#17977](https://github.com/medusajs/medusa/issues/17977) | Loyalty gift cards fail in comma-decimal locales. | Closed — maintainer closed it after bot PR [#17978](https://github.com/medusajs/medusa/pull/17978) merged; my PR #17401 remains closed/not merged. |
| [facebook/react](https://github.com/facebook/react) | [#36996](https://github.com/facebook/react/issues/36996) | `useState` batching in React 19.2.x event handlers. | Closed as stale / unconfirmed. |
| [facebook/react](https://github.com/facebook/react) | [#36997](https://github.com/facebook/react/issues/36997) | Bug report (empty template). | Closed as unconfirmed. |
| [tldr-pages/tldr](https://github.com/tldr-pages/tldr) | [#23101](https://github.com/tldr-pages/tldr/issues/23101) | Page request: `pipx`. | Closed. |
| [tldr-pages/tldr](https://github.com/tldr-pages/tldr) | [#23102](https://github.com/tldr-pages/tldr/issues/23102) | Page request: `act`. | Closed. |

---

## Credit status (merged work)

| Repository | Status | Evidence |
| --- | --- | --- |
| [TickerNet/TickerNet](https://github.com/TickerNet/TickerNet) | ✅ Listed | `CONTRIBUTORS.md` names `rva.creates (@ayushnandi718-dev)`. |
| [firstcontributions/first-contributions](https://github.com/firstcontributions/first-contributions) | ✅ Listed | `Contributors.md` entry added by #127060. |
| [KEX-03/taskflow](https://github.com/KEX-03/taskflow) | ✅ Credited | Changelog thanks + GitHub contributors graph; maintainer confirmed no separate file is kept. |
| [abhi478jeetur-rgb/env-saaf](https://github.com/abhi478jeetur-rgb/env-saaf) | ✅ Confirmed, queued | Maintainer [confirmed](https://github.com/abhi478jeetur-rgb/env-saaf/pull/332#issuecomment-7124877202) all three PRs are merged and I'm counted among contributors; name queued for the next docs pass. |
| [shaurya-crypto/OrbitDine](https://github.com/shaurya-crypto/OrbitDine) | ✅ Listed | The repo's Contributors sidebar lists `shaurya-crypto` and `ayushnandi718-dev` (verified 2026-11-24); [credit request](https://github.com/shaurya-crypto/OrbitDine/pull/4#issuecomment-7124532268) is now resolved. |
| [0ex/more-awesome](https://github.com/0ex/more-awesome) | ⏳ Requested | [Credit request](https://github.com/0ex/more-awesome/pull/419#issuecomment-7124532308). |
| [refined-github/refined-github](https://github.com/refined-github/refined-github) | ⏳ Asked | [Polling comment](https://github.com/refined-github/refined-github/pull/9788#issuecomment-7124532326). |

Details in [AUDIT.md](AUDIT.md).

---

**Handle:** [@ayushnandi718-dev](https://github.com/ayushnandi718-dev) · **Name:** rva.creates / Ayush Nandi
