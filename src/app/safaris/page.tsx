import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";
import SafariHero from "@/components/safaris/hero";
import { TextArea } from "@/components/shared/textArea";
import { TripPackages } from "@/components/home/trip-packages";
import { ShowCase } from "@/components/safaris/showcase";
import { SafariActivities } from "@/components/safaris/safari-activities";
import { SafariTransport } from "@/components/safaris/safari-transport";
import { SafariHospitality } from "@/components/safaris/safari-hospitality";
import { SafariPlanningFAQ } from "@/components/safaris/safari-faq";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Tanzania Safari Packages, 4x4 Fleet & Tours 2025/2026 | Ndito Travel",
  description:
    "Book authentic Tanzania wildlife safaris with Ndito Travel. Serengeti Great Migration, Ngorongoro Big 5 tracking, hot air ballooning, custom 4x4 Land Cruisers & luxury lodges.",
  keywords: [
    "Tanzania safari packages",
    "Serengeti wildlife safari",
    "Ngorongoro Crater tour",
    "Big Five safari Tanzania",
    "Ndito Travel 4x4 Land Cruiser",
    "Hot air balloon safari Serengeti",
    "Ndito Travel",
  ],
  openGraph: {
    title: "Tanzania Safari Packages, 4x4 Fleet & Tours | Ndito Travel",
    description:
      "Book authentic Tanzania wildlife safaris with Ndito Travel. Serengeti Great Migration, Ngorongoro Big 5 tracking, custom 4x4 Land Cruisers & luxury lodges.",
    url: "https://nditotravel.co.tz/safaris",
    images: [
      {
        url: "/photos/new-images/lion-serengeti-3.jpeg",
        width: 1200,
        height: 630,
        alt: "Tanzania wildlife safari with Ndito Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzania Safari Packages, 4x4 Fleet & Tours | Ndito Travel",
    description:
      "Book authentic Tanzania wildlife safaris with Ndito Travel. Custom 4x4 Land Cruisers & native expert guides.",
    images: ["/photos/new-images/lion-serengeti-3.jpeg"],
  },
  alternates: {
    canonical: "https://nditotravel.co.tz/safaris",
  },
};

export default function SafarisPage() {
  const safariFaqs = [
    {
      question: "What wildlife will I see on a Tanzania safari?",
      answer:
        "Tanzania is world-renowned for the Big Five (lion, leopard, elephant, rhino, buffalo). Depending on your itinerary, you will also spot wildebeests, zebras, giraffes, cheetahs, hippos, crocodiles, hyenas, and over 500 bird species.",
    },
    {
      question: "Are Ndito Travel safari Land Cruisers private?",
      answer:
        "Yes! All our custom 4x4 Toyota Land Cruisers are dedicated private vehicles for your group only. You get pop-up roof viewing, on-board refrigerators, Wi-Fi, and unlimited daily game drive mileage.",
    },
    {
      question: "What is included in Ndito Travel safari packages?",
      answer:
        "Our packages include private 4x4 Land Cruiser transport, expert certified naturalist driver-guides, all national park fees, luxury or mid-range lodge accommodations, full board meals, cold bottled water, and airport transfers.",
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
              "@type": "TouristTrip",
              "@id": "https://nditotravel.co.tz/safaris#trip",
              name: "Tanzania Wildlife Safari Experience",
              description:
                "Authentic 4x4 wildlife safari tracking the Big Five across Serengeti National Park, Ngorongoro Crater, and Tarangire with native Tanzanian naturalists.",
              provider: {
                "@type": "TravelAgency",
                name: "Ndito Travel Tanzania",
                url: "https://nditotravel.co.tz",
              },
              offers: {
                "@type": "Offer",
                url: "https://nditotravel.co.tz/safaris",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://nditotravel.co.tz/safaris#faq",
              mainEntity: safariFaqs.map((faq) => ({
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
          photoSrc="/photos/new-images/lion-serengeti-3.jpeg"
          heading="Tanzania Wildlife Safaris"
          subheading="Experience the Big Five & Great Migration with Native Arusha Experts"
        />

        <TextArea
          heading="The Ultimate African Safari Experience"
          content="Tanzania is Africa's undisputed wildlife capital. From the iconic infinite savannahs of Serengeti National Park to the ancient volcanic caldera of Ngorongoro Crater, Tanzania shelters the world's most impressive mammal migrations and highest predator densities. At Ndito Travel, our native Tanzanian team operates private custom 4x4 Land Cruisers equipped with pop-up roofs, on-board fridges, and Wi-Fi, accompanied by expert certified naturalists who bring the African bush to life."
        />

        {/* Interactive Safari Activities Accordion */}
        <SafariActivities />

        {/* Transport & 4x4 Fleet Showcase */}
        <SafariTransport />

        {/* Destinations Showcase */}
        <ShowCase />

        {/* Accommodation & Hospitality Tiers */}
        <SafariHospitality />

        {/* Safari Packing & Planning FAQ */}
        <SafariPlanningFAQ />

        {/* Featured Safari Packages */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-serif">
              Handcrafted Tanzania Safari Packages
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              All tours include private 4x4 Land Cruiser transport, expert driver-guides, park fees, and lodge accommodations.
            </p>
          </div>
          <TripPackages />
        </div>
      </main>
    </>
  );
}