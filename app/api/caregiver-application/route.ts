import { NextRequest, NextResponse } from "next/server";
import { sendFormEmail, isSpam } from "@/lib/email";

// Caregiver Job Application submissions (/ru/careers/#qualifyenroll).
// Matches the real WPForms field set (id 3064 "Enroll Today (Careers)"):
// name, contact info, address, certification type, preferred language,
// availability + days, an HHA-staffing confirmation checkbox, other spoken
// languages, notes, and SMS opt-in.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName, lastName, email, phone, address, city, state, zip,
      certType, preferredLanguage, availability, availableDays,
      confirmHha, otherLanguages, notes, smsOptIn, website,
    } = body;

    if (isSpam(website)) {
      return NextResponse.json({ ok: true });
    }

    if (!firstName || !lastName || !address) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    await sendFormEmail({
      subject: `New Caregiver Job Application — ${firstName} ${lastName}`,
      replyTo: email || undefined,
      html: `
        <h2>New Caregiver Job Application</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Address:</strong> ${escapeHtml(address)}, ${escapeHtml(city || "")} ${escapeHtml(state || "")} ${escapeHtml(zip || "")}</p>
        <p><strong>Certification Type:</strong> ${escapeHtml(certType || "Not specified")}</p>
        <p><strong>Preferred Language:</strong> ${escapeHtml(preferredLanguage || "Not specified")}</p>
        <p><strong>Availability:</strong> ${escapeHtml(availability || "Not specified")}</p>
        ${availableDays ? `<p><strong>Available Days:</strong> ${escapeHtml(availableDays)}</p>` : ""}
        <p><strong>Confirmed HHA staffing interest:</strong> ${escapeHtml(confirmHha || "No")}</p>
        <p><strong>Other Spoken Languages:</strong> ${escapeHtml(otherLanguages || "Not specified")}</p>
        <p><strong>Notes:</strong></p>
        <p>${escapeHtml(notes || "None provided").replace(/\n/g, "<br>")}</p>
        <p><strong>SMS Opt-in:</strong> ${escapeHtml(smsOptIn || "No")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Caregiver application form error:", err);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
