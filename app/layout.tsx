import type { Metadata } from "next";
import "./globals.css";
import { publicSans, cormorant } from "./fonts";

// Header/Footer now live per-locale (app/(en)/layout.tsx for English,
// app/ru/layout.tsx for Russian) instead of here, since a shared global
// header/footer meant Russian pages were showing an English nav — doesn't
// make sense for a translated page.
export const metadata: Metadata = {
  title: "Ideal Home Health | Compassionate Home Care in New York City",
  description:
    "Ideal Home Health provides compassionate home health care services across Brooklyn and the Bronx — Home Health Aides, Visiting Nurses, and personalized care plans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${publicSans.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
