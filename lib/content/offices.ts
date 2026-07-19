// Primary office location and contact addresses.

export interface Office {
  city: string;
  region: string;
  country: string;
  addressLines: string[];
}

export const primaryOffice: Office = {
  city: "Silver Spring",
  region: "Maryland",
  country: "United States",
  addressLines: ["8720 Georgia Ave, Suite 302", "Silver Spring, MD 20910"],
};

/** True once the address above has been filled in. */
export const hasPrimaryOffice = Boolean(primaryOffice.city && primaryOffice.country);

export const contactEmails = {
  general: "info@bethesdaglobalnetwork.com",
  direct: "gkodjo@bethesdaglobalnetwork.com",
  // WARNING: bethesdayglobalnetwork.com (note the "y") was unregistered as of
  // 2026-07-19 — no A, MX or NS records. Mail to this address BOUNCES until the
  // domain is registered and MX records are configured. Published at the
  // owner's request on the understanding they will register it. Remove this
  // entry if that does not happen. See CONTENT-NEEDED.md.
  directAlt: "gkodjo@bethesdayglobalnetwork.com",
} as const;

export const contactPhone = {
  /** Display form. */
  label: "703.977.2426",
  /** E.164 for the tel: href. */
  href: "tel:+17039772426",
} as const;

// Countries of operation, used by the home AfricaMap hotspots. `x`/`y` are
// percentage coordinates on the stylised map (0–100); `sectorCount` drives
// density on hover.
export interface OperatingCountry {
  name: string;
  x: number;
  y: number;
  sectorCount: number;
}

export const operatingCountries: OperatingCountry[] = [
  { name: "Senegal", x: 24, y: 38, sectorCount: 3 },
  { name: "Nigeria", x: 41, y: 47, sectorCount: 6 },
  { name: "Ghana", x: 33, y: 49, sectorCount: 4 },
  { name: "Côte d'Ivoire", x: 28, y: 48, sectorCount: 3 },
  { name: "Cameroon", x: 47, y: 54, sectorCount: 3 },
  { name: "Kenya", x: 68, y: 57, sectorCount: 5 },
  { name: "Rwanda", x: 62, y: 59, sectorCount: 3 },
  { name: "Tanzania", x: 66, y: 63, sectorCount: 4 },
  { name: "South Africa", x: 57, y: 84, sectorCount: 5 },
  { name: "Egypt", x: 58, y: 22, sectorCount: 3 },
];
