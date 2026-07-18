import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about IGTU's programs, admission, and student life.",
};

export default function FAQPage() {
  return (
    <div className="pb-24 pt-32">
      <Container>
        <Breadcrumbs items={[{ label: "FAQ" }]} />
        <div className="mt-8 max-w-2xl">
          <span className="mb-3 inline-block rounded-full border border-border-soft bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Have a <span className="gradient-text">question?</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/60">
            Answers to what prospective and current students ask us most.
          </p>
        </div>

        <Reveal className="mt-12 max-w-2xl">
          <Accordion items={siteData.faqGeneral} />
        </Reveal>
      </Container>
    </div>
  );
}
