"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Layers, Calendar, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import projects from "@/data/projects.json";

const categories = ["All", "Urbanisme", "Gestion des Villes", "Génie Urbain"];

export function ProjectsGallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="pb-24 pt-32">
      <Container>
        <Breadcrumbs items={[{ label: "Student Projects" }]} />
        <div className="mt-8 max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-border-soft bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
            Studio Work
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projects built by <span className="gradient-text">our students</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/60 sm:text-lg">
            A selection of theses, studio exercises and club projects tackling real challenges in
            M&apos;Sila.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-gradient-to-r from-emerald-brand to-blue-brand text-white shadow-md shadow-emerald-brand/20"
                  : "border border-border-soft bg-surface text-foreground/60 hover:bg-surface-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                onClick={() => setActive(p)}
                className="focus-ring group flex flex-col overflow-hidden rounded-2xl border border-border-soft bg-surface text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-brand/10"
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-brand/15 to-blue-brand/15">
                  <div className="topo-grid absolute inset-0 opacity-70" aria-hidden />
                  <Layers className="relative text-emerald-brand/60" size={30} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="w-fit rounded-full bg-emerald-brand/10 px-2.5 py-1 text-xs font-semibold text-emerald-brand">
                    {p.category}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold leading-snug group-hover:text-emerald-brand">{p.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-foreground/55">{p.summary}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-foreground/45">
                    <span className="flex items-center gap-1"><User size={12} /> {p.author}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {p.year}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </Container>

      {/* Preview modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-emerald-brand/10 px-3 py-1 text-xs font-semibold text-emerald-brand">
                  {active.category}
                </span>
                <button onClick={() => setActive(null)} aria-label="Close" className="focus-ring rounded-full p-1 text-foreground/50 hover:text-foreground">
                  <X size={20} />
                </button>
              </div>
              <div className="mt-4 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-brand/15 to-blue-brand/15">
                <Layers className="text-emerald-brand/60" size={34} />
              </div>
              <h2 className="mt-5 text-xl font-semibold">{active.title}</h2>
              <div className="mt-2 flex items-center gap-4 text-xs text-foreground/50">
                <span className="flex items-center gap-1"><User size={12} /> {active.author}</span>
                <span className="flex items-center gap-1"><Calendar size={12} /> {active.year}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/65">{active.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <span key={t} className="rounded-full bg-surface-muted px-2.5 py-1 text-xs text-foreground/60">{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
