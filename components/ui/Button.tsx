"use client";

import Link from "next/link";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/lib/gsap";

type Variant = "primary" | "ghost" | "light" | "link";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Enables the magnetic hover effect (default on for primary). */
  magnetic?: boolean;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
}
interface ActionButtonProps extends BaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}
type ButtonProps = LinkButtonProps | ActionButtonProps;

const variants: Record<Variant, string> = {
  primary:
    "bg-cognac text-offwhite hover:bg-cognac-dark shadow-sm px-7 py-3.5 rounded-full font-medium",
  ghost:
    "border border-warmgray/60 text-navy hover:border-cognac hover:text-cognac px-7 py-3.5 rounded-full font-medium",
  light:
    "border border-offwhite/40 text-offwhite hover:bg-offwhite hover:text-navy px-7 py-3.5 rounded-full font-medium",
  link: "text-cognac font-medium inline-flex items-center gap-1.5 link-underline",
};

export function Button({
  children,
  variant = "primary",
  className,
  magnetic,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const isMagnetic = (magnetic ?? variant === "primary") && variant !== "link";

  const handleMove = (e: MouseEvent) => {
    if (!isMagnetic || !ref.current || prefersReducedMotion()) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.3);
    y.set(relY * 0.3);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 transition-colors duration-300 ease-editorial text-sm md:text-base",
    variants[variant],
    className
  );

  const inner = <span className="inline-flex items-center gap-2">{children}</span>;

  if (href) {
    return (
      <motion.span
        ref={ref as React.RefObject<HTMLSpanElement>}
        style={{ x: springX, y: springY, display: "inline-flex" }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <Link href={href} className={classes} data-cursor="link">
          {inner}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={classes}
      data-cursor="link"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {inner}
    </motion.button>
  );
}
