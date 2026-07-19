/**
 * Comparison table (Section 4.9 revised). Adds the "DIY AI Software" column to
 * kill the "why not just rent a $49 tool" objection. Honest — our column wins
 * on what matters, and we don't fake the rows where others are fine.
 */

export type Cell =
  | { t: "yes"; note?: string }
  | { t: "no"; note?: string }
  | { t: "warn"; note?: string }
  | { t: "dash" }
  | { t: "text"; v: string };

const yes = (note?: string): Cell => ({ t: "yes", note });
const no = (note?: string): Cell => ({ t: "no", note });
const warn = (note?: string): Cell => ({ t: "warn", note });
const dash = (): Cell => ({ t: "dash" });
const txt = (v: string): Cell => ({ t: "text", v });

export const comparisonColumns = [
  { key: "us", label: "Us", highlight: true },
  { key: "diy", label: "DIY AI Software", highlight: false },
  { key: "voicemail", label: "Voicemail", highlight: false },
  { key: "service", label: "Answering Service", highlight: false },
  { key: "human", label: "Human Receptionist", highlight: false },
] as const;

export type ComparisonRow = {
  feature: string;
  emphasize?: boolean;
  us: Cell;
  diy: Cell;
  voicemail: Cell;
  service: Cell;
  human: Cell;
};

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Answers 24/7",
    us: yes(),
    diy: yes(),
    voicemail: dash(),
    service: yes(),
    human: no(),
  },
  {
    feature: "Books the appointment",
    emphasize: true,
    us: yes(),
    diy: warn("if you build it"),
    voicemail: no(),
    service: no("takes a message"),
    human: yes(),
  },
  {
    feature: "Texts back every missed lead",
    us: yes(),
    diy: warn("if you build it"),
    voicemail: no(),
    service: no(),
    human: no(),
  },
  {
    feature: "Built & trained for your business",
    emphasize: true,
    us: yes("done for you"),
    diy: no("you build it"),
    voicemail: dash(),
    service: no("generic script"),
    human: yes(),
  },
  {
    feature: "Who sets it up",
    emphasize: true,
    us: txt("We do. 7 days."),
    diy: txt("You do. Weeks."),
    voicemail: dash(),
    service: txt("Them"),
    human: txt("You hire & train"),
  },
  {
    feature: "Tuned for you every month",
    us: yes(),
    diy: no(),
    voicemail: dash(),
    service: no(),
    human: warn(),
  },
  {
    feature: "Speaks EN / FR / ES",
    us: yes(),
    diy: warn("varies"),
    voicemail: no(),
    service: warn("extra"),
    human: warn("rare"),
  },
  {
    feature: "Never sick, never quits",
    us: yes(),
    diy: yes(),
    voicemail: yes(),
    service: yes(),
    human: no(),
  },
  {
    feature: "Monthly cost",
    emphasize: true,
    us: txt("$297–$997"),
    diy: txt("$49–$199"),
    voicemail: txt("$0"),
    service: txt("$400–$700"),
    human: txt("$2,800–$4,500"),
  },
];

export const comparisonPunchline = {
  lead: "Yes, you can rent AI software for $49 a month.",
  body: "Then you build it, train it, connect your calendar, write the scripts, test it, and fix it when it breaks. We hand you a finished receptionist in 7 days and tune it every month. That's the difference between a tool and a front desk.",
};
