import HeaderRu from "@/components/HeaderRu";
import FooterRu from "@/components/FooterRu";

export default function RussianLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="[font-family:var(--font-pt-sans)]">
      <HeaderRu />
      <main>{children}</main>
      <FooterRu />
    </div>
  );
}
