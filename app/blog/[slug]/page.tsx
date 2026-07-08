import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import PrefooterCta from "@/components/PrefooterCta";
import { blogPosts } from "@/lib/blog";
import { prefooterDefault } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[840px] px-4 py-16 lg:py-20">
          <Link href="/blog" className="text-sm text-white/70 hover:text-accent">← Back to Blog</Link>
          <p className="mt-6 text-xs text-white/50 uppercase tracking-wide">{formatDate(post.date)}</p>
          <h1 className="mt-3 font-display text-3xl md:text-5xl leading-[1.1]">{post.title}</h1>
        </div>
      </section>

      {post.image && (
        <div className="relative aspect-[16/9] max-w-[1140px] mx-auto -mt-8 mb-4 rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(56,75,116,0.15)]">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      )}

      <article className="mx-auto max-w-[760px] px-4 py-12">
        <div
          className="prose-blog text-grey-800 leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-navy-800 [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-2 [&_a]:text-accent [&_a]:underline [&_b]:font-semibold [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <div className="mt-10">
          <Button href="/blog" variant="outline">← Back to All Posts</Button>
        </div>
      </article>

      <PrefooterCta {...prefooterDefault} />
    </>
  );
}
