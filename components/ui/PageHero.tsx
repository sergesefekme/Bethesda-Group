import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  /** Institutional track uses the deeper muted accent tone. */
  accent?: "cognac" | "institutional";
}

/**
 * Shared inner-page hero on the navy field. Kept as a server component (no
 * animation dependency) so every route has a fast, consistent masthead.
 */
export function PageHero({ eyebrow, title, description, children, accent = "cognac" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pb-16 pt-32 md:pb-24 md:pt-44">
      <div className="placeholder-duotone absolute inset-0 opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/50" aria-hidden />
      <div className="container-content relative z-10">
        {eyebrow && (
          <p
            className={cn(
              "mb-5 text-xs font-semibold uppercase tracking-[0.25em] animate-fade-up",
              accent === "institutional" ? "text-institutional" : "text-cognac-light"
            )}
          >
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-display font-extrabold text-offwhite animate-fade-up">{title}</h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-warmgray animate-fade-up">{description}</p>
        )}
        {children && <div className="mt-10 animate-fade-up">{children}</div>}
      </div>
    </section>
  );
}
