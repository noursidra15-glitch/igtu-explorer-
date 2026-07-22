"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Building,
  HardHat,
  Landmark,
  Map,
} from "lucide-react";
import { useLanguage } from "@/components/layout/LanguageProvider";

const guides = [
  {
    title: "Urban Planning",
    description: "Coming Soon",
    icon: Map,
    read: "/guides/Urban Planning/urbanisme_guide_igtu_2025_2026_reference_style(1).html",
    pdf: "/guides/Urban Planning/urbanisme_guide_igtu_2025_2026_reference_style(1).pdf",
  },
  {
    title: "Architecture",
    description: "Coming Soon",
    icon: Building2,
    read: null,
    pdf: null,
  },
  {
    title: "Urban Engineering",
    description: "Coming Soon",
    icon: Landmark,
    read: null,
    pdf: null,
  },
  {
    title: "City Management",
    description: "Coming Soon",
    icon: Building,
    read: null,
    pdf: null,
  },
  {
    title: "Construction Project Management",
    description: "First Official Guide Available",
    icon: HardHat,
    read: "/guides/MPC/mpc_student_guide_2026_2027_printable.html",
    pdf: "/guides/MPC/mpc_student_guide_2026_2027_printable.html.pdf",
  },
];

export function StudentGuides() {
  const { t } = useLanguage();
  return (
    <section className="py-24">
      <div className="mb-12 text-center">

      <div className="mx-auto mt-10 max-w-xl">
        <input
          type="text"
          placeholder="🔍 Search a guide..."
          className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-4 text-lg shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
        />
      </div>
      
        <h2 className="text-4xl font-bold">
          Available Guides
        </h2>

         <p className="mt-3 text-gray-500">
          Choose your specialization to access the official student guide.
        </p>

      </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => {
            const Icon = guide.icon;

            return (
              <div
                key={guide.title}
                className="rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {guide.title}
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  {guide.description}
                </p>

                {guide.read ? (
  <div className="mt-8 flex flex-col gap-3">
    <Link
      href={guide.read}
      target="_blank"
      className="rounded-xl bg-emerald-600 px-4 py-3 text-center font-semibold text-white hover:bg-emerald-700"
    >
      📖 Read Guide
    </Link>

    <Link
      href={guide.pdf!}
      target="_blank"
      className="rounded-xl border border-emerald-600 px-4 py-3 text-center font-semibold text-emerald-600 hover:bg-emerald-50"
    >
      ⬇ Download PDF
    </Link>
  </div>
) : (
  <div className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-600">
    Coming Soon
    <ArrowRight size={18} />
  </div>
)}
              </div>
            );
          })}
        </div>

      
    </section>
  );
}