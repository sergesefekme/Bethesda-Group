// Open roles. Empty array renders the "no current openings" state on /careers.

export interface Role {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  summary: string;
}

// TODO(content): add live vacancies here as they open. See CONTENT-NEEDED.md.
export const openRoles: Role[] = [];

/** What it's like to work here — evergreen copy, safe to keep between hiring rounds. */
export const careerValues: { title: string; body: string }[] = [
  {
    title: "Long horizons",
    body: "We hold positions for years, not quarters. That shapes how we hire: we look for people who want to see a thesis through, not trade it.",
  },
  {
    title: "On the ground",
    body: "Capital allocation happens close to the markets it serves. Our teams spend real time with the founders, operators and institutions we back.",
  },
  {
    title: "Technical and commercial",
    body: "Investment judgement and engineering judgement sit in the same rooms. We expect people to be fluent enough in both to disagree usefully.",
  },
  {
    title: "Small teams, wide remit",
    body: "Teams stay deliberately lean, which means early ownership of real decisions and direct exposure to the people making them.",
  },
];
