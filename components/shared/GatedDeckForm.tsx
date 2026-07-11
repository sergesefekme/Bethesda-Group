"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const fieldBase =
  "w-full rounded-lg border border-offwhite/20 bg-navy-700/60 px-4 py-3 text-sm text-offwhite placeholder:text-warmgray/50 transition-colors focus:border-cognac focus:outline-none";

/**
 * Gated "Request Institutional Deck" form. The deck is not a public download —
 * on submit we capture the request and route it to the team. [PLACEHOLDER] wire
 * `handleSubmit` to a real endpoint; do not expose a direct PDF link.
 */
export function GatedDeckForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // [PLACEHOLDER] Replace with real submission → notifies IR team, then follow-up.
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-cognac/40 bg-cognac/10 p-8"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cognac/20 text-cognac">✓</div>
        <h3 className="text-lg font-bold text-offwhite">Request received</h3>
        <p className="mt-2 text-sm text-warmgray">
          Our institutional partnerships team will review your request and share the deck directly.
          [PLACEHOLDER] expected turnaround & next steps.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-offwhite">Full name</span>
          <input required name="name" type="text" autoComplete="name" className={fieldBase} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-offwhite">Work email</span>
          <input required name="email" type="email" autoComplete="email" className={fieldBase} placeholder="you@institution.com" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-offwhite">Institution</span>
          <input required name="institution" type="text" autoComplete="organization" className={fieldBase} placeholder="Institution / fund" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-offwhite">Role</span>
          <input required name="role" type="text" autoComplete="organization-title" className={fieldBase} placeholder="Your role" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-offwhite">Area of interest</span>
        <textarea name="interest" rows={3} className={cn(fieldBase, "resize-none")} placeholder="Sectors, mandate size, timeframe…" />
      </label>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-warmgray/60">[PLACEHOLDER] Confidentiality note.</p>
        <Button type="submit" variant="primary">
          Request the deck
        </Button>
      </div>
    </form>
  );
}
