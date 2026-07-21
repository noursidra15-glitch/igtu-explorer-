"use client";

import Link from "next/link";
import {
  Globe,
  GraduationCap,
  BookOpen,
  Building2,
  Send,
  HardHat,
  ArrowRight,
} from "lucide-react";

const platforms = [
  {
    title: "Moodle",
    description:
      "Access your online courses and learning materials.",
    href: "https://moodle.univ-msila.dz/moodle/course/index.php?categoryid=5#",
    icon: GraduationCap,
    button: "Open Moodle",
  },
  {
    title: "DSpace",
    description:
      "Browse dissertations, theses and research papers.",
    href: "https://depot.univ-msila.dz/communities/76e008b5-e22b-4ebb-9469-3a7a4aecc17a/search",
    icon: BookOpen,
    button: "Open Repository",
  },
  {
    title: "DWS",
    description:
      "Student portal for grades, registration and academic services.",
    href: "https://num.univ-msila.dz/DWE/public/login",
    icon: Building2,
    button: "Open DWS",
  },
  {
    title: "Official IGTU Website",
    description:
      "Visit the official Institute website.",
    href: "https://www.univ-msila.dz/site/gtu-ar/",
    icon: Globe,
    button: "Visit Website",
  },
  {
    title: "Telegram Channel",
    description:
      "Join our Telegram channel for academic updates and useful resources.",
    href: "https://t.me/urban_planner20",
    icon: Send,
    button: "Join Telegram",
  },
];

export function UsefulPlatforms() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-600">
            Student Services
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Useful Platforms
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-foreground/60">
            Access the most important academic platforms and student services
            from one place.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <div
                key={platform.title}
                className="group rounded-3xl border border-border-soft bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-brand hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-brand to-emerald-brand text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {platform.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-foreground/60">
                  {platform.description}
                </p>

                <Link
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-brand transition group-hover:gap-3"
                >
                  {platform.button}
                  <ArrowRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}