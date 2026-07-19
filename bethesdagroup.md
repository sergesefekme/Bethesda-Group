# Bethesda Group — Project Status

_Last updated: 2026-07-19_

A high-end marketing / investor-relations website for **Bethesda Group**, a pan-African
investment technology group operating across 7 sectors and serving two audiences —
**institutional** (governments, sovereign funds) and **individual / diaspora** investors.

- **Repo:** `https://github.com/sergesefekme/Bethesda-Group.git` (branch `main`)
- **Local:** `C:\Users\Owner\Desktop\Bethesday-group`
- **Dev server:** `http://localhost:3002` (`.claude/launch.json` → `bethesda-dev`, `npm run dev`)
- **Stack:** Next.js 14 (App Router, TS) · Tailwind CSS · GSAP + ScrollTrigger · Framer Motion · Poppins

---

## ✅ What we've accomplished

1. **Full site built** — all 8 page areas plus dynamic routes, statically generated:
   Home · Institutional · Individual/Diaspora · About · Sectors (+ `/sectors/[slug]`) ·
   Portfolio (+ `/portfolio/[slug]`) · Insights (+ `/insights/[slug]`) · Contact.
2. **Motion & interaction** — hero parallax, GSAP scroll reveals, animated counters,
   magnetic CTAs, custom cursor, page transitions, preloader. All respect
   `prefers-reduced-motion`.
3. **Accessibility & SEO** — semantic HTML, ARIA, keyboard nav, focus rings, skip link;
   per-page metadata, `sitemap.ts`, `robots.ts`, generated OpenGraph card, favicon.
4. **Content architecture** — all copy/data centralized in `lib/content/*` (single source
   of truth): sectors, metrics, leadership, portfolio, insights, offices, navigation.
5. **Git** — initialized, pushed to GitHub, developing on `main`.
6. **Operating countries** — added Senegal & Cameroon (Côte d'Ivoire already present) to
   `lib/content/offices.ts` → home Africa map.
7. **Real photography** — Unsplash photos (free/commercial license) wired for hero, all 7
   sectors, portfolio, insights, and the diaspora section; files + credits in
   `public/images/README.md`.
8. **Color refinement (two iterations):**
   - Lightened primary navy `#0A1B33 → #1E3A5F` for a brighter blue.
   - Fixed the accent for visibility/legibility — the old tan `cognac #A66A3D` failed
     WCAG AA as small link text. Split into a **rich copper** for light backgrounds and a
     **luminous gold** for dark ones (token-level change → ~85 usages across 29 files).
9. **Site refresh (2026-07-19)** — branch `site-refresh-2026-07`, 3 commits, 39 files:
   - **Nav legibility bug fixed** — the header was transparent until 24px of scroll while
     its links were `text-navy/80`, so on the home page they rendered navy-on-navy over the
     dark hero and were effectively invisible. Header now keeps a light background; links
     larger, full opacity, evenly distributed.
   - **All 171 `[PLACEHOLDER]` markers removed.** Copy needing no factual claims is written
     and live; copy needing real facts is stripped, with each consuming section hiding
     itself so pages read as intentional. Gaps tracked in `CONTENT-NEEDED.md`.
   - **Imagery brightened** — the washed-out look was stacked navy scrims at up to 85%
     opacity, not the photography. Scrims softened and weighted toward the text column;
     images get hue-preserving `brightness-110 contrast-105`.
   - **Careers page** at `/careers`, with empty-state and application form.
   - **Footer social links** — Instagram, Facebook, LinkedIn, X as inline SVG.
   - **Insights simplified** to five categories: Blogs, Press Releases, News, Success
     Stories, Events.
   - **Contact simplified** to a single primary location (was five offices).
   - **Logo mark added** — see the caveat under Next steps.

---

## 📍 Current state

- **Latest commit:** `687fabb` — _"Add Careers page and footer social links"_ on branch
  `site-refresh-2026-07`, pushed to origin and **not yet merged into `main`**. PR:
  `https://github.com/sergesefekme/Bethesda-Group/pull/new/site-refresh-2026-07`
- **Design tokens (current):**

  | Token           | Hex        | Usage                                             |
  | --------------- | ---------- | ------------------------------------------------- |
  | `navy`          | `#1E3A5F`  | Primary backgrounds, headers (light blue)         |
  | `cognac`        | `#9A5A24`  | Accent / links / CTAs — rich copper (AA on light) |
  | `cognac-light`  | `#D6A24A`  | Luminous gold — accents on dark navy              |
  | `cognac-dark`   | `#7C4418`  | Deep bronze — hover / pressed                     |
  | `offwhite`      | `#FBF9F6`  | Warm base surface (lightened from `#F7F4EF`)      |
  | `warmgray`      | `#C9C2B8`  | Secondary text / borders on navy                  |
  | `institutional` | `#3E5C74`  | Deeper accent for the institutional track         |

- **Contrast (verified live):** copper on offwhite **4.96:1** (AA pass) · gold on navy
  **5.00:1** (AA pass). No console errors.
- **Screenshots:** the previously noted `CustomCursor` render-loop timeout did **not**
  reproduce on 2026-07-19 — screenshots and zooms worked throughout. Note that the home
  page shows an intro splash on first load (click to skip), and page transitions can catch
  a screenshot mid-fade, so allow a moment before capturing.
- **Build caution:** do **not** run `next build` while the dev server is running — they
  share `.next` webpack chunks and it corrupts the running server.

---

## 🔜 Next steps

### Content still needed → see **`CONTENT-NEEDED.md`**

The `[PLACEHOLDER]` convention is gone from the codebase. Outstanding content is now
tracked in `CONTENT-NEEDED.md` at the repo root — leadership, milestones, metrics,
portfolio, insights, the primary address, social URLs, and the regulatory/custody claims.
Affected sections hide themselves until their data files are populated, so the site is
presentable in the meantime. Search the code for `TODO(content)` and `TODO(launch)`.

### Launch blockers
- **All three forms are stubbed** — `InquiryForm`, `GatedDeckForm` and the new
  `ApplicationForm` validate and show a success state but transmit nothing. Anyone who
  submits will believe they made contact when they have not. Wire to an API route / form
  service / CRM / ATS.
- **Regulatory & custody claims are deliberately unwritten** — named regulators,
  registration numbers, client-fund custodians and investor protections. These must be
  verified, not drafted.
- **Production URL** — confirm `siteConfig.url` (`lib/content/navigation.ts`) for canonical
  tags, sitemap, robots.

### Logo caveat
The supplied `public/images/logo.jpeg` is a 363×411 screenshot: opaque white background,
rounded border, wordmark baked into the pixels. Only the circular mark is shown, cropped in
CSS by `.logo-mark` in `app/globals.css`. Two follow-ups:
- An **SVG of the mark alone** would render crisply at any size and let the crop rule be
  deleted. The current asset will look soft on high-DPI displays.
- The artwork reads **"Bethesda Global"** while the site is branded **"Bethesda Group"**.
  Confirmed 2026-07-19 that "Group" is correct, so the image's text is cropped away — but
  the source artwork should be reconciled.

### Optional / design
- The full-bleed **navy sections** were left as-is; the 2026-07-19 pass adjusted the photo
  scrims only. Revisit if they still read as too dark.
- **Mobile** was not visually verified on 2026-07-19 — the browser tool's resize did not
  affect its capture viewport. Changes were breakpoint-class only, but worth checking on a
  real device.
- Merge `site-refresh-2026-07` into `main`, then **deploy to Vercel**.
