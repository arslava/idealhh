import Button from "./Button";
import { site } from "@/lib/content";

type PrefooterCtaProps = {
  title: string;
  description: string;
  button: { title: string; href: string };
};

export default function PrefooterCta({ title, description, button }: PrefooterCtaProps) {
  return (
    <section className="bg-accent text-paper">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
        <p className="mt-4 text-paper/85 max-w-xl mx-auto leading-relaxed">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={button.href} variant="secondary">
            {button.title}
          </Button>
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-paper underline underline-offset-4 decoration-sky"
          >
            or call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
