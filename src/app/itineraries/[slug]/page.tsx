import { notFound } from "next/navigation";
import Link from "next/link";
import { safariPackages } from "@/data/safariTrips";
import { Navbar } from "@/components/shared/navbar";
import SafariHero from "@/components/safaris/hero";
import ItineraryTimeline from "@/components/shared/itineraryTimeline";
import { Button } from "@/components/shared/button";
import localFont from "next/font/local";
import { ChevronRight, CheckCircle2, XCircle, ShieldCheck } from "lucide-react";

const AgrandirRegular = localFont({
  src: "../../../../public/fonts/Agrandir-Regular.otf",
});

const LoubagMedium = localFont({
  src: "../../../../public/fonts/Loubag-Medium.ttf",
});

import { JsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  return safariPackages.map((safari) => ({
    slug: safari.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const safari = safariPackages.find((s) => s.slug === slug);
  if (!safari) return {};

  const title = `${safari.title} (${safari.duration}) | Ndito Travel`;
  const description = `Book ${safari.title} in Tanzania. ${safari.duration} safari package featuring ${safari.scenery} scenery and expert local guides.`;
  const canonicalUrl = `https://nditotravel.co.tz/itineraries/${slug}`;

  return {
    title,
    description,
    keywords: [safari.title, "Tanzania safari package", safari.duration, "Ndito Travel"],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: safari.images.map((src) => ({
        url: src,
        width: 1200,
        height: 630,
        alt: safari.title,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [safari.images[0]],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function SafariPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const safari = safariPackages.find((s) => s.slug === slug);

  if (!safari) return notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TouristTrip",
              name: safari.title,
              description: `${safari.title} — ${safari.duration} safari package in Tanzania`,
              touristType: ["Wildlife enthusiasts", "Adventure travelers"],
              provider: {
                "@type": "TravelAgency",
                name: "Ndito Travel",
                url: "https://nditotravel.co.tz",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: `https://nditotravel.co.tz/itineraries/${safari.slug}`,
              },
              image: safari.images,
              itinerary: {
                "@type": "ItemList",
                itemListElement: safari.days.map((day, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: day.title,
                  description: day.description,
                })),
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
                  name: "Itineraries",
                  item: "https://nditotravel.co.tz/itineraries",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: safari.title,
                  item: `https://nditotravel.co.tz/itineraries/${safari.slug}`,
                },
              ],
            },
          ],
        }}
      />
      <Navbar />
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-700">
            <li>
              <Link href="/" className="hover:text-black hover:underline">
                Home
              </Link>
            </li>
            <ChevronRight size={14} className="text-gray-400" />
            <li>
              <Link href="/itineraries" className="hover:text-black hover:underline">
                Itineraries
              </Link>
            </li>
            <ChevronRight size={14} className="text-gray-400" />
            <li className="font-semibold text-amber-900 truncate" aria-current="page">
              {safari.title}
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <SafariHero
          photoSrc={safari.images[0] || safari.images[1]}
          heading={safari.title}
          subheading={safari.duration}
        />

        {/* Package Highlights Grid */}
        <section className="my-8 bg-[#f6f2ee] p-6 rounded-2xl border border-black/5 shadow-xs">
          <h2 className={`text-xs uppercase font-bold tracking-widest text-amber-900 mb-4 ${AgrandirRegular.className}`}>
            Trip Overview & Info
          </h2>
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm ${AgrandirRegular.className}`}
          >
            <div className="bg-white/80 p-3.5 rounded-xl border border-black/5">
              <span className="text-xs text-gray-500 block mb-0.5">Duration</span>
              <span className="font-bold text-gray-900">{safari.duration}</span>
            </div>
            <div className="bg-white/80 p-3.5 rounded-xl border border-black/5">
              <span className="text-xs text-gray-500 block mb-0.5">Difficulty</span>
              <span className="font-bold text-gray-900">{safari.difficulty}</span>
            </div>
            <div className="bg-white/80 p-3.5 rounded-xl border border-black/5">
              <span className="text-xs text-gray-500 block mb-0.5">Scenery</span>
              <span className="font-bold text-gray-900">{safari.scenery}</span>
            </div>
            <div className="bg-white/80 p-3.5 rounded-xl border border-black/5">
              <span className="text-xs text-gray-500 block mb-0.5">Traffic</span>
              <span className="font-bold text-gray-900">{safari.traffic}</span>
            </div>
          </div>
        </section>

        {/* Day-by-Day Timeline */}
        <section className="my-12">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-2 ${LoubagMedium.className}`}
          >
            Detailed Itinerary
          </h2>
          <ItineraryTimeline days={safari.days} />
        </section>

        {/* What's Included / Excluded */}
        <section className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-50/60 p-6 sm:p-8 rounded-2xl border border-emerald-200/60 shadow-xs">
            <h3 className="text-xl font-bold text-emerald-950 mb-4 flex items-center gap-2">
              <CheckCircle2 size={22} className="text-emerald-700" />
              Included in Safari
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-800">
              {safari.included.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold select-none">&check;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-rose-50/60 p-6 sm:p-8 rounded-2xl border border-rose-200/60 shadow-xs">
            <h3 className="text-xl font-bold text-rose-950 mb-4 flex items-center gap-2">
              <XCircle size={22} className="text-rose-700" />
              Excluded from Safari
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-800">
              {safari.excluded.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-700 font-bold select-none">&times;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Booking CTA Bar */}
        <div className="my-12 bg-amber-950 text-white p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck size={18} />
              Book Directly With Local Tanzanian Experts
            </div>
            <h3 className={`text-2xl sm:text-3xl font-bold text-white mb-2 ${LoubagMedium.className}`}>
              Ready for the {safari.title}?
            </h3>
            <p className="text-sm text-amber-100/90 max-w-xl">
              Get an instant quote and request custom dates online or chat directly with our team on WhatsApp.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Button
              href={`/book?package=${safari.slug}`}
              ariaLabel={`Book ${safari.title} online`}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-center shadow-lg"
            >
              BOOK THIS SAFARI &rarr;
            </Button>
            <a
              href={`https://wa.me/255658883554?text=${encodeURIComponent(`Hi Ndito Travel! I am interested in booking the "${safari.title}" (${safari.duration}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-200 hover:text-white underline font-semibold py-2 px-3 focus-visible:outline-none"
            >
              Or chat on WhatsApp
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
