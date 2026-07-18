import type { Metadata } from "next";
import { DegreeDetail } from "@/components/shared/DegreeDetail";
import degrees from "@/data/degrees.json";

export const metadata: Metadata = {
  title: "Master",
  description: "Master in Urban Management & Techniques at IGTU — admission, curriculum, objectives and career paths.",
};

export default function MasterPage() {
  return <DegreeDetail degree={degrees.master} label="Master" />;
}
