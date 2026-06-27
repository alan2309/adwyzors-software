"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { portfolio } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function PortfolioPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <SectionHeader
          eyebrow="Selected work"
          title={<>Real businesses. <span className="text-muted">Real outcomes.</span></>}
        />
        <a href="/portfolio" className="text-sm font-medium link-underline shrink-0 self-start md:self-auto">
          View all case studies <ArrowUpRight className="inline w-3.5 h-3.5 ml-1" />
        </a>
      </div>

      <div ref={ref} className="space-y-6">
        {portfolio.map((p, i) => (
          <motion.a
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group block rounded-3xl border border-line bg-white p-8 md:p-10 hover:border-ink/20 hover:shadow-elevated transition-all"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-bg border border-line text-muted">
                    {p.industry}
                  </span>
                  <span className="text-xs text-muted">{p.client}</span>
                </div>
                <h3 className="font-display text-display-sm font-semibold leading-[1.15] group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="mt-4 text-muted leading-relaxed">{p.summary}</p>
              </div>

              <div className="md:col-span-5 grid grid-cols-2 gap-3">
                {p.impact.slice(0, 4).map((m) => (
                  <div key={m.metric} className="p-4 rounded-xl bg-bg border border-line">
                    <div className="text-xs text-muted mb-1">{m.metric}</div>
                    <div className="text-xs text-muted line-through tabular">{m.before}</div>
                    <div className="font-display text-lg font-semibold text-success tabular">
                      {m.after}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-line flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {p.modules.slice(0, 4).map((m) => (
                  <span key={m} className="text-xs px-2.5 py-1 rounded-full border border-line text-muted">
                    {m}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-ink group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}