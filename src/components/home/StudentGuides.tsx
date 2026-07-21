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
    read: null,
    pdf: null,
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
    read: "/guides/mpc/index.html",
    pdf: "/guides/mpc/MPC_Student_Guide.pdf",
  },
];

export function StudentGuides() {
  const { t } = useLanguage();
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-600">
          {t.guides.title}
          </span>

          <h2 className="mt-4 text-4xl font-bold">
          {t.guides.title}
          </h2>

          <p className="mt-3 text-gray-500">
          {t.guides.subtitle}          </p>
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

      </div>
    </section>
  );
}