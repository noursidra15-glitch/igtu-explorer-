# IGTU Explorer

A premium, production-ready website for the **Institute of Urban Management and Techniques (IGTU)**,
Université Mohamed Boudiaf, M'Sila — introducing its specialties (Urbanisme, Gestion des Villes,
Génie Urbain), degrees, careers, student projects, resources, news and more.

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** for animation
- **Lucide React** for icons
- **next-themes** for dark / light mode
- Content stored in JSON files (`src/data/`) — no database required

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm run start
```

## Project Structure

```
src/
  app/                 # Routes (App Router) — one folder per page
  components/
    layout/            # Navbar, Footer, ScrollProgressBar, BackToTop, LoadingScreen, ThemeToggle
    home/              # Homepage sections (Hero, Stats, Features, etc.)
    ui/                # Reusable primitives (Container, GlassCard, Reveal, Accordion, ...)
    shared/            # Cross-page components (e.g. DegreeDetail template)
    careers/ contact/ projects/ resources/  # Page-specific client components
  data/                # All site content as JSON (specialties, degrees, careers, projects,
                       # resources, news, site-wide data)
  lib/                 # Utilities (cn helper)
public/
  images/              # Static assets
```

## Content Editing

All copy lives in `src/data/*.json` — edit these files to update specialties, degrees, careers,
student projects, resources, news, FAQs, testimonials, stats, and contact details. No code changes
or database migrations required.

## Design System

- **Colors:** Emerald `#16A34A` (primary), Blue `#2563EB` (secondary), White / `#0F172A` (dark)
  backgrounds, emerald↔blue gradients for accents.
- **Type:** Poppins for headings/display, Inter for body text (loaded via Google Fonts `<link>`
  tags in `src/app/layout.tsx` — no build-time network dependency).
- **Signature motif:** a topographic survey-grid pattern with animated GIS-style pins in the hero,
  tying the visual language back to urban planning and cartography.

## Notes

- Dark mode is class-based (`next-themes`, toggled via the navbar button) and persists per visitor.
- The homepage hero, animated counters, and scroll reveals respect `prefers-reduced-motion`.
- Contact form, resource search, project filters, and career flip-cards are fully client-side —
  wire them up to a real backend/API when ready.
