import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

export function Partners() {
  return (
    <section className="py-16">
      <Container>
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
            Institutional Partners
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {siteData.partners.map((p) => (
            <span key={p} className="text-sm font-medium text-foreground/40 transition-colors hover:text-foreground/70">
              {p}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
