"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { sectors } from "@/lib/content/sectors";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectorIcon } from "@/components/ui/SectorIcon";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Filterable/expandable grid of the 7 sectors — each expands in place to reveal
 * a short summary and a link to its dedicated /sectors/[slug] page, so the home
 * page never becomes seven equal walls of text. All sectors carry equal weight.
 */
export function SectorGrid() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="sectors" className="bg-offwhite py-24 md:py-32">
      <div className="container-content">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Seven sectors"
            title="Where we invest"
            description="A diversified portfolio spanning the sectors driving Africa's structural transformation — each with a distinct thesis and dedicated focus."
          />
          <Reveal from="up">
            <Link href="/sectors" className="link-underline text-sm font-medium text-cognac" data-cursor="link">
              View all sectors →
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => {
            const isOpen = expanded === sector.slug;
            return (
              <Reveal key={sector.slug} from="up" delay={(i % 3) * 0.06}>
                <div
                  className={`group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-500 ease-editorial ${
                    isOpen ? "border-cognac/50 bg-offwhite-dark/60" : "border-navy/10 hover:border-cognac/30"
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-cognac">
                      <SectorIcon icon={sector.icon} />
                    </span>
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : sector.slug)}
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? "Collapse" : "Expand"} ${sector.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-navy/15 text-navy/60 transition-colors hover:border-cognac hover:text-cognac"
                      data-cursor="link"
                    >
                      <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-lg leading-none">
                        +
                      </motion.span>
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-navy">{sector.name}</h3>
                  <p className="mt-2 text-sm text-navy/60">{sector.tagline}</p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-sm leading-relaxed text-navy/70">{sector.summary}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Link
                    href={`/sectors/${sector.slug}`}
                    className="link-underline mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-cognac"
                    data-cursor="link"
                  >
                    Explore sector →
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
