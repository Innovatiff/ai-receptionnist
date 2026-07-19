/**
 * Guarantees (Section 2.4). Pricing/value-stack data now lives in
 * content/pricing.ts (tiered model).
 */

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
