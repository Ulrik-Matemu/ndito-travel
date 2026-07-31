import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/shared/navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { experiencesData } from "@/data/experiences";
import ExperiencesHubClient from "@/components/experiences/ExperiencesHubClient";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

export const metadata: Metadata = {
  title: "Unforgettable Tanzanian Experiences & Safaris | Ndito Travel",
  description:
    "Discover Tanzania's top travel experiences: Big Five game drives, Serengeti hot air balloon safaris, authentic Maasai cultural tours, chimpanzee trekking, and Zanzibar spice tours.",
  keywords: [
    "Tanzania travel experiences",
    "Big Five game drives Tanzania",
    "Serengeti balloon safari",
    "Maasai cultural tour",
    "Chimpanzee trekking Gombe Mahale",
    "Zanzibar spice tour",
    "Ndito Travel experiences",
  ],
  openGraph: {
    title: "Unforgettable Tanzanian Experiences | Ndito Travel",
    description:
      "Explore curated Tanzanian safaris and cultural activities with expert native guides in Arusha.",
    url: "https://nditotravel.co.tz/experiences",
    images: [
      {
        url: "/photos/serengeti-lion.webp",
        width: 1200,
        height: 630,
        alt: "Ndito Travel Tanzanian Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzania Experiences & Activities | Ndito Travel",
    description: "Explore Big Five game drives, balloon safaris, Maasai tours, chimp trekking, and Zanzibar spice tours.",
    images: ["/photos/serengeti-lion.webp"],
  },
  alternates: {
    canonical: "https://nditotravel.co.tz/experiences",
  },
};

export default function ExperiencesHubPage() {
  const experiencesList = Object.values(experiencesData);

  return (
    <>
      {/* Schema.org Structured Data */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ItemList",
              "@id": "https://nditotravel.co.tz/experiences#itemlist",
              name: "Ndito Travel Signature Tanzanian Experiences",
              description: "Top safari, cultural, and adventure experiences in Tanzania.",
              itemListElement: experiencesList.map((exp, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: exp.title,
                url: `https://nditotravel.co.tz/experiences/${exp.slug}`,
              })),
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://nditotravel.co.tz/experiences#breadcrumb",
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
                  name: "Experiences",
                  item: "https://nditotravel.co.tz/experiences",
                },
              ],
            },
          ],
        }}
      />

      <Navbar />

      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-12 ${AgrandirRegular.className}`}>
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className={`text-xs font-bold uppercase tracking-widest text-amber-900 bg-[#f6f2ee] px-4 py-1.5 rounded-full border border-black/10 inline-block ${AgrandirBold.className}`}>
            Curated African Journeys
          </span>
          <h1 className={`text-3xl sm:text-5xl font-bold text-gray-900 tracking-wide ${LoubagMedium.className}`}>
            Signature Tanzanian Experiences
          </h1>

          {/* Decorative Divider matching TextArea standard */}
          <div
            aria-hidden="true"
            className="bg-amber-900/80 h-1 w-20 sm:w-28 mx-auto my-4 rounded-full"
          />

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            From sunrise ballooning over the Serengeti to tracking wild chimpanzees along Lake Tanganyika, immerse yourself in authentic, ethically guided adventures.
          </p>
        </div>

        {/* Client Interactive Filter & Grid */}
        <ExperiencesHubClient experiences={experiencesList} />
      </main>
    </>
  );
}
