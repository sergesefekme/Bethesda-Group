"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Direction the content slides in from. */
  from?: "up" | "down" | "left" | "right" | "none";
  /** Stagger delay in seconds when used as a group. */
  delay?: number;
  /** Distance travelled, in px. */
  distance?: number;
  as?: ElementType;
}

/**
 * Scroll-triggered fade/slide-in. Uses transform + opacity only (compositor-friendly)
 * and no-ops when the user prefers reduced motion, so mobile UX never degrades.
 */
export function Reveal({
  children,
  className,
  from = "up",
  delay = 0,
  distance = 40,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion() || from === "none") {
      gsap.set(el, { opacity: 1, x: 0, y: 0 });
      return;
    }

    const offset = { up: { y: distance }, down: { y: -distance }, left: { x: distance }, right: { x: -distance } }[from];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, ...offset },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [from, delay, distance]);

  return (
    <Tag ref={ref} className={cn(className)} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
