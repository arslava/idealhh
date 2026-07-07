import Button from "@/components/Button";
import WaveDivider from "@/components/WaveDivider";
import PrefooterCta from "@/components/PrefooterCta";
import { homeHealthAidePage, prefooterDefault } from "@/lib/content";

export default function HomeHealthAidePage() {
  const { hero, howTheyHelp } = homeHealthAidePage;

  return (
    <>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">Home Health Aides</p>
          <h1 className="mt-4 max-w-2xl text-4xl md:text-5xl font-semibold leading-tight">
            {hero.title.replace(hero.highlight, "")}
            <span className="italic text-gold">{hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80 leading-relaxed">{hero.description}</p>
          <Button href="/enroll-now" className="mt-8">Apply for Homecare</Button>
        </div>
      </section>
      <WaveDivider />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-navy">{howTheyHelp.title}</h2>
        <ul className="mt-8 space-y-4">
          {howTheyHelp.items.map((item) => (
            <li key={item} className="flex gap-4 text-ink/85 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brick shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <PrefooterCta {...prefooterDefault} />
    </>
  );
}
