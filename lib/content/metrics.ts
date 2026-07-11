// [PLACEHOLDER] Key metrics for the animated counters strip. Replace every value
// with audited figures before launch. `prefix`/`suffix` render around the number.

export interface Metric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  /** Decimal places to display (e.g. AUM 2.4B). */
  decimals?: number;
}

export const metrics: Metric[] = [
  { label: "Assets under management", value: 2.4, prefix: "$", suffix: "B", decimals: 1 }, // [PLACEHOLDER]
  { label: "Countries of operation", value: 14, suffix: "" }, // [PLACEHOLDER]
  { label: "Investment sectors", value: 7, suffix: "" },
  { label: "Years of operation", value: 12, suffix: "+" }, // [PLACEHOLDER]
  { label: "Portfolio companies", value: 38, suffix: "+" }, // [PLACEHOLDER]
];
