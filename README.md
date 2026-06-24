# Timber Trace

A marketplace web app for buying and selling land parcels — vetted acreage with transparent title history, surveyor-grade maps, and built-in escrow. Built from the **Timber Trace Design System** (see `project/` for the original design bundle).

## Stack

- **Vite** + **React 18**
- **React Router** for navigation
- Design tokens as CSS custom properties (no CSS framework)
- Fonts: Spectral (display), Inter (UI), Space Grotesk (data) via Google Fonts

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Routes

| Path            | Screen                                                              |
| --------------- | ------------------------------------------------------------------ |
| `/`             | Marketing landing — hero, search, featured parcels, how-it-works   |
| `/browse`       | Browse/search — filter sidebar, sort, listing grid                 |
| `/listing/:id`  | Parcel detail — gallery, facts, map, price sidebar, make-an-offer  |
| `/dashboard`    | Seller dashboard — stats + listings table                          |
| `/list`         | "List your land" 5-step upload wizard with live 5% payout          |

State for saved parcels is lifted into `App.jsx` and shared across the browse and detail views.

## Project structure

```
src/
  components/      Reusable UI primitives (Button, Card, Badge, Tag, Avatar,
                   Input, Select, Checkbox, ListingCard)
  icons/           Lucide-style inline stroke icon set
  pages/           Marketing, Browse, Detail, Dashboard, ListYourLand
  data/            Listing seed data
  styles/          index.css + tokens/ (colors, typography, spacing, effects, fonts)
public/
  logo-mark.svg, logo-lockup.svg
  social/          Static social marketing assets (Instagram, story, Snapchat,
                   launch / link-in-bio page) — open directly or screenshot to post
project/           Original Claude Design handoff bundle (design system source)
```

## Commission model

Timber Trace charges a flat **5% commission**, deducted from the seller's payout only when a parcel sells. This is surfaced in two places:

- The **List your land** wizard (Price step) shows a live payout calculator.
- The buyer's **Make an offer** modal notes the seller-paid fee and escrow terms.

## Notes & caveats

- This was designed from scratch (the original brand repo had no source design), so every visual decision is an original proposal from the Wildwood direction (forest green + warm clay, Spectral serif).
- Stock imagery uses Unsplash URLs as placeholders — replace with licensed land photography for production.
- Icons are redrawn in the Lucide style inline; swap in canonical Lucide glyphs if preferred.
- The social assets in `public/social/` are static templates — the App Store / Google Play badges and social links are placeholders pointing at `#`. Point them at real URLs before publishing.
