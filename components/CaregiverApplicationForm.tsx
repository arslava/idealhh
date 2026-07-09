"use client";

import { useState } from "react";
import FloatingInput from "./FloatingInput";

type Status = "idle" | "loading" | "success" | "error";

// Caregiver Job Application form — matches the original site's
// /careers/#qualifyenroll section (WPForms id 3064, "Caregiver Job
// Application"), a separate form from patient enrollment.
export default function CaregiverApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

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
        <p className="text-xl font-semibold text-navy-800">Application received!</p>
        <p className="mt-2 text-grey-800">A member of our team will reach out shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-5">
      <input
        type="text" name="website" tabIndex={-1} autoComplete="off"
        className="absolute left-[-9999px] w-px h-px opacity-0" aria-hidden="true"
      />

      <FloatingInput id="ca-name" name="name" label="Name" required />
      <FloatingInput id="ca-email" name="email" label="Email" type="email" required />
      <FloatingInput id="ca-phone" name="phone" label="Phone" type="tel" required />
      <div>
        <label htmlFor="ca-position" className="block text-xs font-bold uppercase text-navy-muted mb-1">Position</label>
        <select
          id="ca-position" name="position" defaultValue="Home Health Aide (HHA)"
          className="w-full rounded-[10px] border border-navy-900/15 bg-white px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option>Home Health Aide (HHA)</option>
          <option>Registered Nurse (RN)</option>
          <option>Licensed Practical Nurse (LPN)</option>
          <option>Personal Care Aide (PCA)</option>
          <option>Other</option>
        </select>
      </div>
      <FloatingInput id="ca-message" name="message" label="Tell us about your experience" as="textarea" rows={4} />

      {status === "error" && <p className="text-sm text-accent">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[1.125rem] font-semibold border bg-accent border-accent text-white hover:bg-white hover:text-accent transition-colors duration-200 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
