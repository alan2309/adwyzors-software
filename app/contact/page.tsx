import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { ContactForm } from "./contact-form";
import { siteConfig } from "@/lib/constants";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Contact — Book a discovery call",
  description:
    "Book a 45-minute discovery call with Adwyzors. No pitch. No slides. Just a conversation about how your business runs — and where software could help.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-22">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-muted mb-6">
                <span className="w-6 h-px bg-ink/40" />
                Get in touch
              </div>
              <h1 className="font-display text-display-xl font-semibold leading-[0.98]">
                Let's study your<br />
                <span className="text-muted">business first.</span>
              </h1>
              <p className="mt-8 text-xl text-muted leading-relaxed">
                A 45-minute discovery call. No pitch. No slides. Just a conversation about how
                your business runs — and where software could help.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { icon: Clock, label: "Response within 24 hours" },
                  { icon: ShieldCheck, label: "NDA available on request" },
                  { icon: MessageCircle, label: "No commitment, no pressure" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-full bg-ink/5 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-line space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm group"
                >
                  <Mail className="w-4 h-4 text-muted" />
                  <span className="link-underline">{siteConfig.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-sm group"
                >
                  <Phone className="w-4 h-4 text-muted" />
                  <span className="link-underline">{siteConfig.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm group"
                >
                  <MessageCircle className="w-4 h-4 text-muted" />
                  <span className="link-underline">WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <MapPin className="w-4 h-4" />
                  <span>{siteConfig.address}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-line bg-white p-8 md:p-10">
                <h2 className="font-display text-2xl font-semibold mb-2">Book a discovery call</h2>
                <p className="text-muted text-sm mb-8">
                  Tell us a bit about your business. We'll get back within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}