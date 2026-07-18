import { CheckCircle2, Target, BookMarked, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";

interface DegreeData {
  title: string;
  duration: string;
  system: string;
  admission: string[];
  objectives: string[];
  curriculum: { semester: string; courses: string[] }[];
  careerPaths: string[];
}

export function DegreeDetail({ degree, label }: { degree: DegreeData; label: string }) {
  return (
    <div className="pb-24 pt-32">
      <Container>
        <Breadcrumbs items={[{ label: "Degrees", href: "/degrees" }, { label }]} />
        <div className="mt-8 max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-border-soft bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
            {degree.duration} · {degree.system}
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{degree.title}</h1>
        </div>

        {/* Admission + Objectives */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
                <CheckCircle2 size={17} />
              </span>
              <h2 className="mt-4 text-base font-semibold">Admission</h2>
              <ul className="mt-3 space-y-2.5">
                {degree.admission.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-foreground/65">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-brand" /> {a}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.08}>
            <GlassCard className="h-full">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-brand/10 text-blue-brand">
                <Target size={17} />
              </span>
              <h2 className="mt-4 text-base font-semibold">Objectives</h2>
              <ul className="mt-3 space-y-2.5">
                {degree.objectives.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-foreground/65">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-brand" /> {o}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </div>

        {/* Curriculum */}
        <section className="mt-20">
          <SectionHeading eyebrow="Program Structure" title="Curriculum & courses" align="left" className="mx-0 text-left" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {degree.curriculum.map((c, i) => (
              <Reveal key={c.semester} delay={i * 0.06}>
                <div className="rounded-2xl border border-border-soft bg-surface p-6">
                  <div className="flex items-center gap-2">
                    <BookMarked size={16} className="text-emerald-brand" />
                    <h3 className="text-sm font-semibold">{c.semester}</h3>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {c.courses.map((course) => (
                      <li key={course} className="text-sm text-foreground/65">· {course}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Career Paths */}
        <section className="mt-20">
          <SectionHeading eyebrow="Outcomes" title="Career paths" align="left" className="mx-0 text-left" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {degree.careerPaths.map((c) => (
              <div key={c} className="flex items-center gap-3 rounded-xl border border-border-soft bg-surface px-4 py-3.5">
                <Briefcase size={16} className="shrink-0 text-emerald-brand" />
                <span className="text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
