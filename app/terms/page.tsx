// app/terms/page.tsx
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = generateMetadata({
  title: "Terms of Service",
  description: "Terms governing the use of Adwyzors' website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section narrow>
      <article className="pt-32">
        <div className="text-xs tracking-[0.18em] uppercase text-muted mb-5">Legal</div>
        <h1 className="font-display text-display-lg font-semibold mb-8">Terms of Service</h1>
        <p className="text-muted leading-relaxed mb-4">Last updated: June 27, 2026</p>

        <div className="space-y-8 mt-10">
          {[
            {
              title: "1. Services",
              body: "Adwyzors provides business process analysis, workflow redesign, and custom software development services. Each engagement is governed by a separate Statement of Work (SOW) signed by both parties.",
            },
            {
              title: "2. Intellectual property",
              body: "Upon full payment, all custom software developed for you is owned by you. Pre-existing Adwyzors components and frameworks remain Adwyzors IP, licensed to you for use.",
            },
            {
              title: "3. Confidentiality",
              body: "Both parties agree to keep proprietary information confidential. NDAs are signed before any business-sensitive information is shared.",
            },
            {
              title: "4. Payment terms",
              body: "Standard terms: 40% on signing, 30% at midpoint, 30% on go-live. AMC and support are billed monthly or annually as agreed.",
            },
            {
              title: "5. Limitation of liability",
              body: "Adwyzors' total liability is limited to the fees paid under the relevant SOW. We are not liable for indirect, incidental, or consequential damages.",
            },
            {
              title: "6. Governing law",
              body: "These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of courts in [City].",
            },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-semibold mb-3">{s.title}</h2>
              <p className="text-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </article>
    </Section>
  );
}