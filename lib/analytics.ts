"use client";

import { track } from "@vercel/analytics";

/**
 * Thin wrapper so every CTA / conversion event fires through one place.
 * Vercel Analytics is a no-op in dev / when the script isn't present, so
 * this is always safe to call.
 */
type EventName =
  | "cta_click"
  | "demo_view"
  | "calculator_complete"
  | "audio_play"
  | "lead_submit";

export function trackEvent(
  name: EventName,
  props?: Record<string, string | number | boolean>
) {
  try {
    track(name, props);
  } catch {
    /* analytics must never break the UI */
  }
}
