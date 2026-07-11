import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  tone?: "light" | "navy";
  interactive?: boolean;
}

/** Base card with a subtle hover-lift; renders as a link when `href` is set. */
export function Card({ children, href, className, tone = "light", interactive = true }: CardProps) {
  const classes = cn(
    "group relative flex flex-col rounded-2xl border p-6 transition-all duration-500 ease-editorial md:p-8",
    tone === "light"
      ? "border-navy/10 bg-offwhite-dark/40 hover:border-cognac/40"
      : "border-offwhite/10 bg-navy-700/40 hover:border-cognac/50",
    interactive && "hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} data-cursor="link">
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
}
