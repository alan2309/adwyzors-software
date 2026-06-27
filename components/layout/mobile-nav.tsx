"use client";

import { navLinks, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-[60]"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-bg z-[70] border-l border-line flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-line">
              <span className="font-display font-bold text-lg">{siteConfig.name}</span>
              <button onClick={onClose} className="p-2 focus-ring rounded-lg" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 p-6 space-y-1">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base ${active ? "bg-ink text-bg" : "text-ink hover:bg-ink/5"
                        }`}
                    >
                      <span className="font-medium">{link.label}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <div className="p-6 border-t border-line space-y-3">
              <Button href="/contact" variant="primary" size="lg" className="w-full" arrow>
                Book consultation
              </Button>
              <Button href={`https://wa.me/${siteConfig.whatsapp}`} external variant="secondary" size="lg" className="w-full">
                WhatsApp us
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}