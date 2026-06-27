import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
};

export function Marquee({ children, className, reverse = false, pauseOnHover = false }: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden marquee-mask", className)}>
      <div
        className={cn(
          "flex w-max gap-12 animate-marquee",
          reverse && "direction-rtl",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {children}
        {children}
      </div>
    </div>
  );
}