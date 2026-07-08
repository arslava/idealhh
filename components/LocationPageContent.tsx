import Image from "next/image";
import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { locations, prefooterDefault } from "@/lib/content";

type LocationKey = keyof typeof locations;

export default function LocationPageContent({ locationKey }: { locationKey: LocationKey }) {
  const { hero, services, whyChoose, name } = locations[locationKey];

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-16 lg:py-20">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">{name}, NY</p>
            <h1 className="mt-4 font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05]">
              {hero.title.replace(hero.highlight, "")}
              <span className="text-accent">{hero.highlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {hero.buttons.map((btn) => (
                <Button
                  key={btn.title}
                  href={btn.href}
                  variant={btn.title.includes("Caregiver") ? "secondary" : "primary"}
                  className={btn.title.includes("Caregiver") ? "" : "!bg-white"}
                >
                  {btn.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="relative h-[280px] lg:h-[480px]">
            <Image src={hero.image} alt={hero.title} fill className="object-cover rounded-t-3xl lg:rounded-3xl" />
          </div>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-8 items-stretch">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col h-full rounded-3xl border border-navy-900/10 p-8 bg-white shadow-[0_20px_40px_rgba(56,75,116,0.08)]">
            <h2 className="font-display text-2xl font-semibold text-navy-800 leading-snug">{service.title}</h2>
            <p className="mt-4 text-[1.125rem] md:text-[1.375rem] text-grey-800 leading-relaxed flex-1">{service.description}</p>
            <Button href={service.button.href} variant="outline" className="mt-6 self-start">
              {service.button.title}
            </Button>
          </div>
        ))}
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image src={whyChoose.image} alt={whyChoose.title} fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">{whyChoose.title}</h2>
            <p className="mt-4 text-[1.375rem] text-grey-800">{whyChoose.intro}</p>
            <ul className="mt-8 space-y-5">
              {whyChoose.items.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <p className="text-[1.375rem] text-grey-800 leading-relaxed">
                    <span className="font-semibold text-navy-700">{item.title}</span>: {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PrefooterCta
        title={`Ready to Start Your Home Care Journey in ${name}?`}
        description={prefooterDefault.description}
        button={{ title: `Contact Our ${name} Team`, href: "/contact-us" }}
      />
    </>
  );
}
