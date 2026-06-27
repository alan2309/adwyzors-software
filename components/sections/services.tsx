"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Clock } from "lucide-react";

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section className="bg-white border-y border-line">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <SectionHeader
          eyebrow="What we build"
          title={<>Software that fits <span className="text-muted">your workflow.</span></>}
        />
        <a href="/solutions" className="text-sm font-medium link-underline shrink-0 self-start md:self-auto">
          View all solutions <ArrowUpRight className="inline w-3.5 h-3.5 ml-1" />
        </a>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <Card href={`/solutions#${s.slug}`} className="h-full flex flex-col">
              <div className="flex items-start justify-between mb-5">
                <div className="font-mono text-xs text-muted tabular">0{i + 1}</div>
                <div className="inline-flex items-center gap-1 text-xs text-muted">
                  <Clock className="w-3 h-3" />
                  {s.timeline}
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-accent font-medium mb-3">{s.tagline}</p>
              <p className="text-muted text-[15px] leading-relaxed mb-6 flex-1">{s.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.industries.slice(0, 3).map((ind) => (
                  <span
                    key={ind}
                    className="text-xs px-2.5 py-1 rounded-full bg-bg border border-line text-muted"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}