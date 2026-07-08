import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";

// Real brand font, self-hosted from the actual theme font files.
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

// Real display/heading font confirmed from theme CSS (.c-hero-home__title,
// .c-intro__title). weight:"variable" loads the variable font so any
// font-weight (including 900, which has no static cut for this family) still
// renders correctly.
export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "variable",
});
