"use client";

import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-22 md:pb-30 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-b from-accent/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-white/60 backdrop-blur text-xs font-medium text-muted mb-8"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-75" />
            <span className="relative rounded-full w-2 h-2 bg-success" />
          </span>
          Currently accepting 3 new engagements for Q3 2026
        </motion.div>

        <h1 className="font-display text-display-xl font-semibold tracking-[-0.04em] max-w-5xl">
          <TextReveal delay={0.3}>We build software</TextReveal>{" "}
          <TextReveal delay={0.5} className="text-muted">
            around your business.
          </TextReveal>
          <br />
          <TextReveal delay={0.7} className="italic font-medium">
            Not the other way around.
          </TextReveal>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl"
        >
          Adwyzors studies how you work, then engineers custom ERP, inventory, and operations
          software that replaces your registers, Excel sheets, and WhatsApp chaos — with one
          intelligent system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/contact" size="lg" arrow>
            Book a discovery call
          </Button>
          <Button href="/process" size="lg" variant="secondary">
            <PlayCircle className="w-4 h-4" />
            See how we work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted"
        >
          <span className="text-xs tracking-[0.18em] uppercase">Trusted by</span>
          {["Tiruppur Exports", "Mumbai 3PL", "Bengaluru Wholesale", "Pune Manufacturing"].map(
            (c) => (
              <span key={c} className="font-medium text-ink/70">
                {c}
              </span>
            )
          )}
        </motion.div>

        {/* Hero visual — a stylized "dashboard" */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 relative"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative rounded-3xl border border-line bg-white shadow-elevated overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-line bg-bg/50">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-ink/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink/10" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-muted font-mono">app.adwyzors.com/operations</span>
        </div>
      </div>

      <div className="grid grid-cols-12 min-h-[28rem]">
        {/* Sidebar */}
        <aside className="col-span-3 border-r border-line p-5 space-y-1 hidden md:block">
          {[
            { label: "Dashboard", active: false },
            { label: "Orders", active: false },
            { label: "Inventory", active: true },
            { label: "Production", active: false },
            { label: "Dispatch", active: false },
            { label: "Reports", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`px-3 py-2 rounded-lg text-sm ${item.active ? "bg-ink text-bg" : "text-muted hover:bg-ink/5"
                }`}
            >
              {item.label}
            </div>
          ))}
        </aside>

        {/* Main content */}
        <div className="col-span-12 md:col-span-9 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs text-muted uppercase tracking-wider">Live operations</div>
              <div className="font-display text-xl font-semibold mt-1">Inventory Overview</div>
            </div>
            <div className="flex items-center gap-2 text-xs text-success font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Synced 4s ago
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { label: "SKUs", value: "4,218", delta: "+12" },
              { label: "In stock", value: "98.4%", delta: "+0.6" },
              { label: "Pending orders", value: "142", delta: "-8" },
              { label: "Dispatched today", value: "89", delta: "+23" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl border border-line bg-bg/50">
                <div className="text-xs text-muted">{s.label}</div>
                <div className="font-display text-2xl font-semibold mt-1 tabular">{s.value}</div>
                <div className="text-xs text-success mt-1 tabular">{s.delta} today</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-xl border border-line p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium">Dispatch volume · Last 14 days</div>
              <div className="text-xs text-muted">Units</div>
            </div>
            <svg viewBox="0 0 600 120" className="w-full h-28">
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,90 C40,70 80,80 120,60 C160,40 200,70 240,55 C280,40 320,50 360,35 C400,20 440,40 480,25 C520,15 560,25 600,10 L600,120 L0,120 Z"
                fill="url(#g1)"
              />
              <path
                d="M0,90 C40,70 80,80 120,60 C160,40 200,70 240,55 C280,40 320,50 360,35 C400,20 440,40 480,25 C520,15 560,25 600,10"
                stroke="#2563EB"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}