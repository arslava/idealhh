import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import EnrollNowFormZhHant from "@/components/EnrollNowFormZhHant";
import ReviewsCarouselZhHant from "@/components/ReviewsCarouselZhHant";
import { zhHantEnrollNowPage } from "@/lib/content.zh-hant";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "enrollNow",
  locale: "zhHant",
  title: "立即報名 | 紐約市居家照護 | Ideal Home Health",
  description: "了解您或家人是否符合 Medicaid 或 Medicare 承保的居家照護資格，並立即向紐約市的 Ideal Home Health 報名。",
});

export default function ZhHantEnrollNowPage() {
  const { heroTitle, patientSection, caregiverSection, formSection, prefooterCta } = zhHantEnrollNowPage;
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
            <div className="md:w-1/2">
              <h1 className="font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05] font-black">{heroTitle}</h1>

              <p className="mt-6 text-[1.125rem] font-semibold text-white/90">{patientSection.label}</p>
              <div className="mt-2 space-y-2">
                {patientSection.questions.map((q) => (
                  <p key={q} className="text-[1.125rem] text-white/85">— {q}</p>
                ))}
              </div>

              <p className="mt-6 text-[1.125rem] font-semibold text-white/90">{caregiverSection.label}</p>
              <div className="mt-2 space-y-2">
                {caregiverSection.questions.map((q) => (
                  <p key={q} className="text-[1.125rem] text-white/85">— {q}</p>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-[510px] rounded-[10px] bg-white shadow-[0_20px_40px_rgba(56,75,116,0.1)] p-11 text-left">
                <h3 className="font-display text-2xl font-semibold text-navy-800 text-center">{formSection.title}</h3>
                <p className="mt-2 text-sm text-accent text-center font-semibold">{formSection.note}</p>
                <div className="mt-4 flex justify-center flex-wrap gap-4">
                  <Button href={formSection.caregiverButton.href} variant="secondary">
                    {formSection.caregiverButton.title}
                  </Button>
                </div>
                <div className="mt-6"><EnrollNowFormZhHant /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsCarouselZhHant />

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
