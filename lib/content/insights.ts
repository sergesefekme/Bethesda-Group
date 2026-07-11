// [PLACEHOLDER] Insights / newsroom. Replace with real articles before launch.
// `body` holds simple paragraphs for the article detail template.

export type InsightCategory = "Market Analysis" | "Sector News" | "Company Announcements";

export interface Insight {
  slug: string;
  title: string;
  category: InsightCategory;
  date: string; // ISO
  readingTime: string;
  excerpt: string;
  author: string;
  body: string[];
  /** Thematic photo under /public/images. */
  image: string;
}

export const insights: Insight[] = [
  {
    slug: "african-renewables-inflection",
    title: "[PLACEHOLDER] Why African renewables have reached an inflection point",
    category: "Market Analysis",
    date: "2026-05-18",
    readingTime: "6 min",
    author: "[PLACEHOLDER] Author Name",
    excerpt:
      "[PLACEHOLDER] Falling technology costs and regulatory reform are converging to make clean-energy generation one of the continent's most investable themes.",
    body: [
      "[PLACEHOLDER] Opening paragraph framing the market thesis with a concrete data point or observation from a named African market.",
      "[PLACEHOLDER] Supporting analysis paragraph — what is changing structurally, and why it matters for long-term capital.",
      "[PLACEHOLDER] Closing paragraph connecting the theme back to Bethesda Group's positioning and portfolio.",
    ],
    image: "/images/sectors/renewable-energy.jpg",
  },
  {
    slug: "diaspora-capital-formalising",
    title: "[PLACEHOLDER] Diaspora capital is formalising — and it is reshaping African markets",
    category: "Market Analysis",
    date: "2026-04-02",
    readingTime: "5 min",
    author: "[PLACEHOLDER] Author Name",
    excerpt:
      "[PLACEHOLDER] Remittances have long outpaced aid; the next shift is turning that flow into structured, protected investment.",
    body: [
      "[PLACEHOLDER] Opening paragraph on the scale of diaspora flows and the gap between remittance and investment.",
      "[PLACEHOLDER] Analysis of what accessible, well-governed products unlock for both investors and recipient economies.",
      "[PLACEHOLDER] Closing paragraph on Bethesda Group's approach to serving individual and diaspora investors.",
    ],
    image: "/images/diaspora.jpg",
  },
  {
    slug: "bethesda-expands-operations",
    title: "[PLACEHOLDER] Bethesda Group expands operations into two new markets",
    category: "Company Announcements",
    date: "2026-03-11",
    readingTime: "3 min",
    author: "[PLACEHOLDER] Communications",
    excerpt:
      "[PLACEHOLDER] The group extends its pan-African footprint, deepening its presence across priority sectors.",
    body: [
      "[PLACEHOLDER] Announcement lead paragraph — what, where, and the strategic rationale.",
      "[PLACEHOLDER] Supporting detail — sectors of focus in the new markets and local partnerships.",
      "[PLACEHOLDER] Executive quote and forward-looking statement.",
    ],
    image: "/images/hero.jpg",
  },
  {
    slug: "healthcare-access-thesis",
    title: "[PLACEHOLDER] The investment case for African healthcare access",
    category: "Sector News",
    date: "2026-02-20",
    readingTime: "7 min",
    author: "[PLACEHOLDER] Author Name",
    excerpt:
      "[PLACEHOLDER] Under-served demand and rising incomes are creating durable, outcome-driven opportunities in care delivery.",
    body: [
      "[PLACEHOLDER] Opening paragraph on healthcare demand dynamics across the continent.",
      "[PLACEHOLDER] Analysis of scalable, well-governed care and diagnostics models.",
      "[PLACEHOLDER] Closing paragraph on the group's healthcare portfolio and thesis.",
    ],
    image: "/images/sectors/healthcare.jpg",
  },
  {
    slug: "ppp-infrastructure-note",
    title: "[PLACEHOLDER] Structuring PPPs that actually deliver infrastructure",
    category: "Sector News",
    date: "2026-01-15",
    readingTime: "8 min",
    author: "[PLACEHOLDER] Author Name",
    excerpt:
      "[PLACEHOLDER] Well-structured public-private partnerships can de-risk the infrastructure the continent urgently needs.",
    body: [
      "[PLACEHOLDER] Opening paragraph on the infrastructure financing gap.",
      "[PLACEHOLDER] Analysis of governance and risk-allocation principles for durable PPPs.",
      "[PLACEHOLDER] Closing paragraph on Bethesda Group's advisory and co-investment role.",
    ],
    image: "/images/sectors/real-estate-infrastructure.jpg",
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
