import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "LawBid — Post your case. Attorneys bid. You choose.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "radial-gradient(ellipse at 70% 30%, #2a355f 0%, #0a0f1f 55%, #05070f 100%)",
          color: "#f6f2ea",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, color: "#e2bc6e", letterSpacing: 2 }}>⚖ LawBid</div>
        <div style={{ display: "flex", fontSize: 88, marginTop: 24, lineHeight: 1.05, maxWidth: 900 }}>Justice, weighed in your favor.</div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 28, color: "#a7afc7" }}>Post your case. Attorneys bid. You choose.</div>
      </div>
    ),
    size,
  );
}
