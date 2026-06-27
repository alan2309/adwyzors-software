import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = generateMetadata({
  title: "Privacy Policy",
  description: "How Adwyzors collects, uses, and protects your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section narrow>
      <article className="prose-custom pt-32">
        <div className="text-xs tracking-[0.18em] uppercase text-muted mb-5">Legal</div>
        <h1 className="font-display text-display-lg font-semibold mb-8">Privacy Policy</h1>
        <p className="text-muted leading-relaxed mb-4">Last updated: June 27, 2026</p>

        <div className="space-y-8 mt-10">
          {[
            {
              title: "1. Information we collect",
              body: "We collect information you provide directly — name, company, email, phone, and project details — through our contact forms and discovery calls. We also collect standard analytics data (pages visited, referral source) to improve our website.",
            },
            {
              title: "2. How we use your information",
              body: "To respond to inquiries, schedule discovery calls, send proposals, and (with consent) share relevant insights. We never sell your data. Ever.",
            },
            {
              title: "3. Data we collect from clients",
              body: "During engagements, we may access your business data to build and deploy software. All client data is governed by a separate Data Processing Agreement and NDA signed before work begins.",
            },
            {
              title: "4. Data retention",
              body: "Inquiry data is retained for 24 months. Client data is retained for the duration of the engagement plus 36 months, then securely deleted unless otherwise agreed.",
            },
            {
              title: "5. Your rights",
              body: "You can request access, correction, or deletion of your personal data at any time by emailing privacy@adwyzors.com.",
            },
            {
              title: "6. Contact",
              body: "For privacy-related questions, email privacy@adwyzors.com.",
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