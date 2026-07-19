import type { Config } from "tailwindcss";

/**
 * "The Live Line" design tokens.
 * The product's world is an always-on, intelligent phone line.
 * Palette = ink (deep navy base) + signal (indigo) + live (cyan pulse) +
 * pulse (coral-amber CTA/money) + mist/paper (light content) + slate (muted).
 * Restrained gradients live ONLY on signal/live accents (the soundwave).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1120",
          950: "#080B14",
          900: "#0B1120",
          850: "#0E1524",
          800: "#111A2E",
          700: "#1B2740",
          600: "#26344F",
        },
        signal: {
          DEFAULT: "#5B6CFF",
          50: "#EEF0FF",
          100: "#E0E4FF",
          200: "#C4CBFF",
          300: "#9AA5FF",
          400: "#7C88FF",
          500: "#5B6CFF",
          600: "#4553E6",
          700: "#3742B8",
          800: "#2C3690",
          900: "#252D73",
        },
        live: {
          DEFAULT: "#38E1FF",
          soft: "#7CEBFF",
          deep: "#0FB9DE",
        },
        pulse: {
          DEFAULT: "#FF7A59",
          hover: "#FF6A44",
          soft: "#FFB49E",
          deep: "#E85C3A",
        },
        mist: "#F7F8FB",
        paper: "#FFFFFF",
        slate: {
          DEFAULT: "#5A6478",
          light: "#8A93A6",
          dark: "#3A4256",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Intentional type scale
        eyebrow: ["0.8125rem", { lineHeight: "1", letterSpacing: "0.14em" }],
        "display-xl": [
          "clamp(2.5rem, 5.4vw, 4.75rem)",
          { lineHeight: "1.04", letterSpacing: "-0.032em" },
        ],
        "display-lg": [
          "clamp(2.1rem, 4.2vw, 3.4rem)",
          { lineHeight: "1.07", letterSpacing: "-0.028em" },
        ],
        "display-md": [
          "clamp(1.7rem, 3vw, 2.5rem)",
          { lineHeight: "1.12", letterSpacing: "-0.022em" },
        ],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11, 17, 32, 0.18)",
        card: "0 20px 60px -20px rgba(11, 17, 32, 0.25)",
        glow: "0 0 0 1px rgba(91, 108, 255, 0.25), 0 20px 60px -18px rgba(91, 108, 255, 0.45)",
        "glow-live":
          "0 0 0 1px rgba(56, 225, 255, 0.3), 0 18px 50px -16px rgba(56, 225, 255, 0.4)",
        "pulse-glow":
          "0 12px 40px -12px rgba(255, 122, 89, 0.55)",
      },
      keyframes: {
        "live-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.82)" },
        },
        "wave": {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "live-dot": "live-dot 1.6s ease-in-out infinite",
        "wave-1": "wave 1.1s ease-in-out infinite",
        "wave-2": "wave 1.1s ease-in-out infinite 0.15s",
        "wave-3": "wave 1.1s ease-in-out infinite 0.3s",
        "float": "float 6s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
