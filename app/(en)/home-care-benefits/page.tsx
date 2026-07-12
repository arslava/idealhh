import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { benefitsPage } from "@/lib/content";

export default function BenefitsPage() {
  const { hero, qualify, included, includedImage, extras, stepsImage, steps, whyChoose, locations, officeCards, quote, prefooterCta } = benefitsPage;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16 lg:py-20 text-center">
          <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">{hero.label}</p>
          <h1 className="mt-4 font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05] max-w-3xl mx-auto">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">
            {hero.description}
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {hero.badges.map((b) => (
              <div key={b.bold} className="rounded-2xl bg-white/10 p-5">
                <p className="font-display text-xl font-black text-accent">{b.bold}</p>
                <p className="mt-1 text-sm text-white/80">{b.normal}</p>
              </div>
            ))}
          </div>
          <Button href={hero.button.href} className="mt-8">{hero.button.title}</Button>
          <p className="mt-4 text-accent font-semibold">{hero.phone}</p>
          <div className="relative mt-10 mx-auto max-w-2xl aspect-[16/9] rounded-2xl overflow-hidden">
            <Image src={hero.image} alt={hero.title} fill className="object-cover" />
          </div>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-accent text-sm font-semibold uppercase tracking-wide">{qualify.cardTitle}</p>
          <h2 className="mt-3 font-display text-[2rem] md:text-[2.5rem] leading-[1.1] font-black text-navy-800">{qualify.heading}</h2>
          <p className="mt-4 text-[1.375rem] text-grey-800 leading-relaxed whitespace-pre-line">{qualify.description}</p>
          <Button href={qualify.button.href} className="mt-6">{qualify.button.title}</Button>
        </div>
        <div className="rounded-3xl bg-bg-light p-8">
          <ul className="space-y-4 text-[1.375rem]">
            {qualify.items.map((item) => (
              <li key={item} className="flex gap-3 text-grey-800 font-medium">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">{included.title}</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.items.map((item) => (
              <div key={item.title} className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)]">
                <div className="relative h-10 w-10 mb-4">
                  <Image src={item.icon} alt="" fill className="object-contain" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-800">{item.title}</h3>
                <p className="mt-2 text-sm text-grey-800 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href={included.button.href}>{included.button.title}</Button>
          </div>
        </div>
      </section>

      <div className="relative mx-auto max-w-[1140px] px-4">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden my-12">
          <Image src={includedImage} alt="" fill className="object-cover" />
        </div>
      </div>

      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">{extras.title}</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {extras.items.map((item) => (
            <div key={item.title} className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)] text-center">
              <div className="relative h-10 w-10 mx-auto mb-4">
                <Image src={item.icon} alt="" fill className="object-contain" />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-800">{item.title}</h3>
              <p className="mt-2 text-sm text-grey-800 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12">
            <Image src={stepsImage} alt="" fill className="object-cover" />
          </div>
          <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-center">{steps.title}</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {steps.items.map((step) => (
              <div key={step.number} className="flex gap-5">
                <span className="font-display text-2xl font-black text-accent shrink-0">{step.number}</span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-lg text-white/80 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href={steps.button.href} variant="secondary">{steps.button.title}</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">{whyChoose.title}</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.items.map((item) => (
            <div key={item.title} className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)] text-center">
              <div className="relative h-10 w-10 mx-auto mb-4">
                <Image src={item.icon} alt="" fill className="object-contain" />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-800">{item.title}</h3>
              <p className="mt-2 text-sm text-grey-800 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-navy-700/50 text-sm font-semibold tracking-[1px] uppercase">{locations.label}</p>
            <h2 className="mt-3 font-display text-[2rem] md:text-[2.5rem] leading-[1.1] font-black text-navy-800">{locations.title}</h2>
            <p className="mt-4 text-[1.125rem] text-grey-800 leading-relaxed">{locations.description}</p>
            <Button href={locations.button.href} className="mt-6">{locations.button.title}</Button>
          </div>
          <div className="relative aspect-square max-w-sm mx-auto">
            <Image src={locations.image} alt="" fill className="object-contain" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {officeCards.map((office) => (
            <div key={office.title} className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)]">
              <h3 className="font-display text-2xl font-black text-navy-800">{office.title}</h3>
              <p className="mt-1 text-sm text-navy-muted">{office.subtitle}</p>
              <p className="mt-4 text-grey-800 leading-relaxed">{office.address}</p>
              <p className="mt-2 text-grey-800">Phone: {office.phone}</p>
              <Button href={office.button.href} variant="outline" className="mt-6">{office.button.title}</Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[508/550] rounded-[49px] overflow-hidden order-2 md:order-1">
            <Image src={quote.image} alt="" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <p className="text-accent italic text-lg">{quote.label}</p>
            <h2 className="mt-3 font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">{quote.title}</h2>
            <p className="mt-4 text-[1.375rem] text-grey-800 leading-relaxed">{quote.description}</p>
          </div>
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
