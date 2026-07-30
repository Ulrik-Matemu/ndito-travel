import type { Metadata } from "next";
import SafariHero from "@/components/safaris/hero";
import { Navbar } from "@/components/shared/navbar";
import { TextArea } from "@/components/shared/textArea";
import { TripPackages } from "@/components/home/trip-packages";
import { KilimanjaroRoutesComparison } from "@/components/kilimanjaro/routes-comparison";
import { ClimateZonesAndSafety } from "@/components/kilimanjaro/climate-zones";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Climb Mount Kilimanjaro Tours & Routes 2025/2026 | Ndito Travel",
  description:
    "Climb Mount Kilimanjaro with Tanzania's native expert guides. Compare Lemosho, Machame, Marangu & Northern Circuit routes. Certified mountain crews, high summit success rates & safety protocols.",
  keywords: [
    "Climb Mount Kilimanjaro",
    "Kilimanjaro routes comparison",
    "Machame route 7 days",
    "Lemosho route success rate",
    "Kilimanjaro trekking cost",
    "Kilimanjaro climb Tanzania",
    "Ndito Travel Kilimanjaro",
  ],
  openGraph: {
    title: "Climb Mount Kilimanjaro Tours & Routes | Ndito Travel",
    description:
      "Climb Mount Kilimanjaro with Tanzania's native expert guides. Compare Lemosho, Machame, Marangu & Northern Circuit routes with medical-grade safety.",
    url: "https://nditotravel.co.tz/kilimanjaro",
    images: [
      {
        url: "/photos/kilimanjaro-hero-nditotravel.webp",
        width: 1200,
        height: 630,
        alt: "Climb Mount Kilimanjaro with Ndito Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Climb Mount Kilimanjaro Tours & Routes | Ndito Travel",
    description:
      "Climb Mount Kilimanjaro with Tanzania's native expert mountain guides. High summit success rates.",
    images: ["/photos/kilimanjaro-hero-nditotravel.webp"],
  },
  alternates: {
    canonical: "https://nditotravel.co.tz/kilimanjaro",
  },
};

export default function KilimanjaroPage() {
  const kilimanjaroFaqs = [
    {
      question: "Which Kilimanjaro route has the highest summit success rate?",
      answer:
        "The Northern Circuit (9 days) and Lemosho Route (8 days) have the highest summit success rates (95% to 98%) because their extended itineraries allow your body to climb high and sleep low for optimal acclimatization.",
    },
    {
      question: "How fit do I need to be to climb Mount Kilimanjaro?",
      answer:
        "You do not need technical mountaineering skills, but a good level of cardiovascular fitness and leg endurance is required. Regular hiking, stair climbing, and cardio training 2-3 months prior to your climb are strongly recommended.",
    },
    {
      question: "When is the best time of year to climb Mount Kilimanjaro?",
      answer:
        "The premier trekking months are during the dry seasons: January through March (warmer, clear skies) and June through October (cool, crisp days).",
    },
    {
      question: "What safety equipment does Ndito Travel carry on the mountain?",
      answer:
        "Every Ndito Travel expedition carries pulse oximeters for twice-daily SpO2 monitoring, bottled medical oxygen, high-altitude first aid kits, and certified Wilderness First Responder (WFR) guides.",
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
              "@id": "https://nditotravel.co.tz/kilimanjaro#destination",
              name: "Mount Kilimanjaro",
              description:
                "Africa's highest peak at 5,895 meters (19,341 feet), featuring 5 distinct ecological climate zones and world-famous trekking routes.",
              url: "https://nditotravel.co.tz/kilimanjaro",
              image: "https://nditotravel.co.tz/photos/kilimanjaro-hero-nditotravel.webp",
              geo: {
                "@type": "GeoCoordinates",
                latitude: -3.0674,
                longitude: 37.3556,
              },
              touristType: ["Hikers", "Mountaineers", "Adventure Travelers"],
            },
            {
              "@type": "FAQPage",
              "@id": "https://nditotravel.co.tz/kilimanjaro#faq",
              mainEntity: kilimanjaroFaqs.map((faq) => ({
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
          photoSrc="/photos/kilimanjaro-hero-nditotravel.webp"
          heading="Kilimanjaro Trekking Expeditions"
          subheading="Conquer Africa's Highest Peak (5,895m) with Native Tanzanian Guides"
        />

        <TextArea
          heading="Conquer the Roof of Africa with Ethical & Safety-First Experts"
          content="Mount Kilimanjaro, soaring to 5,895 meters (19,341 feet), is the world's highest free-standing mountain and one of the Seven Summits. Trekking through rainforests, moorlands, and alpine deserts up to Uhuru Peak's Arctic glaciers is an extraordinary journey. At Ndito Travel, our native Arusha team pairs certified Wilderness First Responder (WFR) guides with medical-grade oxygen monitoring, fair-wage porter care (KPAP compliant), and customized acclimatization profiles for maximum safety and summit success."
        />

        {/* Interactive Routes Comparison */}
        <KilimanjaroRoutesComparison />

        {/* 5 Climate Zones & Safety Standards */}
        <ClimateZonesAndSafety />

        {/* Featured Packages Section */}
        <div className="my-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-serif">
              Featured Kilimanjaro Trekking Packages
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              All expeditions include private transport, certified guide teams, high-altitude gear, and full mountain catering.
            </p>
          </div>
          <TripPackages />
        </div>
      </main>
    </>
  );
}