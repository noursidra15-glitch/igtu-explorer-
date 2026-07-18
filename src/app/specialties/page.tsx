import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Landmark, HardHat, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import specialties from "@/data/specialties.json";

export const metadata: Metadata = {
  title: "Specialties",
  description: "Discover IGTU's three academic specialties: Urbanisme, Gestion des Villes, and Génie Urbain.",
};

const icons: Record<string, React.ElementType> = { Building2, Landmark, HardHat };

export default function SpecialtiesPage() {
  return (
    <div className="pb-24 pt-32">
      <Container>
        <Breadcrumbs items={[{ label: "Specialties" }]} />
        <div className="mt-8 max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-border-soft bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
            Academic Tracks
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Three specialties, <span className="gradient-text">one urban mission</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/60 sm:text-lg">
            Every specialty combines classroom theory, professional software training, and studio
            work on real M&apos;Sila case studies. Choose the track that fits how you want to shape
            cities.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {specialties.map((s, i) => {
            const Icon = icons[s.icon] ?? Building2;
            return (
              <Reveal key={s.slug} delay={i * 0.1}>
                <Link
                  href={`/specialties/${s.slug}`}
                  className="focus-ring group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border-soft bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-brand/10"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-brand/15 to-blue-brand/15 blur-2xl transition-transform duration-500 group-hover:scale-125" aria-hidden />
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-brand to-blue-brand text-white">
                    <Icon size={22} />
                  </span>
                  <h2 className="text-xl font-semibold">{s.name}</h2>
                  <p className="mt-1 text-sm font-medium text-emerald-brand">{s.nameEn}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/60">{s.overview}</p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {s.software.slice(0, 3).map((sw) => (
                      <span key={sw} className="rounded-full bg-surface-muted px-2.5 py-1 text-xs text-foreground/60">
                        {sw}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/80 transition-colors group-hover:text-emerald-brand">
                    View full program <ArrowUpRight size={15} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
