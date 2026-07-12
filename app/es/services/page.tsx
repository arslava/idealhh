import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { esServicesPage } from "@/lib/content.es";

export default function EsServicesPage() {
  const { hero, services, whyChoose, prefooterCta } = esServicesPage;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="py-16 lg:py-20">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Servicio</p>
            <h1 className="mt-4 font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05]">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={hero.primaryButton.href} variant="primary">{hero.primaryButton.title}</Button>
              <Button href={hero.secondaryButton.href} variant="secondary">{hero.secondaryButton.title}</Button>
            </div>
          </div>
          <div className="relative min-h-[280px] h-full">
            <Image src={hero.image} alt={hero.title} fill className="object-cover rounded-t-[49px] lg:rounded-[49px]" />
          </div>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-8 items-stretch">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col h-full rounded-3xl border border-navy-900/10 bg-white shadow-[0_20px_40px_rgba(56,75,116,0.08)] overflow-hidden">
            <div className="relative aspect-[16/9]">
              <Image src={service.image} alt={service.title} fill className="object-cover" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h2 className="font-display text-2xl font-semibold text-navy-800 leading-snug">{service.title}</h2>
              <p className="mt-4 text-[1.125rem] md:text-[1.375rem] text-grey-800 leading-relaxed flex-1">{service.description}</p>
              <Button href={service.button.href} variant="outline" className="mt-6 self-start">
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
            <h2 className="text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-700">{whyChoose.title}</h2>
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

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
