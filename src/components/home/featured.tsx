"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import localFont from "next/font/local";
import { useTranslations } from "next-intl";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export default function CarouselWithText() {
  const t = useTranslations("home.featured");
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      image: "/photos/hot-air-balloon-safari.webp",
      titleKey: "slide1Title" as const,
      descKey: "slide1Desc" as const,
    },
    {
      image: "/photos/zanzibar-feature.webp",
      titleKey: "slide2Title" as const,
      descKey: "slide2Desc" as const,
    },
    {
      image: "/photos/kilimanjaro-feature.webp",
      titleKey: "slide3Title" as const,
      descKey: "slide3Desc" as const,
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return;
    }
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isPlaying, isHovered, nextSlide]);

  return (
    <section className="my-12 md:my-16">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-12 bg-[#f6f2ee] p-6 md:p-10 rounded-2xl border border-black/5 shadow-xs">
        {/* Image Carousel Section */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured Tanzanian experiences"
          className="relative w-full md:w-1/2 h-[280px] sm:h-[340px] md:h-[380px] overflow-hidden rounded-xl shadow-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
        >
          {slides.map((slide, index) => {
            const slideTitle = t(slide.titleKey);
            const slideDesc = t(slide.descKey);
            return (
              <motion.div
                key={index}
                role="group"
                aria-roledescription="slide"
                aria-label={`${slideTitle} (${index + 1} of ${slides.length})`}
                aria-hidden={index !== current}
                className={`absolute top-0 left-0 w-full h-full ${
                  index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                } transition-opacity duration-700`}
              >
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover brightness-85"
                  priority={index === 0}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Text Over Image */}
                <div className="absolute bottom-12 left-6 right-6 text-white drop-shadow-md">
                  <h3
                    className={`text-xl sm:text-2xl md:text-3xl font-semibold leading-snug ${LoubagMedium.className}`}
                  >
                    {slideTitle}
                  </h3>
                  <p
                    className={`text-sm sm:text-base opacity-90 text-white/90 pt-1 ${AgrandirRegular.className}`}
                  >
                    {slideDesc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 z-20 flex items-center justify-between w-full px-3 pointer-events-none">
            <button
              type="button"
              onClick={prevSlide}
              className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-all pointer-events-auto focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-all pointer-events-auto focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              aria-label="Next Slide"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Indicators & Play/Pause */}
          <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center space-x-3">
            <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === current ? "true" : undefined}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none ${
                    i === current ? "bg-white w-5" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause automatic slide change" : "Start automatic slide change"}
                className="ml-1 text-white/80 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-full p-0.5"
              >
                {isPlaying ? <Pause size={12} /> : <Play size={12} />}
              </button>
            </div>
          </div>
        </div>

        {/* Side Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left px-2 sm:px-6 lg:px-10">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
            {t("badge")}
          </span>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-gray-900 ${LoubagMedium.className}`}
          >
            {t("title")}
          </h2>
          <p
            className={`text-sm sm:text-base text-gray-700 mt-4 leading-relaxed ${AgrandirRegular.className}`}
          >
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}
