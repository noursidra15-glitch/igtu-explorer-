import type { Metadata } from "next";
import { DegreeDetail } from "@/components/shared/DegreeDetail";
import degrees from "@/data/degrees.json";

export const metadata: Metadata = {
  title: "Licence",
  description: "Licence in Urban Sciences at IGTU — admission, curriculum, objectives and career paths.",
};

export default function LicencePage() {
  return <DegreeDetail degree={degrees.licence} label="Licence" />;
}
