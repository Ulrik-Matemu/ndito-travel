import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/shared/navbar";
import { safariPackages } from "@/data/safariTrips";
import localFont from "next/font/local";
import { Clock, Calendar } from "lucide-react";

const LoubagMedium = localFont({
  src: "../../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../../public/fonts/Agrandir-Regular.otf",

});

export const metadata: Metadata = {
  title: "Tanzania Safari Itineraries & Tour Packages | Ndito Travel",
  description:
    "Browse our hand-crafted Tanzania safari itineraries. From short Ngorongoro crater excursions to multi-day Serengeti balloon adventures.",
  keywords: [
    "Tanzania safari itineraries",
    "safari packages",
    "Serengeti tour packages",
    "Ndito Travel",
  ],
  openGraph: {
    title: "Tanzania Safari Itineraries & Tour Packages | Ndito Travel",
    description:
      "Browse our hand-crafted Tanzania safari itineraries. From short Ngorongoro crater excursions to multi-day Serengeti balloon adventures.",
    url: "https://nditotravel.co.tz/itineraries",
    images: [
      {
        url: "/photos/safari-package.webp",
        width: 1200,
        height: 630,
        alt: "Tanzania safari itineraries with Ndito Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzania Safari Itineraries & Tour Packages | Ndito Travel",
    description:
      "Browse our hand-crafted Tanzania safari itineraries.",
    images: ["/photos/safari-package.webp"],
  },
  alternates: {
    canonical: "https://nditotravel.co.tz/itineraries",
  },
};

export default function ItinerariesList() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
            Tailored Experiences
          </span>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${LoubagMedium.className}`}
          >
            Featured Safari Itineraries
          </h1>
          <p
            className={`text-base sm:text-lg text-gray-700 leading-relaxed ${AgrandirRegular.className}`}
          >
            Explore our curated selection of Tanzanian safari packages. Each itinerary can be completely customized to suit your budget, travel dates, and preferences.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safariPackages.map((safari) => (
            <article
              key={safari.id}
              className="bg-[#f6f2ee] rounded-2xl overflow-hidden border border-black/5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Cover Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={safari.images[0]}
                  alt={safari.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold bg-amber-900/80 px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1">
                    <Clock size={12} /> {safari.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2
                    className={`text-xl font-bold text-gray-900 group-hover:text-amber-900 transition-colors mb-2 ${LoubagMedium.className}`}
                  >
                    {safari.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-700 mb-4">
                    <span className="bg-white/80 border border-black/5 px-2 py-0.5 rounded-md">
                      <strong>Difficulty:</strong> {safari.difficulty}
                    </span>
                    <span className="bg-white/80 border border-black/5 px-2 py-0.5 rounded-md">
                      <strong>Scenery:</strong> {safari.scenery}
                    </span>
                  </div>
                  <p className={`text-xs text-gray-600 line-clamp-3 mb-6 ${AgrandirRegular.className}`}>
                    {safari.days[0]?.description}
                  </p>
                </div>

                <Link
                  href={`/itineraries/${safari.slug}`}
                  className="inline-flex items-center justify-center w-full bg-[#231f20] hover:bg-black text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
                  aria-label={`View detailed itinerary for ${safari.title}`}
                >
                  <Calendar size={16} className="mr-2" />
                  View Full Itinerary &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
