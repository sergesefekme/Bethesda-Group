import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { InsightsList } from "@/components/insights/InsightsList";

export const metadata: Metadata = {
  title: "Insights & Newsroom",
  description:
    "Market analysis, sector commentary and company announcements from Bethesda Group.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & newsroom"
        title={<>Perspectives on African markets</>}
        description="Analysis, sector commentary and announcements from across the group. [PLACEHOLDER] articles until real content is published."
      />
      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-content">
          <InsightsList />
        </div>
      </section>
    </>
  );
}
