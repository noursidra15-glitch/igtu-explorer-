interface PageProps {
    params: Promise<{
      slug: string;
    }>;
  }
  
  export default async function StudentGuidePage({ params }: PageProps) {
    const { slug } = await params;
  
    return (
      <main className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6">
        <div className="rounded-3xl border p-10 text-center shadow-sm">
          <h1 className="text-4xl font-bold">Student Guide</h1>
  
          <p className="mt-4 text-gray-500">
            Guide for:
          </p>
  
          <p className="mt-2 text-xl font-semibold text-emerald-600">
            {slug}
          </p>
  
          <p className="mt-6 text-gray-400">
            This page is under development.
          </p>
        </div>
      </main>
    );
  }