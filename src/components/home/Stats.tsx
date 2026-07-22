"use client";

import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/components/layout/LanguageProvider";
import siteData from "@/data/site.json";

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-border-soft bg-surface-muted py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {siteData.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.08} className="text-center">
              <p className="font-display text-3xl font-bold text-emerald-brand sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>

              <p className="mt-2 text-xs font-medium text-foreground/60 sm:text-sm">
                {t.stats[i]}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
