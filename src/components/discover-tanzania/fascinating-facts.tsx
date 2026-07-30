"use client";

import { Sparkles, Gem, Globe, Flame, Droplets, HeartHandshake } from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const tanzaniaFacts = [
  {
    icon: Sparkles,
    badge: "World's Largest Wildlife Spectacle",
    title: "The Great Wildebeest Migration",
    fact: "Over 1.5 million wildebeest, 250,000 zebras, and 300,000 gazelles migrate in an endless circular loop between Serengeti and Mara. It is the largest overland mammal movement on planet Earth, so massive it can be seen from space.",
  },
  {
    icon: Gem,
    badge: "1,000x Rarer Than Diamonds",
    title: "Tanzanite Gemstone Exclusivity",
    fact: "Tanzanite is a mesmerizing blue-violet gemstone found in only ONE single place on planet earth: a tiny 4km strip of land at Merelani near Mount Kilimanjaro. Geologists estimate it will be completely exhausted within one generation.",
  },
  {
    icon: Globe,
    badge: "The Cradle of Humankind",
    title: "Olduvai Gorge 1.8M Year Fossils",
    fact: "Located inside the Ngorongoro Conservation Area, Olduvai Gorge is where archaeologists Louis and Mary Leakey discovered 1.8-million-year-old hominid fossils (Paranthropus boisei), unlocking the origins of early human evolution.",
  },
  {
    icon: Flame,
    badge: "World's Only Cold Black Lava Volcano",
    title: "Oldoinyo Lengai: The Mountain of God",
    fact: "Sacred to the Maasai people, Oldoinyo Lengai erupts natrocarbonatite lava at 510°C (half the temperature of normal basalt lava). Its lava flows out dark black or dark brown during the day and glows faintly dark red at night.",
  },
  {
    icon: Droplets,
    badge: "18% of World's Unfrozen Fresh Water",
    title: "Lake Tanganyika Depth & Length",
    fact: "Stretching 673km, Lake Tanganyika is the longest freshwater lake in the world and the 2nd deepest (1,470m). It holds almost one-fifth of the entire planet's surface fresh water and is home to over 250 endemic cichlid fish species.",
  },
  {
    icon: HeartHandshake,
    badge: "120+ Ethnic Groups in Harmony",
    title: "Unbroken Peace & Swahili Unity",
    fact: "Unlike many nations, Tanzania is home to over 120 distinct ethnic tribes living in 100% peaceful harmony. Unified by founding father Mwalimu Julius Nyerere through the Swahili language, Tanzania is East Africa's beacon of stability.",
  },
];

export const DiscoverFacts = () => {
  return (
    <section id="facts" className="py-16 md:py-24 bg-[#e8dfd7] rounded-3xl p-6 md:p-12 my-12 border border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Did You Know?
          </span>
          <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
            6 Fascinating World-Firsts & Facts About Tanzania
          </h2>
          <p className={`mt-4 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
            Tanzania is a land of extraordinary global superlatives. Bookmark these astonishing facts before your visit.
          </p>
        </div>

        {/* Fact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tanzaniaFacts.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#f6f2ee] p-6 md:p-8 rounded-2xl border border-black/5 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-amber-900 text-white rounded-2xl flex items-center justify-center shadow-xs group-hover:bg-amber-950 transition-colors">
                      <Icon className="w-6 h-6 text-amber-300" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-amber-900/10 text-amber-950 px-2.5 py-1 rounded-full border border-amber-900/20">
                      Fact #{idx + 1}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-1">
                    {item.badge}
                  </span>
                  <h3 className={`text-xl font-bold text-gray-900 mb-3 ${LoubagMedium.className}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs md:text-sm text-gray-700 leading-relaxed ${AgrandirRegular.className}`}>
                    {item.fact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
