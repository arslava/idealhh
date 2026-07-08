import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import { faqPage } from "@/lib/content";

function QuestionList({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="group rounded-2xl border border-navy-900/10 bg-white p-6 shadow-[0_10px_30px_rgba(56,75,116,0.05)]">
          <summary className="cursor-pointer font-display text-lg font-semibold text-navy-800 list-none flex items-center justify-between gap-4">
            {item.question}
            <span className="text-accent text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p
            className="mt-3 text-grey-800 leading-relaxed [&_a]:text-accent [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </details>
      ))}
    </div>
  );
}

export default function FaqPage() {
  const { hero, patientQuestions, caregiverQuestions, prefooterCta } = faqPage;

  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16 text-center">
          <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05] font-black text-navy-800">{hero.title}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[840px] px-4 py-16">
        <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">Common Questions from Patients</h2>
        <div className="mt-6">
          <QuestionList items={patientQuestions} />
        </div>

        <h2 className="mt-14 font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">Common Questions from Caregivers</h2>
        <div className="mt-6">
          <QuestionList items={caregiverQuestions} />
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
