import HeaderAr from "@/components/HeaderAr";
import FooterAr from "@/components/FooterAr";

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderAr />
      <main>{children}</main>
      <FooterAr />
    </>
  );
}
