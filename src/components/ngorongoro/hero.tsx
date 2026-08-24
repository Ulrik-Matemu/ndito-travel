"use client"

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/shared/button";
import localFont from "next/font/local";
import { Mountain, Compass, Users, ShieldCheck } from "lucide-react";


const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});


const QUICK_FACTS = [
  { icon: Mountain, label: "Crater depth", value: "600m / 1,968ft" },
  { icon: Compass, label: "Floor area", value: "260 km² / 100mi²" },
  { icon: Users, label: "Large animals", value: "20,000+" },
  { icon: ShieldCheck, label: "Status", value: "UNESCO World Heritage" },
];


export default function NgorongoroHero() {
    return (
        <>
            <section className="relative w-full min-h-[88vh] flex flex-col justify-end pt-28 pb-10 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#231f20] text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/photos/ngorongoro-crater/ngorongoro-crater-landing-hero.jpg"
              alt="Aerial view of the Ngorongoro Crater floor, Tanzania"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-75"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 pointer-events-none z-[1]" />

          {/* Breadcrumb */}


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative z-10 max-w-3xl space-y-5"
          >
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 flex items-center gap-2">
              ● NGORONGORO CONSERVATION AREA, TANZANIA
            </span>
            <h1
              className={`text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.2] font-extrabold text-white drop-shadow-lg ${LoubagMedium.className}`}
            >
              Ngorongoro Crater Safari
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
              The world&apos;s largest intact volcanic caldera, and the closest thing to a
              guaranteed Big Five day in Tanzania. Descend 600 meters into a self-contained
              wilderness with over 20,000 large animals on a single crater floor.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/book?tour=ngorongoro-crater"
                ariaLabel="Book your Ngorongoro Crater safari"
                variant="secondary"
                size="md"
              >
                BOOK THIS SAFARI &rarr;
              </Button>
              <Button
                href="https://wa.me/255658883554"
                external
                ariaLabel="Chat on WhatsApp about Ngorongoro Crater tours"
                variant="tertiary"
                size="md"
                className="text-white hover:bg-white/10 border-white/20"
              >
                CHAT ON WHATSAPP
              </Button>
            </div>
          </motion.div>

          {/* Quick facts bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 w-full pt-6 mt-10 border-t border-white/20"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {QUICK_FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/10 text-amber-400 rounded-xl shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">
                        {fact.label}
                      </span>
                      <span className={`text-lg sm:text-xl font-bold text-white ${LoubagMedium.className}`}>
                        {fact.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </section>
        </>
    )
}