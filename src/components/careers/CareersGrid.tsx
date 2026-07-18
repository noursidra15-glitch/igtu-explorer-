"use client";

import { useState } from "react";
import {
  Map, MapPinned, PenTool, Landmark, Briefcase, HardHat, Handshake, ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import careers from "@/data/careers.json";

const icons: Record<string, React.ElementType> = {
  Map, MapPinned, PenTool, Landmark, Briefcase, HardHat, Handshake,
};

export function CareersGrid() {
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <div className="pb-24 pt-32">
      <Container>
        <Breadcrumbs items={[{ label: "Careers" }]} />
        <div className="mt-8 max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-border-soft bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
            Career Opportunities
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Where an <span className="gradient-text">IGTU degree</span> can take you
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/60 sm:text-lg">
            Tap a card to see the core skills employers look for in each role.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: "1200px" }}>
          {careers.map((c, i) => {
            const Icon = icons[c.icon] ?? Briefcase;
            const isFlipped = flipped === c.title;
            return (
              <Reveal key={c.title} delay={(i % 4) * 0.08}>
                <button
                  type="button"
                  onClick={() => setFlipped(isFlipped ? null : c.title)}
                  className="focus-ring group h-56 w-full text-left"
                  style={{ perspective: "1200px" }}
                  aria-pressed={isFlipped}
                >
                  <div
                    className="relative h-full w-full transition-transform duration-500"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 flex flex-col rounded-2xl border border-border-soft bg-surface p-6"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-brand to-blue-brand text-white">
                        <Icon size={19} />
                      </span>
                      <h3 className="text-base font-semibold">{c.title}</h3>
                      <p className="mt-1 text-xs font-medium text-foreground/45">{c.sector}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/60">{c.description}</p>
                      <span className="mt-2 text-xs font-medium text-emerald-brand">Tap for skills →</span>
                    </div>

                    {/* Back */}
                    <div
                      className="absolute inset-0 flex flex-col justify-center rounded-2xl bg-gradient-to-br from-emerald-brand to-blue-brand p-6 text-white"
                      style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">Key Skills</h3>
                      <ul className="mt-3 space-y-2">
                        {c.skills.map((sk) => (
                          <li key={sk} className="flex items-center gap-2 text-sm">
                            <ArrowRight size={13} /> {sk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
