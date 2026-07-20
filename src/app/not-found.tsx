import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-bold text-emerald-600">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-500 max-w-md">
      The page you&apos;re looking for doesn&apos;t exist.      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-emerald-600 px-6 py-3 text-white"
      >
        Back Home
      </Link>
    </main>
  );
}
