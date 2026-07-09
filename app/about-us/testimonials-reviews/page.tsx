import { Star } from "lucide-react";
import PrefooterCta from "@/components/PrefooterCta";
import { testimonialsPage } from "@/lib/content";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < rating ? "fill-accent text-accent" : "text-navy-muted/30"} />
      ))}
    </div>
  );
}

export default function TestimonialsReviewsPage() {
  const { hero, testimonials, reviews, prefooterCta } = testimonialsPage;

  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16 text-center">
          <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05] font-black text-navy-800">{hero.title}</h1>
          <h2 className="mt-3 text-xl md:text-2xl text-navy-700 font-semibold">{hero.subtitle}</h2>
          <p className="mt-4 text-[1.125rem] md:text-[1.375rem] text-grey-800 leading-relaxed max-w-2xl mx-auto">{hero.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">Testimonials</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-3xl bg-white border border-navy-900/10 p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)] flex flex-col">
              <Stars rating={t.rating} />
              <p className="mt-4 text-[1.125rem] md:text-[1.375rem] text-grey-800 leading-relaxed flex-1">&ldquo;{t.content}&rdquo;</p>
              <div className="mt-4">
                <p className="font-semibold text-navy-800">{t.author}</p>
                <p className="text-sm text-navy-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="mx-auto max-w-[1140px] px-4 py-16">
          <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800 text-center">Reviews</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-3xl bg-white border border-navy-900/10 p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)]">
                <Stars rating={r.rating} />
                <p className="mt-3 text-[1.125rem] md:text-[1.375rem] text-grey-800 leading-relaxed">{r.review}</p>
                <p className="mt-4 font-semibold text-navy-800">{r.name} <span className="font-normal text-navy-muted">— {r.location}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PrefooterCta {...prefooterCta} />
    </>
  );
}
