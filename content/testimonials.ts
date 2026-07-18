/**
 * PLACEHOLDER proof. Every item here is a clearly-labeled placeholder —
 * replace with real, permissioned customer quotes and numbers before launch.
 * Nothing here should be presented to visitors as a verified fact until real.
 */

export type Testimonial = {
  quote: string;
  name: string;
  business: string;
  location: string;
  // initials render as an avatar fallback (no fake stock photos)
  initials: string;
  placeholder: true;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We used to lose every after-hours call. Now I wake up to appointments already on the calendar. It paid for itself in the first week.",
    name: "PLACEHOLDER Name",
    business: "PLACEHOLDER Dental",
    location: "City, ST",
    initials: "PN",
    placeholder: true,
  },
  {
    quote:
      "I'm on the tools all day and could never get to the phone. Now nothing goes to voicemail. The text-back alone booked us three jobs the first weekend.",
    name: "PLACEHOLDER Name",
    business: "PLACEHOLDER Plumbing",
    location: "City, ST",
    initials: "PN",
    placeholder: true,
  },
  {
    quote:
      "It sounds like a real person. My clients had no idea. It books consultations while I'm with someone in the chair.",
    name: "PLACEHOLDER Name",
    business: "PLACEHOLDER Med Spa",
    location: "City, ST",
    initials: "PN",
    placeholder: true,
  },
];

export type ResultStat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  placeholder: true;
};

// PLACEHOLDER stats — replace with real, aggregate numbers you can stand behind.
export const resultStats: ResultStat[] = [
  { value: 12480, prefix: "", suffix: "+", label: "Calls answered", placeholder: true },
  { value: 3120, prefix: "", suffix: "+", label: "Appointments booked", placeholder: true },
  { value: 2, prefix: "", suffix: " rings", label: "Average pickup", placeholder: true },
  { value: 24, prefix: "", suffix: "/7", label: "Always answering", placeholder: true },
];

// PLACEHOLDER trust logos — text chips, not fabricated brand marks.
export const trustLogos: string[] = [
  "PLACEHOLDER Dental",
  "PLACEHOLDER HVAC",
  "PLACEHOLDER Med Spa",
  "PLACEHOLDER Auto",
  "PLACEHOLDER Salon",
  "PLACEHOLDER Law",
];

/** Longer case studies for /results (placeholder-driven). */
export type CaseStudy = {
  business: string;
  industry: string;
  challenge: string;
  result: string;
  stat: string;
  placeholder: true;
};

export const caseStudies: CaseStudy[] = [
  {
    business: "PLACEHOLDER Family Dental",
    industry: "Dental",
    challenge:
      "Front desk couldn't keep up at lunch and after 5pm. New-patient calls went to voicemail and rarely called back.",
    result:
      "The AI receptionist now answers every overflow and after-hours call, booking new patients straight into the calendar.",
    stat: "PLACEHOLDER — e.g. “38 new-patient appointments booked after hours in 60 days.”",
    placeholder: true,
  },
  {
    business: "PLACEHOLDER Rapid HVAC",
    industry: "HVAC",
    challenge:
      "Techs were on jobs all day and couldn't answer. Emergency callers went straight to competitors.",
    result:
      "Every call now gets answered and captured, with instant text-back keeping leads warm until the crew is free.",
    stat: "PLACEHOLDER — e.g. “Recovered an estimated $14k in missed jobs the first month.”",
    placeholder: true,
  },
  {
    business: "PLACEHOLDER Glow Med Spa",
    industry: "Med Spa",
    challenge:
      "High-value consultation calls came in while staff were with clients and got lost.",
    result:
      "Consultations now book 24/7, and automated follow-up reduced no-shows.",
    stat: "PLACEHOLDER — e.g. “27 consultations booked outside business hours.”",
    placeholder: true,
  },
];
