import Link from "next/link";
import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import ContactFormZhHant from "@/components/ContactFormZhHant";
import ReviewsCarouselZhHant from "@/components/ReviewsCarouselZhHant";
import { zhHantContactUsPage } from "@/lib/content.zh-hant";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "contactUs",
  locale: "zhHant",
  title: "聯絡我們 | Ideal Home Health 布魯克林與布朗克斯",
  description: "歡迎致電 Ideal Home Health (718) 517-2424 或透過表單與我們聯繫。我們在布魯克林與布朗克斯均設有辦公室，服務範圍涵蓋整個紐約市。",
});

export default function ZhHantContactUsPage() {
  const { hero, officeCards, prefooterCta } = zhHantContactUsPage;
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h1 className="font-display text-[2.8125rem] md:text-[3.75rem] leading-[1.05] font-black">{hero.title}</h1>
              <div className="mt-6 space-y-4">
                {hero.paragraphs.map((p, i) => (
                  <p key={i} className="text-[1.125rem] text-white/90 leading-relaxed">{p}</p>
                ))}
                {hero.links.map((l) => (
                  <p key={l.href} className="text-[1.125rem] text-white/90 leading-relaxed">
                    {l.prefix}
                    <Link href={l.href} className="text-accent font-semibold underline">{l.label}</Link>
                  </p>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-[510px] rounded-[10px] bg-white shadow-[0_20px_40px_rgba(56,75,116,0.1)] p-11 text-left">
                <h2 className="font-display text-2xl font-semibold text-navy-800 text-center">聯絡我們</h2>
                <div className="mt-6"><ContactFormZhHant /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsCarouselZhHant />

      <section className="bg-bg-light py-16">
        <div className="mx-auto max-w-2xl px-4 grid sm:grid-cols-2 gap-6">
          {officeCards.map((office) => (
            <div key={office.title} className="rounded-3xl border border-navy-900/10 bg-white p-8 text-center shadow-[0_20px_40px_rgba(56,75,116,0.08)] flex flex-col items-center">
              <h3 className="font-display text-[1.875rem] font-black text-navy-800">{office.title}</h3>
              <p className="mt-3 text-[1.125rem] text-navy-muted leading-relaxed">{office.address}</p>
              <p className="mt-1 text-sm text-navy-muted">{office.phoneLine}</p>
              <Button href={office.button.href} variant="outline" className="mt-6">{office.button.title}</Button>
            </div>
          ))}
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
