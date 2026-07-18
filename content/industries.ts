/**
 * Verticals for /industries and the /industries/[slug] template.
 * `icon` is a lucide-react icon name. `calc` holds sensible, editable
 * defaults for the Missed-Money Calculator on each sub-page.
 */

export type Industry = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  headline: string;
  sub: string;
  // The specific way this vertical bleeds money on a missed call:
  pains: string[];
  // Things the AI handles for this vertical:
  handles: string[];
  // Calculator defaults (editable estimates, clearly framed as estimates).
  calc: {
    callsPerWeek: number;
    missedPct: number;
    customerValue: number;
    closeRate: number;
  };
};

export const industries: Industry[] = [
  {
    slug: "dentists",
    name: "Dental Practices",
    short: "Dentists",
    icon: "Stethoscope",
    headline: "Every unbooked new-patient call is a chair sitting empty.",
    sub: "New patients call around. If your front desk is at lunch or on another line, they book with the practice that picked up.",
    pains: [
      "New-patient calls during lunch and after hours go to voicemail",
      "Hygiene recall calls slip through the cracks",
      "Emergency callers can't wait — they call the next practice",
    ],
    handles: [
      "Books new-patient and hygiene appointments 24/7",
      "Answers insurance and hours questions instantly",
      "Texts back every missed caller before they book elsewhere",
    ],
    calc: { callsPerWeek: 90, missedPct: 30, customerValue: 600, closeRate: 45 },
  },
  {
    slug: "med-spas",
    name: "Med Spas & Aesthetics",
    short: "Med Spas",
    icon: "Sparkles",
    headline: "High-value bookings shouldn't hit voicemail.",
    sub: "A single treatment package is worth hundreds or thousands. Missing that call is missing real revenue.",
    pains: [
      "Consultation calls come in while you're with a client",
      "Evening and weekend inquiries go unanswered",
      "Price-shoppers move on if no one picks up",
    ],
    handles: [
      "Books consultations and treatments around the clock",
      "Answers common treatment and pricing questions",
      "Follows up with no-shows and new leads automatically",
    ],
    calc: { callsPerWeek: 70, missedPct: 35, customerValue: 850, closeRate: 40 },
  },
  {
    slug: "hvac",
    name: "HVAC, Plumbing & Electrical",
    short: "HVAC & Trades",
    icon: "Wrench",
    headline: "You're on the tools. The phone still has to get answered.",
    sub: "You can't stop mid-job to answer — but the 7pm no-heat call is a booked job you'll never see if it hits voicemail.",
    pains: [
      "Calls come in while you're under a sink or on a roof",
      "After-hours emergencies go to a competitor",
      "Voicemail tag loses the job before you call back",
    ],
    handles: [
      "Books service calls 24/7 while you work",
      "Captures the address, issue, and urgency every time",
      "Texts the caller back instantly so the lead stays warm",
    ],
    calc: { callsPerWeek: 120, missedPct: 40, customerValue: 450, closeRate: 55 },
  },
  {
    slug: "salons",
    name: "Salons & Barbershops",
    short: "Salons",
    icon: "Scissors",
    headline: "Hands in someone's hair? The phone still rings.",
    sub: "You can't put down the scissors to answer — and every unanswered call is a chair you didn't fill.",
    pains: [
      "Calls come in mid-cut and mid-color",
      "After-hours booking requests go unanswered",
      "No-shows leave gaps you can't backfill fast",
    ],
    handles: [
      "Books and reschedules appointments 24/7",
      "Answers pricing, hours, and stylist questions",
      "Fills cancellations with automated follow-up",
    ],
    calc: { callsPerWeek: 100, missedPct: 40, customerValue: 90, closeRate: 60 },
  },
  {
    slug: "auto",
    name: "Auto Shops",
    short: "Auto",
    icon: "Car",
    headline: "A full bay is great — until the phone goes unanswered.",
    sub: "When your team is heads-down on a job, the phone keeps ringing. Those are bookings for tomorrow's bays.",
    pains: [
      "Calls pile up while techs are on a job",
      "Quote requests go to voicemail and never call back",
      "After-hours callers book with the shop that answers",
    ],
    handles: [
      "Books service and repair appointments 24/7",
      "Captures vehicle, issue, and preferred time",
      "Texts back every missed caller automatically",
    ],
    calc: { callsPerWeek: 110, missedPct: 38, customerValue: 380, closeRate: 50 },
  },
  {
    slug: "legal",
    name: "Law Offices",
    short: "Legal",
    icon: "Scale",
    headline: "The first firm to answer usually gets the client.",
    sub: "Prospective clients call several firms. Miss the call and the case walks — often a case worth thousands.",
    pains: [
      "Intake calls come in after hours and on weekends",
      "You're in court or with a client when the phone rings",
      "A missed intake is a signed case lost to another firm",
    ],
    handles: [
      "Screens and books consultations 24/7",
      "Captures case type, urgency, and contact details",
      "Follows up with every intake lead automatically",
    ],
    calc: { callsPerWeek: 50, missedPct: 35, customerValue: 2500, closeRate: 25 },
  },
  {
    slug: "contractors",
    name: "Contractors & Home Services",
    short: "Contractors",
    icon: "Hammer",
    headline: "Estimates get booked by whoever picks up first.",
    sub: "Homeowners call two or three contractors. Miss the call and you're out of the running before you ever quote.",
    pains: [
      "Calls come in while you're on a job site",
      "Estimate requests hit voicemail and go cold",
      "Evening and weekend leads book with competitors",
    ],
    handles: [
      "Books estimates and site visits 24/7",
      "Captures project type, scope, and location",
      "Texts back and follows up so no lead goes cold",
    ],
    calc: { callsPerWeek: 80, missedPct: 42, customerValue: 1200, closeRate: 35 },
  },
  {
    slug: "clinics",
    name: "Clinics & Health Practices",
    short: "Clinics",
    icon: "HeartPulse",
    headline: "Patients on hold hang up. Then they book elsewhere.",
    sub: "When your front desk is slammed, calls overflow to voicemail — and patients don't wait for a callback.",
    pains: [
      "Peak-hour call volume overwhelms the front desk",
      "After-hours booking requests go unanswered",
      "Patients hang up on hold and call another clinic",
    ],
    handles: [
      "Books and reschedules appointments 24/7",
      "Answers hours, location, and prep questions",
      "Handles overflow so nothing hits voicemail",
    ],
    calc: { callsPerWeek: 150, missedPct: 35, customerValue: 250, closeRate: 45 },
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
