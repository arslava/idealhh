import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "blog",
  locale: "en",
  title: "Blog | Ideal Home Health",
  description: "News, guides, and resources on home health care, aging in place, and caregiving from Ideal Home Health in New York City.",
});

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-16 lg:py-20">
          <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Resources</p>
          <h1 className="mt-4 font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05]">
            Ideal Home Health Blog
          </h1>
          <p className="mt-6 max-w-2xl text-[1.125rem] md:text-[1.375rem] text-white/80 leading-relaxed">
            Tips, insights, and updates on home care, caregiving, and healthy aging in New York City.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-3xl overflow-hidden bg-white border border-navy-900/10 shadow-[0_20px_40px_rgba(56,75,116,0.06)] flex flex-col"
          >
            <div className="relative aspect-[16/10] bg-bg-light">
              {post.image && (
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs text-navy-muted uppercase tracking-wide">{formatDate(post.date)}</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-navy-800 leading-snug group-hover:text-accent transition-colors">
                {post.title}
              </h2>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
