"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Languages } from "lucide-react";
import { useLanguageLinks } from "@/lib/use-language-links";
import { LOCALE_LABEL } from "@/lib/locale-flags";
import Flag from "./Flag";

export default function LanguageSwitcherMobile() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const { current, options } = useLanguageLinks();
  const others = options.filter((o) => o.code !== current);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div
      ref={rootRef}
      className="lg:hidden fixed left-4 z-[60] flex flex-col items-start gap-2.5"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
    >
      {/* Expanded language options, stacked upward above the trigger */}
      {open && (
        <div role="listbox" aria-label="Choose language" className="flex flex-col-reverse gap-2.5 pb-1">
          {others.map((option, i) => (
            <Link
              key={option.code}
              href={option.href}
              role="option"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-full bg-white pl-1.5 pr-3.5 py-1.5 shadow-[0_10px_25px_rgba(56,75,116,0.25)] border border-navy-muted/15 text-navy-700 text-sm font-semibold animate-[fadeSlideUp_0.15s_ease-out_backwards]"
              style={{ animationDelay: `${i * 30}ms` }}
            >
              <Flag locale={option.code} size={24} />
              {LOCALE_LABEL[option.code]}
            </Link>
          ))}
        </div>
      )}

      {/* Trigger: shows the current locale's flag */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Language: ${LOCALE_LABEL[current]}. Tap to change.`}
        className="relative flex h-13 w-13 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(56,75,116,0.3)] border border-navy-muted/15 active:scale-95 transition-transform"
        style={{ height: 52, width: 52 }}
      >
        <Flag locale={current} size={34} />
        <span className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white ring-2 ring-white">
          <Languages size={11} />
        </span>
      </button>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
