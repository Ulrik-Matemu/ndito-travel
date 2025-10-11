"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "./button"
import localFont from "next/font/local"

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
})

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
})

type Package = {
  id: number
  title: string
  subtitle: string
  image?: string
  cta?: boolean
}

const safariPackages: Package[] = [
  {
    id: 1,
    title: "11 DAY SAFARI AND ZANZIBAR",
    subtitle: "Best of both worlds.",
    image: "/photos/safari-package.png",
  },
  {
    id: 2,
    title: "10 DAYS IN ZANZIBAR",
    subtitle: "Find out how paradise feels like.",
    image: "/photos/zanzibar-package.png",
  },
  {
    id: 3,
    title: "CLIMBING KILIMANJARO MARANGU ROUTE",
    subtitle: "Certified Ethical climbing.",
    image: "/photos/kilimanjaro-package.png",
  },
  {
    id: 4,
    title: "PLAN YOUR OWN TRIP",
    subtitle: "Tell us your dream adventure and we’ll make it happen.",
    cta: true,
  },
]

export default function SafariCarousel() {
  const [isMobile, setIsMobile] = useState(false)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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
              className="flex-shrink-0 snap-start bg-transparent border border-transparent rounded-xl shadow-xl hover:shadow-md transition-all duration-300 w-[80%] sm:w-[55%] md:w-[32%] lg:w-[28%]"
            >
              <div className="flex flex-col justify-between h-full">
                {!pkg.cta && pkg.image && (
                  <div className="relative h-44 md:h-56 w-full">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                )}

                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3
                      className={`uppercase text-base md:text-lg font-bold mb-1 ${AgrandirBold.className}`}
                    >
                      {pkg.title}
                    </h3>
                    <p
                      className={`text-gray-700 text-sm md:text-base mb-3 ${AgrandirRegular.className}`}
                    >
                      {pkg.subtitle}
                    </p>
                  </div>
                  <Button
                    ariaLabel={pkg.cta ? "Start Planning" : "Book"}
                    onClick={() => {}}
                  >
                    {pkg.cta ? "START PLANNING" : "BOOK NOW"}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile hint */}
        <p className="text-center text-xs mt-3 text-gray-600 md:hidden">
          ↔ Swipe to explore
        </p>
      </div>
    </div>
  )
}
