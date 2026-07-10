import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { ruCareersPage, ruEnrollNowPage } from "@/lib/content.ru";

export default function RuCareersPage() {
  const { hero, benefits, qualify, jobs } = ruCareersPage;
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="py-16 lg:py-20">
            <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] leading-[1.05]">{hero.title}</h1>
            <h2 className="mt-4 text-xl md:text-2xl text-white/90 font-semibold">{hero.subtitle}</h2>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">{hero.description}</p>
            <Button href={hero.button.href} variant="secondary" className="mt-8">{hero.button.title}</Button>
          </div>
          <div className="relative min-h-[280px] h-full">
            <Image src={hero.image} alt={hero.title} fill className="object-cover rounded-t-[49px] lg:rounded-[49px]" />
          </div>
        </div>
      </section>
      <WaveDivider />
      <section className="mx-auto max-w-[1140px] px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-[49px] overflow-hidden aspect-[4/3]">
          <Image src="/images/home-health-caregiver-nyc.jpg" alt={benefits.title} fill className="object-cover" />
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-navy-800">{benefits.title}</h2>
          <p className="mt-3 text-[1.375rem] text-grey-800">{benefits.description}</p>
          <h3 className="mt-6 text-xl font-semibold text-navy-700">{benefits.listTitle}</h3>
          <ul className="mt-4 space-y-3">
            {benefits.items.map((item) => (
              <li key={item} className="flex gap-3 text-grey-800 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />{item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="qualifyenroll" className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col justify-center py-8">
            <h2 className="font-display text-[2.5rem] md:text-[3rem] leading-[1.1] font-black">{qualify.title}</h2>
            <p className="mt-5 text-[1.375rem] font-semibold">{qualify.subtitle}</p>
            <ul className="mt-4 space-y-3">
              {qualify.items.map((item) => (
                <li key={item} className="flex gap-3 text-[1.375rem] text-white/85">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[10px] bg-white p-8">
            <h3 className="font-display text-2xl font-semibold text-navy-800 text-center mb-6">{qualify.formTitle}</h3>
            <p className="text-center text-navy-muted text-sm">Форма подачи заявки — свяжитесь с нами по телефону, чтобы подать заявку.</p>
          </div>
        </div>
      </section>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <h2 className="font-display text-3xl font-black text-navy-800 text-center">Список вакансий</h2>
          <div className="mt-8 grid gap-4 max-w-2xl mx-auto">
            {jobs.map((job) => (
              <div key={job.title} className="rounded-3xl bg-white border border-navy-900/10 p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy-800">{job.title}</h3>
                  <p className="mt-1 text-sm text-navy-muted">{job.label} · {job.location}</p>
                </div>
                <Button href="#qualifyenroll" variant="outline">Подробнее</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
