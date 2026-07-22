"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";

import {
    GraduationCap,
    Globe,
    Smartphone,
    Search,
  } from "lucide-react";
  
  export function WhyChoose() {
    const { t } = useLanguage();
    
    const items = [
      {
        icon: GraduationCap,
        title: t.whyChoose.officialTitle,
        description: t.whyChoose.officialDesc,
      },
      {
        icon: Search,
        title: t.whyChoose.navigationTitle,
        description: t.whyChoose.navigationDesc,
      },
      {
        icon: Smartphone,
        title: t.whyChoose.mobileTitle,
        description: t.whyChoose.mobileDesc,
      },
      {
        icon: Globe,
        title: t.whyChoose.freeTitle,
        description: t.whyChoose.freeDesc,
      },
    ];

    return (
      <section className="py-20 bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  
          <div className="text-center">
            <span className="text-emerald-brand font-semibold uppercase tracking-wider">
              {t.whyChoose.badge}
            </span>
  
            <h2 className="mt-3 text-4xl font-bold">
              {t.whyChoose.title}
             <span className="gradient-text"> One Place</span>
            </h2>
  
            <p className="mx-auto mt-5 max-w-2xl text-foreground/60">
            {t.whyChoose.subtitle}
            </p>
          </div>
  
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  
            {items.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border-soft bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-brand to-emerald-brand text-white">
                    <Icon size={26} />
                  </div>
  
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
  
                  <p className="mt-3 text-sm leading-6 text-foreground/60">
                    {item.description}
                  </p>
                </div>
              );
            })}
  
          </div>
        </div>
      </section>
    );
  }