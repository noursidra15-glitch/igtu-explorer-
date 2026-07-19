import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Building2, Landmark, HardHat, Clock, BookOpen, Sparkles, Monitor, Briefcase,
  ArrowRight, FileText,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import specialties from "@/data/specialties.json";
import resources from "@/data/resources.json";

const icons: Record<string, React.ElementType> = { Building2, Landmark, HardHat };

export function generateStaticParams() {
  return specialties.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const specialty = specialties.find((s) => s.slug === slug);
  if (!specialty) return {};
  return {
    title: specialty.name,
    description: specialty.overview ?? specialty.tagline,
  };
}

export default async function SpecialtyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const specialty = specialties.find((s) => s.slug === slug);
  if (!specialty) notFound();

  const Icon = icons[specialty.icon] ?? Building2;
  const relatedResources = resources.filter((r) => r.specialty === specialty.name).slice(0, 4);

  type StudyPlanItem = {
    year: string;
    focus: string;
  };
  
  const studyPlan =
    "studyPlan" in specialty
      ? (specialty.studyPlan as StudyPlanItem[])
      : [];

  return (
    <div className="pb-24 pt-32">
      <Container>
        <Breadcrumbs items={[{ label: "Specialties", href: "/specialties" }, { label: specialty.name }]} />

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
              <Icon size={13} /> {specialty.nameEn}
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{specialty.name}</h1>
            <p className="mt-4 text-base leading-relaxed text-foreground/60 sm:text-lg">{specialty.tagline}</p>
          </div>
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-brand to-blue-brand text-white shadow-lg shadow-emerald-brand/20">
            <Icon size={40} />
          </div>
        </div>

        {/* Overview + Duration */}
        <Reveal className="mt-14 grid gap-5 lg:grid-cols-3">
          <GlassCard className="lg:col-span-2">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">{specialty.overview}</p>
          </GlassCard>
          <GlassCard>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
              <Clock size={17} />
            </span>
            <h2 className="mt-4 text-sm font-semibold text-foreground/50">Duration</h2>
            <p className="mt-1 text-base font-semibold">{specialty.duration}</p>
          </GlassCard>
        </Reveal>
        {/* Quick Facts */}
<section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

<GlassCard>
  <h3 className="text-xs font-semibold text-foreground/50 uppercase">
    Degree
  </h3>
  <p className="mt-2 font-semibold">{specialty.degree}</p>
</GlassCard>

<GlassCard>
  <h3 className="text-xs font-semibold text-foreground/50 uppercase">
    Duration
  </h3>
  <p className="mt-2 font-semibold">{specialty.duration}</p>
</GlassCard>

<GlassCard>
  <h3 className="text-xs font-semibold text-foreground/50 uppercase">
    Languages
  </h3>
  <p className="mt-2 font-semibold">
    {specialty.language.join(", ")}
  </p>
</GlassCard>

<GlassCard>
  <h3 className="text-xs font-semibold text-foreground/50 uppercase">
    Admission
  </h3>
  <p className="mt-2 text-sm">
    {specialty.admission}
  </p>
</GlassCard>

<GlassCard>
  <h3 className="text-xs font-semibold text-foreground/50 uppercase">
    Higher Studies
  </h3>
  <p className="mt-2 text-sm">
    {specialty.higherStudies.length}
    {" "}Options
  </p>
</GlassCard>

</section>
        {/* Formation Offer */}
{specialty.formationOffer && (
  <section className="mt-16">
    <SectionHeading
      eyebrow="Official Documents"
      title="Formation Offer"
      align="left"
      className="mx-0 text-left"
    />

    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {specialty.formationOffer.licence && (
        <GlassCard className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">Licence</p>
            <p className="mt-1 text-sm text-foreground/60">
              Official training offer (PDF)
            </p>
          </div>

          <a
            href={specialty.formationOffer.licence}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-brand px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Download
          </a>
        </GlassCard>
      )}

      {specialty.formationOffer.master && (
        <GlassCard className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">Master</p>
            <p className="mt-1 text-sm text-foreground/60">
              Official training offer (PDF)
            </p>
          </div>

          <a
            href={specialty.formationOffer.master}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-brand px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Download
          </a>
        </GlassCard>
      )}
    </div>
  </section>
)}
        {/* Study Plan */}
        <section className="mt-20">
          <SectionHeading eyebrow="Curriculum" title="Study plan" align="left" className="mx-0 text-left" />
          <div className="mt-10 space-y-4">
          {"studyPlan" in specialty &&
           Array.isArray((specialty as { studyPlan?: { year: string; focus: string }[] }).studyPlan) &&
          (specialty as { studyPlan?: { year: string; focus: string }[] }).studyPlan!.length > 0 ? (

             (specialty as { studyPlan: { year: string; focus: string }[] }).studyPlan.map(
               (step, i) => (
            
              <Reveal key={step.year} delay={i * 0.06}>
               <div className="flex items-start gap-5 rounded-2xl border border-border-soft bg-surface p-5">
                  <span className="flex h-10 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-brand/15 to-blue-brand/15 text-sm font-bold text-emerald-brand">
                     {step.year}
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/65">
                     {step.focus}
                  </p>
               </div>
    </Reveal>
  ))
) : (
  <GlassCard>
    <p className="text-sm text-foreground/60">
    The detailed study plan will be available soon.
    </p>
  </GlassCard>
)}
          </div>
        </section>

        {/* Subjects / Skills / Software */}
        <section className="mt-20 grid gap-5 lg:grid-cols-3">
          <Reveal>
            <GlassCard className="h-full">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
                <BookOpen size={17} />
              </span>
              <h2 className="mt-4 text-base font-semibold">Core Subjects</h2>
              <ul className="mt-3 space-y-2">
                {(specialty.subjects ?? []).map((sub) => (
                  <li key={sub} className="flex items-center gap-2 text-sm text-foreground/65">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-brand" /> {sub}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.08}>
            <GlassCard className="h-full">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-brand/10 text-blue-brand">
                <Sparkles size={17} />
              </span>
              <h2 className="mt-4 text-base font-semibold">Skills You&apos;ll Gain</h2>
              <ul className="mt-3 space-y-2">
                {(specialty.skills ?? []).map((sk) => (
                  <li key={sk} className="flex items-center gap-2 text-sm text-foreground/65">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-brand" /> {sk}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.16}>
            <GlassCard className="h-full">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
                <Monitor size={17} />
              </span>
              <h2 className="mt-4 text-base font-semibold">Software Used</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {(specialty.software ?? []).map((sw) => (
                  <span key={sw} className="rounded-full bg-surface-muted px-3 py-1.5 text-xs font-medium text-foreground/70">
                    {sw}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </section>

        {/* Careers */}
        <section className="mt-20">
          <SectionHeading eyebrow="After Graduation" title="Career opportunities" align="left" className="mx-0 text-left" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(specialty.careers ?? []).map((c) => (
              <div key={c} className="flex items-center gap-3 rounded-xl border border-border-soft bg-surface px-4 py-3.5">
                <Briefcase size={16} className="shrink-0 text-emerald-brand" />
                <span className="text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-20">
          <SectionHeading eyebrow="Questions" title="Frequently asked" align="left" className="mx-0 text-left" />
          <div className="mt-10">
            <Accordion items={specialty.faqs ?? []} />
          </div>
        </section>

        {/* Related resources */}
        {relatedResources.length > 0 && (
          <section className="mt-20">
            <div className="flex items-center justify-between">
              <SectionHeading eyebrow="Keep Learning" title="Related resources" align="left" className="mx-0 text-left" />
              <Link href="/resources" className="focus-ring hidden items-center gap-1.5 text-sm font-semibold text-emerald-brand sm:inline-flex">
                All resources <ArrowRight size={14} />
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {relatedResources.map((r) => (
                <div key={r.id} className="flex items-center gap-4 rounded-xl border border-border-soft bg-surface p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
                    <FileText size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{r.title}</p>
                    <p className="text-xs text-foreground/50">{r.category} · {r.size}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
