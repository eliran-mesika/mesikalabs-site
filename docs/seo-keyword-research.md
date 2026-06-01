# MesikaLabs Keyword Research and Technical SEO Map

Prepared for `mesikalabs.com` and app subdomains on 2026-05-31. Updated with a public-search refresh on 2026-06-01.

This is an intent map, not a fake search-volume report. Use Search Console after launch to replace assumptions with real impressions, CTR, and query language.

## Homepage Positioning

Primary keyword cluster:

- MesikaLabs iOS apps
- MesikaLabs iPhone apps
- iPhone apps by MesikaLabs
- privacy-first iPhone apps

Secondary long-tail keywords:

- iOS apps for storage cleanup camera IPTV and math games
- independent iPhone app developer MesikaLabs
- MesikaLabs app support and privacy pages
- iPhone utility entertainment camera education apps
- iPhone storage cleaner IPTV player no filter camera math game
- independent iOS app lab support pages

Placement:

- Meta title: `MesikaLabs | iPhone Apps for Storage, IPTV, Camera & Math Games`
- Meta description: mention Storage Cleaner for cleanup, Aura TV IPTV player, PureShot no-filter camera, and MathWar arithmetic game once.
- H1: brand/product family statement, not a keyword list.
- H2: `Four apps, four different annoyances removed.`
- Internal anchors: use descriptive links such as `Open Storage Cleaner site`, not `click here`.
- Alt text: describe the app icon plus niche, for example `Storage Cleaner iPhone storage cleanup app icon`.

## Storage Cleaner

Primary keyword cluster:

- iPhone storage cleaner app
- clean iPhone storage safely
- iPhone duplicate photo cleaner
- free up iPhone storage
- iPhone storage cleanup app
- duplicate photos cleaner iPhone
- large video cleaner iPhone

Secondary long-tail keywords:

- how to free up iPhone storage without deleting everything
- delete duplicate photos on iPhone safely
- find similar photos on iPhone
- clean large videos from iPhone
- iPhone screenshots cleanup app
- review before delete iPhone cleaner
- on-device iPhone cleaner app
- photo cleanup app for iOS

Placement:

- App site meta title: `Storage Cleaner for iPhone - Review Duplicates & Free Space`
- App site meta description: include `free up iPhone storage`, `duplicate photos`, `similar shots`, `screenshots`, `large videos`, and `review-before-delete`.
- H1: `Free up iPhone space without deleting blindly`
- H2 examples: `Review duplicates before cleanup`, `Find large videos and screenshots`, `Private on-device cleanup`
- Blog category path: `/blog/storage-cleaner/` on the central domain plan, but implemented app-owned path is `https://storagecleaner.mesikalabs.com/blog/`.
- Image alt text: `Storage Cleaner duplicate photo review screen on iPhone`, `Storage Cleaner large video cleanup screen`.

## Aura TV IPTV

Primary keyword cluster:

- IPTV player for iOS
- iPhone IPTV player
- M3U player iPhone
- Xtream IPTV player iOS
- IPTV playlist player
- IPTV player for iPhone and iPad
- XMLTV EPG player iOS

Secondary long-tail keywords:

- IPTV player for your own playlists on iPhone
- M3U playlist player for iPad
- Xtream codes compatible IPTV player iOS
- EPG guide IPTV player iPhone
- IPTV app that does not provide channels
- import M3U playlist on iPhone
- player-only IPTV app for iOS

Placement:

- App site meta title: `Aura TV IPTV Player for iPhone - M3U, Xtream & EPG`
- App site meta description: include `IPTV player`, `iPhone and iPad`, `M3U`, `Xtream-compatible credentials`, `EPG/XMLTV`, and `No channels included`.
- H1: `IPTV playback for playlists you provide`
- H2 examples: `Bring your own M3U playlist`, `Guide data without channel promises`, `Player-only support`
- Alt text: `Aura TV IPTV player live guide screen`, `Aura TV M3U playlist import screen`.
- Copy guardrail: never imply the app supplies channels, subscriptions, broadcaster access, or copyrighted content.

## PureShot

Primary keyword cluster:

- no filter camera app
- iPhone camera app no filter
- natural camera app iPhone
- privacy-first camera app
- manual camera controls iPhone

Secondary long-tail keywords:

