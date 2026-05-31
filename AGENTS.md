# MesikaLabs Site Agent Notes

## Project Focus

- This repo is the static central website for `mesikalabs.com`.
- Keep the homepage positioned as the MesikaLabs app hub, not as a single-product landing page.
- Link each app to its dedicated public site and keep app-specific claims aligned with the matching app repo.
- The latest blog feed should aggregate from app-owned blog feeds rather than duplicating article content on the central domain.

## MesikaLabs Contact Points

- General support: `support@mesikalabs.com`
- Privacy: `privacy@mesikalabs.com`
- Billing: `billing@mesikalabs.com`
- Legal: `legal@mesikalabs.com`
- Storage Cleaner support: `storagecleaner@mesikalabs.com`
- Aura TV support: `auratv@mesikalabs.com`
- PureShot support: `pureshot@mesikalabs.com`
- MathWar support: `support@mesikalabs.com`

## SEO Guardrails

- Keep one canonical homepage at `https://mesikalabs.com/`.
- Do not put app subdomain URLs in the central `sitemap.xml`; each app site owns its own sitemap.
- It is fine for `robots.txt` to reference app sitemaps for discovery, but each subdomain still needs its own local `robots.txt` and `sitemap.xml`.
- Do not keyword-stuff titles, headings, image alt text, or internal links. Use the keyword map in `docs/seo-keyword-research.md` as placement guidance.

## Validation

- Local smoke test: `python3 -m http.server 8094 --bind 127.0.0.1`
- Check `/`, `/robots.txt`, `/sitemap.xml`, `/assets/site.css`, `/assets/site.js`, and app icon assets.
- Hosted checks after deploy: `curl -I -L https://mesikalabs.com/ https://mesikalabs.com/robots.txt https://mesikalabs.com/sitemap.xml`
