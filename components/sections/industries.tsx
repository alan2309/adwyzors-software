"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { industries } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <Section>
      <SectionHeader
        eyebrow="Industries"
        title={
          <>
            Built for businesses<br />
            <span className="text-muted">that run on operations.</span>
          </>
        }
      />

      <div ref={ref} className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-1">
          {industries.map((ind, i) => (
            <motion.button
              key={ind.slug}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setActive(i)}
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all",
                active === i
                  ? "bg-ink text-bg"
                  : "hover:bg-ink/5 text-ink"
              )}
            >
              <span className="text-2xl">{ind.emoji}</span>
              <span className="font-display font-semibold flex-1">{ind.name}</span>
              <ArrowUpRight
                className={cn(
                  "w-4 h-4 transition-transform",
                  active === i ? "translate-x-0 -translate-y-0" : "-translate-x-1 translate-y-1 opacity-0"
                )}
              />
            </motion.button>
          ))}
        </div>

        <motion.div
          key={current.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 rounded-3xl border border-line bg-white p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">{current.emoji}</span>
            <h3 className="font-display text-2xl font-semibold">{current.name}</h3>
          </div>

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.18em] text-muted mb-3">Pain points</p>
            <ul className="space-y-2">
              {current.painPoints.map((p) => (
                <li key={p} className="flex gap-3 text-[15px]">
                  <span className="text-accent mt-1.5">—</span>
                  <span className="text-ink/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.18em] text-muted mb-3">Suggested modules</p>
            <div className="flex flex-wrap gap-2">
              {current.modules.map((m) => (
                <span
                  key={m}
                  className="text-sm px-3 py-1.5 rounded-full bg-bg border border-line"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-line">
            <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">Expected ROI</p>
            <p className="font-display text-lg font-semibold">{current.roi}</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}