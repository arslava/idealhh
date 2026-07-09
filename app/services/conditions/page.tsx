import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { conditionsPage } from "@/lib/content";

export default function ConditionsPage() {
  const { hero, sectionTitle, cards, prefooterCta } = conditionsPage;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-16 lg:py-20">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">{hero.label}</p>
            <h1 className="mt-4 font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05]">
              {hero.title.replace(hero.highlight, "")}
              <span className="text-accent">{hero.highlight}</span>
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-white/90 font-semibold">{hero.subtitle}</h2>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {hero.buttons.map((btn, i) => (
                <Button key={btn.title} href={btn.href} variant={i === 0 ? "primary" : "secondary"} className={i === 0 ? "!bg-white" : ""}>
                  {btn.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="relative h-[280px] lg:h-[420px]">
            <Image src={hero.image} alt={hero.title} fill className="object-cover rounded-t-3xl lg:rounded-3xl" />
          </div>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">{sectionTitle}</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.slug} className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)]">
              <h3 className="font-display text-2xl font-semibold text-navy-800">{card.title}</h3>
              <p className="mt-2 text-sm text-grey-800 leading-relaxed">{card.description}</p>
              <Button href={`/services/conditions/${card.slug}`} variant="outline" className="mt-4 !min-w-0 !px-5 !py-2 text-sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
