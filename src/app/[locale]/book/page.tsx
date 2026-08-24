import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";
import { BookingWizard } from "@/components/booking/BookingWizard";
import localFont from "next/font/local";
import { ShieldCheck, Award, HeartHandshake } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

const LoubagMedium = localFont({
  src: "../../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../../public/fonts/Agrandir-Regular.otf",

});

export const metadata: Metadata = {
  title: "Book Your Safari | Ndito Travel Tanzania",
  description:
    "Book your dream Tanzania safari directly with local experts. No credit card required — get a custom quote and personal trip planning.",
  keywords: [
    "Book Tanzania safari",
    "safari inquiry",
    "custom safari booking",
    "Ndito Travel",
  ],
  openGraph: {
    title: "Book Your Safari | Ndito Travel Tanzania",
    description:
      "Book your dream Tanzania safari directly with local experts. Get a custom quote and personal trip planning.",
    url: "https://nditotravel.co.tz/book",
    images: [
      {
        url: "/photos/ndito-travel-cars.webp",
        width: 1200,
        height: 630,
        alt: "Book a safari with Ndito Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Safari | Ndito Travel Tanzania",
    description:
      "Book your dream Tanzania safari directly with local experts.",
    images: ["/photos/ndito-travel-cars.webp"],
  },
  alternates: {
    canonical: "https://nditotravel.co.tz/book",
  },
};

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Custom Safari Booking Service",
          description:
            "Book your dream Tanzania safari directly with local experts. Free consultation, personalized itinerary, no payment required upfront.",
          provider: {
            "@type": "TravelAgency",
            name: "Ndito Travel",
            url: "https://nditotravel.co.tz",
          },
          serviceType: "Tour Booking & Concierge Service",
          areaServed: {
            "@type": "Country",
            name: "Tanzania",
          },
        }}
      />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
            Concierge Booking Service
          </span>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${LoubagMedium.className}`}
          >
            Start Planning Your Dream Safari
          </h1>
          <p
            className={`text-base sm:text-lg text-gray-700 leading-relaxed ${AgrandirRegular.className}`}
          >
            Fill out this 3-step form to receive a personalized itinerary and quote from our local Tanzanian team. <strong>No payment required upfront.</strong>
          </p>

          {/* Quick Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs sm:text-sm text-gray-700 font-semibold">
            <span className="flex items-center gap-1.5 bg-[#f6f2ee] px-3 py-1.5 rounded-full border border-black/5">
              <ShieldCheck size={16} className="text-amber-900" /> 100% Free Consultation
            </span>
            <span className="flex items-center gap-1.5 bg-[#f6f2ee] px-3 py-1.5 rounded-full border border-black/5">
              <Award size={16} className="text-amber-900" /> Licensed Tour Operator
            </span>
            <span className="flex items-center gap-1.5 bg-[#f6f2ee] px-3 py-1.5 rounded-full border border-black/5">
              <HeartHandshake size={16} className="text-amber-900" /> 24-Hour Fast Response
            </span>
          </div>
        </div>

        {/* Wizard Form */}
        <BookingWizard />
      </main>
    </>
  );
}
