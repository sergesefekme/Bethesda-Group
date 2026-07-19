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
        // The header keeps a light field at all times: the links are navy, and a
        // transparent header put them navy-on-navy over the dark home hero.
        "fixed inset-x-0 top-0 z-50 bg-offwhite/95 backdrop-blur-md transition-shadow duration-500 ease-editorial",
        scrolled && "shadow-sm"
      )}
    >
      <nav className="container-content flex h-20 items-center gap-6 md:h-24" aria-label="Primary">
        <Logo />

        <ul className="hidden flex-1 items-center justify-center gap-x-10 lg:flex xl:gap-x-12">
          {primaryNav.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-cursor="link"
                  className={cn(
                    "link-underline whitespace-nowrap text-base font-medium transition-colors",
                    active ? "text-cognac" : "text-navy hover:text-cognac"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto hidden items-center gap-4 lg:ml-0 lg:flex">
          <Link
            href="/contact"
            data-cursor="link"
            className="rounded-full bg-navy px-6 py-2.5 text-base font-medium text-offwhite transition-colors hover:bg-navy-700"
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
          className="relative z-50 ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
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
                    className="block border-b border-navy/10 py-3.5 text-lg font-medium text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link
                  href="/contact"
                  className="block rounded-full bg-navy px-6 py-3 text-center text-base font-medium text-offwhite"
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
