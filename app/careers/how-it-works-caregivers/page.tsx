import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { becomeCaregiverPage } from "@/lib/content";

export default function BecomeCaregiverPage() {
  const { hero, steps, stepsImage, gettingStarted, prefooterCta } = becomeCaregiverPage;

  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16 lg:py-20 text-center">
          <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] leading-[1.05] max-w-3xl mx-auto text-navy-900">
            {hero.title.replace(hero.highlight, "")}
            <span className="text-accent">{hero.highlight}</span>
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl text-navy-700 font-semibold">{hero.subtitle}</h2>
          <p className="mt-6 max-w-2xl mx-auto text-[1.125rem] md:text-[1.375rem] text-grey-800 leading-relaxed">
            {hero.description}
          </p>
          <Button href={hero.button.href} className="mt-8">{hero.button.title}</Button>
        </div>
      </section>
      <WaveDivider toColor="var(--color-white)" />

      {/* Steps — real sequence, numbering carries meaning here */}
      <section className="mx-auto max-w-[1140px] px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] order-2 lg:order-1">
          <Image src={stepsImage} alt="Caregiver application process" fill className="object-cover" />
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-5">
              <span className="font-display text-3xl font-black text-accent shrink-0">{step.number}</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy-800">{step.title}</h3>
                <p className="mt-1 text-grey-800 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image src={gettingStarted.image} alt={gettingStarted.title} fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-navy-800">
              {gettingStarted.title.replace(gettingStarted.highlight, "")}
              <span className="text-accent">{gettingStarted.highlight}</span>
            </h2>
            <p className="mt-3 text-grey-800">{gettingStarted.description}</p>
            <h3 className="mt-6 text-xl font-semibold text-navy-700">{gettingStarted.listTitle}</h3>
            <p className="mt-2 text-grey-800">{gettingStarted.listDescription}</p>
          </div>
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
