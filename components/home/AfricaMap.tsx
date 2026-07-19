"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { operatingCountries } from "@/lib/content/offices";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Stylised, self-contained pan-African footprint map. A simplified Africa
 * silhouette (single SVG path) carries interactive hotspots per operating
 * country; hover/focus reveals sector density. Keyboard accessible.
 *
 * TODO: for a geographically precise map, swap the silhouette path and marker
 * coordinates for real GeoJSON/TopoJSON. Coordinates live in
 * lib/content/offices.ts (operatingCountries).
 */
export function AfricaMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="container-content">
        <SectionHeader
          eyebrow="Pan-African footprint"
          title="Present where growth is happening"
          description="We invest across the continent's most dynamic markets. Explore our footprint — each location deepens our sector coverage and local partnerships."
          tone="light"
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal from="up" className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-square">
              <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="Map of Africa showing Bethesda Group operating countries">
                {/* Simplified Africa silhouette — stylised, not to scale */}
                <path
                  d="M46 8 L54 9 L60 13 L63 19 L61 25 L66 30 L69 38 L72 46 L70 54 L66 61 L64 69 L60 77 L56 85 L52 90 L48 88 L45 81 L41 74 L36 69 L31 64 L27 57 L24 49 L26 41 L29 34 L31 27 L34 20 L38 13 L42 9 Z"
                  className="fill-navy-700 stroke-offwhite/10"
                  strokeWidth={0.5}
                />
                {operatingCountries.map((c) => {
                  const isActive = active === c.name;
                  const r = 1.6 + c.sectorCount * 0.35;
                  return (
                    <g key={c.name}>
                      <motion.circle
                        cx={c.x}
                        cy={c.y}
                        r={r + 2.5}
                        className="fill-cognac/20"
                        animate={{ scale: isActive ? 1.4 : 1, opacity: isActive ? 0.6 : 0.3 }}
                      />
                      <circle
                        cx={c.x}
                        cy={c.y}
                        r={r}
                        tabIndex={0}
                        role="button"
                        aria-label={`${c.name}: ${c.sectorCount} sectors`}
                        onMouseEnter={() => setActive(c.name)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(c.name)}
                        onBlur={() => setActive(null)}
                        className="cursor-pointer fill-cognac outline-none transition-colors hover:fill-cognac-light focus-visible:fill-cognac-light"
                        data-cursor="link"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Tooltip */}
              {active && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-cognac/30 bg-navy-900/90 px-4 py-2 text-sm text-offwhite backdrop-blur-sm"
                >
                  <span className="font-semibold">{active}</span>
                  <span className="text-warmgray">
                    {" · "}
                    {operatingCountries.find((c) => c.name === active)?.sectorCount} active sectors
                  </span>
                </motion.div>
              )}
            </div>
          </Reveal>

          <div>
            <Reveal from="up">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
                {operatingCountries.map((c) => (
                  <li key={c.name}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(c.name)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(c.name)}
                      onBlur={() => setActive(null)}
                      className={`flex w-full items-center justify-between gap-2 border-b border-offwhite/10 py-2 text-left text-sm transition-colors ${
                        active === c.name ? "text-cognac-light" : "text-warmgray hover:text-offwhite"
                      }`}
                      data-cursor="link"
                    >
                      <span className="font-medium">{c.name}</span>
                      <span className="text-xs text-warmgray/60">{c.sectorCount} sectors</span>
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal from="up" delay={0.1}>
              <p className="mt-8 text-sm leading-relaxed text-warmgray/70">
                Map shown for orientation only; boundaries are stylised and not to scale.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
