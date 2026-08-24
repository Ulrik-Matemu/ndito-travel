"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/shared/button";
import { Compass, Flame, Trees, Footprints } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export function ExperienceShowcase() {
  const t = useTranslations("home.experiences");

  const experiences = [
    {
      icon: Compass,
      titleKey: "exp1Title" as const,
      descKey: "exp1Desc" as const,
    },
    {
      icon: Flame,
      titleKey: "exp2Title" as const,
      descKey: "exp2Desc" as const,
    },
    {
      icon: Trees,
      titleKey: "exp3Title" as const,
      descKey: "exp3Desc" as const,
    },
    {
      icon: Footprints,
      titleKey: "exp4Title" as const,
      descKey: "exp4Desc" as const,
    },
  ];

  return (
    <section className="bg-[#231f20] text-white py-16 md:py-24 rounded-3xl my-12 my-16 shadow-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image + Heading + CTA */}
          <ScrollReveal direction="left" delay={0.1} className="space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 block">
              {t("badge")}
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white ${LoubagMedium.className}`}
            >
              {t("title")}
            </h2>
            <p
              className={`text-sm sm:text-base text-gray-300 leading-relaxed ${AgrandirRegular.className}`}
            >
              {t("description")}
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
                {t("photoCaption")}
              </div>
            </div>

            <Button href="/tanzania-safaris" ariaLabel="Explore all safari packages" variant="secondary" size="md" className="w-full sm:w-auto transition-transform hover:scale-102">
              {t("exploreBtn")}
            </Button>
          </ScrollReveal>

          {/* Right Column: Stacked Experience Cards with Motion */}
          <div className="space-y-4">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              const title = t(exp.titleKey);
              const description = t(exp.descKey);
              return (
                <ScrollReveal key={exp.titleKey} direction="right" delay={0.15 * i}>
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
                          {i + 1}. {title}
                        </h3>
                        <p
                          className={`text-xs sm:text-sm text-gray-300 leading-relaxed ${AgrandirRegular.className}`}
                        >
                          {description}
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
