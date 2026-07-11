import Image from "next/image";
import { Star } from "lucide-react";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { ruVisitingHomeNursePage } from "@/lib/content.ru";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < rating ? "fill-accent text-accent" : "text-navy-muted/30"} />
      ))}
    </div>
  );
}

export default function RuVisitingHomeNursePage() {
  const { hero, qualityCare, bullets, testimonials, prefooterCta } = ruVisitingHomeNursePage;
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="py-16 lg:py-20">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">{hero.label}</p>
            <h1 className="mt-4 font-display text-[2.8125rem] md:text-[4.0625rem] leading-[1.05]">{hero.title}</h1>
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

      <section className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-[49px] overflow-hidden aspect-[4/3] order-2 md:order-1">
          <Image src={qualityCare.image} alt={qualityCare.title} fill className="object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-800">{qualityCare.title}</h2>
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-semibold text-navy-700">{bullets.listTitle}</h3>
            <p className="mt-2 text-grey-800">{bullets.listDescription}</p>
            <ul className="mt-6 space-y-4 text-[1.375rem]">
              {bullets.items.map((item) => (
                <li key={item} className="flex gap-4 text-grey-800 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">Что говорят другие</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-3xl bg-white border border-navy-900/10 p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)] flex flex-col">
              <Stars rating={t.rating} />
              <p className="mt-4 text-[1.125rem] md:text-[1.375rem] text-grey-800 leading-relaxed flex-1">&ldquo;{t.content}&rdquo;</p>
              <div className="mt-4">
                <p className="font-semibold text-navy-800">{t.author}</p>
                <p className="text-sm text-navy-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
