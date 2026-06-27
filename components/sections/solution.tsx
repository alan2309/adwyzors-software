"use client";

import { Section } from "@/components/ui/section";
import { TextReveal } from "@/components/ui/text-reveal";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "We study your business",
    description:
      "No requirements document. We sit on your floor, watch your operations, read your registers, join your WhatsApp groups.",
  },
  {
    n: "02",
    title: "We redesign the workflow",
    description:
      "Software is the last step. First, we redesign how work should flow. The biggest wins come from process, not code.",
  },
  {
    n: "03",
    title: "We engineer software around it",
    description:
      "Custom ERP, inventory, CRM, payroll — built to fit your redesigned workflow. Not the other way around.",
  },
  {
    n: "04",
    title: "You run on one system",
    description:
      "Registers retire. Excel retires. WhatsApp goes back to being WhatsApp. One system. Complete visibility.",
  },
];

export function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="solution">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-muted mb-5">
            <span className="w-6 h-px bg-ink/40" />
            Our approach
          </div>
          <h2 className="font-display text-display-lg font-semibold leading-[1.02]">
            <TextReveal>Software is</TextReveal>
            <br />
            <TextReveal delay={0.2}>the easy part.</TextReveal>
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            The hard part is understanding how your business actually works. That&apos;s where we
            spend most of our time — and where most of the value is created.
          </p>
          <div className="mt-8 p-5 rounded-2xl bg-ink text-bg">
            <p className="font-display text-lg italic leading-snug">
              &ldquo;Software should adapt to businesses, not businesses to software.&rdquo;
            </p>
            <p className="mt-3 text-sm text-bg/60">— Our founding principle</p>
          </div>
          <div className="mt-8">
            <Button href="/process" variant="outline" arrow>
              See the full process
            </Button>
          </div>
        </div>

        <div ref={ref} className="lg:col-span-7 space-y-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 rounded-2xl border border-line bg-white hover:border-ink/20 hover:shadow-soft transition-all"
            >
              <div className="flex gap-6">
                <div className="font-mono text-sm text-muted tabular pt-1">{s.n}</div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted leading-relaxed">{s.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all self-center" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}