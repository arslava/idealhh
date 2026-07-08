import { NextRequest, NextResponse } from "next/server";
import { sendFormEmail, isSpam } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, enrollmentType, message, website } = body;

    if (isSpam(website)) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !enrollmentType) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    await sendFormEmail({
      subject: `New Enrollment Inquiry (${enrollmentType}) — ${name}`,
      replyTo: email,
      html: `
        <h2>New Enrollment Inquiry</h2>
        <p><strong>Type:</strong> ${escapeHtml(enrollmentType)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "None provided").replace(/\n/g, "<br>")}</p>
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
