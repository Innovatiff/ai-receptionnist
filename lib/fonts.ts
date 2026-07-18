import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Space_Grotesk } from "next/font/google";

/**
 * Deliberate 3-face pairing for "The Live Line":
 *  - Space Grotesk  → characterful geometric-grotesk DISPLAY (headlines, used with restraint)
 *  - Geist Sans     → clean neutral BODY
 *  - Geist Mono     → utility/mono for call-transcript & dashboard bits
 * Geist is bundled with the npm package (no build-time network fetch);
 * Space Grotesk loads via next/font/google with a system fallback.
 */
export const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
  fallback: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
});

export const sans = GeistSans;
export const mono = GeistMono;

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
