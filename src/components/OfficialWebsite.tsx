import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink } from "lucide-react";

export function OfficialWebsite() {
  return (
    <GlassCard className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">
          Official Institute Website
        </h3>

        <p className="mt-2 text-sm text-foreground/60">
          Visit the official website of the Institute of Urban Techniques
          Management at Mohamed Boudiaf University of M&apos;Sila.
        </p>
      </div>

      <a
        href="https://www.univ-msila.dz/site/gtu-ar/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-emerald-brand px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
      >
        Official Website
        <ExternalLink size={16} />
      </a>
    </GlassCard>
  );
}