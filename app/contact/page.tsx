import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { contactEmails, contactPhone, hasPrimaryOffice, primaryOffice } from "@/lib/content/offices";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bethesda Group — institutional, individual investor, and general or media enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&rsquo;s start a conversation</>}
        description="Whether you represent an institution, are investing as an individual, or are from the press, we'd like to hear from you."
      />

      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-content grid gap-16 lg:grid-cols-[1.3fr_1fr]">
          <Reveal from="up">
            <div className="rounded-3xl border border-navy/10 bg-offwhite-dark/30 p-8 md:p-10">
              <InquiryForm />
            </div>
          </Reveal>

          <div>
            {hasPrimaryOffice && (
              <Reveal from="up">
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-cognac">Office</h2>
                <address className="mt-5 not-italic">
                  <p className="font-bold text-navy">
                    {primaryOffice.city}
                    {primaryOffice.region && `, ${primaryOffice.region}`}
                  </p>
                  <p className="text-sm leading-relaxed text-navy/60">
                    {primaryOffice.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                    <span className="block">{primaryOffice.country}</span>
                  </p>
                </address>
              </Reveal>
            )}

            <Reveal from="up" delay={0.08}>
              <h2 className="mt-12 text-sm font-semibold uppercase tracking-[0.15em] text-cognac">
                Email
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <span className="block text-navy/50">General enquiries</span>
                  <a
                    href={`mailto:${contactEmails.general}`}
                    data-cursor="link"
                    className="link-underline font-medium text-navy transition-colors hover:text-cognac"
                  >
                    {contactEmails.general}
                  </a>
                </li>
                <li>
                  <span className="block text-navy/50">Direct</span>
                  <a
                    href={`mailto:${contactEmails.direct}`}
                    data-cursor="link"
                    className="link-underline font-medium text-navy transition-colors hover:text-cognac"
                  >
                    {contactEmails.direct}
                  </a>
                  <a
                    href={`mailto:${contactEmails.directAlt}`}
                    data-cursor="link"
                    className="link-underline mt-1 block font-medium text-navy transition-colors hover:text-cognac"
                  >
                    {contactEmails.directAlt}
                  </a>
                </li>
              </ul>

              <h2 className="mt-12 text-sm font-semibold uppercase tracking-[0.15em] text-cognac">
                Phone
              </h2>
              <p className="mt-5 text-sm">
                <a
                  href={contactPhone.href}
                  data-cursor="link"
                  className="link-underline font-medium text-navy transition-colors hover:text-cognac"
                >
                  {contactPhone.label}
                </a>
              </p>
            </Reveal>

            <Reveal from="up" delay={0.12}>
              <div className="mt-12 rounded-2xl bg-navy p-6 text-sm text-warmgray">
                <p className="font-medium text-offwhite">Media &amp; press</p>
                <p className="mt-2 leading-relaxed">
                  Use the enquiry form and select the press option, or email{" "}
                  <a
                    href={`mailto:${contactEmails.general}`}
                    className="link-underline text-cognac-light"
                    data-cursor="link"
                  >
                    {contactEmails.general}
                  </a>
                  . Media requests are answered within two business days.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
