import { NextRequest, NextResponse } from "next/server";
import { sendFormEmail, isSpam } from "@/lib/email";

// Patient Enrollment form submissions (/enroll-now/).
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, medicaidId, preferredLanguage, smsOptIn, website } = body;

    if (isSpam(website)) {
      return NextResponse.json({ ok: true });
    }

    if (!firstName || !lastName || !phone) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    await sendFormEmail({
      subject: `New Patient Enrollment — ${firstName} ${lastName}`,
      replyTo: email || undefined,
      html: `
        <h2>New Patient Enrollment</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Medicaid ID:</strong> ${escapeHtml(medicaidId || "Not provided")}</p>
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
