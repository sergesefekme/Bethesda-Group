import { Hero } from "@/components/home/Hero";
import { AfricaMap } from "@/components/home/AfricaMap";
import { SectorGrid } from "@/components/home/SectorGrid";
import { MetricsStrip } from "@/components/home/MetricsStrip";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { ClosingCTA } from "@/components/home/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsStrip />
      <AfricaMap />
      <SectorGrid />
      <InsightsPreview />
      <ClosingCTA />
    </>
  );
}
