"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Subtle custom cursor for precise pointers. A small dot follows the mouse 1:1;
 * a larger ring lags with spring physics and expands over interactive elements
 * (anything with [data-cursor]). Disabled on touch / coarse pointers and when
 * reduced motion is requested — the native cursor is used instead.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });

  useEffect(() => {
    const fine =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest("[data-cursor], a, button")));
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor-active");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-cognac"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="absolute rounded-full border border-cognac/60"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 52 : 30,
          height: hovering ? 52 : 30,
          opacity: hovering ? 1 : 0.6,
          backgroundColor: hovering ? "rgba(154,90,36,0.08)" : "rgba(154,90,36,0)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </div>
  );
}
