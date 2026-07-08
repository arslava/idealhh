import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { benefitsPage, locationCards } from "@/lib/content";

export default function BenefitsPage() {
  const { hero, qualify, included, extras, steps, whyChoose, quote, prefooterCta } = benefitsPage;

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
        </div>
      </section>
      <WaveDivider />

      {/* Qualify checklist */}
      <section className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-accent text-sm font-semibold uppercase tracking-wide">{qualify.cardTitle}</p>
          <h2 className="mt-3 font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">{qualify.heading}</h2>
          <p className="mt-4 text-[1.375rem] text-grey-800 leading-relaxed">{qualify.description}</p>
          <Button href={qualify.button.href} className="mt-6">{qualify.button.title}</Button>
        </div>
        <div className="rounded-3xl bg-bg-light p-8">
          <ul className="space-y-4">
            {qualify.items.map((item) => (
              <li key={item} className="flex gap-3 text-grey-800 font-medium">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">{included.title}</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.items.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(56,75,116,0.06)]">
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

      {/* Extra benefits */}
      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">{extras.title}</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {extras.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-navy-900/10 p-6 text-center">
              <h3 className="font-display text-lg font-semibold text-navy-800">{item.title}</h3>
              <p className="mt-2 text-sm text-grey-800 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-center">{steps.title}</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {steps.items.map((step) => (
              <div key={step.number} className="flex gap-5">
                <span className="font-display text-2xl font-black text-accent shrink-0">{step.number}</span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-white/80 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href={steps.button.href} variant="secondary">{steps.button.title}</Button>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">{whyChoose.title}</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.items.map((item) => (
            <div key={item.title} className="rounded-2xl bg-bg-light p-6 text-center">
              <h3 className="font-display text-lg font-semibold text-navy-800">{item.title}</h3>
              <p className="mt-2 text-sm text-grey-800 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[700px] px-4 py-16 text-center">
          <p className="text-accent italic text-lg">{quote.label}</p>
          <h2 className="mt-3 font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">{quote.title}</h2>
          <p className="mt-4 text-[1.375rem] text-grey-800 leading-relaxed">{quote.description}</p>
        </div>
      </section>

      {/* Locations */}
      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">Home Care Services Across New York City</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {locationCards.map((loc) => (
            <div key={loc.name} className="rounded-2xl border border-navy-900/10 p-6 text-center">
              <h3 className="font-display text-xl font-semibold text-navy-800">{loc.name}</h3>
              <p className="mt-2 text-sm text-navy-muted">{loc.address}</p>
              <Button href={loc.button.href} variant="outline" className="mt-4 !min-w-0 !px-5 !py-2 text-sm">
                {loc.button.title}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
