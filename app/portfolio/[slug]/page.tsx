import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolio, getPortfolioItem } from "@/lib/content/portfolio";
import { getSector } from "@/lib/content/sectors";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getPortfolioItem(params.slug);
  if (!item) return {};
  return { title: item.name, description: item.summary };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const item = getPortfolioItem(params.slug);
  if (!item) notFound();
  const sector = getSector(item.sector);

  return (
    <>
      <PageHero
        eyebrow={`Case study · ${sector?.name ?? item.sector}`}
        title={item.name}
        description={item.summary}
        image={sector?.image}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="light">{item.country}</Badge>
          <Badge tone="light">{item.year}</Badge>
          <Badge tone="light">{item.status}</Badge>
        </div>
      </PageHero>

      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-content grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal from="up">
              <PlaceholderImage src={sector?.image} label={`${item.name}`} aspect="aspect-[16/9]" sizes="(max-width: 1024px) 100vw, 66vw" />
            </Reveal>
            <Reveal from="up" delay={0.05}>
              <div className="mt-10 space-y-5">
                <h2 className="text-title font-extrabold text-navy">Overview</h2>
                <p className="text-lg leading-relaxed text-navy/70">{item.overview}</p>
              </div>
            </Reveal>
          </div>

          <Reveal from="up" delay={0.1}>
            <div className="sticky top-28 rounded-2xl border border-navy/10 bg-offwhite-dark/40 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-cognac">Outcomes</h3>
              <dl className="mt-6 space-y-6">
                {item.outcomes.map((o) => (
                  <div key={o.label}>
                    <dd className="text-3xl font-extrabold text-navy">{o.value}</dd>
                    <dt className="mt-1 text-sm text-navy/60">{o.label}</dt>
                  </div>
                ))}
              </dl>
              {sector && (
                <Link
                  href={`/sectors/${sector.slug}`}
                  className="link-underline mt-8 inline-flex text-sm font-medium text-cognac"
                  data-cursor="link"
                >
                  More in {sector.name} →
                </Link>
              )}
            </div>
          </Reveal>
        </div>

        <div className="container-content mt-16 flex gap-3">
          <Button href="/portfolio" variant="ghost">← All portfolio</Button>
          <Button href="/contact" variant="primary">Enquire about this →</Button>
        </div>
      </section>
    </>
  );
}
