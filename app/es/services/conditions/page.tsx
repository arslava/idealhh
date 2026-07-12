import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import { esConditionsPage } from "@/lib/content.es";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "conditionsOverview",
  locale: "es",
  title: "Cuidado por Condición Médica en el Hogar | Ideal Home Health",
  description: "Atención domiciliaria especializada para artritis, Parkinson, epilepsia, prevención de caídas, cuidado poshospitalario y más, en la ciudad de Nueva York.",
});

export default function EsConditionsPage() {
  const { cards, prefooterCta } = esConditionsPage;
  return (
    <>
      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-navy-900/10 p-6 bg-white shadow-[0_20px_40px_rgba(56,75,116,0.06)]">
              <h3 className="font-display text-2xl font-semibold text-navy-800">{card.title}</h3>
              <p className="mt-2 text-sm text-grey-800 leading-relaxed">{card.description}</p>
              <Button href={card.href} variant="outline" className="mt-4 !min-w-0 !px-5 !py-2 text-sm">
                {card.buttonLabel ?? "Aprende más"}
              </Button>
            </div>
          ))}
        </div>
      </section>
      <PrefooterCta {...prefooterCta} />
    </>
  );
}
