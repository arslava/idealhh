import { tosPage } from "@/lib/content";
import { tosHtml } from "@/lib/tos-text";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "tos",
  locale: "en",
  title: "Terms of Service | Ideal Home Health",
  description: "The Terms of Service governing your use of the Ideal Home Health website and services.",
});

export default function TosPage() {
  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16 text-center">
          <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05] font-black text-navy-800">{tosPage.hero.title}</h1>
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
