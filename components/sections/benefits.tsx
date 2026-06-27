"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Eye,
  ShieldCheck,
  Zap,
  IndianRupee,
  Users,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Complete visibility",
    description: "See every order, every stock movement, every receivable — in real time, from anywhere.",
  },
  {
    icon: Zap,
    title: "Faster operations",
    description: "Workflows that took days take hours. Approvals that took calls take clicks.",
  },
  {
    icon: IndianRupee,
    title: "Working capital freed",
    description: "Less dead stock. Fewer overdue receivables. More cash in the business.",
  },
  {
    icon: ShieldCheck,
    title: "Audit-ready always",
    description: "Every transaction logged. Every change tracked. GST, audit, and compliance on demand.",
  },
  {
    icon: Users,
    title: "Team accountability",
    description: "Role-based access. Clear ownership. No more 'I didn't know' or 'it was in WhatsApp'.",
  },
  {
    icon: TrendingUp,
    title: "Decisions on data",
    description: "Reports that answer the questions you actually have — not the ones a vendor guessed.",
  },
];

export function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section>
      <SectionHeader
        eyebrow="Why it matters"
        title={
          <>
            The outcomes our<br />
            <span className="text-muted">clients actually care about.</span>
          </>
        }
      />

      <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-7 rounded-2xl border border-line bg-white hover:shadow-soft transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                <Icon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-muted text-[15px] leading-relaxed">{b.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}