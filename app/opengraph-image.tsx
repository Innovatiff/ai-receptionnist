import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = `${site.name} — Never miss another call, or another customer`;
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
          justifyContent: "space-between",
          background:
            "radial-gradient(1000px 500px at 80% -10%, rgba(91,108,255,0.45), transparent 60%), #080B14",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 4,
              width: 60,
              height: 60,
              background: "linear-gradient(135deg, #5B6CFF, #3742B8)",
              borderRadius: 16,
              padding: 14,
            }}
          >
            {[18, 32, 44, 26, 36].map((h, i) => (
              <div
                key={i}
                style={{
                  width: 5,
                  height: h,
                  borderRadius: 4,
                  background: "linear-gradient(to top, #38E1FF, #ffffff)",
                }}
              />
            ))}
          </div>
          <div style={{ color: "white", fontSize: 40, fontWeight: 700 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#38E1FF",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            The 24/7 Booking Machine
          </div>
          <div
            style={{
              color: "white",
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Never miss a call. Never lose a customer.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              background: "#FF7A59",
              color: "#080B14",
              fontSize: 28,
              fontWeight: 700,
              padding: "16px 32px",
              borderRadius: 999,
            }}
          >
            Book My Free Demo
          </div>
          <div style={{ color: "rgba(247,248,251,0.6)", fontSize: 24 }}>
            Answers 24/7 · Books appointments · Live in 7 days
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
