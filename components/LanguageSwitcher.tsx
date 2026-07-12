"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";
import { slugMap, conditionSlugMap, type SlugEntry } from "@/lib/slug-map";

type Locale = "en" | "ru" | "es";

// Reverse index: internal EN relPath -> its slugMap entry, built once.
// Lets us go from "the EN page currently open" to "what's the real RU/ES
// URL for this same page" without assuming any slug string is shared.
const byEnPath: Record<string, SlugEntry> = Object.fromEntries(
  Object.values(slugMap).map((entry) => [entry.en, entry])
);

function pathFor(entry: SlugEntry | undefined, locale: Locale): string | null {
  if (!entry) return null;
  const value = entry[locale];
  if (value === null) return null;
  const prefix = locale === "en" ? "" : `/${locale}`;
  return value ? `${prefix}/${value}` : prefix || "/";
}

function useLanguageLinks() {
  const pathname = usePathname() || "/";
  const isRu = pathname === "/ru" || pathname.startsWith("/ru/");
  const isEs = pathname === "/es" || pathname.startsWith("/es/");
  const current: Locale = isRu ? "ru" : isEs ? "es" : "en";

  const relPath =
    current === "ru" ? pathname.replace(/^\/ru\/?/, "") :
    current === "es" ? pathname.replace(/^\/es\/?/, "") :
    pathname.replace(/^\//, "");

  // Is this a condition detail page? Its relPath under the current locale
  // uses that locale's own slug, so we first have to find the EN slug it
  // corresponds to before we can look up the other two locales.
  const conditionMatch = relPath.match(/^conditions\/([^/]+)$/);
  let enSlug: string | null = null;
  if (conditionMatch) {
    const localSlug = conditionMatch[1];
    if (current === "en") {
      enSlug = localSlug;
    } else {
      const found = Object.entries(conditionSlugMap).find(
        ([, v]) => v[current] === localSlug
      );
      enSlug = found ? found[0] : null;
    }
  }

  let enHref: string, ruHref: string, esHref: string;

  if (enSlug) {
    const c = conditionSlugMap[enSlug];
    enHref = `/conditions/${enSlug}`;
    ruHref = c?.ru ? `/ru/conditions/${c.ru}` : "/ru/services/conditions";
    esHref = c?.es ? `/es/conditions/${c.es}` : "/es/services/conditions";
  } else {
    // Regular page: find its slugMap entry via the EN path.
    const enRelPath =
      current === "en" ? relPath : (() => {
        const found = Object.values(slugMap).find((e) => e[current] === relPath);
        return found?.en ?? null;
      })();
    const entry = enRelPath !== null ? byEnPath[enRelPath] : undefined;

    enHref = pathFor(entry, "en") ?? (relPath ? `/${relPath}` : "/");
    ruHref = pathFor(entry, "ru") ?? "/ru";
    esHref = pathFor(entry, "es") ?? "/es";
  }

  return {
    current,
    options: [
      { code: "en", label: "English", href: enHref },
      { code: "ru", label: "Русский", href: ruHref },
      { code: "es", label: "Español", href: esHref },
    ],
  } as const;
}

export default function LanguageSwitcher({ variant = "text" }: { variant?: "text" | "button" }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const { current, options } = useLanguageLinks();
  const currentOption = options.find((o) => o.code === current)!;

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const triggerClass =
    variant === "button"
      ? "flex items-center gap-2 rounded-full border border-navy-muted/30 px-4 py-2.5 text-[1.125rem] font-semibold text-navy-700 hover:border-accent hover:text-accent transition-colors w-full justify-center"
      : "flex items-center gap-1.5 text-navy-muted text-xs uppercase tracking-wide hover:text-accent transition-colors";

  return (
    <div ref={rootRef} className="relative">
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-haspopup="listbox" className={triggerClass}>
        <Globe size={variant === "button" ? 18 : 14} />
        {currentOption.label}
        <ChevronDown size={variant === "button" ? 16 : 12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className={
            variant === "button"
              ? "mt-2 w-full rounded-xl bg-white border border-navy-muted/15 shadow-[0_20px_40px_rgba(56,75,116,0.15)] overflow-hidden"
              : "absolute right-0 top-full mt-2 min-w-[140px] rounded-xl bg-white border border-navy-muted/15 shadow-[0_20px_40px_rgba(56,75,116,0.15)] overflow-hidden z-50"
          }
        >
          {options.map((option) => (
            <Link
              key={option.code}
              href={option.href}
              role="option"
              aria-selected={option.code === current}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 text-[1rem] font-semibold transition-colors ${
                option.code === current
                  ? "bg-bg-light text-accent"
                  : "text-navy-700 hover:bg-bg-light hover:text-accent"
              }`}
            >
              {option.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
