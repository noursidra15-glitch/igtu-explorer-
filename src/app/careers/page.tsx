import type { Metadata } from "next";
import { CareersGrid } from "@/components/careers/CareersGrid";

export const metadata: Metadata = {
  title: "Careers",
  description: "Career opportunities for IGTU graduates: Urban Planner, GIS Analyst, Urban Designer, City Manager and more.",
};

export default function CareersPage() {
  return <CareersGrid />;
}
