import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content/navigation";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamically generated OpenGraph card so the site has a branded share image
 * without shipping a binary asset. Replace with a designed image at
 * /public/og.png later if preferred.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #12263D 0%, #1E3A5F 60%, #325A89 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span style={{ fontSize: 34, fontWeight: 800, color: "#F7F4EF" }}>Bethesda</span>
          <span style={{ fontSize: 34, fontWeight: 800, color: "#D6A24A" }}>Group</span>
        </div>
        <div>
          <div style={{ fontSize: 68, fontWeight: 800, color: "#F7F4EF", lineHeight: 1.05, maxWidth: 900 }}>
            Long-term capital for Africa&rsquo;s next era.
          </div>
          <div style={{ fontSize: 26, color: "#C9C2B8", marginTop: 24, maxWidth: 820 }}>
            A pan-African investment technology group across seven sectors.
          </div>
        </div>
        <div style={{ height: 6, width: 180, background: "#D6A24A" }} />
      </div>
    ),
    size
  );
}
