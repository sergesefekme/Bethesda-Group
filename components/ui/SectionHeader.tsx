import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

/** Consistent editorial section header: eyebrow label, title, optional lede. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeaderProps) {
  const isLight = tone === "light";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal from="up">
          <p
            className={cn(
              "mb-4 text-xs font-semibold uppercase tracking-[0.2em]",
              isLight ? "text-cognac-light" : "text-cognac"
            )}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal from="up" delay={0.05}>
        <h2
          className={cn(
            "text-title font-extrabold",
            isLight ? "text-offwhite" : "text-navy"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal from="up" delay={0.1}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed md:text-lg",
              isLight ? "text-warmgray" : "text-navy/70"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
