/**
 * Tiered pricing (replaces the old flat plan). Three tiers with INCLUDED CALL
 * VOLUME — never "unlimited" anywhere. Professional is the target tier.
 * Owner edits numbers here; components read from this file.
 */

export type TierId = "essential" | "professional" | "multi";

export type Tier = {
  id: TierId;
  name: string;
  badge?: string;
  monthly: number;
  setup: number;
  includedMinutes: number;
  approxCalls: number;
  extraMinuteRate: number;
  bestFor: string;
  totalValue: number;
  features: string[];
  highlight: boolean;
};

export const SCARCITY = {
  spotsRemaining: 3, // EDIT THIS — keep it honest
  foundingRateActive: true,
};

export const CORE_FEATURES = [
  "Custom AI receptionist trained on your business",
  "Answers 24/7/365 — nights, weekends, holidays",
  "Books appointments straight into your calendar",
  "Instant text-back to every caller",
  "Full lead capture, logged and searchable",
  "Live call transcripts + dashboard",
  "Answers in English, French & Spanish",
  "Done-for-you setup — live in 7 days",
];

export const TIERS: Tier[] = [
  {
    id: "essential",
    name: "Essential",
    monthly: 297,
    setup: 997,
    includedMinutes: 300,
    approxCalls: 120,
    extraMinuteRate: 0.5,
    bestFor: "Salons, barbershops, small clinics, solo practices",
    totalValue: 15900,
    features: [...CORE_FEATURES],
    highlight: false,
  },
  {
    id: "professional",
    name: "Professional",
    badge: "MOST POPULAR",
    monthly: 597,
    setup: 997,
    includedMinutes: 900,
    approxCalls: 360,
    extraMinuteRate: 0.45,
    bestFor: "Dentists, med spas, HVAC, plumbing, auto, law offices",
    totalValue: 19400,
    features: [
      ...CORE_FEATURES,
      "Automated SMS + email follow-up",
      "Google Review Booster",
      "AI website chat widget",
      "Monthly optimization call",
    ],
    highlight: true,
  },
  {
    id: "multi",
    name: "Multi-Location",
    monthly: 997,
    setup: 1997,
    includedMinutes: 2000,
    approxCalls: 800,
    extraMinuteRate: 0.4,
    bestFor: "Multi-location, multi-provider, high-volume practices",
    totalValue: 25800,
    features: [
      ...CORE_FEATURES,
      "Automated SMS + email follow-up",
      "Google Review Booster",
      "AI website chat widget",
      "Multiple numbers & per-location routing",
      "Priority tuning — same-day changes",
      "CRM integration",
      "Quarterly strategy review",
    ],
    highlight: true,
  },
];

// Anchors used in the price-reveal sequence. Industry figures — keep labeled as such.
export const ANCHORS = {
  humanReceptionistMonthly: "$2,800–$4,500",
  answeringServiceMonthly: "$400–$700",
  diySoftwareMonthly: "$49–$199",
};

// Recommended tier per industry — drives /industries/[slug] pages.
export const INDUSTRY_TIER: Record<string, TierId> = {
  dentists: "professional",
  "med-spas": "professional",
  hvac: "professional",
  plumbing: "professional",
  salons: "essential",
  barbershops: "essential",
  auto: "professional",
  legal: "multi",
  clinics: "professional",
  contractors: "professional",
};

/* ---------------------------------------------------------------------------
   Helpers + itemized value stack (used by the /pricing full stack and cards).
--------------------------------------------------------------------------- */

export function getTier(id: TierId): Tier {
  return TIERS.find((t) => t.id === id) ?? TIERS[1];
}

export const professional = getTier("professional");

/** Calls-first label — owners think in calls, not minutes. */
export function callsLabel(t: Tier): string {
  return `Up to ~${t.approxCalls} calls a month`;
}
export function minutesLabel(t: Tier): string {
  return `${t.includedMinutes} minutes of talk time`;
}
export function monthlyLabel(t: Tier): string {
  return t.id === "multi" ? `$${t.monthly}+` : `$${t.monthly}`;
}
/** Extra minutes framed as a good problem — never "overage/penalty". */
export function extraMinutesNote(t: Tier): string {
  return `Busier than expected? Extra minutes are $${t.extraMinuteRate.toFixed(
    2
  )} — or move up a tier and pay less per call.`;
}

