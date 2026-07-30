"use client";

import Image from "next/image";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const urbanHubs = [
  {
    name: "Dar es Salaam",
    role: "Commercial Capital & Ocean Gateway",
    image: "/photos/discover-tanzania/tanzanite-bridge-dar-es-salaam.jpg",
    description:
      "Tanzania's largest metropolis and economic engine. Home to the iconic Tanzanite Bridge, Mawasiliano Tower, bustling harbors, and vibrant Msasani peninsula beach dining.",
    highlights: ["Tanzanite Sea Bridge", "Kivukoni Fish Market", "Kigamboni Peninsula Beaches"],
  },
  {
    name: "Arusha",
    role: "The Safari Capital of East Africa",
    image: "/photos/discover-tanzania/arusha-ariel-view.jpg",
    description:
      "Nestled beneath the majestic peak of Mount Meru, Arusha is the vibrant starting hub for all Northern Circuit safaris and Kilimanjaro expeditions.",
    highlights: ["Mount Meru Views", "Cultural Heritage Centre", "Local Coffee Plantations"],
  },
  {
    name: "Dodoma",
    role: "Political Capital & Vineyard Valley",
    image: "/photos/discover-tanzania/dodoma.jpg",
    description:
      "Located in central Tanzania, Dodoma is the nation's political capital. Uniquely situated in a semi-arid plateau, it is famous for its thriving wine grapes and vineyards.",
    highlights: ["Parliament Buildings", "Dodoma Wine Tasting", "Central Plateau Scenery"],
  },
  {
    name: "Stone Town (Zanzibar City)",
    role: "UNESCO Historic Island Port",
    image: "/photos/historic-building-zanzibar.jpg",
    description:
      "A 19th-century maritime trade hub constructed from coral stone. Famous for brass-studded wooden doors, House of Wonders, and evening seafood gardens.",
    highlights: ["Forodhani Night Market", "House of Wonders", "Sultan's Palace Museum"],
  },
];

export const DiscoverUrbanHubs = () => {
  return (
    <section id="hubs" className="py-16 md:py-24 bg-[#e8dfd7] rounded-3xl p-6 md:p-12 my-12 border border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Urban & Coastal Life
          </span>
          <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
            Tanzania&apos;s Vibrant Cities & Hubs
          </h2>
          <p className={`mt-4 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
            From Dar es Salaam&apos;s ocean skyline to Arusha&apos;s safari pulse and Dodoma&apos;s vineyards, experience modern Tanzanian urban culture.
          </p>
        </div>

        {/* Hub Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {urbanHubs.map((hub, idx) => (
            <div
              key={idx}
              className="bg-[#f6f2ee] rounded-2xl border border-black/5 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={hub.image}
                    alt={hub.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-900/90 backdrop-blur-md text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-full">
                    {hub.role}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 ${LoubagMedium.className}`}>
                    {hub.name}
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed mb-4">{hub.description}</p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-black/5 mt-auto">
                <span className="text-[10px] uppercase font-extrabold text-amber-900 block mb-2">
                  Key Attractions
                </span>
                <ul className="space-y-1 text-xs text-gray-800">
                  {hub.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-900"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
