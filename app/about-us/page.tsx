import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { aboutUsPage } from "@/lib/content";

export default function AboutUsPage() {
  const { hero, mission, areasServed, prefooterCta } = aboutUsPage;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-16 lg:py-20">
            <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05]">{hero.title}</h1>
            <h2 className="mt-4 text-xl md:text-2xl text-accent font-semibold">{hero.subtitle}</h2>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {hero.buttons.map((btn, i) => (
                <Button key={btn.title} href={btn.href} variant={i === 0 ? "primary" : "secondary"} className="">
                  {btn.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="relative h-[280px] lg:h-[480px]">
            <Image src={hero.image} alt={hero.title} fill className="object-cover rounded-t-3xl lg:rounded-3xl" />
          </div>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-[1140px] px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
          <Image src={mission.image} alt={mission.title} fill className="object-cover" />
        </div>
        <div>
          <p className="text-navy-700/50 text-sm font-semibold tracking-[1px] uppercase">{mission.label}</p>
          <h2 className="mt-3 font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">{mission.title}</h2>
          <p className="mt-4 text-[1.375rem] text-grey-800 leading-relaxed">{mission.description}</p>
          <Button href={mission.button.href} className="mt-8">{mission.button.title}</Button>
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-navy-700/50 text-sm font-semibold tracking-[1px] uppercase">{areasServed.label}</p>
            <h2 className="mt-3 font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">{areasServed.title}</h2>
            <p className="mt-4 text-[1.375rem] text-grey-800 leading-relaxed">{areasServed.description}</p>
          </div>
          <div className="relative aspect-[863/854] max-w-md mx-auto">
            <Image src={areasServed.image} alt="" fill className="object-contain" />
          </div>
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
