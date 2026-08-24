"use client"


import { ScrollReveal } from "../shared/ScrollReveal"
import localFont from "next/font/local";
import { Button } from "../shared/button";
import { Check, X } from "lucide-react";
import { useState, useMemo } from "react";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});



const PRICING_TIERS = [
  {
    name: "Shared Group Join-In",
    price: "$260",
    unit: "per person",
    bestFor: "Solo travelers and couples on a budget",
    included: [
      "Seat in a shared 4x4 (max 6–7 travelers)",
      "NCA conservation fees & crater service fee",
      "English-speaking driver-guide",
      "Picnic lunch & bottled water",
    ],
    excluded: ["Private vehicle", "Hotel pickup outside Arusha town", "Tips"],
    highlight: false,
  },
  {
    name: "Private Day Tour",
    price: "$420",
    unit: "per person (2 people)",
    bestFor: "Families and travelers who want their own vehicle and pace",
    included: [
      "Private 4x4 with pop-up roof, just your group",
      "NCA conservation fees & crater service fee",
      "Dedicated English-speaking driver-guide",
      "Picnic lunch & bottled water",
      "Flexible pickup point in Arusha or Moshi",
    ],
    excluded: ["Tips", "Alcoholic drinks"],
    highlight: true,
  },
  {
    name: "Ngorongoro + Serengeti Combo",
    price: "$1,045",
    unit: "per person, multi-day",
    bestFor: "Travelers who want the crater alongside the wider ecosystem",
    included: [
      "Private vehicle for the full itinerary",
      "Crater day + Serengeti game drives",
      "Lodge or tented camp accommodation",
      "All park & conservation fees",
      "Full board meals",
    ],
    excluded: ["International flights", "Tips", "Visa fees"],
    highlight: false,
  },
];

export default function Pricing() {
    const [vehicleType, setVehicleType] = useState<"shared" | "private">("private");
    const [groupSize, setGroupSize] = useState(2);

    const estimate = useMemo(() => {
    const baseShared = 260; // TODO: replace with real per-person shared rate
    const basePrivate = 420; // TODO: replace with real per-person private rate (2 pax)
    const rate = vehicleType === "shared" ? baseShared : basePrivate;
    const privateDiscount = vehicleType === "private" && groupSize > 2 ? 0.85 : 1;
    const total = Math.round(rate * groupSize * privateDiscount);
    return { perPerson: Math.round(total / groupSize), total };
  }, [groupSize, vehicleType]);


    return (
        <>
            <section className="py-14 md:py-20">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
                  ● TRANSPARENT PRICING
                </span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
                  Ngorongoro Crater Safari Pricing
                </h2>
                <p className="mt-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  All prices include NCA conservation fees, the crater service fee, a
                  driver-guide, and lunch. No hidden charges at the gate.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between border shadow-md ${tier.highlight
                      ? "bg-[#231f20] text-white border-amber-900/40 scale-[1.02] shadow-xl"
                      : "bg-[#f6f2ee] text-gray-900 border-black/5"
                    }`}
                >
                  <div>
                    {tier.highlight && (
                      <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-amber-900/40 px-2.5 py-1 rounded-full inline-block mb-4">
                        Most Popular
                      </span>
                    )}
                    <h3 className={`text-xl font-bold mb-1 ${LoubagMedium.className}`}>{tier.name}</h3>
                    <p className={`text-xs mb-4 ${tier.highlight ? "text-gray-300" : "text-gray-600"}`}>
                      {tier.bestFor}
                    </p>
                    <div className="flex items-baseline gap-1.5 mb-6">
                      <span className={`text-3xl sm:text-4xl font-extrabold ${tier.highlight ? "text-amber-400" : "text-gray-900"} ${LoubagMedium.className}`}>
                        {tier.price}
                      </span>
                      <span className={`text-xs ${tier.highlight ? "text-gray-400" : "text-gray-500"}`}>
                        {tier.unit}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {tier.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs sm:text-sm">
                          <Check size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className={tier.highlight ? "text-gray-200" : "text-gray-700"}>{item}</span>
                        </li>
                      ))}
                      {tier.excluded.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs sm:text-sm opacity-60">
                          <X size={15} className="text-gray-400 shrink-0 mt-0.5" />
                          <span className={tier.highlight ? "text-gray-400" : "text-gray-500"}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    href="/book?tour=ngorongoro-crater"
                    ariaLabel={`Enquire about ${tier.name}`}
                    variant={tier.highlight ? "secondary" : "tertiary"}
                    size="md"
                    className={`w-full mt-4 ${!tier.highlight ? "border-black/20 text-gray-900 hover:bg-black/5" : ""}`}
                  >
                    ENQUIRE NOW
                  </Button>
                </div>
              ))}
            </div>

            {/* Interactive estimator */}
            <div className="bg-[#e8dfd7] rounded-3xl p-6 sm:p-10 border border-black/5">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
                    ● QUICK ESTIMATE
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-3 ${LoubagMedium.className}`}>
                    Estimate your trip cost
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    A rough starting figure — your guide will confirm an exact quote based on
                    dates, lodge choice, and season.
                  </p>
                </div>

                <div className="lg:col-span-3 bg-[#f6f2ee] rounded-2xl p-6 sm:p-8 border border-black/5 shadow-md">
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    <div className="flex-1">
                      <label className="text-xs uppercase font-bold text-gray-600 tracking-wider block mb-2">
                        Vehicle type
                      </label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setVehicleType("shared")}
                          className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${vehicleType === "shared"
                              ? "bg-amber-900 text-white"
                              : "bg-white text-gray-700 border border-black/10"
                            }`}
                        >
                          Shared
                        </button>
                        <button
                          onClick={() => setVehicleType("private")}
                          className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${vehicleType === "private"
                              ? "bg-amber-900 text-white"
                              : "bg-white text-gray-700 border border-black/10"
                            }`}
                        >
                          Private
                        </button>
                      </div>
                    </div>

                    <div className="flex-1">
                      <label className="text-xs uppercase font-bold text-gray-600 tracking-wider block mb-2">
                        Travelers: {groupSize}
                      </label>
                      <input
                        type="range"
                        min={1}
                        max={7}
                        value={groupSize}
                        onChange={(e) => setGroupSize(Number(e.target.value))}
                        className="w-full accent-amber-900"
                        aria-label="Number of travelers"
                      />
                      <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                        <span>1</span>
                        <span>7</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end justify-between pt-4 border-t border-black/10">
                    <div>
                      <span className="text-[11px] uppercase text-gray-500 font-bold block">
                        Estimated total
                      </span>
                      <span className={`text-3xl sm:text-4xl font-extrabold text-gray-900 ${LoubagMedium.className}`}>
                        ${estimate.total.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] uppercase text-gray-500 font-bold block">
                        Per person
                      </span>
                      <span className="text-lg font-bold text-amber-900">
                        ${estimate.perPerson.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-3">
                    TODO: illustrative estimate only — replace base rates with confirmed Ndito
                    pricing before launch.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}