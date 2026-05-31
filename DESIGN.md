# MesikaLabs Central Site Design Contract

## Direction

Build the central hub as a compact product portfolio console: clear app routing, credible support links, and a live editorial surface. It should feel like a working indie app lab, not a generic startup hero page.

## Layout Rules

- First viewport must show the MesikaLabs brand, the four app icons, real product screenshots, primary app links, and a hint of the next section.
- The hero should prioritize routing and product proof over giant slogan space, especially on mobile.
- Use full-width sections with constrained inner content. Do not place page sections inside decorative cards.
- Cards are allowed only for repeated app and post items, with border radius no larger than 8px.
- Keep text dense enough for scanning. Avoid oversized marketing filler.
- Use real product icons/screenshots as the primary visual proof. Do not use abstract orb or blob decorations.
- The central page should inherit the app-site improvements: clear blog/support paths, visible app icons, and concise product boundaries.

## Visual System

- Base: warm white, ink, low-contrast gray lines.
- Accent mix: green for Storage Cleaner, blue for Aura TV, black/red for PureShot, amber for MathWar.
- Avoid a one-note palette. Each app can keep a small accent, but the page itself should stay neutral.
- Letter spacing remains `0`.
- Font sizes use fixed responsive steps at breakpoints, not viewport-width scaling.

## Interaction

- Links use `<a href>` and should be crawlable without JavaScript.
- The latest-posts feed must have static fallback content in HTML, then enhance with JavaScript when feeds are available.
- Use native lazy loading for below-the-fold app icons or screenshots. Do not lazy-load first-viewport icons.
