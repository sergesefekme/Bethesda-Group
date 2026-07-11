// [PLACEHOLDER] Portfolio / track record. Replace with real portfolio companies
// and quantified outcomes before launch. `sector` must match a SectorSlug so the
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

export const portfolio: PortfolioItem[] = [
  {
    slug: "sahel-solar",
    name: "[PLACEHOLDER] Sahel Solar",
    sector: "renewable-energy",
    country: "Nigeria",
    year: "2021",
    status: "Active",
    summary: "[PLACEHOLDER] Utility-scale solar generation closing a regional power deficit.",
    overview:
      "[PLACEHOLDER] A fuller case-study narrative: the thesis behind the investment, Bethesda Group's role, how value was created, and the current status of the asset. Keep the tone factual and outcome-led.",
    outcomes: [
      { label: "Installed capacity", value: "120 MW" },
      { label: "Homes powered", value: "180,000" },
      { label: "CO₂ avoided / yr", value: "160kt" },
    ],
  },
  {
    slug: "kola-pay",
    name: "[PLACEHOLDER] KolaPay",
    sector: "technology-media",
    country: "Ghana",
    year: "2022",
    status: "Active",
    summary: "[PLACEHOLDER] Payments infrastructure formalising SME commerce.",
    overview:
      "[PLACEHOLDER] Case-study narrative for the fintech investment, including growth metrics and Bethesda Group's contribution to scale and governance.",
    outcomes: [
      { label: "Merchants", value: "45,000" },
      { label: "TPV / yr", value: "$310M" },
      { label: "Markets", value: "3" },
    ],
  },
  {
    slug: "amara-health",
    name: "[PLACEHOLDER] Amara Health",
    sector: "healthcare",
    country: "Rwanda",
    year: "2020",
    status: "Active",
    summary: "[PLACEHOLDER] Diagnostics network widening access to testing.",
    overview:
      "[PLACEHOLDER] Case-study narrative for the diagnostics platform, including access outcomes and expansion.",
    outcomes: [
      { label: "Sites", value: "40" },
      { label: "Tests / yr", value: "1.2M" },
      { label: "Turnaround", value: "-38%" },
    ],
  },
  {
    slug: "ubuntu-learn",
    name: "[PLACEHOLDER] Ubuntu Learn",
    sector: "education",
    country: "South Africa",
    year: "2023",
    status: "Active",
    summary: "[PLACEHOLDER] Skills platform bridging graduates to employment.",
    overview:
      "[PLACEHOLDER] Case-study narrative for the edtech / skills platform, including learner outcomes and employer partnerships.",
    outcomes: [
      { label: "Learners", value: "100,000" },
      { label: "Placement rate", value: "72%" },
      { label: "Employer partners", value: "140" },
    ],
  },
  {
    slug: "lagos-logistics-park",
    name: "[PLACEHOLDER] Lagos Logistics Park",
    sector: "real-estate-infrastructure",
    country: "Nigeria",
    year: "2019",
    status: "Active",
    summary: "[PLACEHOLDER] Grade-A logistics real estate serving coastal trade.",
    overview:
      "[PLACEHOLDER] Case-study narrative for the logistics infrastructure asset, including occupancy and throughput.",
    outcomes: [
      { label: "GLA", value: "85,000 m²" },
      { label: "Occupancy", value: "94%" },
      { label: "Jobs enabled", value: "2,300" },
    ],
  },
  {
    slug: "savanna-foods",
    name: "[PLACEHOLDER] Savanna Foods",
    sector: "agro-allied-fmcg",
    country: "Tanzania",
    year: "2018",
    status: "Realised",
    summary: "[PLACEHOLDER] Export-grade food processing with national distribution.",
    overview:
      "[PLACEHOLDER] Case-study narrative for the agro / FMCG investment, including the realisation and returns achieved.",
    outcomes: [
      { label: "Revenue CAGR", value: "31%" },
      { label: "Smallholders", value: "12,000" },
      { label: "Hold period", value: "5 yrs" },
    ],
  },
];

export function getPortfolioItem(slug: string): PortfolioItem | undefined {
  return portfolio.find((p) => p.slug === slug);
}
