import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mountain, Clock, TrendingUp, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/shared/navbar";
import SafariHero from "@/components/safaris/hero";
import { TextArea } from "@/components/shared/textArea";
import { ClimateZonesAndSafety } from "@/components/kilimanjaro/climate-zones";
import { TripPackages } from "@/components/home/trip-packages";
import { JsonLd } from "@/components/seo/JsonLd";
import { RouteDetailClient } from "./RouteDetailClient";
import { kilimanjaroRoutes } from "@/data/kilimanjaroRoutes";
import { GroupPricingTable } from "@/components/shared/GroupPricingTable";
import { getKilimanjaroGroupPricing } from "@/lib/pricing";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return kilimanjaroRoutes.map((route) => ({
    slug: route.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const route = kilimanjaroRoutes.find((r) => r.id === resolvedParams.slug);

  if (!route) {
    return {
      title: "Route Not Found",
    };
  }

  return {
    title: `${route.name} Climb & Detailed Itinerary | Ndito Travel`,
    description: `Climb Mount Kilimanjaro via the ${route.name}. Duration: ${route.duration}, Success Rate: ${route.successRate}. ${route.subtitle}. Compare and book with local experts.`,
    keywords: [
      route.name,
      `Kilimanjaro ${route.name}`,
      `${route.name} success rate`,
      `${route.name} itinerary`,
      `${route.name} difficulty`,
      "Climb Kilimanjaro",
    ],
    openGraph: {
      title: `${route.name} Climb & Detailed Itinerary | Ndito Travel`,
      description: `Climb Mount Kilimanjaro via the ${route.name}. Duration: ${route.duration}, Success Rate: ${route.successRate}. ${route.subtitle}.`,
      url: `https://nditotravel.co.tz/climbing-kilimanjaro/${route.id}`,
      images: [
        {
          url: route.heroImage,
          width: 1200,
          height: 630,
          alt: `Climb Mount Kilimanjaro via ${route.name}`,
        },
      ],
    },
    alternates: {
      canonical: `https://nditotravel.co.tz/climbing-kilimanjaro/${route.id}`,
    },
  };
}

export default async function RoutePage({ params }: Props) {
  const resolvedParams = await params;
  const route = kilimanjaroRoutes.find((r) => r.id === resolvedParams.slug);

  if (!route) {
    notFound();
  }

  return (
    <>
      {/* Structured JSON-LD Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TouristTrip",
              "@id": `https://nditotravel.co.tz/climbing-kilimanjaro/${route.id}#trip`,
              name: `${route.name} Kilimanjaro Trek`,
              description: route.description,
              url: `https://nditotravel.co.tz/climbing-kilimanjaro/${route.id}`,
              image: `https://nditotravel.co.tz${route.heroImage}`,
              touristType: ["Hikers", "Mountaineers", "Adventure Travelers"],
              duration: route.duration.includes("9")
                ? "P9D"
                : route.duration.includes("8")
                ? "P8D"
                : route.duration.includes("7")
                ? "P7D"
                : "P6D",
              provider: {
                "@type": "TravelAgency",
                name: "Ndito Travel",
                url: "https://nditotravel.co.tz",
              },
              offers: {
                "@type": "Offer",
                price: route.id.includes("marangu") ? "2100.00" : "2450.00",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: `https://nditotravel.co.tz/climbing-kilimanjaro/${route.id}`,
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `https://nditotravel.co.tz/climbing-kilimanjaro/${route.id}#breadcrumbs`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://nditotravel.co.tz",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Climbing Kilimanjaro",
                  item: "https://nditotravel.co.tz/climbing-kilimanjaro",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: route.name,
                  item: `https://nditotravel.co.tz/climbing-kilimanjaro/${route.id}`,
                },
              ],
            },
          ],
        }}
      />

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        {/* Breadcrumb Navigation UI */}
        <nav className="py-4 text-xs md:text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/climbing-kilimanjaro" className="hover:text-amber-900 transition-colors">
            Climbing Kilimanjaro
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{route.name}</span>
        </nav>

        <SafariHero
          photoSrc={route.heroImage}
          heading={`${route.name} Expedition`}
          subheading={route.subtitle}
        />

        <TextArea
          heading={`Climb Kilimanjaro via the ${route.name}`}
          content={route.description}
        />

        {/* Detailed Route Stats Grid & Action Items */}
        <section className="py-12 bg-white rounded-3xl border border-black/10 shadow-md p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#f6f2ee] rounded-2xl border border-black/5 text-center text-xs">
                <div>
                  <span className="text-gray-500 block font-semibold mb-0.5">Duration</span>
                  <span className="font-bold text-gray-900 text-sm flex items-center justify-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-900" />
                    {route.duration}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block font-semibold mb-0.5">Difficulty</span>
                  <span className="font-bold text-gray-900 text-sm flex items-center justify-center gap-1">
                    <Mountain className="w-3.5 h-3.5 text-amber-900" />
                    {route.difficulty}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block font-semibold mb-0.5">Success Rate</span>
                  <span className="font-bold text-emerald-800 text-sm flex items-center justify-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
                    {route.successRate}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block font-semibold mb-0.5">Scenery</span>
                  <span className="font-bold text-amber-700 text-sm">
                    {route.sceneryRating}
                  </span>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-amber-900 mb-4">
                  Route Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-800">
                  {route.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-amber-900 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For Callout */}
              <div className="p-4 bg-amber-900/10 rounded-2xl border border-amber-900/20 text-sm text-amber-950 font-medium">
                <strong>Ideal For:</strong> {route.bestFor}
              </div>
            </div>

            {/* Right Interactive Actions - Client Managed for Booking State */}
            <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-black/10 pt-6 lg:pt-0 lg:pl-8">
              <RouteDetailClient route={route} />
            </div>
          </div>
        </section>

        {/* Tiered Group Pricing Table */}
        <GroupPricingTable pricing={getKilimanjaroGroupPricing(route)} title={`${route.name} Climb Pricing`} isKili={true} />

        {/* Climate Zones & Safety Standards */}
        <ClimateZonesAndSafety />

        {/* Related Climbing Packages */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-serif">
              Trek Kilimanjaro Packages
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              All expeditions include private transport, certified Wilderness First Responder guide teams, and high-altitude security monitoring.
            </p>
          </div>
          <TripPackages />
        </div>
      </main>
    </>
  );
}
