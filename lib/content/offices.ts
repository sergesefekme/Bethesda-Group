// [PLACEHOLDER] Office locations. Replace with real addresses before launch.
// `hq: true` marks the international headquarters.

export interface Office {
  city: string;
  country: string;
  region: "International HQ" | "Africa";
  address: string;
  hq?: boolean;
}

export const offices: Office[] = [
  { city: "[PLACEHOLDER] London", country: "United Kingdom", region: "International HQ", address: "[PLACEHOLDER] Address line, Postcode", hq: true },
  { city: "[PLACEHOLDER] Lagos", country: "Nigeria", region: "Africa", address: "[PLACEHOLDER] Address line" },
  { city: "[PLACEHOLDER] Nairobi", country: "Kenya", region: "Africa", address: "[PLACEHOLDER] Address line" },
  { city: "[PLACEHOLDER] Johannesburg", country: "South Africa", region: "Africa", address: "[PLACEHOLDER] Address line" },
  { city: "[PLACEHOLDER] Accra", country: "Ghana", region: "Africa", address: "[PLACEHOLDER] Address line" },
];

// [PLACEHOLDER] Countries of operation, used by the home AfricaMap hotspots.
// `x`/`y` are percentage coordinates on the stylised map (0–100). Adjust when
// finalising the operating-country list; `sectorCount` drives density on hover.
export interface OperatingCountry {
  name: string;
  x: number;
  y: number;
  sectorCount: number;
}

export const operatingCountries: OperatingCountry[] = [
  { name: "Nigeria", x: 41, y: 47, sectorCount: 6 },
  { name: "Ghana", x: 33, y: 49, sectorCount: 4 },
  { name: "Côte d'Ivoire", x: 28, y: 48, sectorCount: 3 },
  { name: "Kenya", x: 68, y: 57, sectorCount: 5 },
  { name: "Rwanda", x: 62, y: 59, sectorCount: 3 },
  { name: "Tanzania", x: 66, y: 63, sectorCount: 4 },
  { name: "South Africa", x: 57, y: 84, sectorCount: 5 },
  { name: "Egypt", x: 58, y: 22, sectorCount: 3 },
];
