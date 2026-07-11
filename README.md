# Bethesda Group — Website

A high-end marketing / investor-relations website for **Bethesda Group**, a pan-African
investment technology group. Built to serve two distinct audiences — **institutional**
(governments, sovereign funds) and **individual / diaspora** investors — through a clear,
segmented experience.

Design bar: confident Poppins typography, generous whitespace, scroll-triggered
storytelling, subtle micro-interactions, and cinematic (currently placeholder) imagery.

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — design tokens in `tailwind.config.ts` + `app/globals.css`
- **GSAP + ScrollTrigger** — scroll reveals, hero parallax
- **Framer Motion** — route/page transitions, magnetic CTAs, custom cursor, filters
- **Poppins** via `next/font/google`
- Deploy target: **Vercel**

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000  (this repo was developed on :3002)
npm run build      # production build — run before deploying
npm start          # serve the production build
npm run lint
```

## Project structure

```
app/                         # App Router routes + SEO (sitemap.ts, robots.ts, opengraph-image.tsx)
  page.tsx                   # Home
  institutional/ individual/ # the two investor tracks
  about/ contact/
  sectors/ + sectors/[slug]/         # sector index + dedicated page per vertical
  portfolio/ + portfolio/[slug]/     # filterable grid + case-study template
  insights/ + insights/[slug]/       # newsroom listing + article template
components/
  layout/  Nav, Footer, Logo, CustomCursor, Preloader
  ui/      Button, Card, Badge, SectionHeader, Reveal, AnimatedCounter,
           DualCTA, PlaceholderImage, PageHero, SectorIcon
  home/    Hero, AfricaMap, SectorGrid, MetricsStrip, InsightsPreview, ClosingCTA
  about/   LeadershipGrid, Timeline
  portfolio/ PortfolioGrid   insights/ InsightsList   shared/ InquiryForm, GatedDeckForm
lib/
  content/ sectors, metrics, leadership, portfolio, insights, offices, navigation
  gsap.ts  utils.ts
public/images/               # image drop-in (see public/images/README.md)
```

**All site content lives in `lib/content/*`** — a single source of truth. Edit those
files to update copy, figures, sectors, portfolio, insights, offices and navigation
across the whole site.

## Design system

| Token           | Hex        | Usage                                             |
| --------------- | ---------- | ------------------------------------------------- |
| `navy`          | `#0A1B33`  | Primary backgrounds, headers                      |
| `cognac`        | `#A66A3D`  | Accent / CTAs — used sparingly                    |
| `offwhite`      | `#F7F4EF`  | Warm base surface                                 |
| `warmgray`      | `#C9C2B8`  | Secondary text / borders                          |
| `institutional` | `#3E5C74`  | Deeper muted accent for the institutional track   |

Accessibility: semantic HTML, ARIA labels, keyboard navigation, visible focus rings,
skip-to-content link, and reduced-motion support (GSAP/Framer animations no-op when the
user prefers reduced motion). Contrast pairings were kept WCAG AA-safe (navy↔offwhite;
cognac as a background with offwhite text for CTAs).

Performance: transform/opacity-only animations, heavy client widgets code-split, images
lazy by default via `next/image` structure. Custom cursor and preloader are disabled on
touch/coarse pointers.

---

## ⚠️ Placeholders to replace before launch

Everything below is marked in code with `[PLACEHOLDER]` (copy/data) or
`[PLACEHOLDER-IMAGE]` (imagery). Search the repo for those strings.

### Critical (business-defining)

- **Individual investment mechanism & minimums** — `app/individual/page.tsx`,
  `lib/content` — confirm whether investing is via direct equity, a fund vehicle, bonds,
  or an app-based platform, the true minimum, and the entry/onboarding flow (the
  "Start investing" CTA currently points to `/contact`).
- **Institutional partnership structures** — `app/institutional/page.tsx` — confirm the
  definitive co-investment / PPP / sovereign-mandate offering.
- **Key metrics** — `lib/content/metrics.ts` — real AUM, country count, years operating,
  and portfolio-company count.
- **Operating countries & sector density** — `lib/content/offices.ts`
  (`operatingCountries`) — used by the home Africa map.

### Content

- **Leadership** — `lib/content/leadership.ts` — real names, titles, bios; and dated
  **milestones** for the About timeline.
- **Sectors** — `lib/content/sectors.ts` — summaries, theses, focus areas, notable
  projects for all 7 verticals.
- **Portfolio** — `lib/content/portfolio.ts` — real companies/projects, countries,
  quantified outcomes, and case-study narratives.
- **Insights** — `lib/content/insights.ts` — real articles, authors, dates, bodies.
- **Offices & contact** — `lib/content/offices.ts`, `app/contact/page.tsx` — real
  addresses, HQ, press/general email addresses.
- **Company/legal** — `components/layout/Footer.tsx` — registered company details and
  regulatory disclosures.
- **Institutional deck** — `components/shared/GatedDeckForm.tsx` — confidentiality note
  and the private-delivery process (the deck is intentionally **not** a public download).

### Technical wiring

- **Form submissions** — `components/shared/InquiryForm.tsx` and `GatedDeckForm.tsx`
  currently stub `handleSubmit`. Wire to a real API route / form service / CRM.
- **Production URL** — `lib/content/navigation.ts` (`siteConfig.url`) — used by canonical
  tags, sitemap and robots.
- **Imagery** — real Unsplash photography (License: free, commercial-use) is now wired
  in for the hero, all seven sectors, portfolio, insights, and the diaspora section;
  files + credits are listed in `public/images/README.md`. Leadership portraits and
  per-project photos still use the branded duotone placeholder — swap those in when real
  assets exist. A branded OG card is generated at `app/opengraph-image.tsx`.
- **Logo** — `components/layout/Logo.tsx` renders a text wordmark; swap for an SVG logo.

## Notes

- The home hero, page transitions, counters, custom cursor and preloader all respect
  `prefers-reduced-motion`.
- The Africa map is a stylised silhouette with interactive hotspots; upgrade to real
  GeoJSON/TopoJSON later if a geographically precise map is required.
