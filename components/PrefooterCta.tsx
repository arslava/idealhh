import { ReactNode } from "react";
import Image from "next/image";
import Button from "./Button";
import { site } from "@/lib/content";

type PrefooterCtaProps = {
  title: string;
  description: ReactNode;
  button: { title: string; href: string };
  image?: string;
};

// Real contact/prefooter section uses .u-bg-secondary (#9b2c4d, wine) per
// the theme CSS — not the button accent color. Some pages have a real
// source image alongside this section (confirmed via live fetch); when
// present, render a two-column layout instead of the plain centered one.
export default function PrefooterCta({ title, description, button, image }: PrefooterCtaProps) {
  if (image) {
    return (
      <section className="bg-wine text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="font-display text-3xl md:text-4xl font-semibold">{title}</h2>
            <p className="mt-4 text-white/85 max-w-xl leading-relaxed">{description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Button href={button.href} variant="primary">
                {button.title}
              </Button>
              <a href={site.phoneHref} className="text-[1.5625rem] font-extrabold text-white hover:text-white/80">
                Call us today! {site.phone}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src={image} alt="" fill className="object-cover" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-wine text-white">
      <div className="mx-auto max-w-[1140px] px-4 py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">{title}</h2>
        <p className="mt-4 text-white/85 max-w-xl mx-auto leading-relaxed">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={button.href} variant="primary">
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
