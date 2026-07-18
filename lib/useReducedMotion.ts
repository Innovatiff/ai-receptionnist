"use client";

import { useEffect, useState } from "react";

/**
 * Live prefers-reduced-motion signal. Components use this to swap any
 * animation for a static/instant end-state. SSR-safe (defaults to false,
 * corrects on mount before paint of animated content).
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
