import type { Locale } from "@/lib/slug-map";
import { LOCALE_FLAG } from "@/lib/locale-flags";

export default function Flag({
  locale,
  size = 20,
  className = "",
}: {
  locale: Locale;
  size?: number;
  className?: string;
}) {
  const cc = LOCALE_FLAG[locale];
  return (
    // Plain <img>, not next/image: this is an external flagcdn.com SVG,
    // not a local file, so Next's image optimizer wouldn't apply anyway.
    <img
      src={`https://flagcdn.com/${cc}.svg`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="lazy"
      style={{ width: size, height: size }}
      className={`inline-block shrink-0 rounded-full object-cover ring-1 ring-navy-muted/15 ${className}`}
    />
  );
}
