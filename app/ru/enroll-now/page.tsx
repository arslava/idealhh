import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import EnrollNowFormRu from "@/components/EnrollNowFormRu";
import ReviewsCarouselRu from "@/components/ReviewsCarouselRu";
import { ruEnrollNowPage } from "@/lib/content.ru";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "enrollNow",
  locale: "ru",
  title: "Зарегистрируйтесь сегодня | Ideal Home Health",
  description: "Узнайте, имеете ли вы или ваш близкий право на уход на дому по программам Medicaid или Medicare, и зарегистрируйтесь сегодня с Ideal Home Health.",
});

export default function RuEnrollNowPage() {
  const { hero, qualifyTitle, patientSection, caregiverSection, formSection, prefooterCta } = ruEnrollNowPage;
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
            <div className="md:w-1/2">
              <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">{hero.label}</p>
              <h1 className="mt-4 font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05] font-black">
                {hero.title.replace(hero.highlight, "")}<span className="text-accent">{hero.highlight}</span>
              </h1>
              <h2 className="mt-4 text-xl font-semibold text-white/90">{hero.subheading}</h2>
              <p className="mt-4 text-[1.125rem] text-white/85 leading-relaxed">{hero.description}</p>
              <p className="mt-4 text-accent font-semibold">{hero.phone}</p>

              <h2 className="mt-12 font-display text-[2rem] leading-[1.1] font-black">{qualifyTitle}</h2>

              <p className="mt-6 text-[1.125rem] font-semibold text-white/90">{patientSection.subtitle}</p>
              <div className="mt-2 space-y-2">
                {patientSection.questions.map((q) => (<p key={q} className="text-[1.125rem] text-white/85">— {q}</p>))}
              </div>

              <p className="mt-6 text-[1.125rem] font-semibold text-white/90">{caregiverSection.subtitle}</p>
              <div className="mt-2 space-y-2">
                {caregiverSection.questions.map((q) => (<p key={q} className="text-[1.125rem] text-white/85">— {q}</p>))}
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-[510px] rounded-[10px] bg-white shadow-[0_20px_40px_rgba(56,75,116,0.1)] p-11 text-left">
                <h3 className="font-display text-2xl font-semibold text-navy-800 text-center">{formSection.title}</h3>
                <div className="mt-6"><EnrollNowFormRu /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReviewsCarouselRu />
      <PrefooterCta {...prefooterCta} />
    </>
  );
}
