// Leadership team. Photos render as PlaceholderImage until real headshots are
// added at /public/images/leadership/<id>.jpg (see public/images/README.md).

export interface Leader {
  id: string;
  name: string;
  title: string;
  /** Short bio revealed on expand. */
  bio: string;
  /** Region/focus tag shown under the name. */
  focus: string;
}

// TODO(content): real names, titles and biographies required. The About page
// hides the leadership section while this is empty. See CONTENT-NEEDED.md.
export const leadership: Leader[] = [];

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

// TODO(content): real, dated milestones required. See CONTENT-NEEDED.md.
export const milestones: Milestone[] = [];
