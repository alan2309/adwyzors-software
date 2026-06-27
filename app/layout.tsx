import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Adwyzors — Business Process Digitization & Custom Software",
    template: "%s | Adwyzors",
  },
  description:
    "We study how your business works, then engineer custom ERP, inventory, and operations software that replaces registers, Excel, and WhatsApp chaos with one intelligent system.",
  keywords: [
    "Custom Software Development India",
    "Business Automation Software",
    "Custom ERP Development",
    "Workflow Automation",
    "Business Digitization",
    "Manufacturing ERP",
    "Warehouse Management Software",
    "Inventory Software Company",
  ],
  authors: [{ name: "Adwyzors" }],
  creator: "Adwyzors",
  publisher: "Adwyzors",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "Adwyzors",
    title: "Adwyzors — Business Process Digitization",
    description:
      "Software should adapt to businesses, not businesses to software. Custom ERP, inventory & operations software for Indian SMEs.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adwyzors — Business Process Digitization",
    description: "Custom software built around your business, not the other way around.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="noise">
      <body className="min-h-screen bg-bg text-ink antialiased">
        <ScrollProgress />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}