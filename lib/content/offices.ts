// Primary office location.

export interface Office {
  city: string;
  region: string;
  country: string;
  addressLines: string[];
}

// TODO(content): replace with the real primary address. See CONTENT-NEEDED.md.
export const primaryOffice: Office = {
  city: "",
  region: "",
  country: "",
  addressLines: [],
};

/** True once the address above has been filled in. */
export const hasPrimaryOffice = Boolean(primaryOffice.city && primaryOffice.country);

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
