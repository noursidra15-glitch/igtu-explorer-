import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

export function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="Student Voices" title="What our students say" />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {siteData.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <GlassCard className="h-full">
                <Quote className="text-emerald-brand/50" size={26} />
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-foreground/50">{t.role}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
