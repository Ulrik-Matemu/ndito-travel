import { MetadataRoute } from "next";
import { safariDestinations } from "@/data/destinations";
import { safariPackages } from "@/data/safariTrips";
import { articles } from "@/data/articles";
import { experiencesData } from "@/data/experiences";
import { kilimanjaroRoutes } from "@/data/kilimanjaroRoutes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nditotravel.co.tz";

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/tanzania-safaris`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/find-your-trip`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/experiences`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/climbing-kilimanjaro`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/zanzibar`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/discover-tanzania`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/itineraries`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/articles`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/book`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/ngorongoro-crater`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 }
  ];

  // Dynamic destination pages
  const destinationRoutes: MetadataRoute.Sitemap = safariDestinations.map((dest) => ({
    url: `${baseUrl}/destinations/${dest.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic experience pages
  const experienceRoutes: MetadataRoute.Sitemap = Object.keys(experiencesData).map((slug) => ({
    url: `${baseUrl}/experiences/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic itinerary pages
  const itineraryRoutes: MetadataRoute.Sitemap = safariPackages.map((safari) => ({
    url: `${baseUrl}/itineraries/${safari.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic article pages
  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic Kilimanjaro route pages
  const kilimanjaroRoutesMapped: MetadataRoute.Sitemap = kilimanjaroRoutes.map((route) => ({
    url: `${baseUrl}/climbing-kilimanjaro/${route.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...destinationRoutes,
    ...experienceRoutes,
    ...itineraryRoutes,
    ...articleRoutes,
    ...kilimanjaroRoutesMapped,
  ];
}
