import localFont from "next/font/local";

// Real brand font, extracted from the theme's actual font files
// (idealhh.com wp-content/themes/ideal). Self-hosted here since ProximaNova
// isn't on Google Fonts and needs a license — these files were pulled
// directly from the theme.
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

// Cormorant Garamond is the real display/heading font per the theme CSS
// (.c-hero-home__title, .c-intro__title). It IS a Google Font, but this
// sandbox has no network access to fonts.googleapis.com, so we fall back to
// a system serif stack for now. Swap in the commented block below once
// running in an environment with internet access:
//
//   import { Cormorant_Garamond } from "next/font/google";
//   export const cormorant = Cormorant_Garamond({
//     variable: "--font-cormorant",
//     subsets: ["latin"],
//     weight: ["500", "600", "700", "900"],
//   });
