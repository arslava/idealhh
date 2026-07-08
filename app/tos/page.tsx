import { tosPage } from "@/lib/content";
import { tosHtml } from "@/lib/tos-text";

export default function TosPage() {
  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-black text-navy-800">{tosPage.hero.title}</h1>
        </div>
      </section>

      <article className="mx-auto max-w-[760px] px-4 py-16">
        <div
          className="text-grey-800 leading-relaxed [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-2 [&_strong]:font-semibold [&_strong]:text-navy-800"
          dangerouslySetInnerHTML={{ __html: tosHtml }}
        />
      </article>
    </>
  );
}
