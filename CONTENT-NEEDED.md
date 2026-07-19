# Content needed before launch

Every `[PLACEHOLDER]` marker has been removed from the codebase. Where copy could
be written without asserting facts about the business, it was written and is now
live. Everything on this page is the opposite case: **content that requires real
information only the business can supply.**

Rather than leave invented text on the site, the affected data is empty and the
sections that consume it hide themselves. Fill these in and the sections
reappear automatically — no component changes required.

Search the repo for `TODO(content)` and `TODO(launch)` to find each spot in code.

---

## 1. Blocking — the site is visibly incomplete without these

### Primary office address
`lib/content/offices.ts` → `primaryOffice`

Needs: city, region/state, country, and street address lines. While empty, the
office block is hidden in both the footer and `/contact`.

> This replaces the previous five-office list (London, Lagos, Nairobi,
> Johannesburg, Accra), which was removed as requested.

### Social profile URLs
`lib/content/navigation.ts` → `socialLinks`

All four currently point at `#`. Needs live URLs for:

| Network | URL |
| --- | --- |
| Instagram | |
| Facebook | |
| LinkedIn | |
| X | |

### Contact email addresses
`app/contact/page.tsx`

The press and general-enquiry addresses were placeholders and have been removed.
The media block now directs people to the enquiry form instead. Supply real
addresses if you want them shown directly.

---

## 2. Empty sections — hidden until content arrives

### Leadership team
`lib/content/leadership.ts` → `leadership`

Six roles previously existed as placeholders: Group Chairman, Group CEO, CIO,
COO, Head of Institutional Partnerships, Head of Diaspora & Retail Investment.

Each needs: real name, title, focus tag, and a two-to-three sentence biography.
Headshots go in `public/images/leadership/<id>.jpg`.

*The entire Leadership section on `/about` is hidden while this is empty.*

### Company milestones
`lib/content/leadership.ts` → `milestones`

Needs real, dated events (founding, first fund close, market expansions,
platform launches). Years were `[YYYY]` placeholders.

*The Milestones timeline on `/about` is hidden while this is empty.*

### Headline metrics
`lib/content/metrics.ts` → `metrics`

Every figure must be audited before it goes live. Previously shown as
placeholders:

- Assets under management — was `$2.4B`
- Countries of operation — was `14`
- Investment sectors — was `7` *(this one is verifiable from `sectors.ts`)*
- Years of operation — was `12+`
- Portfolio companies — was `38+`

*The metrics strip on the home page is hidden while this is empty.*

### Portfolio / track record
`lib/content/portfolio.ts` → `portfolio`

Six fabricated companies were removed (Sahel Solar, KolaPay, Amara Health,
Ubuntu Learn, Lagos Logistics Park, Savanna Foods) along with their outcome
figures.

Each real entry needs: name, sector slug, country, year, status, one-line
summary, case-study narrative, and quantified outcomes.

*`/portfolio` shows an empty grid and no case-study pages exist while this is
empty.*

### Insights articles
`lib/content/insights.ts` → `insights`

All five articles were placeholder text end to end — titles, excerpts, authors
and body copy — and were removed.

The taxonomy was also simplified as requested. Categories are now exactly:
**Blogs · Press Releases · News · Success Stories · Events**
(previously Market Analysis, Sector News, Company Announcements).

*`/insights` renders all five category headings with a "nothing published yet"
note under each.*

### Sector notable projects
`lib/content/sectors.ts` → `notableProjects` on each of the 7 sectors

Specific claims (e.g. "120 MW greenfield generation", "80+ rural sites") were
removed. Sector summaries and investment theses were **kept** — those are
positioning, not factual assertions.

*The Notable Projects section on each `/sectors/[slug]` page is hidden while
empty.*

### Institutional proof points
`app/institutional/page.tsx` → `caseStudies`

Removed: "120 MW deployed" (Nigeria), "$210M mobilised" (Côte d'Ivoire),
"40 sites opened" (Rwanda). Needs attributable transactions with verified
figures.

*The Track Record section is hidden while this is empty.*

---

## 3. Regulatory and compliance claims — verify before publishing

These were drafted as placeholders and have been **deliberately not rewritten**.
Asserting registration, regulation or custody arrangements that don't exist is a
legal exposure, not a copy gap.

### Individual investor trust points
`app/individual/page.tsx` → `trustPoints`

Needs, with specifics:
- Named regulators and registration numbers, per jurisdiction
- Named custodians and partner banks holding client funds
- The actual investor protections and disclosures that apply

*The "Trust & protection" section on `/individual` is hidden while this is
empty.*

### Institutional compliance pillar
`app/institutional/page.tsx` → `governancePillars`

A "Compliance & regulation" pillar claiming registration across jurisdictions
plus AML/KYC and ESG frameworks was removed and replaced with an
"Aligned incentives" pillar. Reinstate it once the regulatory position is
confirmed.

### Minimum investment
`app/individual/page.tsx`

The minimum-investment panel showed `[PLACEHOLDER] $—` and was removed entirely.
Needs the true entry minimum and any tiered options for diaspora and retail
investors. The commented-out block marks where it goes.

---

## 4. Functional gaps — forms do not send

**All three forms are stubbed.** They validate and show a success state, but
nothing is transmitted or stored anywhere. A user who submits one will believe
they have been in contact when they have not.

| Form | File |
| --- | --- |
| General enquiry | `components/shared/InquiryForm.tsx` |
| Institutional deck request | `components/shared/GatedDeckForm.tsx` |
| Careers application | `components/shared/ApplicationForm.tsx` |

Each needs `handleSubmit` wired to an API route, form service or ATS before
launch. This pre-dates the current pass for the first two; the third was added
with it and follows the same pattern deliberately.

---

## 5. Careers

`lib/content/careers.ts` → `openRoles`

Currently empty, which renders the requested **"No current openings — check back
soon"** state plus an invitation to apply speculatively. This is a valid live
state, not a gap — add roles as they open.

The "How we work" copy on the page is evergreen and needs no maintenance
between hiring rounds.

---

## 6. Miscellaneous

- **Production domain** — `lib/content/navigation.ts` → `siteConfig.url` is set
  to `https://www.bethesdagroup.com`. Confirm before deploy; it drives sitemap
  and canonical URLs.
- **Leadership headshots** — `public/images/leadership/` is empty. Images render
  as a duotone field until real photos land.
- **Vector logo** — `public/images/logo.jpeg` is a 363×411 screenshot with an
  opaque white background and the wordmark baked in. Only the circular mark is
  used, cropped in CSS (`.logo-mark` in `app/globals.css`). An SVG or
  transparent PNG of the mark alone would render crisply at any size and let
  that crop rule be removed.
- **Logo wordmark says "Bethesda Global"** — the site is branded "Bethesda
  Group" throughout. Confirmed with the user that "Group" is correct and the
  artwork is outdated, so the image's text is cropped away. Worth reconciling
  the artwork at some point.
- **Operating countries** — `lib/content/offices.ts` → `operatingCountries` was
  left in place; it drives the home-page map. Confirm the ten-country list and
  per-market sector counts are accurate.
