"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, PhoneCall, CalendarCheck, MessageSquareText, Check } from "lucide-react";
import { Soundwave } from "@/components/ui/Soundwave";
import { LivePill } from "@/components/ui/LivePill";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { site } from "@/content/site";

/**
 * The signature "Live Line" hero animation.
 * Plays: incoming call → AI answers (soundwave + transcript) → calendar slot
 * fills → confirmation text slides in → brief hold → loop.
 * Under prefers-reduced-motion it renders the final booked+texted state
 * statically (no motion, no timers).
 */

type Stage = "ringing" | "answering" | "booking" | "booked" | "texted";
const ORDER: Stage[] = ["ringing", "answering", "booking", "booked", "texted"];
const DURATIONS: Record<Stage, number> = {
  ringing: 2000,
  answering: 3400,
  booking: 1800,
  booked: 1600,
  texted: 3200,
};

const transcript = [
  { who: "ai", text: `Thanks for calling ${site.name}. How can I help you today?` },
  { who: "caller", text: "Hi — do you have anything open this week?" },
  { who: "ai", text: "Absolutely. I've got Tuesday at 2:00 PM. Shall I book it?" },
  { who: "caller", text: "Perfect, yes please." },
];

export function CallSequence() {
  const reduced = usePrefersReducedMotion();
  const [stageIndex, setStageIndex] = useState(0);
  const stage = ORDER[stageIndex];

  useEffect(() => {
    if (reduced) return;
    const t = window.setTimeout(
      () => setStageIndex((i) => (i + 1) % ORDER.length),
      DURATIONS[stage]
    );
    return () => window.clearTimeout(t);
  }, [stage, reduced]);

  // With reduced motion, present the finished state.
  const s: Stage = reduced ? "texted" : stage;
  const stepReached = (target: Stage) =>
    reduced || ORDER.indexOf(s) >= ORDER.indexOf(target);

  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Ambient glow behind the phone */}
      <div
        className="pointer-events-none absolute -inset-8 -z-10 glow-signal blur-2xl"
        aria-hidden
      />

      <div className="card-dark overflow-hidden rounded-3xl shadow-glow">
        {/* Phone header */}
        <div className="flex items-center justify-between border-b border-ink-700/70 bg-ink-850/80 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-signal to-signal-700">
              <PhoneCall className="h-4 w-4 text-white" aria-hidden />
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm font-semibold text-white">{site.name}</p>
              <p className="text-xs text-mist/50">AI Receptionist</p>
            </div>
          </div>
          <LivePill
            label={s === "ringing" ? "Incoming" : s === "texted" ? "Done" : "Live"}
          />
        </div>

        {/* Body — swaps by stage */}
        <div className="relative min-h-[19rem] px-5 py-5">
          <AnimatePresence mode="wait">
            {s === "ringing" && (
              <motion.div
                key="ringing"
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex h-[17rem] flex-col items-center justify-center gap-4 text-center"
              >
                <motion.span
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-signal/15 text-signal-300"
                  animate={reduced ? undefined : { scale: [1, 1.08, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Phone className="h-8 w-8" aria-hidden />
                </motion.span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-mist/50">
                    Incoming call
                  </p>
                  <p className="mt-1 font-mono text-lg text-white">
                    {site.contact.phone}
                  </p>
                  <p className="mt-0.5 text-sm text-mist/50">Mobile · Saturday 7:04 PM</p>
                </div>
                <p className="text-sm text-live">Answering in 2 rings…</p>
              </motion.div>
            )}

            {(s === "answering" || s === "booking") && (
              <motion.div
                key="answering"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex h-[17rem] flex-col"
              >
                <div className="flex items-center gap-3 pb-3">
                  <Soundwave bars={7} height={26} className="text-live" />
                  <span className="font-mono text-xs uppercase tracking-widest text-live">
                    Answering
                  </span>
                </div>
                <div className="flex-1 space-y-2.5 overflow-hidden">
                  {transcript.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={reduced ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduced ? 0 : 0.4 + i * 0.6, duration: 0.35 }}
                      className={
                        line.who === "ai"
                          ? "max-w-[85%] rounded-2xl rounded-tl-sm bg-signal/15 px-3.5 py-2 text-sm text-mist"
                          : "ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-ink-700/70 px-3.5 py-2 text-sm text-mist/90"
                      }
                    >
                      {line.text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {(s === "booked" || s === "texted") && (
              <motion.div
                key="booked"
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex h-[17rem] flex-col gap-4"
              >
                {/* Calendar slot filling */}
                <div className="rounded-2xl border border-ink-700/70 bg-ink-850/60 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-widest text-mist/50">
                      Your calendar
                    </p>
                    <CalendarCheck className="h-4 w-4 text-live" aria-hidden />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    {["1:00", "1:30", "2:00", "2:30", "3:00", "3:30"].map((t) => {
                      const isBooked = t === "2:00";
                      return (
                        <motion.div
                          key={t}
                          initial={reduced ? false : { scale: 0.9, opacity: 0.6 }}
                          animate={
                            isBooked
                              ? { scale: 1, opacity: 1 }
                              : { scale: 1, opacity: 0.5 }
                          }
                          transition={{ duration: 0.4 }}
                          className={
                            isBooked
                              ? "rounded-lg bg-gradient-to-br from-pulse to-pulse-deep py-2 font-semibold text-ink-950"
                              : "rounded-lg border border-ink-700/70 py-2 text-mist/50"
                          }
                        >
                          {t}
                          {isBooked && (
                            <span className="mt-0.5 block text-[0.6rem] font-medium">
                              Booked
                            </span>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-live">
                  <Check className="h-4 w-4" aria-hidden />
                  Appointment booked · Tue 2:00 PM
                </div>

                {/* Confirmation text sliding in */}
                <AnimatePresence>
                  {stepReached("texted") && (
                    <motion.div
                      initial={reduced ? false : { opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-2.5 rounded-2xl rounded-tr-sm border border-live/25 bg-live/[0.08] px-4 py-3"
                    >
                      <MessageSquareText className="mt-0.5 h-4 w-4 shrink-0 text-live" aria-hidden />
                      <p className="text-sm text-mist">
                        <span className="font-semibold text-white">Text sent:</span>{" "}
                        “You're booked with {site.name} for Tue 2:00 PM. Reply C to
                        confirm. See you then!”
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Stage progress dots */}
      <div className="mt-4 flex items-center justify-center gap-2" aria-hidden>
        {ORDER.map((st, i) => (
          <span
            key={st}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              (reduced ? true : i <= stageIndex)
                ? "w-6 bg-live"
                : "w-1.5 bg-ink-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
