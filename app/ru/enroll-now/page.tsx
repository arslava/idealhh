// @ts-nocheck
import Link from "next/link";
import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import EnrollNowFormRu from "@/components/EnrollNowFormRu";
import ReviewsCarouselRu from "@/components/ReviewsCarouselRu";
import { ruEnrollNowPage } from "@/lib/content.ru";

export default function EnrollNowPage() {
  const { hero, patientSection, caregiverSection, formSection, prefooterCta } = ruEnrollNowPage;

  return (
    <>
      {/* Real page (.s-hero-contact): two Bootstrap col-lg-6 columns in one
          navy section. Text column left / form column right on desktop.
          On mobile the columns reverse (form shows first, flex-column-reverse). */}
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
            {/* Text column */}
            <div className="md:w-1/2">
              <h1 className="font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05] font-black">
                {hero.title}
              </h1>

              <h2 className="mt-8 font-display text-[2.375rem] leading-[1.1] font-black">
                {patientSection.title}
              </h2>
              
              <div className="mt-4 space-y-2">
                {patientSection.questions.map((q) => (
                  <p key={q} className="text-[1.125rem] text-white/90">— {q}</p>
                ))}
              </div>
              <p className="mt-4">
                
              </p>

              <h2 className="mt-10 font-display text-[2.375rem] leading-[1.1] font-black">
                {caregiverSection.title}
              </h2>
              <p className="mt-4 text-[1.125rem] text-white/90 leading-relaxed"></p>
              <div className="mt-4 space-y-2">
                {caregiverSection.questions.map((q) => (
                  <p key={q} className="text-[1.125rem] text-white/90">— {q}</p>
                ))}
              </div>
            </div>

            {/* Form column — white card, centered in its column, matches
                real .c-form { max-width:510px; border-radius:10px; padding:44px 20px } */}
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-[510px] rounded-[10px] bg-white shadow-[0_20px_40px_rgba(56,75,116,0.1)] p-11 text-left">
                <h3 className="font-display text-2xl font-semibold text-navy-800 text-center">
                  {formSection.title}
                </h3>
                
                <div className="mt-4 flex justify-center flex-wrap gap-4">
                  
                </div>
                <div className="mt-6">
                  <EnrollNowFormRu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsCarouselRu />

      <PrefooterCta {...prefooterCta} /><br />
            Know more about{" "}
            <Link href={patientSection.link.href} className="text-white underline">
              enrolling as a patient.
            </Link>
          </>
        }
      />
    </>
  );
}
