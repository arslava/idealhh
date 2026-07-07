import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// NOTE: this build environment has no outbound access to fonts.googleapis.com,
// so we fall back to system stacks defined in globals.css. In a normal dev/deploy
// environment, swap back to `next/font/google` with Fraunces + Public Sans:
//
//   import { Fraunces, Public_Sans } from "next/font/google";
//   const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], weight: ["400","500","600","700"], style: ["normal","italic"] });
//   const publicSans = Public_Sans({ variable: "--font-public-sans", subsets: ["latin"], weight: ["400","500","600","700"] });
//
// and add `${fraunces.variable} ${publicSans.variable}` to the body className below.

export const metadata: Metadata = {
  title: "Ideal Home Health | Compassionate Home Care in New York City",
  description:
    "Ideal Home Health provides compassionate home health care services across Brooklyn, the Bronx, and Manhattan — Home Health Aides, Visiting Nurses, and personalized care plans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
