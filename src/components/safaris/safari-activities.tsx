"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Camera, Moon, Footprints, Waves, ChevronDown, Check, ChevronRight } from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const safariActivitiesList = [
  {
    id: "balloon",
    title: "Serengeti Hot Air Balloon Safaris",
    subtitle: "Float Above the Endless Plains at Dawn",
    icon: Compass,
    image: "/photos/new-images/hot-air-baloon-serengeti.jpeg",
    description:
      "Drift silently over the Serengeti savannah as the morning sun breaks over the horizon. Watch herds of wildebeest, zebras, and lions from a bird's-eye perspective, followed by a luxury champagne bush breakfast under an acacia tree.",
    bestParks: "Serengeti National Park & Tarangire",
    idealTime: "Sunrise (5:30 AM - 9:30 AM)",
    highlights: [
      "360-degree panoramic flight over wildlife herds",
      "Traditional champagne toast upon landing in the bush",
      "Full English hot breakfast cooked fresh in the wilderness",
      "Flight certificate signed by your licensed balloon pilot",
    ],
  },
  {
    id: "game-drives",
    title: "4x4 Open-Window Game Drives & Big 5 Tracking",
    subtitle: "The Quintessential African Wildlife Experience",
    icon: Camera,
    image: "/photos/new-images/lion-serengeti-3.jpeg",
    description:
      "Traverse iconic national parks in Ndito Travel's custom-built 4x4 Land Cruisers with pop-up roofs. Guided by certified native Tanzanian naturalists, track lions, leopards, rhinos, elephants, and buffaloes up close.",
    bestParks: "Serengeti, Ngorongoro Crater, Tarangire, Lake Manyara",
    idealTime: "Early Morning (6:30 AM) & Late Afternoon (4:00 PM)",
    highlights: [
      "Pop-up roof for 360-degree unobstructed wildlife photography",
      "Experienced local naturalists who know animal behavior patterns",
      "On-board fridge with cold water & drinks",
      "Unlimited daily game drive mileage",
    ],
  },
  {
    id: "walking",
    title: "Guided Bush Walking Safaris",
    subtitle: "Feel the African Earth Beneath Your Feet",
    icon: Footprints,
    image: "/photos/new-images/zebras.png",
    description:
      "Step outside the safari vehicle and trek through the wilderness accompanied by an armed National Park ranger and Maasai tracker. Learn to identify animal tracks, medicinal plants, insects, and subtle signs of the wild.",
    bestParks: "Tarangire, Ruaha, Nyerere (Selous), Serengeti Rim",
    idealTime: "Cool Morning Hours (2 - 3 Hours)",
    highlights: [
      "Intimate on-foot connection with the African bush",
      "Learn wildlife tracking and spoor identification",
      "Escorted by armed TANAPA ranger & expert Maasai guide",
      "Quiet, sensory encounter far from engine sounds",
    ],
  },
  {
    id: "night-drives",
    title: "Nocturnal Night Game Drives",
    subtitle: "Witness Predators Hunting Under the Stars",
    icon: Moon,
    image: "/photos/new-images/hyaena.png",
    description:
      "Experience the African savannah after dark with high-powered filtered spotlights. Spot elusive nocturnal creatures such as hunting leopards, hyenas, serval cats, porcupines, bushbabies, and genets.",
    bestParks: "Lake Manyara, Tarangire & Private Wildlife Concessions",
    idealTime: "Post-Sunset (8:00 PM - 10:30 PM)",
    highlights: [
      "Spot nocturnal predators active on night hunts",
      "Specialized filtered spotlights that do not blind wildlife",
      "Stargazing under the crystal-clear Southern Cross night sky",
      "Thrilling atmospheric bush experience",
    ],
  },
  {
    id: "boat-canoe",
    title: "Canoe & River Boat Safaris",
    subtitle: "Glide Alongside Hippos & Flamingos",
    icon: Waves,
    image: "/photos/discover-tanzania/muddy-elephant-and-cub.jpg",
    description:
      "Paddle along the serene shorelines of Lake Manyara or cruise the broad waters of the Rufiji River in Nyerere (Selous). Watch elephants drinking at the water's edge and thousands of pink flamingos taking flight.",
    bestParks: "Lake Manyara National Park & Nyerere (Selous)",
    idealTime: "Morning or Sunset Cruises",
    highlights: [
      "Close water-level views of bathing elephants & hippos",
      "Spectacular birdwatching (fish eagles, kingfishers, herons)",
      "Peaceful non-motorized canoeing on Lake Manyara",
      "Sunset dhow and boat cruises with drinks",
    ],
  },
];

export const SafariActivities = () => {
  const [openActivityId, setOpenActivityId] = useState<string>("balloon");

  return (
    <section className="py-16 md:py-24 bg-[#f6f2ee] rounded-3xl p-6 md:p-12 my-12 border border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Safari Experiences
          </span>
          <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
            Top Safari Activities & Excursions
          </h2>
          <p className={`mt-4 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
            A Tanzania safari is much more than sitting in a vehicle. Click each activity below to reveal photos, highlights, and best national parks.
          </p>
        </div>

        {/* Click-to-Reveal Accordion List */}
        <div className="space-y-4">
          {safariActivitiesList.map((act) => {
            const isOpen = openActivityId === act.id;
            const Icon = act.icon;
            return (
              <div
                key={act.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "bg-[#e8dfd7] border-amber-900/30 shadow-md"
                    : "bg-[#e8dfd7]/60 border-black/5 hover:bg-[#e8dfd7]"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => setOpenActivityId(isOpen ? "" : act.id)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isOpen ? "bg-amber-900 text-white" : "bg-[#f6f2ee] text-amber-900"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-lg md:text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                        {act.title}
                      </h3>
                      <p className="text-xs text-amber-950 font-medium">{act.subtitle}</p>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "bg-amber-900 text-white rotate-180" : "bg-black/5 text-gray-700"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Expanded Content Reveal */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-black/10 px-5 pb-6 pt-2 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                    >
                      {/* Photo Column */}
                      <div className="lg:col-span-5 relative h-56 md:h-72 w-full rounded-2xl overflow-hidden shadow-xs mt-2">
                        <Image
                          src={act.image}
                          alt={act.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </div>

                      {/* Details Column */}
                      <div className="lg:col-span-7 flex flex-col justify-between h-full">
                        <div>
                          <p className={`text-xs md:text-sm text-gray-800 leading-relaxed mb-4 ${AgrandirRegular.className}`}>
                            {act.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 text-xs">
                            <div className="bg-[#f6f2ee] p-3 rounded-xl border border-black/5">
                              <strong className="text-amber-900 block font-bold mb-0.5">Best Parks:</strong>
                              <span className="text-gray-800">{act.bestParks}</span>
                            </div>
                            <div className="bg-[#f6f2ee] p-3 rounded-xl border border-black/5">
                              <strong className="text-amber-900 block font-bold mb-0.5">Optimal Time:</strong>
                              <span className="text-gray-800">{act.idealTime}</span>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-amber-900 mb-2">
                              Activity Highlights
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-800">
                              {act.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <Check className="w-3.5 h-3.5 text-amber-900 shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-black/10 flex justify-end">
                          <Link
                            href="/book?intent=custom&source=safari-activities"
                            className="bg-amber-900 hover:bg-amber-950 text-white font-bold px-5 py-2.5 rounded-xl transition-all text-xs flex items-center gap-1.5 shadow-xs"
                          >
                            Include in Safari Itinerary
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
