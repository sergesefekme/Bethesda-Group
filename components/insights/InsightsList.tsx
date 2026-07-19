"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { insightCategories, insights, type InsightCategory } from "@/lib/content/insights";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { cn } from "@/lib/utils";

const filters: (InsightCategory | "All")[] = ["All", ...insightCategories];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/**
 * Insights index. Articles are grouped under their category so the page is
 * scannable without interaction; the filter pills narrow to one section.
 */
export function InsightsList() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visibleCategories = active === "All" ? insightCategories : [active];

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-navy/10 pb-8">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === f
                ? "border-cognac bg-cognac text-offwhite"
                : "border-navy/15 text-navy/70 hover:border-cognac/50"
            )}
            data-cursor="link"
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-14 space-y-20">
        {visibleCategories.map((category) => {
          const items = insights.filter((i) => i.category === category);

          return (
            <section key={category} aria-labelledby={`insights-${category}`}>
              <h2
                id={`insights-${category}`}
                className="text-sm font-semibold uppercase tracking-[0.15em] text-cognac"
              >
                {category}
              </h2>

              {items.length === 0 ? (
                <p className="mt-5 text-sm text-navy/50">
                  Nothing published in this category yet — check back soon.
                </p>
              ) : (
                <motion.div layout className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence mode="popLayout">
                    {items.map((insight) => (
                      <motion.article
                        key={insight.slug}
                        layout
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={`/insights/${insight.slug}`}
                          className="group flex h-full flex-col"
                          data-cursor="link"
                        >
                          <div className="overflow-hidden rounded-xl">
                            <div className="transition-transform duration-700 ease-editorial group-hover:scale-105">
                              <PlaceholderImage
                                src={insight.image}
                                label={insight.title}
                                aspect="aspect-[16/10]"
                              />
                            </div>
                          </div>
                          <span className="mt-5 text-xs text-navy/50">{formatDate(insight.date)}</span>
                          <h3 className="mt-2 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-cognac">
                            {insight.title}
                          </h3>
                          <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/60">
                            {insight.excerpt}
                          </p>
                        </Link>
                      </motion.article>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
