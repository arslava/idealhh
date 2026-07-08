import { traditionalCareResourcesPage } from "@/lib/content";

export default function TraditionalCareResourcesPage() {
  const { hero, faqIntro, questions, policyLinks, infoLinks } = traditionalCareResourcesPage;

  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16 text-center">
          <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05] font-black text-navy-800">{hero.title}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[840px] px-4 py-16">
        <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">{faqIntro}</h2>
        <div className="mt-8 space-y-4">
          {questions.map((item) => (
            <details key={item.question} className="group rounded-3xl border border-navy-900/10 bg-white p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)]">
              <summary className="cursor-pointer font-display text-lg font-semibold text-navy-800 list-none flex items-center justify-between gap-4">
                {item.question}
                <span className="text-accent text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-grey-800 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16">
          <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">{policyLinks.title}</h2>
          <p className="mt-3 text-[1.375rem] text-grey-800 leading-relaxed">{policyLinks.description}</p>
          <ul className="mt-6 space-y-3">
            {policyLinks.items.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:text-accent underline">
                  {item.description}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[840px] px-4 py-16">
        <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">{infoLinks.title}</h2>
        <p className="mt-3 text-[1.375rem] text-grey-800 leading-relaxed">{infoLinks.description}</p>
        <ul className="mt-6 space-y-3">
          {infoLinks.items.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:text-accent underline">
                {item.description}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
