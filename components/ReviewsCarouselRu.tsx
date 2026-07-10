import { Star } from "lucide-react";
import { ruReviewsSection } from "@/lib/content.ru";

export default function ReviewsCarouselRu() {
  return (
    <section className="bg-navy-600 py-16 md:py-20">
      <div className="mx-auto max-w-[1140px] px-4">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white text-center">
          {ruReviewsSection.title}
        </h2>
        <div className="mt-10 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          {ruReviewsSection.reviews.map((r) => (
            <div
              key={r.name}
              className="snap-start shrink-0 w-[300px] md:w-[340px] rounded-3xl bg-white p-6 shadow-[0_20px_40px_rgba(56,75,116,0.08)] flex flex-col"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < r.rating ? "fill-accent text-accent" : "text-navy-muted/30"} />
                ))}
              </div>
              <p className="mt-3 text-[1.0625rem] text-grey-800 leading-relaxed flex-1">{r.content}</p>
              <div className="mt-4">
                <p className="font-semibold text-navy-800">{r.name}</p>
                <p className="text-sm text-navy-muted">{r.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
