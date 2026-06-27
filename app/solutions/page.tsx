import type { Metadata } from "next";
import { generateMetadata, serviceSchema } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";
import {
  ArrowUpRight,
  Check,
  Clock,
  Sparkles,
  Building2,
  Users,
  Zap,
  Shield,
  GitBranch,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = generateMetadata({
  title: "Solutions — Custom ERP, Inventory, WMS, CRM",
  description:
    "Custom ERP, inventory management, warehouse management, sales CRM, garment ERP, and employee management — engineered around your business workflows.",
  path: "/solutions",
});

// Icon mapping for visual variety
const iconMap = {
  "ERP": Building2,
  "Inventory": Layers,
  "WMS": GitBranch,
  "CRM": Users,
  "Garment": Sparkles,
  "Employee": Shield,
};

function getIcon(title: string) {
  const key = Object.keys(iconMap).find(k => title.includes(k));
  return key ? iconMap[key as keyof typeof iconMap] : Sparkles;
}

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-primary font-medium mb-6">
              <span className="w-8 h-px bg-primary/40" />
              Solutions
              <span className="w-8 h-px bg-primary/40" />
            </div>

            <h1 className="font-display text-display-xl font-bold leading-[0.98] tracking-tight">
              Software that fits your workflow.
              <br />
              <span className="text-muted bg-gradient-to-r from-muted to-muted/70 bg-clip-text">
                Not the other way around.
              </span>
            </h1>

            <p className="mt-8 text-xl text-muted leading-relaxed max-w-3xl">
              Every solution below is custom-engineered for your business.
              <span className="block text-base text-muted/70 mt-2">
                No two deployments are identical — because no two businesses run the same way.
              </span>
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#solutions" size="lg" arrow>
                Explore solutions
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Let's talk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <div id="solutions" className="relative">
        {services.map((s, idx) => {
          const Icon = getIcon(s.title);
          const isEven = idx % 2 === 0;

          return (
            <Section
              key={s.slug}
              id={s.slug}
              className={cn(
                "relative transition-all duration-300",
                isEven ? "bg-white border-y border-line" : "bg-bg"
              )}
            >
              {/* Decorative number */}
              <div className="absolute right-10 top-10 text-8xl font-display font-bold text-ink/5 select-none pointer-events-none">
                0{idx + 1}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
                {/* Left Column - Enhanced */}
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-sm text-muted/60">
                      / 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="font-display text-display-md font-bold mb-3 tracking-tight">
                    {s.title}
                  </h2>

                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-5">
                    {s.tagline}
                  </div>

                  <p className="text-muted leading-relaxed mb-6 text-[15px]">
                    {s.description}
                  </p>

                  <div className="flex items-center gap-6 mb-8 text-sm">
                    <div className="inline-flex items-center gap-2 text-muted bg-bg/50 px-3 py-1.5 rounded-full border border-line">
                      <Clock className="w-4 h-4 text-primary" />
                      {s.timeline}
                    </div>
                    <div className="inline-flex items-center gap-2 text-muted bg-bg/50 px-3 py-1.5 rounded-full border border-line">
                      <Zap className="w-4 h-4 text-accent" />
                      Custom build
                    </div>
                  </div>

                  <Button href="/contact" size="lg" arrow className="shadow-lg shadow-primary/20">
                    Discuss this solution
                  </Button>
                </div>

                {/* Right Column - Enhanced Cards */}
                <div className="lg:col-span-7 space-y-10">
                  {/* Problems Card */}
                  <div className="bg-white rounded-2xl border border-line p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-5 flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-muted/40" />
                      Problems we solve
                    </h3>
                    <ul className="space-y-3">
                      {s.problems.map((p) => (
                        <li key={p} className="flex gap-4 text-[15px] leading-relaxed group">
                          <span className="text-primary/40 font-light text-xl leading-none mt-0.5">—</span>
                          <span className="text-ink/80 group-hover:text-ink transition-colors">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features Card */}
                  <div className="bg-white rounded-2xl border border-line p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-5 flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-muted/40" />
                      What you get
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex gap-3 text-[15px] group">
                          <Check className="w-5 h-5 text-success mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-ink/80 group-hover:text-ink transition-colors">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Industries Card */}
                  <div className="bg-white rounded-2xl border border-line p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-5 flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-muted/40" />
                      Best for
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {s.industries.map((ind) => (
                        <span
                          key={ind}
                          className="text-sm px-4 py-2 rounded-full bg-bg border border-line hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          );
        })}
      </div>

      {/* CTA Section - Enhanced */}
      <Section className="relative bg-gradient-to-br from-ink to-ink/95 text-bg overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-primary/60 font-medium mb-6">
            <span className="w-8 h-px bg-primary/40" />
            Let's build something
          </div>

          <h2 className="font-display text-display-lg font-bold leading-[1.1] tracking-tight">
            Don't see your exact need?
          </h2>

          <p className="mt-6 text-xl text-bg/70 leading-relaxed max-w-2xl">
            That's the point. We don't sell pre-packaged products.
            <span className="block text-bg/50 text-lg mt-2">
              Tell us what's broken in your business — we'll design the software around it.
            </span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href="/contact"
              size="lg"
              className="bg-bg text-ink hover:bg-bg/90 shadow-lg shadow-bg/20"
              arrow
            >
              Start a conversation
            </Button>
            <Button
              href="/portfolio"
              size="lg"
              variant="outline"
              className="border-bg/20 text-bg hover:bg-bg/10"
            >
              See our work
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="mt-12 pt-8 border-t border-bg/10 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-bg/50">100% custom-built</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-bg/50">End-to-end ownership</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm text-bg/50">Dedicated support</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}