import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { servicesPage, prefooterDefault } from "@/lib/content";

export default function ServicesPage() {
  const { hero, services, whyChoose } = servicesPage;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Services</p>
          <h1 className="mt-4 max-w-2xl text-4xl md:text-5xl font-semibold leading-tight">
            {hero.title}
          </h1>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.title} className="rounded-3xl border border-navy-700/10 bg-white overflow-hidden">
            <div className="relative aspect-[16/9]">
              <Image src={service.image} alt={service.title} fill className="object-cover" />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-navy-700 leading-snug">{service.title}</h2>
              <p className="mt-4 text-grey-800/80 leading-relaxed">{service.description}</p>
              <Button href={service.button.href} variant="outline" className="mt-6">
                {service.button.title}
              </Button>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden bg-white aspect-[4/3]">
            <Image src={whyChoose.image} alt={whyChoose.title} fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy-700">{whyChoose.title}</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {whyChoose.items.map((item) => (
                <span key={item} className="rounded-full bg-white border border-navy-700/10 px-5 py-2 text-sm text-grey-800/80">
                  {item}
                </span>
              ))}
            </div>
            <Button href={whyChoose.button.href} className="mt-8">
              {whyChoose.button.title}
            </Button>
          </div>
        </div>
      </section>

      <PrefooterCta {...prefooterDefault} />
    </>
  );
}
