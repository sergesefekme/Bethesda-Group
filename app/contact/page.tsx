import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { hasPrimaryOffice, primaryOffice } from "@/lib/content/offices";

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
              <div className="mt-12 rounded-2xl bg-navy p-6 text-sm text-warmgray">
                <p className="font-medium text-offwhite">Media &amp; press</p>
                <p className="mt-2 leading-relaxed">
                  Use the enquiry form and select the press option — media requests are routed to
                  the communications team and answered within two business days.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
