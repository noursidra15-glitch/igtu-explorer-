import { Hero } from "@/components/home/Hero";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { SpecialtiesPreview } from "@/components/home/SpecialtiesPreview";
import { Stats } from "@/components/home/Stats";
import { FAQPreview } from "@/components/home/FAQPreview";
import { CTASection } from "@/components/home/CTASection";
import { LocationMap } from "@/components/home/LocationMap";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <SpecialtiesPreview />
      <Stats />
      <FAQPreview />
      <CTASection />
      <LocationMap />
    </>
  );
}
