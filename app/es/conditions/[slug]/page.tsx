import Image from "next/image";
import { Star } from "lucide-react";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { esConditionPages } from "@/lib/conditions.es";
import { esTestimonialsPage } from "@/lib/content.es";

export function generateStaticParams() {
  return esConditionPages.map((c) => ({ slug: c.slug }));
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

export default async function EsConditionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = esConditionPages.find((c) => c.slug === slug);
  if (!condition) notFound();
  const testimonials = esTestimonialsPage.testimonials;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="py-16 lg:py-20">
            <h1 className="font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05]">{condition.title}</h1>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">{condition.heroDescription}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/es/enroll-now" variant="primary">Inscríbete Ahora</Button>
              <Button href="/es/contact-us" variant="secondary">Contáctenos</Button>
            </div>
          </div>
          <div className="relative min-h-[280px] h-full">
            <Image src={condition.heroImage} alt={condition.title} fill className="object-cover rounded-t-[49px] lg:rounded-[49px]" />
          </div>
        </div>
      </section>
      <WaveDivider />

      {condition.intro.title && (
        <section className="mx-auto max-w-[1140px] px-4 py-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-800">{condition.intro.title}</h2>
          <p className="mt-4 text-[1.125rem] text-grey-800 leading-relaxed max-w-2xl">{condition.intro.description}</p>
        </section>
      )}
      {!condition.intro.title && (
        <section className="mx-auto max-w-[1140px] px-4 py-16">
          <p className="text-[1.125rem] text-grey-800 leading-relaxed max-w-2xl">{condition.intro.description}</p>
        </section>
      )}

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-20">
          <h2 className="font-display text-3xl font-semibold text-navy-800">{condition.bulletsTitle}</h2>
          {condition.bulletsListDescription && (
            <p className="mt-3 text-[1.125rem] text-grey-800">{condition.bulletsListDescription}</p>
          )}
          <ul className="mt-6 space-y-4 text-[1.375rem] max-w-2xl">
            {condition.bulletsItems.map((item, i) => (
              <li key={`${item}-${i}`} className="flex gap-4 text-grey-800 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {condition.hasTestimonials && (
        <section className="mx-auto max-w-[1140px] px-4 py-16">
          <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">Lo que dicen los demás</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="rounded-3xl bg-white border border-navy-900/10 p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)] flex flex-col">
                <Stars rating={t.rating} />
                <p className="mt-4 text-[1.125rem] md:text-[1.375rem] text-grey-800 leading-relaxed flex-1">&ldquo;{t.content}&rdquo;</p>
                <div className="mt-4">
                  <p className="font-semibold text-navy-800">{t.author}</p>
                  <p className="text-sm text-navy-muted">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <PrefooterCta
        title={condition.prefooterTitle}
        description={condition.prefooterDescription}
        button={{ title: "Inscríbete Ahora", href: "/es/enroll-now" }}
      />
    </>
  );
}
