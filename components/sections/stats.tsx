"use client";

import { Section } from "@/components/ui/section";
import { Counter } from "@/components/ui/counter";

const stats = [
  { value: 40, suffix: "+", label: "Businesses digitized" },
  { value: 99.6, suffix: "%", decimals: 1, label: "Avg. inventory accuracy achieved" },
  { value: 92, suffix: "%", label: "Client retention over 3 years" },
  { value: 16, suffix: " wks", label: "Average time to go-live" },
];

export function Stats() {
  return (
    <Section className="bg-ink text-bg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-display text-display-md font-semibold tabular">
              <Counter to={s.value} suffix={s.suffix} decimals={"decimals" in s ? s.decimals : 0} />
            </div>
            <div className="mt-2 text-sm text-bg/60">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}