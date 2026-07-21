import { StudentGuides } from "@/components/home/StudentGuides";
import { BookOpen, GraduationCap } from "lucide-react";

export default function StudentGuidesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-600 to-blue-700 py-28 text-white">

        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur">
            <GraduationCap size={42} />
          </div>

          <h1 className="mt-8 text-5xl font-bold">
            Student Guides
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Browse official interactive student guides, downloadable PDFs,
            academic roadmaps, registration procedures, internship information,
            and everything you need during your studies at IGTU.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">

            <div className="rounded-full bg-white/20 px-5 py-2">
              📚 Official Guides
            </div>

            <div className="rounded-full bg-white/20 px-5 py-2">
              🌍 Interactive HTML
            </div>

            <div className="rounded-full bg-white/20 px-5 py-2">
              📄 PDF Download
            </div>

          </div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">

        <StudentGuides />

      </section>
    </>
  );
}