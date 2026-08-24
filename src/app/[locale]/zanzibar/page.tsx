import type { Metadata } from "next";
import SafariHero from "@/components/safaris/hero";
import { Navbar } from "@/components/shared/navbar";
import { TextArea } from "@/components/shared/textArea";
import { TripPackages } from "@/components/home/trip-packages";
import { ZanzibarBeachRegions } from "@/components/zanzibar/beach-regions";
import { ZanzibarExcursionsAndWeather } from "@/components/zanzibar/top-excursions";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Zanzibar Beach Holidays, Stone Town & Island Tours | Ndito Travel",
  description:
    "Discover Zanzibar's pristine white-sand beaches, Nungwi non-tidal swimming, UNESCO Stone Town spice tours & Mnemba Atoll scuba diving with Ndito Travel.",
  keywords: [
    "Zanzibar beach holidays",
    "Nungwi beach resorts",
    "Kendwa beach swimming",
    "Stone Town tours",
    "Mnemba Atoll snorkeling",
    "Paje kitesurfing",
    "Ndito Travel Zanzibar",
  ],
  openGraph: {
    title: "Zanzibar Beach Holidays & Tours | Ndito Travel",
    description:
      "Relax on Zanzibar's pristine white-sand beaches, explore historic Stone Town spice markets, and dive at Mnemba Atoll.",
    url: "https://nditotravel.co.tz/zanzibar",
    images: [
      {
        url: "/photos/zanzibar-beach-nditotravel-zanzibar.webp",
        width: 1200,
        height: 630,
        alt: "Zanzibar tropical beach holiday with Ndito Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zanzibar Beach Holidays & Tours | Ndito Travel",
    description:
      "Relax on Zanzibar's pristine white-sand beaches, explore Stone Town and dive Mnemba coral reefs.",
    images: ["/photos/zanzibar-beach-nditotravel-zanzibar.webp"],
  },
  alternates: {
    canonical: "https://nditotravel.co.tz/zanzibar",
  },
};

export default function ZanzibarPage() {
  const zanzibarFaqs = [
    {
      question: "Which side of Zanzibar has the best swimming beaches?",
      answer:
        "The northern tip of Zanzibar (Nungwi and Kendwa) is famous for all-day swimming because it experiences minimal tide changes, allowing you to swim in calm turquoise waters at any time of day.",
    },
    {
      question: "Can I combine a Tanzania Wildlife Safari with a Zanzibar Beach Holiday?",
      answer:
        "Yes! Bush-to-beach combination trips are our most popular itineraries. You can spend 4-7 days on safari in Serengeti and Ngorongoro, then take a quick 1-hour flight directly to Zanzibar for relaxation.",
    },
    {
      question: "What is Stone Town famous for?",
      answer:
        "Stone Town is a UNESCO World Heritage site known for its historic coral-stone architecture, ornate carved Arabian doors, spice markets, Sultan palaces, and rich Swahili coastal history.",
    },
    {
      question: "When is the best time for scuba diving and snorkeling in Zanzibar?",
      answer:
        "Diving is superb year-round, but December through February offers exceptionally clear water visibility (20m–30m+) at Mnemba Atoll and chances to spot green sea turtles and dolphins.",
    },
  ];

  return (
    <>
      {/* Structured JSON-LD Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TouristDestination",
              "@id": "https://nditotravel.co.tz/zanzibar#destination",
              name: "Zanzibar Archipelago",
              description:
                "Tanzania's tropical island paradise renowned for powder white-sand beaches, UNESCO Stone Town heritage, organic spice plantations, and coral reef diving.",
              url: "https://nditotravel.co.tz/zanzibar",
              image: "https://nditotravel.co.tz/photos/zanzibar-beach-nditotravel-zanzibar.webp",
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.1659,
                longitude: 39.2026,
              },
              touristType: ["Beachgoers", "Honeymooners", "Divers", "Cultural Travelers"],
            },
            {
              "@type": "FAQPage",
              "@id": "https://nditotravel.co.tz/zanzibar#faq",
              mainEntity: zanzibarFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ],
        }}
      />

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <SafariHero
          photoSrc="/photos/zanzibar-beach-nditotravel-zanzibar.webp"
          heading="Zanzibar Tropical Island Holidays"
          subheading="Unwind on Powder-White Sands, Explore Stone Town & Dive Coral Reefs"
        />

        <TextArea
          heading="Zanzibar: The Jewel of the Indian Ocean"
          content="Zanzibar is a mesmerizing tropical archipelago off the coast of Tanzania. Legendary for its turquoise lagoons, aromatic spice plantations, and rich Swahili trade heritage, Zanzibar is the perfect destination to unwind—either after an exhilarating Serengeti wildlife safari or as a standalone island getaway. Explore non-tidal swimming beaches in Nungwi, kitesurfing lagoons in Paje, UNESCO history in Stone Town, and marine conservation sanctuaries at Mnemba Atoll."
        />

        {/* Interactive Beach Regions Guide */}
        <ZanzibarBeachRegions />

        {/* Top Excursions Spotlight & Weather Tides Guide */}
        <ZanzibarExcursionsAndWeather />

        {/* Featured Packages Section */}
        <div className="my-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-serif">
              Featured Zanzibar & Bush-to-Beach Packages
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Tailored island getaways, luxury beach resort bookings, and seamless safari-to-beach transitions.
            </p>
          </div>
          <TripPackages />
        </div>
      </main>
    </>
  );
}