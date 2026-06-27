"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  FileSearch,
  PenTool,
  Code2,
  Rocket,
  LineChart,
} from "lucide-react";

const stages = [
  { icon: BookOpen, label: "Registers" },
  { icon: FileSearch, label: "Analysis" },
  { icon: PenTool, label: "Redesign" },
  { icon: Code2, label: "Engineering" },
  { icon: Rocket, label: "Deployment" },
  { icon: LineChart, label: "Visibility" },
];

export function WorkflowAnimation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section>
      <SectionHeader
        eyebrow="The journey"
        title={
          <>
            From a paper register<br />
            <span className="text-muted">to a real-time dashboard — in 16 weeks.</span>
          </>
        }
      />

      <div ref={ref} className="mt-20 relative">
        {/* Connecting line */}
        <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-line to-transparent hidden md:block" />

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4">
          {stages.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-24 h-24 rounded-2xl bg-white border border-line shadow-soft flex items-center justify-center mb-4"
                >
                  <Icon className="w-8 h-8 text-ink" strokeWidth={1.5} />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-bg text-xs font-bold flex items-center justify-center"
                  >
                    {i + 1}
                  </motion.div>
                </motion.div>
                <div className="font-medium text-sm">{s.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Animated progress dot */}
        <motion.div
          initial={{ left: "0%" }}
          animate={inView ? { left: "100%" } : {}}
          transition={{ duration: 4, delay: 1, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
          className="absolute top-[4.85rem] hidden md:block"
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent animate-ping" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}