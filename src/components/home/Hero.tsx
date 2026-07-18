"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Compass } from "lucide-react";
import { useLanguage } from "@/components/layout/LanguageProvider";

const pins = [
  { top: "22%", left: "14%", delay: 0 },
  { top: "62%", left: "8%", delay: 0.4 },
  { top: "34%", left: "82%", delay: 0.8 },
  { top: "70%", left: "78%", delay: 1.2 },
  { top: "48%", left: "48%", delay: 1.6 },
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36">
      {/* Signature background: topographic grid with glowing survey pins, evoking GIS mapping */}
      <div className="topo-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-brand/25 via-emerald-brand/15 to-transparent blur-3xl"
        aria-hidden
      />

      {pins.map((pin, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute hidden sm:block"
          style={{ top: pin.top, left: pin.left }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 1, 1, 0.6], scale: [0.6, 1, 1, 0.9] }}
          transition={{ duration: 3, delay: pin.delay, repeat: Infinity, repeatDelay: 2 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-brand/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-brand" />
          </span>
        </motion.span>
      ))}

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/80 px-4 py-1.5 text-xs font-medium text-foreground/70 shadow-sm"
        >
          <Compass size={13} className="text-gold-brand" />
          {t.heroEyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl"
        >
          {t.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg"
        >
          {t.heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/specialties"
            className="focus-ring group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-brand to-emerald-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-brand/25 transition-transform hover:scale-[1.03]"
          >
            {t.exploreBtn}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-muted"
          >
            <MapPin size={16} />
            {t.learnMore}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
