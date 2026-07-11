// [PLACEHOLDER] Leadership team. Replace every name, title, and bio with real
// people before launch. Photos are rendered as PlaceholderImage until real
// headshots are added at /public/images/leadership/<id>.jpg (see README).

export interface Leader {
  id: string;
  name: string;
  title: string;
  /** Short bio revealed on expand. */
  bio: string;
  /** Region/focus tag shown under the name. */
  focus: string;
}

export const leadership: Leader[] = [
  {
    id: "chair",
    name: "[PLACEHOLDER] Full Name",
    title: "Group Chairman",
    focus: "Governance & Strategy",
    bio: "[PLACEHOLDER] Two to three sentences of substantive biography — prior institutions, sectors of expertise, and the mandate this person leads at Bethesda Group. Written in a measured, credible register.",
  },
  {
    id: "ceo",
    name: "[PLACEHOLDER] Full Name",
    title: "Group Chief Executive Officer",
    focus: "Capital Deployment",
    bio: "[PLACEHOLDER] Two to three sentences of substantive biography covering track record across African markets and the areas of the portfolio this executive oversees.",
  },
  {
    id: "cio",
    name: "[PLACEHOLDER] Full Name",
    title: "Chief Investment Officer",
    focus: "Portfolio & Risk",
    bio: "[PLACEHOLDER] Two to three sentences on investment philosophy, sector coverage, and prior institutional experience.",
  },
  {
    id: "coo",
    name: "[PLACEHOLDER] Full Name",
    title: "Chief Operating Officer",
    focus: "Operations & Value Creation",
    bio: "[PLACEHOLDER] Two to three sentences on operational leadership and portfolio value-creation experience.",
  },
  {
    id: "institutional-lead",
    name: "[PLACEHOLDER] Full Name",
    title: "Head of Institutional Partnerships",
    focus: "Sovereign & Government",
    bio: "[PLACEHOLDER] Two to three sentences on relationships with governments, DFIs and sovereign funds across the continent.",
  },
  {
    id: "diaspora-lead",
    name: "[PLACEHOLDER] Full Name",
    title: "Head of Diaspora & Retail Investment",
    focus: "Individual Investors",
    bio: "[PLACEHOLDER] Two to three sentences on building accessible, well-governed investment products for diaspora and retail investors.",
  },
];

// [PLACEHOLDER] Milestones for the About timeline. Convert to real, dated events.
export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  { year: "[YYYY]", title: "[PLACEHOLDER] Founding", description: "[PLACEHOLDER] Bethesda Group established with a mandate to deploy long-term capital across African growth sectors." },
  { year: "[YYYY]", title: "[PLACEHOLDER] First fund close", description: "[PLACEHOLDER] Inaugural institutional vehicle closed, anchored by [PLACEHOLDER] partners." },
  { year: "[YYYY]", title: "[PLACEHOLDER] Multi-country expansion", description: "[PLACEHOLDER] Operations extended across additional African markets." },
  { year: "[YYYY]", title: "[PLACEHOLDER] Diaspora platform launch", description: "[PLACEHOLDER] Accessible investment channel opened to individual and diaspora investors." },
  { year: "[YYYY]", title: "[PLACEHOLDER] Present", description: "[PLACEHOLDER] A pan-African investment technology group operating across seven sectors." },
];
