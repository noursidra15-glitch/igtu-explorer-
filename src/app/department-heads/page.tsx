"use client";

import Image from "next/image";
import { Building2, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/layout/LanguageProvider";

const leadership = {
  director: {
    name: "Prof. Ali Rejem",
    role: "Director of IGTU",
    image: "/images/department-heads/director.jpg",
  },
  heads: [
    {
      name: "Dr. Djamel Dahdouh",
      department: "Architecture",
      role: "Head of Architecture Department",
      image: "/images/department-heads/architecture.jpg",
    },
    {
      name: "Dr. Abdelali Dekma",
      department: "Urban Planning",
      role: "Head of Urban Planning Department",
      image: "/images/department-heads/urban-planning.jpg",
    },
    {
      name: "Dr. Chikouche Chawki Ramadan",
      department: "City Management",
      role: "Head of City Management Department",
      image: "/images/department-heads/city-management.jpg",
    },
    {
      name: "Dr. Ismail Belkhir",
      department: "Urban Engineering",
      role: "Head of Urban Engineering Department",
      image: "/images/department-heads/urban-engineering.jpg",
    },
    {
      name: "Dr. Walid Aarab",
      department: "Construction Project Management",
      role: "Head of Construction Project Management Department",
      image: "/images/department-heads/construction-management.jpg",
    },
    {
      name: "Dr. Bachir Fayed",
      department: "GTU Common Core",
      role: "Head of GTU Common Core Department",
      image: "/images/department-heads/common-core.jpg",
    },
  ],
};

export default function DepartmentHeadsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pb-24 pt-28">
      <Container>
        {/* Page header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
              <Building2 size={14} />
              IGTU
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Academic Leadership
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/60">
              Meet the director and department heads of the Institute of
              Management and Urban Techniques at Université Mohamed Boudiaf,
              M&apos;Sila.
            </p>
          </div>
        </Reveal>

        {/* Director */}
        <section className="mt-16">
          <Reveal>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-8 w-1 rounded-full bg-gradient-to-b from-blue-brand to-emerald-brand" />
              <h2 className="text-2xl font-bold tracking-tight">
                Institute Director
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border-soft bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="grid md:grid-cols-[260px_1fr]">
                <div className="relative aspect-square bg-surface-muted md:aspect-auto md:min-h-[280px]">
                  <Image
                    src={leadership.director.image}
                    alt={leadership.director.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 260px"
                  />
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-brand/15 to-emerald-brand/15 text-emerald-brand">
                    <GraduationCap size={22} />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-brand">
                    Director of the Institute
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {leadership.director.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    Director of the Institute of Management and Urban
                    Techniques (IGTU).
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Department heads */}
        <section className="mt-20">
          <Reveal>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-8 w-1 rounded-full bg-gradient-to-b from-blue-brand to-emerald-brand" />
              <h2 className="text-2xl font-bold tracking-tight">
                Department Heads
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.heads.map((head, index) => (
              <Reveal key={head.department} delay={index * 0.05}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border-soft bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface-muted">
                    <Image
                      src={head.image}
                      alt={head.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-brand">
                      {head.department}
                    </p>

                    <h3 className="mt-2 text-lg font-bold">
                      {head.name}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-foreground/60">
                      {head.role}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Source note */}
        <Reveal delay={0.15}>
          <p className="mx-auto mt-14 max-w-2xl text-center text-xs leading-relaxed text-foreground/40">
            Leadership information is presented based on the official
            information published by the Institute of Management and Urban
            Techniques, Université Mohamed Boudiaf, M&apos;Sila.
          </p>
        </Reveal>
      </Container>
    </main>
  );
}