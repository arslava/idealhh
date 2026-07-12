import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import CaregiverApplicationFormEs from "@/components/CaregiverApplicationFormEs";
import { esCareersPage } from "@/lib/content.es";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "careers",
  locale: "es",
  title: "Empleos de Cuidador de Salud en el Hogar en Nueva York | Ideal Home Health",
  description: "Únase al equipo de Ideal Home Health como asistente de salud en el hogar (HHA), enfermera o PCA. Salarios competitivos y horarios flexibles en Brooklyn y el Bronx.",
});

export default function EsCareersPage() {
  const { hero, benefits, qualify, locations, officeCards, jobs } = esCareersPage;
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="py-16 lg:py-20">
            <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] leading-[1.05]">{hero.title}</h1>
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
          <Image src={benefits.image} alt={benefits.title} fill className="object-cover" />
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-navy-800">{benefits.title}</h2>
          <p className="mt-3 text-[1.375rem] text-grey-800">{benefits.description}</p>
          <h3 className="mt-6 text-xl font-semibold text-navy-700">{benefits.listTitle}</h3>
          <p className="mt-1 text-grey-800">{benefits.listDescription}</p>
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
        <div className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col justify-center py-8">
            <h2 className="font-display text-[2.5rem] md:text-[3rem] leading-[1.1] font-black">{qualify.title}</h2>

            <p className="mt-5 text-[1.125rem] font-semibold">{qualify.patientSubtitle}</p>
            <ul className="mt-3 space-y-2">
              {qualify.patientItems.map((item) => (
                <li key={item} className="flex gap-3 text-[1.125rem] text-white/85">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />{item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[1.125rem] font-semibold">{qualify.caregiverSubtitle}</p>
            <ul className="mt-3 space-y-2">
              {qualify.caregiverItems.map((item) => (
                <li key={item} className="flex gap-3 text-[1.125rem] text-white/85">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[10px] bg-white p-8">
            <h3 className="font-display text-2xl font-semibold text-navy-800 text-center mb-6">{qualify.formTitle}</h3>
            <CaregiverApplicationFormEs />
          </div>
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-navy-700/50 text-sm font-semibold tracking-[1px] uppercase">{locations.label}</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-black text-navy-800">{locations.title}</h2>
            <p className="mt-4 text-[1.125rem] text-grey-800 leading-relaxed">{locations.description}</p>
            <Button href={locations.button.href} className="mt-6">{locations.button.title}</Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {officeCards.map((office) => (
              <div key={office.title} className="rounded-3xl bg-white border border-navy-900/10 p-6 text-center shadow-[0_20px_40px_rgba(56,75,116,0.08)]">
                <h3 className="font-display text-lg font-black text-navy-800">{office.title}</h3>
                <p className="mt-2 text-sm text-navy-muted leading-relaxed">{office.address}</p>
                <p className="mt-1 text-sm text-navy-muted">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <h2 className="font-display text-3xl font-black text-navy-800 text-center">{jobs.sectionTitle}</h2>
          <div className="mt-8 grid gap-4 max-w-2xl mx-auto">
            {jobs.items.map((job) => (
              <div key={job.title} className="rounded-3xl bg-white border border-navy-900/10 p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy-800">{job.title}</h3>
                  <p className="mt-1 text-sm text-navy-muted">{job.label} · {job.location}</p>
                </div>
                <Button href={job.button.href} variant="outline">{job.button.title}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
