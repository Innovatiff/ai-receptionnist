"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, CalendarCheck, MessageSquareText, Check, Sparkles } from "lucide-react";
import { Soundwave } from "@/components/ui/Soundwave";
import { LivePill } from "@/components/ui/LivePill";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { site } from "@/content/site";

/**
 * The signature hero animation — a live call, white-labeled to an example
 * client (site.demoClient): incoming call → the AI answers (soundwave +
 * transcript) → the calendar slot fills → confirmation text. Loops.
 * Under prefers-reduced-motion it renders the finished booked+texted state.
 */

const CLIENT = site.demoClient;

type Stage = "ringing" | "answering" | "booked" | "texted";
const ORDER: Stage[] = ["ringing", "answering", "booked", "texted"];
const DURATIONS: Record<Stage, number> = {
  ringing: 2200,
  answering: 4200,
  booked: 2200,
  texted: 3400,
};

const transcript = [
  { who: "ai", text: `Thanks for calling ${CLIENT.business}, this is ${CLIENT.assistant}.` },
  { who: "caller", text: "Do you have anything open this week?" },
  { who: "ai", text: "I've got Tuesday at 2:00 PM — shall I book it?" },
  { who: "caller", text: "Perfect, yes please." },
];

export function CallSequence() {
  const reduced = usePrefersReducedMotion();
  const [i, setI] = useState(0);
  const stage = ORDER[i];

  useEffect(() => {
    if (reduced) return;
    const t = window.setTimeout(() => setI((v) => (v + 1) % ORDER.length), DURATIONS[stage]);
    return () => window.clearTimeout(t);
  }, [stage, reduced]);

  const s: Stage = reduced ? "texted" : stage;

  return (
    <div className="relative mx-auto w-full max-w-[26rem]">
      {/* halo */}
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-violet-glow blur-2xl"
        aria-hidden
      />

      {/* Floating chips — depth + life */}
      <motion.div
        className="absolute -left-4 top-16 z-20 hidden sm:block"
        animate={reduced ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="glass-strong flex items-center gap-2 rounded-2xl px-3.5 py-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-mint/15 text-mint">
            <Check className="h-3.5 w-3.5" />
          </span>
          <div className="leading-tight">
            <p className="text-[0.7rem] font-semibold text-white">Lead captured</p>
            <p className="text-[0.62rem] text-haze">2 sec ago</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-6 bottom-28 z-20 hidden sm:block"
        animate={reduced ? undefined : { y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="glass-strong flex items-center gap-2 rounded-2xl px-3.5 py-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ember/15 text-ember">
            <CalendarCheck className="h-3.5 w-3.5" />
          </span>
          <div className="leading-tight">
            <p className="text-[0.7rem] font-semibold text-white">+1 booking</p>
            <p className="text-[0.62rem] text-haze">Tue 2:00 PM</p>
          </div>
        </div>
      </motion.div>

      {/* The device */}
      <div className="glass-strong relative overflow-hidden rounded-[2rem] shadow-violet">
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-violet-700 font-display text-sm font-bold text-white">
              {CLIENT.assistant.charAt(0)}
              <Sparkles className="absolute -right-1 -top-1 h-3.5 w-3.5 text-ember" aria-hidden />
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm font-semibold text-white">{CLIENT.assistant}</p>
              <p className="text-xs text-haze">{CLIENT.business}</p>
            </div>
          </div>
          <LivePill label={s === "ringing" ? "Incoming" : s === "texted" ? "Booked" : "Live"} />
        </div>

        <div className="relative min-h-[20rem] px-5 py-5">
          <AnimatePresence initial={false}>
            {s === "ringing" && (
              <motion.div
                key="r"
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-5 flex flex-col items-center justify-center gap-5 text-center"
              >
                <span className="relative flex h-24 w-24 items-center justify-center">
                  {!reduced && (
                    <>
                      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-violet-500/30" />
                      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-violet-500/20 [animation-delay:1.2s]" />
                    </>
                  )}
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/30">
                    <Phone className="h-8 w-8" aria-hidden />
                  </span>
                </span>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-haze">Incoming call</p>
                  <p className="mt-1.5 font-mono text-xl text-white">{site.contact.phone}</p>
                  <p className="mt-1 text-sm text-haze">Saturday · 7:04 PM</p>
                </div>
                <p className="text-sm font-medium text-mint">Answering in 2 rings…</p>
              </motion.div>
            )}

            {s === "answering" && (
              <motion.div
                key="a"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-5 flex flex-col"
              >
                <div className="flex items-center gap-3 pb-4">
                  <Soundwave bars={7} height={24} />
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-violet-300">
                    {CLIENT.assistant} is answering
                  </span>
                </div>
                <div className="flex-1 space-y-2.5">
                  {transcript.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={reduced ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduced ? 0 : 0.25 + idx * 0.5, duration: 0.35 }}
                      className={
                        line.who === "ai"
                          ? "max-w-[88%] rounded-2xl rounded-tl-md bg-violet-500/20 px-3.5 py-2.5 text-sm text-white"
                          : "ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-white/[0.06] px-3.5 py-2.5 text-sm text-haze"
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
                key="b"
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-5 flex flex-col gap-4"
              >
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-[0.68rem] uppercase tracking-[0.16em] text-haze">
                      {CLIENT.short} · calendar
                    </p>
                    <CalendarCheck className="h-4 w-4 text-mint" aria-hidden />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    {["1:00", "1:30", "2:00", "2:30", "3:00", "3:30"].map((t) => {
                      const hit = t === "2:00";
                      return (
                        <motion.div
                          key={t}
                          initial={reduced ? false : { scale: 0.92, opacity: 0.5 }}
                          animate={{ scale: 1, opacity: hit ? 1 : 0.45 }}
                          transition={{ duration: 0.4, delay: hit ? 0.2 : 0 }}
                          className={
                            hit
                              ? "rounded-xl bg-gradient-to-br from-ember-glow to-ember-deep py-2.5 font-semibold text-void shadow-ember"
                              : "rounded-xl border border-white/[0.07] py-2.5 text-haze"
                          }
                        >
                          {t}
                          {hit && <span className="mt-0.5 block text-[0.58rem]">Booked</span>}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-mint">
                  <Check className="h-4 w-4" aria-hidden />
                  Appointment booked · Tue 2:00 PM
                </div>

                <AnimatePresence>
                  {(reduced || s === "texted") && (
                    <motion.div
                      initial={reduced ? false : { opacity: 0, x: 28 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-2.5 rounded-2xl rounded-tr-md border border-mint/20 bg-mint/[0.07] px-4 py-3"
                    >
                      <MessageSquareText className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden />
                      <p className="text-[0.8rem] leading-relaxed text-cloud">
                        <span className="font-semibold text-white">Text sent:</span> “You&apos;re
                        booked with {CLIENT.business} for Tue 2:00 PM. Reply C to confirm.”
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* progress + attribution */}
        <div className="flex items-center justify-between gap-3 border-t border-white/[0.07] px-5 py-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            {ORDER.map((st, idx) => (
              <span
                key={st}
                className={`h-1 rounded-full transition-all duration-500 ${
                  (reduced ? true : idx <= i) ? "w-6 bg-violet-400" : "w-1.5 bg-white/15"
                }`}
              />
            ))}
          </div>
          <p className="text-[0.65rem] font-medium text-haze">Built by {site.name}</p>
        </div>
      </div>
    </div>
  );
}
