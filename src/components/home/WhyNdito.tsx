"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { ShieldCheck, Heart, Sparkles, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

const leftFeatures = [
  {
    icon: ShieldCheck,
    title: "Expert Local Guides",
    description:
      "Born and raised in Tanzania, our drivers and guides know every trail, waterhole, and hidden wildlife vantage point.",
  },
  {
    icon: Heart,
    title: "Eco & Community Conscious",
    description:
      "We actively support local wildlife conservation initiatives and empower Tanzanian communities with fair tourism practices.",
  },
];

const rightFeatures = [
  {
    icon: Sparkles,
    title: "Fully Tailor-Made Trips",
    description:
      "Every itinerary is customized to your travel dates, preferred pace, budget, and specific safari dreams.",
  },
  {
    icon: Clock,
    title: "24/7 Dedicated Support",
    description:
      "From your initial inquiry through your flight back home, our Arusha-based team is available around the clock.",
  },
];

export function WhyNdito() {
  return (
    <section className="py-12 md:py-20">
      {/* Centered Header */}
      <ScrollReveal direction="up" delay={0.1}>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
            ● WHY CHOOSE NDITO TRAVEL
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${LoubagMedium.className}`}
          >
            Crafting Unforgettable Safari Experiences
          </h2>
          <p
            className={`text-base sm:text-lg text-gray-700 leading-relaxed ${AgrandirRegular.className}`}
          >
            At Ndito Travel, you&apos;re not just booking a tour &mdash; you&apos;re embarking on a private, authentic journey with local experts who care.
          </p>
        </div>
      </ScrollReveal>

      {/* Grid Layout: Features Left | Center Image | Features Right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
        {/* Left Column Features */}
        <ScrollReveal direction="left" delay={0.2} className="space-y-8">
          {leftFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div key={feat.title} className="flex items-start gap-4 group">
                <div className="p-3 bg-[#231f20] text-amber-400 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xs">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-1 ${LoubagMedium.className}`}>
                    {feat.title}
                  </h3>
                  <p className={`text-sm text-gray-700 leading-relaxed ${AgrandirRegular.className}`}>
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </ScrollReveal>

        {/* Center Hero Image */}
        <ScrollReveal direction="up" delay={0.3} className="relative rounded-2xl overflow-hidden shadow-xl border border-black/10">
          <Image
            src="/photos/baby-elephant-safari-nditotravel.webp"
            alt="Elephants in Tarangire National Park with Ndito Travel"
            width={900}
            height={100}
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-center text-white">
            <span className="text-xs font-semibold uppercase tracking-wider bg-amber-900/80 px-3 py-1 rounded-full backdrop-blur-xs">
              Tarangire &bull; Serengeti &bull; Ngorongoro
            </span>
          </div>
        </ScrollReveal>

        {/* Right Column Features */}
        <ScrollReveal direction="right" delay={0.4} className="space-y-8">
          {rightFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div key={feat.title} className="flex items-start gap-4 group">
                <div className="p-3 bg-[#231f20] text-amber-400 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xs">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-1 ${LoubagMedium.className}`}>
                    {feat.title}
                  </h3>
                  <p className={`text-sm text-gray-700 leading-relaxed ${AgrandirRegular.className}`}>
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
