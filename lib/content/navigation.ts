// Primary site navigation — single source of truth for the header and footer.

export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: "Institutional", href: "/institutional" },
  { label: "Individual", href: "/individual" },
  { label: "Sectors", href: "/sectors" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Invest",
    links: [
      { label: "Institutional Investors", href: "/institutional" },
      { label: "Individual & Diaspora", href: "/individual" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Sectors", href: "/sectors" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Newsroom", href: "/insights" },
    ],
  },
];

// Central site metadata used across SEO tags. [PLACEHOLDER] domain until deployed.
export const siteConfig = {
  name: "Bethesda Group",
  shortName: "Bethesda",
  description:
    "Bethesda Group is a pan-African investment technology group deploying long-term capital across renewable energy, technology, healthcare, education, infrastructure, agro-allied and advisory services.",
  url: "https://www.bethesdagroup.com", // [PLACEHOLDER] production URL
  tagline: "Long-term capital for Africa's next era.",
};
