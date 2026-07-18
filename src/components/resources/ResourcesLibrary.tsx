"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Download, FileText, Layers, FolderOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import resources from "@/data/resources.json";

const categories = [
  "All", "Books", "Lecture Notes", "TD", "TP", "Exams",
  "GIS Files", "ArcGIS Projects", "QGIS Projects", "AutoCAD Drawings", "Urban Planning Reports",
];

export function ResourcesLibrary() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setQuery(q);
  }, [searchParams]);

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchesCategory = category === "All" || r.category === category;
      const matchesQuery =
        query.trim() === "" ||
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.specialty.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="pb-24 pt-32">
      <Container>
        <Breadcrumbs items={[{ label: "Resources" }]} />
        <div className="mt-8 max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-border-soft bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
            Resource Library
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to <span className="gradient-text">study and build</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/60 sm:text-lg">
            Lecture notes, TD/TP files, past exams, GIS projects and technical drawings — organized
            by category and specialty.
          </p>
        </div>

        {/* Search */}
        <div className="mt-10 flex items-center gap-3 rounded-2xl border border-border-soft bg-surface px-4 py-3">
          <Search size={18} className="text-foreground/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title or specialty…"
            className="focus-ring w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
          />
        </div>

        {/* Category chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`focus-ring rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                category === cat
                  ? "bg-gradient-to-r from-emerald-brand to-blue-brand text-white shadow-sm"
                  : "border border-border-soft bg-surface text-foreground/60 hover:bg-surface-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mt-10">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border-soft py-16 text-center">
              <FolderOpen className="text-foreground/30" size={32} />
              <p className="text-sm text-foreground/50">No resources match your search yet — try a different keyword or category.</p>
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {filtered.map((r, i) => (
                <Reveal key={r.id} delay={(i % 6) * 0.04}>
                  <div className="flex items-center gap-4 rounded-xl border border-border-soft bg-surface p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-brand/15 to-blue-brand/15 text-emerald-brand">
                      {["GIS Files", "ArcGIS Projects", "QGIS Projects"].includes(r.category) ? (
                        <Layers size={18} />
                      ) : (
                        <FileText size={18} />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{r.title}</p>
                      <p className="mt-0.5 text-xs text-foreground/50">
                        {r.category} · {r.specialty} · {r.level} · {r.type} · {r.size}
                      </p>
                    </div>
                    <button
                      aria-label={`Download ${r.title}`}
                      className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-soft text-foreground/60 transition-colors hover:bg-emerald-brand hover:text-white"
                    >
                      <Download size={15} />
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
