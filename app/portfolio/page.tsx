import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio & Track Record",
  description:
    "A selection of Bethesda Group portfolio companies and projects across sectors and African markets, with quantified outcomes.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio & track record"
        title={<>Capital at work across Africa</>}
        description="A selection of the companies and projects we have backed — filter by sector and country."
      />
      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-content">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
