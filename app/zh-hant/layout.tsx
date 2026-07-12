import HeaderZhHant from "@/components/HeaderZhHant";
import FooterZhHant from "@/components/FooterZhHant";

export default function ZhHantLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderZhHant />
      <main>{children}</main>
      <FooterZhHant />
    </>
  );
}
