"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { portfolio } from "@/lib/content/portfolio";
import { sectors } from "@/lib/content/sectors";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const sectorName = (slug: string) => sectors.find((s) => s.slug === slug)?.name ?? slug;
const sectorImage = (slug: string) => sectors.find((s) => s.slug === slug)?.image;

/** Filterable portfolio grid — filter by sector and by country. */
export function PortfolioGrid() {
  const [sector, setSector] = useState<string>("all");
  const [country, setCountry] = useState<string>("all");

  const countries = useMemo(
    () => Array.from(new Set(portfolio.map((p) => p.country))).sort(),
    []
  );

  const filtered = portfolio.filter(
    (p) => (sector === "all" || p.sector === sector) && (country === "all" || p.country === country)
  );

  // Nothing published yet: show a plain message rather than empty filter rails.
  if (portfolio.length === 0) {
    return (
      <div className="rounded-3xl border border-navy/10 bg-offwhite-dark/40 p-10 text-center md:p-14">
        <p className="text-title font-extrabold text-navy">Case studies coming soon</p>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-navy/60">
          We&rsquo;re preparing detailed write-ups of the companies and projects behind the
          portfolio. In the meantime, our{" "}
          <Link href="/sectors" className="text-cognac link-underline" data-cursor="link">
            sector pages
          </Link>{" "}
          set out where and how we invest.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col gap-6 border-b border-navy/10 pb-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-navy/50">Sector</p>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={sector === "all"} onClick={() => setSector("all")}>All</FilterChip>
            {sectors.map((s) => (
              <FilterChip key={s.slug} active={sector === s.slug} onClick={() => setSector(s.slug)}>
                {s.name}
              </FilterChip>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-navy/50">Country</p>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={country === "all"} onClick={() => setCountry("all")}>All</FilterChip>
            {countries.map((c) => (
              <FilterChip key={c} active={country === c} onClick={() => setCountry(c)}>
                {c}
              </FilterChip>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/portfolio/${item.slug}`} className="group flex h-full flex-col" data-cursor="link">
                <div className="overflow-hidden rounded-xl">
                  <div className="transition-transform duration-700 ease-editorial group-hover:scale-105">
                    <PlaceholderImage src={sectorImage(item.sector)} label={item.name} aspect="aspect-[4/3]" />
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <Badge tone="cognac">{sectorName(item.sector)}</Badge>
                  <Badge tone="navy">{item.status}</Badge>
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy transition-colors group-hover:text-cognac">{item.name}</h3>
                <p className="mt-1 text-xs text-navy/50">{item.country} · {item.year}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">{item.summary}</p>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-navy/50">No portfolio items match these filters.</p>
      )}
    </div>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active ? "border-cognac bg-cognac text-offwhite" : "border-navy/15 text-navy/70 hover:border-cognac/50"
      )}
      data-cursor="link"
    >
      {children}
    </button>
  );
}
