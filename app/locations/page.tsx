import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { locationsIndexPage } from "@/lib/content";

export default function LocationsIndexPage() {
  const { hero, cards, prefooterCta } = locationsIndexPage;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-16 lg:py-20">
            <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05]">
              {hero.title.replace(hero.highlight, "")}
              <span className="text-accent">{hero.highlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">
              {hero.description}
            </p>
            <Button href={hero.button.href} variant="primary" className="mt-8 !bg-white">
              {hero.button.title}
            </Button>
          </div>
          <div className="relative h-[280px] lg:h-[420px]">
            <Image src={hero.image} alt="" fill className="object-contain" />
          </div>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-8">
        {cards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-navy-900/10 p-8 bg-white shadow-[0_20px_40px_rgba(56,75,116,0.08)]">
            <h2 className="font-display text-2xl font-semibold text-navy-800 leading-snug">{card.title}</h2>
            <p className="mt-4 text-[1.375rem] text-grey-800 leading-relaxed">{card.description}</p>
            <Button href={card.button.href} variant="outline" className="mt-6">
              {card.button.title}
            </Button>
          </div>
        ))}
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
