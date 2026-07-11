"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { insights, type InsightCategory } from "@/lib/content/insights";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const categories: (InsightCategory | "All")[] = [
  "All",
  "Market Analysis",
  "Sector News",
  "Company Announcements",
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/** Article listing with category filters. */
export function InsightsList() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? insights : insights.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-navy/10 pb-8">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === c ? "border-cognac bg-cognac text-offwhite" : "border-navy/15 text-navy/70 hover:border-cognac/50"
            )}
            data-cursor="link"
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((insight) => (
            <motion.article
              key={insight.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/insights/${insight.slug}`} className="group flex h-full flex-col" data-cursor="link">
                <div className="overflow-hidden rounded-xl">
                  <div className="transition-transform duration-700 ease-editorial group-hover:scale-105">
                    <PlaceholderImage label={`${insight.category} article`} aspect="aspect-[16/10]" />
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <Badge tone="cognac">{insight.category}</Badge>
                  <span className="text-xs text-navy/50">{formatDate(insight.date)}</span>
                </div>
                <h2 className="mt-4 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-cognac">
                  {insight.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/60">{insight.excerpt}</p>
                <span className="mt-4 text-xs text-navy/40">{insight.readingTime} read</span>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
