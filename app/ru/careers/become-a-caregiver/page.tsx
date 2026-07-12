import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { ruBecomeCaregiverPage } from "@/lib/content.ru";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "becomeACaregiver",
  locale: "ru",
  title: "Станьте сиделкой в Ideal Home Health | Нью-Йорк",
  description: "Узнайте, как подать заявку на работу сиделкой в Ideal Home Health: процесс подачи заявки, проверка биографии и подбор пациента.",
});

export default function RuBecomeCaregiverPage() {
  const { hero, steps, intro, gettingStarted, prefooterCta } = ruBecomeCaregiverPage;
  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16 lg:py-20 text-center">
          <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] leading-[1.05] max-w-3xl mx-auto text-navy-900">{hero.title}</h1>
          <p className="mt-6 max-w-2xl mx-auto text-[1.125rem] md:text-[1.375rem] text-grey-800 leading-relaxed">{hero.description}</p>
          <Button href={hero.button.href} className="mt-8">{hero.button.title}</Button>
        </div>
      </section>
      <WaveDivider toColor="var(--color-white)" />
      <section className="mx-auto max-w-[1140px] px-4 py-20 space-y-8">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-5">
            <span className="font-display text-3xl font-black text-accent shrink-0">{step.number}</span>
            <div>
              <h3 className="font-display text-xl font-semibold text-navy-800">{step.title}</h3>
              <p className="mt-1 text-grey-800 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-800">{intro.title}</h2>
        <p className="mt-4 text-[1.125rem] text-grey-800 leading-relaxed whitespace-pre-line">{intro.description}</p>
      </section>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-20">
          <h3 className="text-xl font-semibold text-navy-700">{gettingStarted.listTitle}</h3>
          <p className="mt-2 text-grey-800">{gettingStarted.listDescription}</p>
          <ul className="mt-6 space-y-3 text-[1.375rem]">
            {gettingStarted.items.map((item) => (
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
