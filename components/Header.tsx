import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Header() {
  return (
    <header className="o-header">
      {/* Top bar: phone + language switcher, matches the real theme's .o-header__top */}
      <div className="border-b border-navy-muted/20 py-3">
        <div className="mx-auto max-w-[1140px] px-4 flex items-center justify-between gap-6 text-sm">
          <div className="text-grey-800">
            <span className="text-navy-muted mr-2">Call Us Today!</span>
            <a href={site.phoneHref} className="font-semibold text-navy-700 hover:text-accent">
              {site.phone}
            </a>
          </div>
          {/* Language switcher placeholder — the real site has 11 languages via WPML;
              wire in next-intl or similar once the multilingual phase starts. */}
          <div className="hidden sm:block text-navy-muted text-xs uppercase tracking-wide">
            English
          </div>
        </div>
      </div>

      {/* Main row: logo + nav + Enroll Today pill button */}
      <div className="shadow-[0_20px_40px_rgba(56,75,116,0.1)] py-6">
        <div className="mx-auto max-w-[1140px] px-4 flex items-center justify-between gap-8">
          <Link href="/" className="shrink-0">
            <span className="font-display text-2xl font-semibold text-navy-700">{site.name}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-grey-800 hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full pt-3 hidden group-hover:block min-w-[240px]">
                    <div className="rounded-2xl bg-white shadow-[0_20px_40px_rgba(56,75,116,0.15)] py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-grey-800 hover:bg-bg-light hover:text-accent"
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

          <Link
            href="/enroll-now"
            className="hidden sm:inline-flex items-center rounded-full bg-accent text-white text-sm font-semibold px-6 py-3 hover:bg-navy-900 transition-colors shrink-0"
          >
            Enroll Today
          </Link>
        </div>
      </div>
    </header>
  );
}
