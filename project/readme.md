# Timber Trace — Design System

**Timber Trace** is a marketplace web app for **buying and selling land parcels**. The brand promise is *trustworthy land ownership*: vetted acreage, transparent title history, surveyor-grade maps, and built-in escrow. The system pairs an earthy, natural palette (forest greens, warm clay, cream papers) with an editorial serif and clean UI sans — premium and rustic, but credible and institutional where it counts (title-verified badges, escrow signals).

## Sources
- GitHub repo provided: **https://github.com/ngouonpejeffrey16-tech/TIMBER_TRACE** — at the time of authoring this repo contained only a one-line README ("application for land selling"); there was **no codebase, Figma, or existing design** to derive from. This system was therefore **designed from scratch** for a land marketplace, with the user's direction (earthy + trustworthy + modern-premium). Explore the repo for any future product code; if real designs land there, reconcile this system against them.

> ⚠️ **Caveat:** Because no source design existed, every visual decision here is an original proposal, not a recreation. Treat it as a strong starting point to refine, not ground truth.

---

## Content fundamentals
How Timber Trace writes copy:

- **Voice:** confident, plain-spoken, grounded. Speaks to an aspirational but practical buyer ("Own a piece of the wild," "Land buying, without the guesswork").
- **Person:** addresses the reader as **you** ("Find the land that fits your plans"). Refers to the company as **we** sparingly ("We handle title verification…").
- **Casing:** sentence case for headings and buttons ("Make an offer", "List your land"). Eyebrows are UPPERCASE with wide tracking ("JUST LISTED", "LAND YOU CAN TRUST").
- **Tone:** trust-forward. Lead with the reassurance — *title-verified, escrow included, transparent history*. Avoid hype words ("amazing", "revolutionary").
- **Numbers & data:** concrete and specific — "42 acres", "$184,000", "$4,319 / acre", "12,400+ parcels". Set in the mono/numeric face.
- **Emoji:** none. Iconography carries visual cues instead.
- **Buttons:** verb-first and short — "View parcel", "Make an offer", "Save parcel", "List your land".

---

## Visual foundations
- **Color:** Forest green is primary (surfaces, primary buttons, headings — `--forest-800` #1f3026). Clay (`--clay-500` #c98a5e) is the warm accent reserved for the single most important CTA and highlights. Cream (`--cream` #faf8f3) is the page background; white paper for cards. Warm "stone" neutrals for text/borders. Status semantics: green=verified, amber=pending, red=under contract, blue=financing.
- **Type:** **Spectral** (serif) for display/headlines and prices — editorial, land-and-paper feel. **Inter** for all UI and body. **Space Grotesk** for data (prices, acreage, coordinates, stats) — semi-tabular, distinct from prose.
- **Spacing:** 4px base grid (`--space-*`). Generous section padding (72–88px) on marketing; 28px gutters in app.
- **Backgrounds:** cream base; hero and CTA use full-bleed natural photography with a dark forest gradient scrim (top-down) for legible white text. No gradients-as-decoration, no neon.
- **Imagery:** warm, natural land photography (meadows, timberland, ridges, waterfront). A forest-tinted scrim (`linear-gradient(180deg, rgba(22,36,28,.45), transparent 45%)`) sits over hero/card images. Cool/clinical stock is off-brand.
- **Corner radii:** restrained — cards/controls 4–6px, large panels 10–16px, badges/avatars full pill. Nothing bubbly.
- **Cards:** white paper, 1px warm border (`--border-subtle` #e4e0d6), soft warm-tinted shadow (`--shadow-sm`), 6px radius. Interactive cards lift 2px and deepen to `--shadow-md` on hover.
- **Shadows:** soft, low-spread, green-tinted (`rgba(31,48,38,...)`) — paper resting on a table, never glow.
- **Borders:** hairline warm grays; used to separate, not to decorate. Avoid colored left-border accent cards.
- **Motion:** calm. 120–320ms, `cubic-bezier(0.2,0,0,1)`. Fades and 2px lifts; no bounce, no spring, no looping decorative animation.
- **Hover:** buttons darken to a deeper shade of their own color; cards lift + shadow; links shift toward forest. **Press:** 0.5px nudge down + darker shade (no scale-shrink).
- **Focus:** 3px clay focus ring (`--focus-shadow`).
- **Transparency/blur:** sticky nav uses `rgba(cream,.85)` + `backdrop-filter: blur(10px)`. Image scrims use rgba forest. Used sparingly for depth, not everywhere.

---

## Iconography
- **Style:** Lucide (https://lucide.dev) — 1.75px stroke, round caps/joins, 24px grid. Clean, geometric, outline-only. This matches the modern-but-earthy tone.
- **Implementation:** drawn inline in `ui_kits/_shared/icons.jsx` as `window.TTIcon` so kits render offline without a CDN dependency. **This is a substitution-by-redraw of the Lucide set** — if you want the canonical icons, swap in `lucide` from CDN or the official package. (Flagged for the user.)
- **Common icons:** search, pin (location), heart (save), shield (title/escrow), ruler (acreage), road/drop/trees (parcel facts), filter, layers (map), eye (views), bell, plus, arrowRight, check, star, user.
- **Emoji / unicode-as-icon:** not used. The only glyphs used decoratively are `▾` (select chevron) and `★` (rating), kept minimal.
- **Logo:** `assets/logo-mark.svg` (topographic-contour + pine mark on forest tile) and `assets/logo-lockup.svg` (mark + "Timber Trace" wordmark in Spectral). Use the lockup on light surfaces; the mark alone on tight or dark surfaces.

---

## Fonts caveat
Spectral, Inter, and Space Grotesk are loaded from **Google Fonts** via `@import` in `tokens/fonts.css` (these are the chosen brand faces, not substitutions). The compiler therefore reports 0 self-hosted `@font-face` rules. If you need self-hosted webfont binaries, download these families and add `@font-face` rules — flag raised for the user.

---

## Index / manifest
**Foundations**
- `styles.css` — root entry (import-only).
- `tokens/colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css` — all CSS custom properties.
- `guidelines/*.card.html` — specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Assets** — `assets/logo-mark.svg`, `assets/logo-lockup.svg`.

**Components** (`window.TimberTraceDesignSystem_61daa5`)
- `components/core/` — **Button**, **Card**, **Avatar**
- `components/feedback/` — **Badge**, **Tag**
- `components/forms/` — **Input**, **Select**, **Checkbox**
- `components/marketplace/` — **ListingCard** (signature unit)

**UI kits**
- `ui_kits/marketing/` — landing page (hero, search, featured parcels, how-it-works, CTA, footer).
- `ui_kits/app/` — interactive marketplace: browse + filters → parcel detail → make-an-offer flow (5% fee shown) → seller dashboard → **List-your-land upload wizard** (`ListYourLand.jsx`: type → details + map boundary → photos & title docs → price with live 5% payout → review).
- `ui_kits/_shared/icons.jsx` — shared icon set.

**Social & launch** (`social/`)
- `instagram-post.html` (1080×1080), `story.html` (1080×1920, IG/Snap), `snapchat-ad.html` (1080×1920, seller/5% angle), `launch-page.html` (link-in-bio with App Store + Google Play badges + socials).
- Export these via Save as PDF / screenshot to post. The store badges and social links are placeholders — point them at your real URLs.

**Skill** — `SKILL.md` (Agent-Skill compatible).

> Explore the source repo (link above) to ground future work in real product code as it develops.
