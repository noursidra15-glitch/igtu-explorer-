import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { InstagramIcon, TelegramIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import siteData from "@/data/site.json";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with IGTU, Mohamed Boudiaf University, M'Sila — via Instagram, Telegram or our interactive map.",
};

const socialIcons: Record<string, React.ElementType> = { Instagram: InstagramIcon, Telegram: TelegramIcon };

export default function ContactPage() {
  return (
    <div className="pb-24 pt-32">
      <Container>
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <div className="mt-8 max-w-2xl">
          <span className="mb-3 inline-block rounded-full border border-border-soft bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
            Get in Touch
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s <span className="gradient-text">talk</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/60">
            Questions about admission, programs, or partnerships? Reach out through Instagram or
            Telegram, or send a message below.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="space-y-5 lg:col-span-2">
            <div className="rounded-2xl border border-border-soft bg-surface p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="text-xs text-foreground/50">Address</p>
                  <p className="text-sm font-medium">{siteData.contact.address}</p>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                {siteData.contact.social.map((s) => {
                  const Icon = socialIcons[s.platform] ?? InstagramIcon;
                  return (
                    <a
                      key={s.platform}
                      href={s.url}
                      className="focus-ring flex items-center gap-2 rounded-full border border-border-soft px-4 py-2 text-xs font-semibold text-foreground/70 transition-colors hover:bg-surface-muted hover:text-emerald-brand"
                    >
                      <Icon width={14} height={14} /> {s.platform}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Interactive Google Map embed — no API key required for basic query embed */}
            <div className="relative h-64 overflow-hidden rounded-2xl border border-border-soft">
              <iframe
                title="IGTU location — Université Mohamed Boudiaf, M'Sila"
                src={`https://www.google.com/maps?q=${siteData.contact.mapEmbedQuery}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
