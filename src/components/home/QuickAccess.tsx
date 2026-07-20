import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Info,
  Phone,
} from "lucide-react";

const cards = [
  {
    title: "Specialties",
    description: "Explore all academic programs.",
    href: "/specialties",
    icon: GraduationCap,
  },
  {
    title: "Student Guide",
    description: "Everything new students need.",
    href: "/student-guide",
    icon: BookOpen,
  },
  {
    title: "About IGTU",
    description: "Learn about the institute.",
    href: "/about",
    icon: Info,
  },
  {
    title: "Contact",
    description: "Reach us easily.",
    href: "/contact",
    icon: Phone,
  },
];

export function QuickAccess() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Quick Access
          </h2>

          <p className="mt-4 text-foreground/60">
            Navigate to the most important sections instantly.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-border-soft bg-background p-8 transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-brand to-blue-brand text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm text-foreground/60">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}