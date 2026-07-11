# Image assets

The site currently ships **no photography** — every image is a self-contained CSS
placeholder (`components/ui/PlaceholderImage.tsx`), clearly labelled `[PLACEHOLDER-IMAGE]`.

To use real photos, drop optimised files here and replace the relevant
`<PlaceholderImage />` usages with `next/image`. Suggested structure and filenames:

```
public/images/
  hero.jpg                     # 2400×1600 — home hero (pan-African city/industry/people)
  og.png                       # optional 1200×630 static OG (else app/opengraph-image.tsx is used)
  logo.svg                     # brand wordmark/logo (replaces text Logo)
  leadership/
    chair.jpg  ceo.jpg  cio.jpg  coo.jpg  institutional-lead.jpg  diaspora-lead.jpg   # 800×1000
  sectors/
    renewable-energy.jpg  technology-media.jpg  healthcare.jpg  education.jpg
    real-estate-infrastructure.jpg  agro-allied-fmcg.jpg  advisory-services.jpg        # 1600×900
  portfolio/
    sahel-solar.jpg  kola-pay.jpg  amara-health.jpg  ubuntu-learn.jpg
    lagos-logistics-park.jpg  savanna-foods.jpg                                         # 1600×1200
  insights/
    <article-slug>.jpg                                                                 # 1600×1000
```

When adding remote-hosted images instead, allowlist the host in `next.config.mjs`
under `images.remotePatterns`.
