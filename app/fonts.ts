import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";

export const proximaNova = localFont({
  src: [
    { path: "../public/fonts/ProximaNova-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/ProximaNova-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/ProximaNova-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/ProximaNova-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-proxima-nova",
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
});