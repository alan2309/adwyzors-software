import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/section";
import { industries } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Check,
  Factory,
  Package,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  HardHat,
  Truck,
  Store,
  TrendingUp,
  Clock,
  Users,
  BarChart3,
  Zap,
  Shield,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = generateMetadata({
  title: "Industries — Manufacturing, Warehouses, Garments, Wholesale",
  description:
    "Custom software for manufacturing, warehouses, garment exporters, wholesale distributors, retail chains, healthcare, education, construction, and logistics.",
  path: "/industries",
});

// Industry icon mapping
const industryIcons: Record<string, any> = {
  "Manufacturing": Factory,
  "Warehousing": Package,
  "Garment": ShoppingBag,
  "Healthcare": Stethoscope,
  "Education": GraduationCap,
  "Construction": HardHat,
  "Logistics": Truck,
  "Retail": Store,
};

function getIndustryIcon(name: string) {
  const key = Object.keys(industryIcons).find(k => name.includes(k));
  return key ? industryIcons[key] : Package;
}

// Color schemes for each industry
const industryColors: Record<string, { bg: string; border: string; icon: string; gradient: string }> = {
  "Manufacturing": {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "text-blue-600",
    gradient: "from-blue-500/20 to-blue-600/5"
  },
  "Warehousing": {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: "text-emerald-600",
    gradient: "from-emerald-500/20 to-emerald-600/5"
  },
  "Garment": {
    bg: "bg-purple-50",
    border: "border-purple-200",
    icon: "text-purple-600",
    gradient: "from-purple-500/20 to-purple-600/5"
  },
  "Healthcare": {
    bg: "bg-red-50",
    border: "border-red-200",
    icon: "text-red-600",
    gradient: "from-red-500/20 to-red-600/5"
  },
  "Education": {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: "text-amber-600",
    gradient: "from-amber-500/20 to-amber-600/5"
  },
  "Construction": {
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: "text-orange-600",
    gradient: "from-orange-500/20 to-orange-600/5"
  },
  "Logistics": {
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    icon: "text-cyan-600",
    gradient: "from-cyan-500/20 to-cyan-600/5"
  },
  "Retail": {
    bg: "bg-pink-50",
    border: "border-pink-200",
    icon: "text-pink-600",
    gradient: "from-pink-500/20 to-pink-600/5"
  },
};

function getIndustryStyles(name: string) {
  const key = Object.keys(industryColors).find(k => name.includes(k));
  return key ? industryColors[key] : {
    bg: "bg-bg",
    border: "border-line",
    icon: "text-ink",
    gradient: "from-ink/5 to-ink/10"
  };
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-accent font-medium mb-6">
              <span className="w-8 h-px bg-accent/40" />
              Industries
              <span className="w-8 h-px bg-accent/40" />
            </div>

            <h1 className="font-display text-display-xl font-bold leading-[0.98] tracking-tight">
              We speak your industry's language.
              <br />
              <span className="text-muted bg-gradient-to-r from-muted to-muted/70 bg-clip-text">
                Literally.
              </span>
            </h1>

            <p className="mt-8 text-xl text-muted leading-relaxed max-w-3xl">
              Each industry has its own vocabulary, its own workflows, its own pain.
              <span className="block text-base text-muted/70 mt-2">
                We've spent years inside each of these — learning not just the software needs, but the business rhythms.
              </span>
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#industries-grid" size="lg" arrow>
                Explore industries
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Get a consultation
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
              <div className="text-3xl font-display font-bold text-primary">20+</div>
              <div className="text-sm text-muted mt-1">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent">150+</div>
              <div className="text-sm text-muted mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-success">98%</div>
              <div className="text-sm text-muted mt-1">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-ink">3.5x</div>
              <div className="text-sm text-muted mt-1">Average ROI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div id="industries-grid" className="space-y-px bg-line">
        {industries.map((ind, idx) => {
          const Icon = getIndustryIcon(ind.name);
          const styles = getIndustryStyles(ind.name);
          const isEven = idx % 2 === 0;

          return (
            <Section
              key={ind.slug}
              className={cn(
                "relative transition-all duration-300",
                isEven ? "bg-white" : "bg-bg"
              )}
            >
              {/* Decorative background */}
              <div className={cn(
                "absolute inset-0 opacity-5 pointer-events-none bg-gradient-to-r",
                styles.gradient
              )} />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Column - Enhanced */}
                <div className="lg:col-span-4">
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "p-3 rounded-2xl border",
                      styles.bg,
                      styles.border
                    )}>
                      <Icon className={cn("w-6 h-6", styles.icon)} />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-muted tabular-nums">
                        / 0{idx + 1}
                      </div>
                      <h2 className="font-display text-2xl font-bold mt-1 tracking-tight">
                        {ind.name}
                      </h2>
                    </div>
                  </div>

                  {/* ROI Card - Enhanced */}
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-ink to-ink/95 text-bg shadow-xl shadow-ink/10">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-bg/50 font-medium mb-3">
                      <TrendingUp className="w-4 h-4" />
                      Expected ROI
                    </div>
                    <div className="font-display text-2xl font-semibold">
                      {ind.roi}
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-bg/40">
                      <span className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        Fast implementation
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5" />
                        Scalable
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Enhanced Cards */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pain Points Card */}
                  <div className="bg-white rounded-2xl border border-line p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20">
                    <h3 className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-4 flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-muted/40" />
                      Pain points
                    </h3>
                    <ul className="space-y-3">
                      {ind.painPoints.map((p) => (
                        <li key={p} className="flex gap-3 text-[15px] leading-relaxed group">
                          <span className="text-accent/40 font-light text-xl leading-none mt-0.5">—</span>
                          <span className="text-ink/80 group-hover:text-ink transition-colors">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Modules Card */}
                  <div className="bg-white rounded-2xl border border-line p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-success/20">
                    <h3 className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-4 flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-muted/40" />
                      Modules we build
                    </h3>
                    <ul className="space-y-3">
                      {ind.modules.map((m) => (
                        <li key={m} className="flex gap-3 text-[15px] group">
                          <Check className="w-5 h-5 text-success mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-ink/80 group-hover:text-ink transition-colors">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Stats - Additional info card */}
                  <div className="md:col-span-2 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl border border-line p-6">
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Clock className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Typical timeline</div>
                          <div className="text-sm text-muted">8-12 weeks</div>
                        </div>
                      </div>
                      <div className="w-px h-8 bg-line hidden sm:block" />
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-accent/10">
                          <Users className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Team size</div>
                          <div className="text-sm text-muted">3-5 experts</div>
                        </div>
                      </div>
                      <div className="w-px h-8 bg-line hidden sm:block" />
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-success/10">
                          <BarChart3 className="w-4 h-4 text-success" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Scalability</div>
                          <div className="text-sm text-muted">Unlimited growth</div>
                        </div>
                      </div>
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
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-accent/60 font-medium mb-6">
            <span className="w-8 h-px bg-accent/40" />
            Let's build together
          </div>

          <h2 className="font-display text-display-lg font-bold leading-[1.1] tracking-tight">
            Your industry isn't listed?
          </h2>

          <p className="mt-6 text-xl text-bg/70 leading-relaxed max-w-2xl">
            We've worked across 20+ industries.
            <span className="block text-bg/50 text-lg mt-2">
              If your business runs on operations, we can probably help. Let's talk.
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
              href="/solutions"
              size="lg"
              variant="outline"
              className="border-bg/20 text-bg hover:bg-bg/10"
            >
              Explore solutions
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-bg/10 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-bg/50">Industry-specific expertise</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-bg/50">Custom solutions</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm text-bg/50">Proven track record</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}