import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LanguageProvider } from "@/components/layout/LanguageProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { BackToTop } from "@/components/layout/BackToTop";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const siteUrl = "https://igtu-explorer-v2.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "IGTU Explorer — Institute of Management and Urban Techniques",
    template: "%s | IGTU Explorer",
  },

  description:
    "Explore academic programs, student life, admissions, and official information about the Institute of Management and Urban Techniques (IGTU), Mohamed Boudiaf University – M'Sila.",

  keywords: [
    "IGTU",
    "Urban Planning",
    "Urbanisme",
    "Génie Urbain",
    "Gestion des Villes",
    "Architecture",
    "M'Sila",
    "Mohamed Boudiaf University",
    "University of M'Sila",
    "Algeria",
    "Academic Programs",
    "Formation Offers",
    "Students",
  ],

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "IGTU Explorer — Institute of Management and Urban Techniques",

    description:
      "Discover academic programs, formation offers, admissions and student life at IGTU, Mohamed Boudiaf University – M'Sila.",

    url: siteUrl,

    siteName: "IGTU Explorer",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IGTU Explorer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "IGTU Explorer",

    description:
      "Discover academic programs at IGTU - Mohamed Boudiaf University, M'Sila.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",

  name: "Institute of Management and Urban Techniques (IGTU)",

  alternateName: "IGTU M'Sila",

  url: siteUrl,

  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "Mohamed Boudiaf University, M'Sila",
  },

  address: {
    "@type": "PostalAddress",
    addressLocality: "M'Sila",
    addressCountry: "DZ",
  },

  sameAs: [
    "https://www.instagram.com/ns_designer20",
    "https://t.me/Urban_Planner",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0F766E" />

        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Cairo:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className="antialiased">
        <GoogleAnalytics />

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
