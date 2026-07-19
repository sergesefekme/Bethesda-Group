import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { GatedDeckForm } from "@/components/shared/GatedDeckForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Institutional Investors",
  description:
    "Regulatory-grade partnership for governments and sovereign funds — governance transparency, co-investment and PPP structures, and large-scale capital deployment across Africa.",
};

// NOTE: a "Compliance & regulation" pillar was removed here — naming regulators
// and asserting registration is a claim that must be verified, not drafted.
// See CONTENT-NEEDED.md.
const governancePillars = [
  {
    title: "Governance & oversight",
    body: "Every allocation passes an investment committee that sits independently of the deal teams, with board-level oversight and audited reporting.",
  },
  {
    title: "Transparency & reporting",
    body: "Partners receive a fixed reporting cadence, quantified impact metrics alongside financial performance, and traceability down to individual transactions.",
  },
  {
    title: "Aligned incentives",
    body: "We co-invest our own balance sheet alongside institutional partners, so the group carries the same exposure to the same outcomes.",
  },
];

const partnershipModels = [
  {
    name: "Co-investment",
    body: "Deploy alongside the group into named assets, with aligned terms, agreed governance rights and full visibility of the underlying diligence.",
  },
  {
    name: "Public-private partnerships (PPP)",
    body: "Structured vehicles for infrastructure and social assets, built around balanced risk allocation between public and private participants.",
  },
  {
    name: "Sovereign fund mandates",
    body: "Discretionary and advisory mandates shaped around sovereign and development-finance objectives, including local-content and impact requirements.",
  },
];

// TODO(content): institutional proof points need real, attributable transactions
// and verified figures before they are shown. See CONTENT-NEEDED.md.
const caseStudies: { sector: string; country: string; outcome: string; detail: string }[] = [];

export default function InstitutionalPage() {
  return (
    <>
      <PageHero
        eyebrow="Institutional Investors"
        accent="institutional"
        image="/images/sectors/advisory-services.jpg"
        title={<>Regulatory-grade partnership for capital at scale</>}
        description="For governments, sovereign wealth funds and development-finance institutions seeking governance transparency and large-scale, well-structured deployment across African markets."
      >
        <Button href="#request-deck" variant="light">
          Request institutional deck →
        </Button>
      </PageHero>

      {/* Governance & compliance */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-content">
          <SectionHeader
            eyebrow="Governance & compliance"
            title="Built for institutional scrutiny"
            description="Our framework is designed to meet the diligence standards of the world's most demanding allocators."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {governancePillars.map((p, i) => (
              <Reveal key={p.title} from="up" delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-navy/10 bg-offwhite-dark/40 p-8">
                  <span className="mb-4 inline-block text-sm font-semibold text-institutional">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership models */}
      <section className="bg-navy py-24 md:py-32">
        <div className="container-content">
          <SectionHeader
            eyebrow="Partnership models"
            title="Flexible structures, aligned interests"
            description="Three routes institutional partners take into the portfolio, each with its own governance and reporting arrangements."
            tone="light"
          />
          <div className="mt-14 space-y-4">
            {partnershipModels.map((m, i) => (
              <Reveal key={m.name} from="up" delay={i * 0.06}>
                <div className="flex flex-col gap-4 rounded-2xl border border-offwhite/10 bg-navy-700/40 p-8 md:flex-row md:items-center md:justify-between">
                  <div className="md:max-w-md">
                    <h3 className="text-xl font-bold text-offwhite">{m.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-warmgray">{m.body}</p>
                  </div>
                  <Badge tone="institutional">Institutional track</Badge>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      {caseStudies.length > 0 && (
      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-content">
          <SectionHeader
            eyebrow="Track record"
            title="Quantified outcomes"
            description="A selection of partnership outcomes across sectors and markets."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Reveal key={c.sector + c.country} from="up" delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-navy/10 p-8">
                  <div className="flex items-center gap-2 text-xs text-navy/50">
                    <span>{c.sector}</span>
                    <span>·</span>
                    <span>{c.country}</span>
                  </div>
                  <p className="mt-4 text-3xl font-extrabold text-navy">{c.outcome}</p>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">{c.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Gated deck request */}
      <section id="request-deck" className="scroll-mt-24 bg-navy py-24 md:py-32">
        <div className="container-content grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Request access"
              title="Request the institutional deck"
              description="Our institutional partnerships deck is shared privately. Tell us a little about your mandate and we'll be in touch — the deck is not a public download."
              tone="light"
            />
            <p className="mt-8 text-sm leading-relaxed text-warmgray/70">
              Requests are reviewed individually and are typically answered within three business
              days. The deck is shared under confidentiality with institutional and professional
              investors only.
            </p>
          </div>
          <Reveal from="up">
            <GatedDeckForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
