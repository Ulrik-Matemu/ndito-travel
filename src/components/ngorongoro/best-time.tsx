"use client"

import { ScrollReveal } from "../shared/ScrollReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  CloudRain,
  Info,
} from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});




const MONTHS = [
  {
    key: "jan",
    label: "Jan",
    season: "Dry, warm",
    icon: Sun,
    detail:
      "Short dry spell between the rains. Good visibility, calving season is underway in the wider Serengeti ecosystem.",
    wildlife: "Newborn wildebeest and zebra calves in surrounding plains; predators active near herds.",
  },
  {
    key: "feb",
    label: "Feb",
    season: "Dry, warm",
    icon: Sun,
    detail: "One of the driest, clearest months. Excellent for photography with long visibility across the crater floor.",
    wildlife: "Peak calving continues; high predator activity.",
  },
  {
    key: "mar",
    label: "Mar",
    season: "Start of long rains",
    icon: CloudRain,
    detail: "Rains typically begin. Landscape turns green fast, fewer vehicles on the crater floor.",
    wildlife: "Migratory birds still present; crater wildlife unaffected by rain, viewing remains strong.",
  },
  {
    key: "apr",
    label: "Apr",
    season: "Long rains",
    icon: CloudRain,
    detail: "Wettest month. Some lodges close for maintenance. Roads can be muddy but the crater floor itself drains well.",
    wildlife: "Lush scenery, dramatic skies, lowest crowd levels of the year.",
  },
  {
    key: "may",
    label: "May",
    season: "Long rains easing",
    icon: CloudRain,
    detail: "Rains tapering off through the month. Green season pricing and availability still apply at most lodges.",
    wildlife: "Waterbirds still present at Lake Magadi.",
  },
  {
    key: "jun",
    label: "Jun",
    season: "Dry season begins",
    icon: Sun,
    detail: "Vegetation thins, dry season crowds start building. Cooler mornings on the rim — bring a fleece.",
    wildlife: "Visibility improving fast as grass shortens.",
  },
  {
    key: "jul",
    label: "Jul",
    season: "Peak dry season",
    icon: Sun,
    detail: "High season. Book vehicles and rim lodges well in advance. Clear skies most days.",
    wildlife: "Excellent Big Five visibility; dense wildlife concentration at permanent water sources.",
  },
  {
    key: "aug",
    label: "Aug",
    season: "Peak dry season",
    icon: Sun,
    detail: "Busiest month on the crater floor alongside July. Early departure from Arusha helps beat the vehicle queue at the rim.",
    wildlife: "Consistently strong sightings; short grass makes the floor easy to scan.",
  },
  {
    key: "sep",
    label: "Sep",
    season: "Peak dry season",
    icon: Sun,
    detail: "Still peak season with excellent weather. Good month to pair a crater day trip with the Serengeti.",
    wildlife: "High predator activity around the remaining water points.",
  },
  {
    key: "oct",
    label: "Oct",
    season: "Late dry season",
    icon: Sun,
    detail: "Dry season winding down, slightly thinner crowds than Jul–Sep with similar conditions.",
    wildlife: "Still strong wildlife concentration; landscape starting to dry out further.",
  },
  {
    key: "nov",
    label: "Nov",
    season: "Short rains",
    icon: CloudRain,
    detail: "Short, often afternoon-only rains. Landscape greens up quickly and light turns dramatic for photography.",
    wildlife: "Migratory birds, including flamingos, begin arriving at Lake Magadi in numbers.",
  },
  {
    key: "dec",
    label: "Dec",
    season: "Short rains easing",
    icon: CloudRain,
    detail: "Rains ease through the month. A good value window — green scenery without the full wet-season mud.",
    wildlife: "Birdlife at its best; resident wildlife present year-round regardless of season.",
  },
];

export default function BestTime() {
     const [activeMonth, setActiveMonth] = useState(6); // July default — peak season

      const currentMonth = MONTHS[activeMonth];

    return (
        <>
              <section className="py-14 md:py-20">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
                  ● PLAN YOUR VISIT
                </span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
                  Best Time to Visit the Ngorongoro Crater
                </h2>
                <p className="mt-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  Unlike migration-dependent parks, the crater has resident wildlife year-round.
                  Pick a month to see what to expect.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 mb-6">
              {MONTHS.map((month, idx) => {
                const Icon = month.icon;
                const isActive = idx === activeMonth;
                return (
                  <button
                    key={month.key}
                    onClick={() => setActiveMonth(idx)}
                    aria-current={isActive ? "true" : undefined}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all duration-200 ${isActive
                        ? "bg-amber-900 text-white border-amber-900 shadow-md"
                        : "bg-[#f6f2ee] text-gray-700 border-black/5 hover:bg-amber-100"
                      }`}
                  >
                    <Icon size={16} className={isActive ? "text-amber-300" : "text-gray-500"} />
                    <span className="text-xs font-bold">{month.label}</span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMonth}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="bg-[#f6f2ee] rounded-2xl p-6 sm:p-8 border border-black/5 shadow-md grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div>
                  <span className="text-xs uppercase font-extrabold text-amber-900 tracking-wider mb-2 block">
                    Season
                  </span>
                  <p className={`text-xl font-bold text-gray-900 mb-2 ${LoubagMedium.className}`}>
                    {currentMonth.season}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">{currentMonth.detail}</p>
                </div>
                <div>
                  <span className="text-xs uppercase font-extrabold text-amber-900 tracking-wider mb-2 block">
                    Wildlife notes
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{currentMonth.wildlife}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-black/5 flex items-start gap-3">
                  <Info size={18} className="text-amber-900 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Conservation fees and resident wildlife are constant year-round — the crater
                    floor doesn&apos;t empty out the way migration routes do elsewhere in Tanzania.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </section>
        </>
    )
}