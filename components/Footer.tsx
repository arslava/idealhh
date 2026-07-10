import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/content";

// lucide-react's current version doesn't ship brand/logo icons (Facebook,
// Twitter, Instagram, LinkedIn were removed from the library), so these are
// simple inline SVGs instead. Social links pulled from the real site's
// footer icon row.
const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/IdealHH/",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/idealhh",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231ZM17.083 19.77h1.833L7.084 4.126H5.117Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/idealhomehealth/",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ideal-home-health-inc-/",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4V23h-4V8Zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4V8Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-[1140px] px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Image src="/images/logo-white.svg" alt={site.name} width={186} height={59} className="h-10 w-auto" />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Delivering elite, efficient, and compassionate home care services across New York City
            since {site.foundedYear}. Your well-being, our mission.
          </p>
          <div className="mt-5 flex gap-4">
            {socialLinks.map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/60 hover:text-accent transition-colors"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">About Us</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about-us" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">About Us</Link></li>
            <li><Link href="/about-us/testimonials-reviews" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Testimonials &amp; Reviews</Link></li>
            <li><Link href="/careers/how-it-works-caregivers" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Join Our Team</Link></li>
            <li><Link href="/blog" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/services" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Services</Link></li>
            <li><Link href="/locations" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Locations</Link></li>
            <li><Link href="/services/conditions" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Conditions</Link></li>
            <li><Link href="/enroll-now" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Patient Enrollment</Link></li>
            <li><Link href="/careers/#qualifyenroll" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Enroll as a Caregiver</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Get in Touch</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/resources" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Resources</Link></li>
            <li><Link href="/enroll-now" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Enroll Now</Link></li>
            <li><Link href="/contact-us" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Privacy Policy</Link></li>
            <li><Link href="/tos" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Terms of Service</Link></li>
            <li><Link href="/legal" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Legal</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1140px] px-4 py-6 text-xs text-white/50">
          &copy;{new Date().getFullYear()} {site.name.toUpperCase()}, Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
