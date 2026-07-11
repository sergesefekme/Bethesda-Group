import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { offices } from "@/lib/content/offices";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bethesda Group — institutional, individual investor, and general/media enquiries, plus our offices across Africa and international HQ.",
};

export default function ContactPage() {
  const hq = offices.filter((o) => o.hq);
  const african = offices.filter((o) => !o.hq);

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
            <Reveal from="up">
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-cognac">International HQ</h2>
              <ul className="mt-5 space-y-6">
                {hq.map((o) => (
                  <li key={o.city}>
                    <p className="font-bold text-navy">
                      {o.city}, {o.country}
                    </p>
                    <p className="text-sm text-navy/60">{o.address}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal from="up" delay={0.08}>
              <h2 className="mt-12 text-sm font-semibold uppercase tracking-[0.15em] text-cognac">African offices</h2>
              <ul className="mt-5 grid gap-6 sm:grid-cols-2">
                {african.map((o) => (
                  <li key={o.city}>
                    <p className="font-bold text-navy">
                      {o.city}, {o.country}
                    </p>
                    <p className="text-sm text-navy/60">{o.address}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal from="up" delay={0.12}>
              <div className="mt-12 rounded-2xl bg-navy p-6 text-sm text-warmgray">
                <p className="font-medium text-offwhite">Media & press</p>
                <p className="mt-2">
                  [PLACEHOLDER] press@bethesdagroup.com · General enquiries:
                  [PLACEHOLDER] info@bethesdagroup.com
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
