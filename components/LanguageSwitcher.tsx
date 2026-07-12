"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";
import { slugMap, conditionSlugMap, LOCALE_SEGMENT, type SlugEntry, type Locale } from "@/lib/slug-map";

const LOCALES: Locale[] = ["en", "ru", "es", "ar", "zhHant"];
const LOCALE_LABELS: Record<Locale, string> = {
  en: "English", ru: "Русский", es: "Español", ar: "العربية", zhHant: "繁體中文",
};

// Reverse index: internal EN relPath -> its slugMap entry, built once.
// Lets us go from "the EN page currently open" to "what's the real
// RU/ES/AR/ZH-HANT URL for this same page" without assuming any slug
// string is shared.
const byEnPath: Record<string, SlugEntry> = Object.fromEntries(
  Object.values(slugMap).map((entry) => [entry.en, entry])
);

function pathFor(entry: SlugEntry | undefined, locale: Locale): string | null {
  if (!entry) return null;
  const value = entry[locale];
  if (value === null) return null;
  const segment = LOCALE_SEGMENT[locale];
  const prefix = segment ? `/${segment}` : "";
  return value ? `${prefix}/${value}` : prefix || "/";
}

function useLanguageLinks() {
  const pathname = usePathname() || "/";
  const current: Locale =
    LOCALES.find((l) => {
      if (l === "en") return false;
      const seg = LOCALE_SEGMENT[l];
      return pathname === `/${seg}` || pathname.startsWith(`/${seg}/`);
    }) ?? "en";

  const currentSegment = LOCALE_SEGMENT[current];
  const relPath =
    current === "en" ? pathname.replace(/^\//, "") : pathname.replace(new RegExp(`^/${currentSegment}/?`), "");

  // Is this a condition detail page? Its relPath under the current locale
  // uses that locale's own slug, so we first have to find the EN slug it
  // corresponds to before we can look up the other locales.
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

  const hrefFor = (locale: Locale): string => {
    if (enSlug) {
      if (locale === "en") return `/conditions/${enSlug}`;
      const c = conditionSlugMap[enSlug];
      const translated = c?.[locale];
      const segment = LOCALE_SEGMENT[locale];
      return translated ? `/${segment}/conditions/${translated}` : `/${segment}/services/conditions`;
    }
    const enRelPath =
      current === "en" ? relPath : (() => {
        const found = Object.values(slugMap).find((e) => e[current] === relPath);
        return found?.en ?? null;
      })();
    const entry = enRelPath !== null ? byEnPath[enRelPath] : undefined;
    const segment = LOCALE_SEGMENT[locale];
    return pathFor(entry, locale) ?? (locale === "en" ? (relPath ? `/${relPath}` : "/") : `/${segment}`);
  };

  return {
    current,
    options: LOCALES.map((code) => ({ code, label: LOCALE_LABELS[code], href: hrefFor(code) })),
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
