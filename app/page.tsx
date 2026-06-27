import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Transformation } from "@/components/sections/transformation";
import { WorkflowAnimation } from "@/components/sections/workflow-animation";
import { Services } from "@/components/sections/services";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { Benefits } from "@/components/sections/benefits";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { organizationSchema, faqSchema } from "@/lib/seo";
import { faqs } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Adwyzors — Business Process Digitization & Custom Software",
  description:
    "We study how your business works, then engineer custom ERP, inventory, and operations software that replaces registers, Excel, and WhatsApp chaos with one intelligent system.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const jsonLd = [organizationSchema, faqSchema(faqs)];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <LogoMarquee />
      <Problem />
      <Solution />
      <Transformation />
      <WorkflowAnimation />
      <Services />
      <Industries />
      <Process />
      <PortfolioPreview />
      <Stats />
      <Benefits />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}