import Link from "next/link";
import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import ContactForm from "@/components/ContactForm";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { contactUsPage } from "@/lib/content";

export default function ContactUsPage() {
  const { hero, officeCards, prefooterCta } = contactUsPage;

  return (
    <>
      {/* Real page (.s-hero-contact): two Bootstrap col-lg-6 columns in one
          navy section. Text left / form right on desktop, reversed on
          mobile (form shows first). */}
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
            {/* Text column */}
            <div className="md:w-1/2">
              <h1 className="font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05] font-black">
                {hero.title.replace(hero.highlight, "")}
                <span className="font-black">{hero.highlight}</span>
              </h1>

              <div className="mt-6 space-y-4">
                {hero.paragraphs.map((p, i) => (
                  <p key={i} className="text-[1.125rem] text-white/90 leading-relaxed">{p}</p>
                ))}
                {hero.links.map((l) => (
                  <p key={l.href} className="text-[1.125rem] text-white/90 leading-relaxed">
                    {l.prefix}
                    <Link href={l.href} className="text-accent font-semibold underline">
                      {l.label}
                    </Link>
                  </p>
                ))}
              </div>
            </div>

            {/* Form column — white card, centered in its column */}
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-[510px] rounded-[10px] bg-white shadow-[0_20px_40px_rgba(56,75,116,0.1)] p-11 text-left">
                <h2 className="font-display text-2xl font-semibold text-navy-800 text-center">Send Us a Message</h2>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      {/* Location cards — real page has Brooklyn/Bronx cards here too */}
      <section className="bg-bg-light py-16">
        <div className="mx-auto max-w-2xl px-4 grid sm:grid-cols-2 gap-6">
          {officeCards.map((office) => (
            <div key={office.title} className="rounded-3xl border border-navy-900/10 bg-white p-8 text-center shadow-[0_20px_40px_rgba(56,75,116,0.08)] flex flex-col items-center">
              <h3 className="font-display text-[1.875rem] font-black text-navy-800">{office.title}</h3>
              <p className="mt-1 text-sm text-navy-muted">{office.subtitle}</p>
              <p className="mt-3 text-[1.125rem] text-navy-muted leading-relaxed">{office.address}</p>
              <p className="mt-1 text-sm text-navy-muted">Phone: {office.phone}</p>
              <Button href={office.button.href} variant="outline" className="mt-6">
                {office.button.title}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
