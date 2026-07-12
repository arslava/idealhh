import Image from "next/image";
import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import { zhHantAboutUsPage } from "@/lib/content.zh-hant";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "aboutUs",
  locale: "zhHant",
  title: "關於我們 | 理想居家健康：您值得信賴的紐約市居家照護機構",
  description: "了解理想居家健康照護的使命，致力於在紐約市提供充滿同理心的居家照護服務。我們是值得信賴的居家照護機構，自2013年起服務布魯克林、布朗克斯及曼哈頓地區。",
});

export default function ZhHantAboutUsPage() {
  const { hero, mission, areasServed, officeCards, languages, statistics, prefooterCta } = zhHantAboutUsPage;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="py-16 lg:py-20">
            <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05]">{hero.title}</h1>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {hero.buttons.map((btn, i) => (
                <Button key={btn.title} href={btn.href} variant={i === 0 ? "primary" : "secondary"}>
                  {btn.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px] h-full">
            <Image src={hero.image} alt={hero.title} fill priority className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-[49px] overflow-hidden aspect-[4/3]">
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
            {areasServed.description.split("\n\n").map((para) => (
              <p key={para} className="mt-4 text-[1.375rem] text-grey-800 leading-relaxed">{para}</p>
            ))}
            <Button href={areasServed.button.href} className="mt-6">{areasServed.button.title}</Button>
          </div>
          <div className="relative aspect-[863/854] max-w-md mx-auto">
            <Image src={areasServed.image} alt="" fill className="object-contain" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-16 grid sm:grid-cols-2 gap-6">
        {officeCards.map((office) => (
          <div key={office.title} className="rounded-3xl bg-white border border-navy-900/10 p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)]">
            <h3 className="font-display text-2xl font-black text-navy-800">{office.title}</h3>
            <p className="mt-1 text-sm text-navy-muted">{office.subtitle}</p>
            <p className="mt-4 text-grey-800 leading-relaxed">{office.address}</p>
            <p className="mt-2 text-grey-800">{office.phone}</p>
            <Button href={office.button.href} className="mt-6" variant="outline">{office.button.title}</Button>
          </div>
        ))}
      </section>

      {/* Language slider — source has 4 slides (EN/RU/ES/ZH-Hant), the
          zh-hant slide is genuinely in Traditional Chinese on this page —
          see note in content.zh-hant.ts. */}
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {languages.map((lang) => (
              <div key={lang.title}>
                <h2 className="font-display text-2xl md:text-3xl font-black">{lang.title}</h2>
                <p className="mt-3 text-white/80 leading-relaxed">{lang.description}</p>
                <Button href={lang.button.href} variant="secondary" className="mt-5">{lang.button.title}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {statistics.map((s) => (
          <div key={s.topTitle + s.featureText} className="text-center">
            <p className="text-accent text-sm font-semibold uppercase tracking-wide">{s.topTitle}</p>
            <p className="mt-3 font-display text-2xl font-black text-navy-800">{s.featureTopText}</p>
            <p className="mt-1 text-lg font-semibold text-navy-700">{s.featureText}</p>
            <p className="mt-2 text-sm text-grey-800 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
