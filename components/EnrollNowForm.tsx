"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function EnrollNowForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

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
        <p className="text-xl font-semibold text-navy-800">Thank you for your interest!</p>
        <p className="mt-2 text-grey-800">A member of our team will reach out shortly to help you get started.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] w-px h-px opacity-0"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="enrollmentType" className="block text-sm font-semibold text-navy-700 mb-1">I am enrolling as a... *</label>
        <select
          id="enrollmentType" name="enrollmentType" required defaultValue=""
          className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="" disabled>Select one</option>
          <option value="Patient">Patient / Family Member</option>
          <option value="Caregiver">Caregiver</option>
        </select>
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy-700 mb-1">Name *</label>
        <input
          id="name" name="name" type="text" required
          className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy-700 mb-1">Email *</label>
        <input
          id="email" name="email" type="email" required
          className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-navy-700 mb-1">Phone</label>
        <input
          id="phone" name="phone" type="tel"
          className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy-700 mb-1">Anything else we should know?</label>
        <textarea
          id="message" name="message" rows={4}
          className="w-full rounded-xl border border-navy-900/15 px-4 py-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-accent">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-full min-w-[196px] px-6 py-3.5 text-[1.125rem] font-semibold border bg-accent border-accent text-white hover:bg-navy-900 hover:border-navy-900 transition-colors duration-200 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit Enrollment"}
      </button>
    </form>
  );
}
