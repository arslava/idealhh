import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { servicesPage, prefooterDefault } from "@/lib/content";

export default function ServicesPage() {
  const { hero, services, whyChoose } = servicesPage;

  return (
    <>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">Services</p>
          <h1 className="mt-4 max-w-2xl text-4xl md:text-5xl font-semibold leading-tight">
            {hero.title}
          </h1>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.title} className="rounded-3xl border border-navy/10 p-8 bg-white">
            <h2 className="text-2xl font-semibold text-navy leading-snug">{service.title}</h2>
            <p className="mt-4 text-ink/80 leading-relaxed">{service.description}</p>
            <Button href={service.button.href} variant="ghost" className="mt-6">
              {service.button.title}
            </Button>
          </div>
        ))}
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy">{whyChoose.title}</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {whyChoose.items.map((item) => (
              <span key={item} className="rounded-full bg-white border border-navy/10 px-5 py-2 text-sm text-ink/80">
                {item}
              </span>
            ))}
          </div>
          <Button href={whyChoose.button.href} className="mt-8">
            {whyChoose.button.title}
          </Button>
        </div>
      </section>

      <PrefooterCta {...prefooterDefault} />
    </>
  );
}
