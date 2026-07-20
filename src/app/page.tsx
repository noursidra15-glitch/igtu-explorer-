import { Hero } from "@/components/home/Hero";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { SpecialtiesPreview } from "@/components/home/SpecialtiesPreview";
import { Stats } from "@/components/home/Stats";
import { FAQPreview } from "@/components/home/FAQPreview";
import { CTASection } from "@/components/home/CTASection";
import { LocationMap } from "@/components/home/LocationMap";
import { WhyChoose } from "@/components/home/WhyChoose";
import { QuickAccess } from "@/components/home/QuickAccess";
import { OfficialLinks } from "@/components/home/OfficialLinks";

export default function HomePage() {
  return (
    <>
      <Hero />

      <WhyChoose />

      <QuickAccess />

      <AboutTeaser />

      <SpecialtiesPreview />

      <Stats />

      <OfficialLinks />

      <FAQPreview />

      <CTASection />

      <LocationMap />
    </>
  );
}