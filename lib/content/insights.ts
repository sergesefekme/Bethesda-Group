// Insights / newsroom. `body` holds simple paragraphs for the article detail
// template.

export type InsightCategory =
  | "Blogs"
  | "Press Releases"
  | "News"
  | "Success Stories"
  | "Events";

/** Display order for the Insights page sections. */
export const insightCategories: InsightCategory[] = [
  "Blogs",
  "Press Releases",
  "News",
  "Success Stories",
  "Events",
];

export interface Insight {
  slug: string;
  title: string;
  category: InsightCategory;
  date: string; // ISO
  excerpt: string;
  author: string;
  body: string[];
  /** Thematic photo under /public/images. */
  image: string;
}

// TODO(content): no published articles yet. Each entry needs a real title,
// excerpt, named author, and body copy. See CONTENT-NEEDED.md.
export const insights: Insight[] = [];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
