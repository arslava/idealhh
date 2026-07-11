import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { ruConditionsPage } from "@/lib/content.ru";

export default function RuConditionsPage() {
  const { hero, cards, prefooterCta } = ruConditionsPage;
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="py-16 lg:py-20">
            <h1 className="font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05]">{hero.title}</h1>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">{hero.description}</p>
          </div>
          <div className="relative min-h-[280px] h-full">
            <Image src={hero.image} alt={hero.title} fill className="object-cover rounded-t-[49px] lg:rounded-[49px]" />
          </div>
        </div>
      </section>
      <WaveDivider />
      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.slug} className="rounded-2xl border border-navy-900/10 p-6 bg-white shadow-[0_20px_40px_rgba(56,75,116,0.06)]">
              <h3 className="font-display text-2xl font-semibold text-navy-800">{card.title}</h3>
              <p className="mt-2 text-sm text-grey-800 leading-relaxed">{card.description}</p>
              <Button href={`/ru/services/conditions/${card.slug}`} variant="outline" className="mt-4 !min-w-0 !px-5 !py-2 text-sm">Узнайте больше</Button>
            </div>
          ))}
        </div>
      </section>
      <PrefooterCta {...prefooterCta} />
    </>
  );
}
