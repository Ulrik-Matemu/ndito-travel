"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import Image from "next/image";
import localFont from "next/font/local";


const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

export default function WhyNdito() {
    return (
        <>
            <section className="py-14 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              <ScrollReveal direction="up" className="lg:col-span-3 space-y-5">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block">
                  ● WHAT MAKES IT DIFFERENT
                </span>
                <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                  A wilderness with walls
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Formed when a volcano roughly the size of Kilimanjaro erupted and collapsed
                  in on itself around 2.5 million years ago, the Ngorongoro Crater is a caldera
                  600 meters deep and 260 square kilometers wide — walled in on every side, yet
                  large enough to hold its own grassland, forest, swamp, and soda lake.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  That containment is what makes it exceptional for wildlife viewing. Animals
                  don&apos;t migrate out at scale, so instead of covering huge distances hoping
                  to find them, you spend your day watching what&apos;s already there — lion
                  prides moving between hunting grounds, black rhino grazing in the open,
                  flamingos crowding the shallows of Lake Magadi.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The Ngorongoro Conservation Area surrounding it is also unusual: it&apos;s the
                  only protected area in Tanzania where wildlife conservation and human habitation
                  coexist by design, and Maasai communities still graze cattle across the
                  highlands above the crater rim.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.15} className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-black/10 h-[340px] lg:h-[440px]">
                <Image
                  src="/photos/ngorongoro-crater/ngorongoro-lion.jpg"
                  alt="Flamingos on Lake Magadi inside the Ngorongoro Crater"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider bg-amber-900/80 px-3 py-1 rounded-full backdrop-blur-xs">
                    Lake Magadi &bull; Crater Floor
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </>
    )
}