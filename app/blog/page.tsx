import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = generateMetadata({
  title: "Insights — Business automation, ERP, and digitization",
  description:
    "Practical insights on business automation, custom ERP, inventory management, workflow redesign, and digitization for Indian SMEs.",
  path: "/blog",
});

const posts = [
  {
    slug: "why-off-the-shelf-erp-fails-sme",
    category: "ERP",
    title: "Why off-the-shelf ERP fails Indian SMEs (and what to do instead)",
    excerpt:
      "Most ERPs force your business to adapt to their workflow. For businesses with unique processes, that's a recipe for shelfware.",
    readTime: "8 min",
    date: "Jun 20, 2026",
  },
  {
    slug: "registers-to-realtime",
    category: "Digitization",
    title: "From registers to real-time: a playbook for first-time digitization",
    excerpt:
      "If your business runs on paper, don't start with software. Start with a process audit. Here's the exact framework we use.",
    readTime: "12 min",
    date: "Jun 12, 2026",
  },
  {
    slug: "inventory-accuracy-99",
    category: "Inventory",
    title: "How to move from 82% to 99.6% inventory accuracy in 90 days",
    excerpt:
      "A practical guide to cycle counting, bin locations, barcode scanning, and the process changes that make technology stick.",
    readTime: "10 min",
    date: "Jun 03, 2026",
  },
  {
    slug: "garment-piece-rate-payroll",
    category: "Garments",
    title: "The hidden cost of manual piece-rate payroll in garment factories",
    excerpt:
      "We analyzed 12 garment factories. The average factory spends 8 days per month on payroll. Here's how to cut it to hours.",
    readTime: "9 min",
    date: "May 25, 2026",
  },
  {
    slug: "wholesale-credit-control",
    category: "Wholesale",
    title: "Hard vs soft credit control: what actually reduces overdue receivables",
    excerpt:
      "We tested both approaches across 18 wholesale distributors. The results surprised even us.",
    readTime: "7 min",
    date: "May 18, 2026",
  },
  {
    slug: "warehouse-slotting",
    category: "Warehouses",
    title: "Velocity-based slotting is not enough: the case for affinity slotting",
    excerpt:
      "Most WMS implementations slot by velocity alone. But items ordered together should live together. Here's the math.",
    readTime: "11 min",
    date: "May 10, 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-40 pb-22">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-muted mb-6">
              <span className="w-6 h-px bg-ink/40" />
              Insights
            </div>
            <h1 className="font-display text-display-xl font-semibold leading-[0.98]">
              Field notes from<br />
              <span className="text-muted">the factory floor.</span>
            </h1>
            <p className="mt-8 text-xl text-muted leading-relaxed max-w-3xl">
              Practical writing on business automation, ERP, inventory, and digitization — from
              the team that builds it every day.
            </p>
          </div>
        </div>
      </section>

      <Section className="!pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group block rounded-3xl border border-line bg-white p-7 hover:border-ink/20 hover:shadow-elevated transition-all"
            >
              <div className="flex items-center gap-3 mb-5 text-xs text-muted">
                <span className="px-2.5 py-1 rounded-full bg-bg border border-line">{p.category}</span>
                <span>·</span>
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.readTime}</span>
              </div>
              <h2 className="font-display text-xl font-semibold leading-snug mb-3 group-hover:text-accent transition-colors">
                {p.title}
              </h2>
              <p className="text-muted text-[15px] leading-relaxed">{p.excerpt}</p>
              <div className="mt-5 text-sm font-medium link-underline">Read article →</div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}