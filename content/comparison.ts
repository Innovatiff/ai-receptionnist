/**
 * Comparison table (Section 4.9): AI Receptionist vs Voicemail vs Human
 * Receptionist vs Answering Service. Honest — our column wins on the things
 * that matter, but we don't fake the ones where others are fine.
 */

export type Cell = boolean | "partial" | string;

export type ComparisonRow = {
  feature: string;
  ai: Cell;
  voicemail: Cell;
  human: Cell;
  service: Cell;
};

export const comparisonColumns = [
  { key: "ai", label: "AI Receptionist", highlight: true },
  { key: "voicemail", label: "Voicemail", highlight: false },
  { key: "human", label: "Human Receptionist", highlight: false },
  { key: "service", label: "Answering Service", highlight: false },
] as const;

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Answers 24/7",
    ai: true,
    voicemail: "Takes a message",
    human: false,
    service: true,
  },
  {
    feature: "Books appointments",
    ai: true,
    voicemail: false,
    human: true,
    service: "partial",
  },
  {
    feature: "Texts back missed calls",
    ai: true,
    voicemail: false,
    human: "partial",
    service: "partial",
  },
  {
    feature: "Speaks EN / FR / ES",
    ai: true,
    voicemail: false,
    human: "partial",
    service: "partial",
  },
  {
    feature: "Never sick / never quits",
    ai: true,
    voicemail: true,
    human: false,
    service: "partial",
  },
  {
    feature: "Monthly cost",
    ai: "$297",
    voicemail: "$0",
    human: "$3,000+",
    service: "$400–$1,500",
  },
  {
    feature: "Setup time",
    ai: "7 days, done for you",
    voicemail: "—",
    human: "Weeks to hire & train",
    service: "Days to weeks",
  },
];
