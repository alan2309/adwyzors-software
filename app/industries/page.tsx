import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/section";
import { industries } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Industries — Manufacturing, Warehouses, Garments, Wholesale",
  description:
    "Custom software for manufacturing, warehouses, garment exporters, wholesale distributors, retail chains, healthcare, education, construction, and logistics.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-40 pb-22">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              Industries
            </div>
            <h1 className="font-display text-display-xl font-semibold leading-[0.98]">
              We speak your industry's language.
              <br />
              <span className="text-muted">Literally.</span>
            </h1>
            <p className="mt-8 text-xl text-muted leading-relaxed max-w-3xl">
              Each industry has its own vocabulary, its own workflows, its own pain. We've spent
              years inside each of these — learning not just the software needs, but the business
              rhythms.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-px bg-line border-y border-line">
        {industries.map((ind, idx) => (
          <Section key={ind.slug} className="bg-white !py-16 md:!py-22">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{ind.emoji}</span>
                  <div>
                    <div className="font-mono text-xs text-muted tabular">0{idx + 1}</div>
                    <h2 className="font-display text-2xl font-semibold">{ind.name}</h2>
                  </div>
                </div>
                <div className="mt-6 p-5 rounded-2xl bg-bg border border-line">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted mb-2">
                    Expected ROI
                  </div>
                  <div className="font-display text-lg font-semibold">{ind.roi}</div>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
                    Pain points
                  </h3>
                  <ul className="space-y-2">
                    {ind.painPoints.map((p) => (
                      <li key={p} className="flex gap-3 text-[15px]">
                        <span className="text-ink/40 mt-1.5">—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
                    Modules we build
                  </h3>
                  <ul className="space-y-2">
                    {ind.modules.map((m) => (
                      <li key={m} className="flex gap-3 text-[15px]">
                        <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        ))}
      </div>

      <Section className="bg-ink text-bg">
        <div className="max-w-3xl">
          <h2 className="font-display text-display-md font-semibold">
            Your industry isn't listed?
          </h2>
          <p className="mt-5 text-lg text-bg/60 leading-relaxed">
            We've worked across 20+ industries. If your business runs on operations, we can
            probably help. Let's talk.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg" className="bg-bg text-ink hover:bg-bg/90" arrow>
              Start a conversation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}