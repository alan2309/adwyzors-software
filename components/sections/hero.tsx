"use client";

import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { motion, useAnimationFrame } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-22 md:pb-30 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-b from-accent/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Two-column: text left, live-feed right */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-12 lg:gap-20">
          {/* ── Left column ── */}
          <div className="flex-1 min-w-0">
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

            <h1 className="font-display text-display-xl font-semibold tracking-[-0.04em]">
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
              className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-xl"
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
              className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted"
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
          </div>

          {/* ── Right column: Live Activity Feed ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block w-80 lg:w-96 shrink-0 mt-8 md:mt-16"
          >
            <LiveActivityFeed />
          </motion.div>
        </div>

        {/* Hero visual — animated looping dashboard — full width below */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 relative"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   LIVE ACTIVITY FEED
   A looping stream of ERP events that adds a new
   notification every ~2s and auto-removes old ones
───────────────────────────────────────────── */

const ACTIVITY_POOL = [
  { icon: "📦", color: "#34d399", title: "Inventory synced", body: "4,218 SKUs · Tiruppur warehouse", time: "just now" },
  { icon: "✅", color: "#60a5fa", title: "Order dispatched", body: "#ORD-4821 → Mumbai 3PL", time: "2s ago" },
  { icon: "🚨", color: "#f87171", title: "Low stock alert", body: "Cotton Grey 60s — 12 bales left", time: "5s ago" },
  { icon: "💳", color: "#a78bfa", title: "Payment received", body: "₹2,14,000 · Bengaluru Wholesale", time: "12s ago" },
  { icon: "🔄", color: "#fbbf24", title: "Reorder triggered", body: "Auto-PO #PO-0091 created", time: "18s ago" },
  { icon: "📊", color: "#34d399", title: "Daily report ready", body: "Dispatch variance: −3.2%", time: "32s ago" },
  { icon: "🚚", color: "#60a5fa", title: "Shipment in transit", body: "Truck TN-09-AX-1234 · ETA 4h", time: "1m ago" },
  { icon: "⚙️", color: "#a78bfa", title: "Production batch done", body: "Batch #B-2291 · 840 units", time: "2m ago" },
];

type Activity = (typeof ACTIVITY_POOL)[number] & { id: number };

let _uid = 0;

function LiveActivityFeed() {
  const [items, setItems] = useState<Activity[]>(() =>
    ACTIVITY_POOL.slice(0, 4).map((a, i) => ({ ...a, id: i }))
  );

  useEffect(() => {
    let poolIdx = 4 % ACTIVITY_POOL.length;
    const timer = setInterval(() => {
      const next = { ...ACTIVITY_POOL[poolIdx % ACTIVITY_POOL.length], id: ++_uid, time: "just now" };
      poolIdx = (poolIdx + 1) % ACTIVITY_POOL.length;
      setItems((prev) => {
        const updated = [next, ...prev].slice(0, 5);
        // Bump older timestamps
        return updated.map((item, i) => ({
          ...item,
          time: i === 0 ? "just now" : i === 1 ? "2s ago" : i === 2 ? "8s ago" : i === 3 ? "20s ago" : "45s ago",
        }));
      });
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="rounded-2xl border border-line bg-white/80 backdrop-blur-sm shadow-elevated overflow-hidden"
      style={{ boxShadow: "0 12px 40px -8px rgba(0,0,0,0.08), 0 2px 8px -2px rgba(0,0,0,0.04)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-line bg-bg/60">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-semibold text-ink/80 font-mono tracking-wide">Live activity</span>
        </div>
        <span className="text-[10px] text-muted font-mono bg-ink/5 px-2 py-0.5 rounded-full">
          {items.length} events
        </span>
      </div>

      {/* Feed */}
      <div className="divide-y divide-line/60 overflow-hidden">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-3 px-4 py-3"
            style={{ opacity: i === 0 ? 1 : i === 1 ? 0.9 : i === 2 ? 0.75 : i === 3 ? 0.55 : 0.4 }}
          >
            {/* Icon bubble */}
            <div
              className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm mt-0.5"
              style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
            >
              {item.icon}
            </div>
            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-ink truncate">{item.title}</span>
                <span className="text-[10px] text-muted font-mono shrink-0">{item.time}</span>
              </div>
              <p className="text-[11px] text-muted mt-0.5 truncate">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer pulse bar */}
      <div className="px-4 py-2.5 border-t border-line/60 bg-bg/40">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1 rounded-full bg-line overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-accent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "40%" }}
            />
          </div>
          <span className="text-[10px] text-muted font-mono">streaming</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   LOOPING HERO VISUAL
   Phase 0 (0-3s):  Code editor with typewriter effect
   Phase 1 (3-6s):  Build / deploy progress bars
   Phase 2 (6-10s): Live dashboard with counting metrics
   Loop back
───────────────────────────────────────────── */


const PHASE_DURATION = [3500, 3000, 4000]; // ms per phase
const TOTAL = PHASE_DURATION.reduce((a, b) => a + b, 0);

function useLoopPhase() {
  const [elapsed, setElapsed] = useState(0);
  const start = useRef(Date.now());

  useAnimationFrame(() => {
    setElapsed((Date.now() - start.current) % TOTAL);
  });

  let phase = 0;
  let phaseElapsed = elapsed;
  for (let i = 0; i < PHASE_DURATION.length; i++) {
    if (phaseElapsed < PHASE_DURATION[i]) {
      phase = i;
      break;
    }
    phaseElapsed -= PHASE_DURATION[i];
  }
  const progress = phaseElapsed / PHASE_DURATION[phase]; // 0→1 within phase

  return { phase, progress, elapsed };
}

// ── Code lines shown in the editor ──────────
const CODE_LINES = [
  { indent: 0, tokens: [{ t: "import", c: "#569cd6" }, { t: " { ERPEngine } from ", c: "#9cdcfe" }, { t: "'@adwyzors/core'", c: "#ce9178" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: "const ", c: "#569cd6" }, { t: "inventory", c: "#9cdcfe" }, { t: " = await ", c: "#d4d4d4" }, { t: "ERPEngine", c: "#4ec9b0" }, { t: ".init({", c: "#d4d4d4" }] },
  { indent: 1, tokens: [{ t: "tenant:", c: "#9cdcfe" }, { t: " 'tiruppur-exports'", c: "#ce9178" }, { t: ",", c: "#d4d4d4" }] },
  { indent: 1, tokens: [{ t: "modules:", c: "#9cdcfe" }, { t: " [", c: "#d4d4d4" }, { t: "'inventory'", c: "#ce9178" }, { t: ", ", c: "#d4d4d4" }, { t: "'dispatch'", c: "#ce9178" }, { t: "]", c: "#d4d4d4" }] },
  { indent: 0, tokens: [{ t: "});", c: "#d4d4d4" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: "// Sync 4,218 SKUs in real-time", c: "#6a9955" }] },
  { indent: 0, tokens: [{ t: "await ", c: "#d4d4d4" }, { t: "inventory", c: "#9cdcfe" }, { t: ".sync()", c: "#dcdcaa" }] },
];

const BUILD_STEPS = [
  { label: "Resolving dependencies", duration: 0.18 },
  { label: "Compiling TypeScript", duration: 0.28 },
  { label: "Bundling modules", duration: 0.22 },
  { label: "Running migrations", duration: 0.18 },
  { label: "Deploying to edge", duration: 0.14 },
];

function HeroVisual() {
  const { phase, progress } = useLoopPhase();

  return (
    <div className="relative rounded-3xl border border-line bg-[#1e1e2e] shadow-elevated overflow-hidden"
      style={{ boxShadow: "0 25px 60px -10px rgba(37,99,235,0.18), 0 4px 12px -2px rgba(0,0,0,0.3)" }}>
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/5 backdrop-blur">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
        </div>
        <div className="flex-1 text-center">
          <PhaseTab phase={phase} />
        </div>
        <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#28ca41] animate-pulse" />
          live
        </div>
      </div>

      <div className="min-h-[28rem] relative">
        {/* PHASE 0 — Code editor */}
        <motion.div
          animate={{ opacity: phase === 0 ? 1 : 0, x: phase === 0 ? 0 : phase < 0 ? -40 : 40 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          style={{ pointerEvents: phase === 0 ? "auto" : "none" }}
        >
          <CodeEditorPanel progress={progress} />
        </motion.div>

        {/* PHASE 1 — Build progress */}
        <motion.div
          animate={{ opacity: phase === 1 ? 1 : 0, x: phase === 1 ? 0 : phase < 1 ? -40 : 40 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          style={{ pointerEvents: phase === 1 ? "auto" : "none" }}
        >
          <BuildPanel progress={progress} />
        </motion.div>

        {/* PHASE 2 — Live dashboard */}
        <motion.div
          animate={{ opacity: phase === 2 ? 1 : 0, x: phase === 2 ? 0 : phase < 2 ? -40 : 40 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          style={{ pointerEvents: phase === 2 ? "auto" : "none" }}
        >
          <DashboardPanel progress={progress} />
        </motion.div>
      </div>
    </div>
  );
}

function PhaseTab({ phase }: { phase: number }) {
  const tabs = [
    { label: "editor.ts", icon: "🖥️" },
    { label: "ci/deploy", icon: "🚀" },
    { label: "operations", icon: "📊" },
  ];
  return (
    <div className="flex items-center justify-center gap-1">
      {tabs.map((t, i) => (
        <span
          key={t.label}
          className="px-3 py-1 rounded text-xs font-mono transition-all duration-300"
          style={{
            background: phase === i ? "rgba(37,99,235,0.3)" : "transparent",
            color: phase === i ? "#93c5fd" : "rgba(255,255,255,0.3)",
            border: phase === i ? "1px solid rgba(37,99,235,0.4)" : "1px solid transparent",
          }}
        >
          {t.icon} {t.label}
        </span>
      ))}
    </div>
  );
}

/* ── Phase 0: Code Editor ─────────────────── */
function CodeEditorPanel({ progress }: { progress: number }) {
  // Reveal lines proportionally across first 80% of phase, last 20% hold
  const revealUpTo = Math.min(1, progress / 0.8);
  const charsToReveal = Math.floor(revealUpTo * CODE_LINES.length * 18); // rough total chars

  return (
    <div className="grid grid-cols-12 h-full">
      {/* Line numbers gutter */}
      <div className="col-span-1 border-r border-white/10 pt-6 pb-6 flex flex-col gap-[2px] items-end pr-3">
        {CODE_LINES.map((_, i) => (
          <span key={i} className="text-xs font-mono text-white/20 leading-[1.7rem]">{i + 1}</span>
        ))}
      </div>

      {/* Code area */}
      <div className="col-span-11 pt-6 pb-6 pl-4 font-mono text-[13px] leading-[1.7rem] overflow-hidden">
        {CODE_LINES.map((line, li) => {
          const lineStartChar = li * 18;
          const lineVisible = charsToReveal > lineStartChar;
          const lineProgress = Math.max(0, Math.min(1, (charsToReveal - lineStartChar) / 18));
          return (
            <div key={li} className="flex items-center">
              <span style={{ paddingLeft: `${line.indent * 16}px` }} className="flex">
                {line.tokens.map((tok, ti) => {
                  // Progressive reveal within the line
                  const tokenStart = ti / Math.max(1, line.tokens.length);
                  const show = lineVisible && lineProgress > tokenStart;
                  return (
                    <span
                      key={ti}
                      style={{ color: tok.c, opacity: show ? 1 : 0, transition: "opacity 0.15s" }}
                    >
                      {tok.t}
                    </span>
                  );
                })}
                {/* Blinking cursor on the current line */}
                {li === Math.floor(revealUpTo * (CODE_LINES.length - 1)) && (
                  <span className="inline-block w-[2px] h-[14px] bg-[#569cd6] ml-px animate-pulse" />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Phase 1: Build / CI Panel ────────────── */
function BuildPanel({ progress }: { progress: number }) {
  let cumulative = 0;
  return (
    <div className="p-8 flex flex-col justify-center h-full gap-6">
      <div className="text-white/60 text-xs font-mono uppercase tracking-widest mb-2">
        🚀 Adwyzors CI/CD · Production Deploy
      </div>
      {BUILD_STEPS.map((step, i) => {
        const start = cumulative;
        cumulative += step.duration;
        const end = cumulative;
        // How far through this step are we?
        const stepProgress = Math.max(0, Math.min(1, (progress - start) / step.duration));
        const done = stepProgress >= 1;
        const active = stepProgress > 0 && !done;

        return (
          <div key={step.label} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-mono">
                <span style={{ color: done ? "#28ca41" : active ? "#ffbd2e" : "rgba(255,255,255,0.3)" }}>
                  {done ? "✓" : active ? "⟳" : "○"}
                </span>
                <span style={{ color: done ? "rgba(255,255,255,0.9)" : active ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)" }}>
                  {step.label}
                </span>
              </div>
              <span className="text-xs font-mono" style={{ color: done ? "#28ca41" : active ? "#ffbd2e" : "rgba(255,255,255,0.2)" }}>
                {done ? "done" : active ? `${Math.round(stepProgress * 100)}%` : "--"}
              </span>
            </div>
            <div className="h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${stepProgress * 100}%`,
                  background: done
                    ? "linear-gradient(90deg, #28ca41, #10b981)"
                    : "linear-gradient(90deg, #2563eb, #60a5fa)",
                }}
              />
            </div>
          </div>
        );
      })}

      {progress > 0.95 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-2 px-4 py-3 rounded-xl border border-[#28ca41]/30 bg-[#28ca41]/10 text-[#28ca41] text-sm font-mono"
        >
          ✓ Deployed to production in 8.4s · Edge: Mumbai, Chennai, Delhi
        </motion.div>
      )}
    </div>
  );
}

/* ── Phase 2: Live Dashboard ──────────────── */
const METRICS = [
  { label: "SKUs tracked", from: 4100, to: 4218, suffix: "", color: "#60a5fa" },
  { label: "In-stock rate", from: 97.1, to: 98.4, suffix: "%", color: "#34d399" },
  { label: "Pending orders", from: 160, to: 142, suffix: "", color: "#f59e0b" },
  { label: "Dispatched today", from: 60, to: 89, suffix: "", color: "#a78bfa" },
];

const SPARKLINE_PATHS = [
  "M0,70 C30,55 60,65 90,45 C120,25 150,50 180,38 C210,26 240,35 270,18 C300,8 330,22 360,10",
  "M0,80 C30,72 60,60 90,55 C120,45 150,38 180,42 C210,30 240,20 270,15 C300,10 330,5 360,8",
  "M0,30 C30,45 60,35 90,50 C120,60 150,48 180,52 C210,60 240,55 270,48 C300,42 330,38 360,30",
  "M0,60 C30,45 60,50 90,30 C120,15 150,25 180,10 C210,5 240,15 270,8 C300,3 330,10 360,5",
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.min(1, t);
}

function DashboardPanel({ progress }: { progress: number }) {
  return (
    <div className="grid grid-cols-12 h-full">
      {/* Sidebar */}
      <aside className="col-span-3 border-r border-white/10 p-5 space-y-1 hidden md:block">
        <div className="text-white/30 text-xs uppercase tracking-widest mb-4 font-mono">Menu</div>
        {["Dashboard", "Orders", "Inventory", "Production", "Dispatch", "Reports"].map((item, i) => (
          <div
            key={item}
            className="px-3 py-2 rounded-lg text-sm font-medium"
            style={{
              background: i === 2 ? "rgba(37,99,235,0.3)" : "transparent",
              color: i === 2 ? "#93c5fd" : "rgba(255,255,255,0.4)",
            }}
          >
            {item}
          </div>
        ))}
      </aside>

      {/* Main */}
      <div className="col-span-12 md:col-span-9 p-5 md:p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-white/40 uppercase tracking-wider font-mono">Live operations</div>
            <div className="text-white font-display text-lg font-semibold mt-0.5">Inventory Overview</div>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#34d399] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
            Synced {Math.floor((1 - progress) * 8 + 1)}s ago
          </div>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {METRICS.map((m, i) => {
            const val = lerp(m.from, m.to, progress);
            const isFloat = m.suffix === "%";
            const display = isFloat ? val.toFixed(1) : Math.round(val).toLocaleString();
            return (
              <div key={m.label} className="p-3 rounded-xl border border-white/10 bg-white/5">
                <div className="text-xs text-white/40 font-mono">{m.label}</div>
                <div
                  className="font-display text-xl font-bold mt-1 tabular-nums"
                  style={{ color: m.color }}
                >
                  {display}{m.suffix}
                </div>
                <div className="mt-2 h-8">
                  <svg viewBox={`0 0 360 80`} className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`sg${i}`} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={m.color} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={m.color} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d={SPARKLINE_PATHS[i] + ` L360,80 L0,80 Z`}
                      fill={`url(#sg${i})`}
                    />
                    <path
                      d={SPARKLINE_PATHS[i]}
                      stroke={m.color}
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chart */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex-1">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium text-white/80 font-mono">Dispatch volume · Last 14 days</div>
            <div className="text-xs text-white/30 font-mono">Units / day</div>
          </div>
          <AnimatedChart progress={progress} />
        </div>
      </div>
    </div>
  );
}

function AnimatedChart({ progress }: { progress: number }) {
  const basePoints = [90, 70, 80, 60, 40, 70, 55, 40, 50, 35, 20, 40, 25, 10];
  // Animate the last point to give a "live updating" feel
  const pts = basePoints.map((v, i) =>
    i === basePoints.length - 1 ? v + (1 - progress) * 12 : v
  );

  const w = 600, h = 120;
  const step = w / (pts.length - 1);
  const path = pts
    .map((y, i) => `${i === 0 ? "M" : "C"}${i * step},${y}`)
    .join(" ");

  // Build a smooth cubic bezier path
  const smooth = pts.reduce((acc, y, i) => {
    if (i === 0) return `M0,${y}`;
    const px = (i - 1) * step;
    const cx = i * step;
    const py = pts[i - 1];
    const cp1x = px + step / 3;
    const cp2x = cx - step / 3;
    return acc + ` C${cp1x},${py} ${cp2x},${y} ${cx},${y}`;
  }, "");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-28">
      <defs>
        <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={smooth + ` L${w},${h} L0,${h} Z`} fill="url(#chartGrad)" />
      <path d={smooth} stroke="#60a5fa" strokeWidth="2" fill="none" />
      {/* Animated "current" dot */}
      <circle
        cx={(pts.length - 1) * step}
        cy={pts[pts.length - 1]}
        r="4"
        fill="#60a5fa"
      />
      <circle
        cx={(pts.length - 1) * step}
        cy={pts[pts.length - 1]}
        r="8"
        fill="none"
        stroke="#60a5fa"
        strokeOpacity={0.3 + 0.4 * Math.sin(Date.now() / 400)}
        strokeWidth="2"
      />
    </svg>
  );
}