- camera app without beauty filters
- iPhone camera app with no tracking
- natural photo capture app iPhone
- local-only camera app iOS
- RAW camera app for iPhone 15
- manual exposure focus camera app
- process zero camera app
- no filter iPhone camera
- iPhone camera app natural photos

Placement:

- App site meta title: `PureShot No Filter Camera App for iPhone - Natural Capture`
- App site meta description: include `no-filter iPhone camera app`, `natural capture`, `manual controls`, `local media handling`, and `no tracking`.
- H1: `Natural capture, direct control`
- H2 examples: `No beauty filters`, `Local media handling`, `Manual controls where they belong`
- Alt text: `PureShot camera controls on iPhone`, `PureShot natural capture settings screen`.

## MathWar

Primary keyword cluster:

- math learning game iPhone
- educational math game for kids
- arithmetic game iOS
- math runner game
- fun math practice app

Secondary long-tail keywords:

- multiplication practice game for iPhone
- addition subtraction game for kids
- math facts game with battles
- mobile math game in development
- arithmetic learning game with levels
- classroom-friendly math practice game
- zombie math game for kids
- arithmetic battle game iPhone
- multiplication battle game

Placement:

- App site meta title: `MathWar Math Learning Game for iPhone - Arithmetic Battles`
- App site meta description: include `math learning game`, `iPhone and iPad`, `arithmetic gates`, `multiplication practice`, `squad battles`, and `in development`.
- H1: `Math practice with battles, gates, and no worksheet smell`
- H2 examples: `Arithmetic gates`, `Army growth through answers`, `Built for short mobile sessions`
- Alt text: `MathWar arithmetic gate gameplay on iPhone`, `MathWar educational math battle game icon`.

## Sitewide Placement Rules

- Titles: keep below roughly 60 characters where possible, put the main intent early, and include the product name.
- Descriptions: keep around 145 to 160 characters, write for clicks, and include one primary keyword naturally.
- H1: one per page, plain language, product-specific.
- H2: use for intent sections and feature proof, not keyword stuffing.
- Alt text: describe the actual image and include a niche term only when the image genuinely shows it.
- Internal links: use crawlable `<a href>` links with descriptive anchor text.
- Canonicals: each page should point to its final HTTPS URL, not a staging URL or duplicate subdomain.
- Exception: while `mathwar.mesikalabs.com` is still blocked on GitHub Pages certificate issuance, keep MathWar crawl files on `http://` so crawlers do not hit a broken HTTPS canonical. Flip back to HTTPS when the certificate is issued and enforced.

## `llms.txt`

Add a root-level `llms.txt` file on every host. It should be short Markdown for AI assistants:

- H1 product/site name.
- One-sentence summary.
- Key crawlable links.
- Product positioning and safety boundaries.
- Support contact.
- Guardrails for claims that must not be invented.

Do not treat `llms.txt` as a ranking factor. It is an AI-discovery helper and a clean source of truth for assistants.

## Technical SEO Implementation

### `robots.txt`

For each host:

```txt
User-agent: *
Allow: /

Sitemap: https://example.mesikalabs.com/sitemap.xml
```

Do not block CSS, JS, images, privacy, support, or terms pages. Google needs render resources available to understand the page.

For `mesikalabs.com`, include the central sitemap and app subdomain sitemaps as discovery hints:

```txt
Sitemap: https://mesikalabs.com/sitemap.xml
Sitemap: https://storagecleaner.mesikalabs.com/sitemap.xml
Sitemap: https://auratv.mesikalabs.com/sitemap.xml
Sitemap: https://pureshot.mesikalabs.com/sitemap.xml
Sitemap: http://mathwar.mesikalabs.com/sitemap.xml
```

### `sitemap.xml`

Use one sitemap per host. Include canonical, indexable HTML pages only:

- homepage
- support
- privacy
- terms
- blog index
- blog post pages

Do not include `feed.json`, CSS, JS, image files, redirect-only URLs, URL fragments, or duplicate query-string variants. Update `<lastmod>` when page content changes materially.

### Crawl Budget Notes

These are small sites, so crawl budget is not the main risk. The main risk is messy duplication. Keep crawl paths clean by:

- using canonical HTTPS URLs
- linking app pages from the central hub
- keeping app blogs under one app-owned URL path
- not generating tag archives, search pages, filters, or calendar archives until there is enough content to justify them
- returning 404 for removed pages instead of redirecting everything to the homepage
