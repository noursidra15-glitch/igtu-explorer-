import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export default function StudentGuidePage() {
  return (
    <div className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Student Guide"
          title="Your Guide to Studying at IGTU"
          description="Everything you need to know before choosing your specialty."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <GlassCard>
            <h3 className="text-lg font-semibold">
              How to Choose Your Specialty
            </h3>
            <p className="mt-3 text-sm text-foreground/60">
              Learn the differences between the available programs and choose
              the one that matches your interests and career goals.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-semibold">
              Licence, Master & Engineering
            </h3>
            <p className="mt-3 text-sm text-foreground/60">
              Understand the academic pathways and the degrees offered by the
              institute.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-semibold">
              Formation Offers
            </h3>
            <p className="mt-3 text-sm text-foreground/60">
              Access official formation offers for every specialty from one
              place.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-semibold">
              Useful Links
            </h3>
            <p className="mt-3 text-sm text-foreground/60">
              Official website, Google Maps, Telegram and Instagram.
            </p>
          </GlassCard>
        </div>
      </Container>
    </div>
  );
}