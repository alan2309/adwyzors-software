"use client";

import { siteConfig, navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl px-6 md:px-10 transition-all duration-500",
            scrolled &&
            "bg-bg/80 backdrop-blur-xl border border-line/60 rounded-full shadow-soft mx-4 md:mx-6"
          )}
        >
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2.5 focus-ring rounded-lg">
              <LogoMark />
              <span className="font-display font-bold text-lg tracking-tight">{siteConfig.name}</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 text-sm rounded-full transition-colors",
                      active ? "text-ink bg-ink/5" : "text-muted hover:text-ink"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <Button href="/contact" variant="primary" size="sm" arrow>
                Book consultation
              </Button>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 focus-ring rounded-lg"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function LogoMark() {
  return (
    <div className="relative w-7 h-7 rounded-lg bg-ink flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
        <path
          d="M12 3L3 20h4l1.5-3h7l1.5 3h4L12 3zm-2 11l2-4 2 4h-4z"
          fill="#FAFAFA"
        />
      </svg>
      <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent" />
    </div>
  );
}