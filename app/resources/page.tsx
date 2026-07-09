import Link from "next/link";
import { resourcesIndexPage } from "@/lib/content";

export default function ResourcesIndexPage() {
  const { hero, cards } = resourcesIndexPage;

  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16 text-center">
          <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05] font-black text-navy-800">{hero.title}</h1>
          <p className="mt-4 text-[1.125rem] md:text-[1.375rem] text-grey-800">{hero.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)] hover:shadow-[0_20px_40px_rgba(56,75,116,0.14)] transition-shadow transition-shadow"
          >
            <h2 className="font-display text-2xl font-semibold text-navy-800">{card.title}</h2>
            <p className="mt-3 text-sm text-grey-800 leading-relaxed">{card.description}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
