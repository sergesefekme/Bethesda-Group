import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Brand mark + text wordmark.
 *
 * The mark is the circular device cropped out of /public/images/logo.jpeg by the
 * `.logo-mark` class in globals.css — see that rule for why. The wordmark stays
 * real text rather than part of the image: it keeps the name selectable and
 * indexable, and the supplied artwork reads "Global" where the site reads
 * "Group". Replace both with an SVG when a vector version exists.
 */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link
      href="/"
      data-cursor="link"
      aria-label="Bethesda Group — home"
      className={cn("inline-flex items-center gap-2.5 text-lg font-extrabold tracking-tight md:text-xl", className)}
    >
      {/* Decorative — the link's aria-label already names the brand. */}
      <span className="logo-mark h-7 w-[35px] shrink-0 rounded-sm md:h-8 md:w-10" aria-hidden />
      <span className="inline-flex items-baseline gap-1.5">
        <span className={tone === "light" ? "text-offwhite" : "text-navy"}>Bethesda</span>
        <span className="text-cognac">Group</span>
      </span>
    </Link>
  );
}
