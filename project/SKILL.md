---
name: timber-trace-design
description: Use this skill to generate well-branded interfaces and assets for Timber Trace, a trustworthy land-buying/selling marketplace, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** Timber Trace — land marketplace. Trustworthy, earthy, premium-rustic.
- **Colors:** forest green primary (`#1f3026`), clay accent for the one key CTA (`#c98a5e`), cream page (`#faf8f3`), white card paper, warm stone neutrals.
- **Type:** Spectral (display serif + prices), Inter (UI/body), Space Grotesk (data/acreage/stats).
- **Icons:** Lucide style, 1.75px stroke (see `ui_kits/_shared/icons.jsx`).
- **Cards:** white, 1px warm border, soft green-tinted shadow, 6px radius, 2px hover lift.
- **Motion:** calm, 120–320ms, no bounce. Hover = darker shade + lift; focus = clay ring.
- **Voice:** plain-spoken, trust-forward, sentence case, uppercase eyebrows, no emoji.

## Files
- `styles.css` + `tokens/` — design tokens (link `styles.css` to inherit them).
- `components/` — React primitives, namespace `window.TimberTraceDesignSystem_61daa5` (load `_ds_bundle.js`).
- `ui_kits/marketing/`, `ui_kits/app/` — full-screen recreations to copy from.
- `assets/` — logo mark + lockup.
