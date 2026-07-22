"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Info,
  Phone,
} from "lucide-react";



export function QuickAccess() {
  const { t } = useLanguage();
  
  const cards = [
    {
      title: t.quickAccess.specialtiesTitle,
      description: t.quickAccess.specialtiesDesc,
      href: "/specialties",
      icon: GraduationCap,
    },
    {
      title: t.quickAccess.guideTitle,
      description: t.quickAccess.guideDesc,
      href: "/student-guides",
      icon: BookOpen,
    },
    {
      title: t.quickAccess.aboutTitle,
      description: t.quickAccess.aboutDesc,
      href: "/about",
      icon: Info,
    },
    {
      title: t.quickAccess.contactTitle,
      description: t.quickAccess.contactDesc,
      href: "/contact",
      icon: Phone,
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
          {t.quickAccess.title}
          </h2>

          <p className="mt-4 text-foreground/60">
          {t.quickAccess.subtitle}          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-border-soft bg-background p-8 transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-brand to-blue-brand text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm text-foreground/60">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}