"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";
import Link from "next/link";
import { Building2, Landmark, HardHat, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import specialties from "@/data/specialties.json";

const icons: Record<string, React.ElementType> = { Building2, Landmark, HardHat };

export function SpecialtiesPreview() {
  const { t } = useLanguage();
  return (
    <section className="bg-surface-muted py-24">
      <Container>
        <SectionHeading
          eyebrow={t.specialties.eyebrow}
          title={t.specialties.title}
          description={t.specialties.description}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {specialties.map((s, i) => {
            const Icon = icons[s.icon] ?? Building2;
            return (
              <Reveal key={s.slug} delay={i * 0.1}>
                <Link
                  href={`/specialties/${s.slug}`}
                  className="focus-ring group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border-soft bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-brand/10"
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-brand/15 to-blue-brand/15 blur-2xl transition-transform duration-500 group-hover:scale-125"
                    aria-hidden
                  />
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-brand to-blue-brand text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-xl font-semibold">{s.name}</h3>
                  <p className="mt-1 text-sm font-medium text-emerald-brand">{s.nameEn}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/60">{s.tagline}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/80 transition-colors group-hover:text-emerald-brand">
                  {t.specialties.viewProgram}
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
