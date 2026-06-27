import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogPosts } from "@/lib/constants";

export const metadata: Metadata = generateMetadata({
  title: "Insights — Business automation, ERP, and digitization",
  description:
    "Practical insights on business automation, custom ERP, inventory management, workflow redesign, and digitization for Indian SMEs.",
  path: "/blog",
});

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
          {blogPosts.map((p) => (
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