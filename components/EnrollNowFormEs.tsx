"use client";

import { useState } from "react";
import FloatingInput from "./FloatingInput";

type Status = "idle" | "loading" | "success" | "error";

// Confirmed via live fetch of /es/enroll-now/ — same English field labels
// as the EN form (First Name, Last Name, Email, Phone, Medicaid ID,
// Preferred Language, SMS opt-in), same WPForms form reused across locales.
// A stray "First Source in" label appeared near Submit in the fetch — like
// ContactFormEs's "First Term in", this looks like a hidden tracking field
// rendered oddly rather than a real user-facing field; omitted pending
// confirmation.
const LANGUAGES = [
  "English", "Spanish", "Russian", "Arabic", "Mandarin", "Cantonese",
  "Haitian Creole", "French", "Hindi", "Urdu", "Albanian", "Armenian",
  "Bengali", "Burmese", "Cantonese", "Korean", "Italian", "Indonesian", "Nepali", "Punjabi",
];

export default function EnrollNowFormEs() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    data.smsOptIn = fd.get("smsOptIn") ? "Yes" : "No";

    try {
      const res = await fetch("/api/enroll-now", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <p className="text-xl font-semibold text-navy-800">¡Gracias por su interés!</p>
        <p className="mt-2 text-grey-800">Un miembro de nuestro equipo se pondrá en contacto pronto para ayudarle a comenzar.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-5">
      <input
        type="text" name="website" tabIndex={-1} autoComplete="off"
        className="absolute left-[-9999px] w-px h-px opacity-0" aria-hidden="true"
      />

      <FloatingInput id="firstName" name="firstName" label="First Name" required />
      <FloatingInput id="lastName" name="lastName" label="Last Name" required />
      <FloatingInput id="email" name="email" label="Email" type="email" />
      <FloatingInput id="phone" name="phone" label="Phone" type="tel" required />
      <FloatingInput id="medicaidId" name="medicaidId" label="Medicaid ID" />

      <div>
        <label htmlFor="preferredLanguage" className="block text-xs font-bold uppercase text-navy-muted mb-1">Preferred Language</label>
        <select
          id="preferredLanguage" name="preferredLanguage" defaultValue=""
          className="w-full rounded-[10px] border border-navy-900/15 bg-white px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="" disabled></option>
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      <label className="flex items-start gap-3 text-xs text-navy-muted leading-relaxed">
        <input type="checkbox" name="smsOptIn" defaultChecked className="mt-1 shrink-0" />
        <span>
        I agree to receive text messages regarding homecare enrollment from Ideal Home Health at the
        number I provided. Msg &amp; data rates may apply. Reply STOP to no longer receive messages.
        Message frequency varies. Text HELP to (929) 298-4059 or email{" "}
        <a href="mailto:info@idealhh.com" className="text-accent underline">info@idealhh.com</a>{" "}
        for assistance. Click to view our{" "}
        <a href="/tos" className="text-accent underline">Terms of Service</a> and{" "}
        <a href="/privacy-policy" className="text-accent underline">Privacy Policy</a>.
        </span>
      </label>

      {status === "error" && <p className="text-sm text-accent">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-full min-w-[196px] px-6 py-3.5 text-[1.125rem] font-semibold bg-accent border border-accent text-white hover:bg-white hover:text-accent transition-colors duration-200 disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
