"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, MapPin, Building2, Landmark, HardHat } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";
import siteData from "@/data/site.json";
import specialties from "@/data/specialties.json";
import { cn } from "@/lib/utils";

const specialtyIcons: Record<string, React.ElementType> = { Building2, Landmark, HardHat };

// Maps a nav href to its i18n key in dictionary.nav, since site.json labels stay English-only.
const navKeyByHref: const navKeyByHref: Record<
string,
"home" | "about" | "programs" | "formationOffers" | "studentGuides" | "faq" | "contact"
> = {
  "/": "home",
  "/about": "about",
  "/student-guides": "studentGuides",
  "/specialties": "programs",
  "/resources": "formationOffers",
  "/faq": "faq",
  "/contact": "contact",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/resources?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery("");
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-sm shadow-black/[0.03]" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-2 rounded-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-brand to-emerald-brand text-white ring-2 ring-gold-brand/40">
            <MapPin size={18} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            IGTU <span className="gradient-text">Explorer</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
        {[
           ...siteData.nav,
            { href: "/student-guides", label: "Student Guides" },
          ].map((item) => {
            const isPrograms = item.href === "/specialties";
            const isActive = pathname === item.href;
            const label = t.nav[navKeyByHref[item.href] ?? "home"];
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => isPrograms && setMegaOpen(true)}
                onMouseLeave={() => isPrograms && setMegaOpen(false)}
              >
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "focus-ring relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-emerald-brand" : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-blue-brand to-emerald-brand"
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {isPrograms && megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="glass absolute left-1/2 top-full mt-2 w-[560px] -translate-x-1/2 rounded-2xl p-4 shadow-xl"
                    >
                      <div className="grid grid-cols-3 gap-3">
                        {specialties.map((s) => {
                          const Icon = specialtyIcons[s.icon] ?? Building2;
                          return (
                            <Link
                              key={s.slug}
                              href={`/specialties/${s.slug}`}
                              className="focus-ring group rounded-xl p-3 transition-colors hover:bg-surface-muted"
                            >
                              <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-brand/15 to-emerald-brand/15 text-emerald-brand">
                                <Icon size={17} />
                              </span>
                              <p className="text-sm font-semibold">{s.name}</p>
                              <p className="mt-1 text-xs text-foreground/60">{s.tagline}</p>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            aria-label={t.search}
            onClick={() => setSearchOpen((v) => !v)}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-foreground/70 transition-colors hover:bg-surface-muted hover:text-foreground"
          >
            <Search size={16} />
          </button>
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href="/specialties"
            className="focus-ring rounded-full bg-gradient-to-r from-blue-brand to-emerald-brand px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-brand/20 transition-transform hover:scale-[1.03]"
          >
            {t.exploreBtn}
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border-soft"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Search bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass overflow-hidden border-t"
          >
            <form onSubmit={handleSearch} className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
              <Search size={16} className="text-foreground/50" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search resources — e.g. GIS, PDAU, exams…"
                className="focus-ring w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
              />
              <button type="submit" className="text-sm font-medium text-emerald-brand">
                {t.search}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass overflow-hidden border-t lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
            {[
                ...siteData.nav,
               { href: "/student-guides", label: "Student Guides" },
            ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "focus-ring rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-surface-muted",
                    pathname === item.href ? "text-emerald-brand" : "text-foreground/80"
                  )}
                >
                  {t.nav[navKeyByHref[item.href] ?? "home"]}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
