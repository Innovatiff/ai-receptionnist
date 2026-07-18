# Lottie assets (optional)

The signature hero call-sequence and the "How It Works" reveal are built with
**SVG + Framer Motion + GSAP** (`components/interactive/CallSequence.tsx`,
`components/sections/HowItWorks.tsx`) rather than Lottie JSON. That choice keeps
the animations precise, theme-aware, fully `prefers-reduced-motion`-safe, and
free of a runtime JSON fetch — while still matching the spec's "Lottie **or**
GSAP-driven" requirement.

If you'd rather drop in Lottie animations (phone/call/booking, calendar filling,
text-back sending), place the JSON files here, e.g.:

- `incoming-call.json`
- `calendar-fill.json`
- `text-back.json`

…then render them with `lottie-react`, lazy-loaded, gated behind the same
`usePrefersReducedMotion()` guard used elsewhere so a static frame shows when
motion is reduced.
