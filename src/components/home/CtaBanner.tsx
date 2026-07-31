"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/shared/button";
import { Compass } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { motion } from "framer-motion";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8">
      <ScrollReveal direction="up" delay={0.1}>
        <motion.div
          whileHover="hover"
          className="bg-[#231f20] text-white rounded-3xl overflow-hidden relative p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/10 flex items-center min-h-[380px]"
        >
          {/* Content Side */}
          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 flex items-center gap-2">
              <Compass size={16} /> ● START YOUR ADVENTURE TODAY
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white ${LoubagMedium.className}`}
            >
              Ready to Explore the Wild Heart of Tanzania?
            </h2>
            <p
              className={`text-sm sm:text-base text-gray-300 leading-relaxed ${AgrandirRegular.className}`}
            >
              Every journey begins with a conversation. Tell us your dates and dream parks &mdash; our Arusha experts will design a custom itinerary with no upfront fees.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                href="/book"
                ariaLabel="Book your safari online"
                variant="secondary"
                size="md"
                className="transition-transform hover:scale-102"
              >
                BOOK YOUR SAFARI &rarr;
              </Button>
              <Button
                href="https://wa.me/255744903927"
                external
                ariaLabel="Chat on WhatsApp with Ndito Travel"
                variant="tertiary"
                size="md"
                className="text-white hover:bg-white/10 border-white/20 transition-transform hover:scale-102"
              >
                CHAT ON WHATSAPP
              </Button>
            </div>
          </div>

          {/* Scattered Photo Collage (Desktop Only) with hover tilt motion */}
          <div className="hidden lg:block absolute right-6 top-6 bottom-6 w-1/2 pointer-events-none">
            <div className="relative w-full h-full">
              {/* Photo 1 */}
              <motion.div
                variants={{
                  hover: { rotate: 2, y: -4 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-2 right-4 w-48 h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-900/40 rotate-6"
              >
                <Image
                  src="/photos/tarangire-lions.webp"
                  alt="Serengeti Lion"
                  fill
                  sizes="192px"
                  className="object-cover"
                />
              </motion.div>

              {/* Photo 2 */}
              <motion.div
                variants={{
                  hover: { rotate: -1, y: 4 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute bottom-2 right-36 w-44 h-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 -rotate-3"
              >
                <Image
                  src="/photos/Mount_Kilimanjaro_the_Crater_01.webp"
                  alt="Mount Kilimanjaro"
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </motion.div>

              {/* Photo 3 */}
              <motion.div
                variants={{
                  hover: { rotate: 1, y: -2 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-12 right-64 w-40 h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/40 rotate-3"
              >
                <Image
                  src="/photos/zanzibar-beach-nditotravel-zanzibar.webp"
                  alt="Zanzibar Beach"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </ScrollReveal>
    </section>
  );
}
