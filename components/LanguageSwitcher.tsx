"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLanguageLinks } from "@/lib/use-language-links";
import { LOCALE_LABEL, LOCALE_SHORT } from "@/lib/locale-flags";
import Flag from "./Flag";

export default function LanguageSwitcher({ variant = "text" }: { variant?: "text" | "button" }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const { current, options } = useLanguageLinks();

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const triggerClass =
    variant === "button"
      ? "flex items-center gap-2.5 rounded-full border border-navy-muted/30 px-4 py-2.5 text-[1.125rem] font-semibold text-navy-700 hover:border-accent hover:text-accent transition-colors w-full justify-center"
      : "flex items-center gap-1.5 text-navy-muted text-xs uppercase tracking-wide hover:text-accent transition-colors";

  return (
    <div ref={rootRef} className="relative">
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-haspopup="listbox" className={triggerClass}>
        <Flag locale={current} size={variant === "button" ? 22 : 18} />
        {variant === "button" ? LOCALE_LABEL[current] : LOCALE_SHORT[current]}
        <ChevronDown size={variant === "button" ? 16 : 12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className={
            variant === "button"
              ? "mt-2 w-full rounded-xl bg-white border border-navy-muted/15 shadow-[0_20px_40px_rgba(56,75,116,0.15)] overflow-hidden"
              : "absolute right-0 top-full mt-2 min-w-[170px] rounded-xl bg-white border border-navy-muted/15 shadow-[0_20px_40px_rgba(56,75,116,0.15)] overflow-hidden z-50"
          }
        >
          {options.map((option) => (
            <Link
              key={option.code}
              href={option.href}
              role="option"
              aria-selected={option.code === current}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 text-[1rem] font-semibold transition-colors ${
                option.code === current ? "bg-bg-light text-accent" : "text-navy-700 hover:bg-bg-light hover:text-accent"
              }`}
            >
              <Flag locale={option.code} size={20} />
              {LOCALE_LABEL[option.code]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
