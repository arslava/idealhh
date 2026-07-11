import Image from "next/image";
import { Star } from "lucide-react";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { ruConditionPages } from "@/lib/conditions.ru";

export function generateStaticParams() {
  return ruConditionPages.map((c) => ({ slug: c.slug }));
}

// Same 3 English-language testimonial posts (id 655/122/124) referenced by
// the source ACF "testimonials" block on 12 of the 13 condition pages — no
// Russian translation exists for these in the source.
const TESTIMONIALS = [
  { author: "Tayshia B.", role: "Caregiver", rating: 5, content: "I've been employed with Ideal Home Health for the past two years. I appreciate the time and efforts of their office coordinators who in my opinion go above and beyond to ensure I'm on top of keeping my documentation and training up to date. The pay is also some of the highest I've received, and I'm thankful to work here." },
  { author: "Joseph A.", role: "Family Member", rating: 5, content: "After I moved out of New York, caring for my mother became very stressful for my sister and I. Having an aide helps us know she's safe when we can't be there. We have had an incredible experience working with Ideal Home Health, they are professional and made the process easy." },
  { author: "Liz P.", role: "Patient", rating: 5, content: "Thank you. I'm so happy to have the help. My aide helps with my medicine, and helps me do my hair in the morning. I'm happy when I can see my grandchildren and she keeps things tidy since I can't do it. Sarah is very nice, I really, really appreciate the help." },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < rating ? "fill-accent text-accent" : "text-navy-muted/30"} />
      ))}
    </div>
  );
}

export default async function RuConditionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = ruConditionPages.find((c) => c.slug === slug);
  if (!condition) notFound();

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="py-16 lg:py-20">
            <h1 className="font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05]">{condition.title}</h1>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">{condition.heroDescription}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/ru/contact-us" variant="primary">Свяжитесь с нами</Button>
              <Button href="/ru/enroll-now" variant="secondary">Зарегистрироваться сейчас</Button>
            </div>
          </div>
          <div className="relative min-h-[280px] h-full">
            <Image src={condition.heroImage} alt={condition.title} fill className="object-cover rounded-t-[49px] lg:rounded-[49px]" />
          </div>
        </div>
      </section>
      <WaveDivider />

      {condition.intro.title && (
        <section className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-[49px] overflow-hidden aspect-[4/3] order-2 md:order-1">
            <Image src={condition.intro.image} alt={condition.intro.title} fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-800">{condition.intro.title}</h2>
            <p className="mt-4 text-[1.125rem] text-grey-800 leading-relaxed">{condition.intro.description}</p>
          </div>
        </section>
      )}

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-20">
          <h2 className="font-display text-3xl font-semibold text-navy-800">{condition.bulletsTitle}</h2>
          {condition.bulletsListDescription && (
            <p className="mt-3 text-[1.125rem] text-grey-800">{condition.bulletsListDescription}</p>
          )}
          <ul className="mt-6 space-y-4 text-[1.375rem] max-w-2xl">
            {condition.bulletsItems.map((item) => (
              <li key={item} className="flex gap-4 text-grey-800 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {condition.hasTestimonials && (
        <section className="mx-auto max-w-[1140px] px-4 py-16">
          <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">Testimonials</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
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
        title="Готовы больше узнать и получить необходимую помощь?"
        description="Свяжитесь с нами сегодня чтобы обсудить план по обслуживанию который будет подходить именно вашей семье."
        button={{ title: "Свяжитесь с нами", href: "/ru/contact-us" }}
      />
    </>
  );
}
