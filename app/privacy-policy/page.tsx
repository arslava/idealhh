import { privacyPolicyPage } from "@/lib/content";
import { privacyPolicyParagraphs } from "@/lib/privacy-policy-text";

export default function PrivacyPolicyPage() {
  const { hero, intro, effectiveDate, contact } = privacyPolicyPage;

  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16 text-center">
          <h1 className="font-display text-[2.8125rem] md:text-[4.0625rem] lg:text-[5.625rem] leading-[1.05] font-black text-navy-800">{hero.title}</h1>
        </div>
      </section>

      <article className="mx-auto max-w-[760px] px-4 py-16">
        <p className="text-grey-800 leading-relaxed font-medium">{intro}</p>
        <p className="mt-4 text-sm text-navy-muted">{effectiveDate}</p>

        <div className="mt-6 rounded-2xl bg-bg-light p-6">
          <p className="font-semibold text-navy-800">{contact.title}</p>
          {contact.lines.map((line) => (
            <p key={line} className="text-grey-800">{line}</p>
          ))}
        </div>

        <div className="mt-10 space-y-4 text-grey-800 leading-relaxed">
          {privacyPolicyParagraphs.map((p, i) => (
            <p key={i} className="whitespace-pre-line">{p}</p>
          ))}
        </div>
      </article>
    </>
  );
}
