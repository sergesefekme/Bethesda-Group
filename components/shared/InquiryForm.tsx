"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type InquiryType = "Institutional" | "Individual" | "General / Media";

const types: InquiryType[] = ["Institutional", "Individual", "General / Media"];

const fieldBase =
  "w-full rounded-lg border border-navy/15 bg-offwhite px-4 py-3 text-sm text-navy placeholder:text-navy/40 transition-colors focus:border-cognac focus:outline-none";

interface InquiryFormProps {
  /** Preselect a segment (used by the investor-track pages). */
  defaultType?: InquiryType;
}

/**
 * Segmented contact form (Institutional / Individual / General-Media).
 * Client-side validated.
 *
 * TODO(launch): `handleSubmit` is stubbed — no live sending. Wire to a real
 * endpoint or form service before launch. See CONTENT-NEEDED.md.
 */
export function InquiryForm({ defaultType = "Institutional" }: InquiryFormProps) {
  const [type, setType] = useState<InquiryType>(defaultType);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-cognac/30 bg-cognac/5 p-8 text-center"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cognac/15 text-cognac">✓</div>
        <h3 className="text-lg font-bold text-navy">Thank you — we&rsquo;ve received your enquiry</h3>
        <p className="mt-2 text-sm text-navy/70">
          A member of our {type.toLowerCase()} team will be in touch shortly — typically within two
          business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <fieldset>
        <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-navy/60">
          I am enquiring as
        </legend>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Inquiry type">
          {types.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={type === t}
              onClick={() => setType(t)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                type === t
                  ? "border-cognac bg-cognac text-offwhite"
                  : "border-navy/15 text-navy/70 hover:border-cognac/50"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">Full name</span>
          <input required name="name" type="text" autoComplete="name" className={fieldBase} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">Email</span>
          <input required name="email" type="email" autoComplete="email" className={fieldBase} placeholder="you@example.com" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Organisation {type === "Individual" && <span className="text-navy/40">(optional)</span>}
          </span>
          <input required={type !== "Individual"} name="organisation" type="text" autoComplete="organization" className={fieldBase} placeholder="Organisation" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">Country</span>
          <input required name="country" type="text" autoComplete="country-name" className={fieldBase} placeholder="Country" />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy">How can we help?</span>
        <textarea required name="message" rows={5} className={cn(fieldBase, "resize-none")} placeholder="Tell us a little about your interest…" />
      </label>

      <div className="flex items-center justify-between gap-4">
        <p className="max-w-sm text-xs leading-relaxed text-navy/50">
          We use your details only to respond to this enquiry and never share them with third
          parties.
        </p>
        <Button type="submit" variant="primary">
          Send enquiry
        </Button>
      </div>
    </form>
  );
}
