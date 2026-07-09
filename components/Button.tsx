import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "outline" | "primary" | "secondary";
  className?: string;
};

// Matches the real .c-button system from the theme CSS: pill shape
// (30px radius), min-width ~200px, semibold weight, 1px accent border.
// (Font is Public Sans, not the original theme's ProximaNova — see app/fonts.ts.)
// outline = transparent bg / accent text+border (theme default)
// primary  = white bg / accent border+text
// secondary = solid accent bg / white text
export default function Button({ href, children, variant = "outline", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full min-w-[196px] px-6 py-3.5 text-[1.125rem] font-semibold border transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variants = {
    outline: "bg-transparent border-accent text-accent hover:bg-accent hover:text-white",
    primary: "bg-white border-accent text-accent hover:bg-accent hover:text-white",
    secondary: "bg-accent border-accent text-white hover:bg-white hover:text-accent",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
