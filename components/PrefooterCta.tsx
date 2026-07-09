import Button from "./Button";
import { site } from "@/lib/content";

type PrefooterCtaProps = {
  title: string;
  description: string;
  button: { title: string; href: string };
};

// Real contact/prefooter section uses .u-bg-secondary (#9b2c4d, wine) per
// the theme CSS — not the button accent color.
export default function PrefooterCta({ title, description, button }: PrefooterCtaProps) {
  return (
    <section className="bg-wine text-white">
      <div className="mx-auto max-w-[1140px] px-4 py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">{title}</h2>
        <p className="mt-4 text-white/85 max-w-xl mx-auto leading-relaxed">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={button.href} variant="primary" className="!bg-white">
            {button.title}
          </Button>
          <a href={site.phoneHref} className="text-[1.5625rem] font-extrabold text-white hover:text-white/80">
            Call us today! {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
