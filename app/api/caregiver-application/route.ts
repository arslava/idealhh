import { NextRequest, NextResponse } from "next/server";
import { sendFormEmail, isSpam } from "@/lib/email";

// Caregiver Job Application submissions (/careers/#qualifyenroll).
// Real site had this as a separate form (WPForms id 3064) from the patient
// enrollment form — kept separate here too, not merged.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, position, message, website } = body;

    if (isSpam(website)) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    await sendFormEmail({
      subject: `New Caregiver Job Application — ${name}`,
      replyTo: email,
      html: `
        <h2>New Caregiver Job Application</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Position interested in:</strong> ${escapeHtml(position || "Not specified")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "None provided").replace(/\n/g, "<br>")}</p>
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
