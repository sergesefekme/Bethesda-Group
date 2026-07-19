"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { DualCTA } from "@/components/ui/DualCTA";

/**
 * Full-viewport home hero. The audience-segmentation DualCTA sits directly under
 * the headline — front and centre, not buried in the nav. Background layers
 * parallax subtly on scroll (transform-only).
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy">
      {/* Parallax photo backdrop — Lagos, Nigeria (aerial). Swap in public/images/hero.jpg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110" aria-hidden>
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-110 contrast-105"
        />
      </motion.div>
      {/* Legibility scrims. The horizontal one is weighted to the left, where the
          copy sits, and falls away by mid-frame so the skyline still reads. */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/40 to-navy/10" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/35 to-transparent" aria-hidden />

      <motion.div style={{ y: contentY, opacity }} className="container-content relative z-10 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-cognac-light"
        >
          Pan-African Investment Technology Group
        </motion.p>

        <h1 className="max-w-4xl text-hero font-extrabold text-offwhite">
          {[
            <>Long-term capital</>,
            <>for Africa&rsquo;s</>,
            <span key="accent" className="text-cognac">next era.</span>,
          ].map((line, i) => (
            <span key={i} className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-warmgray"
        >
          We deploy patient capital and technology across seven sectors and the continent&rsquo;s
          fastest-growing markets — for the institutions that shape them, and the people who call them home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-warmgray/70">Choose your path</p>
          <DualCTA variant="hero" />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-offwhite/30 p-1.5">
          <div className="h-1.5 w-1.5 animate-scroll-cue rounded-full bg-cognac" />
        </div>
      </motion.div>
    </section>
  );
}
