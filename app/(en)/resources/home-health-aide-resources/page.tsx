import { homeHealthAideResourcesPage } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "hhaResources",
  locale: "en",
  title: "Home Health Aide Resources | Ideal Home Health",
  description: "Timesheets, pre-employment requirements, and other forms and resources for Ideal Home Health's certified Home Health Aides.",
});

export default function HomeHealthAideResourcesPage() {
  const { hero, forms } = homeHealthAideResourcesPage;

  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16 text-center">
          <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05] font-black text-navy-800">{hero.title}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[840px] px-4 py-16">
        <h2 className="font-display text-[3.125rem] lg:text-[4.375rem] leading-[1.05] font-black text-navy-800">Forms</h2>
        <p className="mt-2 text-sm text-navy-muted">
          These link back to the original files on idealhh.com — re-upload them to this project if you'd rather host them here directly.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {forms.map((form) => (
            <a
              key={form.title}
              href={form.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-[0_20px_40px_rgba(56,75,116,0.08)] hover:shadow-[0_20px_40px_rgba(56,75,116,0.14)] transition-shadow transition-shadow flex items-center justify-between gap-3"
            >
              <span className="font-medium text-navy-800">{form.title}</span>
              <span className="text-accent text-sm font-semibold shrink-0">Download →</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
