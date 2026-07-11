import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import { ruConditionsPage } from "@/lib/content.ru";

export default function RuConditionsPage() {
  const { cards, prefooterCta } = ruConditionsPage;
  return (
    <>
      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.slug} className="rounded-2xl border border-navy-900/10 p-6 bg-white shadow-[0_20px_40px_rgba(56,75,116,0.06)]">
              <h3 className="font-display text-2xl font-semibold text-navy-800">{card.title}</h3>
              <p className="mt-2 text-sm text-grey-800 leading-relaxed">{card.description}</p>
              <Button href={`/ru/services/conditions/${card.slug}`} variant="outline" className="mt-4 !min-w-0 !px-5 !py-2 text-sm">
                {card.buttonLabel ?? "Узнайте больше"}
              </Button>
            </div>
          ))}
        </div>
      </section>
      <PrefooterCta {...prefooterCta} />
    </>
  );
}
