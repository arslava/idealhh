# Images

Drop these exact filenames in this folder (copied from your WordPress
`wp-content/uploads/` directory). The pages reference these paths via
`next/image`.

- compassionate-home-health-care-services-nyc.jpg  (home hero)
- home-health-care-in-nyc.jpg                       (home / who benefits)
- personalized-home-health-care-new-york.jpg        (home / custom plans)
- Daco_924160.png                                   (home / locations map graphic)
- join-ideal-home-health-care-nyc.jpg               (home / careers)
- home-health-aides-new-york.jpg                    (services / HHA card)
- visiting-home-nurse-new-york.jpg                  (services / nurse card)
- choose-ideal-home-health-care-nyc.jpg             (services / why choose)
- certified-home-health-aides-new-york.jpg          (HHA detail page)
- brooklyn-families-choose-ideal-home-health-1.jpg  (Brooklyn / why choose)

Not yet wired up (pages are still placeholders): careers hero, about-us hero,
about-us prefooter, contact-us prefooter. Those slots will need images once
those pages get built out.

## Fonts
Real ProximaNova font files (woff2, weights 400/600/700/900) are already
included in /public/fonts and wired up in app/fonts.ts.

Cormorant Garamond (the real display/heading font, confirmed from the theme's
actual CSS) is a genuine Google Font — the commented-out code in app/fonts.ts
shows exactly how to enable it once this runs somewhere with internet access
during build. Until then, headings fall back to a system serif stack that
approximates its proportions.
