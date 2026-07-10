import { languageAssistanceLines } from "@/lib/legal-text";

export default function LegalPage() {
  return (
    <>
      <section className="bg-bg-light">
        <div className="mx-auto max-w-[840px] px-4 py-16 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-black text-navy-800">
            Language Assistance / Nondiscrimination and Accessibility Requirements Notice
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-[760px] px-4 py-16 text-grey-800 leading-relaxed space-y-4">
        <p>
          Ideal Home Health complies with applicable Federal civil rights laws and does not discriminate
          on the basis of race, color, national origin, age, disability, or sex (including pregnancy,
          sexual orientation, and gender identity).
        </p>
        <p>Ideal Home Health:</p>
        <p>Provides free aids and services to people with disabilities to communicate effectively with us, such as:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Qualified sign language interpreters</li>
          <li>Written information in other formats (large print, audio, accessible electronic formats, other formats)</li>
        </ul>
        <p>Provides free language services to people whose primary language is not English, such as:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Qualified interpreters</li>
          <li>Information written in other languages</li>
        </ul>
        <p>If you need these services, please contact Yelisa Caba, HR Director/Designated Section 1557 Coordinator.</p>
        <p>
          If you believe that Ideal Home Health has failed to provide these services or discriminated in
          another way, you can file a grievance with:
        </p>
        <div className="rounded-2xl bg-bg-light p-6">
          <p className="font-semibold text-navy-800">Yelisa Caba</p>
          <p>Human Resource Director/Section 1557 Coordinator</p>
          <p>2617 E 16th Street, 2nd Floor</p>
          <p>Brooklyn, NY 11235</p>
          <p>Phone: 718-517-2424 x 807</p>
          <p>Fax: 347-391-2729</p>
        </div>
        <p>
          You can also file a civil rights complaint with the U.S. Department of Health and Human Services,
          Office for Civil Rights, electronically through the{" "}
          <a href="https://ocrportal.hhs.gov/ocr/portal/lobby.jsf" target="_blank" rel="noopener noreferrer" className="text-accent underline">
            Office for Civil Rights Complaint Portal
          </a>
          , or by phone (toll-free) at 1-800-368-1019 (1-800-537-7697 TDD), or by mail to U.S. Dept. of
          Health and Human Services, 200 Independence Avenue, SW Room 509F, HHH Building, Washington, D.C. 20201.
        </p>
        <p>
          ATTENTION: If you speak English, language assistance services, free of charge, are available to
          you. Please call 718-517-2424 x 807.
        </p>

        <h2 className="font-display text-2xl font-semibold text-navy-800 pt-6">Language Assistance</h2>
        <p>
          We provide free services to help you communicate with us — letters in other languages, large
          print, or an interpreter. Request language assistance by calling the number below in your language.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          {languageAssistanceLines.map((l) => (
            <div key={l.lang} className="rounded-xl bg-bg-light p-4">
              <p className="font-semibold text-navy-800 text-sm">{l.lang}</p>
              <p className="mt-1 text-sm">{l.text}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
