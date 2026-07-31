"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import type { ExperienceData } from "@/data/experiences";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

interface ExperiencesHubClientProps {
  experiences: ExperienceData[];
}

export default function ExperiencesHubClient({ experiences }: ExperiencesHubClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Wildlife & Safari",
    "Aerial & Adventure",
    "Cultural Exchange",
    "Primate Trekking",
    "Island & Cultural",
  ];

  const filteredExperiences =
    selectedCategory === "All"
      ? experiences
      : experiences.filter((exp) => exp.category === selectedCategory);

  return (
    <div className={`space-y-12 pb-16 ${AgrandirRegular.className}`}>
      {/* Filter Bar */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-4" role="group" aria-label="Filter experiences by category">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={isSelected}
              className={`px-5 py-2.5 min-h-[44px] rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${AgrandirBold.className} ${
                isSelected
                  ? "bg-amber-900 text-white shadow-sm"
                  : "bg-[#f6f2ee] text-gray-800 hover:bg-white border border-black/10"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Experiences */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredExperiences.map((exp, idx) => (
          <motion.div
            key={exp.slug}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="group bg-[#f6f2ee] rounded-2xl overflow-hidden border border-black/10 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={exp.heroImage}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 ${AgrandirBold.className}`}>
                  {exp.category}
                </span>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h2 className={`text-xl font-bold leading-tight drop-shadow-sm ${LoubagMedium.className}`}>
                    {exp.title}
                  </h2>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-xs text-gray-700 line-clamp-3 leading-relaxed">
                  {exp.subtitle}
                </p>

                <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs text-gray-600 gap-2">
                  <span className="inline-flex items-center gap-1.5 font-medium shrink-0">
                    <Clock size={14} className="text-amber-900 shrink-0" />
                    {exp.quickFacts.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium min-w-0 truncate">
                    <MapPin size={14} className="text-amber-900 shrink-0" />
                    <span className="truncate">{exp.quickFacts.location}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Card Footer Link */}
            <div className="p-6 pt-0">
              <Link
                href={`/experiences/${exp.slug}`}
                className={`w-full py-3 px-4 rounded-xl bg-white hover:bg-amber-900 text-gray-900 hover:text-white border border-black/10 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${AgrandirBold.className}`}
              >
                Explore Experience <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
