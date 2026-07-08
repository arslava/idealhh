import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import ContactForm from "@/components/ContactForm";
import { contactUsPage, site } from "@/lib/content";

export default function ContactUsPage() {
  const { hero, officeCards, prefooterCta } = contactUsPage;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16 lg:py-20">
          <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05] max-w-2xl">
            {hero.title.replace(hero.highlight, "")}
            <span className="text-accent">{hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">
            {hero.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-8">
        {officeCards.map((office) => (
          <div key={office.title} className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)]">
            <h2 className="font-display text-2xl font-semibold text-navy-800">{office.title}</h2>
            <p className="mt-3 text-grey-800">{office.address}</p>
            <p className="mt-2 text-grey-800">Phone: {site.phone}</p>
            <Button href={office.button.href} variant="outline" className="mt-6">
              {office.button.title}
            </Button>
          </div>
        ))}
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <h2 className="font-display text-3xl font-black text-navy-800 text-center">Send Us a Message</h2>
          <div className="mt-8 max-w-2xl mx-auto rounded-3xl bg-white shadow-[0_20px_40px_rgba(56,75,116,0.08)] p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
