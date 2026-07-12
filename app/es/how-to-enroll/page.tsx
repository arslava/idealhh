import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { esHowToEnrollPage } from "@/lib/content.es";

export default function EsHowToEnrollPage() {
  const { hero, steps, bullets, prefooterCta } = esHowToEnrollPage;

  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16 text-center">
          <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05] text-navy-900">
            {hero.title}
          </h1>
          <p className="mt-6 text-[1.125rem] md:text-[1.375rem] text-grey-800 leading-relaxed max-w-2xl mx-auto">
            {hero.description}
          </p>
          <Button href={hero.button.href} className="mt-8">{hero.button.title}</Button>
        </div>
      </section>
      <WaveDivider toColor="var(--color-white)" />

      <section className="mx-auto max-w-[1140px] px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              <span className="font-display text-3xl font-black text-accent shrink-0">{step.number}</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy-800">{step.title}</h3>
                <p className="mt-1 text-lg text-grey-800 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative rounded-[49px] overflow-hidden aspect-[4/3]">
          <Image src={hero.image} alt={hero.title} fill className="object-cover" />
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-[49px] overflow-hidden aspect-[4/3] order-2 md:order-1">
            <Image src={bullets.image} alt={bullets.title} fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">
              {bullets.title}
            </h2>
            <h3 className="mt-4 text-xl text-navy-700 font-semibold">{bullets.subtitle}</h3>
            <p className="mt-2 text-[1.375rem] text-grey-800">{bullets.description}</p>
            <h4 className="mt-8 text-xl font-semibold text-navy-700">{bullets.listTitle}</h4>
            <p className="mt-2 text-[1.375rem] text-grey-800">{bullets.listDescription}</p>
            <ul className="mt-6 space-y-3 max-w-2xl text-[1.375rem]">
              {bullets.items.map((item) => (
                <li key={item} className="flex gap-3 text-grey-800 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
