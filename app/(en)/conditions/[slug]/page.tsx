import Image from "next/image";
import { Star } from "lucide-react";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { conditionPages, conditionTestimonials } from "@/lib/conditions";
import { buildConditionMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return conditionPages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = conditionPages.find((c) => c.slug === slug);
  if (!condition) return {};
  return buildConditionMetadata({
    enSlug: slug as Parameters<typeof buildConditionMetadata>[0]["enSlug"],
    locale: "en",
    title: `${condition.title} Home Care in NYC | Ideal Home Health`,
    description: condition.heroDescription,
  });
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < rating ? "fill-accent text-accent" : "text-navy-muted/30"} />
      ))}
    </div>
  );
}

export default async function ConditionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = conditionPages.find((c) => c.slug === slug);
  if (!condition) notFound();

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="py-16 lg:py-20">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">{condition.heroLabel}</p>
            <h1 className="mt-4 font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05]">
              {condition.heroTitle.replace(condition.heroHighlight, "")}
              <span className="text-accent">{condition.heroHighlight}</span>
            </h1>
            {condition.heroSubtitle && (
              <h2 className="mt-4 text-xl md:text-2xl text-white/90 font-semibold">{condition.heroSubtitle}</h2>
            )}
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">
              {condition.heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact-us" variant="primary">Contact Us</Button>
              <Button href="/enroll-now" variant="secondary">Enroll Now</Button>
            </div>
          </div>
          <div className="relative min-h-[280px] h-full">
            <Image src={condition.heroImage} alt={condition.heroTitle} fill className="object-cover rounded-t-[49px] lg:rounded-[49px]" />
          </div>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-[1140px] px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-[49px] overflow-hidden aspect-[4/3] order-2 lg:order-1">
          <Image src={condition.bulletsImage} alt={condition.bulletsTitle} fill className="object-cover" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">
            {condition.bulletsTitle.replace(condition.bulletsHighlight, "")}
            <span className="text-accent">{condition.bulletsHighlight}</span>
          </h2>
          <h3 className="mt-6 text-xl font-semibold text-navy-700">{condition.bulletsListTitle}</h3>
          {condition.bulletsListDescription && (
            <p className="mt-2 text-[1.375rem] text-grey-800">{condition.bulletsListDescription}</p>
          )}
          <ul className="mt-6 space-y-4 text-[1.375rem]">
            {condition.bulletsItems.map((item) => (
              <li key={item} className="flex gap-4 text-grey-800 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {condition.hasTestimonials && (
        <section className="mx-auto max-w-[1140px] px-4 py-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-wide text-center">what others are saying</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {conditionTestimonials.map((t) => (
              <div key={t.author} className="rounded-3xl bg-white border border-navy-900/10 overflow-hidden shadow-[0_20px_40px_rgba(56,75,116,0.08)] flex flex-col">
                <div className="relative aspect-[4/3]">
                  <Image src={t.image} alt={t.author} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Stars rating={t.rating} />
                  <p className="mt-3 text-[1.0625rem] text-grey-800 leading-relaxed flex-1">&ldquo;{t.content}&rdquo;</p>
                  <div className="mt-4">
                    <p className="font-semibold text-navy-800">{t.author}</p>
                    <p className="text-sm text-navy-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <PrefooterCta
        title={condition.prefooterTitle}
        description={condition.prefooterDescription}
        button={{ title: condition.prefooterButtonTitle, href: "/contact-us" }}
        image={condition.prefooterImage}
      />
    </>
  );
}
