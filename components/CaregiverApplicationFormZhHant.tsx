"use client";

import { useState } from "react";
import FloatingInput from "./FloatingInput";

type Status = "idle" | "loading" | "success" | "error";

// Confirmed via live fetch of /zh-hant/careers/ — same underlying
// WPForms caregiver-application form as EN/RU/AR, with English field
// labels throughout (no Traditional Chinese field-label translation
// confirmed, unlike ES's Ciudad/state translation). CDPAP button
// (present in source alongside "Patient Enrollment") dropped per
// standing rule.
// A stray "the Opt Preferred" field appeared in the fetch between Zip
// Code and Certification Type — like the other forms' stray fields, this
// looks like a hidden tracking field rather than a real user-facing one;
// omitted pending confirmation.
const LANGUAGES = [
  "English", "Spanish", "Russian", "Arabic", "Mandarin", "Cantonese",
  "Haitian Creole", "French", "Hindi", "Urdu", "Albanian", "Armenian",
  "Bengali", "Burmese", "Cantonese", "Korean", "Italian", "Indonesian", "Nepali", "Punjabi",
];

const CERT_TYPES = ["HHA", "PCA", "No Certificate"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
  "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

export default function CaregiverApplicationFormZhHant() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [availability, setAvailability] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const certTypes = fd.getAll("certType");
    const days = fd.getAll("availableDays");
    const data: Record<string, string> = Object.fromEntries(
      Array.from(fd.entries()).filter(([k]) => k !== "certType" && k !== "availableDays") as [string, string][]
    );
    data.certType = certTypes.join(", ");
    data.availableDays = days.join(", ");
    data.smsOptIn = fd.get("smsOptIn") ? "Yes" : "No";
    data.confirmHha = fd.get("confirmHha") ? "Yes" : "No";

    try {
      const res = await fetch("/api/caregiver-application", {
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
        <p className="text-xl font-semibold text-navy-800">感謝您提交申請！</p>
        <p className="mt-2 text-grey-800">我們的團隊成員將盡快與您聯繫。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-5">
      <div className="flex justify-center">
        <a
          href="/zh-hant/enroll-now"
          className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold border border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-200"
        >
          Patient Enrollment
        </a>
      </div>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] w-px h-px opacity-0" aria-hidden="true" />

      <FloatingInput id="firstName" name="firstName" label="First Name" required />
      <FloatingInput id="lastName" name="lastName" label="Last Name" required />
      <FloatingInput id="email" name="email" label="Email" type="email" />
      <FloatingInput id="phone" name="phone" label="Phone" type="tel" />

      <FloatingInput id="address" name="address" label="Address" required />
      <div className="grid grid-cols-2 gap-4">
        <FloatingInput id="city" name="city" label="City" />
        <div>
          <label htmlFor="state" className="block text-xs font-bold uppercase text-navy-muted mb-1">State</label>
          <select id="state" name="state" defaultValue="" className="w-full rounded-[10px] border border-navy-900/15 bg-white px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent">
            <option value="" disabled></option>
            {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <FloatingInput id="zip" name="zip" label="Zip Code" />

      <fieldset>
        <legend className="block text-xs font-bold uppercase text-navy-muted mb-1">Certification Type</legend>
        <div className="flex flex-wrap gap-4">
          {CERT_TYPES.map((c) => (
            <label key={c} className="flex items-center gap-2 text-sm text-grey-800">
              <input type="checkbox" name="certType" value={c} /> {c}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="preferredLanguage" className="block text-xs font-bold uppercase text-navy-muted mb-1">Preferred Language</label>
        <select id="preferredLanguage" name="preferredLanguage" defaultValue="" className="w-full rounded-[10px] border border-navy-900/15 bg-white px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent">
          <option value="" disabled></option>
          {LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="availability" className="block text-xs font-bold uppercase text-navy-muted mb-1">Caregiver Availability</label>
        <select id="availability" name="availability" value={availability} onChange={(e) => setAvailability(e.target.value)} className="w-full rounded-[10px] border border-navy-900/15 bg-white px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent">
          <option value="">Select One</option>
          <option value="Part Time">Part Time</option>
          <option value="Full Time">Full Time</option>
        </select>
      </div>

      {availability === "Part Time" && (
        <fieldset>
          <legend className="block text-xs font-bold uppercase text-navy-muted mb-1">What Days of the Week are you available?</legend>
          <div className="flex flex-wrap gap-3">
            {DAYS.map((d) => (
              <label key={d} className="flex items-center gap-2 text-sm text-grey-800">
                <input type="checkbox" name="availableDays" value={d} /> {d}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <label className="flex items-start gap-3 text-sm text-grey-800">
        <input type="checkbox" name="confirmHha" required className="mt-1 shrink-0" />
        <span>I confirm that I am a certified Home Health Aide looking to get staffed on a case (if this does not apply please call 929-298-4059)</span>
      </label>

      <div>
        <label htmlFor="otherLanguages" className="block text-xs font-bold uppercase text-navy-muted mb-1">Primary language or Other spoken Languages</label>
        <select id="otherLanguages" name="otherLanguages" defaultValue="" className="w-full rounded-[10px] border border-navy-900/15 bg-white px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent">
          <option value="" disabled></option>
          {LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      <FloatingInput id="notes" name="notes" label="Notes" as="textarea" rows={3} />

      <p className="text-xs text-accent font-semibold text-center">
        Disclaimer: Please note, IHH does not offer PCA or HHA certificate training.
      </p>

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

      <button type="submit" disabled={status === "loading"} className="inline-flex items-center justify-center rounded-full min-w-[196px] px-6 py-3.5 text-[1.125rem] font-semibold bg-accent border border-accent text-white hover:bg-white hover:text-accent transition-colors duration-200 disabled:opacity-60">
        {status === "loading" ? "傳送中..." : "傳送"}
      </button>
    </form>
  );
}
