"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Clock, CheckCircle2, ChevronRight } from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const tanzaniaCircuits = [
  {
    id: "northern",
    name: "Northern Safari Circuit",
    subtitle: "Serengeti, Ngorongoro, Tarangire & Lake Manyara",
    tagline: "The World's Pinnacle Wildlife Safari Realm",
    image: "/photos/discover-tanzania/lion-on-tree.jpg",
    idealDays: "5 - 10 Days",
    vibe: "Iconic Big Five & Great Migration",
    accessibility: "Fly in to Kilimanjaro Int. Airport (JRO) or Arusha (ARK)",
    description:
      "The Northern Circuit is Tanzania's world-famous safari crown jewel. Home to the Endless Plains of the Serengeti, the ancient unbroken caldera of Ngorongoro Crater, the elephant kingdom of Tarangire, and the tree-climbing lions of Lake Manyara.",
    destinations: [
      "Serengeti National Park (Great Wildebeest Migration)",
      "Ngorongoro Crater (Big Five in a volcanic caldera)",
      "Tarangire National Park (Ancient Baobabs & 3,000+ Elephants)",
      "Lake Manyara National Park (Flamingoes & tree-climbing lions)",
    ],
    bestFor: "First-time Africa visitors, Big Five seekers, photography lovers, and Great Migration chasers.",
  },
  {
    id: "southern",
    name: "Southern Safari Circuit",
    subtitle: "Nyerere (Selous), Ruaha, Mikumi & Udzungwa",
    tagline: "Untamed Riverine Wilderness & Massive Lion Prides",
    image: "/photos/Ruaha_National_Park_Baobab_Landscape_10.webp",
    idealDays: "4 - 8 Days",
    vibe: "Wild, Uncrowded & Boat Safaris",
    accessibility: "Fly in to Dar es Salaam (DAR) or coastal bush airstrips",
    description:
      "Tanzania's Southern Circuit offers vast, secluded game reserves far from major tourist trails. Experience boat safaris along the Rufiji River in Nyerere (Selous), track giant lion prides beneath ancient baobabs in Ruaha, and hike rainforest waterfalls in Udzungwa.",
    destinations: [
      "Nyerere National Park / Selous (Largest protected game reserve in Africa)",
      "Ruaha National Park (10% of Africa's wild lion population)",
      "Udzungwa Mountains (Sanje Waterfalls & endemic Colobus monkeys)",
      "Mikumi National Park (Sprawling savannah close to Dar es Salaam)",
    ],
    bestFor: "Seasoned safari travelers, couples wanting privacy, river safari lovers, and off-the-beaten-track explorers.",
  },
  {
    id: "western",
    name: "Western Safari Circuit",
    subtitle: "Mahale Mountains, Gombe Stream & Katavi",
    tagline: "Jane Goodall's Chimpanzee Haven on Lake Tanganyika",
    image: "/photos/Mahale_Mountain_National_Park.webp",
    idealDays: "4 - 7 Days",
    vibe: "Remote Expeditions & Primate Tracking",
    accessibility: "Fly-in charter flights from Arusha or Kigoma",
    description:
      "Tanzania's Western Circuit is one of Africa's most exclusive wilderness frontiers. Bordering the crystal waters of Lake Tanganyika, Mahale and Gombe are famous worldwide for wild chimpanzee trekking pioneered by Dr. Jane Goodall.",
    destinations: [
      "Mahale Mountains National Park (Chimpanzees meeting white beach shores)",
      "Gombe Stream National Park (Dr. Jane Goodall's historic chimp sanctuary)",
      "Lake Tanganyika (World's longest and 2nd deepest freshwater lake)",
      "Katavi National Park (Massive hippo pods and raw untamed buffalo herds)",
    ],
    bestFor: "Wildlife documentary enthusiasts, primate lovers, and true wilderness pioneers.",
  },
  {
    id: "coastal",
    name: "Coastal & Spice Islands",
    tagline: "Zanzibar, Pemba, Mafia & Historic Swahili Coast",
    image: "/photos/discover-tanzania/dar-es-salaam-coastal-urban-area.jpg",
    idealDays: "3 - 7 Days",
    vibe: "Pristine Coral Reefs & Spice Spice Culture",
    accessibility: "Flight to Zanzibar (ZNZ) or ferry from Dar es Salaam",
    description:
      "Tanzania's Indian Ocean coastline is a tropical dreamscape. Relax on powder-white sands in Zanzibar, dive with harmless whale sharks off Mafia Island, experience underwater hotel rooms in Pemba, or explore historic Arab fortresses in Bagamoyo.",
    destinations: [
      "Zanzibar Island (Nungwi, Kendwa & Stone Town UNESCO heritage)",
      "Pemba Island (Deep wall diving & eco-luxury underwater suites)",
      "Mafia Island Marine Park (Snorkel alongside wild whale sharks)",
      "Bagamoyo & Pangani (Historic Swahili coastal trade ports)",
    ],
    bestFor: "Honeymooners, beach lovers, scuba divers, kitesurfers, and bush-to-beach safari combos.",
  },
];

