import type { Metadata } from "next";
import Link from "next/link";
import { sectors } from "@/lib/content/sectors";
import { PageHero } from "@/components/ui/PageHero";
import { SectorIcon } from "@/components/ui/SectorIcon";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Seven sectors driving Africa's structural transformation — renewable energy, technology & media, healthcare, education, real estate & infrastructure, agro-allied & FMCG, and advisory services.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Seven sectors"
        title={<>Where we invest across the continent</>}
        description="A diversified portfolio spanning the sectors most critical to Africa's development. Each carries a distinct investment thesis and dedicated focus."
      />

      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-content">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={sector.slug} from="up" delay={(i % 3) * 0.06}>
                <Link
                  href={`/sectors/${sector.slug}`}
                  data-cursor="link"
                  className="group flex h-full flex-col rounded-2xl border border-navy/10 p-8 transition-all duration-500 ease-editorial hover:-translate-y-1 hover:border-cognac/40 hover:shadow-xl hover:shadow-navy/5"
                >
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-cognac transition-colors group-hover:bg-cognac group-hover:text-offwhite">
                    <SectorIcon icon={sector.icon} />
                  </span>
                  <h2 className="text-xl font-bold text-navy">{sector.name}</h2>
                  <p className="mt-2 text-sm text-navy/60">{sector.tagline}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-navy/70">{sector.summary}</p>
                  <span className="link-underline mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-cognac">
                    Explore sector →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
