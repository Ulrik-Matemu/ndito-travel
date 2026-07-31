"use client";

import Image from "next/image";
import Link from "next/link";
import { Sun, Thermometer, Anchor, ChevronRight } from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const zanzibarExcursions = [
  {
    title: "Mnemba Atoll Snorkeling & Scuba",
    category: "Marine Sanctuary",
    duration: "Half-Day (5 Hours)",
    image: "/photos/mnemba-snorkling.webp",
    description:
      "Plunge into clear turquoise waters surrounding Mnemba Island marine conservation reserve. Swim with wild pods of bottlenose dolphins, green sea turtles, and vibrant tropical reef fish.",
  },
  {
    title: "Organic Spice Farm Tour",
    category: "Sensory & Cultural",
    duration: "3 Hours",
    image: "/photos/new-images/spice-farm.jpg",
    description:
      "Taste, smell, and touch fresh cloves, nutmeg, cinnamon bark, vanilla pods, and lemongrass directly from rural organic plantations that earned Zanzibar its moniker 'The Spice Island'.",
  },
  {
    title: "Stone Town Heritage Walking Tour",
    category: "UNESCO History",
    duration: "3 - 4 Hours",
    image: "/photos/Arab-Fort-Stone-Town-Zanzibar-Tanzania.jpg.webp",
    description:
      "Wander through labyrinthine alleyways lined with 19th-century Arab and Swahili mansions, brass-studded wooden doors, the Old Slave Market site, and bustling Darajani spice markets.",
  },
  {
    title: "Jozani Chwaka Bay National Park",
    category: "Wildlife Sanctuary",
    duration: "3 Hours",
    image: "/photos/new-images/jozani.jpg",
    description:
      "Explore Zanzibar's sole national park, home to the rare and endemic Kirk's Red Colobus monkey found nowhere else on earth, alongside elevated boardwalks through mangrove forests.",
  },
];

export const ZanzibarExcursionsAndWeather = () => {
  return (
    <div className="space-y-16 my-16">
      {/* Excursions Spotlight */}
      <section className="bg-[#e8dfd7] rounded-3xl p-6 md:p-12 border border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Must-Do Island Activities
            </span>
            <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
              Top Zanzibar Excursions & Day Trips
            </h2>
            <p className={`mt-3 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
              Enrich your tropical beach stay with guided heritage tours, marine diving, and organic spice discoveries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {zanzibarExcursions.map((exc, idx) => (
              <div
                key={idx}
                className="bg-[#f6f2ee] rounded-2xl border border-black/5 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={exc.image}
                      alt={exc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-amber-900/90 backdrop-blur-md text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-full">
                      {exc.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-amber-900 font-bold mb-1">{exc.duration}</div>
                    <h3 className={`text-lg font-bold text-gray-900 mb-2 ${LoubagMedium.className}`}>
                      {exc.title}
                    </h3>
                    <p className="text-xs text-gray-700 leading-relaxed">{exc.description}</p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href="/book"
                    className="w-full bg-[#e8dfd7] hover:bg-amber-900 hover:text-white text-gray-900 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-1"
                  >
                    Add to Itinerary
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Seasons & Tides Info */}
      <section className="bg-[#f6f2ee] rounded-3xl p-6 md:p-12 border border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Weather & Tides Guide
            </span>
            <h2 className={`text-3xl md:text-4xl text-gray-900 mb-4 ${LoubagMedium.className}`}>
              When is the Best Time to Visit Zanzibar?
            </h2>
            <p className={`text-gray-700 text-sm md:text-base leading-relaxed ${AgrandirRegular.className}`}>
              Zanzibar enjoys warm tropical weather year-round with ocean water temperatures hovering between 25°C and 29°C (77°F to 84°F).
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 p-3.5 bg-[#e8dfd7] rounded-xl border border-black/5">
                <Sun className="w-5 h-5 text-amber-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">June to October (Long Dry Season)</h4>
                  <p className="text-xs text-gray-700 mt-0.5">
                    Clear blue skies, low humidity, comfortable ocean breeze. Ideal for safaris combined with beach holidays.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#e8dfd7] rounded-xl border border-black/5">
                <Thermometer className="w-5 h-5 text-amber-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">December to February (Warm Summer)</h4>
                  <p className="text-xs text-gray-700 mt-0.5">
                    Hot tropical weather (30°C+), crystal clear ocean visibility, best time for diving with whale sharks and turtles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#e8dfd7] p-6 md:p-8 rounded-2xl border border-black/5">
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="w-5 h-5 text-amber-900" />
              <h3 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                Understanding Zanzibar Tides
              </h3>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed mb-4">
              Zanzibar experiences twice-daily high and low tides (changing every 6 hours). At high tide, the ocean laps against white sands; at low tide, the ocean recedes up to 500 meters, revealing vibrant coral gardens, starfish, and traditional seaweed farms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-800">
              <div className="bg-[#f6f2ee] p-4 rounded-xl border border-black/5">
                <strong className="text-amber-900 block text-sm mb-1">🏖️ Non-Tidal Beaches</strong>
                <p>Nungwi and Kendwa on the northern tip experience minimal tide recession, offering swimming 24 hours a day.</p>
              </div>
              <div className="bg-[#f6f2ee] p-4 rounded-xl border border-black/5">
                <strong className="text-amber-900 block text-sm mb-1">🏄‍♂️ Lagoon & Watersport Beaches</strong>
                <p>Paje and Jambiani on the east coast boast shallow turquoise lagoons ideal for kitesurfing and reef walking at low tide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
