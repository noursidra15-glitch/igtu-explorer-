import { FlaskConical } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

export function Research() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Research"
          title="Applied research on real Algerian cities"
          description="Faculty and Master's students investigate the urban challenges M'Sila faces today — not abstract case studies."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {siteData.research.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border-soft bg-surface p-6">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold-brand/10 text-gold-brand">
                  <FlaskConical size={19} />
                </span>
                <h3 className="text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{r.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
