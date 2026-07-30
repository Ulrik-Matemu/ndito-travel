import type { Metadata } from "next";
import SafariHero from "@/components/safaris/hero";
import { Navbar } from "@/components/shared/navbar";
import { TextArea } from "@/components/shared/textArea";
import { TripPackages } from "@/components/home/trip-packages";
// import { DiscoverSubNav } from "@/components/discover-tanzania/sub-nav";
import { DiscoverCircuits } from "@/components/discover-tanzania/circuits-explorer";
import { DiscoverFacts } from "@/components/discover-tanzania/fascinating-facts";
import { DiscoverCulture } from "@/components/discover-tanzania/cultural-heritage";
import { DiscoverUrbanHubs } from "@/components/discover-tanzania/urban-hubs";
import { DiscoverSeasonPlanner } from "@/components/discover-tanzania/season-planner";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Discover Tanzania: Safaris, Culture & Top Attractions | Ndito Travel",
  description:
    "Complete guide to discovering Tanzania: Serengeti Great Migration, Ngorongoro Crater, Mount Kilimanjaro, Zanzibar beaches, 120+ indigenous cultures & urban life.",
  keywords: [
    "Discover Tanzania",
    "Tanzania travel guide",
    "Tanzania safari circuits",
    "Tanzania culture and tribes",
    "Serengeti Great Migration guide",
    "Dar es Salaam attractions",
    "Ndito Travel Tanzania",
  ],
  openGraph: {
    title: "Discover Tanzania: Safaris, Culture & Top Attractions | Ndito Travel",
    description:
      "Complete guide to discovering Tanzania: Serengeti Great Migration, Ngorongoro Crater, Mount Kilimanjaro, Zanzibar beaches & 120+ indigenous cultures.",
    url: "https://nditotravel.co.tz/discover-tanzania",
    images: [
      {
        url: "/photos/discover-tanzania/great-migration.jpg",
        width: 1200,
        height: 630,
        alt: "Discover Tanzania with Ndito Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Tanzania: Safaris, Culture & Top Attractions | Ndito Travel",
    description:
      "Complete guide to discovering Tanzania's 4 safari circuits, Mount Kilimanjaro & Zanzibar.",
    images: ["/photos/discover-tanzania/great-migration.jpg"],
  },
  alternates: {
    canonical: "https://nditotravel.co.tz/discover-tanzania",
  },
};

export default function DiscoverTanzaniaPage() {
  const tanzaniaFaqs = [
    {
      question: "What makes Tanzania the premier safari destination in Africa?",
      answer:
        "Tanzania dedicates over 30% of its land to wildlife protection. It is home to the Great Wildebeest Migration, Ngorongoro Crater (world's largest intact volcanic caldera), Mount Kilimanjaro (Africa's highest peak), and 20+ national parks harboring massive wildlife concentrations.",
    },
    {
      question: "What are the 4 main safari circuits in Tanzania?",
      answer:
        "Tanzania features four distinct safari regions: The Northern Circuit (Serengeti, Ngorongoro, Tarangire, Manyara), The Southern Circuit (Nyerere/Selous & Ruaha), The Western Circuit (Mahale & Gombe chimp trekking), and The Coastal & Islands Circuit (Zanzibar, Pemba, Mafia).",
    },
    {
      question: "Is Tanzania a safe country for international tourists?",
      answer:
        "Yes, Tanzania is recognized as one of East Africa's most peaceful and politically stable nations. With over 120 ethnic groups living in unity through Swahili, Tanzanians are famous for their legendary hospitality ('Karibu Tanzania').",
    },
    {
      question: "What is the official currency and language of Tanzania?",
      answer:
        "The official language is Swahili (with English widely spoken across all tourism hubs). The national currency is the Tanzanian Shilling (TZS), though US Dollars (USD) are widely accepted for tours and hotel bookings.",
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
              "@id": "https://nditotravel.co.tz/discover-tanzania#destination",
              name: "United Republic of Tanzania",
              description:
                "East Africa's premier wildlife, mountain, and ocean paradise, featuring Serengeti National Park, Ngorongoro Crater, Mount Kilimanjaro, and Zanzibar.",
              url: "https://nditotravel.co.tz/discover-tanzania",
              image: "https://nditotravel.co.tz/photos/discover-tanzania/great-migration.jpg",
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.369,
                longitude: 34.8888,
              },
              touristType: ["Safari Travelers", "Hikers", "Culture Enthusiasts", "Honeymooners"],
            },
            {
              "@type": "FAQPage",
              "@id": "https://nditotravel.co.tz/discover-tanzania#faq",
              mainEntity: tanzaniaFaqs.map((faq) => ({
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

      {/* Floating Sub-Navigation */}
      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Section: Overview */}
        <section id="overview" className="scroll-mt-32">
          <SafariHero
            photoSrc="/photos/discover-tanzania/great-migration.jpg"
            heading="Discover Tanzania"
            subheading="Land of Kilimanjaro, Serengeti, Zanzibar & 120+ Peaceful Cultures"
          />

          <TextArea
            heading="The Crown Jewel of East African Wilderness & Heritage"
            content="Tanzania is a country of staggering natural superlatives and timeless beauty. Home to Africa's highest peak (Mount Kilimanjaro at 5,895m), the planet's largest wildlife migration in the Serengeti, the world's largest unbroken volcanic caldera at Ngorongoro, and turquoise Indian Ocean spice islands in Zanzibar. Dedicating over 30% of its landmass to wildlife conservation, Tanzania offers an unparalleled sanctuary where 120+ ethnic groups live in harmonious unity."
          />
        </section>

        {/* Section: 4 Safari Circuits */}
        <section id="circuits" className="scroll-mt-32">
          <DiscoverCircuits />
        </section>

        {/* Section: Fascinating World Firsts */}
        <section id="facts" className="scroll-mt-32">
          <DiscoverFacts />
        </section>

        {/* Section: Living Heritage & Tribes */}
        <section id="culture" className="scroll-mt-32">
          <DiscoverCulture />
        </section>

        {/* Section: Urban & Coastal Cities */}
        <section id="hubs" className="scroll-mt-32">
          <DiscoverUrbanHubs />
        </section>

        {/* Section: Best Time & Season Planner */}
        <section id="seasons" className="scroll-mt-32">
          <DiscoverSeasonPlanner />
        </section>

        {/* Featured Tours CTA */}
        <div className="my-16 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Start Your Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif">
            Ready to Experience Tanzania?
          </h2>
          <p className="text-base text-gray-700 mt-3 mb-8">
            Explore our handcrafted safari, mountain climbing, and Zanzibar beach itineraries tailored by native Arusha experts.
          </p>
          <TripPackages />
        </div>
      </main>
    </>
  );
}