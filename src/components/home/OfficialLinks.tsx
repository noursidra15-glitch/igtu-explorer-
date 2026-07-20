import Link from "next/link";
import {
  Globe,
  GraduationCap,
  Send,
  Instagram,
} from "lucide-react";

const links = [
  {
    title: "Official IGTU Website",
    description: "Visit the official institute website.",
    href: "https://www.univ-msila.dz/site/gtu-ar/",
    icon: Globe,
  },
  {
    title: "University of M'Sila",
    description: "Mohamed Boudiaf University.",
    href: "https://www.univ-msila.dz",
    icon: GraduationCap,
  },
  {
    title: "Telegram Channel",
    description: "Latest documents and resources.",
    href: "https://t.me/urban_planner20",
    icon: Send,
  },
  {
    title: "Instagram",
    description: "Follow for updates.",
    href: "https://instagram.com/ns_designer20?utm_source=qr&igsh=YXoxdnl1dDVnc2Zs",
    icon: Instagram,
  },
];

export function OfficialLinks() {
  return (
    <section className="py-20 bg-surface-muted">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Official Links
          </h2>

          <p className="mt-4 text-foreground/60">
            Quick access to important websites and official platforms.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                target="_blank"
                className="rounded-2xl border border-border-soft bg-background p-7 transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-brand to-emerald-brand text-white">
                  <Icon size={26} />
                </div>

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-foreground/60">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}