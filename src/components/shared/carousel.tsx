"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { safariPackages } from "@/data/safariTrips";
import localFont from "next/font/local";

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});
const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export default function SafariCarousel() {
  const [, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-[#E9E1DA] py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 scroll-smooth snap-x snap-mandatory custom-scrollbar"
        >
          {safariPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180, damping: 15 }}
              className="relative flex-shrink-0 snap-start rounded-2xl overflow-hidden w-[80%] sm:w-[55%] md:w-[32%] lg:w-[28%] shadow-md hover:shadow-xl"
            >
              {/* Background Image */}
              {pkg.images && pkg.images.length > 0 && (
                <Image
                  src={pkg.images[0]}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  style={{ transform: "scale(1.02)" }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text Overlay */}
              <div className="absolute bottom-0 w-full text-white p-5">
                <h3
                  className={`text-lg md:text-xl font-semibold mb-1 ${AgrandirBold.className}`}
                >
                  {pkg.title}
                </h3>
                <p
                  className={`text-sm md:text-base opacity-90 mb-3 ${AgrandirRegular.className}`}
                >
                  {pkg.duration}
                </p>

                <Link href={`/itineraries/${pkg.slug}`}>
                  <button
                    className="bg-transparent hover:bg-white hover:text-black border border-white text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white transition"
                    aria-label={`Read more about ${pkg.title}`}
                  >
                    View Trip
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Custom CTA Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 180, damping: 15 }}
            className="flex-shrink-0 snap-start rounded-2xl border-2 border-dashed border-amber-400 bg-[#faf7f3] w-[80%] sm:w-[55%] md:w-[32%] lg:w-[28%] flex items-center justify-center text-center p-6"
          >
            <div>
              <h3
                className={`text-base md:text-lg font-bold text-amber-800 mb-2 ${AgrandirBold.className}`}
              >
                Plan Your Own Trip
              </h3>
              <p
                className={`text-gray-700 text-sm md:text-base mb-4 ${AgrandirRegular.className}`}
              >
                Tell us your dream adventure and we’ll make it happen.
              </p>
              <button className="bg-amber-800 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-amber-700 transition">
                Start Planning
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile swipe hint */}
        <p className="text-center text-xs mt-3 text-gray-600 md:hidden">
          ↔ Swipe to explore
        </p>
      </div>
    </div>
  );
}
