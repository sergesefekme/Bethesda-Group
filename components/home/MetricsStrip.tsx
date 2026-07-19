import { metrics } from "@/lib/content/metrics";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Key-metrics strip with counters that animate on scroll into view. Renders
 * nothing until audited figures are supplied, rather than showing placeholders.
 */
export function MetricsStrip() {
  if (metrics.length === 0) return null;

  return (
    <section className="border-y border-navy/10 bg-offwhite-dark/50 py-20 md:py-24">
      <div className="container-content">
        <Reveal from="up">
          <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-cognac">
            The group at a glance
          </p>
        </Reveal>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} from="up" delay={i * 0.08} className="text-center">
              <dd className="text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
              </dd>
              <dt className="mx-auto mt-3 max-w-[12ch] text-sm text-navy/60">{metric.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
