import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-28">
      <h1 className="text-4xl font-bold mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-gray-600 leading-8">

        <p>
          IGTU Explorer respects your privacy.
        </p>

        <p>
          We use Google Analytics to understand how visitors use our website.
        </p>

        <p>
          No personal information is sold or shared with third parties.
        </p>

        <p>
          Cookies may be used to improve your browsing experience.
        </p>

        <p>
          This website provides educational information about the Institute of
          Management and Urban Techniques (IGTU), University of M&apos;Sila.
        </p>

      </div>
    </main>
  );
}