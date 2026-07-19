# Novex AI — AI Receptionist Sales Site

A high-conversion marketing site for **Novex AI**, a done-for-you agency that
builds each client a *custom, white-labeled* AI receptionist + booking system
("The 24/7 Booking Machine") — trained on their business, answering as their
business, with its own name. Built to a Hormozi grand-slam-offer + PAS structure
with a signature "Live Line" design direction.

> **Positioning:** Novex AI is the company. What each client receives is a
> tailored AI (its own name, e.g. "Ava · Brightwater Dental") and booking
> software set up around their workflow. The hero call card and the
> "Your AI, your name" section (`components/sections/TailoredSection.tsx`)
> demonstrate this white-label model. The example client lives in
> `content/site.ts` → `site.demoClient`.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion ·
GSAP + ScrollTrigger · Lenis · lucide-react · Vercel Analytics.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start   # production
```

Copy `.env.example` → `.env.local` and fill in what you need (everything is
optional — the site runs without any env vars).

---

## Design direction — "The Live Line"

The product's world is an always-on, intelligent phone line. The palette and
motion lean into calm competence + a hint of premium tech, warm enough for a
plumber or dentist.

| Token    | Hex        | Role |
|----------|------------|------|
| `ink`    | `#0B1120`  | deep navy base (dark sections) |
| `signal` | `#5B6CFF`  | electric indigo — primary |
| `live`   | `#38E1FF`  | cyan pulse — the soundwave / "connected" accent (signature) |
| `pulse`  | `#FF7A59`  | warm coral-amber — CTAs & "money" moments |
| `mist`   | `#F7F8FB`  | warm off-white content sections |
| `slate`  | `#5A6478`  | muted text |

**Type:** Space Grotesk (display) + Geist Sans (body) + Geist Mono (transcript /
dashboard bits), loaded via `next/font`.

**Signature element:** the live-call soundwave. It stars in the hero
(`CallSequence`: incoming call → AI answering → slot booked → confirmation text)
and recurs as a divider / audio-player visualizer / loading motif.

All animations honor `prefers-reduced-motion` with a static end-state fallback
(CSS guard in `globals.css`, `MotionConfig reducedMotion="user"`, and per-component
`usePrefersReducedMotion()` checks).

---

## Editing copy & proof (no code needed)

All editable content lives in `/content/*.ts`:

- `site.ts` — brand name, nav, contact, CTA vocabulary, **scarcity** (`spotsRemaining`).
- `offer.ts` — the value stack, price reveal, and both guarantees.
- `faqs.ts` — FAQ / objection handling.
- `industries.ts` — verticals + per-industry calculator defaults.
- `testimonials.ts` — testimonials, result stats, case studies (all placeholders).
- `comparison.ts` — the comparison-table rows.

### Placeholders to replace before launch

Search the repo for `PLACEHOLDER`. Key ones:

- Brand name / domain / contact / founder → `content/site.ts`.
- Testimonials, result stats, trust logos, case studies → `content/testimonials.ts`
  (all rendered with a visible "Placeholder" tag until real).
- Founder story → `app/about/page.tsx`.
- Legal copy → `app/privacy/page.tsx`, `app/terms/page.tsx` (templates — have a
  lawyer review).
- **Sample call audio** → drop `public/audio/sample-call.mp3` (see that folder's README).

Nothing is fabricated as fact: proof is clearly labeled placeholder, and the
"money lost" figures are framed as illustrative estimates.

---

## Configuration (env vars)

| Var | Purpose |
|-----|---------|
| `NEXT_PUBLIC_SCHEDULER_URL` | Cal.com / Calendly link to embed on `/demo`. If unset, `/demo` shows the built-in lead form. |
| `RESEND_API_KEY` | Send lead emails via Resend. If unset, leads log server-side (nothing is lost). |
| `LEAD_NOTIFY_EMAIL` | Where lead notifications go. |
| `LEAD_FROM_EMAIL` | Verified Resend "from" address. |

---

## Project structure

```
app/                 Pages (Home, how-it-works, results, pricing, industries,
                     calculator, about, faq, demo, privacy, terms), api/lead,
                     sitemap, robots, opengraph-image, icon.
components/
  layout/            Header, Footer, MobileCtaBar, Logo
  sections/          Home + interior page sections (Hero, ProblemLeak, …)
  ui/                Primitives (Button, GuaranteeBadge, StatCounter, Accordion,
                     PriceDrop, ScarcityNote, TestimonialCard, Soundwave, …)
  interactive/       CallSequence, MissedMoneyCalculator, AudioPlayer, LeadForm,
                     DemoScheduler, Slider
  providers/         SmoothScroll (Lenis ↔ ScrollTrigger + MotionConfig)
content/             Content-as-data (editable copy/proof)
lib/                 fonts, animations, seo, analytics, utils, hooks
public/              audio/ + lottie/ (asset placeholders)
```

---

## Analytics

Vercel Analytics is wired in `app/layout.tsx`. CTA clicks
(`cta_click`), demo views (`demo_view`), audio plays (`audio_play`),
calculator completion (`calculator_complete`), and lead submits (`lead_submit`)
fire through `lib/analytics.ts`.

---

## Deploy (Vercel)

1. Push to your Git host and import the repo into Vercel.
2. Add env vars (optional) in Project Settings.
3. Deploy. `sitemap.xml`, `robots.txt`, and the OG image generate automatically.

Set the real production domain in `content/site.ts` (`site.domain`) so canonical
URLs, the sitemap, and OG metadata are correct.
