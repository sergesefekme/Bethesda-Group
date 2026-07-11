"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Brief, tasteful, skippable preload animation on first load only.
 * Gated by sessionStorage so it never blocks repeat navigation, and auto-skipped
 * for reduced-motion users. Click / any key dismisses it immediately.
 */
export function Preloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("bg-preloaded");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) return;

    setShow(true);
    document.body.style.overflow = "hidden";

    const done = () => {
      sessionStorage.setItem("bg-preloaded", "1");
      setShow(false);
      document.body.style.overflow = "";
    };
    const timer = setTimeout(done, 2200);
    const skip = () => done();
    window.addEventListener("keydown", skip);
    window.addEventListener("click", skip);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("click", skip);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-navy"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline gap-2"
            >
              <span className="text-3xl font-extrabold tracking-tight text-offwhite md:text-5xl">
                Bethesda
              </span>
              <span className="text-3xl font-extrabold tracking-tight text-cognac md:text-5xl">
                Group
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="mt-6 h-px w-40 origin-left bg-cognac/60"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xs uppercase tracking-[0.3em] text-warmgray"
          >
            Click to skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
