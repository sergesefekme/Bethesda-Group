// [PLACEHOLDER] Sector data — single source of truth for the sector grid, the
// /sectors index, and each /sectors/[slug] detail page. Replace copy/figures with
// real content before launch. Icons are simple inline keys mapped in SectorIcon.

export type SectorSlug =
  | "renewable-energy"
  | "technology-media"
  | "healthcare"
  | "education"
  | "real-estate-infrastructure"
  | "agro-allied-fmcg"
  | "advisory-services";

export interface Sector {
  slug: SectorSlug;
  name: string;
  /** One-line positioning used on the home grid. */
  tagline: string;
  /** Short paragraph shown on grid expand + top of detail page. */
  summary: string;
  /** Investment thesis for the vertical (detail page). */
  thesis: string;
  focusAreas: string[];
  /** [PLACEHOLDER] Notable projects — swap for real portfolio references. */
  notableProjects: { name: string; country: string; note: string }[];
  /** Icon key consumed by components/ui/SectorIcon.tsx */
  icon:
    | "energy"
    | "tech"
    | "health"
    | "education"
    | "realestate"
    | "agro"
    | "advisory";
}

export const sectors: Sector[] = [
  {
    slug: "renewable-energy",
    name: "Renewable Energy",
    tagline: "Powering the continent's next decade of growth.",
    summary:
      "[PLACEHOLDER] We back utility-scale and distributed clean-energy assets — solar, wind, hydro and storage — that close Africa's power gap while delivering resilient, inflation-linked returns.",
    thesis:
      "[PLACEHOLDER] Structural demand, falling technology costs and supportive regulatory reform make African renewables one of the most compelling risk-adjusted opportunities of the decade. We invest across the value chain, from generation to grid-edge distribution.",
    focusAreas: [
      "Utility-scale solar and wind generation",
      "Battery and long-duration storage",
      "Mini-grids and distributed C&I power",
      "Transmission and grid modernisation",
    ],
    notableProjects: [
      { name: "[PLACEHOLDER] Solar IPP", country: "Nigeria", note: "[PLACEHOLDER] 120 MW greenfield generation" },
      { name: "[PLACEHOLDER] Mini-grid platform", country: "Kenya", note: "[PLACEHOLDER] 80+ rural sites" },
    ],
    icon: "energy",
  },
  {
    slug: "technology-media",
    name: "Technology & Media",
    tagline: "Building the digital rails of a young continent.",
    summary:
      "[PLACEHOLDER] From fintech and enterprise software to digital media, we invest in the platforms formalising commerce and connecting Africa's fast-growing, mobile-first population.",
    thesis:
      "[PLACEHOLDER] Africa's median age and accelerating smartphone penetration create a rare greenfield for digital infrastructure. We partner with founders scaling defensible platforms across payments, logistics, and content.",
    focusAreas: [
      "Fintech and payments infrastructure",
      "Enterprise and vertical SaaS",
      "Digital media and creator economy",
      "Data centres and connectivity",
    ],
    notableProjects: [
      { name: "[PLACEHOLDER] Payments platform", country: "Ghana", note: "[PLACEHOLDER] Series B lead" },
      { name: "[PLACEHOLDER] Logistics SaaS", country: "Egypt", note: "[PLACEHOLDER] Regional expansion" },
    ],
    icon: "tech",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Expanding access to quality, affordable care.",
    summary:
      "[PLACEHOLDER] We invest in care delivery, diagnostics, pharmaceutical supply and health technology that widen access and strengthen the resilience of African health systems.",
    thesis:
      "[PLACEHOLDER] Rising incomes and under-served demand are reshaping African healthcare. We fund scalable, outcome-driven models that improve access while building durable, well-governed operators.",
    focusAreas: [
      "Hospitals and integrated care networks",
      "Diagnostics and medical devices",
      "Pharmaceutical manufacturing and supply",
      "Digital health and telemedicine",
    ],
    notableProjects: [
      { name: "[PLACEHOLDER] Diagnostics chain", country: "Rwanda", note: "[PLACEHOLDER] 40 sites" },
      { name: "[PLACEHOLDER] Pharma manufacturing", country: "Nigeria", note: "[PLACEHOLDER] Local production" },
    ],
    icon: "health",
  },
  {
    slug: "education",
    name: "Education",
    tagline: "Investing in the continent's greatest asset — its people.",
    summary:
      "[PLACEHOLDER] We support education providers and skills platforms preparing Africa's young population for a modern, digital economy — from K-12 to vocational and edtech.",
    thesis:
      "[PLACEHOLDER] With the world's youngest population, Africa's return on education capital is unmatched. We back operators and platforms that pair quality outcomes with sustainable unit economics.",
    focusAreas: [
      "K-12 and higher-education networks",
      "Vocational and technical skills",
      "Edtech and learning platforms",
      "Workforce and professional training",
    ],
    notableProjects: [
      { name: "[PLACEHOLDER] School network", country: "Kenya", note: "[PLACEHOLDER] 25 campuses" },
      { name: "[PLACEHOLDER] Skills platform", country: "South Africa", note: "[PLACEHOLDER] 100k learners" },
    ],
    icon: "education",
  },
  {
    slug: "real-estate-infrastructure",
    name: "Real Estate & Infrastructure",
    tagline: "The hard assets underpinning African urbanisation.",
    summary:
      "[PLACEHOLDER] We develop and finance the housing, logistics, transport and social infrastructure demanded by one of the fastest-urbanising regions on earth.",
    thesis:
      "[PLACEHOLDER] Rapid urbanisation is outpacing supply of quality real estate and core infrastructure. We invest in long-duration, cash-generative assets with strong demographic tailwinds.",
    focusAreas: [
      "Affordable and mid-market housing",
      "Logistics and industrial parks",
      "Transport and social infrastructure",
      "Mixed-use urban development",
    ],
    notableProjects: [
      { name: "[PLACEHOLDER] Logistics park", country: "Côte d'Ivoire", note: "[PLACEHOLDER] Phase 1 delivered" },
      { name: "[PLACEHOLDER] Housing scheme", country: "Nigeria", note: "[PLACEHOLDER] 1,500 units" },
    ],
    icon: "realestate",
  },
  {
    slug: "agro-allied-fmcg",
    name: "Agro-allied & FMCG",
    tagline: "From farm to shelf — value chains that feed a continent.",
    summary:
      "[PLACEHOLDER] We invest across agriculture, food processing and consumer goods, strengthening value chains and capturing the demand of a rising African middle class.",
    thesis:
      "[PLACEHOLDER] Import substitution, food security and a growing consumer base make integrated agro and FMCG platforms structurally attractive. We back operators that localise value and scale distribution.",
    focusAreas: [
      "Primary agriculture and inputs",
      "Food processing and packaging",
      "Branded consumer goods (FMCG)",
      "Cold chain and distribution",
    ],
    notableProjects: [
      { name: "[PLACEHOLDER] Food processing", country: "Tanzania", note: "[PLACEHOLDER] Export-grade facility" },
      { name: "[PLACEHOLDER] FMCG brand", country: "Ghana", note: "[PLACEHOLDER] National distribution" },
    ],
    icon: "agro",
  },
  {
    slug: "advisory-services",
    name: "Advisory Services",
    tagline: "Institutional-grade counsel for capital entering Africa.",
    summary:
      "[PLACEHOLDER] Our advisory practice supports governments, sovereign funds and corporates on capital raising, transaction structuring and market entry across the continent.",
    thesis:
      "[PLACEHOLDER] Deploying capital across African markets demands local depth and institutional rigour. Our advisory bridges that gap — de-risking entry and structuring durable partnerships.",
    focusAreas: [
      "Capital raising and syndication",
      "Transaction structuring and M&A",
      "Market entry and expansion strategy",
      "Public-private partnership advisory",
    ],
    notableProjects: [
      { name: "[PLACEHOLDER] Sovereign advisory", country: "Regional", note: "[PLACEHOLDER] Infrastructure mandate" },
      { name: "[PLACEHOLDER] Cross-border M&A", country: "Pan-African", note: "[PLACEHOLDER] Buy-side advisory" },
    ],
    icon: "advisory",
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
