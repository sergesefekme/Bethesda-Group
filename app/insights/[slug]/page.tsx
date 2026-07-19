import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights, getInsight } from "@/lib/content/insights";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Badge } from "@/components/ui/Badge";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const insight = getInsight(params.slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.excerpt,
    openGraph: { type: "article", publishedTime: insight.date },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const insight = getInsight(params.slug);
  if (!insight) notFound();

  const more = insights.filter((i) => i.slug !== insight.slug).slice(0, 2);

  return (
    <>
      <PageHero eyebrow={insight.category} title={insight.title} image={insight.image}>
        <div className="flex flex-wrap items-center gap-3 text-sm text-warmgray">
          <span>{insight.author}</span>
          <span aria-hidden>·</span>
          <span>{formatDate(insight.date)}</span>
        </div>
      </PageHero>

      <article className="bg-offwhite py-24 md:py-32">
        <div className="container-content max-w-3xl">
          <Reveal from="up">
            <PlaceholderImage src={insight.image} label={insight.title} aspect="aspect-[16/9]" sizes="(max-width: 768px) 100vw, 768px" />
          </Reveal>
          <div className="mt-12 space-y-6">
            {insight.body.map((para, i) => (
              <Reveal key={i} from="up" delay={i * 0.04}>
                <p className="text-lg leading-relaxed text-navy/80">{para}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 border-t border-navy/10 pt-8 text-sm leading-relaxed text-navy/50">
            Written by {insight.author}. The views expressed are those of the author at the time of
            publication and do not constitute investment advice.
          </div>
        </div>
      </article>

      {/* Related */}
      {more.length > 0 && (
      <section className="bg-offwhite-dark/40 py-20 md:py-24">
        <div className="container-content">
          <h2 className="text-title font-extrabold text-navy">More insights</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {more.map((m) => (
              <Link key={m.slug} href={`/insights/${m.slug}`} className="group flex gap-5" data-cursor="link">
                <div className="w-32 shrink-0 overflow-hidden rounded-lg">
                  <PlaceholderImage src={m.image} label={m.title} aspect="aspect-square" sizes="128px" />
                </div>
                <div>
                  <Badge tone="cognac">{m.category}</Badge>
                  <h3 className="mt-3 font-bold text-navy transition-colors group-hover:text-cognac">{m.title}</h3>
                  <p className="mt-1 text-xs text-navy/50">{formatDate(m.date)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      )}
    </>
  );
}
