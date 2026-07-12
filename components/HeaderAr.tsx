"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { navAr, siteAr } from "@/lib/nav.ar";
import LanguageSwitcher from "./LanguageSwitcher";

// RTL note: dir="rtl" is set on <html> for this locale (see app/layout.tsx),
// which flips logical CSS properties automatically, but Tailwind's
// physical-direction utilities (ml-/mr-, pl-/pr-, left-/right-) do NOT
// flip on their own — they're mirrored explicitly below (mr-2 -> ml-2,
// absolute left-0 -> right-0, pl-4 indent -> pr-4) so the dropdown menus,
// spacing, and mobile submenu indentation read correctly in RTL rather
// than just inheriting the LTR component's physical values.
export default function HeaderAr() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <header className="o-header relative z-50">
      <div className="border-b border-navy-muted/20 py-3">
        <div className="mx-auto max-w-[1140px] px-4 flex items-center justify-between gap-6">
          <div className="text-grey-800">
            <span className="text-[1.25rem] font-semibold text-navy-muted ml-2">اتصل بنا اليوم!</span>
            <a href={siteAr.phoneHref} className="text-[1.25rem] font-black text-navy-700 hover:text-accent" dir="ltr">
              {siteAr.phone}
            </a>
          </div>
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="shadow-[0_20px_40px_rgba(56,75,116,0.1)] py-6">
        <div className="mx-auto max-w-[1140px] px-4 flex items-center justify-between gap-8">
          <Link href="/ar" className="shrink-0">
            <Image src="/images/logo.svg" alt={siteAr.name} width={186} height={59} priority className="h-10 w-auto md:h-12" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navAr.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="whitespace-nowrap text-[1.125rem] font-bold text-grey-800 hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute right-0 top-full pt-3 hidden group-hover:block min-w-[240px] z-50">
                    <div className="rounded-2xl bg-white shadow-[0_20px_40px_rgba(56,75,116,0.15)] py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-[1.125rem] font-bold text-grey-800 hover:bg-bg-light hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={siteAr.enrollHref}
              className="hidden sm:inline-flex items-center justify-center rounded-full min-w-[290px] bg-accent border border-accent text-white text-[1.125rem] font-bold px-6 py-3.5 hover:bg-white hover:text-accent transition-colors duration-200 shrink-0"
            >
              {siteAr.enrollButtonLabel}
            </Link>

            <button
              type="button"
              className="lg:hidden text-navy-700 p-2 -ml-2"
              aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-[0_20px_40px_rgba(56,75,116,0.15)] z-50 max-h-[80vh] overflow-y-auto">
          <nav className="px-4 py-4">
            {navAr.map((item) => (
              <div key={item.label} className="border-b border-navy-muted/10 last:border-none">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="flex-1 py-3 text-[1.5625rem] md:text-[1.875rem] font-normal text-navy-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      className="p-3 text-navy-muted"
                      aria-label={`توسيع ${item.label}`}
                      onClick={() =>
                        setOpenSection((cur) => (cur === item.label ? null : item.label))
                      }
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${openSection === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {item.children && openSection === item.label && (
                  <div className="pb-3 pr-4 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-2 text-[1.5625rem] md:text-[1.875rem] font-normal text-navy-700"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href={siteAr.enrollHref}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-accent border border-accent text-white text-[1.125rem] font-bold px-6 py-3.5 hover:bg-white hover:text-accent transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {siteAr.enrollButtonLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
