"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";

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

export default function LanguageSwitcher({ variant = "text" }: { variant?: "text" | "button" }) {
  const pathname = usePathname() || "/";
  const isRu = pathname === "/ru" || pathname.startsWith("/ru/");

  let href: string;
  let label: string;

  if (isRu) {
    const relPath = pathname.replace(/^\/ru\/?/, "");
    href = relPath ? `/${relPath}` : "/";
    label = "English";
  } else {
    const relPath = pathname.replace(/^\//, "");
    href = relPath === "" || isRuRouteValid(relPath) ? (relPath ? `/ru/${relPath}` : "/ru") : "/ru";
    label = "Русский";
  }

  if (variant === "button") {
    return (
      <Link
        href={href}
        className="flex items-center gap-2 rounded-full border border-navy-muted/30 px-4 py-2.5 text-[1.125rem] font-semibold text-navy-700 hover:border-accent hover:text-accent transition-colors"
      >
        <Globe size={18} />
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="text-navy-muted text-xs uppercase tracking-wide hover:text-accent transition-colors"
    >
      {label}
    </Link>
  );
}