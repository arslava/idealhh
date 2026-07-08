import { Cormorant_Garamond, Public_Sans } from "next/font/google";

// Both fonts are genuinely free/open-source Google Fonts — no licensing
// question here. ProximaNova (previously self-hosted) has been removed
// entirely: it's a commercial font and we didn't have a confirmed license
// covering redistribution via a public git repo. Public Sans is a very close
// visual substitute — same humanist proportions, similar weight range
// (400/600/700/900 map directly to Regular/Semibold/Bold/Black).

export const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

// Real display/heading font confirmed from the theme CSS (.c-hero-home__title,
// .c-intro__title). weight:"variable" loads the variable font so any
// font-weight (including 900, which has no static cut for this family) still
// renders correctly.
export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "variable",
});
