import { Cormorant_Garamond, Public_Sans, PT_Sans } from "next/font/google";

// Both fonts are genuinely free/open-source Google Fonts — no licensing
// question here. ProximaNova (previously self-hosted) has been removed
// entirely: it's a commercial font and we didn't have a confirmed license
// covering redistribution via a public git repo. Public Sans is a very close
// visual substitute — same humanist proportions, similar weight range
// (400/600/700/900 map directly to Regular/Semibold/Bold/Black).
//
// NOTE: Public Sans does NOT ship a "cyrillic" subset (only latin,
// latin-ext, vietnamese) — confirmed by a real DigitalOcean build failure,
// not a guess. Cyrillic body text on /ru/ pages uses PT Sans instead (see
// below), not Public Sans.
export const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

// Real display/heading font confirmed from the theme CSS (.c-hero-home__title,
// .c-intro__title). weight:"variable" loads the variable font so any
// font-weight (including 900, which has no static cut for this family) still
// renders correctly. Cormorant Garamond DOES support a cyrillic subset
// (confirmed — this one built successfully), so it's used as-is for both
// English and Russian headings.
export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: "variable",
});

// Cyrillic-capable body font for Russian pages only (/ru/*). PT Sans is a
// genuinely free Google Font with real cyrillic support and similar
// humanist-sans proportions to Public Sans, so the two don't clash visually
// across languages.
export const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});
