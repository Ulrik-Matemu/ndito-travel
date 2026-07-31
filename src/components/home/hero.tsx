"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { MapPin, Compass, Users, Map } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

const HERO_IMAGES = [
  {
    src: "/photos/ndito-travel-cars.webp",
    alt: "Ndito Travel safari fleet at sunset",
  },
  {
    src: "/photos/hero-images/kilimanjaro-photo-by-ndito-travel.jpg",
    alt: "Majestic Mount Kilimanjaro view",
  },
  {
    src: "/photos/hero-images/lioness-in-serengeti-photo-by-ndito-travel.jpg",
    alt: "Wildlife migration in Serengeti",
  },
  {
    src: "/photos/hero-images/giraffe-photo-by-ndito-travel.jpg",
    alt: "Giraffe in Serengeti"
  },
  {
    src: "/photos/hero-images/wildebeest-herd-great-migration-photo-by-ndito-travel.jpg",
    alt: "Wildebeest in Great Migration in Serengeti"
  },
  {
    src: "/photos/hero-images/elegant-beach-in-zanzibar-photo-by-ndito-travel.jpg",
    alt: "Elegant Beach in Zanzibar"
  }
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-6 md:pb-10 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#231f20] text-white">
      {/* Background Cover Image Carousel */}
      <div className="absolute inset-0 z-0 bg-[#231f20]">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 7, ease: "easeOut" },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={HERO_IMAGES[currentImageIndex].src}
              alt={HERO_IMAGES[currentImageIndex].alt}
              fill
              priority={currentImageIndex === 0}
              sizes="100vw"
              className="object-cover object-center brightness-75"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/50 pointer-events-none z-[1]" />

      {/* Hero Content (Middle Section) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative flex gap-4 z-10 max-w-4xl my-auto md:pt-84"
      >
        <h1
          className={`text-4xl sm:text-6xl md:text-5xl lg:text-5xl tracking-tight leading-tight font-extrabold text-white drop-shadow-lg ${LoubagMedium.className}`}
        >
          A SAFARI WITH NDITO TRAVEL
        </h1>

        {/* Review Badges Pill */}
        <div className="flex items-center gap-4 bg-black/50 backdrop-blur-md px-4 h-10 mt-12 md:mt-3 rounded-2xl border border-white/20 w-max shadow-lg">
          <div className="flex items-center gap-2">
            <a
              href="https://share.google/OtFBIRdxriIEmnjDI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ndito Travel Google Reviews"
              className="hover:scale-110 transition-transform"
            >
              <Image src="/icons/search.png" alt="Google" width={20} height={20} />
            </a>
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g297913-d25567874-Reviews-Ndito_Travel-Arusha_Arusha_Region.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ndito Travel TripAdvisor Reviews"
              className="hover:scale-110 transition-transform"
            >
              <Image src="/icons/tripadvisor.png" alt="TripAdvisor" width={20} height={20} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Integrated Bottom Stats Overlay Bar (Inspired by hero-sample.png) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 w-full pt-6 border-t border-white/20 mt-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 items-start">
          
          {/* Column 1: Info / Brand Mission */}
          <div className="pr-0 lg:pr-6 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <MapPin size={16} /> LOCAL TANZANIAN EXPERTS
            </div>
            <p className={`text-xs sm:text-sm text-gray-300 leading-relaxed ${AgrandirRegular.className}`}>
              Ndito Travel supports authentic wildlife safaris, eco-friendly conservation, and unforgettable Tanzanian adventures.
            </p>
          </div>

          {/* Column 2: Stat 1 */}
          <div className="lg:border-l border-white/20 lg:pl-6 space-y-4">
            <span className="text-xs uppercase tracking-wider text-gray-300 font-bold block flex items-center gap-1.5">
              <Compass size={14} className="text-amber-400" /> SAFARIS COMPLETED
            </span>
            <div className="flex items-baseline gap-2">
              <AnimatedCounter
                target={500}
                suffix="+"
                className={`text-3xl sm:text-4xl lg:text-7xl font-extrabold text-white ${LoubagMedium.className}`}
              />
              <span className="text-xs text-gray-300 font-semibold">safaris</span>
            </div>
          </div>

          {/* Column 3: Stat 2 */}
          <div className="lg:border-l border-white/20 lg:pl-6 space-y-4">
            <span className="text-xs uppercase tracking-wider text-gray-300 font-bold block flex items-center gap-1.5">
              <Users size={14} className="text-amber-400" /> HAPPY TRAVELERS
            </span>
            <div className="flex items-baseline gap-2">
              <AnimatedCounter
                target={1000}
                suffix="+"
                className={`text-3xl sm:text-4xl lg:text-7xl font-extrabold text-white ${LoubagMedium.className}`}
              />
              <span className="text-xs text-gray-300 font-semibold">guests</span>
            </div>
          </div>

          {/* Column 4: Stat 3 */}
          <div className="lg:border-l border-white/20 lg:pl-6 lg:ml-12 space-y-4">
            <span className="text-xs uppercase tracking-wider text-gray-300 font-bold block flex items-center gap-1.5">
              <Map size={14} className="text-amber-400" /> UNIQUE DESTINATIONS
            </span>
            <div className="flex items-baseline gap-2">
              <AnimatedCounter
                target={30}
                suffix="+"
                className={`text-3xl sm:text-4xl lg:text-7xl font-extrabold text-white ${LoubagMedium.className}`}
              />
              <span className="text-xs text-gray-300 font-semibold">national parks</span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};