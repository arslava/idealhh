import Link from "next/link";
import Image from "next/image";
import { siteRu } from "@/lib/nav.ru";

// Real Russian page titles used as labels. Locations, Resources, and the
// legal pages (Privacy/ToS/Legal) never had Russian translations on the
// original site — those legal links point to the English versions rather
// than omitting them entirely (common practice: keep one authoritative
// legal-language version rather than none at all).
const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/IdealHH/", svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  )},
  { label: "X (Twitter)", href: "https://twitter.com/idealhh", svg: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231ZM17.083 19.77h1.833L7.084 4.126H5.117Z" />
    </svg>
  )},
  { label: "Instagram", href: "https://www.instagram.com/idealhomehealth/", svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )},
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ideal-home-health-inc-/", svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4V23h-4V8Zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4V8Z" />
    </svg>
  )},
];

const linkClass = "text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent";

export default function FooterRu() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-[1140px] px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Image src="/images/logo-white.svg" alt={siteRu.name} width={186} height={59} className="h-10 w-auto" />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Ideal Home Health: предоставляем элитные, эффективные и заботливые услуги по уходу на дому
            по всему Нью-Йорку с {siteRu.foundedYear} года. Ваше благополучие — наша миссия.
          </p>
          <div className="mt-5 flex gap-4">
            {socialLinks.map(({ label, href, svg }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/60 hover:text-accent transition-colors">
                {svg}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">О нас</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/ru/about-us" className={linkClass}>О нас</Link></li>
            <li><Link href="/ru/about-us/testimonials-reviews" className={linkClass}>Свидетельства и отзывы</Link></li>
            <li><Link href="/ru/careers/become-a-caregiver" className={linkClass}>Станьте сиделкой</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Обслуживание</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/ru/services" className={linkClass}>Обслуживание</Link></li>
            <li><Link href="/ru/services/home-health-aide" className={linkClass}>Помощники по уходу на дому</Link></li>
            <li><Link href="/ru/services/visiting-home-nurse" className={linkClass}>Медбратья и медсестра</Link></li>
            <li><Link href="/ru/enroll-now" className={linkClass}>Зарегистрироваться сейчас</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Связаться с нами</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/ru/contact-us" className={linkClass}>Свяжитесь с нами</Link></li>
            <li><Link href="/ru/how-to-enroll" className={linkClass}>Как зарегестрироваться</Link></li>
            {/* No Russian translation exists for these on the original site — linking to
                the English versions rather than omitting legal pages entirely. */}
            <li><Link href="/privacy-policy" className={linkClass}>Privacy Policy (EN)</Link></li>
            <li><Link href="/tos" className={linkClass}>Terms of Service (EN)</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1140px] px-4 py-6 text-xs text-white/50">
          &copy;{new Date().getFullYear()} IDEAL HOME HEALTH, Inc. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
