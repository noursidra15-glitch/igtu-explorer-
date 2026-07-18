import type { Metadata } from "next";
import { Suspense } from "react";
import { ResourcesLibrary } from "@/components/resources/ResourcesLibrary";

export const metadata: Metadata = {
  title: "Resources",
  description: "Lecture notes, TD/TP, past exams, GIS files and AutoCAD drawings for IGTU students.",
};

export default function ResourcesPage() {
  return (
    <Suspense fallback={null}>
      <ResourcesLibrary />
    </Suspense>
  );
}
