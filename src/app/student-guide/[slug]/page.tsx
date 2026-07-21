interface PageProps {
    params: Promise<{
      slug: string;
    }>;
  }
  
  export default async function StudentGuidePage({ params }: PageProps) {
    const { slug } = await params;
  
    return (
      <main className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-20">
        <div className="rounded-3xl border bg-white p-10 shadow-lg text-center">
          <h1 className="text-4xl font-bold text-emerald-600">
            Student Guide
          </h1>
  
          <p className="mt-4 text-gray-500">
            Guide for specialization
          </p>
  
          <h2 className="mt-2 text-2xl font-semibold">
            {slug}
          </h2>
  
          <p className="mt-6 text-gray-400">
            This guide will be available soon.
          </p>
        </div>
      </main>
    );
  }