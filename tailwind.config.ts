import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAFA",
        ink: "#111827",
        accent: "#2563EB",
        primary: "#2563EB",
        line: "#E5E7EB",
        muted: "#6B7280",
        success: "#10B981",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Manrope", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["3.75rem", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["3.00rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        soft: "0 2px 12px 0 rgba(0, 0, 0, 0.03), 0 1px 4px 0 rgba(0, 0, 0, 0.02)",
        elevated: "0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.01)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;