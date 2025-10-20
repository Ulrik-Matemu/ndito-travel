"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./button";
import localFont from "next/font/local";
import Link from "next/link";
import { safariPackages } from "@/data/safariTrips"; // ✅ import your real data

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export default function SafariCarousel() {
  const [isMobile, setIsMobile] = useState(false);
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
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex-shrink-0 snap-start bg-[#faf7f3] border border-transparent rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-[80%] sm:w-[55%] md:w-[32%] lg:w-[28%]"
            >
              <div className="flex flex-col justify-between h-full">
                {/* Image */}
                {pkg.images && pkg.images.length > 0 && (
                  <div className="relative h-44 md:h-56 w-full">
                    <Image
                      src={pkg.images[0]} // ✅ Use the first image as cover
                      alt={pkg.title}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3
                      className={`uppercase text-base md:text-lg font-bold mb-1 text-amber-800 ${AgrandirBold.className}`}
                    >
                      {pkg.title}
                    </h3>
                    <p
                      className={`text-gray-700 text-sm md:text-base mb-3 ${AgrandirRegular.className}`}
                    >
                      {pkg.duration}
                    </p>
                  </div>

                  <Link href={`/itineraries/${pkg.slug}`} className="mt-auto w-full">
                    <Button ariaLabel={`View ${pkg.title}`} onClick={() => {}}>VIEW PACKAGE</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Add custom CTA card at the end */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex-shrink-0 snap-start bg-[#faf7f3] border-2 border-dashed border-amber-400 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 w-[80%] sm:w-[55%] md:w-[32%] lg:w-[28%] flex items-center justify-center"
          >
            <div className="p-6 text-center">
              <h3
                className={`uppercase text-base md:text-lg font-bold mb-2 text-amber-800 ${AgrandirBold.className}`}
              >
                Plan Your Own Trip
              </h3>
              <p
                className={`text-gray-700 text-sm md:text-base mb-4 ${AgrandirRegular.className}`}
              >
                Tell us your dream adventure and we’ll make it happen.
              </p>
              <Button ariaLabel="Start Planning" onClick={() => {}}>Start Planning</Button>
            </div>
          </motion.div>
        </div>

        {/* Mobile hint */}
        <p className="text-center text-xs mt-3 text-gray-600 md:hidden">
          ↔ Swipe to explore
        </p>
      </div>
    </div>
  );
}
