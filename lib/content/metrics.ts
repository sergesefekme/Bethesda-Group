// Key metrics for the animated counters strip. `prefix`/`suffix` render around
// the number. The strip hides itself entirely while this list is empty.

export interface Metric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  /** Decimal places to display (e.g. AUM 2.4B). */
  decimals?: number;
}

// TODO(content): every figure here must be an audited number before it goes
// live. See CONTENT-NEEDED.md for the list previously shown as placeholders.
export const metrics: Metric[] = [];
