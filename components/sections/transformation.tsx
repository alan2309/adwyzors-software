"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const rows = [
  { before: "Paper registers", after: "Digital records, searchable & auditable" },
  { before: "14 Excel sheets", after: "One unified system of record" },
  { before: "WhatsApp orders", after: "Structured order workflow with approvals" },
  { before: "Month-end in 12 days", after: "Month-end in 2 days" },
  { before: "Stock accuracy 82%", after: "Stock accuracy 99.6%" },
  { before: "Owner blind after 6pm", after: "Real-time dashboards, anywhere" },
];

export function Transformation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section className="bg-ink text-bg">
      <SectionHeader
        eyebrow="The transformation"
        title={
          <span className="text-bg">
            From <span className="text-bg/50 line-through">chaos</span> to{" "}
            <span className="italic">clarity.</span>
          </span>
        }
        description={
          <span className="text-bg/60">
            The same business. The same people. A different operating system.
          </span>
        }
      />

      <div ref={ref} className="mt-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8">
          <div className="text-xs uppercase tracking-[0.18em] text-bg/40">Before</div>
          <div />
          <div className="text-xs uppercase tracking-[0.18em] text-bg/40">After</div>

          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="contents"
            >
              <div className="py-5 border-t border-bg/10 text-bg/60 line-through decoration-bg/30">
                {r.before}
              </div>
              <div className="py-5 border-t border-bg/10 flex items-center">
                <ArrowRight className="w-4 h-4 text-accent" />
              </div>
              <div className="py-5 border-t border-bg/10 text-bg font-medium">{r.after}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}