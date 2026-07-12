"use client";

import { useState } from "react";
import FloatingInput from "./FloatingInput";

type Status = "idle" | "loading" | "success" | "error";

// Caregiver Job Application form — matches the real WPForms field set
// (id 3064, "Enroll Today (Careers)") confirmed via live fetch of
// /careers/#qualifyenroll: name, contact info, address, certification type,
// preferred language, availability + days, an HHA-staffing confirmation
// checkbox, other spoken languages, notes, and SMS opt-in. The previous
// version of this component was a fabricated single "Position" dropdown
// that doesn't exist on the real form.
const LANGUAGES = [
  "English", "Spanish", "Russian", "Arabic", "Mandarin", "Cantonese",
  "Haitian Creole", "French", "Hindi", "Urdu", "Albanian", "Armenian",
  "Bengali", "Burmese", "Cantonese", "Korean", "Italian", "Indonesian", "Nepali", "Punjabi",
];

const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
];

const CERT_TYPES = ["HHA", "PCA", "No Certificate"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function CaregiverApplicationForm() {
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
        <p className="text-xl font-semibold text-navy-800">Thank you for applying!</p>
        <p className="mt-2 text-grey-800">A member of our team will reach out shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-5">
      <div className="flex justify-center flex-wrap gap-3">
        <a
          href="/enroll-now"
          className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold border border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-200"
        >
          Patient Enrollment
        </a>
        {/* CDPAP button omitted per standing rule (source links externally to idealcdpap.com) */}
      </div>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] w-px h-px opacity-0" aria-hidden="true" />

      <FloatingInput id="ca-firstName" name="firstName" label="First Name" required />
      <FloatingInput id="ca-lastName" name="lastName" label="Last Name" required />
      <FloatingInput id="ca-email" name="email" label="Email" type="email" required />
      <FloatingInput id="ca-phone" name="phone" label="Phone" type="tel" required />

      <FloatingInput id="ca-address" name="address" label="Address Line 1" required />
      <div className="grid grid-cols-2 gap-4">
        <FloatingInput id="ca-city" name="city" label="City" />
        <div>
          <label htmlFor="ca-state" className="block text-xs font-bold uppercase text-navy-muted mb-1">State</label>
          <select id="ca-state" name="state" defaultValue="" className="w-full rounded-[10px] border border-navy-900/15 bg-white px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent">
            <option value="" disabled></option>
            {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <FloatingInput id="ca-zip" name="zip" label="Zip Code" />

      <fieldset>
        <legend className="block text-xs font-bold uppercase text-navy-muted mb-1">Certification Type</legend>
        <div className="flex flex-wrap gap-4">
          {CERT_TYPES.map((c) => (
            <label key={c} className="flex items-center gap-2 text-sm text-grey-800">
              <input type="checkbox" name="certType" value={c} required /> {c}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="ca-preferredLanguage" className="block text-xs font-bold uppercase text-navy-muted mb-1">Preferred Language</label>
        <select id="ca-preferredLanguage" name="preferredLanguage" defaultValue="" required className="w-full rounded-[10px] border border-navy-900/15 bg-white px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent">
          <option value="" disabled></option>
          {LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="ca-availability" className="block text-xs font-bold uppercase text-navy-muted mb-1">Caregiver Availability</label>
        <select id="ca-availability" name="availability" value={availability} onChange={(e) => setAvailability(e.target.value)} required className="w-full rounded-[10px] border border-navy-900/15 bg-white px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent">
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
        <label htmlFor="ca-otherLanguages" className="block text-xs font-bold uppercase text-navy-muted mb-1">Primary language or Other spoken Languages</label>
        <select id="ca-otherLanguages" name="otherLanguages" defaultValue="" required className="w-full rounded-[10px] border border-navy-900/15 bg-white px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent">
          <option value="" disabled></option>
          {LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      <FloatingInput id="ca-notes" name="notes" label="Notes" as="textarea" rows={3} />

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

      <p className="text-xs text-accent font-semibold text-center">
        Disclaimer: Please note, IHH does not offer PCA or HHA certificate training.
      </p>

      {status === "error" && <p className="text-sm text-accent">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[1.125rem] font-semibold border bg-accent border-accent text-white hover:bg-white hover:text-accent transition-colors duration-200 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
