import Link from "next/link";
import { insights } from "@/lib/content/insights";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Badge } from "@/components/ui/Badge";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/** Three-card featured insights preview for the home page. */
export function InsightsPreview() {
  const featured = insights.slice(0, 3);

  return (
    <section className="bg-offwhite py-24 md:py-32">
      <div className="container-content">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Insights & newsroom"
            title="Perspectives on African markets"
            description="Analysis, sector commentary and announcements from across the group."
          />
          <Reveal from="up">
            <Link href="/insights" className="link-underline text-sm font-medium text-cognac" data-cursor="link">
              All insights →
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {featured.map((insight, i) => (
            <Reveal key={insight.slug} from="up" delay={i * 0.08}>
              <Link href={`/insights/${insight.slug}`} className="group flex h-full flex-col" data-cursor="link">
                <div className="overflow-hidden rounded-xl">
                  <div className="transition-transform duration-700 ease-editorial group-hover:scale-105">
                    <PlaceholderImage src={insight.image} label={insight.title} aspect="aspect-[16/10]" />
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <Badge tone="cognac">{insight.category}</Badge>
                  <span className="text-xs text-navy/50">{formatDate(insight.date)}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-cognac">
                  {insight.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{insight.excerpt}</p>
                <span className="mt-4 text-xs text-navy/40">{insight.readingTime} read</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
