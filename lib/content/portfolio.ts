// Portfolio / track record. `sector` must match a SectorSlug so the
// grid filters line up with the sectors taxonomy.

import type { SectorSlug } from "./sectors";

export interface PortfolioItem {
  slug: string;
  name: string;
  sector: SectorSlug;
  country: string;
  year: string;
  /** One-line summary for the grid card. */
  summary: string;
  /** Longer narrative for the case-study detail page. */
  overview: string;
  /** Quantified outcomes — the proof points investors look for. */
  outcomes: { label: string; value: string }[];
  status: "Active" | "Realised";
}

// TODO(content): real portfolio companies with quantified, verifiable outcomes.
// The /portfolio page shows an empty state while this list is empty.
// See CONTENT-NEEDED.md.
export const portfolio: PortfolioItem[] = [];

export function getPortfolioItem(slug: string): PortfolioItem | undefined {
  return portfolio.find((p) => p.slug === slug);
}