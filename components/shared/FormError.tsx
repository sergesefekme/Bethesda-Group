import { contactEmails } from "@/lib/content/offices";
import { cn } from "@/lib/utils";

/**
 * Shown when a submission could not be sent. Always offers the direct email
 * address as a fallback so the visitor is never left with nowhere to go.
 */
export function FormError({
  message,
  mailtoHref,
  tone = "dark",
}: {
  message: string;
  mailtoHref: string;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";

  return (
    <div
      role="alert"
      className={cn(
        "rounded-2xl border p-5 text-sm leading-relaxed",
        light ? "border-cognac-light/40 bg-cognac-light/10 text-warmgray" : "border-red-600/25 bg-red-50 text-navy/80"
      )}
    >
      <p className={cn("font-semibold", light ? "text-offwhite" : "text-navy")}>
        Your message was not sent
      </p>
      <p className="mt-2">
        {message} Please email us directly at{" "}
        <a
          href={`mailto:${contactEmails.general}`}
          className={cn("link-underline font-medium", light ? "text-cognac-light" : "text-cognac")}
        >
          {contactEmails.general}
        </a>
        .
      </p>
      {mailtoHref && (
        <p className="mt-3">
          <a
            href={mailtoHref}
            className={cn("link-underline font-medium", light ? "text-offwhite" : "text-navy")}
          >
            Open a pre-filled email with what you entered →
          </a>
        </p>
      )}
    </div>
  );
}
