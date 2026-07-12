"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";

// Routes that exist under /ru/ (relative path, no leading/trailing slash;
// "" = homepage). Condition detail pages live at /ru/conditions/{slug}
// (not nested under /ru/services/), matching the real site's URL structure
// — only the conditions overview page itself is nested under /services/.
const RU_ROUTES = new Set([
  "", "about-us", "about-us/testimonials-reviews",
  "careers", "careers/how-it-works-caregivers",
  "contact-us", "enroll-now", "home-care-benefits", "how-to-enroll",
  "services", "services/conditions", "services/home-health-aide", "services/visiting-home-nurse",
]);
const RU_CONDITION_SLUGS = new Set([
  "alzheimers-dementia", "arthritis", "diabetes", "epilepsy", "fall-prevention",
  "help-with-daily-tasks", "individualized-care", "lifting-and-transferring",
  "live-in-24-hour-care", "parkinsons", "post-hospital-care", "stroke",
  "wheel-chair-bed-bound-support",
]);

// Routes that exist under /es/. Only 11 of the 13 condition slugs have a
// Spanish translation in the source — diabetes and stroke were never
// translated (confirmed against the export), so those two fall back to
// the Spanish homepage rather than a broken link.
const ES_ROUTES = new Set([
  "", "about-us", "about-us/testimonials-reviews",
  "careers", "careers/how-it-works-caregivers",
  "contact-us", "enroll-now", "home-care-benefits", "how-to-enroll",
  "services", "services/conditions", "services/home-health-aide", "services/visiting-home-nurse",
]);
const ES_CONDITION_SLUGS = new Set([
  "alzheimers-dementia", "arthritis", "epilepsy", "fall-prevention",
  "help-with-daily-tasks", "individualized-care", "lifting-and-transferring",
  "live-in-24-hour-care", "parkinsons", "post-hospital-care",
  "wheel-chair-bed-bound-support",
]);

function isRouteValid(relPath: string, routes: Set<string>, conditionSlugs: Set<string>): boolean {
  if (routes.has(relPath)) return true;
  const match = relPath.match(/^conditions\/([^/]+)$/);
  return match ? conditionSlugs.has(match[1]) : false;
}

function useLanguageLinks() {
  const pathname = usePathname() || "/";
  const isRu = pathname === "/ru" || pathname.startsWith("/ru/");
  const isEs = pathname === "/es" || pathname.startsWith("/es/");
  const current = isRu ? "ru" : isEs ? "es" : "en";

  const relPath =
    current === "ru" ? pathname.replace(/^\/ru\/?/, "") :
    current === "es" ? pathname.replace(/^\/es\/?/, "") :
    pathname.replace(/^\//, "");

  const enHref = relPath ? `/${relPath}` : "/";
  const ruHref = relPath === "" || isRouteValid(relPath, RU_ROUTES, RU_CONDITION_SLUGS) ? (relPath ? `/ru/${relPath}` : "/ru") : "/ru";
  const esHref = relPath === "" || isRouteValid(relPath, ES_ROUTES, ES_CONDITION_SLUGS) ? (relPath ? `/es/${relPath}` : "/es") : "/es";

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
