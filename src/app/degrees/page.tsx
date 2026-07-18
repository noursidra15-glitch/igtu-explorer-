import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import degrees from "@/data/degrees.json";

export const metadata: Metadata = {
  title: "Degrees",
  description: "Licence and Master degree programs at IGTU, University of M'Sila.",
};

export default function DegreesPage() {
  const entries = [
    { slug: "licence", ...degrees.licence },
    { slug: "master", ...degrees.master },
  ];

  return (
    <div className="pb-24 pt-32">
      <Container>
        <Breadcrumbs items={[{ label: "Degrees" }]} />
        <div className="mt-8 max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-border-soft bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
            Degree Programs
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            From <span className="gradient-text">Licence to Master</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/60 sm:text-lg">
            A five-year LMD pathway that takes you from urban fundamentals to specialized,
            research-driven expertise.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {entries.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.1}>
              <Link
                href={`/degrees/${d.slug}`}
                className="focus-ring group flex h-full flex-col rounded-3xl border border-border-soft bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-brand/10"
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-brand to-blue-brand text-white">
                  <GraduationCap size={22} />
                </span>
                <h2 className="text-xl font-semibold">{d.title}</h2>
                <p className="mt-2 text-sm font-medium text-emerald-brand">{d.duration} · {d.system}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/60">{d.objectives[0]}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/80 transition-colors group-hover:text-emerald-brand">
                  View program details <ArrowUpRight size={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
