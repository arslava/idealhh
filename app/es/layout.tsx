import HeaderEs from "@/components/HeaderEs";
import FooterEs from "@/components/FooterEs";

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderEs />
      <main>{children}</main>
      <FooterEs />
    </>
  );
}
