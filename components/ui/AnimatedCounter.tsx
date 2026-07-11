"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  durationMs?: number;
}

/**
 * Counts up to `value` when scrolled into view (IntersectionObserver).
 * Honors reduced-motion by snapping straight to the final value.
 */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  durationMs = 1800,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (n: number) => n.toFixed(decimals);

    if (prefersReducedMotion()) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / durationMs, 1);
              // easeOutExpo for a confident, decelerating count.
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              setDisplay(value * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, decimals, durationMs]);

  return (
    <span ref={ref} aria-label={`${prefix}${value.toFixed(decimals)}${suffix}`}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
