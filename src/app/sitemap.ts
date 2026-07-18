import type { MetadataRoute } from "next";
import specialties from "@/data/specialties.json";

const siteUrl = "https://igtu-explorer.example.dz";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "", "/about", "/specialties", "/degrees", "/degrees/licence", "/degrees/master",
    "/careers", "/projects", "/resources", "/faq", "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const specialtyRoutes = specialties.map((s) => ({
    url: `${siteUrl}/specialties/${s.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...specialtyRoutes];
}
