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

const steps = [
  {
    n: "01",
    title: "Register your interest",
    body: "Open an account and complete a short suitability and identity check. It takes a few minutes.",
  },
  {
    n: "02",
    title: "Choose your exposure",
    body: "Select from curated opportunities or a diversified vehicle aligned to your goals and time horizon.",
  },
  {
    n: "03",
    title: "Fund & invest",
    body: "Fund your account through a regulated partner and confirm your allocation.",
  },
  {
    n: "04",
    title: "Track your impact",
    body: "Follow performance and the on-the-ground progress of the projects your capital supports.",
  },
];

// TODO(content): each of these is a regulatory or custody claim and must be
// verified — with named regulators, registration numbers and custodians —
// before it goes live. See CONTENT-NEEDED.md.
const trustPoints: { title: string; body: string }[] = [];

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
            description="Four steps from first enquiry to a funded allocation, with a named contact at every stage."
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

          {/* TODO(content): reinstate the minimum-investment panel once the true
              entry minimum and any tiered options are confirmed. See CONTENT-NEEDED.md. */}
        </div>
      </section>

      {/* Trust */}
      {trustPoints.length > 0 && (
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
      )}

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
              <p className="mt-6 leading-relaxed text-warmgray">
                Sending money home supports a household. Owning a share of the business, the grid
                connection or the clinic that household depends on changes what the money can do —
                and it compounds. The barrier has rarely been appetite; it has been access,
                governance and the absence of a credible way in. That is the gap we exist to close,
                on the same terms and with the same reporting our institutional partners receive.
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
              Tell us a little about what you&rsquo;re looking for and a member of the team will
              walk you through the options.
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
