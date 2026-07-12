import Link from "next/link";
import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import { resourcesIndexPage } from "@/lib/content";

export default function ResourcesIndexPage() {
  const { hero, patientResources, caregiverResources, prefooterCta } = resourcesIndexPage;

  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16 text-center">
          <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05] font-black text-navy-800">{hero.title}</h1>
          <h2 className="mt-3 text-xl md:text-2xl text-navy-700 font-semibold">{hero.subtitle}</h2>
          <p className="mt-4 text-[1.125rem] md:text-[1.375rem] text-grey-800 leading-relaxed max-w-2xl mx-auto">{hero.description}</p>
          <Button href={hero.button.href} className="mt-6">{hero.button.title}</Button>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <h2 className="font-display text-3xl md:text-4xl font-black text-navy-800 text-center">{patientResources.sectionTitle}</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {patientResources.cards.map((card) => (
            <div key={card.title} className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)]">
              <h3 className="font-display text-xl font-semibold text-navy-800">{card.title}</h3>
              <p className="mt-3 text-sm text-grey-800 leading-relaxed">{card.description}</p>
              <Button href={card.button.href} variant="outline" className="mt-4 !min-w-0 !px-5 !py-2 text-sm">{card.button.title}</Button>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-grey-800">
          {patientResources.note.prefix}
          <Link href={patientResources.note.href} className="text-accent underline font-semibold">{patientResources.note.label}</Link>
          {patientResources.note.suffix}
        </p>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <h2 className="font-display text-3xl md:text-4xl font-black text-navy-800 text-center">{caregiverResources.sectionTitle}</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {caregiverResources.cards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)]">
                <h3 className="font-display text-xl font-semibold text-navy-800">{card.title}</h3>
                <p className="mt-3 text-sm text-grey-800 leading-relaxed">{card.description}</p>
                <Button href={card.button.href} variant="outline" className="mt-4 !min-w-0 !px-5 !py-2 text-sm">{card.button.title}</Button>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-grey-800">
            {caregiverResources.note.prefix}
            <Link href={caregiverResources.note.href} className="text-accent underline font-semibold">{caregiverResources.note.label}</Link>
            {caregiverResources.note.suffix}
          </p>
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
