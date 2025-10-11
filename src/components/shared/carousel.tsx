"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
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
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const cardsPerView = isMobile ? 1 : 3
  const totalCards = safariPackages.length

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalCards)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalCards) % totalCards)
  }

  // Auto-scroll when focused
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 3000)
    return () => clearInterval(interval)
  }, [isMobile])

  // Calculate slide width dynamically
  const slideWidth = isMobile ? 100 : 20 // %
  const translateX = -(index * slideWidth)

  return (
    <div className="relative w-full overflow-hidden bg-[#E9E1DA] py-10">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${translateX}%)`,
            width: `${(totalCards / cardsPerView) * 100}%`,
          }}
        >
          {safariPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex-shrink-0 w-[100%] md:w-[33.333%] px-3`}
            >
              <div className="bg-transparent w-[24%] md:w-[100%] border border-[#231f20] shadow-md overflow-hidden flex flex-col justify-between p-4 h-full">
                {/* Image */}
                {!pkg.cta && pkg.image && (
                  <div className="relative h-98 w-full">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className=""
                    />
                  </div>
                )}

                {/* Text/CTA */}
                <div className="py-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className={`font-bold text-sm md:text-xl uppercase ${AgrandirBold.className}`}>
                      {pkg.title}
                    </h3>
                    <p className={`md:text-xl text-gray-800 mb-2 ${AgrandirRegular.className}`}>{pkg.subtitle}</p>
                  </div>
                  <Button
                    ariaLabel={pkg.cta ? "Start Planning" : "Book"}
                    onClick={() => {
                      // Add your booking or planning logic here
                    }}
                  >
                    {pkg.cta ? "START PLANNING" : "BOOK"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation arrows (desktop only) */}
        {!isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-105 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-105 transition"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalCards }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                idx === index ? "bg-black w-4" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
