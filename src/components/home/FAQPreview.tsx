import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

export function FAQPreview() {
  return (
    <section className="bg-surface-muted py-24">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <Reveal className="mt-12">
          <Accordion items={siteData.faqGeneral.slice(0, 3)} />
        </Reveal>
        <Reveal className="mt-8 text-center">
          <Link
            href="/faq"
            className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-border-soft bg-surface px-5 py-2.5 text-sm font-semibold hover:bg-surface-muted"
          >
            View all FAQs <ArrowRight size={14} />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