export type StackItem = { label: string; detail?: string; value: number; isBonus?: boolean };

export const VALUE_STACK_CORE: StackItem[] = [
  {
    label: "Custom AI Voice Receptionist",
    detail: "Trained on your services, hours, pricing & FAQs",
    value: 4000,
  },
  {
    label: "Answers 24/7/365",
    detail: "Nights, weekends, holidays, lunch, overflow",
    value: 2400,
  },
  {
    label: "Books appointments straight into your calendar",
    detail: "Automatically — no back-and-forth",
    value: 1800,
  },
  {
    label: "Instant text-back to every caller",
    detail: "So no lead goes cold",
    value: 900,
  },
  {
    label: "Full lead capture",
    detail: "Every caller's name, number & reason, logged",
    value: 1200,
  },
  {
    label: "Live call transcripts + performance dashboard",
    detail: "See every call and what it booked",
    value: 600,
  },
  {
    label: "Answers in English, French & Spanish",
    value: 1500,
  },
  {
    label: "Done-for-you setup in 7 days",
    detail: "You don't lift a finger",
    value: 2000,
  },
  {
    label: "BONUS — “Missed-Money Audit”",
    detail: "What your missed calls cost you last month",
    value: 500,
    isBonus: true,
  },
  {
    label: "BONUS — 30 Days White-Glove Optimization",
    detail: "We tune it until it's perfect",
    value: 1000,
    isBonus: true,
  },
];

export const VALUE_STACK_PRO_ADDS: StackItem[] = [
  { label: "Automated SMS + email follow-up", detail: "To new leads and no-shows", value: 800 },
  { label: "Google Review Booster", detail: "Turns happy customers into 5-star reviews", value: 900 },
  { label: "AI Website Chat Widget", detail: "The same brain, answering on your site", value: 1200 },
  { label: "Monthly optimization call", detail: "We tune it as your business changes", value: 600 },
];

/** Itemized value stack for a tier. Professional = core + pro adds ($19,400). */
export function valueStackFor(id: TierId): StackItem[] {
  if (id === "essential") return VALUE_STACK_CORE;
  return [...VALUE_STACK_CORE, ...VALUE_STACK_PRO_ADDS];
}

export type Faq = { q: string; a: string };

export const pricingFaqs: Faq[] = [
  {
    q: "What happens if I go over my included calls?",
    a: "Nothing breaks — it keeps answering every call. Extra minutes are billed at the rate on your plan, or we simply move you up a tier so you pay less per call. Either way, we'll tell you before it matters. More calls than expected is a good problem — it means more booked jobs.",
  },
  {
    q: "Why is there a setup fee when other AI tools have none?",
    a: "Because they hand you software and a login. We build your receptionist for your business, connect your calendar, write and test the call flows, and tune it for 30 days. You're buying a finished front desk, not a project.",
  },
  {
    q: "Can I switch tiers?",
    a: "Yes — any time, up or down. As your call volume grows, moving up actually lowers your cost per call.",
  },
  {
    q: "Is there a contract?",
    a: "No. It's month-to-month — cancel anytime. With our guarantees, the risk of trying it is on us, not you.",
  },
  {
    q: "What if I don't know my call volume?",
    a: "Book the demo — the free Missed-Money Audit tells you exactly how many calls you're getting (and missing), so we recommend the right tier from day one.",
  },
  {
    q: "Do you offer a discount for multiple locations?",
    a: "Yes — the Multi-Location plan covers multiple numbers and per-location routing, and we'll quote per location if you're running several sites.",
  },
  {
    q: "What's not included?",
    a: "Physical phone hardware and your phone-carrier bill aren't included — you keep your existing number and carrier. Everything needed to answer, book, and follow up is done for you. If your workflow ever needs a custom integration we don't support yet, we'll tell you straight before you buy.",
  },
];
