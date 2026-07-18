# Selfy.photo Site Expansion — Design

**Date:** 2026-07-18
**Status:** Validated with Sam, ready for implementation
**Scope:** Performance, new pages (How It Works, Pricing), page polish (About, Blog, Contact), placeholder auth pages, favicon.

## Constraints

- No changes to the existing design, structure, or layout of current pages beyond agreed polish.
- All new pages use the existing design language: Header/Footer, typography, reveal animations, section rhythm.
- Static export (`output: "export"`) stays — no server runtime.
- No invented content: features, claims, and pricing come from what the site already states.

## 1. Performance

Root cause: `public/` is 196MB with camera-original images (up to 20MB) served unoptimized (`images: { unoptimized: true }` required by static export).

1. Batch-optimize every image in `public/` with sharp: resize to max rendered size (~1600–2000px full-bleed, smaller for cards), convert to WebP ~q80. Originals backed up outside the repo. Target: 196MB → ~8–15MB.
2. Compress hero video poster (3.1MB); verify video size and `preload="metadata"`.
3. Add `loading="lazy"` + explicit dimensions to below-the-fold images lacking them.
4. Verify `next/font` usage; check no heavy client components load eagerly.
5. Before/after Lighthouse on production build.

## 2. New pages

### How It Works (`/how-it-works/`)

- Hero matching homepage typography.
- Numbered 4-step journey (Book → We design your experience → Event day → Instant sharing/gallery), alternating full-width sections using existing feature images. Content sourced from services/FAQ pages.
- "Included in every booking" strip.
- Closing CTA reusing FinalCTA.

### Pricing (`/pricing/`)

- Hero + homepage tiers as expanded cards (same tier data — no contradictions).
- Feature-comparison table (rows = features, columns = tiers).
- Add-ons section (only items the site already mentions).
- Pricing FAQ (5–6 questions adapted from existing FAQ).
- CTA to contact/booking.

Both: metadata, sitemap entries, header nav + footer links. Pricing stays in header; How It Works joins header or an existing grouping if crowded.

## 3. Polish existing pages

- **About:** keep all content; align section rhythm/animations/typography with homepage; use optimized images; fix any placeholder-sounding copy.
- **Blog:** designed "coming soon" page — hero, email capture via existing Formspree/newsletter setup, 2–3 greyed teaser cards clearly labeled coming soon. Route and metadata stay.
- **Contact:** keep Formspree form and real details; polish layout; form states match the enhanced newsletter form; London address consistent with footer.

## 4. Auth placeholder pages (`/login/`, `/signup/`)

- Install shadcn (`components.json` init matching existing Tailwind setup), add `@efferd` registry, pull `auth-5` block.
- Restyle to Selfy brand: split screen — form left; right is full-bleed Selfy event photo with one of the three verified client testimonials overlaid.
- **Placeholder behavior (explicit decision):** inputs disabled; visible banner/popup stating user registration/sign in is currently disabled. No submission path.
- Header Login/Sign Up links point to these pages (replacing app.selfy.photo links).
- Scope shadcn's `globals.css` additions so existing styles are untouched.

## 5. Favicon

Generate full set (ico, 16/32/192/512 PNGs, apple-touch-icon) from the Selfy logo in repo assets; replace current `favicon.ico`.

## Verification

- `npm run type-check`, lint, production build passes.
- Visual pass on every touched page (desktop + mobile widths).
- Lighthouse before/after for the performance work.
- Sitemap/nav/footer contain the new routes; no dead links to app.selfy.photo remain in the header.

## Out of scope (deferred by Sam)

- Section fixes on existing pages ("a few sections we need to fix") — queued after these tasks.
- Real authentication wiring.
