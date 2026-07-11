#!/usr/bin/env bash
#
# Copies real image files from a local WordPress install's uploads folder
# into this project's public/images directory, matching them up by filename.
#
# WordPress stores uploads nested by year/month (e.g.
# wp-content/uploads/2023/09/photo.jpg), so this searches recursively rather
# than assuming a flat folder.
#
# USAGE:
#   ./scripts/copy-wp-images.sh /Users/papa/idealhh-wp/wp-content
#
# Run from the project root, or pass the project root as a second arg:
#   ./scripts/copy-wp-images.sh /Users/papa/idealhh-wp/wp-content /path/to/idealhh-nextjs

set -euo pipefail

WP_CONTENT="${1:-}"
PROJECT_ROOT="${2:-$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)}"

if [[ -z "$WP_CONTENT" ]]; then
  echo "Usage: $0 /path/to/wp-content [/path/to/idealhh-nextjs]"
  exit 1
fi

UPLOADS="$WP_CONTENT/uploads"
if [[ ! -d "$UPLOADS" ]]; then
  echo "Error: $UPLOADS not found. Pass the wp-content folder (the one containing 'uploads'), not wp-content/uploads itself."
  exit 1
fi

DEST_ROOT="$PROJECT_ROOT/public/images"
DEST_CONDITIONS="$DEST_ROOT/conditions"
DEST_BLOG="$DEST_ROOT/blog"
mkdir -p "$DEST_ROOT" "$DEST_CONDITIONS" "$DEST_BLOG"

FOUND=0
MISSING=0
MISSING_LIST=()

# copy_file <filename> <destination-dir>
copy_file() {
  local name="$1"
  local dest="$2"
  # find first match, case-insensitive, anywhere under uploads
  local match
  match="$(find "$UPLOADS" -type f -iname "$name" -print -quit)"
  if [[ -n "$match" ]]; then
    cp "$match" "$dest/$name"
    echo "  ✓ $name  (from ${match#"$UPLOADS/"})"
    FOUND=$((FOUND + 1))
  else
    echo "  ✗ $name  NOT FOUND"
    MISSING=$((MISSING + 1))
    MISSING_LIST+=("$name")
  fi
}

echo "== Root images -> public/images/ =="
ROOT_IMAGES=(
  "compassionate-home-health-care-services-nyc.jpg"
  "home-health-care-in-nyc.jpg"
  "personalized-home-health-care-new-york.jpg"
  "Daco_924160.png"
  "join-ideal-home-health-care-nyc.jpg"
  "home-health-aides-new-york.jpg"
  "visiting-home-nurse-new-york.jpg"
  "choose-ideal-home-health-care-nyc.jpg"
  "certified-home-health-aides-new-york.jpg"
  "registered-visiting-home-nurse-nyc.jpg"
  "visiting-home-nurse-care-nyc.jpg"
  "visiting-home-nurse-care.jpg"
  "in-home-health-care-nyc.jpg"
  "brooklyn-families-choose-ideal-home-health-1.jpg"
  "home-health-care-bronx.jpg"
  "home-health-care-bronx-contact.jpg"
  "bronx-families-choose-ideal-home-health.jpg"
  "home-health-care-manhattan.jpg"
  "home-health-care-manhattan-contact.jpg"
  "manhattan-families-choose-ideal-home-health.jpg"
  "map.png"
  "in-home-care-nyc.jpg"
  "trusted-home-care-agency-new-york-city.jpg"
  "compassionate-in-home-care-nyc.jpg"
  "registered-home-nurse-nyc.jpg"
  "iStock-1181209194.jpg"
  "home-health-caregiver-nyc.jpg"
  "home-health-caregiver-career.jpg"
  "ideal-home-health-caregiver-application-processing-nyc.jpg"
  "caregiver-at-ideal-home-health-nyc.jpg"
  "ideal-home-health-caregiver-nyc.jpg"
  "compassionate-representative-ideal-home-health.jpg"
)
for f in "${ROOT_IMAGES[@]}"; do copy_file "$f" "$DEST_ROOT"; done

