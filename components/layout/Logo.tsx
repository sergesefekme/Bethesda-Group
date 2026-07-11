import Link from "next/link";
import { cn } from "@/lib/utils";

/** Text wordmark. Swap for an SVG logo at /public/images/logo.svg when available. */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link
      href="/"
      data-cursor="link"
      aria-label="Bethesda Group — home"
      className={cn("inline-flex items-baseline gap-1.5 text-lg font-extrabold tracking-tight md:text-xl", className)}
    >
      <span className={tone === "light" ? "text-offwhite" : "text-navy"}>Bethesda</span>
      <span className="text-cognac">Group</span>
    </Link>
  );
}
