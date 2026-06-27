"use client";

import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-22 md:py-30">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] bg-ink text-bg overflow-hidden p-10 md:p-20"
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-bg/50 mb-6">
              <span className="w-6 h-px bg-bg/40" />
              Next step
            </div>
            <h2 className="font-display text-display-lg font-semibold leading-[1.0]">
              <TextReveal>Let&apos;s study your</TextReveal>
              <br />
              <TextReveal delay={0.2}>business first.</TextReveal>
            </h2>
            <p className="mt-6 text-lg text-bg/60 leading-relaxed max-w-xl">
              A 45-minute discovery call. No pitch. No slides. Just a conversation about how
              your business runs — and where software could help.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/contact" size="lg" className="bg-bg text-ink hover:bg-bg/90" arrow>
                Book discovery call
              </Button>
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}`}
                external
                size="lg"
                variant="secondary"
                className="bg-transparent border-bg/20 text-bg hover:border-bg/40 hover:bg-bg/5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </Button>
            </div>

            <div className="mt-10 pt-8 border-t border-bg/10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-bg/50">
              <span>✓ No commitment</span>
              <span>✓ NDA available</span>
              <span>✓ Response within 24 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}