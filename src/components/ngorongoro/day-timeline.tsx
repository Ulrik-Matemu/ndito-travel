"use client"

import { ScrollReveal } from "../shared/ScrollReveal";
import {
    MapPin,
    Clock,
    Sunrise,
    Sun,
    Car,
    Camera,
    Mountain,
    Droplets,
} from "lucide-react";
import { useState } from "react";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";



const LoubagMedium = localFont({
    src: "../../../public/fonts/Loubag-Medium.ttf",
});



const TIMELINE_STOPS = [
    {
        time: "6:00 AM",
        title: "Pickup in Arusha",
        icon: Sunrise,
        elevation: "1,400m",
        description:
            "Your guide collects you from your Arusha hotel in a private 4x4 Land Cruiser with pop-up roof. Coffee, water, and a packed breakfast are on board for the road.",
        photo: "/photos/ngorongoro-crater/ngorongoro-sunrise.jpg",
    },
    {
        time: "8:30 AM",
        title: "Ngorongoro Conservation Area gate",
        icon: MapPin,
        elevation: "1,700m",
        description:
            "Entry formalities at the NCA gate. This is also where you get your first proper view over the highland forest before the road climbs to the crater rim.",
        photo: "/photos/ngorongoro-crater/ngorongoro-gate-ndito-travel.jpg",
    },
    {
        time: "9:15 AM",
        title: "Crater rim viewpoint",
        icon: Mountain,
        elevation: "2,286m",
        description:
            "The road tops out at the rim — your first look down into the caldera. On a clear morning you can see Lake Magadi as a pale streak on the crater floor, 600m below.",
        photo: "/photos/ngorongoro-crater/Viewpoint-at-Crater.jpg",
    },
    {
        time: "9:45 AM",
        title: "Descent to the crater floor",
        icon: Car,
        elevation: "2,286m → 1,700m",
        description:
            "A steep, switchbacking descent road drops you onto the floor in about 25 minutes. This is the only vehicle route down — the walls that make Ngorongoro spectacular are also what keep it contained.",
        photo: "/photos/ngorongoro-crater/ngorongoro-1c.jpg",
    },
    {
        time: "10:15 AM – 1:00 PM",
        title: "Game drive across the floor",
        icon: Camera,
        elevation: "1,700m",
        description:
            "Open grassland, acacia woodland, swamp, and the soda lake — four habitats inside one caldera. This is where the Big Five sightings happen, often within a few hundred meters of each other.",
        photo: "/photos/ngorongoro-crater/ngorongoro-floor.jpg",
    },
    {
        time: "1:00 PM",
        title: "Picnic lunch at the Ngoitokitok Springs",
        icon: Droplets,
        elevation: "1,700m",
        description:
            "A freshwater spring picnic site on the crater floor — one of the few spots you're permitted to step out of the vehicle. Hippos are usually visible in the pool.",
        photo: "/photos/ngorongoro-crater/lunch-at-ngorongoro.jpg",
    },
    {
        time: "2:00 PM – 3:30 PM",
        title: "Afternoon game drive",
        icon: Camera,
        elevation: "1,700m",
        description:
            "Wildlife tends to be more active as the day cools. Your guide works the areas where sightings have been reported that morning — lion prides, rhino in the open, flamingos at Lake Magadi.",
        photo: "/photos/ngorongoro-crater/ngorongoro-afternoon.jpg",
    },
    {
        time: "4:00 PM",
        title: "Ascent and return to Arusha",
        icon: Sun,
        elevation: "1,700m → 1,400m",
        description:
            "Back up the crater wall and on the road to Arusha, arriving at your hotel in the early evening. Overnight stays inside the crater itself are not permitted for anyone, including the resident Maasai.",
        photo: "/photos/ngorongoro-crater/ngorongoro-ascent.jpg",
    },
];

export default function DayTimeline() {
    const [activeStop, setActiveStop] = useState(0);
    const currentStop = TIMELINE_STOPS[activeStop];

    return (
        <>
            <section className="py-14 md:py-20">
                <ScrollReveal direction="up">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
                            ● YOUR DAY IN THE CRATER
                        </span>
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
                            From Arusha to the Crater Floor and Back
                        </h2>
                        <p className="mt-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                            A Ngorongoro day trip covers a 900-meter descent and climb in a single day.
                            Follow the route stop by stop below.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="bg-[#e8dfd7] rounded-3xl p-5 sm:p-8 md:p-12 border border-black/5">
                    {/* Stepper row */}
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-8">
                        {TIMELINE_STOPS.map((stop, idx) => {
                            const Icon = stop.icon;
                            const isActive = idx === activeStop;
                            return (
                                <button
                                    key={stop.title}
                                    onClick={() => setActiveStop(idx)}
                                    aria-label={`View stop: ${stop.title}`}
                                    aria-current={isActive ? "step" : undefined}
                                    className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl text-left transition-all duration-200 border flex flex-col items-start gap-1.5 ${isActive
                                        ? "bg-amber-900 text-white border-amber-900 shadow-md scale-102"
                                        : "bg-[#f6f2ee] text-gray-800 border-black/5 hover:bg-amber-100"
                                        }`}
                                >
                                    <Icon className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-gray-600"}`} />
                                    <span className="text-[10px] sm:text-xs font-mono font-bold leading-tight">
                                        {stop.time}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Detail panel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStop}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8"
                        >
                            <div className="lg:col-span-3 bg-[#231f20] text-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                                        <div>
                                            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                                                Stop {activeStop + 1} of {TIMELINE_STOPS.length}
                                            </span>
                                            <h3 className={`text-2xl sm:text-3xl font-bold ${LoubagMedium.className}`}>
                                                {currentStop.title}
                                            </h3>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 flex items-center gap-1.5">
                                            <Clock size={13} className="text-amber-400" />
                                            {currentStop.time}
                                        </div>
                                    </div>
                                    <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                                        {currentStop.description}
                                    </p>
                                </div>
                                <div className="mt-6 flex items-center gap-2 text-xs text-amber-400 font-semibold">
                                    <Mountain size={14} />
                                    Elevation: {currentStop.elevation}
                                </div>
                            </div>

                            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-black/10 bg-[#f6f2ee] flex items-center justify-center min-h-[220px]">
                                <div className="text-center px-6 text-xs text-gray-500 font-mono">
                                    <Image
                                        src={currentStop.photo}
                                        fill
                                        alt={currentStop.title}
                                    />

                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
}