import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { conditionsPage } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "conditionsOverview",
  locale: "en",
  title: "Specialized Home Care Services for Your Condition | Ideal Home Health",
  description: "Condition-specific home care in New York City for arthritis, Parkinson's, epilepsy, fall prevention, post-hospital care, and more — tailored to your routine and needs.",
});

export default function ConditionsPage() {
  const { hero, sectionTitle, cards, whyChoose, howItWorks, prefooterCta } = conditionsPage;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="py-16 lg:py-20">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">{hero.label}</p>
            <h1 className="mt-4 font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05]">
              {hero.title.replace(hero.highlight, "")}
              <span className="text-accent">{hero.highlight}</span>
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-white/90 font-semibold">{hero.subtitle}</h2>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {hero.buttons.map((btn, i) => (
                <Button key={btn.title} href={btn.href} variant={i === 0 ? "primary" : "secondary"} className="">
                  {btn.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="relative min-h-[280px] h-full">
            <Image src={hero.image} alt={hero.title} fill className="object-cover rounded-t-[49px] lg:rounded-[49px]" />
          </div>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">{sectionTitle}</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.slug} className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)]">
              <h3 className="font-display text-2xl font-semibold text-navy-800">{card.title}</h3>
              <p className="mt-2 text-sm text-grey-800 leading-relaxed">{card.description}</p>
              <Button href={`/conditions/${card.slug}`} variant="outline" className="mt-4 !min-w-0 !px-5 !py-2 text-sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-navy-800">{whyChoose.title}</h2>
            <p className="mt-4 text-[1.125rem] text-grey-800 leading-relaxed">{whyChoose.description}</p>
          </div>
          <div className="relative aspect-[4/3] rounded-[49px] overflow-hidden">
            <Image src={whyChoose.image} alt={whyChoose.title} fill className="object-cover" />
          </div>
        </div>
        <div className="mx-auto max-w-[1140px] px-4 pb-16">
          <h3 className="text-xl font-semibold text-navy-700">{whyChoose.subheading}</h3>
          <ul className="mt-4 space-y-3 max-w-2xl">
            {whyChoose.items.map((item) => (
              <li key={item.title} className="flex gap-3 text-grey-800 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span><strong className="text-navy-800">{item.title}</strong>: {item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative aspect-[4/3] rounded-[49px] overflow-hidden">
            <Image src={howItWorks.image} alt={howItWorks.title} fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-3xl md:text-4xl font-black text-navy-800">{howItWorks.title}</h2>
            <p className="mt-4 text-[1.125rem] text-grey-800 leading-relaxed">{howItWorks.description}</p>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-navy-700">{howItWorks.subheading}</h3>
          <ol className="mt-4 space-y-3 max-w-2xl list-decimal list-inside">
            {howItWorks.steps.map((step) => (
              <li key={step.title} className="text-grey-800 leading-relaxed">
                <strong className="text-navy-800">{step.title}</strong>: {step.description}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
