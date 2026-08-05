import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = `${site.name} — The AI that books every call you miss`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PETAL =
  "M 12,3 L 22.5,3 L 22.5,12.5 A 10 10 0 0 1 12.5,22.5 L 3,22.5 L 3,12 A 9 9 0 0 1 12,3 Z";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(900px 500px at 15% 0%, rgba(124,92,255,0.5), transparent 60%), radial-gradient(700px 450px at 90% 20%, rgba(255,138,76,0.28), transparent 62%), #08060F",
          padding: 76,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 48 48">
            <g fill="#9B80FF">
              <path d={PETAL} />
              <path d={PETAL} transform="rotate(90 24 24)" />
              <path d={PETAL} transform="rotate(180 24 24)" />
              <path d={PETAL} transform="rotate(270 24 24)" />
            </g>
          </svg>
          <div style={{ color: "white", fontSize: 42, fontWeight: 700, letterSpacing: -1.5 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              color: "#B9A5FF",
              fontSize: 23,
              fontWeight: 600,
              letterSpacing: 3.5,
              textTransform: "uppercase",
            }}
          >
            AI receptionists, built for you
          </div>
          <div
            style={{
              color: "white",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -3,
              maxWidth: 960,
            }}
          >
            The AI that books every call you miss.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              background: "linear-gradient(90deg,#FFA96B,#F2662A)",
              color: "#08060F",
              fontSize: 26,
              fontWeight: 700,
              padding: "16px 34px",
              borderRadius: 999,
            }}
          >
            Book My Free Demo
          </div>
          <div style={{ color: "rgba(167,159,196,0.9)", fontSize: 23 }}>
            Answers 24/7 · Books appointments · Live in 7 days
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
