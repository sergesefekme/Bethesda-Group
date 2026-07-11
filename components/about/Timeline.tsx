import { milestones } from "@/lib/content/leadership";
import { Reveal } from "@/components/ui/Reveal";

/** Scroll-animated milestone timeline. */
export function Timeline() {
  return (
    <div className="relative mt-14">
      {/* Vertical spine */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-offwhite/15 md:left-1/2" aria-hidden />
      <ol className="space-y-12">
        {milestones.map((m, i) => (
          <li key={i} className="relative md:grid md:grid-cols-2 md:gap-12">
            <Reveal from={i % 2 === 0 ? "right" : "left"} className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
              <div className="ml-8 md:ml-0">
                <span className="text-sm font-bold text-cognac-light">{m.year}</span>
                <h3 className="mt-1 text-lg font-bold text-offwhite">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warmgray">{m.description}</p>
              </div>
            </Reveal>
            {/* Node */}
            <span className="absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-cognac bg-navy md:left-1/2 md:-translate-x-1/2" aria-hidden />
          </li>
        ))}
      </ol>
    </div>
  );
}
