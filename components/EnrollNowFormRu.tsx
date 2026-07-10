"use client";

import { useState } from "react";
import FloatingInput from "./FloatingInput";

type Status = "idle" | "loading" | "success" | "error";

export default function EnrollNowFormRu() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
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
      if (!res.ok || !json.ok) throw new Error(json.error || "Ошибка");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Что-то пошло не так. Попробуйте еще раз.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <p className="text-xl font-semibold text-navy-800">Спасибо за интерес!</p>
        <p className="mt-2 text-grey-800">Наш представитель скоро свяжется с вами.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-5">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] w-px h-px opacity-0" aria-hidden="true" />
      <FloatingInput id="firstName" name="firstName" label="Имя" required />
      <FloatingInput id="lastName" name="lastName" label="Фамилия" required />
      <FloatingInput id="email" name="email" label="Эл. почта" type="email" />
      <FloatingInput id="phone" name="phone" label="Телефон" type="tel" required />
      <FloatingInput id="medicaidId" name="medicaidId" label="Medicaid ID" />
      <label className="flex items-start gap-3 text-xs text-navy-muted leading-relaxed">
        <input type="checkbox" name="smsOptIn" defaultChecked className="mt-1 shrink-0" />
        <span>
          Я согласен(на) получать текстовые сообщения от Ideal Home Health на указанный номер.
          Ответьте STOP, чтобы отписаться.
        </span>
      </label>
      {status === "error" && <p className="text-sm text-accent">{errorMsg}</p>}
      <button type="submit" disabled={status === "loading"} className="inline-flex items-center justify-center rounded-full min-w-[196px] px-6 py-3.5 text-[1.125rem] font-semibold bg-accent border border-accent text-white hover:bg-white hover:text-accent transition-colors duration-200 disabled:opacity-60">
        {status === "loading" ? "Отправка..." : "Отправить"}
      </button>
    </form>
  );
}
