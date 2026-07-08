# MesikaLabs Site Inventory

Last checked: 2026-07-09.

This document records the canonical local repository for each MesikaLabs public site. Use it before editing public website copy, App Store support URLs, privacy URLs, SEO files, or domain settings.

## Canonical Sites

| Domain | Canonical local repo | GitHub remote | Hosting | Live status | Notes |
| --- | --- | --- | --- | --- | --- |
| `mesikalabs.com` | `/Users/eliranmesika/Repos/mesikalabs-site` | `eliran-mesika/mesikalabs-site` | GitHub Pages, `main` branch root | HTTPS 200, certificate approved, HTTPS enforced | Central MesikaLabs app hub. Do not duplicate app subdomain content here. |
| `mathwar.mesikalabs.com` | `/Users/eliranmesika/Repos/mathwar-site` | `eliran-mesika/mathwar-site` | GitHub Pages, `main` branch root | HTTP works, HTTPS certificate missing | Dedicated MathWar public site. This is the source to update for MathWar App Store support, privacy, terms, and marketing pages. |
| `pureshot.mesikalabs.com` | `/Users/eliranmesika/Repos/pureshot-site` | `eliran-mesika/pureshot-site` | GitHub Pages, `main` branch root | HTTPS 200, certificate approved, HTTPS enforced | Dedicated PureShot public site. |
| `auratv.mesikalabs.com` | `/Users/eliranmesika/Repos/auratv-site` | `eliran-mesika/auratv-site` | GitHub Pages, `main` branch root | HTTPS 200, certificate approved, HTTPS enforced | Dedicated Aura TV public site. |
| `climbos.mesikalabs.com` | `/Users/eliranmesika/Repos/climbos-site` | `eliran-mesika/climbos-site` | GitHub Pages, `main` branch root | HTTPS 200, certificate approved, HTTPS enforced | Dedicated ClimbOS public site. Needs the same AGENTS/SEO hygiene as the other app sites. |
| `storagecleaner.mesikalabs.com` | `/Users/eliranmesika/Repos/storagecleaner-site` | `eliran-mesika/storagecleaner-site` | GitHub Pages, `main` branch root | HTTPS 200, certificate approved, HTTPS enforced | Root-level local checkout is canonical after fast-forwarding to `origin/main`. |

## Duplicate Or Legacy Paths

Do not edit these paths for public-site changes unless the canonical repo above is deliberately changed first.

| Path | Status | Reason |
| --- | --- | --- |
| `/Users/eliranmesika/Repos/IphoneCleaner/storagecleaner-site` | Duplicate local checkout | Same `eliran-mesika/storagecleaner-site` remote as the canonical root-level checkout. Keep only as a legacy local copy until we decide to archive/delete it. |
| `/Users/eliranmesika/Documents/MathWar/docs` | App-repo docs site copy | Contains `CNAME = mathwar.mesikalabs.com`, but the app repo should not be the public-site source while `/Users/eliranmesika/Repos/mathwar-site` exists. |
| `/Users/eliranmesika/Repos/MathWar/docs` | Old/separate MathWar checkout docs | Contains `CNAME = mathwar.mesikalabs.com`; do not use for the active public site. |
| `/Users/eliranmesika/Documents/MathWar.git-corrupt-backup-20260706-184531/docs` | Backup only | Historical backup. Never use as a source of truth. |

## Operational Rules

- Update the canonical repo for the domain, not an app repo copy or backup.
- Before deleting a duplicate local checkout, verify the canonical repo has the same remote, contains all needed content, and is clean after push.
- Do not make Route53 changes from the `settingai` AWS account. These domains belong to MesikaLabs app/site infrastructure, not SettingAI infrastructure.
- Route53 changes are only allowed after confirming the active AWS account/profile is the correct MesikaLabs/app-domain account.
- For app support pages, use app-specific support addresses when they exist. Use `support@mesikalabs.com` for MathWar until a dedicated MathWar address exists.
- Use `privacy@mesikalabs.com` for privacy pages and `legal@mesikalabs.com` for terms/legal pages.

## Current Follow-Up Items

1. Fix GitHub Pages HTTPS for `mathwar.mesikalabs.com`; GitHub currently reports that the certificate does not exist yet and `https_enforced` cannot be enabled.
2. Keep central hub links to MathWar conservative until the MathWar certificate is approved.
3. Add/align `AGENTS.md`, `robots.txt`, `sitemap.xml`, and `llms.txt` for `climbos-site` if ClimbOS remains an active public site.
4. After all canonical repos are pushed and live, archive or delete duplicate local checkouts only after explicit approval.
