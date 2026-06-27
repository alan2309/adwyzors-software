import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionProps = {
    children: ReactNode;
    className?: string;
    id?: string;
    narrow?: boolean;
    background?: "white" | "bg" | "ink" | "gradient";
    spacing?: "sm" | "md" | "lg";
};

export function Section({
    children,
    className,
    id,
    narrow,
    background = "white",
    spacing = "md"
}: SectionProps) {
    const backgroundStyles = {
        white: "bg-white",
        bg: "bg-bg",
        ink: "bg-ink text-bg",
        gradient: "bg-gradient-to-br from-ink to-ink/95 text-bg",
    };

    const spacingStyles = {
        sm: "py-12 md:py-16",
        md: "py-22 md:py-30",
        lg: "py-28 md:py-40",
    };

    return (
        <section
            id={id}
            className={cn(
                "relative",
                backgroundStyles[background],
                spacingStyles[spacing],
                className
            )}
        >
            {background === "gradient" && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                </>
            )}
            <div className={cn(
                "relative mx-auto w-full px-6 md:px-10",
                narrow ? "max-w-4xl" : "max-w-7xl"
            )}>
                {children}
            </div>
        </section>
    );
}

type SectionHeaderProps = {
    eyebrow?: string;
    eyebrowIcon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    align?: "left" | "center" | "right";
    size?: "sm" | "md" | "lg";
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
};

export function SectionHeader({
    eyebrow,
    eyebrowIcon,
    title,
    description,
    align = "left",
    size = "md",
    className,
    titleClassName,
    descriptionClassName,
}: SectionHeaderProps) {
    const alignStyles = {
        left: "text-left",
        center: "text-center mx-auto",
        right: "text-right ml-auto",
    };

    const sizeStyles = {
        sm: {
            title: "text-display-sm",
            description: "text-base",
            eyebrow: "text-xs",
        },
        md: {
            title: "text-display-lg",
            description: "text-lg",
            eyebrow: "text-xs",
        },
        lg: {
            title: "text-display-xl",
            description: "text-xl",
            eyebrow: "text-sm",
        },
    };

    return (
        <div className={cn(
            "max-w-3xl",
            alignStyles[align],
            className
        )}>
            {eyebrow && (
                <div className={cn(
                    "inline-flex items-center gap-3 font-medium tracking-[0.18em] uppercase text-muted mb-5",
                    sizeStyles[size].eyebrow,
                    align === "center" && "justify-center",
                    align === "right" && "justify-end"
                )}>
                    <span className="w-8 h-px bg-ink/40" />
                    {eyebrowIcon && <span>{eyebrowIcon}</span>}
                    {eyebrow}
                    <span className="w-8 h-px bg-ink/40" />
                </div>
            )}
            <h2 className={cn(
                "font-display font-bold text-ink tracking-tight",
                sizeStyles[size].title,
                titleClassName
            )}>
                {title}
            </h2>
            {description && (
                <p className={cn(
                    "mt-5 text-muted leading-relaxed",
                    sizeStyles[size].description,
                    align === "center" && "max-w-2xl mx-auto",
                    descriptionClassName
                )}>
                    {description}
                </p>
            )}
        </div>
    );
}

// Additional helper components for sections
type SectionCardProps = {
    children: ReactNode;
    className?: string;
    variant?: "default" | "elevated" | "outlined" | "gradient";
    padding?: "sm" | "md" | "lg";
};

export function SectionCard({
    children,
    className,
    variant = "default",
    padding = "md"
}: SectionCardProps) {
    const variantStyles = {
        default: "bg-white border border-line",
        elevated: "bg-white border border-line shadow-sm hover:shadow-md transition-shadow",
        outlined: "bg-transparent border-2 border-line",
        gradient: "bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-line",
    };

    const paddingStyles = {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    return (
        <div className={cn(
            "rounded-2xl",
            variantStyles[variant],
            paddingStyles[padding],
            className
        )}>
            {children}
        </div>
    );
}

type SectionGridProps = {
    children: ReactNode;
    className?: string;
    columns?: 2 | 3 | 4;
    gap?: "sm" | "md" | "lg";
};

export function SectionGrid({
    children,
    className,
    columns = 2,
    gap = "md"
}: SectionGridProps) {
    const columnStyles = {
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    };

    const gapStyles = {
        sm: "gap-4",
        md: "gap-6",
        lg: "gap-8",
    };

    return (
        <div className={cn(
            "grid",
            columnStyles[columns],
            gapStyles[gap],
            className
        )}>
            {children}
        </div>
    );
}

type SectionStatProps = {
    label: string;
    value: string | number;
    icon?: ReactNode;
    className?: string;
};

export function SectionStat({ label, value, icon, className }: SectionStatProps) {
    return (
        <div className={cn("text-center", className)}>
            {icon && <div className="text-primary mb-2 flex justify-center">{icon}</div>}
            <div className="text-3xl font-display font-bold text-ink">{value}</div>
            <div className="text-sm text-muted mt-1">{label}</div>
        </div>
    );
}

type SectionDividerProps = {
    className?: string;
    withIcon?: boolean;
};

export function SectionDivider({ className, withIcon }: SectionDividerProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-line" />
            </div>
            {withIcon && (
                <div className="relative flex items-center justify-center">
                    <span className="px-4 bg-white text-muted">✦</span>
                </div>
            )}
        </div>
    );
}