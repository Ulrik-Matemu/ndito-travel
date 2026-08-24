import { safariDestinations } from "@/data/destinations";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { DestinationImages } from "@/components/shared/destinationImages";
import { DestinationBookingCTA } from "@/components/destinations/DestinationBookingCTA";
import { DestinationFAQ } from "@/components/destinations/DestinationFAQ";
import { Navbar } from "@/components/shared/navbar";
import localFont from "next/font/local";
import { TripPackages } from "@/components/home/trip-packages";
import { MapPin, ChevronRight, Calendar, Clock, Compass, Sparkles } from "lucide-react";

const AgrandirRegular = localFont({
  src: "../../../../../public/fonts/Agrandir-Regular.otf",
});

const LoubagMedium = localFont({
  src: "../../../../../public/fonts/Loubag-Medium.ttf",

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

// Formats a lat/lng pair the way a field journal or chart would note coordinates.
function formatCoordinate(lat: number, lng: number) {
  const latDir = lat >= 0 ? "N" : "S";
  const lngDir = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(4)}°${latDir}  ${Math.abs(lng).toFixed(4)}°${lngDir}`;
}

export const dynamic = 'force-dynamic';

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = safariDestinations.find((d) => d.slug === slug);

  if (!destination) return notFound();

  const [featuredImage] = destination.images;
  const hasQuickFacts =
    destination.bestTimeToVisit ||
    destination.typicalDuration ||
    destination.gettingThere ||
    (destination.highlights && destination.highlights.length > 0);

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
                  item: "https://nditotravel.co.tz/tanzania-safaris",
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

      {/* ============ HERO ============ */}
      {/* Backdrop hero: featured photo behind the title, with the destination's
          coordinates rendered oversized/low-opacity as the page's signature
          element — a wayfinding motif that echoes the homepage's lettermark
          treatment and doubles as a visual anchor pointing at the Location
          section further down the page. */}
      <header className="relative w-full h-[62vh] min-h-[440px] max-h-[720px] overflow-hidden">
        {featuredImage && (
          <Image
            src={featuredImage}
            alt={`${destination.name} scenic view`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        )}
        {/* Gradient so text stays legible over any photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

        {/* Signature: oversized coordinate mark, low opacity, upper-right */}
        <div
          aria-hidden="true"
          className={`hidden md:block absolute top-8 right-6 lg:right-10 text-white/20 text-right leading-none select-none pointer-events-none ${LoubagMedium.className}`}
        >
          <div className="text-[13px] tracking-[0.25em] uppercase mb-1">Coordinates</div>
          <div className="text-3xl lg:text-4xl tracking-tight">
            {formatCoordinate(destination.location.lat, destination.location.lng)}
          </div>
        </div>

        <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10 sm:pb-14">
          {/* Breadcrumb Navigation — light variant over photo */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6 bg-[#e7dfd8] md:w-1/4">
            <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              <ChevronRight size={14} className="text-black" />
              <li>
                <Link href="/tanzania-safaris" className="hover:text-white hover:underline">
                  Safaris
                </Link>
              </li>
              <ChevronRight size={14} className="text-black" />
              <li className="font-semibold text-amber-300 truncate" aria-current="page">
                {destination.name}
              </li>
            </ol>
          </nav>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-4 drop-shadow-sm ${LoubagMedium.className}`}
          >
            {destination.name}
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl text-white/90 font-medium max-w-2xl leading-relaxed ${AgrandirRegular.className}`}
          >
            {destination.shortDescription}
          </p>
        </div>
      </header>

      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* ============ TRIP SPEC STRIP ============ */}
        {/* Reads like an itinerary stub rather than a grid of interchangeable
            cards — a single horizontal strip with hairline dividers between
            fields keeps four data points feeling like one instrument. */}
        {hasQuickFacts && (
          <div className="-mt-8 sm:-mt-10 relative z-10 mb-12">
            <div className="bg-white rounded-2xl border border-black/5 shadow-md divide-y sm:divide-y-0 sm:divide-x divide-black/8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {destination.bestTimeToVisit && (
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-1.5 text-amber-900/70 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    <Calendar size={13} />
                    <span>Best Time to Visit</span>
                  </div>
                  <p className="text-gray-900 text-sm font-medium leading-snug">
                    {destination.bestTimeToVisit}
                  </p>
                </div>
              )}
              {destination.typicalDuration && (
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-1.5 text-amber-900/70 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    <Clock size={13} />
                    <span>Recommended Stay</span>
                  </div>
                  <p className="text-gray-900 text-sm font-medium leading-snug">
                    {destination.typicalDuration}
                  </p>
                </div>
              )}
              {destination.gettingThere && (
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-1.5 text-amber-900/70 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    <Compass size={13} />
                    <span>Getting There</span>
                  </div>
                  <p className="text-gray-900 text-sm font-medium leading-snug">
                    {destination.gettingThere}
                  </p>
                </div>
              )}
              {destination.highlights && destination.highlights.length > 0 && (
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-1.5 text-amber-900/70 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    <Sparkles size={13} />
                    <span>Key Highlights</span>
                  </div>
                  <p className="text-gray-900 text-sm font-medium leading-snug">
                    {destination.highlights.join(" · ")}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ============ GALLERY ============ */}
        {/* Featured image now lives in the hero, so we pass only the
            remaining shots and tell the gallery to lay all of them out in
            the grid (hideFeatured) rather than pulling one out again as a
            second "featured" image — avoids showing the same photo twice. */}
        {destination.images.length > 1 && (
          <DestinationImages
            images={destination.images.slice(1)}
            name={destination.name}
            hideFeatured
          />
        )}

        {/* ============ ABOUT ============ */}
        <div className="my-10 sm:my-14">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-5 ${LoubagMedium.className}`}
          >
            About {destination.name}
          </h2>
          <p
            className={`text-gray-800 leading-relaxed text-base sm:text-lg whitespace-pre-line max-w-3xl ${AgrandirRegular.className}`}
          >
            {destination.description.trim()}
          </p>

          {/* First CTA — quiet, inline prompt rather than a boxed card, so it
              doesn't compete with the second CTA's higher-contrast moment. */}
         
        </div>

        {/* ============ MAP ============ */}
        <section className="my-10 sm:my-14">
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

        {/* ============ FAQ ============ */}
        <DestinationFAQ faqs={destination.faqs} headingFont={LoubagMedium.className} />

        {/* ============ FINAL CTA ============ */}
        {/* The one bold, high-contrast moment on the page — deliberately the
            only place amber-950 fills an entire section, so it reads as the
            page's single decisive ask rather than one card among many. */}
        <section className="my-10 sm:my-14 relative overflow-hidden bg-amber-950 rounded-2xl p-8 sm:p-12 text-center">
          <div
            aria-hidden="true"
            className={`absolute -bottom-6 -right-4 text-white/[0.06] text-[10rem] sm:text-[14rem] font-bold leading-none select-none pointer-events-none ${LoubagMedium.className}`}
          >
            {destination.name.split(" ")[0]}
          </div>
          <div className="relative">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 ${LoubagMedium.className}`}
            >
              Ready to see {destination.name} for yourself?
            </h2>
            <p
              className={`text-amber-100/90 text-base sm:text-lg mb-7 max-w-xl mx-auto ${AgrandirRegular.className}`}
            >
              Tell us your dates and we&apos;ll send a free, no-obligation quote within 24 hours.
            </p>
            <DestinationBookingCTA
              destinationSlug={destination.slug}
              destinationName={destination.name}
            />
          </div>
        </section>

        {/* ============ TRIP PACKAGES ============ */}
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