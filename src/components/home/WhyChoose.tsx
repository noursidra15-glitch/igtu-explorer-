import {
    GraduationCap,
    Globe,
    Smartphone,
    Search,
  } from "lucide-react";
  
  export function WhyChoose() {
    const items = [
      {
        icon: GraduationCap,
        title: "Official Information",
        description:
          "Access organized information about IGTU programs and academic pathways.",
      },
      {
        icon: Search,
        title: "Easy Navigation",
        description:
          "Find specialties, resources and important pages quickly.",
      },
      {
        icon: Smartphone,
        title: "Mobile Friendly",
        description:
          "Designed to work perfectly on phones, tablets and computers.",
      },
      {
        icon: Globe,
        title: "Free Access",
        description:
          "Available anytime with no registration required.",
      },
    ];
  
    return (
      <section className="py-20 bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  
          <div className="text-center">
            <span className="text-emerald-brand font-semibold uppercase tracking-wider">
              Why IGTU Explorer
            </span>
  
            <h2 className="mt-3 text-4xl font-bold">
              Everything You Need in
              <span className="gradient-text"> One Place</span>
            </h2>
  
            <p className="mx-auto mt-5 max-w-2xl text-foreground/60">
              IGTU Explorer helps students discover programs, academic
              information and useful resources through a fast and modern
              experience.
            </p>
          </div>
  
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  
            {items.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border-soft bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-brand to-emerald-brand text-white">
                    <Icon size={26} />
                  </div>
  
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
  
                  <p className="mt-3 text-sm leading-6 text-foreground/60">
                    {item.description}
                  </p>
                </div>
              );
            })}
  
          </div>
        </div>
      </section>
    );
  }