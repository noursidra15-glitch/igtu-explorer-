import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

export function StudentLife() {
  return (
    <section className="bg-surface-muted py-24">
      <Container>
        <SectionHeading eyebrow="Student Life" title="More than lecture halls" />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {siteData.studentLife.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border-soft bg-surface p-6">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-brand to-emerald-brand text-white">
                  <Sparkles size={19} />
                </span>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
