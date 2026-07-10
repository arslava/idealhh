import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import { ruVisitingHomeNursePage } from "@/lib/content.ru";

export default function RuVisitingHomeNursePage() {
  const { hero, bullets } = ruVisitingHomeNursePage;
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="py-16 lg:py-20">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">{hero.label}</p>
            <h1 className="mt-4 font-display text-[2.8125rem] md:text-[4.0625rem] leading-[1.05]">{hero.title}</h1>
            <h2 className="mt-4 text-xl md:text-2xl text-white/90 font-semibold">{hero.subtitle}</h2>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">{hero.description}</p>
            <Button href="/ru/enroll-now" className="mt-8">Зарегистрироваться сейчас</Button>
          </div>
          <div className="relative min-h-[280px] h-full">
            <Image src={hero.image} alt={hero.title} fill className="object-cover rounded-t-[49px] lg:rounded-[49px]" />
          </div>
        </div>
      </section>
      <WaveDivider />
      <section className="mx-auto max-w-[1140px] px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
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
        <div className="relative rounded-[49px] overflow-hidden aspect-[4/3]">
          <Image src={bullets.image} alt={bullets.listTitle} fill className="object-cover" />
        </div>
      </section>
    </>
  );
}
