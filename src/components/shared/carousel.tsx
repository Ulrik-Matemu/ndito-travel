"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Compass } from "lucide-react";
import { safariPackages } from "@/data/safariTrips";
import localFont from "next/font/local";

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});
const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export default function SafariCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-6 md:py-10">
      <div className="max-w-7xl mx-auto relative">
        {/* Navigation Arrows for Desktop */}
        <div className="hidden md:flex justify-end items-center gap-2 mb-4">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left through trips"
            className="p-2.5 rounded-full bg-[#f6f2ee] hover:bg-black hover:text-white text-gray-800 border border-black/10 transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right through trips"
            className="p-2.5 rounded-full bg-[#f6f2ee] hover:bg-black hover:text-white text-gray-800 border border-black/10 transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          role="region"
          aria-label="Safari trip packages carousel"
          className="flex overflow-x-auto gap-6 pb-6 scroll-smooth snap-x snap-mandatory custom-scrollbar pt-2 px-1"
        >
          {safariPackages.map((pkg) => (
            <motion.article
              key={pkg.id}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative flex-shrink-0 snap-start rounded-2xl overflow-hidden min-w-[280px] w-[82vw] sm:w-[50%] md:w-[32%] lg:w-[28%] h-[380px] sm:h-[420px] shadow-md hover:shadow-xl border border-black/5"
            >
              {/* Background Image */}
              {pkg.images && pkg.images.length > 0 && (
                <Image
                  src={pkg.images[0]}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 33vw, 28vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Text Overlay */}
              <div className="absolute bottom-0 w-full text-white p-6 flex flex-col justify-end">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                  Featured Safari
                </span>
                <h3
                  className={`text-xl md:text-2xl font-semibold leading-snug mb-1 ${AgrandirBold.className}`}
                >
                  {pkg.title}
                </h3>
                <p
                  className={`text-xs md:text-sm text-gray-200 mb-4 ${AgrandirRegular.className}`}
                >
                  {pkg.duration}
                </p>

                <Link
                  href={`/itineraries/${pkg.slug}`}
                  className="inline-flex items-center justify-center bg-white/20 hover:bg-white text-white hover:text-black border border-white/80 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full backdrop-blur-xs transition-all w-max focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                  aria-label={`View full itinerary for ${pkg.title}`}
                >
                  View Trip &rarr;
                </Link>
              </div>
            </motion.article>
          ))}

          {/* Custom CTA Card */}
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex-shrink-0 snap-start rounded-2xl border-2 border-dashed border-amber-600/60 bg-[#f6f2ee] min-w-[280px] w-[82vw] sm:w-[50%] md:w-[32%] lg:w-[28%] h-[380px] sm:h-[420px] flex items-center justify-center text-center p-6 shadow-sm"
          >
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-amber-100 text-amber-900 mb-4">
                <Compass size={32} />
              </div>
              <h3
                className={`text-xl font-bold text-amber-900 mb-2 ${AgrandirBold.className}`}
              >
                Plan Your Own Trip
              </h3>
              <p
                className={`text-gray-700 text-sm mb-6 max-w-xs ${AgrandirRegular.className}`}
              >
                Tell us your dream adventure and we will craft a personalized itinerary for you.
              </p>
              <a
                href="https://wa.me/255744903927"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-900 hover:bg-black text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-md focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
              >
                Start Customizing &rarr;
              </a>
            </div>
          </motion.article>
        </div>

        {/* Mobile swipe hint */}
        <p className="text-center text-xs mt-2 text-gray-700 md:hidden font-medium">
          &larr; Swipe to explore more trips &rarr;
        </p>
      </div>
    </div>
  );
}
