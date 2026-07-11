"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav } from "@/lib/content/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial",
        scrolled ? "bg-offwhite/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="container-content flex h-16 items-center justify-between md:h-20" aria-label="Primary">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-cursor="link"
                  className={cn(
                    "link-underline text-sm font-medium transition-colors",
                    active ? "text-cognac" : "text-navy/80 hover:text-navy"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/contact"
            data-cursor="link"
            className="rounded-full bg-navy px-6 py-2.5 text-sm font-medium text-offwhite transition-colors hover:bg-navy-700"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          data-cursor="link"
        >
          <span className={cn("h-0.5 w-6 bg-navy transition-all duration-300", open && "translate-y-2 rotate-45")} />
          <span className={cn("h-0.5 w-6 bg-navy transition-all duration-300", open && "opacity-0")} />
          <span className={cn("h-0.5 w-6 bg-navy transition-all duration-300", open && "-translate-y-2 -rotate-45")} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-offwhite/95 backdrop-blur-md lg:hidden"
          >
            <ul className="container-content flex flex-col gap-1 py-6">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block border-b border-navy/5 py-3 text-lg font-medium text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link
                  href="/contact"
                  className="block rounded-full bg-navy px-6 py-3 text-center text-sm font-medium text-offwhite"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
