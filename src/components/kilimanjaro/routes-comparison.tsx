"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Clock, TrendingUp, CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { ExpressBookingModal } from "@/components/booking/ExpressBookingModal";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

import { kilimanjaroRoutes, type RouteInfo } from "@/data/kilimanjaroRoutes";


export const KilimanjaroRoutesComparison = () => {
  const [activeRouteId, setActiveRouteId] = useState<string>("lemosho-route");
  const [isExpressModalOpen, setIsExpressModalOpen] = useState(false);

  const activeRoute =
    kilimanjaroRoutes.find((r) => r.id === activeRouteId) || kilimanjaroRoutes[0];

  return (
    <section className="py-16 md:py-24 bg-[#fcfbfa]" id="routes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-amber-900 bg-amber-900/10 px-3 py-1 rounded-full border border-amber-900/20">
            Compare Trail Options
          </span>
          <h2
            className={`text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-4 ${LoubagMedium.className}`}
          >
            Find Your Ideal Summit Route
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Select a route below to explore its difficulty, success rates, scenery, and terrain. Every Ndito trek includes private guides, high-ratio mountain crews, and summit oxygen safety.
          </p>
        </div>

        {/* Route Selector Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {kilimanjaroRoutes.map((route) => {
            const isActive = route.id === activeRouteId;
            return (
              <button
                key={route.id}
                onClick={() => setActiveRouteId(route.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? "bg-amber-950 text-white border-amber-900 shadow-md scale-[1.02]"
                    : "bg-white text-gray-800 border-black/10 hover:bg-[#f6f2ee] hover:border-amber-900/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs uppercase tracking-wider font-extrabold opacity-75">
                      {route.duration}
                    </span>
                    {isActive && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                  </div>
                  <h3 className={`text-base md:text-lg font-bold ${LoubagMedium.className}`}>
                    {route.name}
                  </h3>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className={isActive ? "text-amber-200 font-semibold" : "text-gray-500"}>
                    {route.difficulty}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                      isActive
                        ? "bg-amber-800 text-amber-100"
                        : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    {route.successRate} Success
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Route Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoute.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl border border-black/10 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Left: Image & Quick Stats */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[460px]">
              <Image
                src={activeRoute.heroImage}
                alt={activeRoute.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 inline-block">
                  {activeRoute.subtitle}
                </span>
                <h3 className={`text-2xl md:text-3xl font-bold ${LoubagMedium.className}`}>
                  {activeRoute.name} Route
                </h3>
              </div>
            </div>

            {/* Right: Details & Comparison Data */}
            <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div>
                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#f6f2ee] rounded-2xl border border-black/5 mb-6 text-center text-xs">
                  <div>
                    <span className="text-gray-500 block font-semibold mb-0.5">Duration</span>
                    <span className="font-bold text-gray-900 text-sm flex items-center justify-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-900" />
                      {activeRoute.duration}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block font-semibold mb-0.5">Difficulty</span>
                    <span className="font-bold text-gray-900 text-sm flex items-center justify-center gap-1">
                      <Mountain className="w-3.5 h-3.5 text-amber-900" />
                      {activeRoute.difficulty}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block font-semibold mb-0.5">Success Rate</span>
                    <span className="font-bold text-emerald-800 text-sm flex items-center justify-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
                      {activeRoute.successRate}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block font-semibold mb-0.5">Scenery</span>
                    <span className="font-bold text-amber-700 text-sm">
                      {activeRoute.sceneryRating}
                    </span>
                  </div>
                </div>

                {/* Route Description */}
                <p className={`text-gray-700 text-sm md:text-base leading-relaxed mb-6 ${AgrandirRegular.className}`}>
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
                <div className="p-3.5 bg-amber-900/10 rounded-xl border border-amber-900/20 text-xs md:text-sm text-amber-950 font-medium">
                  <strong>Ideal For:</strong> {activeRoute.bestFor}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-gray-600 font-mono truncate max-w-xs">
                  Path: {activeRoute.itinerarySummary}
                </span>
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsExpressModalOpen(true)}
                    className="w-full sm:w-auto bg-amber-950 hover:bg-amber-900 text-white font-bold px-4 py-3 rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 text-xs"
                  >
                    <Zap size={14} className="text-amber-400 fill-amber-400" />
                    Quick Inquiry
                  </button>
                  <Link
                    href={`/book?intent=kilimanjaro&route=${encodeURIComponent(activeRoute.name)}`}
                    className="w-full sm:w-auto bg-amber-900 hover:bg-amber-950 text-white font-bold px-5 py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-xs shrink-0"
                  >
                    Book {activeRoute.name} Trek
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <ExpressBookingModal
          isOpen={isExpressModalOpen}
          onClose={() => setIsExpressModalOpen(false)}
          title={`Inquire About ${activeRoute.name} Trek`}
          contextSubject={`${activeRoute.name} Kilimanjaro Trek`}
        />
      </div>
    </section>
  );
};
