import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function AboutTeaser() {
  return (
    <section className="py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <span className="mb-3 inline-block rounded-full border border-border-soft bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
            About the Institute
          </span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Training urban leaders since day one
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/60">
            The Institute of Management and Urban Techniques (IGTU), part of Mohamed Boudiaf
            University in M&apos;Sila, trains the planners, administrators and engineers who will
            manage Algeria&apos;s growing cities — combining rigorous academics with hands-on
            studio work on real municipal challenges.
          </p>
          <Link
            href="/about"
            className="focus-ring mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-brand"
          >
            Learn more about IGTU <ArrowRight size={15} />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-border-soft bg-gradient-to-br from-blue-brand/10 via-emerald-brand/10 to-gold-brand/10 p-10">
            <div className="topo-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
            <div className="relative grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="font-display text-2xl font-bold text-blue-brand">3</p>
                <p className="mt-1 text-xs text-foreground/60">Specialties</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-emerald-brand">2</p>
                <p className="mt-1 text-xs text-foreground/60">Degree Levels</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-gold-brand">15+</p>
                <p className="mt-1 text-xs text-foreground/60">Years of Excellence</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-blue-brand">1</p>
                <p className="mt-1 text-xs text-foreground/60">Active Student Club</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
