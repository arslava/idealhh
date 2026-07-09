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
      {/* Real page has no hero image — just the title on a light background,
          then the two qualification sections as plain text (not bulleted
          cards, no CTA button under either). */}
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <h1 className="font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05] font-black text-navy-800 max-w-3xl">
            {hero.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.1] font-black text-navy-800">
            {patientSection.title}
          </h2>
          <p className="mt-4 text-[1.125rem] text-grey-800 leading-relaxed">{patientSection.description}</p>
          <div className="mt-4 space-y-2">
            {patientSection.questions.map((q) => (
              <p key={q} className="text-[1.125rem] text-grey-800">— {q}</p>
            ))}
          </div>
          <Link href={patientSection.link.href} className="mt-4 inline-block text-accent underline">
            {patientSection.link.title}
          </Link>
        </div>
        <div>
          <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.1] font-black text-navy-800">
            {caregiverSection.title}
          </h2>
          <p className="mt-4 text-[1.125rem] text-grey-800 leading-relaxed">{caregiverSection.description}</p>
          <div className="mt-4 space-y-2">
            {caregiverSection.questions.map((q) => (
              <p key={q} className="text-[1.125rem] text-grey-800">— {q}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center">
          <h2 className="font-display text-[2.5rem] md:text-[3rem] leading-[1.1] font-black text-navy-800">
            {formSection.title}
          </h2>
          <p className="mt-3 text-sm italic text-navy-muted">{formSection.note}</p>
          <div className="mt-4">
            <Button href={formSection.caregiverButton.href} variant="outline">
              {formSection.caregiverButton.title}
            </Button>
          </div>
          <div className="mt-8 max-w-[510px] mx-auto rounded-[10px] bg-white shadow-[0_20px_40px_rgba(56,75,116,0.1)] p-11 text-left">
            <EnrollNowForm />
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
