import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion variants. Every reveal is transform/opacity only
 * (GPU-friendly, no layout thrash) and every consumer pairs these with a
 * prefers-reduced-motion guard so the static fallback is instant.
 */

export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeOutExpo } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

/** Richer reveal — fades up with a subtle scale/blur settle. Great on mobile. */
export const revealScale: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

/** Slide in from the side (used for alternating rows / cards). */
export const slideIn = (dir: "left" | "right" = "left"): Variants => ({
  hidden: { opacity: 0, x: dir === "left" ? -32 : 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOutExpo } },
});

/** Parent that staggers its children's `fadeUp`. */
export const staggerParent = (stagger = 0.09, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Standard whileInView props for one-shot reveals. Lower amount = reliably
 *  triggers on mobile where sections are tall relative to the viewport. */
export const inViewOnce = {
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: true, amount: 0.2 },
};

/** Even earlier trigger for large blocks / mobile-first reveals. */
export const inViewSoft = {
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: true, amount: 0.12, margin: "0px 0px -10% 0px" },
};
