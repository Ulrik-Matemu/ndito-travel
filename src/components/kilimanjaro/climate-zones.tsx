"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trees, CloudRain, Wind, Snowflake, Sun, Shield, HeartPulse, Award } from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const ClimateZonesAndSafety = () => {
  const [activeZoneIndex, setActiveZoneIndex] = useState<number>(0);

  const climateZones = [
    {
      name: "Cultivated Farmland Zone",
      altitude: "800m - 1,800m (2,600ft - 5,900ft)",
      temperature: "25°C to 30°C (77°F to 86°F)",
      icon: Sun,
      color: "bg-emerald-800 text-emerald-100",
      accent: "border-emerald-700",
      description:
        "Warm, fertile lower slopes populated by Chagga villages, banana plantations, and coffee farms. Streams fed by mountain snow melt irrigate the soil.",
      floraFauna: "Coffee plants, banana trees, jacaranda, local livestock.",
      acclimatizationTip: "Stay hydrated and maintain a gentle walking pace ('Pole Pole').",
    },
    {
      name: "Rainforest / Montane Forest",
      altitude: "1,800m - 2,800m (5,900ft - 9,200ft)",
      temperature: "15°C to 22°C (59°F to 72°F)",
      icon: Trees,
      color: "bg-green-900 text-green-100",
      accent: "border-green-800",
      description:
        "A dense, emerald canopy drenched in mist and frequent rainfall. Giant moss-draped trees and ancient ferns form a tropical sanctuary.",
      floraFauna: "Black and white Colobus monkeys, Blue monkeys, impatiens Kilimanjari flowers, tropical birds.",
      acclimatizationTip: "Wear waterproof gaiters and shell jackets; trail can be muddy and slick.",
    },
    {
      name: "Heath & Moorland Zone",
      altitude: "2,800m - 4,000m (9,200ft - 13,100ft)",
      temperature: "5°C to 18°C (41°F to 64°F)",
      icon: CloudRain,
      color: "bg-amber-900 text-amber-100",
      accent: "border-amber-800",
      description:
        "Open alpine ridge landscapes featuring giant lobelias and groundsels. Temperatures drop rapidly as clouds roll below your hiking feet.",
      floraFauna: "Giant Senecio kilimanjari, Lobelia deckenii, high-altitude sunbirds, heather shrubs.",
      acclimatizationTip: "Climb high to Lava Tower (4,630m) and sleep low to trigger red blood cell production.",
    },
    {
      name: "Alpine Desert Zone",
      altitude: "4,000m - 5,000m (13,100ft - 16,400ft)",
      temperature: "-5°C to 10°C (23°F to 50°F)",
      icon: Wind,
      color: "bg-stone-800 text-stone-100",
      accent: "border-stone-700",
      description:
        "Inhospitable volcanic scree and dry rock wilderness. High UV solar radiation during daytime gives way to sub-freezing night winds.",
      floraFauna: "Hardy lichens, mosses, volcanic rocks, obsidian gravel.",
      acclimatizationTip: "Drink 4–5 liters of water daily. Rest well at base camp before summit push.",
    },
    {
      name: "Arctic Summit Zone (Uhuru Peak)",
      altitude: "5,000m - 5,895m (16,400ft - 19,341ft)",
      temperature: "-20°C to -5°C (-4°F to 23°F)",
      icon: Snowflake,
      color: "bg-sky-950 text-sky-100",
      accent: "border-sky-800",
      description:
        "Glaciers, ice fields, and sub-zero blizzard winds. Standing atop Uhuru Peak, you gaze across the African continent from its ultimate roof.",
      floraFauna: "Ancient glaciers (Furtwängler Glacier), snow cap, crater rim.",
      acclimatizationTip: "Use headlamp, thermal base layers, and follow guide pacing step by step.",
    },
  ];

  const currentZone = climateZones[activeZoneIndex];

  return (
    <div className="space-y-16 my-16">
      {/* 5 Climate Zones Section */}
      <section className="bg-[#e8dfd7] rounded-3xl p-6 md:p-12 border border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Ecological Journey
            </span>
            <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
              5 Distinct Climate Zones in One Climb
            </h2>
            <p className={`mt-3 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
              Climbing Mount Kilimanjaro is equivalent to walking from the Equator to the North Pole in under a week. Explore each altitude belt below.
            </p>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 mb-8">
            {climateZones.map((zone, idx) => {
              const IconComp = zone.icon;
              const isActive = idx === activeZoneIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveZoneIndex(idx)}
                  className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                    isActive
                      ? "bg-amber-900 text-white border-amber-900 shadow-md scale-102"
                      : "bg-[#f6f2ee] text-gray-800 border-black/5 hover:bg-amber-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${isActive ? "text-amber-300" : "text-amber-900"}`}>
                      Zone {idx + 1}
                    </span>
                    <IconComp className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-gray-600"}`} />
                  </div>
                  <span className="font-bold text-xs line-clamp-1">{zone.name.split(" ")[0]}</span>
                  <span className="text-[10px] opacity-80">{zone.altitude.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Zone Detail Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeZoneIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl p-6 md:p-8 ${currentZone.color} border ${currentZone.accent} shadow-md`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/20">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                    Zone {activeZoneIndex + 1} of 5
                  </span>
                  <h3 className={`text-2xl md:text-4xl font-bold ${LoubagMedium.className}`}>
                    {currentZone.name}
                  </h3>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs md:text-sm font-semibold">
                  Altitude: {currentZone.altitude}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-amber-300 tracking-wider mb-2">
                    Environment & Climate
                  </h4>
                  <p className="text-sm leading-relaxed opacity-90">{currentZone.description}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-amber-300 tracking-wider mb-2">
                    Flora & Wildlife
                  </h4>
                  <p className="text-sm leading-relaxed opacity-90">{currentZone.floraFauna}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-amber-300 tracking-wider mb-2">
                    Acclimatization Strategy
                  </h4>
                  <p className="text-sm leading-relaxed font-medium bg-black/20 p-3 rounded-xl border border-white/10">
                    💡 {currentZone.acclimatizationTip}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Safety & Porter Welfare E-E-A-T Trust Section */}
      <section className="bg-[#f6f2ee] rounded-3xl p-6 md:p-12 border border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Safety & Integrity First
            </span>
            <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
              Why Climb Kilimanjaro with Ndito Travel?
            </h2>
            <p className={`mt-3 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
              Our native Tanzanian mountain team combines medical-grade safety protocols with ethical, fair-wage porter care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#e8dfd7] p-6 rounded-2xl border border-black/5 hover:border-amber-900/40 transition-colors">
              <div className="w-12 h-12 bg-amber-900 text-white rounded-xl flex items-center justify-center mb-4">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold text-gray-900 mb-2 ${LoubagMedium.className}`}>
                Twice-Daily Oximetry Checks
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Every morning and evening, certified guides record your blood oxygen saturation (SpO2) and pulse rate using clinical pulse oximeters to track your acclimatization progress.
              </p>
            </div>

            <div className="bg-[#e8dfd7] p-6 rounded-2xl border border-black/5 hover:border-amber-900/40 transition-colors">
              <div className="w-12 h-12 bg-amber-900 text-white rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold text-gray-900 mb-2 ${LoubagMedium.className}`}>
                Emergency Medical Equipment
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Every expedition carries bottled medical oxygen, a Gamow hyperbaric chamber (upon request), comprehensive high-altitude trauma kits, and direct emergency evacuation protocols.
              </p>
            </div>

            <div className="bg-[#e8dfd7] p-6 rounded-2xl border border-black/5 hover:border-amber-900/40 transition-colors">
              <div className="w-12 h-12 bg-amber-900 text-white rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold text-gray-900 mb-2 ${LoubagMedium.className}`}>
                Ethical Porter Treatment (KPAP)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We believe mountain porters are the backbone of every summit. We guarantee fair wages, three hot meals daily, proper sleeping gear, and weight compliance (20kg limit).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
