import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

  const variants = {
    primary: "bg-brick text-paper hover:bg-brick-deep",
    secondary: "bg-navy text-paper hover:bg-navy-deep",
    ghost: "bg-transparent text-navy border border-navy/30 hover:bg-navy/5",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
