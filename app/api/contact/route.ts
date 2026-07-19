import { NextResponse } from "next/server";
import { contactEmails } from "@/lib/content/offices";

/**
 * Form submission endpoint for the enquiry, deck-request and application forms.
 *
 * Sends via the Resend REST API. Called with `fetch` rather than the SDK so the
 * project takes no new dependency.
 *
 * Required environment variables (set these in the Amplify console):
 *   RESEND_API_KEY   - from resend.com/api-keys
 *   CONTACT_FROM     - a verified sender on the domain, e.g. website@bethesdaglobalnetwork.com
 *   CONTACT_TO       - optional; defaults to the general address in lib/content/offices.ts
 *
 * If the key is absent the route returns 503 and the client shows a direct
 * mailto fallback. It never reports success for mail that was not sent.
 */

export const runtime = "nodejs";

type FormKind = "enquiry" | "deck" | "application";

const SUBJECTS: Record<FormKind, string> = {
  enquiry: "Website enquiry",
  deck: "Institutional deck request",
  application: "Careers application",
};

/** Trim, cap length, and strip header-injection characters from a field. */
function clean(value: unknown, max = 5000): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const kind = (payload.kind as FormKind) ?? "enquiry";
  if (!SUBJECTS[kind]) {
    return NextResponse.json({ error: "Unknown form type." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields, humans do not. Accept silently so the
  // bot does not learn it was caught.
  if (clean(payload.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 200);
  const email = clean(payload.email, 200);
  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a name and a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO || contactEmails.general;

  if (!apiKey || !from) {
    // Not configured. Say so plainly rather than pretending it sent.
    return NextResponse.json(
      { error: "Email delivery is not configured.", fallback: true },
      { status: 503 }
    );
  }

  // Everything except the identity fields becomes labelled detail rows.
  const details = Object.entries(payload)
    .filter(([k]) => !["kind", "name", "email", "company_website"].includes(k))
    .map(([k, v]) => [k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()), clean(v)])
    .filter(([, v]) => v.length > 0);

  const rows = [["Name", name], ["Email", email], ...details];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<h2>${escapeHtml(SUBJECTS[kind])}</h2><table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="border:1px solid #ddd"><strong>${escapeHtml(k)}</strong></td><td style="border:1px solid #ddd">${escapeHtml(v)}</td></tr>`
    )
    .join("")}</table>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `${SUBJECTS[kind]} — ${name}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Resend send failed", res.status, body);
      return NextResponse.json(
        { error: "We could not send your message.", fallback: true },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend request threw", err);
    return NextResponse.json(
      { error: "We could not send your message.", fallback: true },
      { status: 502 }
    );
  }
}
