# Image assets

Real photography is now wired into the site via `next/image`, sourced from
**Unsplash** (Unsplash License — free for commercial use, no attribution required;
credits recorded below as good practice). All files are self-hosted here — no
external image hosts or CSP config required.

Any section without a real photo still falls back to the branded duotone
placeholder (`components/ui/PlaceholderImage.tsx`, shown when no `src` is passed).

## Current images & credits

| File | Theme | Unsplash source |
| --- | --- | --- |
| `hero.jpg` | Home hero — Lagos, Nigeria at dusk | unsplash.com/photos/6UqJTfoXIq8 |
| `diaspora.jpg` | Diaspora narrative — man in city | unsplash.com/photos/UYlJA4ej_uQ |
| `sectors/renewable-energy.jpg` | Utility-scale solar farm | unsplash.com/photos/CVjxkBW22fU |
| `sectors/technology-media.jpg` | Data-centre servers | unsplash.com/photos/M5tzZtFCOfs |
| `sectors/healthcare.jpg` | Diagnostics lab | unsplash.com/photos/JqfxntbYPms |
| `sectors/education.jpg` | Students in a lecture hall | unsplash.com/photos/o3o9bewLJ_o |
| `sectors/real-estate-infrastructure.jpg` | Modern residential high-rise | unsplash.com/photos/w-QgNUOeIHI |
| `sectors/agro-allied-fmcg.jpg` | Terraced plantations (aerial) | unsplash.com/photos/i9eaAR4dWi8 |
| `sectors/advisory-services.jpg` | Diverse boardroom (also Institutional hero) | unsplash.com/photos/faEfWCdOKIg |

Sector images are reused for portfolio cards/case studies (by sector) and for
insight articles (by theme). Insight → image mapping lives in
`lib/content/insights.ts`; sector → image in `lib/content/sectors.ts`.

## Still using placeholders (add real photos when available)

- **Leadership portraits** — `components/about/LeadershipGrid.tsx` deliberately keeps
  the duotone placeholder rather than putting stock faces next to placeholder names.
  Add real headshots at `leadership/<id>.jpg` (800×1000): `chair, ceo, cio, coo,
  institutional-lead, diaspora-lead`, then pass `src` in the grid.
- **Per-project / per-company photos** — sector pages and portfolio currently reuse the
  sector image. Swap in project-specific photos when available.
- **Logo** — `logo.jpeg` is the supplied brand artwork, but it is a 363×411 screenshot:
  opaque white background, rounded border, and the words baked into the pixels. Two
  consequences. (1) `components/layout/Logo.tsx` shows only the circular mark, cropped out
  by the `.logo-mark` rule in `app/globals.css` — the crop is inset past the square's true
  edge so the white border does not show as a hairline on the navy footer. (2) The artwork
  reads **"Bethesda Global"** while the site is **"Bethesda Group"**; the wordmark is
  therefore kept as real text and the image's text is cropped away. Replacing this with an
  SVG of the mark would render crisply at any size and let the crop rule be deleted.

When adding remote-hosted images instead, allowlist the host in `next.config.mjs`
under `images.remotePatterns`.
