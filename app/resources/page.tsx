import Link from "next/link";
import { resourcesIndexPage } from "@/lib/content";

export default function ResourcesIndexPage() {
  const { hero, cards } = resourcesIndexPage;

  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-black text-navy-800">{hero.title}</h1>
          <p className="mt-4 text-grey-800">{hero.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-3xl border border-navy-900/10 p-8 bg-white shadow-[0_20px_40px_rgba(56,75,116,0.06)] hover:shadow-[0_20px_40px_rgba(56,75,116,0.12)] transition-shadow"
          >
            <h2 className="font-display text-xl font-semibold text-navy-800">{card.title}</h2>
            <p className="mt-3 text-sm text-grey-800 leading-relaxed">{card.description}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
