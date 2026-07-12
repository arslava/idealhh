import LocationPageContent from "@/components/LocationPageContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  key: "locationBronx",
  locale: "en",
  title: "Home Health Care in The Bronx, NY | Ideal Home Health",
  description: "Ideal Home Health is a trusted home care agency in The Bronx, New York, providing Home Health Aides and Visiting Nurses to neighborhoods across the borough.",
});

export default function BronxPage() {
  return <LocationPageContent locationKey="bronx" />;
}
