import { homeHealthAideResourcesPage } from "@/lib/content";

export default function HomeHealthAideResourcesPage() {
  const { hero, forms } = homeHealthAideResourcesPage;

  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-black text-navy-800">{hero.title}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[840px] px-4 py-16">
        <h2 className="font-display text-2xl font-semibold text-navy-800">Forms</h2>
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
              className="rounded-2xl border border-navy-900/10 bg-white p-5 shadow-[0_10px_30px_rgba(56,75,116,0.05)] hover:shadow-[0_10px_30px_rgba(56,75,116,0.1)] transition-shadow flex items-center justify-between gap-3"
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
