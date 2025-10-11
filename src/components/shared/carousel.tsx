"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const total = safariPackages.length
  const visibleCards = isMobile ? 1 : 3

  // Loop logic — infinite scroll effect
  const loopedPackages = [
    safariPackages[total - 1],
    ...safariPackages,
    safariPackages[0],
  ]

  const next = () => {
    setIndex((prev) => prev + 1)
  }

  const prev = () => {
    setIndex((prev) => prev - 1)
  }

  useEffect(() => {
    const interval = setInterval(next, 4000)
    return () => clearInterval(interval)
  }, [isMobile])

  // Reset index seamlessly for infinite loop
  useEffect(() => {
    if (index === loopedPackages.length - visibleCards) {
      setTimeout(() => setIndex(1), 300)
    } else if (index === 0) {
      setTimeout(() => setIndex(loopedPackages.length - visibleCards - 1), 300)
    }
  }, [index, loopedPackages.length, visibleCards])

  return (
    <div className="relative w-full overflow-hidden bg-[#E9E1DA] py-10 px-6 md:px-16 lg:px-24">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
            width: `${(loopedPackages.length / visibleCards) * 100}%`,
          }}
        >
          {loopedPackages.map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="flex-shrink-0 w-full md:w-[28%] px-3"
            >
              <div className="bg-transparent border border-[#231f20] shadow-md overflow-hidden flex flex-col justify-between p-3 md:p-4 h-full rounded-lg hover:shadow-lg transition-shadow">
                {!pkg.cta && pkg.image && (
                  <div className="relative h-40 md:h-78 w-full">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                )}

                <div className="py-3 flex flex-col justify-between flex-grow">
                  <div>
                    <h3
                      className={`font-bold text-sm md:text-lg uppercase mb-1 ${AgrandirBold.className}`}
                    >
                      {pkg.title}
                    </h3>
                    <p
                      className={`text-sm md:text-base text-gray-800 mb-3 ${AgrandirRegular.className}`}
                    >
                      {pkg.subtitle}
                    </p>
                  </div>
                  <Button
                    ariaLabel={pkg.cta ? "Start Planning" : "Book"}
                    onClick={() => {}}
                  >
                    {pkg.cta ? "START PLANNING" : "BOOK"}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        {!isMobile && (
          <>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-105 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-105 transition"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
