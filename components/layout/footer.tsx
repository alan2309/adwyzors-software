import { siteConfig, navLinks } from "@/lib/constants";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.18em] uppercase text-muted mb-6">Let&apos;s build</p>
            <h3 className="font-display text-display-md font-semibold leading-[1.05]">
              Your business deserves<br />
              <span className="text-muted">software that fits.</span>
            </h3>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`/contact`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-bg text-sm font-medium hover:bg-ink/90 transition-colors"
              >
                Book a consultation
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line text-sm font-medium hover:border-ink/30 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.18em] uppercase text-muted mb-5">Company</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.18em] uppercase text-muted mb-5">Legal</p>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm text-ink link-underline">Privacy</Link></li>
              <li><Link href="/terms" className="text-sm text-ink link-underline">Terms</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.18em] uppercase text-muted mb-5">Contact</p>
            <ul className="space-y-3 text-sm">
              <li><a href={`mailto:${siteConfig.email}`} className="link-underline">{siteConfig.email}</a></li>
              <li><a href={`tel:${siteConfig.phone}`} className="link-underline">{siteConfig.phone}</a></li>
              <li className="text-muted">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Adwyzors. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Software should adapt to businesses, not businesses to software.
          </p>
        </div>
      </div>
    </footer>
  );
}