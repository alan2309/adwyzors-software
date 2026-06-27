"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  arrow = false,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus-ring relative overflow-hidden";

  const variants = {
    primary:
      "bg-ink text-bg hover:bg-ink/90 hover:shadow-elevated",
    secondary:
      "bg-white text-ink border border-line hover:border-ink/20 hover:shadow-soft",
    ghost: "text-ink hover:bg-ink/5",
    outline: "border border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-bg",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <motion.span
          className="relative z-10"
          initial={{ x: 0, y: 0 }}
          whileHover={{ x: 3, y: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}