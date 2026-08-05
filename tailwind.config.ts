import type { Config } from "tailwindcss";

/**
 * BOOKLEAD — "Signal Violet" design system.
 * Dark violet-black canvas, electric violet primary, warm amber-coral accent
 * for CTAs and "money" moments. Fluid type scales 375px → 2000px.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        // Canvas
        void: {
          DEFAULT: "#08060F",
          900: "#0B0817",
          800: "#0F0B1F",
          700: "#161029",
          600: "#1F1738",
          500: "#2B2049",
        },
        // Brand violet
        violet: {
          DEFAULT: "#7C5CFF",
          50: "#F3F0FF",
          100: "#E9E3FF",
          200: "#D5C9FF",
          300: "#B9A5FF",
          400: "#9B80FF",
          500: "#7C5CFF",
          600: "#6741E8",
          700: "#5232C4",
          800: "#40289B",
          900: "#33217A",
        },
        // Warm accent (CTA / money)
        ember: {
          DEFAULT: "#FF8A4C",
          soft: "#FFB185",
          deep: "#F2662A",
          glow: "#FFA96B",
        },
        // Support
        mint: "#4ADE9B",
        haze: "#A79FC4",
        cloud: "#FAF8FF",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.18em" }],
        // Fluid, BIG on every platform (375px → 2000px)
        hero: [
          "clamp(2.75rem, 6.6vw, 6.25rem)",
          { lineHeight: "0.98", letterSpacing: "-0.04em" },
        ],
        "display-xl": [
          "clamp(2.4rem, 6vw, 5.5rem)",
          { lineHeight: "1", letterSpacing: "-0.035em" },
        ],
        "display-lg": [
          "clamp(2.1rem, 4.6vw, 4rem)",
          { lineHeight: "1.04", letterSpacing: "-0.03em" },
        ],
        "display-md": [
          "clamp(1.75rem, 3.2vw, 2.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em" },
        ],
        "body-lg": [
          "clamp(1rem, 1.15vw, 1.25rem)",
          { lineHeight: "1.6", letterSpacing: "-0.01em" },
        ],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.375rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(8, 6, 15, 0.5)",
        card: "0 24px 70px -24px rgba(8, 6, 15, 0.65)",
        violet: "0 0 0 1px rgba(124,92,255,0.25), 0 24px 70px -20px rgba(124,92,255,0.55)",
        ember: "0 14px 44px -12px rgba(255,138,76,0.6)",
        ring: "inset 0 1px 0 0 rgba(255,255,255,0.07)",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-16px) translateX(6px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        "live-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.8)" },
        },
        shimmer: {
          "100%": { transform: "translateX(200%)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "wave-1": "wave 1.1s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        "marquee-fast": "marquee 24s linear infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
        "live-dot": "live-dot 1.6s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "violet-glow":
          "radial-gradient(60% 60% at 50% 40%, rgba(124,92,255,0.45) 0%, rgba(124,92,255,0.12) 45%, transparent 75%)",
      },
    },
  },
  plugins: [],
};

export default config;
