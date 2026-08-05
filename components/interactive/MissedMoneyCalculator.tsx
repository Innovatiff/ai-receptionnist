"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, ChevronDown } from "lucide-react";
import { Slider } from "./Slider";
import { Button } from "@/components/ui/Button";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { formatUSD, cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/content/site";

const WEEKS_PER_MONTH = 4.33;
// Conservative capture factor: answering every missed call doesn't recover
// 100% of the leak, so we estimate on the low side to stay credible.
const RECOVERY_FACTOR = 0.8;

export type CalcDefaults = {
  callsPerWeek?: number;
  missedPct?: number;
  customerValue?: number;
  closeRate?: number;
};

/**
 * The Missed-Money Calculator (Section 5). Inputs live in React state only
 * (no browser storage). Math is transparent and framed as an estimate.
 */
export function MissedMoneyCalculator({
  defaults,
  tone = "light",
}: {
  defaults?: CalcDefaults;
  tone?: "dark" | "light";
}) {
  const [callsPerWeek, setCallsPerWeek] = useState(defaults?.callsPerWeek ?? 80);
  const [missedPct, setMissedPct] = useState(defaults?.missedPct ?? 30);
  const [customerValue, setCustomerValue] = useState(defaults?.customerValue ?? 350);
  const [closeRate, setCloseRate] = useState(defaults?.closeRate ?? 45);
  const [showMath, setShowMath] = useState(false);
  const fired = useRef(false);

  const onAnyChange = () => {
    if (!fired.current) {
      fired.current = true;
      trackEvent("calculator_complete", { interacted: true });
    }
  };

  const { lostPerMonth, lostPerYear, recoverablePerMonth, missedCallsPerMonth } =
    useMemo(() => {
      const missedCalls = callsPerWeek * (missedPct / 100) * WEEKS_PER_MONTH;
      const lostBookings = missedCalls * (closeRate / 100);
      const perMonth = lostBookings * customerValue;
      return {
        missedCallsPerMonth: missedCalls,
        lostPerMonth: perMonth,
        lostPerYear: perMonth * 12,
        recoverablePerMonth: perMonth * RECOVERY_FACTOR,
      };
    }, [callsPerWeek, missedPct, customerValue, closeRate]);

  const darkTone = tone === "dark";

  return (
    <div
      className={cn(
        "grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8",
        darkTone ? "" : ""
      )}
    >
      {/* Inputs */}
      <div
        className={cn(
          "rounded-3xl border p-6 sm:p-8",
          darkTone
            ? "border-void-700/70 bg-void-800/50"
            : "border-void/10 bg-paper shadow-card"
        )}
      >
        <h3
          className={cn(
            "font-display text-lg font-semibold",
            darkTone ? "text-white" : "text-void-900"
          )}
        >
          Your numbers
        </h3>
        <p className={cn("mt-1 text-sm", darkTone ? "text-cloud/55" : "text-void")}>
          Drag the sliders. Estimates only — tune them to match your business.
        </p>

        <div className="mt-7 space-y-7">
          <Slider
            label="Inbound calls per week"
            value={callsPerWeek}
            min={10}
            max={400}
            step={5}
            tone={tone}
            onChange={(v) => {
              setCallsPerWeek(v);
              onAnyChange();
            }}
            format={(v) => `${v}`}
          />
          <Slider
            label="Calls typically missed"
            value={missedPct}
            min={5}
            max={70}
            step={1}
            tone={tone}
            onChange={(v) => {
              setMissedPct(v);
              onAnyChange();
            }}
            format={(v) => `${v}%`}
            hint="Pre-filled with an industry default — adjust to your reality."
          />
          <Slider
            label="Value of a booked customer"
            value={customerValue}
            min={50}
            max={5000}
            step={50}
            tone={tone}
            onChange={(v) => {
              setCustomerValue(v);
              onAnyChange();
            }}
            format={(v) => formatUSD(v)}
          />
          <Slider
            label="Close rate on answered calls"
            value={closeRate}
            min={10}
            max={90}
            step={1}
            tone={tone}
            onChange={(v) => {
              setCloseRate(v);
              onAnyChange();
            }}
            format={(v) => `${v}%`}
          />
        </div>
      </div>

      {/* Output */}
      <div className="flex flex-col gap-5">
        <motion.div
          key={Math.round(lostPerMonth)}
          initial={{ opacity: 0.5, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-ember/30 bg-gradient-to-br from-ember/[0.12] to-void-900 p-6 sm:p-8"
        >
          <p className="flex items-center gap-2 text-sm font-medium text-ember">
            <TrendingDown className="h-4 w-4" aria-hidden />
            Leaking through missed calls
          </p>
          <p className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            {formatUSD(lostPerMonth)}
            <span className="text-lg font-medium text-cloud/60">/month</span>
          </p>
          <p className="mt-2 text-cloud/70">
            ≈ <span className="font-semibold text-ember">{formatUSD(lostPerYear)}</span> a
            year — from roughly {Math.round(missedCallsPerMonth)} missed calls a month.
          </p>
        </motion.div>

        <motion.div
          key={"rec-" + Math.round(recoverablePerMonth)}
          initial={{ opacity: 0.5, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-mint/30 bg-gradient-to-br from-mint/[0.1] to-void-900 p-6 sm:p-8"
        >
          <p className="flex items-center gap-2 text-sm font-medium text-mint">
            <TrendingUp className="h-4 w-4" aria-hidden />
            Recoverable by answering them (conservative)
          </p>
          <p className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            {formatUSD(recoverablePerMonth)}
            <span className="text-lg font-medium text-cloud/60">/month</span>
          </p>
          <p className="mt-2 text-cloud/70">
            That&apos;s money your AI receptionist could put back on the calendar —
            from $297/month.
          </p>
        </motion.div>

        <div className="rounded-2xl border border-void-700/60 bg-void/40 p-5">
          <button
            type="button"
            onClick={() => setShowMath((v) => !v)}
            aria-expanded={showMath}
            className="flex w-full items-center justify-between text-sm font-medium text-cloud/70 hover:text-white"
          >
            Show the math
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", showMath && "rotate-180")}
              aria-hidden
            />
          </button>
          {showMath && (
            <div className="mt-3 space-y-1.5 font-mono text-xs leading-relaxed text-cloud/55">
              <p>missed calls/mo = {callsPerWeek} × {missedPct}% × {WEEKS_PER_MONTH} = {Math.round(missedCallsPerMonth)}</p>
              <p>lost bookings/mo = {Math.round(missedCallsPerMonth)} × {closeRate}% = {Math.round(missedCallsPerMonth * (closeRate / 100))}</p>
              <p>leaking/mo = lost bookings × {formatUSD(customerValue)} = {formatUSD(lostPerMonth)}</p>
              <p>recoverable/mo = leaking × {RECOVERY_FACTOR} = {formatUSD(recoverablePerMonth)}</p>
              <p className="pt-1 text-cloud/40">All figures are estimates, not guarantees.</p>
            </div>
          )}
        </div>

        <div className="flex flex-col items-start gap-4 rounded-3xl border border-mint/20 bg-void-900/60 p-6">
          <Button
            href={site.cta.href}
            size="lg"
            withArrow
            trackLabel="calculator"
            onClick={() =>
              trackEvent("calculator_complete", {
                lost_per_month: Math.round(lostPerMonth),
              })
            }
          >
            Recover this money — {site.cta.primary}
          </Button>
          <GuaranteeBadge variant="mini" />
        </div>
      </div>
    </div>
  );
}
