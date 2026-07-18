import { ImageIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const tiles = [
  "Studio Reviews", "GIS Lab", "Campus Grounds", "Graduation Day", "Field Survey", "Workshop Day",
];

export function Gallery() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Life at the institute"
          description="Placeholder tiles — swap in real campus and studio photography whenever it's ready."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {tiles.map((label, i) => (
            <Reveal key={label} delay={(i % 3) * 0.08}>
              <div className="group relative flex aspect-square items-end overflow-hidden rounded-2xl border border-border-soft bg-gradient-to-br from-blue-brand/10 via-emerald-brand/10 to-gold-brand/10 p-4">
                <span className="absolute right-3 top-3 text-foreground/25">
                  <ImageIcon size={18} />
                </span>
                <p className="relative text-xs font-semibold text-foreground/70">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
