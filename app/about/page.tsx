import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { LeadershipGrid } from "@/components/about/LeadershipGrid";
import { Timeline } from "@/components/about/Timeline";
import { leadership, milestones } from "@/lib/content/leadership";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bethesda Group is a pan-African investment technology group deploying long-term capital across seven sectors — our mission, leadership and milestones.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the group"
        title={<>Patient capital, pan-African conviction</>}
        description="We exist to channel long-term, well-governed capital into the sectors and markets shaping Africa's next era — building enduring value for institutions and individuals alike."
      />

      {/* Mission / vision */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-content grid gap-14 lg:grid-cols-2">
          <Reveal from="up">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cognac">Our mission</p>
              <p className="text-title font-extrabold leading-tight text-navy">
                To deploy capital and technology that builds durable value across the African continent.
              </p>
            </div>
          </Reveal>
          <Reveal from="up" delay={0.1}>
            <div className="space-y-5 text-navy/70">
              <p className="text-lg">
                Africa&rsquo;s growth sectors do not lack opportunity; they lack capital willing to
                stay. We invest on a horizon measured in years, pairing patient funding with the
                operational and technical support that turns a promising business into a durable
                one.
              </p>
              <p>
                We work at both ends of the market — alongside institutions allocating at scale, and
                alongside individual and diaspora investors who have long been under-served by
                formal channels. The same governance, diligence and reporting standards apply to
                both. Building that shared infrastructure is how the next era of African investment
                gets funded.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      {leadership.length > 0 && (
        <section id="leadership" className="scroll-mt-24 bg-offwhite-dark/40 py-24 md:py-32">
          <div className="container-content">
            <SectionHeader
              eyebrow="Leadership"
              title="The people behind the group"
              description="Select a card to read more about each member of the leadership team."
            />
            <LeadershipGrid />
          </div>
        </section>
      )}

      {/* Timeline */}
      {milestones.length > 0 && (
        <section className="bg-navy py-24 md:py-32">
          <div className="container-content">
            <SectionHeader
              eyebrow="Milestones"
              title="Our journey so far"
              description="The moments that shaped how the group invests today."
              tone="light"
            />
            <Timeline />
          </div>
        </section>
      )}
    </>
  );
}
