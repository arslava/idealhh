import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { ruHomeHealthAidePage } from "@/lib/content.ru";

export default function RuHomeHealthAidePage() {
  const { hero, gettingCare, howTheyHelp, prefooterCta } = ruHomeHealthAidePage;
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
          <Image src={gettingCare.image} alt={gettingCare.title} fill className="object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-800">
            {gettingCare.title.replace(gettingCare.highlight, "")}<span className="text-accent">{gettingCare.highlight}</span>
          </h2>
          <p className="mt-4 text-[1.125rem] text-grey-800 leading-relaxed">{gettingCare.description}</p>
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <h2 className="font-display text-3xl font-semibold text-navy-800">{howTheyHelp.title}</h2>
          <p className="mt-4 text-[1.125rem] text-grey-800">{howTheyHelp.description}</p>
          <ul className="mt-8 space-y-4 text-[1.375rem] max-w-2xl">
            {howTheyHelp.items.map((item) => (
              <li key={item} className="flex gap-4 text-grey-800 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
