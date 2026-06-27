import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/section";
import { TextReveal } from "@/components/ui/text-reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generateMetadata({
  title: "About — Adwyzors",
  description:
    "Adwyzors is a business process digitization company. We study how businesses work, then engineer custom software around them.",
  path: "/about",
});

const values = [
  {
    title: "Business first, software second",
    body: "We redesign the process before we write the code. The biggest ROI comes from workflow, not features.",
  },
  {
    title: "No black boxes",
    body: "Fortnightly demos. Shared project boards. You see progress, you approve milestones, you own the outcome.",
  },
  {
    title: "Long-term partnerships",
    body: "92% of our clients stay with us for 3+ years. We don't build and disappear. We grow with your business.",
  },
  {
    title: "Operators, not just owners",
    body: "We design for the person on the floor, not just the person in the cabin. Adoption is the real metric.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-22 md:pb-30">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              About Adwyzors
            </div>
            <h1 className="font-display text-display-xl font-semibold leading-[0.98]">
              <TextReveal>We exist because</TextReveal>
              <br />
              <TextReveal delay={0.2} className="text-muted">
                off-the-shelf ERP failed you.
              </TextReveal>
            </h1>
            <p className="mt-8 text-xl text-muted leading-relaxed max-w-3xl">
              Adwyzors was founded on a simple observation: most Indian SMEs don&apos;t have a software
              problem. They have a <em>fit</em> problem. The software exists — but it forces them to
              run their business someone else&apos;s way. We build software that runs their way.
            </p>
          </div>
        </div>
      </section>

      <Section className="bg-white border-y border-line">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader
              eyebrow="Our story"
              title={<>Built from the <span className="text-muted">factory floor up.</span></>}
            />
          </div>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We started Adwyzors after watching a 30-year-old wholesale business struggle with
              an ERP that required them to change everything — their chart of accounts, their
              scheme logic, their credit workflow. The software was excellent. It was excellent
              for someone else&apos;s business.
            </p>
            <p>
              So we asked a different question: what if we started with the business? What if we
              spent weeks understanding how they actually work — the registers, the Excel, the
              WhatsApp groups — and then built software that replaced those, one workflow at a
              time?
            </p>
            <p>
              That&apos;s what we do. We&apos;re consultants who build. We sit on your floor before we sit
              at our keyboards. And we don&apos;t ship a single line of code until we&apos;ve redesigned
              the process it&apos;s meant to support.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="What we believe"
          title={<>Four principles. <span className="text-muted">Non-negotiable.</span></>}
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map((v, i) => (
            <div key={v.title} className="p-8 rounded-3xl border border-line bg-white">
              <div className="font-mono text-xs text-muted tabular mb-4">0{i + 1}</div>
              <h3 className="font-display text-xl font-semibold mb-3">{v.title}</h3>
              <p className="text-muted leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-ink text-bg">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-bg/50 mb-6">
            <span className="w-6 h-px bg-bg/40" />
            Mission
          </div>
          <h2 className="font-display text-display-lg font-semibold leading-[1.02]">
            Bridge the gap between traditional Indian businesses and intelligent software.
          </h2>
          <p className="mt-6 text-lg text-bg/60 leading-relaxed">
            Not by forcing them into Silicon Valley tools. Not by selling them off-the-shelf ERPs.
            But by studying their businesses and engineering software that fits — completely,
            unapologetically, around how they actually work.
          </p>
          <div className="mt-10">
            <Button href="/contact" size="lg" className="bg-bg text-ink hover:bg-bg/90" arrow>
              Work with us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}