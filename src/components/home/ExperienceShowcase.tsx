"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/shared/button";
import { Compass, Flame, Trees, Footprints } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { motion } from "framer-motion";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

const experiences = [
  {
    icon: Compass,
    title: "Big Five Game Drives",
    description:
      "Track lions, leopards, elephants, rhinos, and buffaloes across the iconic Serengeti savannahs and Ngorongoro crater.",
  },
  {
    icon: Flame,
    title: "Sunrise Hot Air Balloon Safaris",
    description:
      "Float silently over the Great Migration plains at dawn, followed by a luxury bush champagne breakfast.",
  },
  {
    icon: Trees,
    title: "Zanzibar Spice & Tropical Beach Getaways",
    description:
      "Unwind on powder-white beaches, snorkel turquoise reefs, and wander historical Stone Town alleys.",
  },
  {
    icon: Footprints,
    title: "Maasai Cultural Village Tours",
    description:
      "Connect with indigenous Maasai hosts, participate in traditional dances, and learn ancient bush survival skills.",
  },
];

export function ExperienceShowcase() {
  return (
    <section className="bg-[#231f20] text-white py-16 md:py-24 rounded-3xl my-12 my-16 shadow-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image + Heading + CTA */}
          <ScrollReveal direction="left" delay={0.1} className="space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 block">
              ● TANZANIA&apos;S FINEST
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white ${LoubagMedium.className}`}
            >
              Immersive Wildlife &amp; Island Experiences
            </h2>
            <p
              className={`text-sm sm:text-base text-gray-300 leading-relaxed ${AgrandirRegular.className}`}
            >
              Every expedition with Ndito Travel is crafted to balance thrill, comfort, and authentic Tanzanian heritage.
            </p>

            <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shadow-lg border border-white/10 my-4">
              <Image
                src="/photos/serengeti-lion.webp"
                alt="Serengeti Lion on safari with Ndito Travel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-xs font-semibold">
                Serengeti National Park &bull; Photo by Ndito Guide
              </div>
            </div>

            <Button href="/tanzania-safaris" ariaLabel="Explore all safari packages" variant="secondary" size="md" className="w-full sm:w-auto transition-transform hover:scale-102">
              EXPLORE ALL SAFARIS &rarr;
            </Button>
          </ScrollReveal>

          {/* Right Column: Stacked Experience Cards with Motion */}
          <div className="space-y-4">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <ScrollReveal key={exp.title} direction="right" delay={0.15 * i}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-5 sm:p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-amber-900/60 text-amber-300 shrink-0 mt-0.5 group-hover:bg-amber-800 transition-colors">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3
                          className={`text-lg sm:text-xl font-bold text-white mb-1.5 ${LoubagMedium.className}`}
                        >
                          {i + 1}. {exp.title}
                        </h3>
                        <p
                          className={`text-xs sm:text-sm text-gray-300 leading-relaxed ${AgrandirRegular.className}`}
                        >
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
