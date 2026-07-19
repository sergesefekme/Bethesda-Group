import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { InsightsList } from "@/components/insights/InsightsList";

export const metadata: Metadata = {
  title: "Insights & Newsroom",
  description:
    "Blogs, press releases, news, success stories and events from Bethesda Group.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & newsroom"
        title={<>Perspectives on African markets</>}
        description="Blogs, press releases, news, success stories and events from across the group."
      />
      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-content">
          <InsightsList />
        </div>
      </section>
    </>
  );
}
