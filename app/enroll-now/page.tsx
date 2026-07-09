import Link from "next/link";
import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import EnrollNowForm from "@/components/EnrollNowForm";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { enrollNowPage } from "@/lib/content";

export default function EnrollNowPage() {
  const { hero, patientSection, caregiverSection, formSection, prefooterCta } = enrollNowPage;

  return (
    <>
      {/* Real page structure: one continuous navy section containing both
          Q&A blocks stacked on the left, with the white "Patient Enrollment"
          form card as a tall sidebar on the right spanning that same
          section — not three separate stacked sections. */}
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <h1 className="font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05] font-black max-w-3xl">
            {hero.title}
          </h1>

          <div className="mt-12 grid lg:grid-cols-[1fr_420px] gap-10">
            <div>
              <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.1] font-black">
                {patientSection.title}
              </h2>
              <p className="mt-4 text-[1.125rem] text-white/85 leading-relaxed">{patientSection.description}</p>
              <div className="mt-4 space-y-2">
                {patientSection.questions.map((q) => (
                  <p key={q} className="text-[1.125rem] text-white/85">— {q}</p>
                ))}
              </div>
              <Link href={patientSection.link.href} className="mt-4 inline-block text-accent underline">
                {patientSection.link.title}
              </Link>

              <h2 className="mt-12 font-display text-[2rem] md:text-[2.5rem] leading-[1.1] font-black">
                {caregiverSection.title}
              </h2>
              <p className="mt-4 text-[1.125rem] text-white/85 leading-relaxed">{caregiverSection.description}</p>
              <div className="mt-4 space-y-2">
                {caregiverSection.questions.map((q) => (
                  <p key={q} className="text-[1.125rem] text-white/85">— {q}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[10px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] p-8 text-left lg:self-start">
              <h3 className="font-display text-2xl font-semibold text-navy-800 text-center">
                {formSection.title}
              </h3>
              <p className="mt-2 text-sm italic text-accent text-center font-semibold">{formSection.note}</p>
              <div className="mt-4 flex justify-center">
                <Button href={formSection.caregiverButton.href} variant="secondary">
                  {formSection.caregiverButton.title}
                </Button>
              </div>
              <div className="mt-6">
                <EnrollNowForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      <div className="bg-wine text-center pt-8">
        <Link href={patientSection.link.href} className="text-white underline text-sm">
          {patientSection.link.title}
        </Link>
      </div>
      <PrefooterCta {...prefooterCta} />
    </>
  );
}
