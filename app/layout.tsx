import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { publicSans, cormorant } from "./fonts";
import LanguageSwitcherMobile from "@/components/LanguageSwitcherMobile";

// Header/Footer now live per-locale (app/(en)/layout.tsx for English,
// app/ru/layout.tsx for Russian) instead of here, since a shared global
// header/footer meant Russian pages were showing an English nav — doesn't
// make sense for a translated page.
export const metadata: Metadata = {
  title: "Ideal Home Health | Compassionate Home Care in New York City",
  description:
    "Ideal Home Health provides compassionate home health care services across Brooklyn and the Bronx — Home Health Aides, Visiting Nurses, and personalized care plans.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Only the root layout can render <html>, so per-locale nested layouts
  // (app/ru/layout.tsx, app/es/layout.tsx, app/ar/layout.tsx) can't set
  // `lang`/`dir` themselves — every non-EN page was previously shipping
  // lang="en" (and no dir attribute at all) to browsers, screen readers,
  // and search engines. middleware.ts detects the locale from the
  // pathname and passes it through via a request header.
  const headersList = await headers();
  const locale = headersList.get("x-locale") ?? "en";
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${publicSans.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        {children}
        <LanguageSwitcherMobile />
      </body>
    </html>
  );
}
