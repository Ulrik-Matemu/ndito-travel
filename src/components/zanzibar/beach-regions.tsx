"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Waves, MapPin, ChevronRight, Check } from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const zanzibarRegions = [
  {
    id: "north",
    name: "North Coast (Nungwi & Kendwa)",
    tagline: "Turquoise All-Day Swimming & Sunset Vibes",
    image: "/photos/kendwa-beach-zanzibar-1536x1025.png.webp",
    vibe: "Lively, Resort Luxury, Non-Tidal",
    bestFor: "Beach lovers wanting all-day swimming without low tides, couples & honeymooners.",
    highlights: [
      "No extreme low tides - swim in clear ocean at any time of day",
      "Spectacular golden sunsets over the Indian Ocean",
      "Traditional dhow building villages & sea turtle conservation sanctuary",
      "Pristine powder-white sand beaches lined with boutique resorts",
    ],
    waterConditions: "Calm, warm, crystal clear, low tidal fluctuation.",
  },
  {
    id: "east",
    name: "East Coast (Paje & Jambiani)",
    tagline: "Kitesurfing Lagoon & Bohemian Coastal Charm",
    image: "/photos/Aerial-view-of-Paje-Beach-Zanzibar-Easy-Travel-Tanzania-scaled-2-1536x863.webp",
    vibe: "Boho-Chic, Active Watersports, Relaxed",
    bestFor: "Kitesurfers, backpackers, wellness seekers, and reef walk explorers.",
    highlights: [
      "World-class kitesurfing conditions with consistent trade winds",
      "Shallow turquoise lagoon perfect for low-tide coral reef walking",
      "Traditional Swahili seaweed farms harvested by local women",
      "Laid-back beach cafes, coconut bars, and yoga retreats",
    ],
    waterConditions: "Strong tidal shifts (shallow lagoon at low tide, ideal swimming at high tide).",
  },
  {
    id: "southwest",
    name: "South-West (Stone Town & Fumba)",
    tagline: "UNESCO Heritage & Legendary Spice Markets",
    image: "/photos/new-images/fumba.jpeg",
    vibe: "Historic, Swahili Culture, Culinary",
    bestFor: "Culture enthusiasts, foodies, history buffs, and island hopping boat departures.",
    highlights: [
      "Wander historic coral-rag alleyways and ornate carved Arabian doors",
      "Visit the House of Wonders, Sultan's Palace, and Old Slave Market",
      "Enjoy evening street food at Forodhani Night Gardens (seafood skewers)",
      "Departure point for 'Safari Blue' dhow sailing excursions in Menai Bay",
    ],
    waterConditions: "Historic harbor waters, boat trips out to sandbanks & islands.",
  },
  {
    id: "northeast",
    name: "Northeast Coast (Matemwe & Mnemba)",
    tagline: "Private Luxury & World-Class Coral Reef Diving",
    image: "/photos/new-images/Mnemba-island.webp",
    vibe: "Secluded, Exclusive, Eco-Luxury",
    bestFor: "Scuba divers, marine enthusiasts, high-end privacy seekers.",
    highlights: [
      "Direct boat access to Mnemba Atoll marine reserve",
      "Snorkel alongside wild green sea turtles and bottlenose dolphins",
      "Quiet stretch of powder sand with low tourist foot traffic",
      "Ultra-exclusive boutique beachfront villas and private eco-lodges",
    ],
    waterConditions: "Deep coral drop-offs, high marine biodiversity.",
  },
];

export const ZanzibarBeachRegions = () => {
  const [activeRegionId, setActiveRegionId] = useState<string>("north");
  const activeRegion = zanzibarRegions.find((r) => r.id === activeRegionId) || zanzibarRegions[0];

  return (
    <section className="py-16 md:py-24 bg-[#f6f2ee] rounded-3xl p-6 md:p-12 my-12 border border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Island Explorer
          </span>
          <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
            Zanzibar Beach Regions & Coasts
          </h2>
          <p className={`mt-4 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
            From non-tidal swimming beaches in Nungwi to the kitesurfing lagoons of Paje and historic Stone Town, choose your ideal island atmosphere.
          </p>
        </div>

        {/* Region Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {zanzibarRegions.map((region) => {
            const isActive = region.id === activeRegionId;
            return (
              <button
                key={region.id}
                onClick={() => setActiveRegionId(region.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-xs ${
                  isActive
                    ? "bg-amber-900 text-white shadow-md scale-105"
                    : "bg-[#e8dfd7] text-gray-800 hover:bg-[#dfd5cb] hover:text-black"
                }`}
              >
                <Compass className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-amber-900"}`} />
                {region.name.split(" ")[0]} Coast
              </button>
            );
          })}
        </div>

        {/* Selected Region Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="bg-[#e8dfd7]/90 rounded-3xl border border-black/10 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[460px]">
              <Image
                src={activeRegion.image}
                alt={activeRegion.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-amber-500 text-black font-extrabold text-xs uppercase px-3 py-1 rounded-full mb-2 inline-block">
                  Vibe: {activeRegion.vibe}
                </span>
                <h3 className={`text-2xl md:text-3xl font-bold ${LoubagMedium.className}`}>
                  {activeRegion.name}
                </h3>
                <p className="text-amber-200 text-xs md:text-sm mt-1">{activeRegion.tagline}</p>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="mb-6 p-4 bg-[#f6f2ee] rounded-2xl border border-black/5">
                  <span className="text-xs uppercase font-extrabold text-amber-900 tracking-wider block mb-1">
                    Water & Tides Profile
                  </span>
                  <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <Waves className="w-4 h-4 text-amber-900 shrink-0" />
                    {activeRegion.waterConditions}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-3">
                    Coast Highlights
                  </h4>
                  <ul className="space-y-2.5 text-sm text-gray-800">
                    {activeRegion.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 bg-amber-900/10 rounded-xl border border-amber-900/20 text-xs md:text-sm text-amber-950 font-medium mb-6">
                  <strong>Best For:</strong> {activeRegion.bestFor}
                </div>
              </div>

              <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-600 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-900" />
                  Location: Zanzibar Island, Tanzania
                </span>
                <Link
                  href={`/book?intent=zanzibar&destination=Zanzibar+Beaches`}
                  className="w-full sm:w-auto bg-amber-900 hover:bg-amber-950 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-sm shrink-0"
                >
                  Book {activeRegion.name.split(" ")[0]} Holiday
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
