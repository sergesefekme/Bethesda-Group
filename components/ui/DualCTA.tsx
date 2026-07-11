"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DualCTAProps {
  /** "hero" = compact side-by-side buttons; "banner" = large split panels. */
  variant?: "hero" | "banner";
  className?: string;
}

const paths = [
  {
    href: "/institutional",
    kicker: "For governments & sovereign funds",
    label: "Institutional Investors",
    blurb: "Regulatory-grade partnership, governance transparency and large-scale capital deployment.",
    accent: "institutional" as const,
  },
  {
    href: "/individual",
    kicker: "For diaspora & individual investors",
    label: "Individual Investors",
    blurb: "An accessible, trustworthy way to invest in African development from anywhere in the world.",
    accent: "cognac" as const,
  },
];

/**
 * The audience-segmentation moment: two clear, equal-weight paths.
 * Used in the home hero (compact) and as a closing banner (full split panels).
 */
export function DualCTA({ variant = "hero", className }: DualCTAProps) {
  if (variant === "hero") {
    return (
      <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
        {paths.map((p) => (
          <motion.div key={p.href} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <Link
              href={p.href}
              data-cursor="link"
              className={cn(
                "group flex items-center justify-between gap-4 rounded-full px-6 py-4 text-sm font-medium transition-colors duration-300 md:text-base",
                p.accent === "cognac"
                  ? "bg-cognac text-offwhite hover:bg-cognac-dark"
                  : "border border-offwhite/30 text-offwhite hover:border-offwhite hover:bg-offwhite/5"
              )}
            >
              {p.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid overflow-hidden rounded-3xl border border-offwhite/10 md:grid-cols-2", className)}>
      {paths.map((p, i) => (
        <Link
          key={p.href}
          href={p.href}
          data-cursor="link"
          className={cn(
            "group relative flex flex-col justify-between gap-10 p-8 transition-colors duration-500 md:p-12",
            p.accent === "cognac" ? "bg-cognac/95 hover:bg-cognac" : "bg-navy-700 hover:bg-navy-600",
            i === 0 && "md:border-r md:border-offwhite/10"
          )}
        >
          <div>
            <p className={cn("mb-3 text-xs font-semibold uppercase tracking-[0.2em]", p.accent === "cognac" ? "text-offwhite/80" : "text-cognac-light")}>
              {p.kicker}
            </p>
            <h3 className="text-2xl font-extrabold text-offwhite md:text-3xl">{p.label}</h3>
            <p className={cn("mt-4 max-w-sm text-sm leading-relaxed md:text-base", p.accent === "cognac" ? "text-offwhite/85" : "text-warmgray")}>
              {p.blurb}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-offwhite">
            Explore the path
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
