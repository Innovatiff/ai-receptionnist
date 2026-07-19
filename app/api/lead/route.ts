import { NextResponse } from "next/server";
import { site } from "@/content/site";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  phone?: string;
  business?: string;
  industry?: string;
  email?: string;
  company_website?: string; // honeypot
  lostPerMonth?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this. Silently accept to not tip off bots.
  if (body.company_website && body.company_website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim();

  if (!name) {
    return NextResponse.json(
      { error: "Add your name so I know who I'm talking to." },
      { status: 422 }
    );
  }
  if (phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json(
      { error: "Add a phone number I can reach you on." },
      { status: 422 }
    );
  }
  if (email && !isValidEmail(email)) {
    return NextResponse.json(
      { error: "That email doesn't look right — double-check it or leave it blank." },
      { status: 422 }
    );
  }

  const lead = {
    name,
    phone,
    email: email || null,
    business: (body.business || "").trim() || null,
    industry: (body.industry || "").trim() || null,
    receivedAt: new Date().toISOString(),
  };

  // Deliver via Resend if configured; otherwise log for the owner to wire up.
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL || site.contact.email;
  const from = process.env.LEAD_FROM_EMAIL || "leads@novexai.com";

  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${site.name} Leads <${from}>`,
          to: [to],
          subject: `New demo request — ${lead.name}${lead.business ? ` (${lead.business})` : ""}`,
          text: [
            `New "Book My Free Demo" request:`,
            ``,
            `Name:     ${lead.name}`,
            `Phone:    ${lead.phone}`,
            `Email:    ${lead.email ?? "—"}`,
            `Business: ${lead.business ?? "—"}`,
            `Industry: ${lead.industry ?? "—"}`,
            `Time:     ${lead.receivedAt}`,
          ].join("\n"),
        }),
      });
      if (!res.ok) {
        console.error("Resend error", await res.text());
        // Don't fail the user — the lead is still captured in logs.
      }
    } catch (err) {
      console.error("Lead email failed", err);
    }
  } else {
    // No email provider wired yet — log so nothing is lost during setup.
    console.log("[LEAD]", JSON.stringify(lead));
  }

  return NextResponse.json({ ok: true });
}
