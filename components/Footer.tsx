import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-lg font-semibold">{site.name}</div>
          <p className="mt-3 text-sm text-paper/70 leading-relaxed">
            Compassionate, accredited home care serving Brooklyn, the Bronx, and Manhattan since {site.foundedYear}.
          </p>
          <a href={site.phoneHref} className="mt-4 inline-block text-sm font-semibold text-sky">
            {site.phone}
          </a>
        </div>

        {nav.slice(0, 3).map((section) => (
          <div key={section.label}>
            <div className="text-sm font-semibold uppercase tracking-wide text-paper/50">
              {section.label}
            </div>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href={section.href} className="text-sm text-paper/80 hover:text-sky">
                  {section.label} Overview
                </Link>
              </li>
              {section.children?.map((child) => (
                <li key={child.href}>
                  <Link href={child.href} className="text-sm text-paper/80 hover:text-sky">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-paper/50">
          <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-sky">Privacy Policy</Link>
            <Link href="/tos" className="hover:text-sky">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
