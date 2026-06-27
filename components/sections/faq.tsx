"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { faqs } from "@/lib/constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <Section id="faq" narrow>
      <SectionHeader
        eyebrow="FAQ"
        title={<>Frequently asked <span className="text-muted">questions.</span></>}
        align="center"
      />

      <div className="mt-16 space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="border border-line bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:border-ink/20"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left font-display text-lg font-semibold text-ink focus-ring"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted transition-transform duration-300 shrink-0 ml-4",
                    isOpen && "rotate-180 text-ink"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 text-muted leading-relaxed text-[15px]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}