export const DiscoverCircuits = () => {
  const [activeCircuitId, setActiveCircuitId] = useState<string>("northern");
  const activeCircuit = tanzaniaCircuits.find((c) => c.id === activeCircuitId) || tanzaniaCircuits[0];

  return (
    <section id="circuits" className="py-16 md:py-24 bg-[#f6f2ee] rounded-3xl p-6 md:p-12 my-12 border border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Tanzania Regions & Circuits
          </span>
          <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
            Explore Tanzania&apos;s 4 Distinct Safari Realms
          </h2>
          <p className={`mt-4 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
            Whether you dream of Serengeti wildebeest herds, serene river boat safaris, tracking wild chimpanzees, or diving turquoise coral lagoons, Tanzania has a realm for every adventurer.
          </p>
        </div>

        {/* Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {tanzaniaCircuits.map((circuit) => {
            const isActive = circuit.id === activeCircuitId;
            return (
              <button
                key={circuit.id}
                onClick={() => setActiveCircuitId(circuit.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-xs ${
                  isActive
                    ? "bg-amber-900 text-white shadow-md scale-105"
                    : "bg-[#e8dfd7] text-gray-800 hover:bg-[#dfd5cb] hover:text-black"
                }`}
              >
                <Compass className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-amber-900"}`} />
                {circuit.name}
              </button>
            );
          })}
        </div>

        {/* Selected Circuit Spotlight */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCircuit.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="bg-[#e8dfd7]/90 rounded-3xl border border-black/10 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[480px]">
              <Image
                src={activeCircuit.image}
                alt={activeCircuit.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-amber-500 text-black font-extrabold text-xs uppercase px-3 py-1 rounded-full mb-2 inline-block">
                  Vibe: {activeCircuit.vibe}
                </span>
                <h3 className={`text-2xl md:text-3xl font-bold ${LoubagMedium.className}`}>
                  {activeCircuit.name}
                </h3>
                <p className="text-amber-200 text-xs md:text-sm mt-1">{activeCircuit.tagline}</p>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-[#f6f2ee] p-4 rounded-2xl border border-black/5 text-xs">
                  <div>
                    <span className="text-gray-500 uppercase font-semibold block">Recommended Duration</span>
                    <span className="font-bold text-gray-900 text-sm flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-amber-900" />
                      {activeCircuit.idealDays}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase font-semibold block">Gateway Access</span>
                    <span className="font-semibold text-gray-800 text-xs mt-0.5 block line-clamp-1">
                      {activeCircuit.accessibility}
                    </span>
                  </div>
                </div>

                <p className={`text-gray-800 text-sm md:text-base leading-relaxed mb-6 ${AgrandirRegular.className}`}>
                  {activeCircuit.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-3">
                    Crown Jewel Destinations
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-800">
                    {activeCircuit.destinations.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 bg-amber-900/10 rounded-xl border border-amber-900/20 text-xs md:text-sm text-amber-950 font-medium mb-6">
                  <strong>Ideal For:</strong> {activeCircuit.bestFor}
                </div>
              </div>

              <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-600 font-mono">
                  Circuit: {activeCircuit.subtitle}
                </span>
                <Link
                  href="/safaris"
                  className="w-full sm:w-auto bg-amber-900 hover:bg-amber-950 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-sm shrink-0"
                >
                  Explore {activeCircuit.name.split(" ")[0]} Safaris
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
