import Image from "next/image";
import { Star } from "lucide-react";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { ruConditionPages } from "@/lib/conditions.ru";
import { buildConditionMetadata } from "@/lib/metadata";
import { conditionSlugMap } from "@/lib/slug-map";

export function generateStaticParams() {
  return ruConditionPages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = ruConditionPages.find((c) => c.slug === slug);
  if (!condition) return {};
  const enSlug = Object.entries(conditionSlugMap).find(([, v]) => v.ru === slug)?.[0];
  const title = `${condition.title} — уход на дому в Нью-Йорке | Ideal Home Health`;
  const description = condition.heroDescription;
  if (!enSlug) return { title, description };
  return buildConditionMetadata({ enSlug, locale: "ru", title, description });
}

// Same 3 Russian-translated testimonial posts used elsewhere (ids 3957,
// 3979, 4552) — confirmed via live fetch these render in Russian, not
// English, on condition pages too.
const TESTIMONIALS = [
  { author: "Тейшия Б.", role: "Опекун", rating: 5, content: "Я работаю в Ideal Home Health последние два года. Ценю время и усилия координаторов офиса, которые, на мой взгляд, делают больше, чем требуется, чтобы я всегда своевременно обновляла свою документацию и обучение. Оплата здесь также одна из самых высоких, что я получала, и я благодарна за возможность работать здесь." },
  { author: "Лиз П", role: "Пациент", rating: 5, content: "Спасибо. Я так рада, что у меня есть помощь. Моя помощница помогает с лекарствами и утром помогает сделать прическу. Я счастлива, когда могу видеть внуков, а она поддерживает порядок, так как я сама не могу это делать. Сара очень милая, я очень, очень ценю помощь." },
  { author: "Джозеф А.", role: "Член семьи", rating: 5, content: "После того как я переехал из Нью-Йорка, уход за моей мамой стал очень стрессовым для меня и моей сестры. Наличие помощника помогает нам быть уверенными, что она в безопасности, когда мы не можем быть рядом. У нас был потрясающий опыт сотрудничества с Ideal Home Health, они профессиональны и сделали процесс простым." },
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
              <Button href="/ru/enroll-now" variant="primary">Зарегистрируйся сегодня</Button>
              <Button href="/ru/contact-us" variant="secondary">Свяжитесь с нами</Button>
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
          <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">Что говорят другие</h2>
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
        title={condition.prefooterTitle}
        description={condition.prefooterDescription}
        button={{ title: "Зарегистрируйся сегодня", href: "/ru/enroll-now" }}
      />
    </>
  );
}
