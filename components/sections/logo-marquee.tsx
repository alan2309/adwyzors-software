import { Marquee } from "@/components/ui/marquee";

const items = [
    "Tiruppur Exports",
    "Mumbai 3PL",
    "Bengaluru Wholesale",
    "Pune Manufacturing",
    "Delhi Distribution",
    "Ahmedabad Garments",
    "Chennai Retail",
    "Hyderabad Logistics",
];

export function LogoMarquee() {
    return (
        <section className="py-14 border-y border-line bg-white/40">
            <div className="mx-auto max-w-7xl px-6 md:px-10 mb-6">
                <p className="text-xs tracking-[0.18em] uppercase text-muted text-center">
                    Running in production across India
                </p>
            </div>
            <Marquee>
                {items.map((name) => (
                    <div
                        key={name}
                        className="flex items-center gap-3 text-ink/60 font-display font-semibold text-xl whitespace-nowrap"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {name}
                    </div>
                ))}
            </Marquee>
        </section>
    );
}