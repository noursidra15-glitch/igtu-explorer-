import type { Metadata } from "next";
import { ProjectsGallery } from "@/components/projects/ProjectsGallery";

export const metadata: Metadata = {
  title: "Student Projects",
  description: "A gallery of student theses, studio projects and civic-tech work from IGTU, University of M'Sila.",
};

export default function ProjectsPage() {
  return <ProjectsGallery />;
}
