"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionConfig } from "framer-motion";

/**
 * Lenis smooth-scroll wired to GSAP ScrollTrigger.
 * - Lenis drives the RAF loop; on each scroll we tell ScrollTrigger to update.
 * - GSAP's ticker advances Lenis so both share one clock (no double RAF).
 * - Fully disabled under prefers-reduced-motion (native scroll, no smoothing).
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    // PERF: never hijack scrolling on touch devices. Lenis re-implements
    // scrolling in JS, which fights iOS Safari's native (GPU-driven) momentum
    // scroll and is a major source of stutter on iPhone. Native scroll there.
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReduced || isTouch) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onRaf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onRaf);
    gsap.ticker.lagSmoothing(0);

    // Recompute triggers once layout settles.
    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 300);

    return () => {
      window.clearTimeout(t);
      gsap.ticker.remove(onRaf);
      lenis.destroy();
    };
  }, []);

  // reducedMotion="user" makes Framer disable transform/layout animations (the
  // slide-ups) when the OS asks for reduced motion, keeping only motion-safe
  // opacity fades. Pairs with each component's own usePrefersReducedMotion guard.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
