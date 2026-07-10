# MesikaLabs Public-Site Repository Cleanup

Completed: 2026-07-10.

## Result

The MesikaLabs public-site family remains seven independent static repositories. The central hub owns family inventory and design guidance only; each product repository continues to own its HTML, CSS, JavaScript, assets, policies, sitemap, and deployment configuration.

## Canonical Repositories

| Site | Canonical local repository | GitHub repository |
| --- | --- | --- |
| MesikaLabs hub | `/Users/eliranmesika/Repos/mesikalabs-site` | `eliran-mesika/mesikalabs-site` |
| MathWar | `/Users/eliranmesika/Repos/mathwar-site` | `eliran-mesika/mathwar-site` |
| StorageCleaner | `/Users/eliranmesika/Repos/storagecleaner-site` | `eliran-mesika/storagecleaner-site` |
| PureShot | `/Users/eliranmesika/Repos/pureshot-site` | `eliran-mesika/pureshot-site` |
| Aura TV | `/Users/eliranmesika/Repos/auratv-site` | `eliran-mesika/auratv-site` |
| SmartPiece | `/Users/eliranmesika/Repos/smartpiece-site` | `eliran-mesika/smartpiece-site` |
| ClimbOS | `/Users/eliranmesika/Repos/climbos-site` | `eliran-mesika/climbos-site` |

## Cleanup Actions

- Closed Aura TV PR #3 without merge. Its Apple-only Premium wording was stale and superseded by current cross-platform policy language on `main`.
- Removed the Aura TV `codex/t008-premium-legal-copy` local and remote refs and pruned the stale `/private/tmp/auratv-site-t008` worktree metadata.
- Removed 18 approved local topic branches backed by merged PRs or direct ancestry proof.
- Removed 14 approved remote topic branches backed by merged PRs.
- Confirmed all seven canonical repositories now expose only `main` locally and on `origin`.
- Removed `/Users/eliranmesika/Repos/IphoneCleaner/storagecleaner-site` after confirming a clean worktree, zero unique commits, matching remote, and ancestry under canonical StorageCleaner `main`.
- Preserved `/Users/eliranmesika/Repos/IphoneCleaner` and the canonical StorageCleaner repository.
- Kept ClimbOS active as a separate support/legal site and added its repository-local design contract.
- Corrected ClimbOS homepage heading hierarchy and declared browser/touch icons on all public pages.

## Asset Decision

No tracked media was deleted and no Git history was rewritten.

- StorageCleaner campaign videos and Aura TV product screenshots are actively referenced.
- SmartPiece and MathWar screenshots/icons are active product proof.
- Hub source PNGs and StorageCleaner full-resolution screenshots are intentionally retained under their design contracts.
- PureShot review captures remain public review/source evidence until app-repository ownership and review dependencies are proven.

Future image conversion, video re-encoding, or review-evidence archival must be handled as separate repository-owned changes with before/after bytes and rendered browser proof.

## Verification

- Every canonical repository was clean on `main` and synchronized with `origin/main` before final handover.
- Internal references, asset paths, one-`h1` structure, and heading order passed across every HTML page in all seven repositories.
- Local static routes returned `200` for home, support, privacy, terms, robots, sitemap, LLM summary, and available blog/feed routes.
- GitHub Pages reported `built`, approved custom domains, and HTTPS enforcement for all seven sites.
- Live route checks returned `200` across all seven domains and their support/legal/SEO routes.
- Chrome checks at mobile and desktop sizes confirmed no document-width overflow, no clipped text, and successful first-viewport image loading on the hub and changed ClimbOS surface.

## Guardrails Preserved

- No product repositories were merged or centralized.
- No DNS, GitHub Pages settings, App Store Connect, or Google Play Console state was changed.
- No prohibited MathWar docs or backup path was read or modified during cleanup execution.
- No GitHub repository, release, canonical checkout, or parent application repository was deleted.
