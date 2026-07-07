import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { homePage } from "@/lib/content";

export default function Home() {
  const { hero, whoBenefits, customPlans, locations, careers, prefooterCta, heroImage } = homePage;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-paper overflow-hidden">
        <Image
          src={heroImage}
          alt="Compassionate home health care services in New York City"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy/90 to-navy/70" />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
          <p className="text-sky text-sm font-semibold tracking-[0.2em] uppercase">
            New York City · Est. 2013
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl font-semibold leading-[1.05]">
            {hero.title.replace(hero.highlight, "")}
            <span className="italic text-sky">{hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80 leading-relaxed">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={hero.primaryButton.href}>{hero.primaryButton.title}</Button>
            <Button href={hero.secondaryButton.href} variant="ghost" className="!text-paper !border-paper/40 hover:!bg-paper/10">
              {hero.secondaryButton.title}
            </Button>
          </div>
        </div>
      </section>
      <WaveDivider />

      {/* Who benefits */}
      <section className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-accent text-sm font-semibold tracking-wide uppercase">{whoBenefits.label}</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy">{whoBenefits.title}</h2>
          <ul className="mt-6 space-y-3">
            {whoBenefits.items.map((item) => (
              <li key={item} className="flex gap-3 text-ink/85 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Button href={whoBenefits.button.href} className="mt-8">
            {whoBenefits.button.title}
          </Button>
        </div>
        <div className="relative rounded-3xl overflow-hidden bg-paper-deep aspect-[4/3]">
          <Image
            src={whoBenefits.image}
            alt="Caregiver assisting a client at home"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Custom plans */}
      <section className="bg-paper-deep">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden bg-white aspect-[4/3] order-2 md:order-1">
            <Image
              src={customPlans.image}
              alt="Family consultation for personalized home care planning"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-accent text-sm font-semibold tracking-wide uppercase">{customPlans.label}</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy">{customPlans.title}</h2>
            <h3 className="mt-5 text-xl font-semibold text-navy/80">{customPlans.subtitle}</h3>
            <p className="mt-3 text-ink/80 leading-relaxed">{customPlans.description}</p>
            <Button href={customPlans.button.href} className="mt-8">
              {customPlans.button.title}
            </Button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sky text-sm font-semibold tracking-wide uppercase">{locations.label}</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">{locations.title}</h2>
          <p className="mt-4 text-paper/80 leading-relaxed max-w-2xl mx-auto">{locations.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Brooklyn", "Bronx", "Manhattan"].map((borough) => (
              <span key={borough} className="rounded-full border border-paper/25 px-5 py-2 text-sm">
                {borough}
              </span>
            ))}
          </div>
          <Button href={locations.button.href} variant="primary" className="mt-8">
            {locations.button.title}
          </Button>
        </div>
      </section>

      {/* Careers */}
      <section className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-accent text-sm font-semibold tracking-wide uppercase">{careers.label}</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy">{careers.title}</h2>
          <p className="mt-4 text-ink/80 leading-relaxed">{careers.description}</p>
          <Button href={careers.button.href} className="mt-8">
            {careers.button.title}
          </Button>
        </div>
        <div className="relative rounded-3xl overflow-hidden bg-paper-deep aspect-[4/3]">
          <Image
            src={careers.image}
            alt="Ideal Home Health caregiver team in New York City"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
