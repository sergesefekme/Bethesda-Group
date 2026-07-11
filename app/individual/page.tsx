import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Individual & Diaspora Investors",
  description:
    "An accessible, trustworthy way to invest in African development from abroad — clear entry, regulatory protection and a real connection to home.",
};

// [PLACEHOLDER] Confirm the actual investment mechanism, minimums and entry process.
const steps = [
  { n: "01", title: "Register your interest", body: "[PLACEHOLDER] Create an account and complete a short suitability and identity check." },
  { n: "02", title: "Choose your exposure", body: "[PLACEHOLDER] Select from curated opportunities or a diversified vehicle aligned to your goals." },
  { n: "03", title: "Fund & invest", body: "[PLACEHOLDER] Fund securely through a regulated partner and confirm your allocation." },
  { n: "04", title: "Track your impact", body: "[PLACEHOLDER] Follow performance and the on-the-ground impact of your capital." },
];

const trustPoints = [
  { title: "Regulated & registered", body: "[PLACEHOLDER] Registration numbers and regulators across relevant jurisdictions." },
  { title: "Custodian & partner banks", body: "[PLACEHOLDER] Client funds held with named custodians and partner banks." },
  { title: "Investor protections", body: "[PLACEHOLDER] Safeguards, disclosures and the protections that apply to your investment." },
];

export default function IndividualPage() {
  return (
    <>
      <PageHero
        eyebrow="Individual & Diaspora Investors"
        image="/images/diaspora.jpg"
        title={<>Invest in home, from wherever you are</>}
        description="You left, but you never really left. We've built an accessible, well-governed way to put your capital to work in the markets you know best."
      >
        <Button href="#start" variant="light">
          Start investing →
        </Button>
      </PageHero>

      {/* How it works */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-content">
          <SectionHeader
            eyebrow="How it works"
            title="A clear path from interest to investment"
            description="[PLACEHOLDER] Confirm the real mechanism — direct equity, a fund vehicle, bonds or an app-based platform — and the minimum investment."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} from="up" delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-navy/10 p-7">
                  <span className="text-2xl font-extrabold text-cognac">{s.n}</span>
                  <h3 className="mt-4 text-base font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal from="up" className="mt-12">
            <div className="flex flex-col gap-4 rounded-2xl bg-navy p-8 text-offwhite sm:flex-row sm:items-center sm:justify-between md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cognac-light">Minimum investment</p>
                <p className="mt-2 text-3xl font-extrabold">
                  [PLACEHOLDER] $—<span className="text-lg font-medium text-warmgray"> to begin</span>
                </p>
              </div>
              <p className="max-w-sm text-sm text-warmgray">
                [PLACEHOLDER] Confirm the true entry minimum and any tiered options for diaspora and retail investors.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-offwhite-dark/40 py-24 md:py-32">
        <div className="container-content">
          <SectionHeader
            eyebrow="Trust & protection"
            title="Your capital, properly safeguarded"
            description="Investing across borders should never mean investing blind. Here is how we protect you."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {trustPoints.map((t, i) => (
              <Reveal key={t.title} from="up" delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-navy/10 bg-offwhite p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cognac/10 text-cognac">✓</div>
                  <h3 className="text-lg font-bold text-navy">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diaspora narrative */}
      <section className="bg-navy py-24 md:py-32">
        <div className="container-content grid items-center gap-14 lg:grid-cols-2">
          <Reveal from="right">
            <PlaceholderImage
              src="/images/diaspora.jpg"
              label="Diaspora investor, connection to home"
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <div>
            <SectionHeader
              eyebrow="Why it matters"
              title="Development you can be part of"
              description="Remittances have long outpaced aid. The next step is turning that generosity into ownership — structured, protected, and directed at the projects building the future you want to see."
              tone="light"
            />
            <Reveal from="up" delay={0.1}>
              <p className="mt-6 text-warmgray">
                [PLACEHOLDER] A substantive paragraph on the diaspora opportunity — specific, grounded and free of sentimentality. Speak to agency and returns, not just emotion.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Start CTA */}
      <section id="start" className="scroll-mt-24 bg-offwhite py-24 md:py-32">
        <div className="container-content text-center">
          <Reveal from="up" className="mx-auto max-w-xl">
            <h2 className="text-display font-extrabold text-navy">Ready to begin?</h2>
            <p className="mt-5 text-navy/70">
              Start your onboarding in minutes. [PLACEHOLDER] link this CTA to the real onboarding flow.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" variant="primary">
                Start investing →
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
