/**
 * The Grand Slam Offer (Section 2). Value stack, price reveal, guarantees.
 * All numbers/copy are editable here.
 */

export type StackItem = {
  label: string;
  detail?: string;
  value: number;
  isBonus?: boolean;
};

export const valueStack: StackItem[] = [
  {
    label: "Custom AI Voice Receptionist",
    detail: "Trained on your business, services, hours & FAQs",
    value: 4000,
  },
  {
    label: "Answers 24/7/365",
    detail: "Nights, weekends, holidays, lunch, overflow. Never misses.",
    value: 2400,
  },
  {
    label: "Books appointments straight into your calendar",
    detail: "Automatically — no back-and-forth",
    value: 1800,
  },
  {
    label: "Instant text-back to every caller",
    detail: "So no lead ever goes cold",
    value: 900,
  },
  {
    label: "Full lead capture",
    detail: "Every caller's name, number & reason, logged for you",
    value: 1200,
  },
  {
    label: "Automated SMS + email follow-up",
    detail: "To no-shows and new leads",
    value: 800,
  },
  {
    label: "Live call transcripts + performance dashboard",
    detail: "See every call and what it booked",
    value: 600,
  },
  {
    label: "Bilingual / trilingual answering",
    detail: "English, French & Spanish",
    value: 1500,
  },
  {
    label: "Done-for-you setup in 7 days",
    detail: "You don't lift a finger",
    value: 2000,
  },
  {
    label: "BONUS 1 — “Missed-Money Audit”",
    detail: "Exactly how much revenue your missed calls cost last month",
    value: 500,
    isBonus: true,
  },
  {
    label: "BONUS 2 — AI Website Chat Widget",
    detail: "The same brain, answering on your website",
    value: 1200,
    isBonus: true,
  },
  {
    label: "BONUS 3 — Google Review Booster",
    detail: "Turns happy customers into 5-star reviews automatically",
    value: 900,
    isBonus: true,
  },
  {
    label: "BONUS 4 — 30 Days White-Glove Optimization",
    detail: "We tune it until it's perfect",
    value: 1000,
    isBonus: true,
  },
];

export const totalValueLabel = "$18,800+";
export const totalValueNumber = 18800;

export const pricing = {
  totalValueLabel,
  receptionistCompare: {
    label: "A full-time receptionist",
    price: "$3,000+/month",
    caveat: "and they sleep, take breaks, get sick, and quit.",
  },
  setup: 997,
  monthly: 297,
  setupLabel: "$997",
  monthlyLabel: "$297/month",
  kicker: "That's less than the cost of a single missed job. It pays for itself the first week.",
} as const;

export type Guarantee = {
  id: string;
  name: string;
  headline: string;
  body: string;
};

export const guarantees: Guarantee[] = [
  {
    id: "booked-solid",
    name: "“Booked Solid” Guarantee",
    headline: "You either get booked jobs, or you don't pay.",
    body: "If your AI receptionist doesn't book real appointments in your first 30 days, we keep working — and you don't pay another cent — until it does.",
  },
  {
    id: "pays-for-itself",
    name: "“Pays for Itself” Guarantee",
    headline: "It only takes one booked job to make your money back.",
    body: "If your AI receptionist hasn't paid for itself within 60 days, we refund your setup fee — and you keep the Missed-Money Audit and Review Booster on us.",
  },
];

export const primaryGuarantee = guarantees[0];
