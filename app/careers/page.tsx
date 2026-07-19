import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ApplicationForm } from "@/components/shared/ApplicationForm";
import { careerValues, openRoles } from "@/lib/content/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at Bethesda Group, and how to submit a speculative application to our investment, technology and operations teams.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build the next era with us</>}
        description="We are a small team deploying long-term capital and technology across African markets. When we hire, we hire deliberately."
      />

      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-content">
          <Reveal from="up">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-cognac">
              Open roles
            </h2>
          </Reveal>

          {openRoles.length > 0 ? (
            <ul className="mt-8 divide-y divide-navy/10 border-y border-navy/10">
              {openRoles.map((role, i) => (
                <li key={role.slug}>
                  <Reveal from="up" delay={i * 0.05}>
                    <div className="flex flex-col gap-3 py-7 md:flex-row md:items-baseline md:justify-between md:gap-8">
                      <div>
                        <h3 className="text-lg font-bold text-navy">{role.title}</h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy/60">
                          {role.summary}
                        </p>
                      </div>
                      <p className="shrink-0 text-sm text-navy/50">
                        {role.team} · {role.location} · {role.type}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          ) : (
            <Reveal from="up">
              <div className="mt-8 rounded-3xl border border-navy/10 bg-offwhite-dark/40 p-10 text-center md:p-14">
                <p className="text-title font-extrabold text-navy">No current openings</p>
                <p className="mx-auto mt-4 max-w-lg leading-relaxed text-navy/60">
                  We don&rsquo;t have a vacancy posted right now — please check back soon. If your
                  experience is a strong fit for how we work, we still want to hear from you: send a
                  speculative application below and we&rsquo;ll keep it on file.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-offwhite-dark/40 py-24 md:py-32">
        <div className="container-content">
          <Reveal from="up">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-cognac">
              How we work
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {careerValues.map((value, i) => (
              <Reveal key={value.title} from="up" delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-navy/10 bg-offwhite p-8">
                  <h3 className="text-lg font-bold text-navy">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/60">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-content max-w-3xl">
          <Reveal from="up">
            <h2 className="text-display font-extrabold text-navy">
              {openRoles.length > 0 ? "Apply" : "Send a speculative application"}
            </h2>
            <p className="mt-5 leading-relaxed text-navy/60">
              Share your CV or portfolio and a short note. Every application is read by the team it
              would join.
            </p>
          </Reveal>
          <Reveal from="up" delay={0.08}>
            <div className="mt-10 rounded-3xl border border-navy/10 bg-offwhite-dark/30 p-8 md:p-10">
              <ApplicationForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
