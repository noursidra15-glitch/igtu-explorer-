import type { Metadata } from "next";
import { Building2, Target, Eye, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

export const metadata: Metadata = {
  title: "About",
  description: "The history, mission, vision and facilities of the Institute of Urban Management and Techniques (IGTU), University of M'Sila.",
};

export default function AboutPage() {
  return (
    <div className="pb-24 pt-32">
      <Container>
        <Breadcrumbs items={[{ label: "About" }]} />

        <div className="mt-8 max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-border-soft bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
            About IGTU
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Building the people who <span className="gradient-text">build cities</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/60 sm:text-lg">
            The Institute of Urban Management and Techniques (IGTU) at Université Mohamed Boudiaf,
            M&apos;Sila, trains planners, engineers and administrators to shape Algeria&apos;s
            growing cities — combining rigorous theory with hands-on studio and field work.
          </p>
        </div>
      </Container>

      {/* Mission / Vision / Excellence */}
      <section className="mt-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: Target, title: "Mission", text: "To equip students with the analytical, technical and design skills needed to plan, manage and build sustainable urban environments across Algeria." },
              { icon: Eye, title: "Vision", text: "To be a reference institute for urban education in the region, producing graduates who shape resilient, well-governed, livable cities." },
              { icon: Award, title: "Academic Excellence", text: "A curriculum built on real case studies, licensed professional software, and studios graded on work that could be presented to an actual planning authority." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <GlassCard className="h-full">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-brand to-blue-brand text-white">
                    <item.icon size={19} />
                  </span>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">{item.text}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="mt-24">
        <Container>
          <SectionHeading eyebrow="Our History" title="A timeline of growth" />
          <div className="relative mx-auto mt-14 max-w-2xl">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-brand to-blue-brand sm:left-1/2" />
            <div className="space-y-10">
              {siteData.timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.06}>
                  <div className={`relative flex items-start gap-6 sm:w-1/2 ${i % 2 === 1 ? "sm:ml-auto sm:flex-row-reverse sm:text-right" : ""}`}>
                    <span className="relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-background bg-emerald-brand sm:absolute sm:top-1 sm:left-[-7px] sm:mt-0" />
                    <div>
                      <p className="font-display text-lg font-bold text-emerald-brand">{item.year}</p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/65">{item.event}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Facilities */}
      <section className="mt-24">
        <Container>
          <SectionHeading eyebrow="On Campus" title="Facilities built for hands-on learning" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {siteData.facilities.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-border-soft bg-surface p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
                    <Building2 size={18} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{f.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">{f.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      
