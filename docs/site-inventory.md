# MesikaLabs Site Inventory

Last checked: 2026-07-10.

This document records the canonical local repository for each MesikaLabs public site. Use it before editing public website copy, App Store support URLs, privacy URLs, SEO files, or domain settings.

## Canonical Sites

| Domain | Canonical local repo | GitHub remote | Hosting | Live status | Notes |
| --- | --- | --- | --- | --- | --- |
| `mesikalabs.com` | `/Users/eliranmesika/Repos/mesikalabs-site` | `eliran-mesika/mesikalabs-site` | GitHub Pages, `main` branch root | HTTPS 200, certificate approved, HTTPS enforced | Central MesikaLabs app hub. Do not duplicate app subdomain content here. |
| `mathwar.mesikalabs.com` | `/Users/eliranmesika/Repos/mathwar-site` | `eliran-mesika/mathwar-site` | GitHub Pages, `main` branch root | HTTPS 200, certificate approved, HTTPS enforced | Dedicated MathWar public site. This is the source to update for MathWar App Store support, privacy, terms, and marketing pages. |
| `pureshot.mesikalabs.com` | `/Users/eliranmesika/Repos/pureshot-site` | `eliran-mesika/pureshot-site` | GitHub Pages, `main` branch root | HTTPS 200, certificate approved, HTTPS enforced | Dedicated PureShot public site. |
| `auratv.mesikalabs.com` | `/Users/eliranmesika/Repos/auratv-site` | `eliran-mesika/auratv-site` | GitHub Pages, `main` branch root | HTTPS 200, certificate approved, HTTPS enforced | Dedicated Aura TV public site. |
| `smartpiece.mesikalabs.com` | `/Users/eliranmesika/Repos/smartpiece-site` | `eliran-mesika/smartpiece-site` | GitHub Pages, `main` branch root | HTTPS 200, certificate approved, HTTPS enforced | Dedicated SmartPiece public site. `/Users/eliranmesika/Repos/SmartPiece` is the Godot product source of truth, not the website host. |
| `climbos.mesikalabs.com` | `/Users/eliranmesika/Repos/climbos-site` | `eliran-mesika/climbos-site` | GitHub Pages, `main` branch root | HTTPS 200, certificate approved, HTTPS enforced | Active dedicated ClimbOS support, privacy, terms, and concise product site. |
| `storagecleaner.mesikalabs.com` | `/Users/eliranmesika/Repos/storagecleaner-site` | `eliran-mesika/storagecleaner-site` | GitHub Pages, `main` branch root | HTTPS 200, certificate approved, HTTPS enforced | Root-level local checkout is canonical after fast-forwarding to `origin/main`. |

## Duplicate Or Legacy Paths

Do not edit these paths for public-site changes unless the canonical repo above is deliberately changed first.

| Path | Status | Reason |
| --- | --- | --- |
| `/Users/eliranmesika/Repos/IphoneCleaner/storagecleaner-site` | Removed 2026-07-10 | The duplicate was clean, zero commits ahead of canonical `main`, and its HEAD was an ancestor of canonical `main` immediately before deletion. The parent iPhone application repository was not changed. |
| `/Users/eliranmesika/Documents/MathWar/docs` | App-repo docs site copy | Contains `CNAME = mathwar.mesikalabs.com`, but the app repo should not be the public-site source while `/Users/eliranmesika/Repos/mathwar-site` exists. |
| `/Users/eliranmesika/Repos/MathWar/docs` | Old/separate MathWar checkout docs | Contains `CNAME = mathwar.mesikalabs.com`; do not use for the active public site. |
| `/Users/eliranmesika/Documents/MathWar.git-corrupt-backup-20260706-184531/docs` | Backup only | Historical backup. Never use as a source of truth. |

## Operational Rules

- Update the canonical repo for the domain, not an app repo copy or backup.
- Share design guidance, inventory, and validation conventions only. Runtime HTML, CSS, JavaScript, and product assets remain owned by each canonical repository.
- Before deleting a duplicate local checkout, verify the canonical repo has the same remote, contains all needed content, and is clean after push.
- Do not make Route53 changes from the `settingai` AWS account. These domains belong to MesikaLabs app/site infrastructure, not SettingAI infrastructure.
- Route53 changes are only allowed after confirming the active AWS account/profile is the correct MesikaLabs/app-domain account.
- For app support pages, use app-specific support addresses when they exist. Use `support@mesikalabs.com` for MathWar until a dedicated MathWar address exists.
- Use `privacy@mesikalabs.com` for privacy pages and `legal@mesikalabs.com` for terms/legal pages.

## Current Follow-Up Items

1. Keep SmartPiece public claims aligned with the Godot runtime repository and do not claim store availability without verified store state.
2. Keep ClimbOS live as a separate support/legal site; add it to the flagship hub showcase only when product positioning and visual proof are ready.
3. Keep future cleanup deletion-last: verify canonical ownership, recoverability, and live state before removing local duplicates or Git refs.
