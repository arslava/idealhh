import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import { zhHantConditionsPage } from "@/lib/content.zh-hant";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "conditionsOverview",
  locale: "zhHant",
  title: "居家病況照護 | Ideal Home Health",
  description: "為糖尿病、中風、帕金森氏症、癲癇、防跌倒、出院後照護等提供專業居家護理服務，服務範圍涵蓋紐約市。",
});

export default function ZhHantConditionsPage() {
  const { cards, prefooterCta } = zhHantConditionsPage;
  return (
    <>
      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-navy-900/10 p-6 bg-white shadow-[0_20px_40px_rgba(56,75,116,0.06)]">
              <h3 className="font-display text-2xl font-semibold text-navy-800">{card.title}</h3>
              <p className="mt-2 text-sm text-grey-800 leading-relaxed">{card.description}</p>
              <Button href={card.href} variant="outline" className="mt-4 !min-w-0 !px-5 !py-2 text-sm">
                {card.buttonLabel ?? "了解更多"}
              </Button>
            </div>
          ))}
        </div>
      </section>
      <PrefooterCta {...prefooterCta} />
    </>
  );
}
