"use client";

import Link from "next/link";
import { MapPin, ArrowUp } from "lucide-react";
import { InstagramIcon, TelegramIcon } from "@/components/ui/BrandIcons";
import siteData from "@/data/site.json";
import specialties from "@/data/specialties.json";
import { useLanguage } from "./LanguageProvider";

const socialIcons: Record<string, React.ElementType> = {
  Instagram: InstagramIcon,
  Telegram: TelegramIcon,
};

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border-soft bg-surface-muted">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-brand to-emerald-brand text-white ring-2 ring-gold-brand/40">
                <MapPin size={18} />
              </span>
              <span className="font-display text-lg font-semibold">
                IGTU <span className="gradient-text">Explorer</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/60">
               Independent academic platform helping students explore the Institute of
               Management and Urban Techniques (IGTU), Mohamed Boudiaf University – M&apos;Sila.
          </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t.footer.programs}</h3>
            <ul className="mt-4 space-y-2">
              {specialties.map((s) => (
                <li key={s.slug}>
                  <Link href={`/specialties/${s.slug}`} className="focus-ring text-sm text-foreground/60 hover:text-emerald-brand">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t.footer.quickLinks}</h3>
            <ul className="mt-4 space-y-2">
              {siteData.nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="focus-ring text-sm text-foreground/60 hover:text-emerald-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t.footer.follow}</h3>
            <div className="mt-4 flex gap-2">
              {siteData.contact.social.map((s) => {
                const Icon = socialIcons[s.platform] ?? InstagramIcon;
                return (
                  <a
                    key={s.platform}
                    href={s.url}
                    aria-label={s.platform}
                    className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-foreground/60 transition-colors hover:bg-surface hover:text-emerald-brand"
                  >
                    <Icon width={15} height={15} />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 space-y-2">
  <a
    href="https://www.univ-msila.dz/site/gtu-ar/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-lg bg-emerald-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"  >
    Official IGTU Website
  </a>

  <p className="text-xs text-foreground/60">
    Mohamed Boudiaf University – M&apos;Sila
  </p>
</div> 
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border-soft pt-6 sm:flex-row">
          <p className="whitespace-pre-line text-center text-xs leading-relaxed text-foreground/50 sm:text-left">
          © 2026 IGTU Explorer

Independent academic platform for students of the
Institute of Management and Urban Techniques.

Developed by Urban Planner
Hachemi Nour Selsabil
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-border-soft bg-surface px-4 py-2 text-xs font-semibold text-foreground/70 transition-colors hover:bg-surface-muted"
          >
            <ArrowUp size={13} /> {t.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
