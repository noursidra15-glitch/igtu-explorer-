import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LanguageProvider } from "@/components/layout/LanguageProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { BackToTop } from "@/components/layout/BackToTop";
import { LoadingScreen } from "@/components/layout/LoadingScreen";

const siteUrl = "https://igtu-explorer-v2.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IGTU Explorer — Institute of Management and Urban Techniques",
    template: "%s · IGTU Explorer",
  },
  description:
    "The Institute of Management and Urban Techniques (IGTU) at Mohamed Boudiaf University, M'Sila: academic programs, formation offers, student life and admissions.",
  keywords: [
    "IGTU", "Urban Planning", "Génie Urbain", "Urbanisme", "Gestion des Villes",
    "M'Sila", "Université Mohamed Boudiaf", "Formation Offers", "Programs",
  ],
  openGraph: {
    title: "IGTU Explorer — Institute of Management and Urban Techniques",
    description:
      "Academic programs, formation offers, student life and admissions at IGTU, Mohamed Boudiaf University, M'Sila.",
    url: siteUrl,
    siteName: "IGTU Explorer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IGTU Explorer",
    description: "Discover your future in Urban Planning at IGTU, M'Sila.",
  },
  icons: { icon: "/favicon.ico" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "Institute of Management and Urban Techniques (IGTU)",
  alternateName: "IGTU M'Sila",
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "Mohamed Boudiaf University, M'Sila",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "M'Sila",
    addressCountry: "DZ",
  },
  sameAs: ["https://instagram.com", "https://t.me"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Cairo:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <LoadingScreen />
            <ScrollProgressBar />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
