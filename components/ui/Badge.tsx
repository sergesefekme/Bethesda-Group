import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "cognac" | "navy" | "light" | "institutional";
  className?: string;
}

const tones = {
  cognac: "bg-cognac/10 text-cognac border-cognac/20",
  navy: "bg-navy/5 text-navy border-navy/10",
  light: "bg-offwhite/10 text-offwhite border-offwhite/20",
  institutional: "bg-institutional/10 text-institutional border-institutional/20",
};

export function Badge({ children, tone = "cognac", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
