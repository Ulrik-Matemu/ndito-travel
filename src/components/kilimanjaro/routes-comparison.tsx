"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Clock, TrendingUp, CheckCircle2, ChevronRight } from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export interface RouteInfo {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  difficulty: "Moderate" | "Challenging" | "Strenuous" | "High";
  successRate: string;
  sceneryRating: "★★★★★" | "★★★★☆";
  traffic: "Low" | "Medium" | "High";
  accommodation: "Tents" | "Huts";
  heroImage: string;
  description: string;
  highlights: string[];
  bestFor: string;
  itinerarySummary: string;
}

export const kilimanjaroRoutes: RouteInfo[] = [
  {
    id: "lemosho",
    name: "Lemosho Route",
    subtitle: "The Most Scenic & Highest Success Rate Route",
    duration: "7 - 8 Days",
    difficulty: "Challenging",
    successRate: "95%+",
    sceneryRating: "★★★★★",
    traffic: "Medium",
    accommodation: "Tents",
    heroImage: "/photos/kilimanjaro/climbers-towards-kilimanjaro.jpg",
    description:
      "Approaching Mount Kilimanjaro from the west through pristine rainforests, Lemosho is widely considered the most beautiful trekking route on the mountain. Its extended itinerary provides superb acclimatization by following the 'climb high, sleep low' principle over Shira Plateau.",
    highlights: [
      "Panoramic 360° views across Shira Plateau and Lava Tower",
      "Excellent acclimatization profile for maximum summit success",
      "Less crowded during the first few days",
      "Traverses the spectacular Barranco Wall and Karanga Valley",
    ],
    bestFor: "Trekkers wanting the highest summit success rate combined with stunning scenery.",
    itinerarySummary: "Londorossi Gate → Forest Camp → Shira Camp → Lava Tower → Barranco → Karanga → Barafu → Uhuru Peak",
  },
  {
    id: "machame",
    name: "Machame Route",
    subtitle: "The Famous 'Whiskey Route'",
    duration: "6 - 7 Days",
    difficulty: "Strenuous",
    successRate: "90% - 92%",
    sceneryRating: "★★★★★",
    traffic: "High",
    accommodation: "Tents",
    heroImage: "/photos/kilimanjaro-hero-nditotravel.webp",
    description:
      "Machame is Kilimanjaro's most popular camping route. Known for its varied terrain, dramatic ridges, and stunning vistas of Kibo peak, Machame delivers a thrilling trek through rainforests, moorlands, and high-altitude alpine deserts.",
    highlights: [
      "Diverse landscapes from rainforest to Arctic glaciers",
      "Climb Lava Tower (4,630m) for optimal acclimatization",
      "Scramble up the famous Barranco Wall",
      "High value and classical Kilimanjaro experience",
    ],
    bestFor: "Physically fit adventurers seeking a scenic, classic Kilimanjaro challenge.",
    itinerarySummary: "Machame Gate → Machame Camp → Shira Camp → Lava Tower → Barranco → Barafu → Uhuru Peak",
  },
  {
    id: "marangu",
    name: "Marangu Route",
    subtitle: "The Classic 'Coca-Cola Route' with Hut Lodging",
    duration: "5 - 6 Days",
    difficulty: "Moderate",
    successRate: "80% - 85%",
    sceneryRating: "★★★★☆",
    traffic: "High",
    accommodation: "Huts",
    heroImage: "/photos/kilimanjaro/summit-kilimanjaro.jpg",
    description:
      "Marangu is the oldest and most established route on Mount Kilimanjaro. It is the only route that offers permanent dormitory-style sleeping huts with solar lighting and mattress beds, making it ideal during rainy shoulder months.",
    highlights: [
      "Comfortable wooden A-frame hut accommodation",
      "Gentle, gradual incline through rainforest and alpine meadows",
      "Same route for descent, allowing familiar trail navigation",
      "Great choice during damp weather seasons",
    ],
    bestFor: "Trekkers who prefer indoor hut sleeping over outdoor tent camping.",
    itinerarySummary: "Marangu Gate → Mandara Hut → Horombo Hut → Kibo Hut → Uhuru Peak → Horombo → Marangu Gate",
  },
  {
    id: "northern-circuit",
    name: "Northern Circuit",
    subtitle: "The Ultimate 9-Day Wilderness Trek",
    duration: "9 Days",
    difficulty: "Challenging",
    successRate: "98%",
    sceneryRating: "★★★★★",
    traffic: "Low",
    accommodation: "Tents",
    heroImage: "/photos/kilimanjaro/kilimanjaro-kibo.jpg",
    description:
      "The Northern Circuit is Kilimanjaro's newest and longest route. Circling the quiet northern slopes near the Kenyan border, it offers unmatched 360-degree scenery and the absolute highest summit success rate of any route.",
    highlights: [
      "9 days of optimal acclimatization (98% summit success rate)",
      "Uncrowded trail traversing the pristine northern face",
      "360-degree panoramic views of Mount Kilimanjaro",
      "Quiet wilderness camping far from main tourist hubs",
    ],
    bestFor: "Hikers looking for a peaceful, extended expedition with near-guaranteed summit success.",
    itinerarySummary: "Londorossi Gate → Big Tree → Shira 2 → Moir Hut → Buffalo Camp → Third Cave → School Hut → Uhuru Peak",
  },
  {
    id: "rongai",
    name: "Rongai Route",
    subtitle: "The Only Route Approaching from the North",
    duration: "6 - 7 Days",
    difficulty: "Moderate",
    successRate: "88% - 90%",
    sceneryRating: "★★★★☆",
    traffic: "Low",
    accommodation: "Tents",
    heroImage: "/photos/Kilimanjaro_Climb_Rongai_Route_01.webp",
    description:
      "Starting near the Tanzanian-Kenyan border, Rongai approaches Kilimanjaro from the north. The northern slopes receive significantly less rainfall, making Rongai the premier choice during rainier months (April, May, November).",
    highlights: [
      "Drier conditions than southern routes",
      "Wilderness feel with frequent colobus monkey sightings",
      "Gentle slope profile suited for steady pacing",
      "Passes Mawenzi Tarn beneath Kibo's rugged sister peak",
    ],
    bestFor: "Trekkers seeking a quiet route or climbing during shoulder rainy seasons.",
    itinerarySummary: "Rongai Gate → Simba Camp → Second Cave → Mawenzi Tarn → Kibo Hut → Uhuru Peak → Horombo",
  },
];

