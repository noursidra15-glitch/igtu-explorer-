import { LayoutGrid, MapPinned, Building2, Briefcase, Users, Library } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

const icons: Record<string, React.ElementType> = {
  LayoutGrid,
  MapPinned,
  Building2,
  Briefcase,
  Users,
  Library,
};

export function Features() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Why IGTU"
          title="A complete foundation for urban careers"
          description="From the first sketch of a master plan to the final line of a GIS report, every course connects directly to how Algerian cities actually work."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.features.map((feature, i) => {
            const Icon = icons[feature.icon] ?? Building2;
            return (
              <Reveal key={feature.title} delay={(i % 3) * 0.1}>
                <GlassCard className="h-full">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-brand to-blue-brand text-white">
                    <Icon size={19} />
                  </span>
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">{feature.description}</p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
