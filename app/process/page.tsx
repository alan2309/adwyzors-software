import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/section";
import { processSteps } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generateMetadata({
  title: "Process — From discovery to lifetime support",
  description:
    "A transparent 12-phase process: discovery, observation, workflow analysis, redesign, planning, design, development, testing, deployment, training, and lifetime support.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <section className="pt-40 pb-22">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              Our process
            </div>
            <h1 className="font-display text-display-xl font-semibold leading-[0.98]">
              Twelve phases.<br />
              <span className="text-muted">Zero surprises.</span>
            </h1>
            <p className="mt-8 text-xl text-muted leading-relaxed max-w-3xl">
              Every engagement follows the same transparent, documented process. You see progress
              every two weeks. You approve every milestone. You're never in the dark.
            </p>
          </div>
        </div>
      </section>

      <Section className="bg-white border-y border-line">
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-line md:-translate-x-1/2" />

          <div className="space-y-10">
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.phase}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 ${isLeft ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                >
                  <div
                    className={`absolute left-6 md:left-1/2 top-8 w-3 h-3 rounded-full bg-accent md:-translate-x-1/2 ring-4 ring-white z-10`}
                  />

                  <div className={isLeft ? "md:text-right md:pr-14" : "md:pl-14"}>
                    <div className="pl-14 md:pl-0">
                      <div className="font-mono text-xs text-muted tabular mb-2">
                        Phase {step.phase} · {step.duration}
                      </div>
                      <h2 className="font-display text-2xl font-semibold">{step.title}</h2>
                    </div>
                  </div>
                  <div className={isLeft ? "md:pl-14" : "md:pr-14"}>
                    <div className="pl-14 md:pl-0 p-6 rounded-2xl border border-line bg-bg">
                      <p className="text-muted leading-relaxed mb-5">{step.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-line">
                        <div>
                          <div className="text-xs uppercase tracking-[0.18em] text-muted mb-2">
                            Deliverables
                          </div>
                          <ul className="space-y-1 text-sm">
                            {step.deliverables.map((d) => (
                              <li key={d}>✓ {d}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-[0.18em] text-muted mb-2">
                            From you
                          </div>
                          <p className="text-sm text-muted">{step.client}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-display-md font-semibold">
            Ready to start phase one?
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            It begins with a 45-minute discovery call. No pitch. No slides. Just a conversation
            about your business.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg" arrow>
              Book discovery call
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}