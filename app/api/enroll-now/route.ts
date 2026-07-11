import { NextRequest, NextResponse } from "next/server";
import { sendFormEmail, isSpam } from "@/lib/email";

// Patient Enrollment form submissions (/enroll-now/).
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, name, email, phone, medicaidId, interest, preferredLanguage, smsOptIn, website } = body;

    if (isSpam(website)) {
      return NextResponse.json({ ok: true });
    }

    // English form sends firstName/lastName + medicaidId; Russian form
    // (WPForms "Enroll Today Form (RU)", id 2506) sends a single "name"
    // field plus an "interest" select (Patient enrollment / Become a
    // caregiver) instead of Medicaid ID.
    const fullName = name || `${firstName || ""} ${lastName || ""}`.trim();

    if (!fullName || !phone) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    await sendFormEmail({
      subject: `New Patient Enrollment — ${fullName}`,
      replyTo: email || undefined,
      html: `
        <h2>New Patient Enrollment</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        ${interest ? `<p><strong>Interested in:</strong> ${escapeHtml(interest)}</p>` : ""}
        ${medicaidId ? `<p><strong>Medicaid ID:</strong> ${escapeHtml(medicaidId)}</p>` : ""}
        <p><strong>Preferred Language:</strong> ${escapeHtml(preferredLanguage || "English")}</p>
        <p><strong>SMS Opt-in:</strong> ${escapeHtml(smsOptIn || "No")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Enroll now form error:", err);
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
