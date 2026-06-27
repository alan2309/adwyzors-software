"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { TextReveal } from "@/components/ui/text-reveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileSpreadsheet,
  MessageCircle,
  BookOpen,
  Calculator,
  ClipboardList,
  Clock,
} from "lucide-react";

const problems = [
  {
    icon: BookOpen,
    title: "Registers",
    description: "Hand-written ledgers that nobody can audit, reconcile, or search.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel sheets",
    description: "14 versions of the truth. Locked cells. Broken formulas. Version chaos.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp groups",
    description: "Orders in chat. Approvals in voice notes. Nothing traceable.",
  },
  {
    icon: Calculator,
    title: "Manual calculations",
    description: "Piece-rate wages, scheme discounts, GST — computed on calculators.",
  },
  {
    icon: ClipboardList,
    title: "Manual inventory",
    description: "Stock counts that never match. Shrinkage discovered at year-end.",
  },
  {
    icon: Clock,
    title: "Month-end in 12 days",
    description: "Closing books, reconciling, reporting — a monthly ritual of pain.",
  },
];

export function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section className="bg-white border-y border-line" id="problem">
      <SectionHeader
        eyebrow="The reality"
        title={
          <>
            Your business is running on <TextReveal as="span" className="inline">tools built for 1995.</TextReveal>
          </>
        }
        description="Most Indian SMEs — from 5 to 500 people — operate on a patchwork of registers, Excel, and WhatsApp. It works. Until it doesn't. Then it costs you lakhs in lost sales, wrong shipments, and overdue receivables."
      />

      <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-3xl overflow-hidden border border-line">
        {problems.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 hover:bg-bg transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-ink/5 flex items-center justify-center mb-5 group-hover:bg-ink group-hover:text-bg transition-colors">
                <Icon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-muted leading-relaxed text-[15px]">{p.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted text-sm">
          Sound familiar?{" "}
          <a href="/contact" className="text-ink font-medium link-underline">
            Let&apos;s talk about fixing it →
          </a>
        </p>
      </div>
    </Section>
  );
}