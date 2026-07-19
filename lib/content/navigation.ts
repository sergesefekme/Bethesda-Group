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
  { label: "Careers", href: "/careers" },
];

export type SocialIconName = "instagram" | "facebook" | "linkedin" | "x";

// TODO(content): replace the `#` placeholders with the live profile URLs before
// launch. See CONTENT-NEEDED.md.
export const socialLinks: { label: string; href: string; icon: SocialIconName }[] = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "X", href: "#", icon: "x" },
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
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      // TODO(content): restore { label: "Leadership", href: "/about#leadership" }
      // once lib/content/leadership.ts is populated — the anchor target is
      // hidden while that list is empty.
    ],
  },
];

// Central site metadata used across SEO tags.
export const siteConfig = {
  name: "Bethesda Group",
  shortName: "Bethesda",
  description:
    "Bethesda Group is a pan-African investment technology group deploying long-term capital across renewable energy, technology, healthcare, education, infrastructure, agro-allied and advisory services.",
  url: "https://www.bethesdagroup.com", // TODO(content): confirm production domain.
  tagline: "Long-term capital for Africa's next era.",
};
