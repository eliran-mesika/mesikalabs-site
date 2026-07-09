# MesikaLabs Public Site Design Language

Last updated: 2026-07-09.

## Direction

MesikaLabs public sites should feel like one disciplined product family: static, fast, credible, and product-specific. The central site is the ecosystem hub. Each app site owns its own product proof, support, privacy, terms, sitemap, and positioning.

## Typography

- Use a system UI stack for body copy: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Use display serif sparingly only when a product concept benefits from it, such as SmartPiece storybook headers.
- Keep letter spacing at `0` except terse uppercase labels. Do not scale font sizes directly with viewport width.
- Cap long prose blocks around 66 to 80 characters.

## Layout

- Use full-width bands with constrained inner content. Do not put entire page sections inside decorative cards.
- Cards are for repeated items, support/legal blocks, posts, and product proof. Keep card radius at 8px unless a repo design contract already requires a tighter product-specific exception.
- Use stable image dimensions, `width` and `height` attributes, and responsive constraints so assets do not shift layout.
- The first viewport should show product identity and real app/game proof, not abstract decoration.

## Legal And Support Pages

- Use consistent trust chrome: compact brand header, practical nav, readable single-column legal body, clear contact block, and simple footer.
- Keep policy pages conservative and store-review safe.
- Use app-specific support addresses and MesikaLabs policy addresses:
  - Support: `support@mesikalabs.com`
  - Privacy: `privacy@mesikalabs.com`
  - Billing: `billing@mesikalabs.com`
  - Legal: `legal@mesikalabs.com`
  - Storage Cleaner: `storagecleaner@mesikalabs.com`
  - Aura TV: `auratv@mesikalabs.com`
  - PureShot: `pureshot@mesikalabs.com`
  - SmartPiece: `smartpiece@mesikalabs.com`
  - MathWar: `support@mesikalabs.com`

## Accessibility And Static Constraints

- Use semantic landmarks, one `h1` per page, sequential headings, visible focus states, and descriptive alt text for informative images.
- Do not rely on hover-only navigation.
- Respect reduced motion. Motion should be optional or absent on static support/legal pages.
- Keep sites static HTML/CSS/JS. Do not add React, Next.js, Vue, analytics SDKs, or heavy runtime dependencies for public-site work.

## Compliance Tone

- Aura TV is a player only and does not provide content, playlists, credentials, or broadcaster accounts.
- Storage Cleaner remains review-before-delete and must not imply automatic cloud cleanup.
- PureShot remains natural capture, local media handling, and no tracking unless app repo truth changes.
- MathWar and SmartPiece remain in development unless store state proves public release.
