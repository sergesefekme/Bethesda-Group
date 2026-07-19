"use client";

import { useState, type FormEvent } from "react";
import { contactEmails } from "@/lib/content/offices";

export type SubmitStatus = "idle" | "sending" | "success" | "error";

/**
 * Shared submit handling for the site's three forms.
 *
 * Posts the form to /api/contact and reports what actually happened. On any
 * failure it exposes `mailtoHref`, prefilled with everything the visitor typed,
 * so a submission is never silently lost — the previous behaviour showed a
 * success state regardless of whether anything was sent.
 */
export function useFormSubmit(kind: "enquiry" | "deck" | "application") {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<string>("");
  const [mailtoHref, setMailtoHref] = useState<string>("");

  function buildMailto(data: Record<string, string>) {
    const subject = `Website ${kind} — ${data.name || "enquiry"}`;
    const body = Object.entries(data)
      .filter(([k, v]) => k !== "company_website" && v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    return `mailto:${contactEmails.general}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>, extra: Record<string, string> = {}) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = { ...Object.fromEntries(new FormData(form)) as Record<string, string>, ...extra };

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, ...data }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const payload = await res.json().catch(() => ({}));
      setError(payload.error || "Something went wrong.");
      setMailtoHref(buildMailto(data));
      setStatus("error");
    } catch {
      setError("We could not reach the server.");
      setMailtoHref(buildMailto(data));
      setStatus("error");
    }
  }

  return { status, error, mailtoHref, handleSubmit };
}
