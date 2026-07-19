import { MapPin, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationMap() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Location"
          title="Visit the Institute"
          description="Institute of Management and Urban Techniques (IGTU), Mohamed Boudiaf University of M'Sila."
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-border-soft shadow-lg">
          <iframe
            title="IGTU M'Sila"
            src="https://www.google.com/maps?q=Institute+of+Management+and+Urban+Techniques+University+of+M'Sila&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="https://maps.google.com/?q=Institute+of+Management+and+Urban+Techniques+University+of+M'Sila"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-brand px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <MapPin size={18} />
            Open in Google Maps
            <ExternalLink size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}