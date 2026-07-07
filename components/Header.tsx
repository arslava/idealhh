import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-navy/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="font-display text-xl font-semibold text-navy shrink-0">
          {site.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="text-sm font-medium text-ink hover:text-brick transition-colors"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full pt-3 hidden group-hover:block min-w-[240px]">
                  <div className="rounded-xl bg-white shadow-lg border border-navy/10 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-ink hover:bg-paper hover:text-brick"
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

        <a
          href={site.phoneHref}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-navy text-paper text-sm font-semibold px-5 py-2.5 hover:bg-navy-deep transition-colors shrink-0"
        >
          {site.phone}
        </a>
      </div>
    </header>
  );
}
