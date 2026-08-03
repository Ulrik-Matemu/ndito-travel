import { safariDestinations } from "@/data/destinations";
import { notFound } from "next/navigation";
import Link from "next/link";
import { DestinationImages } from "@/components/shared/destinationImages";
import { DestinationBookingCTA } from "@/components/destinations/DestinationBookingCTA";
import { Navbar } from "@/components/shared/navbar";
import localFont from "next/font/local";
import { TripPackages } from "@/components/home/trip-packages";
import { MapPin, ChevronRight } from "lucide-react";

const AgrandirRegular = localFont({
  src: "../../../../public/fonts/Agrandir-Regular.otf",
});

const LoubagMedium = localFont({
  src: "../../../../public/fonts/Loubag-Medium.ttf",
});

import { JsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  return safariDestinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = safariDestinations.find((d) => d.slug === slug);
  if (!destination) return {};

  const canonicalUrl = `https://nditotravel.co.tz/destinations/${slug}`;

  return {
    title: destination.seo.title,
    description: destination.seo.description,
    keywords: destination.seo.keywords.split(", "),
    openGraph: {
      title: destination.seo.title,
      description: destination.seo.description,
      url: canonicalUrl,
      images: destination.images.map((src) => ({
        url: src,
        width: 1200,
        height: 630,
        alt: destination.name,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: destination.seo.title,
      description: destination.seo.description,
      images: [destination.images[0]],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = safariDestinations.find((d) => d.slug === slug);

  if (!destination) return notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TouristDestination",
              name: destination.name,
              description: destination.shortDescription,
              geo: {
                "@type": "GeoCoordinates",
                latitude: destination.location.lat,
                longitude: destination.location.lng,
              },
              image: destination.images,
              touristType: ["Wildlife enthusiasts", "Adventure travelers", "Nature photographers"],
              containedInPlace: {
                "@type": "Country",
                name: "Tanzania",
              },
            },
            {
              "@type": "BreadcrumbList",
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
                  name: "Safaris",
                  item: "https://nditotravel.co.tz/safaris",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: destination.name,
                  item: `https://nditotravel.co.tz/destinations/${destination.slug}`,
                },
              ],
            },
          ],
        }}
      />
      <Navbar />
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-700">
            <li>
              <Link href="/" className="hover:text-black hover:underline">
                Home
              </Link>
            </li>
            <ChevronRight size={14} className="text-gray-400" />
            <li>
              <Link href="/safaris" className="hover:text-black hover:underline">
                Safaris
              </Link>
            </li>
            <ChevronRight size={14} className="text-gray-400" />
            <li className="font-semibold text-amber-900 truncate" aria-current="page">
              {destination.name}
            </li>
          </ol>
        </nav>

        {/* Heading Header */}
        <header className="mb-8">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 ${LoubagMedium.className}`}
          >
            {destination.name}
          </h1>
          <p
            className={`text-lg sm:text-xl md:text-2xl text-gray-700 font-medium max-w-3xl leading-relaxed ${AgrandirRegular.className}`}
          >
            {destination.shortDescription}
          </p>
        </header>

        {/* Gallery Images */}
        <DestinationImages images={destination.images} name={destination.name} />

        {/* Description Body */}
        <div className="my-10 bg-[#f6f2ee] p-6 sm:p-10 rounded-2xl border border-black/5 shadow-xs">
          <h2
            className={`text-xl sm:text-2xl font-bold text-amber-950 mb-4 ${LoubagMedium.className}`}
          >
            About {destination.name}
          </h2>
          <p
            className={`text-gray-800 leading-relaxed text-base sm:text-lg whitespace-pre-line ${AgrandirRegular.className}`}
          >
            {destination.description.trim()}
          </p>

          <DestinationBookingCTA
            destinationSlug={destination.slug}
            destinationName={destination.name}
          />
        </div>

        {/* Interactive Location Map */}
        <section className="my-10">
          <h2
            className={`text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 ${LoubagMedium.className}`}
          >
            <MapPin size={22} className="text-amber-900" />
            Location & Map
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-md border border-black/5 bg-[#f6f2ee] h-[350px] sm:h-[400px]">
            <iframe
              title={`Google Map location of ${destination.name}`}
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="w-full h-full border-0"
              src={`https://www.google.com/maps?q=${destination.location.lat},${destination.location.lng}&hl=en&z=10&output=embed`}
            />
          </div>
        </section>

        {/* Suggested Trips */}
        <section className="mt-16">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2 ${LoubagMedium.className}`}
          >
            Recommended Safari Packages
          </h2>
          <TripPackages />
        </section>
      </article>
    </>
  );
}
