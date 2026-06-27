import { cn } from "@/lib/utils";

type SectionProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
    narrow?: boolean;
};

export function Section({ children, className, id, narrow }: SectionProps) {
    return (
        <section id={id} className={cn("relative py-22 md:py-30", className)}>
            <div className={cn("mx-auto w-full px-6 md:px-10", narrow ? "max-w-4xl" : "max-w-7xl")}>
                {children}
            </div>
        </section>
    );
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    align = "left",
}: {
    eyebrow?: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    align?: "left" | "center";
}) {
    return (
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
            {eyebrow && (
                <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-muted mb-5">
                    <span className="w-6 h-px bg-ink/40" />
                    {eyebrow}
                </div>
            )}
            <h2 className="font-display text-display-lg font-semibold text-ink">{title}</h2>
            {description && (
                <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl mx-auto">{description}</p>
            )}
        </div>
    );
}