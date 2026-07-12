import Image from "next/image";
import { HeartHandshake, Stethoscope } from "lucide-react";
import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import ReviewsCarouselAr from "@/components/ReviewsCarouselAr";
import JsonLd from "@/components/JsonLd";
import { arHomePage } from "@/lib/content.ar";
import { buildMetadata } from "@/lib/metadata";
import { organizationSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  key: "home",
  locale: "ar",
  title: "الرعاية الصحية المنزلية في نيويورك | Ideal Home Health",
  // Real live meta-description, with its CDPAP mention removed per
  // standing rule (source reads "...مساعدي الصحة المنزلية، HHA، PCA، و
  // CDPAP...").
  description: "تقدم Ideal Home Health خدمات رعاية صحية منزلية إنسانية في نيويورك والأحياء الخمسة، بما في ذلك مساعدي الصحة المنزلية، HHA وPCA. خيارك الموثوق في نيويورك.",
});

const icons = { heart: HeartHandshake, "heart-pulse": Stethoscope };

export default function ArHome() {
  const { hero, servicesTeaser, whoBenefits, customPlans, locations, careers, prefooterCta, heroImage, locationsImage, locationCards } = arHomePage;

  return (
    <>
      <JsonLd data={organizationSchema("ar")} />
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="py-16 lg:py-20">
            <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05] font-medium">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">{hero.description}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={hero.primaryButton.href} variant="primary">
                {hero.primaryButton.title}
              </Button>
              <Button href={hero.secondaryButton.href} variant="secondary">
                {hero.secondaryButton.title}
              </Button>
            </div>
          </div>
          <div className="relative min-h-[320px] h-full lg:-ml-4">
            <Image
              src={heroImage}
              alt="خدمات رعاية منزلية مليئة بالرحمة في مدينة نيويورك"
              fill
              priority
              className="object-cover rounded-t-[49px] lg:rounded-none"
            />
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-16 md:py-20">
        <div className="mx-auto max-w-[1140px] px-4 grid md:grid-cols-2 gap-8">
          {servicesTeaser.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <div
                key={service.title}
                className="flex flex-col h-full rounded-3xl border border-navy-900/10 p-8 bg-white shadow-[0_20px_40px_rgba(56,75,116,0.08)]"
              >
                <div className="h-32 w-32 rounded-full bg-bg-light flex items-center justify-center mb-8">
                  <Icon className="h-12 w-12 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[1.875rem] font-black text-grey-800">{service.title}</h3>
                <p className="mt-4 text-[1.125rem] md:text-[1.375rem] text-navy-muted leading-relaxed flex-1">{service.description}</p>
                <Button href={service.button.href} className="mt-8 self-start">
                  {service.button.title}
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-[49px] overflow-hidden aspect-[508/550]">
          <Image src={whoBenefits.image} alt={whoBenefits.title} fill className="object-cover" />
        </div>
        <div>
          <p className="text-navy-700/50 text-sm font-semibold tracking-[1px] uppercase">{whoBenefits.label}</p>
          <h2 className="mt-3 font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">{whoBenefits.title}</h2>
          <ul className="mt-6 space-y-3 text-[1.375rem]">
            {whoBenefits.items.map((item) => (
              <li key={item} className="flex gap-3 text-grey-800 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Button href={whoBenefits.button.href} className="mt-8">{whoBenefits.button.title}</Button>
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-[49px] overflow-hidden aspect-[508/550] order-2 md:order-1">
            <Image src={customPlans.image} alt={customPlans.title} fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-navy-700/50 text-sm font-semibold tracking-[1px] uppercase">{customPlans.label}</p>
            <h2 className="mt-3 font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">{customPlans.title}</h2>
            <p className="mt-4 text-[1.375rem] text-grey-800 leading-relaxed">{customPlans.description}</p>
            <Button href={customPlans.button.href} className="mt-8">{customPlans.button.title}</Button>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-white to-bg-light overflow-hidden">
        <div className="mx-auto max-w-[1140px] px-4 py-20 relative">
          {/* Mirrored to the left for RTL (source has this decorative image
              on the visual right in LTR locales). */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[45%] max-w-[500px] opacity-90 hidden lg:block">
            <Image src={locationsImage} alt="" width={863} height={854} className="w-full h-auto" />
          </div>
          <div className="max-w-xl relative">
            <p className="text-navy-700/50 text-sm font-semibold tracking-[1px] uppercase">{locations.label}</p>
            <h2 className="mt-3 font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">{locations.title}</h2>
            <p className="mt-4 text-[1.375rem] text-grey-800 leading-relaxed">{locations.description}</p>
            <Button href={locations.button.href} className="mt-8">{locations.button.title}</Button>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 grid sm:grid-cols-2 gap-6">
          {locationCards.map((loc) => (
            <div key={loc.name} className="bg-white rounded-3xl border border-navy-900/10 shadow-[0_20px_40px_rgba(56,75,116,0.08)] p-8 text-center flex flex-col items-center">
              <h3 className="font-display text-[1.875rem] font-black text-navy-800">{loc.name}</h3>
              <p className="mt-3 text-[1.125rem] text-navy-muted leading-relaxed" dir="ltr">{loc.address}</p>
              <Button href={loc.button.href} className="mt-6">{loc.button.title}</Button>
            </div>
          ))}
        </div>
      </section>

      <ReviewsCarouselAr />

      <section className="mx-auto max-w-[1140px] px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-navy-700/50 text-sm font-semibold tracking-[1px] uppercase">{careers.label}</p>
          <h2 className="mt-3 font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">{careers.title}</h2>
          <p className="mt-4 text-[1.375rem] text-grey-800 leading-relaxed">{careers.description}</p>
          <Button href={careers.button.href} className="mt-8">{careers.button.title}</Button>
        </div>
        <div className="relative rounded-[49px] overflow-hidden aspect-[508/454]">
          <Image src={careers.image} alt={careers.title} fill className="object-cover" />
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
