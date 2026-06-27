import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/section";
import { portfolio } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Check, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Work — Case studies in business digitization",
  description:
    "Case studies from garment exporters, 3PL warehouses, and wholesale distributors — showing how custom ERP, WMS, and inventory software transformed their operations.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-40 pb-22">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              Selected work
            </div>
            <h1 className="font-display text-display-xl font-semibold leading-[0.98]">
              Real businesses.<br />
              <span className="text-muted">Real outcomes.</span>
            </h1>
            <p className="mt-8 text-xl text-muted leading-relaxed max-w-3xl">
              Every case study below represents a business that replaced chaos with clarity. The
              numbers are real. The transformations are ongoing.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-6 pb-22">
        {portfolio.map((p) => (
          <Section key={p.slug} className="!py-0">
            <article className="rounded-3xl border border-line bg-white overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-bg border border-line text-muted">
                    {p.industry}
                  </span>
                  <span className="text-sm text-muted">{p.client}</span>
                </div>

                <h2 className="font-display text-display-md font-semibold leading-[1.1] max-w-4xl">
                  {p.title}
                </h2>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-7 space-y-8">
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.18em] text-muted mb-3">Problem</h3>
                      <p className="text-muted leading-relaxed">{p.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.18em] text-muted mb-3">Analysis</h3>
                      <p className="text-muted leading-relaxed">{p.analysis}</p>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.18em] text-muted mb-3">Solution</h3>
                      <p className="text-muted leading-relaxed">{p.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.18em] text-muted mb-3">Modules delivered</h3>
                      <div className="flex flex-wrap gap-2">
                        {p.modules.map((m) => (
                          <span key={m} className="text-sm px-3 py-1.5 rounded-full bg-bg border border-line">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.18em] text-muted mb-3">Technology</h3>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span key={t} className="text-sm font-mono px-3 py-1.5 rounded-full bg-ink/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-6 border-t border-line">
                      <h3 className="text-xs uppercase tracking-[0.18em] text-muted mb-3">Lessons learned</h3>
                      <p className="text-muted leading-relaxed italic">{p.lessons}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="sticky top-32 space-y-3">
                      <h3 className="text-xs uppercase tracking-[0.18em] text-muted mb-4">Business impact</h3>
                      {p.impact.map((m) => (
                        <div key={m.metric} className="p-5 rounded-2xl bg-bg border border-line">
                          <div className="text-sm text-muted mb-2">{m.metric}</div>
                          <div className="flex items-baseline gap-3">
                            <span className="text-muted line-through tabular">{m.before}</span>
                            <ArrowUpRight className="w-4 h-4 text-success" />
                            <span className="font-display text-2xl font-semibold text-success tabular">
                              {m.after}
                            </span>
                          </div>
                        </div>
                      ))}

                      {/* Screenshot placeholder */}
                      <div className="mt-6 aspect-video rounded-2xl bg-gradient-to-br from-ink/5 to-ink/10 border border-line flex items-center justify-center text-sm text-muted">
                        Product screenshot
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Section>
        ))}
      </div>

      <Section className="bg-ink text-bg">
        <div className="max-w-3xl">
          <h2 className="font-display text-display-md font-semibold">
            Your case study could be next.
          </h2>
          <p className="mt-5 text-lg text-bg/60 leading-relaxed">
            If you're running a business on registers, Excel, and WhatsApp — let's talk.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg" className="bg-bg text-ink hover:bg-bg/90" arrow>
              Start the conversation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}