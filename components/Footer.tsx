import Link from "next/link";
import { site } from "@/lib/content";

// Matches the real footer's 4-column structure: logo/blurb, About Us,
// Services, Get in Touch — not the generic 3-column layout used before.
export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-[1140px] px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-xl font-semibold">{site.name}</div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Delivering elite, efficient, and compassionate home care services across New York City
            since {site.foundedYear}. Your well-being, our mission.
          </p>
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
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Get in Touch</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/resources" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Resources</Link></li>
            <li><Link href="/contact-us" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Privacy Policy</Link></li>
            <li><Link href="/tos" className="text-[1.375rem] font-normal text-white/70 underline decoration-white/20 hover:text-accent hover:decoration-accent">Terms of Service</Link></li>
          </ul>
          <a href={site.phoneHref} className="mt-4 inline-block text-sm font-semibold text-accent">
            {site.phone}
          </a>
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
