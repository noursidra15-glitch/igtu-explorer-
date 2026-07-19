import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import specialties from "@/data/specialties.json";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function FormationOffersHome() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Official Documents"
          title="Formation Offers"
          description="Browse the official formation offers available for each academic specialty."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {specialties.map((specialty) => (
            <GlassCard key={specialty.slug} className="flex flex-col justify-between">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
                  <FileText size={22} />
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {specialty.name}
                </h3>

                <p className="mt-2 text-sm text-foreground/60">
                  Official programme documents and curriculum.
                </p>
              </div>

              <Link
                href={`/specialties/${specialty.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-brand"
              >
                View Formation Offers
                <ArrowRight size={16} />
              </Link>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}