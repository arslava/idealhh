import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "outline" | "primary" | "secondary";
  className?: string;
};

// Matches the real .c-button system, verified against the theme's actual
// compiled CSS:
//   .c-button base: pill (30px radius), 1px solid accent border, accent text
//   .c-button--primary: white bg, NO border (border:none) — accent text
//   .c-button--secondary: solid accent bg, white text
//   .c-button--outline: transparent bg, accent border+text (= base button)
//   All three hover to an inverted fill (accent<->white swap).
export default function Button({ href, children, variant = "outline", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full min-w-[196px] px-6 py-3.5 text-[1.125rem] font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variants = {
    outline: "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white",
    primary: "bg-white border-0 text-accent hover:bg-accent hover:text-white",
    secondary: "bg-accent border border-accent text-white hover:bg-white hover:text-accent hover:border-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
