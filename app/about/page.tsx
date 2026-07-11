import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { LeadershipGrid } from "@/components/about/LeadershipGrid";
import { Timeline } from "@/components/about/Timeline";

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
                [PLACEHOLDER] A substantive mission statement grounded in the group&rsquo;s actual strategy and values — measured, credible, specific to African markets.
              </p>
              <p>
                [PLACEHOLDER] A vision paragraph describing the future the group is working towards and the role of both institutional and individual investors in reaching it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="scroll-mt-24 bg-offwhite-dark/40 py-24 md:py-32">
        <div className="container-content">
          <SectionHeader
            eyebrow="Leadership"
            title="The people behind the group"
            description="[PLACEHOLDER] Replace with the real leadership team — names, titles and biographies. Select a card to read more."
          />
          <LeadershipGrid />
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-navy py-24 md:py-32">
        <div className="container-content">
          <SectionHeader
            eyebrow="Milestones"
            title="Our journey so far"
            description="[PLACEHOLDER] Replace with real, dated milestones from the group's history."
            tone="light"
          />
          <Timeline />
        </div>
      </section>
    </>
  );
}
