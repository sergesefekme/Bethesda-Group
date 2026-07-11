"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { leadership } from "@/lib/content/leadership";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

/** Leadership grid with bio expand-on-click. Keyboard accessible. */
export function LeadershipGrid() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {leadership.map((leader, i) => {
        const isOpen = open === leader.id;
        return (
          <Reveal key={leader.id} from="up" delay={(i % 3) * 0.06}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : leader.id)}
              aria-expanded={isOpen}
              className="group block w-full text-left"
              data-cursor="link"
            >
              <div className="overflow-hidden rounded-xl">
                <div className="transition-transform duration-700 ease-editorial group-hover:scale-105">
                  <PlaceholderImage label={`Portrait — ${leader.title}`} aspect="aspect-[4/5]" />
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-navy">{leader.name}</h3>
                  <p className="text-sm text-cognac">{leader.title}</p>
                  <p className="mt-0.5 text-xs text-navy/50">{leader.focus}</p>
                </div>
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy/50 transition-colors group-hover:border-cognac group-hover:text-cognac">
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-base leading-none">
                    +
                  </motion.span>
                </span>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden text-sm leading-relaxed text-navy/70"
                  >
                    <span className="block pt-4">{leader.bio}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
          </Reveal>
        );
      })}
    </div>
  );
}
