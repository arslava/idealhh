import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { ruHowToEnrollPage } from "@/lib/content.ru";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "howToEnroll",
  locale: "ru",
  title: "Как зарегистрироваться на уход на дому | Ideal Home Health",
  description: "Простой процесс регистрации на уход на дому с Ideal Home Health в Нью-Йорке: проверка Medicaid, оценка состояния и подбор помощника.",
});

export default function RuHowToEnrollPage() {
  const { hero, steps, bullets, prefooterCta } = ruHowToEnrollPage;
  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16 text-center">
          <h1 className="font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05] font-black text-navy-800 max-w-3xl mx-auto">{hero.title}</h1>
          <p className="mt-6 text-[1.125rem] md:text-[1.375rem] text-grey-800 leading-relaxed max-w-2xl mx-auto">{hero.description}</p>
          <Button href="/ru/enroll-now" className="mt-8">Зарегистрироваться сейчас</Button>
        </div>
      </section>
      <WaveDivider toColor="var(--color-white)" />
      <section className="mx-auto max-w-[1140px] px-4 py-20 space-y-8">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-6 items-start">
            <span className="font-display text-3xl font-black text-accent shrink-0">{step.number}</span>
            <div>
              <h3 className="font-display text-xl font-semibold text-navy-800">{step.title}</h3>
              <p className="mt-1 text-lg text-grey-800 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-20">
          <h2 className="font-display text-3xl font-black text-navy-800">{bullets.title}</h2>
          <p className="mt-4 text-[1.125rem] text-grey-800 leading-relaxed whitespace-pre-line">{bullets.description}</p>
          <h4 className="mt-8 text-xl font-semibold text-navy-700">{bullets.listTitle}</h4>
          <p className="mt-2 text-grey-800">{bullets.listDescription}</p>
          <ul className="mt-6 space-y-3 max-w-2xl text-[1.375rem]">
            {bullets.items.map((item) => (
              <li key={item} className="flex gap-3 text-grey-800 leading-relaxed">
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
