import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "glass rounded-2xl border border-border-soft p-6 shadow-sm shadow-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-brand/[0.08]",
        className
      )}
    >
      {children}
    </div>
  );
}
