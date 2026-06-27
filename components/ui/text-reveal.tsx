"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  children: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  by?: "word" | "line" | "char";
};

export function TextReveal({
  children,
  as: Tag = "span",
  className,
  delay = 0,
  by = "word",
}: TextRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const splits =
    by === "word"
      ? children.split(/(\s+)/)
      : by === "line"
        ? children.split("\n")
        : children.split("");

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: by === "char" ? 0.015 : 0.04, delayChildren: delay } },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: "0.5em", filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Tag
      // @ts-expect-error dynamic tag
      ref={ref}
      className={cn("inline-block", className)}
      aria-label={children}
    >
      <span className="inline-block overflow-hidden pb-1">
        <motion.span
          className="inline-block"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {splits.map((segment, i) => (
            <motion.span key={i} variants={child} className="inline-block whitespace-pre">
              {segment}
            </motion.span>
          ))}
        </motion.span>
      </span>
    </Tag>
  );
}