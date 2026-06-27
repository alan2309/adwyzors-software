import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/section";
import { processSteps } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Clock,
  CheckCircle2,
  Users,
  FileText,
  Sparkles,
  Calendar,
  ClipboardCheck,
  PenTool,
  Code2,
  TestTube,
  Rocket,
  GraduationCap,
  HeartHandshake
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = generateMetadata({
  title: "Process — From discovery to lifetime support",
  description:
    "A transparent 12-phase process: discovery, observation, workflow analysis, redesign, planning, design, development, testing, deployment, training, and lifetime support.",
  path: "/process",
});

// Phase icon mapping - using string keys now
const phaseIcons: Record<string, any> = {
  "1": Sparkles,
  "2": Users,
  "3": FileText,
  "4": PenTool,
  "5": ClipboardCheck,
  "6": PenTool,
  "7": Code2,
  "8": TestTube,
  "9": Rocket,
  "10": GraduationCap,
  "11": HeartHandshake,
  "12": HeartHandshake,
};

function getPhaseIcon(phase: string) {
  return phaseIcons[phase] || CheckCircle2;
}

export default function ProcessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-primary font-medium mb-6">
              <span className="w-8 h-px bg-primary/40" />
              Our process
              <span className="w-8 h-px bg-primary/40" />
            </div>

            <h1 className="font-display text-display-xl font-bold leading-[0.98] tracking-tight">
              Twelve phases.
              <br />
              <span className="text-muted bg-gradient-to-r from-muted to-muted/70 bg-clip-text">
                Zero surprises.
              </span>
            </h1>

            <p className="mt-8 text-xl text-muted leading-relaxed max-w-3xl">
              Every engagement follows the same transparent, documented process.
              <span className="block text-base text-muted/70 mt-2">
                You see progress every two weeks. You approve every milestone. You're never in the dark.
              </span>
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#timeline" size="lg" arrow>
                View timeline
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Start discovery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary">12</div>
              <div className="text-sm text-muted mt-1">Phases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent">2</div>
              <div className="text-sm text-muted mt-1">Week sprints</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-success">100%</div>
              <div className="text-sm text-muted mt-1">Transparency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-ink">∞</div>
              <div className="text-sm text-muted mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <Section id="timeline" className="bg-white border-y border-line !py-22">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-accent/30 to-primary/30 md:-translate-x-1/2" />

          {processSteps.map((step, i) => {
            const isLeft = i % 2 === 0;
            const Icon = getPhaseIcon(step.phase);
            const isLast = i === processSteps.length - 1;

            return (
              <div
                key={step.phase}
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 mb-12 last:mb-0",
                  isLeft ? "" : "md:[&>*:first-child]:order-2"
                )}
              >
                {/* Timeline dot */}
                <div className={cn(
                  "absolute left-6 md:left-1/2 top-8 w-4 h-4 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-white shadow-lg z-10",
                  !isLast && "after:absolute after:left-1/2 after:top-4 after:w-0.5 after:h-[calc(100%+40px)] after:bg-primary/10 after:-translate-x-1/2"
                )}>
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                </div>

                {/* Left side - Phase info */}
                <div className={cn(
                  "flex items-start gap-4",
                  isLeft ? "md:text-right md:pr-14" : "md:pl-14"
                )}>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={cn(
                      "p-2.5 rounded-xl bg-primary/10 text-primary shrink-0",
                      isLeft ? "md:order-2" : ""
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className={cn(
                      "flex-1",
                      isLeft ? "md:pr-4" : "md:pl-4"
                    )}>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted tabular-nums mb-1">
                        <span className="font-semibold text-primary">Phase {step.phase}</span>
                        <span className="w-px h-4 bg-line" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {step.duration}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl font-bold tracking-tight">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className={cn(
                  "pl-14 md:pl-0",
                  isLeft ? "md:pl-14" : "md:pr-14"
                )}>
                  <div className="p-6 rounded-2xl bg-white border border-line shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20">
                    <p className="text-muted leading-relaxed mb-5">{step.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 border-t border-line">
                      <div>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-3">
                          <ClipboardCheck className="w-3.5 h-3.5" />
                          Deliverables
                        </div>
                        <ul className="space-y-2 text-sm">
                          {step.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-ink/80">
                              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-3">
                          <Users className="w-3.5 h-3.5" />
                          From you
                        </div>
                        <div className="text-sm text-muted bg-bg rounded-lg p-3 border border-line">
                          {step.client}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Process Summary Cards */}
      <Section background="bg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Why our process works"
            title="Built for clarity, speed, and results"
            description="Every phase is designed to keep you informed, involved, and impressed."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl border border-line p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">Documented</h3>
              <p className="text-sm text-muted">Every decision, every milestone, every deliverable — tracked and shared.</p>
            </div>

            <div className="bg-white rounded-2xl border border-line p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold mb-2">Predictable</h3>
              <p className="text-sm text-muted">Two-week sprints. Clear milestones. No scope creep. No surprises.</p>
            </div>

            <div className="bg-white rounded-2xl border border-line p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-display font-semibold mb-2">Collaborative</h3>
              <p className="text-sm text-muted">You're not a bystander. You're part of the team from day one.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-primary/60 font-medium mb-6">
            <span className="w-8 h-px bg-primary/40" />
            Start your journey
            <span className="w-8 h-px bg-primary/40" />
          </div>

          <h2 className="font-display text-display-md font-bold leading-[1.1] tracking-tight">
            Ready to start phase one?
          </h2>

          <p className="mt-6 text-lg text-bg/70 leading-relaxed max-w-2xl mx-auto">
            It begins with a 45-minute discovery call.
            <span className="block text-bg/50">
              No pitch. No slides. Just a conversation about your business.
            </span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-bg text-ink hover:bg-bg/90 shadow-lg shadow-bg/20"
              arrow
            >
              Book discovery call
            </Button>
            <Button
              href="/solutions"
              size="lg"
              variant="outline"
              className="border-bg/20 text-bg hover:bg-bg/10"
            >
              View solutions
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-bg/10 flex flex-wrap gap-8 justify-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-bg/50">45-minute discovery</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-bg/50">No obligation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm text-bg/50">100% transparent</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}