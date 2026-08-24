"use client"

import { ScrollReveal } from "../shared/ScrollReveal"
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const WILDLIFE = [
  {
    name: "Black rhino",
    odds: "Good",
    note: "Ngorongoro is the single best place in Tanzania to see black rhino, usually near Lake Magadi.",
  },
  { name: "Lion", odds: "Excellent", note: "One of the densest lion populations in Africa lives on the crater floor." },
  { name: "Elephant", odds: "Good", note: "Mostly large bulls — crater elephants are known for their size." },
  { name: "Buffalo", odds: "Excellent", note: "Large herds graze the open grassland almost daily." },
  { name: "Leopard", odds: "Fair", note: "Present but shy — your best chance is along the Lerai Forest edge." },
  { name: "Hippo", odds: "Excellent", note: "Resident pool at Ngoitokitok Springs, visible from the picnic site." },
  { name: "Flamingo", odds: "Seasonal", note: "Gather by the thousands on Lake Magadi, best Nov–May." },
  { name: "Hyena", odds: "Excellent", note: "Large clans are active and easy to spot across the open floor." },
];


export default function WildlifeGrid() {
    return (
        <>
             <section className="py-14 md:py-20">
            <ScrollReveal direction="up">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-1">
                    ● WHAT YOU&apos;LL SEE
                  </span>
                  <h2 className={`text-3xl sm:text-4xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
                    Wildlife of the Crater Floor
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 max-w-md">
                  Sighting odds based on typical single-day game drives — no sighting is ever
                  guaranteed with wild animals.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {WILDLIFE.map((animal) => (
                <div
                  key={animal.name}
                  className="bg-[#f6f2ee] rounded-2xl p-5 border border-black/5 shadow-xs hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">{animal.name}</h3>
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${animal.odds === "Excellent"
                          ? "bg-emerald-100 text-emerald-800"
                          : animal.odds === "Good"
                            ? "bg-amber-100 text-amber-900"
                            : animal.odds === "Seasonal"
                              ? "bg-sky-100 text-sky-800"
                              : "bg-stone-200 text-stone-700"
                        }`}
                    >
                      {animal.odds}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{animal.note}</p>
                </div>
              ))}
            </div>
          </section>
        </>
    )
}