// @ts-nocheck
import HeaderRu from "@/components/HeaderRu";
import FooterRu from "@/components/FooterRu";

export default function RussianLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderRu />
      <main>{children}</main>
      <FooterRu />
    </>
  );
}
