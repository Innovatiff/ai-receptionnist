"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import { industries } from "@/content/industries";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Lead form → /api/lead. Includes a honeypot ("company_website") for spam,
 * inline validation, and plain, directive brand-voice error/empty states.
 */
export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (!name) return setError("Add your name so I know who I'm talking to.");
    if (phone.replace(/\D/g, "").length < 7)
      return setError("Add a phone number I can reach you on.");

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong on our end.");
      }
      setStatus("success");
      trackEvent("lead_submit", { source: "demo_form" });
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "That didn't go through. Try again, or call me directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-live/30 bg-live/[0.06] p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-live" aria-hidden />
        <h3 className="mt-4 font-display text-2xl font-bold text-white">Demo booked.</h3>
        <p className="mt-2 text-mist/70">
          I&apos;ll reach out shortly to set up your live call — you&apos;ll hear your AI
          receptionist answer before you decide anything. Talk soon.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-xl border border-ink-700 bg-ink-950/50 px-4 py-3 text-white placeholder:text-mist/35 focus:border-signal focus-visible:ring-2 focus-visible:ring-signal/60 outline-none transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from humans, catches bots. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-mist/80">
            Your name
          </label>
          <input id="name" name="name" autoComplete="name" className={inputBase} placeholder="Jordan Smith" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-mist/80">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputBase} placeholder="(555) 018-2277" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-mist/80">
            Business name
          </label>
          <input id="business" name="business" className={inputBase} placeholder="Smith Plumbing" />
        </div>
        <div>
          <label htmlFor="industry" className="mb-1.5 block text-sm font-medium text-mist/80">
            Industry
          </label>
          <select id="industry" name="industry" className={cn(inputBase, "appearance-none")} defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            {industries.map((i) => (
              <option key={i.slug} value={i.slug} className="bg-ink-900">
                {i.name}
              </option>
            ))}
            <option value="other" className="bg-ink-900">
              Something else
            </option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-mist/80">
          Email <span className="text-mist/40">(optional)</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={inputBase} placeholder="you@business.com" />
      </div>

      {error && (
        <p className="flex items-center gap-2 rounded-xl border border-pulse/30 bg-pulse/[0.08] px-4 py-3 text-sm text-pulse-soft">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        withArrow={status !== "submitting"}
        disabled={status === "submitting"}
        className="w-full"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> Booking…
          </>
        ) : (
          "Book My Free Demo"
        )}
      </Button>
      <p className="text-center text-xs text-mist/45">
        No spam, no pressure. I&apos;ll set up a live call so you can hear it before you decide.
      </p>
    </form>
  );
}
