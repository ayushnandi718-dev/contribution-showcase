# Contribution credit audit

Manually maintained by [@ayushnandi718-dev](https://github.com/ayushnandi718-dev). Last updated 2026-11-24.

Covers all 33 authored PRs plus 3 reviews in repositories owned by other users — my own projects are intentionally excluded. The full "what I did" write-up is in [README.md](README.md).

## Summary

| Status | PRs | Repositories |
| --- | ---: | ---: |
| Merged | 14 | 7 |
| Open / in review | 13 | 12 |
| Closed without merge | 6 | 5 |
| Reviews on others' PRs | 3 | 1 |
| **Total** | **36** | **21** |

The "Involves me" view also shows 3 PRs that are excluded by design: [TickerNet #41](https://github.com/TickerNet/TickerNet/pull/41) (maintainer's PR that credited me — used as evidence below, not my contribution) and two PRs by other contributors in my own repos (`TO-DO-LIST#1`, `Ayush-Nandi#2`).

## Credit status for merged work

A "✅" means the repository's contributor/credit files contain my handle or name. A repo with no credit file is not necessarily refusing credit — GitHub's contributors graph still records merged commits.

| Repository | Merged PRs | Credit status | Evidence |
| --- | --- | --- | --- |
| [abhi478jeetur-rgb/env-saaf](https://github.com/abhi478jeetur-rgb/env-saaf) | #330, #331, #332 | ✅ Confirmed, queued | [Maintainer confirmation](https://github.com/abhi478jeetur-rgb/env-saaf/pull/332#issuecomment-7124877202) — all three PRs merged and counted; README list updated in batches, my name queued. |
| [TickerNet/TickerNet](https://github.com/TickerNet/TickerNet) | #22, #24, #43 | ✅ Listed | [#41](https://github.com/TickerNet/TickerNet/pull/41) added `rva.creates (@ayushnandi718-dev)` to [`CONTRIBUTORS.md`](https://github.com/TickerNet/TickerNet/blob/main/CONTRIBUTORS.md). |
| [KEX-03/taskflow](https://github.com/KEX-03/taskflow) | #109 | ✅ Credited | [`CHANGELOG.md`](https://github.com/KEX-03/taskflow/blob/main/CHANGELOG.md) thanks `@ayushnandi718-dev`; maintainer confirmed no separate contributor file is kept. |
| [firstcontributions/first-contributions](https://github.com/firstcontributions/first-contributions) | #127060 | ✅ Listed | [`Contributors.md`](https://github.com/firstcontributions/first-contributions/blob/main/Contributors.md) entry added by #127060. |
| [shaurya-crypto/OrbitDine](https://github.com/shaurya-crypto/OrbitDine) | #1–#4 | ⏳ Requested | [Credit request](https://github.com/shaurya-crypto/OrbitDine/pull/4#issuecomment-7124532268) — no maintainer response yet. |
| [0ex/more-awesome](https://github.com/0ex/more-awesome) | #419 | ⏳ Requested | [Credit request](https://github.com/0ex/more-awesome/pull/419#issuecomment-7124532308) — no maintainer response yet. |
| [refined-github/refined-github](https://github.com/refined-github/refined-github) | #9788 | ⏳ Asked | [Polling comment](https://github.com/refined-github/refined-github/pull/9788#issuecomment-7124532326) — no maintainer response yet. |

## Unresolved contributions needing action

| Repository | PR | Blocker |
| --- | --- | --- |
| [medusajs/medusa](https://github.com/medusajs/medusa) | #17401 | Guardrail bot closed it for a missing linked issue. I opened [#17977](https://github.com/medusajs/medusa/issues/17977), asked for assignment and relinked the PR, but the bot flagged the issue for its own automatic fix; those issues are never assigned to contributors. [Final maintainer ping](https://github.com/medusajs/medusa/pull/17401#issuecomment-7125287705) posted. |
| [PrefectHQ/prefect](https://github.com/PrefectHQ/prefect) | #24087 | Unrelated flaky `TaskRunWaiter` timeout in CI; rerun requested from maintainers. |
| [academic/awesome-datascience](https://github.com/academic/awesome-datascience) | #736 | Maintainer requires a $1 monthly tip for the paid course. |
| [tldr-pages/tldr](https://github.com/tldr-pages/tldr) | #23099, #23100 | CLA not signed. |
| [KEX-03/taskflow](https://github.com/KEX-03/taskflow) | #82 | Reserved as good-first-issue; closed by maintainer (do not touch). |

The remaining open PRs in [README.md](README.md) are awaiting maintainer review. On 2026-11-24, one-time review requests were posted on the eight that had no feedback: [SoterCare #2](https://github.com/SoterCare/awesome-student-resources/pull/2#issuecomment-7125268158), [bobeff #21](https://github.com/bobeff/programming-math-science/pull/21#issuecomment-7125268849), [lauragift21 #244](https://github.com/lauragift21/awesome-learning-resources/pull/244#issuecomment-7125269498), [GDGAhmedabad #407](https://github.com/GDGAhmedabad/Awesome-Learning-Resources/pull/407#issuecomment-7125270210), [shahednasser #889](https://github.com/shahednasser/awesome-resources/pull/889#issuecomment-7125270831), [LeetHub #255](https://github.com/arunbhardwaj/LeetHub-2.0/pull/255#issuecomment-7125271395), [esp32-ai #11](https://github.com/slvDev/esp32-ai/pull/11#issuecomment-7125272070), [esp32-ai #12](https://github.com/slvDev/esp32-ai/pull/12#issuecomment-7125272749). No repeat pings planned.

Credit requests remain unanswered on OrbitDine #4, more-awesome #419 and refined-github #9788 (fregante's only comment is the original merge-time thanks). env-saaf confirmed the user is counted and queued for the README list. Prefect #24087 still has one red unrelated flaky test (`test_restarted_stream_reconciles_older_completions[0]`, Python 3.14 / Postgres 14) out of 163 checks; rerun requested, cannot self-rerun.
