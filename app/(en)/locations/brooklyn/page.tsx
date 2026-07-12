import LocationPageContent from "@/components/LocationPageContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "locationBrooklyn",
  locale: "en",
  title: "Home Health Care in Brooklyn, NY | Ideal Home Health",
  description: "Ideal Home Health is a trusted home health care agency in Brooklyn, New York, providing Home Health Aides and Visiting Nurses to neighborhoods across the borough.",
});

export default function BrooklynPage() {
  return <LocationPageContent locationKey="brooklyn" />;
}
