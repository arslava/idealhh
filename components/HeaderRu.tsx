"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { navRu, siteRu } from "@/lib/nav.ru";

export default function HeaderRu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <header className="o-header relative z-50">
      <div className="border-b border-navy-muted/20 py-3">
        <div className="mx-auto max-w-[1140px] px-4 flex items-center justify-between gap-6">
          <div className="text-grey-800">
            <span className="text-[1.25rem] font-semibold text-navy-muted mr-2">Звоните нам сегодня!</span>
            <a href={siteRu.phoneHref} className="text-[1.25rem] font-black text-navy-700 hover:text-accent">
              {siteRu.phone}
            </a>
          </div>
          <div className="hidden sm:block text-navy-muted text-xs uppercase tracking-wide">Русский</div>
        </div>
      </div>

      <div className="shadow-[0_20px_40px_rgba(56,75,116,0.1)] py-6">
        <div className="mx-auto max-w-[1140px] px-4 flex items-center justify-between gap-8">
          <Link href="/ru" className="shrink-0">
            <Image src="/images/logo.svg" alt={siteRu.name} width={186} height={59} priority className="h-10 w-auto md:h-12" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navRu.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="whitespace-nowrap text-[1.125rem] font-bold text-grey-800 hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full pt-3 hidden group-hover:block min-w-[240px] z-50">
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
              href={siteRu.enrollHref}
              className="hidden sm:inline-flex items-center justify-center rounded-full min-w-[290px] bg-accent border border-accent text-white text-[1.125rem] font-bold px-6 py-3.5 hover:bg-white hover:text-accent transition-colors duration-200 shrink-0"
            >
              {siteRu.enrollButtonLabel}
            </Link>

            <button
              type="button"
              className="lg:hidden text-navy-700 p-2 -mr-2"
              aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
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
            {navRu.map((item) => (
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
                      aria-label={`Развернуть ${item.label}`}
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
                  <div className="pb-3 pl-4 flex flex-col gap-1">
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
              href={siteRu.enrollHref}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-accent border border-accent text-white text-[1.125rem] font-bold px-6 py-3.5 hover:bg-white hover:text-accent transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {siteRu.enrollButtonLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
