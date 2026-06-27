"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { testimonials } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section className="bg-white border-y border-line">
      <SectionHeader
        eyebrow="What clients say"
        title={<>Words from the <span className="text-muted">factory floor.</span></>}
      />

      <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative p-8 md:p-10 rounded-3xl border border-line bg-bg"
          >
            <Quote className="w-8 h-8 text-accent/30 mb-5" strokeWidth={1.5} />
            <blockquote className="font-display text-xl md:text-2xl leading-snug font-medium">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-line flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-ink text-bg flex items-center justify-center font-semibold">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-muted">
                  {t.title}, {t.company}
                </div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}