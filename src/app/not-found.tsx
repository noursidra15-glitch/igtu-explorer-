import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-24">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-brand to-blue-brand text-white shadow-lg shadow-emerald-brand/20">
            <Compass size={40} />
          </div>
          <p className="font-display text-6xl font-bold gradient-text">404</p>
          <h1 className="mt-3 text-xl font-semibold">This map doesn&apos;t reach that far</h1>
          <p className="mt-3 text-sm leading-relaxed text-foreground/60">
            The page you&apos;re looking for may have moved, or never existed on this plan.
          </p>
          <Link
            href="/"
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-brand to-blue-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-brand/20"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
