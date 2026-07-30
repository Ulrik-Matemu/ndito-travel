"use client";

import { useState } from "react";
import { ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const tanzaniaSeasons = [
  {
    period: "January - March",
    seasonName: "Calving Season & Warm Summer",
    climate: "Dry & Warm (25°C - 30°C)",
    migrationStatus: "Southern Serengeti & Ndutu Plains (800,000 wildebeest calves born in 3 weeks!)",
    highlights: [
      "Predator action in Ndutu (lions, cheetahs, hyenas hunting calves)",
      "Warm dry months ideal for Mount Kilimanjaro climbing",
      "Crystal clear water visibility in Zanzibar for scuba diving",
    ],
  },
  {
    period: "April - May",
    seasonName: "Green Season (Long Rains)",
    climate: "Tropical Rain Showers & Lush Greenery",
    migrationStatus: "Central Serengeti moving towards Western Corridor (Grumeti River)",
    highlights: [
      "Lowest crowd density & luxury lodge green-season discounts",
      "Lush green landscapes & phenomenal birdwatching (migratory birds)",
      "Photographer's paradise with dramatic cloudscapes",
    ],
  },
  {
    period: "June - October",
    seasonName: "Peak Dry Season (River Crossings)",
    climate: "Crisp, Sunny & Cool Nights (20°C - 26°C)",
    migrationStatus: "Northern Serengeti & Mara River Crossings (Dramatic river leaps with crocodiles!)",
    highlights: [
      "World-famous Mara River crossings in Northern Serengeti",
      "Prime game viewing around watering holes in Tarangire & Ruaha",
      "Optimal weather for Kilimanjaro treks and Zanzibar beaches",
    ],
  },
  {
    period: "November - December",
    seasonName: "Short Rains & Migration Return",
    climate: "Short Afternoon Showers & Pleasant Heat",
    migrationStatus: "Herds trek south through Eastern Serengeti back to Ndutu",
    highlights: [
      "Fresh greening of savannah plains",
      "Excellent holiday safari season (Christmas & New Year getaways)",
      "Great balance of game viewing and beach weather",
    ],
  },
];

export const DiscoverSeasonPlanner = () => {
  const [selectedSeasonIdx, setSelectedSeasonIdx] = useState<number>(0);
  const activeSeason = tanzaniaSeasons[selectedSeasonIdx];

  return (
    <section id="seasons" className="py-16 md:py-24 bg-[#f6f2ee] rounded-3xl p-6 md:p-12 my-12 border border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Trip Planner
          </span>
          <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
            Best Time to Visit Tanzania
          </h2>
          <p className={`mt-4 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
            Tanzania is a year-round wildlife paradise. Choose your travel month below to see where the Great Migration herd is located and what to expect.
          </p>
        </div>

        {/* Season Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {tanzaniaSeasons.map((season, idx) => {
            const isActive = idx === selectedSeasonIdx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedSeasonIdx(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isActive
                    ? "bg-amber-900 text-white border-amber-900 shadow-md scale-102"
                    : "bg-[#e8dfd7] text-gray-800 border-black/5 hover:bg-amber-100"
                }`}
              >
                <span className={`text-xs font-mono font-bold block mb-1 ${isActive ? "text-amber-300" : "text-amber-900"}`}>
                  {season.period}
                </span>
                <span className="text-sm font-bold block line-clamp-1">{season.seasonName.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Season Details Box */}
        <div className="bg-[#e8dfd7] p-6 md:p-10 rounded-3xl border border-black/10 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold text-amber-900 uppercase tracking-widest block mb-1">
              {activeSeason.period}
            </span>
            <h3 className={`text-2xl md:text-4xl text-gray-900 mb-2 ${LoubagMedium.className}`}>
              {activeSeason.seasonName}
            </h3>
            <p className="text-sm font-semibold text-amber-950 mb-4 bg-amber-900/10 p-2.5 rounded-xl border border-amber-900/20 inline-block">
              🌤️ Climate: {activeSeason.climate}
            </p>

            <div className="mb-6 bg-[#f6f2ee] p-4 rounded-2xl border border-black/5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900 block mb-1">
                🦁 Great Migration Herd Location
              </span>
              <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
                {activeSeason.migrationStatus}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-3">
                Season Highlights & Activities
              </h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-gray-800 mb-6">
                {activeSeason.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-[#f6f2ee] p-3 rounded-xl border border-black/5">
                    <ShieldCheck className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/book"
              className="w-full bg-amber-900 hover:bg-amber-950 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              Plan Your {activeSeason.period} Tanzania Safari
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
