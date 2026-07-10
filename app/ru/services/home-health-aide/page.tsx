// @ts-nocheck
import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { ruHomeHealthAidePage, ruHomePage } from "@/lib/content.ru";

export default function HomeHealthAidePage() {
  const { hero, howTheyHelp } = ruHomeHealthAidePage;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Home Health Aides</p>
          <h1 className="mt-4 max-w-2xl font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05]">
            {hero.title.replace(hero.highlight, "")}
            <span className="italic text-accent">{hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">{hero.description}</p>
          <Button href="/ru/enroll-now" className="mt-8">Apply for Homecare</Button>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">{howTheyHelp.title}</h2>
          <ul className="mt-8 space-y-4 text-[1.375rem]">
            {howTheyHelp.items.map((item) => (
              <li key={item} className="flex gap-4 text-grey-800/85 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-3xl overflow-hidden bg-bg-light aspect-[4/3]">
          <Image src={howTheyHelp.image} alt={howTheyHelp.title} fill className="object-cover" />
        </div>
      </section>

      <PrefooterCta {...ruHomePage.prefooterCta} />
    </>
  );
}
