"use client"

import { ScrollReveal } from "../shared/ScrollReveal";
import { useState } from "react";
import localFont from "next/font/local";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});


const FAQS = [
  {
    q: "Is one day enough to see the Ngorongoro Crater?",
    a: "Yes. Because the crater floor is a contained 260 km² area with permanent water and resident wildlife, a single full-day game drive typically delivers stronger sightings per hour than a much larger park like the Serengeti. Most travelers see four or five of the Big Five in one day.",
  },
  {
    q: "Can you stay overnight inside the Ngorongoro Crater?",
    a: "No. Overnight stays on the crater floor are prohibited for everyone, including the Maasai communities who graze cattle there. All accommodation — from budget campsites to luxury lodges — sits up on the crater rim or in nearby Karatu, with game drives descending to the floor for the day.",
  },
  {
    q: "How much does a Ngorongoro Crater safari cost?",
    a: "Pricing depends mainly on whether you join a shared vehicle or book a private one, and whether you combine the crater with other parks. A shared day trip from Arusha is the most affordable option; a private vehicle costs more per person but gives you full control over pace and stops. See the pricing comparison above for a breakdown.",
  },
  {
    q: "What is the best time to visit the Ngorongoro Crater?",
    a: "The crater has resident wildlife year-round, so it's a good destination in any month — unlike parks that depend on migration timing. The dry season (June–October) offers the clearest roads and easiest visibility. The wetter months (November–May) bring green scenery, migratory birdlife on Lake Magadi, and thinner crowds.",
  },
  {
    q: "Is Ngorongoro Crater better than the Serengeti?",
    a: "They're different experiences rather than competitors. Ngorongoro is compact and near-guaranteed for dense wildlife sightings in a single day, including your best shot at black rhino. The Serengeti is vastly larger, better for multi-day exploration and the Great Migration. Many travelers do both — a Ngorongoro day trip pairs naturally with a Serengeti itinerary.",
  },
  {
    q: "How do you get to the Ngorongoro Crater from Arusha?",
    a: "It's roughly a 2.5 to 3 hour drive from Arusha to the crater rim, mostly on tarmac before the final ascent on a gravel road through the Ngorongoro Conservation Area. Day trips leave Arusha around 6:00–6:30 AM to allow a full day on the crater floor.",
  },
  {
    q: "What's the conservation fee for Ngorongoro Crater?",
    a: "Visitors pay a Ngorongoro Conservation Area entry fee plus a separate crater service fee for vehicles descending to the floor, both set by the Ngorongoro Conservation Area Authority (NCAA) and included in Ndito Travel's quoted tour prices — you won't be charged separately at the gate.",
  },
];



export default function Faqs() {
     const [openFaq, setOpenFaq] = useState<number | null>(0);
    
    return (
        <>
            <section className="py-14 md:py-20">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
                  ● COMMON QUESTIONS
                </span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
                  Ngorongoro Crater FAQ
                </h2>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="bg-[#f6f2ee] rounded-2xl border border-black/5 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    >
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{faq.q}</span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-amber-900 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-gray-700 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        </>
    )
}