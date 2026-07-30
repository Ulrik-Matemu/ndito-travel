"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shirt, Camera, ShieldAlert, DollarSign } from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const safariFaqItems = [
  {
    question: "What should I pack for a Tanzania safari?",
    icon: Shirt,
    answer:
      "Pack light, comfortable clothing in neutral earth tones (khaki, beige, olive green, brown). Avoid bright colors (blue and black can attract tsetse flies). Include a warm fleece or jacket for chilly early morning game drives and Ngorongoro Crater rim evenings, comfortable walking shoes, a sun hat, sunglasses, and high-SPF sunscreen.",
  },
  {
    question: "What camera gear and binoculars do you recommend?",
    icon: Camera,
    answer:
      "A pair of 8x42 or 10x42 binoculars per person enhances your wildlife spotting significantly. For photography, a DSLR or mirrorless camera with a 70-300mm or 100-400mm telephoto zoom lens is ideal for capturing lions, leopards, and distant birds. Bring extra memory cards and spare batteries (our Land Cruisers feature 220V charging ports).",
  },
  {
    question: "What health precautions & visas are required for Tanzania?",
    icon: ShieldAlert,
    answer:
      "Most international travelers require a tourist visa, easily obtained online (e-Visa) prior to departure or upon arrival at JRO/DAR airports. Consult your travel clinic regarding anti-malarial medication. Yellow fever vaccination certificates are required if arriving from yellow fever endemic zones.",
  },
  {
    question: "How does tipping work for safari driver-guides and camp staff?",
    icon: DollarSign,
    answer:
      "Tipping is customary in Tanzania's tourism industry as a token of gratitude for exceptional service. A general guideline is $20–$30 per day per vehicle for your driver-guide (shared among your group), and $10–$15 per day in the general tip box for lodge and camp staff.",
  },
];

export const SafariPlanningFAQ = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number>(0);

  return (
    <section className="py-16 md:py-24 bg-[#e8dfd7] rounded-3xl p-6 md:p-12 my-12 border border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Visitor Information
          </span>
          <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
            Safari Planning & Packing Guide
          </h2>
          <p className={`mt-4 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
            Everything you need to know before stepping onto the Tanzanian savannah. Click any question below to expand.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {safariFaqItems.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            const Icon = faq.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "bg-[#f6f2ee] border-amber-900/30 shadow-md"
                    : "bg-[#f6f2ee]/70 border-black/5 hover:bg-[#f6f2ee]"
                }`}
              >
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isOpen ? "bg-amber-900 text-white" : "bg-[#e8dfd7] text-amber-900"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className={`text-base md:text-lg font-bold text-gray-900 ${LoubagMedium.className}`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "bg-amber-900 text-white rotate-180" : "bg-black/5 text-gray-700"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-black/10 px-5 pb-6 pt-4 md:px-6 pl-16 text-xs md:text-sm text-gray-800 leading-relaxed font-normal"
                    >
                      <p className={AgrandirRegular.className}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
