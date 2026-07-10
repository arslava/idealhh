// @ts-nocheck
import PrefooterCta from "@/components/PrefooterCta";
import EnrollNowFormRu from "@/components/EnrollNowFormRu";
import ReviewsCarouselRu from "@/components/ReviewsCarouselRu";
import { ruEnrollNowPage } from "@/lib/content.ru";

export default function EnrollNowPage(){
 const {hero,patientSection,caregiverSection,formSection,prefooterCta}=ruEnrollNowPage;
 return <>
 <section className="bg-navy-900 text-white"><div className="mx-auto max-w-[1140px] px-4 py-16"><div className="flex flex-col-reverse md:flex-row gap-10 items-center">
 <div className="md:w-1/2">
 <h1 className="font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05] font-black">{hero.title}</h1>
 <h2 className="mt-8 font-display text-[2.375rem] font-black">{patientSection.title}</h2>
 <p className="mt-3 font-semibold">{patientSection.subtitle}</p>
 {patientSection.questions.map(q=><p key={q}>— {q}</p>)}
 <h2 className="mt-8 font-display text-[2.375rem] font-black">{caregiverSection.title}</h2>
 <p className="mt-3 font-semibold">{caregiverSection.subtitle}</p>
 {caregiverSection.questions.map(q=><p key={q}>— {q}</p>)}
 </div>
 <div className="md:w-1/2"><div className="w-full max-w-[510px] rounded-[10px] bg-white p-11"><h3>{formSection.title}</h3><EnrollNowFormRu/></div></div>
 </div></div></section>
 <ReviewsCarouselRu/>
 <PrefooterCta {...prefooterCta}/>
 </>;
}
