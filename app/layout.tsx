import type { Metadata } from "next";
import "./globals.css";
import { publicSans, cormorant } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
