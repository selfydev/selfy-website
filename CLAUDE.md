# Selfy Website

Premium open-air photo booth rental company website built with Next.js. Marketing and information hub for events photography services across the UK and international markets.

## New Machine Setup

### 1. Create `.env.local` file

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
```

### 2. Get a Mapbox Token

1. Go to [Mapbox](https://account.mapbox.com/)
2. Sign up or log in
3. Navigate to your account tokens
4. Create a new public token or use the default public token
5. Copy the token and add it to your `.env.local` file

### 3. Install Dependencies & Run

```bash
npm install
npm run dev
```

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.1 | Full-stack React framework (App Router) |
| React | 19.2.3 | UI library |
| TypeScript | 5 | Static type checking |
| Tailwind CSS | 4 | Utility-first styling |
| Mapbox GL | 3.18.0 | Interactive coverage map |
| GSAP | 3.14.2 | Advanced animations |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts
│   ├── globals.css         # Global styles & animations
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── blog/               # Blog page
│   ├── careers/            # Careers page
│   ├── contact/            # Contact form page
│   ├── faq/                # FAQ page
│   ├── partners/           # Partners page
│   ├── press/              # Press kit page
│   ├── support/            # Support page
│   ├── work/               # Portfolio page
│   └── services/           # Service pages
│       ├── weddings/
│       ├── corporate-events/
│       ├── brand-activations/
│       ├── private-parties/
│       └── exhibitions/
├── components/             # Reusable React components
│   ├── Header.tsx          # Sticky navigation
│   ├── Hero.tsx            # Hero with video background
│   ├── Showcase.tsx        # Interactive carousel
│   ├── VideoSection.tsx    # Full-screen video
│   ├── PressCarousel.tsx   # Infinite scrolling press logos
│   ├── TextReveal.tsx      # Scroll-triggered text animation
│   ├── StackedScrollVideos.tsx
│   ├── FeaturesShowcase.tsx # 15-feature scroll showcase
│   ├── CoverageMap.tsx     # Mapbox integration
│   ├── StoryCarousel.tsx   # Testimonials carousel
│   ├── Pricing.tsx         # Pricing tiers
│   ├── FinalCTA.tsx        # Final call-to-action
│   └── Footer.tsx          # Newsletter, links, social
└── fonts/                  # Custom Helvetica Now Display fonts
```

---

## Key Components

### Header (`src/components/Header.tsx`)
- Sticky navigation with scroll-hide animation
- Responsive mobile hamburger menu
- Logo color switching based on scroll position

### Hero (`src/components/Hero.tsx`)
- Full-screen video background
- Feature callouts with animated fade-in

### CoverageMap (`src/components/CoverageMap.tsx`)
- Mapbox GL integration
- 6 location markers (London, Manchester, Birmingham, Edinburgh, Dublin, Dubai)
- Animated coverage rings (50km, 100km, 200km)
- Animated counter stats

### FeaturesShowcase (`src/components/FeaturesShowcase.tsx`)
- 15-feature showcase with wheel scroll locking
- Split-screen design with smooth opacity transitions
- Sophisticated scroll interaction

### Pricing (`src/components/Pricing.tsx`)
- Events/Corporate toggle
- 3 tiers per category with animated price counters

---

## Styling

### Typography
- **Headings**: Helvetica Now Display (custom font, weights: 300/400/500/700)
- **Body**: Inter (Google Font)

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Dark | `#1D1D1D` | CTAs, headings on light backgrounds |
| White | `#FFFFFF` | CTAs on dark, text on dark |
| Background Light | `#F5F5F5` | Page backgrounds |
| Background Dark | `#141414` | Footer, dark sections |
| Muted Text | `#888888` | Secondary text |

### Animations (globals.css)
- `fade-in-up` - Entry animations
- `press-scroll` - Infinite press carousel scroll
- `pulseRing` - Map marker pulse effect

---

## Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Home - 13-section landing page with all major components |
| `/about` | Company mission, team, timeline, awards |
| `/contact` | Contact form with live office times |
| `/services/weddings` | Wedding packages (£495-£1,295) |
| `/services/corporate-events` | Corporate event services |
| `/services/brand-activations` | Brand activation services |
| `/services/private-parties` | Private party packages |
| `/services/exhibitions` | Exhibition services |
| `/blog` | Blog listings |
| `/careers` | Job opportunities |
| `/faq` | Frequently asked questions |
| `/press` | Press kit |
| `/partners` | Partnership information |
| `/support` | Customer support |
| `/work` | Portfolio/case studies |

---

## Development Notes

### No Backend API
This is a static marketing site. Forms are client-side only with no backend persistence.

### Animation Patterns
- `requestAnimationFrame` for 60fps animations
- `IntersectionObserver` for scroll-triggered effects
- Wheel event interception for custom scroll (FeaturesShowcase)
- Lerp (linear interpolation) for smooth trailing effects

### Responsive Design
- Mobile-first Tailwind approach
- Breakpoints: `sm`, `md`, `lg`
- Padding pattern: `px-6 lg:px-24`

### Performance
- Next.js Image component with `fill` and `sizes`
- Video autoplay with `muted` and `playsInline`
- Lazy animation initialization via IntersectionObserver

---

## Business Context

- **Services**: Weddings, Corporate Events, Brand Activations, Private Parties, Exhibitions
- **Locations**: London (HQ), Dubai (Regional Office)
- **Coverage**: 50+ cities, 500+ events completed
- **Pricing**: Events £495-£1,295, Corporate £1,495-£2,495
