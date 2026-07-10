import Link from "next/link";
import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import EnrollNowFormRu from "@/components/EnrollNowFormRu";
import ReviewsCarouselRu from "@/components/ReviewsCarouselRu";
import { ruEnrollNowPage } from "@/lib/content.ru";

export default function RuEnrollNowPage() {
 const {hero,patientSection,caregiverSection,formSection,prefooterCta}=ruEnrollNowPage;
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <h1 className="font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05] font-black max-w-3xl">{hero.title}</h1>
          <div className="mt-12 grid lg:grid-cols-[1fr_420px] gap-10">
            <div>
              <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.1] font-black">{patientSection.title}</h2>
              <p className="mt-4 text-[1.125rem] text-white/85">{patientSection.subtitle}</p>
              <div className="mt-4 space-y-2">
                {patientSection.questions.map((q) => (<p key={q} className="text-[1.125rem] text-white/85">— {q}</p>))}
              </div>
              <h2 className="mt-12 font-display text-[2rem] md:text-[2.5rem] leading-[1.1] font-black">{caregiverSection.title}</h2>
              <p className="mt-4 text-[1.125rem] text-white/85">{caregiverSection.subtitle}</p>
              <div className="mt-4 space-y-2">
                {caregiverSection.questions.map((q) => (<p key={q} className="text-[1.125rem] text-white/85">— {q}</p>))}
 </div>
            </div>
            <div className="rounded-[10px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] p-8 text-left lg:self-start">
              <h3 className="font-display text-2xl font-semibold text-navy-800 text-center">{formSection.title}</h3>
              <div className="mt-6"><EnrollNowFormRu /></div>
            </div>
          </div>
        </div>
      </section>
 <ReviewsCarouselRu/>
 <PrefooterCta {...prefooterCta}/>
    </>
  );
}
