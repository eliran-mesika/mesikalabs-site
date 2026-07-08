# MesikaLabs Site

Static central hub for `mesikalabs.com`.

This repo contains:

- `index.html` central app landing page
- `assets/site.css` and `assets/site.js`
- app icon assets used by the homepage
- `robots.txt` and `sitemap.xml`
- `llms.txt` AI-assistant site summary
- SEO and blog strategy documentation under `docs/`

## Local Smoke Test

```bash
python3 -m http.server 8094 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8094/`.

## Blog Feed Contract

Canonical ownership for all MesikaLabs public site repos is tracked in `docs/site-inventory.md`. Check that file before editing app subdomain sites, support URLs, privacy URLs, SEO files, or domain settings.

The homepage reads these app-owned feeds:

- `https://storagecleaner.mesikalabs.com/blog/feed.json`
- `https://auratv.mesikalabs.com/blog/feed.json`
- `https://pureshot.mesikalabs.com/blog/feed.json`
- `http://mathwar.mesikalabs.com/blog/feed.json`

Each feed should return either an array of posts or an object with an `items` array. Required post fields:

- `title`
- `url`
- `date`
- `app`
- `summary`

Optional fields:

- `category`
- `image`
- `imageAlt`
