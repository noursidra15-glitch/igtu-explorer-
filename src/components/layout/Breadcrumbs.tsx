import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-foreground/50">
      <Link href="/" className="focus-ring flex items-center gap-1 rounded hover:text-emerald-brand">
        <Home size={13} />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={12} />
          {item.href ? (
            <Link href={item.href} className="focus-ring rounded hover:text-emerald-brand">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-foreground/80">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
