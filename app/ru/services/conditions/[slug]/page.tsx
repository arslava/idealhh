import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { ruConditionPages } from "@/lib/conditions.ru";

export function generateStaticParams() {
  return ruConditionPages.map((c) => ({ slug: c.slug }));
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
      <section className="mx-auto max-w-[1140px] px-4 py-20">
        <h2 className="font-display text-3xl font-semibold text-navy-800">{condition.bulletsTitle}</h2>
        <ul className="mt-6 space-y-4 text-[1.375rem] max-w-2xl">
          {condition.bulletsItems.map((item) => (
            <li key={item} className="flex gap-4 text-grey-800 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />{item}
            </li>
          ))}
        </ul>
      </section>
      <PrefooterCta
        title="Готовы больше узнать и получить необходимую помощь?"
        description="Свяжитесь с нами сегодня чтобы обсудить план по обслуживанию который будет подходить именно вашей семье."
        button={{ title: "Свяжитесь с нами", href: "/ru/contact-us" }}
      />
    </>
  );
}
