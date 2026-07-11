import { Cormorant_Garamond, Public_Sans } from "next/font/google";

// Both fonts are genuinely free/open-source Google Fonts — no licensing
// question here. ProximaNova (previously self-hosted) has been removed
// entirely: it's a commercial font and we didn't have a confirmed license
// covering redistribution via a public git repo. Public Sans is a very close
// visual substitute — same humanist proportions, similar weight range
// (400/600/700/900 map directly to Regular/Semibold/Bold/Black).

export const publicSans = Public_Sans({
  variable: "--font-public-sans",
  // Public Sans has no Google Fonts cyrillic subset — only latin, latin-ext,
  // vietnamese are available for this family. Cyrillic text on /ru/ pages
  // will render with the browser's fallback sans-serif for glyphs outside
  // latin, which is fine visually (Cormorant Garamond below does have a
  // cyrillic subset and covers the display/heading font).
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

// Real display/heading font confirmed from the theme CSS (.c-hero-home__title,
// .c-intro__title). weight:"variable" loads the variable font so any
// font-weight (including 900, which has no static cut for this family) still
// renders correctly.
//
// Confirmed: Cormorant Garamond ships a "cyrillic" subset on Google Fonts
// (Public Sans above does not — latin only there).
export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: "variable",
});
