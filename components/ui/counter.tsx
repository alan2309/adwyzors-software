"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type CounterProps = {
    from?: number;
    to: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    duration?: number;
    className?: string;
};

export function Counter({
    from = 0,
    to,
    suffix = "",
    prefix = "",
    decimals = 0,
    duration = 2,
    className,
}: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const mv = useMotionValue(from);
    const spring = useSpring(mv, { duration: duration * 1000, stiffness: 60, damping: 20 });
    const display = useTransform(spring, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);

    useEffect(() => {
        if (inView) mv.set(to);
    }, [inView, mv, to]);

    return (
        <motion.span ref={ref} className={cn("tabular", className)}>
            {display}
        </motion.span>
    );
}