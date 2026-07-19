"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { openRoles } from "@/lib/content/careers";

const fieldBase =
  "w-full rounded-lg border border-navy/15 bg-offwhite px-4 py-3 text-sm text-navy placeholder:text-navy/40 transition-colors focus:border-cognac focus:outline-none";

/**
 * Candidate application / speculative CV submission.
 *
 * TODO(launch): `handleSubmit` is stubbed — no live sending. Wire to an API
 * route or ATS before launch, same as InquiryForm and GatedDeckForm.
 */
export function ApplicationForm() {
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
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cognac/15 text-cognac">
          ✓
        </div>
        <h3 className="text-lg font-bold text-navy">Thank you — your application is with us</h3>
        <p className="mt-2 text-sm text-navy/70">
          We read every submission. If your background fits something we&rsquo;re working on, a
          member of the team will reach out directly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">Full name</span>
          <input required name="name" type="text" autoComplete="name" className={fieldBase} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className={fieldBase}
            placeholder="you@example.com"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">Role of interest</span>
          {openRoles.length > 0 ? (
            <select required name="role" className={fieldBase} defaultValue="">
              <option value="" disabled>
                Select a role
              </option>
              {openRoles.map((role) => (
                <option key={role.slug} value={role.slug}>
                  {role.title}
                </option>
              ))}
              <option value="speculative">Speculative application</option>
            </select>
          ) : (
            <input
              name="role"
              type="text"
              className={fieldBase}
              placeholder="Area you'd like to work in"
            />
          )}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            CV or portfolio link
          </span>
          <input
            required
            name="cv"
            type="url"
            className={fieldBase}
            placeholder="https://…"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy">
          Why Bethesda? <span className="text-navy/40">(optional)</span>
        </span>
        <textarea
          name="message"
          rows={5}
          className={cn(fieldBase, "resize-none")}
          placeholder="A few lines about what draws you to this work…"
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-sm text-xs leading-relaxed text-navy/50">
          We use the details you submit solely to assess your application and retain them for up to
          12 months.
        </p>
        <Button type="submit" variant="primary">
          Submit application
        </Button>
      </div>
    </form>
  );
}
