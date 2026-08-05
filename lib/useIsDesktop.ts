"use client";

import { useEffect, useState } from "react";

/**
 * True only for large screens with a precise pointer (i.e. a real desktop).
 * Used to gate expensive decorative motion off phones and tablets.
 * SSR-safe: starts false, so mobile never pays for a first paint it doesn't need.
 */
export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}
