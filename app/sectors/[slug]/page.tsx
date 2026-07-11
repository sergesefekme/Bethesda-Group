import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sectors, getSector } from "@/lib/content/sectors";
import { portfolio } from "@/lib/content/portfolio";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectorIcon } from "@/components/ui/SectorIcon";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const sector = getSector(params.slug);
  if (!sector) return {};
  return {
    title: sector.name,
    description: sector.summary.replace(/^\[PLACEHOLDER\]\s*/, ""),
  };
}

export default function SectorDetailPage({ params }: { params: { slug: string } }) {
  const sector = getSector(params.slug);
  if (!sector) notFound();

  const related = portfolio.filter((p) => p.sector === sector.slug);

  return (
    <>
      <PageHero eyebrow="Sector" title={sector.name} description={sector.summary}>
        <div className="inline-flex items-center gap-3 rounded-full border border-offwhite/20 px-5 py-2.5 text-offwhite">
          <SectorIcon icon={sector.icon} className="h-5 w-5 text-cognac-light" />
          <span className="text-sm font-medium">{sector.tagline}</span>
        </div>
      </PageHero>

      {/* Thesis + focus areas */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-content grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader eyebrow="Investment thesis" title="Why we invest here" />
            <Reveal from="up" delay={0.05}>
              <p className="mt-6 text-lg leading-relaxed text-navy/70">{sector.thesis}</p>
            </Reveal>
          </div>
          <Reveal from="up" delay={0.1}>
            <div className="rounded-2xl border border-navy/10 bg-offwhite-dark/40 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-cognac">Focus areas</h3>
              <ul className="mt-5 space-y-4">
                {sector.focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3 text-navy/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cognac" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Notable projects */}
      <section className="bg-navy py-24 md:py-32">
        <div className="container-content">
          <SectionHeader
            eyebrow="Notable projects"
            title="Selected activity in this sector"
            description="[PLACEHOLDER] Replace with real, referenceable projects and their outcomes."
            tone="light"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {sector.notableProjects.map((project, i) => (
              <Reveal key={project.name} from="up" delay={i * 0.08}>
                <div className="overflow-hidden rounded-2xl border border-offwhite/10 bg-navy-700/40">
                  <PlaceholderImage label={`${sector.name} project`} aspect="aspect-[16/9]" rounded={false} />
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-xs text-warmgray">
                      <span>{project.country}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-offwhite">{project.name}</h3>
                    <p className="mt-2 text-sm text-warmgray">{project.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-10">
              <p className="text-sm text-warmgray">
                Related portfolio:{" "}
                {related.map((r, idx) => (
                  <span key={r.slug}>
                    <Link href={`/portfolio/${r.slug}`} className="text-cognac-light link-underline" data-cursor="link">
                      {r.name}
                    </Link>
                    {idx < related.length - 1 && ", "}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-offwhite py-20 md:py-24">
        <div className="container-content flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-title font-extrabold text-navy">Interested in {sector.name.toLowerCase()}?</h2>
            <p className="mt-2 text-navy/70">Speak to our team about opportunities in this sector.</p>
          </div>
          <div className="flex gap-3">
            <Button href="/contact" variant="primary">Get in touch →</Button>
            <Button href="/sectors" variant="ghost">All sectors</Button>
          </div>
        </div>
      </section>
    </>
  );
}
