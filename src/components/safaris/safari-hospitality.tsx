"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Tent, Compass, Check, ChevronRight } from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const accommodationTiers = [
  {
    id: "luxury",
    name: "Ultra-Luxury Safari Lodges",
    icon: Crown,
    badge: "5-Star Exclusive",
    image: "/photos/The-Manta-Resort-Zanzibar-underwater-room-aerial-2.webp",
    description:
      "Experience world-class luxury amidst untamed wilderness. Stay in lavish permanent lodges and high-end tented suites featuring private infinity plunge pools, personal butler service, fine dining wine pairings, and panoramic crater or savannah views.",
    sampleBrands: "Four Seasons Serengeti, Singita, &Beyond Ngorongoro Crater Lodge, Sanctuary Retreats",
    features: [
      "Private plunge pools & open-air bathtubs overlooking wildlife",
      "Dedicated personal butler & private chef culinary dining",
      "Spa & wellness massage treatments in the bush",
      "Private 4x4 Land Cruiser & dedicated private guide",
    ],
    vibe: "Opulent, Private, Romantic & Uncompromising 5-Star Luxury",
  },
  {
    id: "mid-range",
    name: "Boutique Tented Camps & Lodges",
    icon: Tent,
    badge: "Most Popular Value",
    image: "/photos/new-images/hot-air-baloon-serengeti.jpeg",
    description:
      "The quintessential African safari style. Stay in spacious canvas tented suites equipped with comfortable king beds, wooden flooring, and private ensuite bathrooms with flushing toilets and hot showers, placing you right inside nature's heartbeat.",
    sampleBrands: "Kubu Kubu Tented Lodge, Serengeti Acacia Camps, Ole Serai Luxury Tented Camps",
    features: [
      "Authentic canvas tented suites with king beds & hot showers",
      "Evening campfire 'Bush TV' gathering with starlight drinks",
      "Full board delicious 3-course international & Swahili meals",
      "Located inside or immediately adjacent to national park gates",
    ],
    vibe: "Authentic, Comfortable, Immersive & Great Value",
  },
  {
    id: "adventure",
    name: "Mobile Wilderness Camping",
    icon: Compass,
    badge: "Pure Wilderness",
    image: "/photos/new-images/zebras.png",
    description:
      "For true outdoor enthusiasts wanting an untamed wilderness expedition. Mobile dome tent camps move with the Great Migration, pitched in quiet park campsites under star-filled African skies with full camp cook support.",
    sampleBrands: "Ndito Private Mobile Wilderness Camps",
    features: [
      "Dome tents with comfortable foam mattresses & sleeping bags",
      "Private safari cook preparing fresh hot meals daily",
      "Campfires under untouched star constellations",
      "Deepest connection to raw African sounds at night",
    ],
    vibe: "Adventurous, Authentic, Off-Grid & Close to Nature",
  },
];

export const SafariHospitality = () => {
  const [activeTierId, setActiveTierId] = useState<string>("mid-range");
  const activeTier = accommodationTiers.find((t) => t.id === activeTierId) || accommodationTiers[1];

  return (
    <section className="py-16 md:py-24 bg-[#f6f2ee] rounded-3xl p-6 md:p-12 my-12 border border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            African Hospitality
          </span>
          <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
            Safari Lodges & Accommodation Tiers
          </h2>
          <p className={`mt-4 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
            Whether you dream of opulent 5-star luxury lodges, boutique tented camps under canvas, or mobile wilderness expeditions, Ndito Travel curates hand-picked hospitality.
          </p>
        </div>

        {/* Tier Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {accommodationTiers.map((tier) => {
            const Icon = tier.icon;
            const isActive = tier.id === activeTierId;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTierId(tier.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-xs ${
                  isActive
                    ? "bg-amber-900 text-white shadow-md scale-105"
                    : "bg-[#e8dfd7] text-gray-800 hover:bg-[#dfd5cb] hover:text-black"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-amber-900"}`} />
                {tier.name}
              </button>
            );
          })}
        </div>

        {/* Selected Tier Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="bg-[#e8dfd7]/90 rounded-3xl border border-black/10 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[460px]">
              <Image
                src={activeTier.image}
                alt={activeTier.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-amber-500 text-black font-extrabold text-xs uppercase px-3 py-1 rounded-full mb-2 inline-block">
                  {activeTier.badge}
                </span>
                <h3 className={`text-2xl md:text-3xl font-bold ${LoubagMedium.className}`}>
                  {activeTier.name}
                </h3>
                <p className="text-amber-200 text-xs md:text-sm mt-1">{activeTier.vibe}</p>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <p className={`text-gray-800 text-sm md:text-base leading-relaxed mb-6 ${AgrandirRegular.className}`}>
                  {activeTier.description}
                </p>

                <div className="mb-6 bg-[#f6f2ee] p-4 rounded-2xl border border-black/5">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900 block mb-1">
                    Featured Partner Lodges & Camps
                  </span>
                  <p className="text-xs md:text-sm font-semibold text-gray-900">
                    {activeTier.sampleBrands}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-3">
                    Hospitality & Amenity Highlights
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-800">
                    {activeTier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-600 font-medium">
                  Style: {activeTier.badge}
                </span>
                <Link
                  href="/book"
                  className="w-full sm:w-auto bg-amber-900 hover:bg-amber-950 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-sm shrink-0"
                >
                  Book {activeTier.name.split(" ")[0]} Package
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
