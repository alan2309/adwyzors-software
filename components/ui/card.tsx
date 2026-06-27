import { cn } from "@/lib/utils";
import Link from "next/link";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
};

export function Card({ children, className, href, hover = true }: CardProps) {
  const base = cn(
    "group relative rounded-3xl border border-line bg-white p-8 transition-all duration-500",
    hover && "hover:border-ink/20 hover:shadow-elevated hover:-translate-y-0.5",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cn(base, "block")}>
        {children}
      </Link>
    );
  }
  return <div className={base}>{children}</div>;
}