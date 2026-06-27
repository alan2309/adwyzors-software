"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { processSteps } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section className="bg-white border-y border-line">
      <SectionHeader
        eyebrow="How we work"
        title={
          <>
            Twelve phases.<br />
            <span className="text-muted">No black boxes.</span>
          </>
        }
        description="Every engagement follows a transparent, documented process. You see progress every two weeks. You approve every milestone."
      />

      <div ref={ref} className="mt-16 relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-line md:-translate-x-1/2" />

        <div className="space-y-8">
          {processSteps.slice(0, 6).map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ${isLeft ? "" : "md:[&>*:first-child]:order-2"
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 top-6 w-3 h-3 rounded-full bg-accent md:-translate-x-1/2 ring-4 ring-bg z-10" />

                <div className={isLeft ? "md:text-right md:pr-12" : "md:pl-12"}>
                  <div className="pl-14 md:pl-0">
                    <div className="font-mono text-xs text-muted tabular mb-2">Phase {step.phase}</div>
                    <h3 className="font-display text-2xl font-semibold mb-1">{step.title}</h3>
                    <div className="text-xs text-accent font-medium mb-3">{step.duration}</div>
                  </div>
                </div>
                <div className={isLeft ? "md:pl-12" : "md:pr-12"}>
                  <div className="pl-14 md:pl-0 p-6 rounded-2xl border border-line bg-bg">
                    <p className="text-muted leading-relaxed mb-4">{step.description}</p>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted mb-2">Deliverables</div>
                    <ul className="space-y-1">
                      {step.deliverables.map((d) => (
                        <li key={d} className="text-sm flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Button href="/process" variant="outline" arrow>
          See all 12 phases
        </Button>
      </div>
    </Section>
  );
}