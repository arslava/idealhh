import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { locations, prefooterDefault } from "@/lib/content";

export default function BrooklynPage() {
  const { hero, services, whyChoose } = locations.brooklyn;

  return (
    <>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">Brooklyn, NY</p>
          <h1 className="mt-4 max-w-2xl text-4xl md:text-5xl font-semibold leading-tight">
            {hero.title.replace(hero.highlight, "")}
            <span className="italic text-gold">{hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80 leading-relaxed">{hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            {hero.buttons.map((btn) => (
              <Button key={btn.title} href={btn.href} variant={btn.title.includes("Caregiver") ? "ghost" : "primary"} className={btn.title.includes("Caregiver") ? "!text-paper !border-paper/40 hover:!bg-paper/10" : ""}>
                {btn.title}
              </Button>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.title} className="rounded-3xl border border-navy/10 p-8 bg-white">
            <h2 className="text-xl font-semibold text-navy leading-snug">{service.title}</h2>
            <p className="mt-4 text-ink/80 leading-relaxed text-sm">{service.description}</p>
            <Button href={service.button.href} variant="ghost" className="mt-6">
              {service.button.title}
            </Button>
          </div>
        ))}
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-semibold text-navy text-center">{whyChoose.title}</h2>
          <p className="mt-4 text-ink/80 text-center max-w-2xl mx-auto">{whyChoose.intro}</p>
          <ul className="mt-10 space-y-5">
            {whyChoose.items.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-brick shrink-0" />
                <p className="text-ink/85 leading-relaxed">
                  <span className="font-semibold text-navy">{item.title}</span>: {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PrefooterCta
        title={`Ready to Start Your Home Care Journey in Brooklyn?`}
        description="Connecting with Ideal Home Health is simple. Reach out today for a free consultation to discuss your personalized home care options."
        button={{ title: "Contact Our Brooklyn Team", href: "/contact-us" }}
      />
    </>
  );
}
