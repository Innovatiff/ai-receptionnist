/**
 * Global site config: brand, nav, contact, CTA vocabulary, scarcity.
 * Edit copy/proof here — components read from this file, they don't hardcode.
 */

export const site = {
  name: "Booklead",
  brand: { lead: "Book", tail: "lead" },
  tagline: "Custom AI receptionists for local business",
  offerName: "The 24/7 Booking Machine",
  domain: "https://booklead.ai", // PLACEHOLDER — replace with your real domain.
  bigIdea: "Your phone is a leaky bucket. We plug it.",

  /**
   * The white-label positioning: Booklead is the company. What each client gets
   * is a *custom* AI receptionist + booking system — trained on their business,
   * answering as their business, and given its own name. The hero call card and
   * the "Your AI, your name" section use this example client to show the tailoring.
   */
  demoClient: {
    // PLACEHOLDER — an example of a tailored, client-branded deployment.
    business: "Brightwater Dental",
    short: "Brightwater",
    assistant: "Ava", // the AI's own name, tailored per client
    industry: "Dental",
  },

  // Consistent CTA vocabulary site-wide (Section 9).
  cta: {
    primary: "Book My Free Demo",
    primarySupport: "Hear it answer a live call before you decide.",
    secondary: "Hear a 30-sec demo",
    href: "/demo",
  },

  contact: {
    // PLACEHOLDER — replace with your real contact details.
    email: "hello@booklead.ai",
    phone: "(555) 018-2277",
    phoneHref: "tel:+15550182277",
    demoLine: "(555) 018-2200",
    demoLineHref: "tel:+15550182200",
    languages: "English · Français · Español",
  },

  founder: {
    // PLACEHOLDER — replace with the real founder name.
    name: "Alex Rivera",
    role: "Founder, Booklead",
  },
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Results", href: "/results" },
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "/industries" },
  { label: "Calculator", href: "/calculator" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Product",
    items: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Results", href: "/results" },
      { label: "Missed-Money Calculator", href: "/calculator" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Industries", href: "/industries" },
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Book a Demo", href: "/demo" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

/**
 * Honest scarcity — editable numbers, NOT a fake resetting timer (Section 2.3).
 */
export const scarcity = {
  spotsRemaining: 3, // PLACEHOLDER — set the real number of open onboarding spots.
  monthLabel: "this month",
  foundingClients: 10, // PLACEHOLDER — founding-client count; setup rises after.
  foundingPriceAfter: 1497,
  note: "We personally build and onboard every account, so we only open a handful of new spots each month. When they're full, the next opening is next month.",
} as const;

export const trustStrip = [
  "Answers in 2 rings",
  "Books 24/7",
  "Speaks EN / FR / ES",
  "Live in 7 days",
];
