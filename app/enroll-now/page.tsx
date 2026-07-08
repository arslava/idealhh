import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { enrollNowPage } from "@/lib/content";

export default function EnrollNowPage() {
  const { hero, patientSection, caregiverSection, prefooterCta } = enrollNowPage;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-16 lg:py-20">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">{hero.label}</p>
            <h1 className="mt-4 font-display text-[2.8125rem] md:text-[4.0625rem] leading-[1.05]">
              {hero.title.replace(hero.highlight, "")}
              <span className="text-accent">{hero.highlight}</span>
            </h1>
            <h2 className="mt-4 text-xl text-white/90 font-semibold">{hero.subtitle}</h2>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">
              {hero.description}
            </p>
          </div>
          <div className="relative h-[280px] lg:h-[420px]">
            <Image src={hero.image} alt={hero.title} fill className="object-cover rounded-t-3xl lg:rounded-3xl" />
          </div>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl bg-bg-light p-8">
          <h2 className="font-display text-2xl md:text-3xl font-black text-navy-800">{patientSection.title}</h2>
          <p className="mt-3 text-grey-800 leading-relaxed">{patientSection.description}</p>
          <ul className="mt-6 space-y-3">
            {patientSection.questions.map((q) => (
              <li key={q} className="flex gap-3 text-grey-800">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {q}
              </li>
            ))}
          </ul>
          <Button href="/how-to-enroll" className="mt-8">Know More About Enrolling</Button>
        </div>
        <div className="rounded-3xl bg-bg-light p-8">
          <h2 className="font-display text-2xl md:text-3xl font-black text-navy-800">{caregiverSection.title}</h2>
          <p className="mt-3 text-grey-800 leading-relaxed">{caregiverSection.description}</p>
          <ul className="mt-6 space-y-3">
            {caregiverSection.questions.map((q) => (
              <li key={q} className="flex gap-3 text-grey-800">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {q}
              </li>
            ))}
          </ul>
          <Button href="/careers/how-it-works-caregivers" className="mt-8">Apply as a Caregiver</Button>
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center">
          <h2 className="font-display text-2xl font-black text-navy-800">Patient Enrollment</h2>
          <div className="mt-6 rounded-3xl bg-white shadow-[0_20px_40px_rgba(56,75,116,0.08)] p-8 text-grey-800">
            {/* Real site embeds a WPForms shortcode here (form id 2688). Needs a
                real form backend before this can go live. */}
            Enrollment form goes here — pending decision on form backend.
          </div>
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
