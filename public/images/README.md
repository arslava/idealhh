# Images

Copy these exact filenames from your WordPress `wp-content/uploads/`
directory into this folder. Pages reference these paths via `next/image`.

## Home
- compassionate-home-health-care-services-nyc.jpg
- home-health-care-in-nyc.jpg
- personalized-home-health-care-new-york.jpg
- Daco_924160.png
- join-ideal-home-health-care-nyc.jpg

## Services
- home-health-aides-new-york.jpg
- visiting-home-nurse-new-york.jpg
- choose-ideal-home-health-care-nyc.jpg
- certified-home-health-aides-new-york.jpg
- registered-visiting-home-nurse-nyc.jpg
- visiting-home-nurse-care-nyc.jpg
- visiting-home-nurse-care.jpg
- in-home-health-care-nyc.jpg (conditions hero)

## Locations
- brooklyn-families-choose-ideal-home-health-1.jpg
- home-health-care-bronx.jpg
- home-health-care-bronx-contact.jpg
- bronx-families-choose-ideal-home-health.jpg
- home-health-care-manhattan.jpg
- home-health-care-manhattan-contact.jpg
- manhattan-families-choose-ideal-home-health.jpg
- map.png
- in-home-care-nyc.jpg

## About / Contact
- trusted-home-care-agency-new-york-city.jpg
- compassionate-in-home-care-nyc.jpg
- registered-home-nurse-nyc.jpg
- iStock-1181209194.jpg

## Careers
- home-health-caregiver-nyc.jpg
- home-health-caregiver-career.jpg
- ideal-home-health-caregiver-application-processing-nyc.jpg
- caregiver-at-ideal-home-health-nyc.jpg
- ideal-home-health-caregiver-nyc.jpg

## Enroll Now
- compassionate-representative-ideal-home-health.jpg

Not yet wired up: individual condition detail pages, blog, testimonials/reviews
page, resources/FAQ, and the enrollment/contact forms (need a backend
decision — Formspree, email API, or CRM webhook).

## Fonts
Real ProximaNova files are in /public/fonts, wired via app/fonts.ts
(next/font/local). Cormorant Garamond loads via next/font/google — needs
internet access at build time, which DigitalOcean's build servers have.

## Blog (put these in /public/images/blog/, not /public/images/)
- what-aging-in-place-means-for-seniors-1.jpg
- things-to-remember-when-caring-for-elderly-loved-ones.jpg
- the-risks-of-dementia-among-seniors.jpg
- you-can-hire-your-relative-to-care-for-you.jpg
- what-happens-to-the-body-during-a-stroke.jpg
- positive-effects-of-music-among-seniors.jpg
- keeping-the-home-quarantine-blues-away.jpg
- how-do-home-health-aides-help.jpg
- what-are-the-benefits-of-having-a-visiting-home-nurse.jpg
- characteristics-of-a-wound-care-nurse.jpg
- how-to-maintain-an-effective-diabetic-care.jpg

Note: the "Tips for Seniors to Stay Warm" post uses the same image as
"Things to Remember..." — that's not a bug, it's what the original site had.

The "DailyPay Partnership" post has no featured image in the source data.

## Excluded from migration
Three posts were dropped entirely after review: "What Are the Dangers of
Driving Drunk?", "Letter From My Addiction Template Download", and "The
Health Dangers of IV Drug Use." None mention Ideal Home Health or home care,
and all three hotlinked images from an unrelated third-party domain
(ecosoberhouse.com) — this looked like spam/syndicated content rather than
real site content, so it wasn't migrated. Worth checking the live WordPress
site to confirm whether this was intentional or a compromise.
