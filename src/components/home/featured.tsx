"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { RectangleCard } from "@/components/shared/rectangleCard"

const slides = [
  {
    image: "/images/serengeti.jpg",
    title: "Experience Serengeti from Above",
    desc: "Hot Air Balloon rides from $500/person."
  },
  {
    image: "/images/zanzibar.jpg",
    title: "Relax in Zanzibar’s Paradise",
    desc: "Luxury beach resorts and turquoise waters."
  },
  {
    image: "/images/kilimanjaro.jpg",
    title: "Climb Mount Kilimanjaro",
    desc: "Challenge yourself on Africa’s highest peak."
  }
]

export default function CarouselWithText() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

  return (
    <RectangleCard>
      {/* Layout Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full gap-6 md:gap-0">
        {/* Image Carousel Section */}
        <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-md">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className={`absolute top-0 left-0 w-full h-full ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              } transition-opacity duration-700`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-75"
                priority={index === current}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Text Over Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-md">
                <h3 className="text-base sm:text-lg font-semibold">{slide.title}</h3>
                <p className="text-sm sm:text-base opacity-90">{slide.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center justify-between w-full px-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full cursor-pointer transition ${
                  i === current ? "bg-white" : "bg-gray-400/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Side Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-gray-800">
            The best way to explore Tanzania
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Discover breathtaking adventures, unique wildlife, and unforgettable landscapes —
            all in one incredible country.
          </p>
        </div>
      </div>
    </RectangleCard>
  )
}
