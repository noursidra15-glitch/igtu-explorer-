"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Languages } from "lucide-react";
import { locales, localeMeta } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Change language"
        onClick={() => setOpen((v) => !v)}
        className="focus-ring flex h-9 items-center gap-1.5 rounded-full border border-border-soft px-3 text-xs font-semibold text-foreground/70 transition-colors hover:bg-surface-muted hover:text-foreground"
      >
        <Languages size={14} />
        {localeMeta[locale].label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="glass absolute right-0 top-full mt-2 min-w-[120px] overflow-hidden rounded-xl border border-border-soft shadow-lg"
          >
            {locales.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-2.5 text-left text-sm hover:bg-surface-muted",
                  l === locale ? "font-semibold text-emerald-brand" : "text-foreground/75"
                )}
              >
                {localeMeta[l].label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
