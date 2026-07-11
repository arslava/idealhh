"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";

// Routes that exist under /ru/ (relative path, no leading/trailing slash;
// "" = homepage). Several English routes have no Russian equivalent at all
// (locations, resources, blog, legal pages) — switching from one of those
// falls back to the Russian homepage rather than a broken link.
const RU_ROUTES = new Set([
  "",
  "about-us",
  "about-us/testimonials-reviews",
  "careers",
  "careers/how-it-works-caregivers",
  "contact-us",
  "enroll-now",
  "home-care-benefits",
  "how-to-enroll",
  "services",
  "services/conditions",
  "services/home-health-aide",
  "services/visiting-home-nurse",
]);

// All 13 condition detail slugs are identical between locales.
const CONDITION_SLUGS = new Set([
  "alzheimers-dementia", "arthritis", "diabetes", "epilepsy", "fall-prevention",
  "help-with-daily-tasks", "individualized-care", "lifting-and-transferring",
  "live-in-24-hour-care", "parkinsons", "post-hospital-care", "stroke",
  "wheel-chair-bed-bound-support",
]);

function isRuRouteValid(relPath: string): boolean {
  if (RU_ROUTES.has(relPath)) return true;
  const match = relPath.match(/^services\/conditions\/([^/]+)$/);
  return match ? CONDITION_SLUGS.has(match[1]) : false;
}

// This project only has English and Russian built out. The live WordPress
// site's switcher lists ~10 WPML languages, but only these two actually
// exist here — building a fake multi-language menu would just be more
// broken links, so this stays a real 2-option dropdown.
function useLanguageLinks() {
  const pathname = usePathname() || "/";
  const isRu = pathname === "/ru" || pathname.startsWith("/ru/");

  const relPath = isRu ? pathname.replace(/^\/ru\/?/, "") : pathname.replace(/^\//, "");
  const enHref = relPath ? `/${relPath}` : "/";
  const ruHref = relPath === "" || isRuRouteValid(relPath) ? (relPath ? `/ru/${relPath}` : "/ru") : "/ru";

  return {
    current: isRu ? "ru" : "en",
    options: [
      { code: "en", label: "English", href: enHref },
      { code: "ru", label: "Русский", href: ruHref },
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
