import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  /** Institutional track uses the deeper muted accent tone. */
  accent?: "cognac" | "institutional";
  /** Optional photo backdrop under /public. Falls back to a duotone field. */
  image?: string;
}

/**
 * Shared inner-page hero on the navy field. Kept as a server component (no
 * animation dependency) so every route has a fast, consistent masthead. When an
 * `image` is supplied it renders behind strong navy gradients for legibility.
 */
export function PageHero({ eyebrow, title, description, children, accent = "cognac", image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pb-16 pt-32 md:pb-24 md:pt-44">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-110 contrast-105"
        />
      ) : (
        <div className="placeholder-duotone absolute inset-0 opacity-90" aria-hidden />
      )}
      {/* Legibility overlays. Over a photo they stay light so the image reads;
          over the duotone field they hold the deeper brand navy. */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t",
          image ? "from-navy/90 via-navy/60 to-navy/30" : "from-navy via-navy/80 to-navy/60"
        )}
        aria-hidden
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r",
          image ? "from-navy/85 via-navy/35 to-transparent" : "from-navy/70 to-transparent"
        )}
        aria-hidden
      />
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
