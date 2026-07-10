import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { ruServicesPage } from "@/lib/content.ru";

export default function RuServicesPage() {
  const { hero, services, whyChoose } = ruServicesPage;
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16 lg:py-20">
          <h1 className="font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05] max-w-2xl">{hero.title}</h1>
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
              <Button href={service.button.href} variant="outline" className="mt-6 self-start">{service.button.title}</Button>
            </div>
          </div>
        ))}
      </section>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-[49px] overflow-hidden aspect-[4/3]">
            <Image src={whyChoose.image} alt={whyChoose.title} fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-800">{whyChoose.title}</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {whyChoose.items.map((item) => (
                <span key={item} className="rounded-full bg-white border border-navy-900/10 px-5 py-2 text-sm text-grey-800">{item}</span>
              ))}
            </div>
            <Button href={whyChoose.button.href} className="mt-8">{whyChoose.button.title}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
