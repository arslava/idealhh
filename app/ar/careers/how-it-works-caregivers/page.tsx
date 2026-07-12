import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { arBecomeCaregiverPage } from "@/lib/content.ar";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "becomeACaregiver",
  locale: "ar",
  title: "كن مقدم رعاية مع Ideal Home Health | نيويورك",
  description: "تعرف على كيفية التقديم للعمل كمساعد صحي منزلي مع Ideal Home Health: عملية التقديم والتحقق من الخلفية ومطابقتك مع المريض المناسب.",
});

export default function ArBecomeCaregiverPage() {
  const { hero, steps, stepsImage, gettingStarted, prefooterCta } = arBecomeCaregiverPage;

  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16 lg:py-20 text-center">
          <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05] max-w-3xl mx-auto text-navy-900">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-[1.125rem] md:text-[1.375rem] text-grey-800 leading-relaxed">
            {hero.description}
          </p>
          <Button href={hero.button.href} className="mt-8">{hero.button.title}</Button>
        </div>
      </section>
      <WaveDivider toColor="var(--color-white)" />

      <section className="mx-auto max-w-[1140px] px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-[49px] overflow-hidden aspect-[4/3] order-2 lg:order-1">
          <Image src={stepsImage} alt="عملية طلب التوظيف لمقدمي الرعاية" fill className="object-cover" />
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-5">
              <span className="font-display text-3xl font-black text-accent shrink-0" dir="ltr">{step.number}</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy-800">{step.title}</h3>
                <p className="mt-1 text-lg text-grey-800 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-[49px] overflow-hidden aspect-[4/3]">
            <Image src={gettingStarted.image} alt={gettingStarted.title} fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">
              {gettingStarted.title}
            </h2>
            <h3 className="mt-2 text-lg font-semibold text-navy-600">{gettingStarted.subtitle}</h3>
            <p className="mt-3 text-[1.375rem] text-grey-800">{gettingStarted.description}</p>
            <h3 className="mt-6 text-xl font-semibold text-navy-700">{gettingStarted.listTitle}</h3>
            <p className="mt-2 text-[1.375rem] text-grey-800">{gettingStarted.listDescription}</p>
            <ul className="mt-4 space-y-3">
              {gettingStarted.items.map((item) => (
                <li key={item} className="flex gap-3 text-grey-800 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
