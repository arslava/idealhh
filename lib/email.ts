import { Resend } from "resend";

// Requires RESEND_API_KEY in the environment (DigitalOcean App Platform:
// Settings → App-Level Environment Variables). Also requires a verified
// sending domain in your Resend account (resend.com/domains) — until that's
// set up, the "from" address below won't be able to send.
//
// Lazily instantiated (not at module load time) so the build doesn't fail
// when RESEND_API_KEY isn't present yet — e.g. before it's been added to
// DigitalOcean's environment variables.
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it in DigitalOcean App Platform → Settings → Environment Variables."
    );
  }
  return new Resend(apiKey);
}

const TO = ["akrupoff@idealhh.com"];
const CC = ["info@webupturn.com"];
const FROM = "Ideal Home Health Website <forms@idealhh.com>";

type SendFormEmailArgs = {
  subject: string;
  replyTo?: string;
  html: string;
};

export async function sendFormEmail({ subject, replyTo, html }: SendFormEmailArgs) {
  const resend = getResendClient();

  return resend.emails.send({
    from: FROM,
    to: TO,
    cc: CC,
    replyTo,
    subject,
    html,
  });
}

// Very simple honeypot check: real users never fill in this hidden field,
// bots that auto-fill every field on a form will. No user-facing friction.
export function isSpam(honeypotValue: unknown) {
  return typeof honeypotValue === "string" && honeypotValue.trim().length > 0;
}
