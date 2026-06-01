# MesikaLabs Blog Strategy and Anti-AI Copy Style Guide

Prepared on 2026-05-31.

## URL Structure

Preferred public implementation:

- Central hub: `https://mesikalabs.com/`
- Central homepage feed: pulls app-owned posts from each app feed.
- Storage Cleaner blog: `https://storagecleaner.mesikalabs.com/blog/`
- Aura TV blog: `https://auratv.mesikalabs.com/blog/`
- PureShot blog: `https://pureshot.mesikalabs.com/blog/`
- MathWar blog: `http://mathwar.mesikalabs.com/blog/` while the GitHub Pages certificate is pending; switch back to HTTPS after enforcement works.

Logical central taxonomy for planning and Search Console grouping:

- `mesikalabs.com/blog/storage-cleaner/`
- `mesikalabs.com/blog/aura-tv/`
- `mesikalabs.com/blog/pure-shot/`
- `mesikalabs.com/blog/mathwar/`

Implementation note: avoid duplicating full articles on both central and app domains. Either keep articles app-owned and aggregate excerpts centrally, or publish central category pages that link to canonical app posts.

## Homepage Latest Posts Section

Design:

- Place it after the app grid, before technical SEO/support content.
- Use a full-width section with a constrained inner grid, not a carousel.
- Show six newest posts max.
- Each post card should show app name, date, title, short human summary, and a direct link to the app blog post.
- Color can be inherited from the app accent, but titles and text should remain consistent for scanning.

Function:

- Fetch `feed.json` from each app blog.
- Normalize posts into `title`, `url`, `date`, `app`, `summary`, `category`.
- Sort descending by `date`.
- Render the newest six posts.
- Keep static fallback posts in HTML so the homepage is useful if JavaScript, CORS, or one feed fails.
- Do not make the feed the only internal-link path. App links must exist in static HTML.

## Content Pillars

### Storage Cleaner

- iPhone storage pain: full storage, Photos bloat, videos, screenshots, duplicates.
- Cleanup trust: review before delete, local processing, no panic-tapping.
- Practical guides: what to delete, what not to delete, what iOS hides badly.
- Launch/dev notes: why the app avoids automatic deletion promises.

### Aura TV

- Player literacy: M3U, Xtream-compatible credentials, EPG, playlist hygiene.
- Compliance clarity: player-only, no channels, no content access.
- Setup guides: importing playlists, fixing guide data, device-friendly playback habits.
- User education: how not to buy nonsense from shady IPTV forums.

### PureShot

- Natural capture: no filters, no beauty smoothing, no fake plastic skin.
- Control guides: focus, exposure, zoom, resolution, RAW-oriented workflows.
- Privacy: local media, no tracking, no accounts.
- Honest hardware notes: which devices can actually do the fancy stuff.

### MathWar

- Math practice pain: drills are boring, kids detect fake fun instantly.
- Game design logs: gates, battles, pacing, enemy waves, short sessions.
- Parent/teacher content: arithmetic practice without worksheets.
- Development diary: what is built, what is not, what is being tested.

## Strict Voice Rules

Write like a real developer who has shipped apps, debugged ugly edge cases, and has mild trust issues because software earned them.

Do:

- Use first person when it adds credibility: `I built this because...`, `I kept this out because...`
- Address the reader directly: `your camera roll`, `your playlist`, `your kid's math homework`.
- Use compact jokes, dry observations, and occasional slang.
- Say the annoying truth plainly.
- Prefer specific nouns over corporate fog.
- Keep paragraphs short.
- Use contractions.
- Include one useful takeaway every few paragraphs.
- Admit tradeoffs and limitations.

Do not:

- Say `in today's digital world`, `game-changer`, `seamless experience`, `unlock your potential`, or other synthetic brochure sludge.
- Use fake empathy paragraphs that sound like a help-center bot in a cardigan.
- Stuff keywords. One natural use in title, intro, and a heading is enough.
- Overpromise privacy, performance, legality, or future features.
- Pretend every feature is revolutionary.
- Use lists for everything. Let some paragraphs breathe.

## Blog Post Template

Title:

- Human first, keyword second.
- Example: `Your iPhone Storage Is Full Again. Stunning. Truly Shocking.`

Intro:

- Start with the user's annoyance.
- Make a joke.
- State the useful promise.
- Avoid a slow SEO preamble.

Middle:

- One clear problem.
- One app-specific explanation.
- One practical step or mental model.
- One honest limitation.

Close:

- Short CTA to the app.
- No fake urgency.

## Example Storage Cleaner Post

Title:

`Your iPhone Storage Is Full Again. Stunning. Truly Shocking.`

Opening paragraph:

Your iPhone says storage is full, which is adorable because apparently the 19 blurry screenshots of delivery codes, three identical concert videos, and that one 4K clip of your shoe all needed a forever home. Storage Cleaner exists for this exact little disaster: it helps you find the junk, review it like an adult, and delete only what you actually meant to delete. Radical concept, I know.