export const KilimanjaroRoutesComparison = () => {
  const [activeRouteId, setActiveRouteId] = useState<string>("lemosho");
  const activeRoute = kilimanjaroRoutes.find((r) => r.id === activeRouteId) || kilimanjaroRoutes[0];

  return (
    <section className="py-16 md:py-24 bg-[#f6f2ee] rounded-3xl p-6 md:p-12 my-12 border border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Choose Your Trail
          </span>
          <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
            Kilimanjaro Trekking Routes Compared
          </h2>
          <p className={`mt-4 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
            Every route offers a unique balance of scenery, acclimatization time, difficulty, and summit success rate. Explore our guide to find your ideal trail.
          </p>
        </div>

        {/* Route Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {kilimanjaroRoutes.map((route) => {
            const isActive = route.id === activeRouteId;
            return (
              <button
                key={route.id}
                onClick={() => setActiveRouteId(route.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-xs ${
                  isActive
                    ? "bg-amber-900 text-white shadow-md scale-105"
                    : "bg-[#e8dfd7] text-gray-800 hover:bg-[#dfd5cb] hover:text-black"
                }`}
              >
                <Mountain className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-amber-900"}`} />
                {route.name}
              </button>
            );
          })}
        </div>

        {/* Selected Route Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoute.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="bg-[#e8dfd7]/90 rounded-3xl border border-black/10 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[480px]">
              <Image
                src={activeRoute.heroImage}
                alt={activeRoute.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-amber-500 text-black font-extrabold text-xs uppercase px-3 py-1 rounded-full mb-2 inline-block">
                  Summit Success: {activeRoute.successRate}
                </span>
                <h3 className={`text-2xl md:text-3xl font-bold ${LoubagMedium.className}`}>
                  {activeRoute.name}
                </h3>
                <p className="text-amber-200 text-xs md:text-sm mt-1">
                  {activeRoute.subtitle}
                </p>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
              <div>
                {/* Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 bg-[#f6f2ee] p-4 rounded-2xl border border-black/5">
                  <div className="text-center">
                    <span className="text-xs text-gray-500 block uppercase font-semibold">Duration</span>
                    <span className="text-sm md:text-base font-bold text-gray-900 flex items-center justify-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-amber-900" />
                      {activeRoute.duration}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500 block uppercase font-semibold">Difficulty</span>
                    <span className="text-sm md:text-base font-bold text-gray-900 flex items-center justify-center gap-1 mt-0.5">
                      <TrendingUp className="w-3.5 h-3.5 text-amber-900" />
                      {activeRoute.difficulty}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500 block uppercase font-semibold">Scenery</span>
                    <span className="text-sm md:text-base font-bold text-amber-900 mt-0.5 block">
                      {activeRoute.sceneryRating}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500 block uppercase font-semibold">Lodging</span>
                    <span className="text-sm md:text-base font-bold text-gray-900 mt-0.5 block">
                      {activeRoute.accommodation}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-gray-800 text-sm md:text-base leading-relaxed mb-6 ${AgrandirRegular.className}`}>
                  {activeRoute.description}
                </p>

                {/* Highlights List */}
                <div className="mb-6">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-3">
                    Key Trek Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-800">
                    {activeRoute.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For Note */}
                <div className="p-3.5 bg-amber-900/10 rounded-xl border border-amber-900/20 text-xs md:text-sm text-amber-950 font-medium mb-6">
                  <strong>Ideal For:</strong> {activeRoute.bestFor}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-600 font-mono">
                  Route Path: {activeRoute.itinerarySummary}
                </span>
                <Link
                  href={`/book?intent=kilimanjaro&route=${encodeURIComponent(activeRoute.name)}`}
                  className="w-full sm:w-auto bg-amber-900 hover:bg-amber-950 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-sm shrink-0"
                >
                  Book {activeRoute.name} Trek
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
