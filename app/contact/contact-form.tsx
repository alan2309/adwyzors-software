"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Field = {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
    options?: string[];
    placeholder?: string;
};

const fields: Field[] = [
    { name: "name", label: "Your name", required: true },
    { name: "company", label: "Company name", required: true },
    { name: "email", label: "Work email", type: "email", required: true },
    { name: "phone", label: "Phone / WhatsApp", required: true },
    {
        name: "employees",
        label: "Company size",
        type: "select",
        options: ["1–10", "11–50", "51–200", "200+"],
    },
    {
        name: "interest",
        label: "What are you looking for?",
        type: "select",
        options: [
            "Custom ERP",
            "Inventory Management",
            "Warehouse Management",
            "Sales CRM",
            "Garment ERP",
            "Employee & Payroll",
            "Not sure yet",
        ],
    },
    {
        name: "message",
        label: "Tell us about your business",
        type: "textarea",
        placeholder: "What's broken? What runs on registers or Excel? What would you change tomorrow if you could?",
    },
];

export function ContactForm() {
    const [state, setState] = useState<"idle" | "loading" | "success">("idle");
    const [data, setData] = useState<Record<string, string>>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setState("loading");
        // TODO: integrate with your backend / Resend / Formspree
        await new Promise((r) => setTimeout(r, 1200));
        setState("success");
    };

    if (state === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center"
            >
                <div className="w-14 h-14 rounded-full bg-success/10 text-success mx-auto flex items-center justify-center mb-5">
                    <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">We've got it.</h3>
                <p className="text-muted">
                    We'll review your details and get back within 24 hours. Check your inbox.
                </p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {fields.map((f) => (
                <div key={f.name}>
                    <label className="block text-sm font-medium mb-2">
                        {f.label}
                        {f.required && <span className="text-accent ml-1">*</span>}
                    </label>
                    {f.type === "select" ? (
                        <select
                            required={f.required}
                            value={data[f.name] || ""}
                            onChange={(e) => setData({ ...data, [f.name]: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-line bg-bg focus:border-ink focus:outline-none transition-colors"
                        >
                            <option value="">Select...</option>
                            {f.options?.map((o) => (
                                <option key={o} value={o}>
                                    {o}
                                </option>
                            ))}
                        </select>
                    ) : f.type === "textarea" ? (
                        <textarea
                            required={f.required}
                            rows={4}
                            placeholder={f.placeholder}
                            value={data[f.name] || ""}
                            onChange={(e) => setData({ ...data, [f.name]: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-line bg-bg focus:border-ink focus:outline-none transition-colors resize-none"
                        />
                    ) : (
                        <input
                            type={f.type || "text"}
                            required={f.required}
                            value={data[f.name] || ""}
                            onChange={(e) => setData({ ...data, [f.name]: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-line bg-bg focus:border-ink focus:outline-none transition-colors"
                        />
                    )}
                </div>
            ))}

            <Button type="submit" size="lg" className="w-full" arrow>
                {state === "loading" ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    "Send inquiry"
                )}
            </Button>

            <p className="text-xs text-muted text-center pt-2">
                By submitting, you agree to our{" "}
                <a href="/privacy" className="underline">
                    privacy policy
                </a>
                .
            </p>
        </form>
    );
}