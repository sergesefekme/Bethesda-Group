import { DualCTA } from "@/components/ui/DualCTA";
import { Reveal } from "@/components/ui/Reveal";

/** Dual-path closing banner reflecting both audiences. */
export function ClosingCTA() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="container-content">
        <Reveal from="up" className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cognac-light">
            Two paths, one continent
          </p>
          <h2 className="text-display font-extrabold text-offwhite">
            Invest in Africa&rsquo;s future — your way
          </h2>
          <p className="mt-5 text-warmgray">
            Whether you deploy capital at institutional scale or are investing in your homeland from
            abroad, we have built a path for you.
          </p>
        </Reveal>
        <Reveal from="up" delay={0.1} className="mt-14">
          <DualCTA variant="banner" />
        </Reveal>
      </div>
    </section>
  );
}
