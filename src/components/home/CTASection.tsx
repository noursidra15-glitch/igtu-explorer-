import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-brand to-blue-brand px-8 py-16 text-center sm:px-16">
            <div className="topo-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />
            <h2 className="relative text-3xl font-bold text-white sm:text-4xl">
              Ready to shape the cities of tomorrow?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm text-white/85 sm:text-base">
              Browse our degree programs, meet the specialties, and see the projects our students
              are already building for M&apos;Sila.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/degrees"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-brand shadow-lg transition-transform hover:scale-[1.03]"
              >
                View Degree Programs <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact the Institute
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
