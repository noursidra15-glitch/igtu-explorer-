import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-28">
      <h1 className="text-4xl font-bold mb-8">
        Terms of Use
      </h1>

      <div className="space-y-6 text-gray-600 leading-8">

        <p>
          The content published on IGTU Explorer is provided for educational and
          informational purposes only.
        </p>

        <p>
          Official documents remain the property of the Institute of Management
          and Urban Techniques.
        </p>

        <p>
          Users are encouraged to verify important information through the
          official university website.
        </p>

      </div>
    </main>
  );
}