echo ""
echo "== Condition page images -> public/images/conditions/ =="
CONDITION_IMAGES=(
  "24-hour-live-in-care-new-york-city.jpg"
  "arthritis-and-pain-management-nyc.jpg"
  "assisting-parkinsons-patient-nyc.jpg"
  "caring-bed-bound-patient-nyc.jpg"
  "compassionate-representative-ideal-home-health.jpg"
  "contact-home-health-care-nyc.jpg"
  "custom-plan-in-home-arthritis-management-nyc.jpg"
  "custome-care-for-stroke-nyc.jpg"
  "enroll-in-home-health-care-nyc.jpg"
  "epilepsy-home-care-nyc.jpg"
  "fall-prevention-and-safety-care-nyc.jpg"
  "fall-prevention-care-in-nyc.jpg"
  "help-with-daily-tasks-nyc.jpg"
  "help-with-homely-tasks-nyc.jpg"
  "home-care-for-wheelchair-bound-patients-nyc.jpg"
  "home-health-caregiver-nyc.jpg"
  "in-home-arthritis-care-nyc.jpg"
  "in-home-care-blood-pressure-monitoring-nyc.jpg"
  "in-home-care-for-stroke-recovery-nyc.jpg"
  "in-home-diabetic-care-nyc.jpg"
  "in-home-epilepsy-care-nyc.jpg"
  "in-home-fall-prevention-and-safety-care-nyc.jpg"
  "in-home-parkinsons-care-nyc.jpg"
  "in-home-patient-lifting-and-transferring-nyc.jpg"
  "in-home-stroke-care-and-recovery-nyc-1.jpg"
  "individualized-care-plan-new-york-city.jpg"
  "individualized-home-care-nyc.jpg"
  "individualized-home-care-plan-nyc.jpg"
  "live-in-assistance-nyc.jpg"
  "parkinsons-care-custom-plan.jpg"
  "patient-lifting-and-transferring-new-york-city.jpg"
  "post-hospital-care-new-york-city.jpg"
  "post-hospital-recovery-care-nyc.jpg"
  "specialized-patient-lifting-and-transferring-nyc.jpg"
)
for f in "${CONDITION_IMAGES[@]}"; do copy_file "$f" "$DEST_CONDITIONS"; done

echo ""
echo "== Blog images -> public/images/blog/ =="
BLOG_IMAGES=(
  "what-aging-in-place-means-for-seniors-1.jpg"
  "things-to-remember-when-caring-for-elderly-loved-ones.jpg"
  "the-risks-of-dementia-among-seniors.jpg"
  "you-can-hire-your-relative-to-care-for-you.jpg"
  "what-happens-to-the-body-during-a-stroke.jpg"
  "positive-effects-of-music-among-seniors.jpg"
  "keeping-the-home-quarantine-blues-away.jpg"
  "how-do-home-health-aides-help.jpg"
  "what-are-the-benefits-of-having-a-visiting-home-nurse.jpg"
  "characteristics-of-a-wound-care-nurse.jpg"
  "how-to-maintain-an-effective-diabetic-care.jpg"
)
for f in "${BLOG_IMAGES[@]}"; do copy_file "$f" "$DEST_BLOG"; done

echo ""
echo "=============================================="
echo "Done. Found: $FOUND   Missing: $MISSING"
if [[ $MISSING -gt 0 ]]; then
  echo ""
  echo "Missing files (search your WP Media Library for these by name):"
  for m in "${MISSING_LIST[@]}"; do echo "  - $m"; done
fi
echo ""
echo "NOTE: This script only covers filenames already confirmed from the WP"
echo "export/SQL. It does NOT cover the placeholder image paths added during"
echo "the Russian migration for attachment IDs that had no filename on record"
echo "(e.g. hero_banner_image on Home Health Aide/Visiting Home Nurse/Become"
echo "a Caregiver/Careers, prefooter CTA images, condition page intro-section"
echo "images). Those were marked with '// attachment id NNN — filename"
echo "unverified' comments in lib/content.ru.ts and lib/conditions.ru.ts."
echo "For those, look up the attachment ID directly in your WordPress admin:"
echo "  https://your-site.com/wp-admin/upload.php?item=NNN"
echo "then either rename the real file to match the placeholder path already"
echo "in the code, or tell me the real filename and I'll update the code."
