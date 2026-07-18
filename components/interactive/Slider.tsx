"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

/** Accessible, keyboard-friendly range slider with a live value readout. */
export function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  format,
  hint,
  tone = "dark",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
  hint?: string;
  tone?: "dark" | "light";
}) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;
  const display = format ? format(value) : String(value);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label
          htmlFor={id}
          className={cn(
            "text-sm font-medium",
            tone === "dark" ? "text-mist/80" : "text-ink-800"
          )}
        >
          {label}
        </label>
        <span
          className={cn(
            "font-mono text-sm font-semibold",
            tone === "dark" ? "text-live" : "text-signal"
          )}
        >
          {display}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={display}
        className={cn(
          "mt-3 h-2 w-full cursor-pointer appearance-none rounded-full outline-none",
          "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-signal [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-110",
          "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:ring-2 [&::-moz-range-thumb]:ring-signal"
        )}
        style={{
          background: `linear-gradient(to right, #5B6CFF 0%, #38E1FF ${pct}%, ${
            tone === "dark" ? "#1B2740" : "#E2E6EF"
          } ${pct}%)`,
        }}
      />
      {hint && (
        <p className={cn("mt-1.5 text-xs", tone === "dark" ? "text-mist/45" : "text-slate")}>
          {hint}
        </p>
      )}
    </div>
  );
}
