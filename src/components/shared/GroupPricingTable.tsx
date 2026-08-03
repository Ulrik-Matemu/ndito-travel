import { Users, ShieldCheck } from "lucide-react";
import localFont from "next/font/local";
import { type GroupPricing } from "@/lib/pricing";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

interface GroupPricingTableProps {
  pricing: GroupPricing;
  title?: string;
  isKili?: boolean;
}

export function GroupPricingTable({ pricing, title = "Tiered Group Pricing", isKili = false }: GroupPricingTableProps) {
  const tiers = [
    { label: "2 Travelers", price: pricing.pax2, badge: "Couple / Duo" },
    { label: "4 Travelers", price: pricing.pax4, badge: "Family / Small Group" },
    { label: "6 Travelers", price: pricing.pax6, badge: "Best Value", highlight: true },
    { label: "8+ Travelers", price: pricing.pax8, badge: "Group Discount" },
  ];

  return (
    <div className="bg-white rounded-3xl border border-black/10 shadow-sm overflow-hidden p-6 md:p-8 my-8">
      <div className="flex items-center gap-2 text-amber-900 text-xs font-extrabold uppercase tracking-widest mb-3">
        <Users size={16} /> Price per person by group size
      </div>
      <h3 className={`text-2xl font-bold text-gray-900 mb-6 ${LoubagMedium.className}`}>
        {title}
      </h3>

      {/* Pricing Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {tiers.map((tier) => (
          <div
            key={tier.label}
            className={`p-5 rounded-2xl border text-center transition-all flex flex-col justify-between relative ${
              tier.highlight
                ? "bg-amber-950 text-white border-amber-900 shadow-md scale-[1.03]"
                : "bg-[#fcfbfa] text-gray-800 border-black/5"
            }`}
          >
            {tier.highlight && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-500 text-amber-950 font-bold uppercase tracking-widest text-[9px] px-2 py-0.5 rounded-full border border-amber-400 shrink-0">
                Best Value
              </span>
            )}
            <div>
              <span className={`text-[11px] uppercase tracking-wider font-extrabold block mb-1 ${tier.highlight ? "text-amber-300" : "text-gray-500"}`}>
                {tier.label}
              </span>
              <span className={`text-3xl font-extrabold ${LoubagMedium.className}`}>
                ${tier.price.toLocaleString()}
              </span>
              <span className="text-[10px] block font-medium opacity-80 mt-0.5">USD / person</span>
            </div>
            <div className={`mt-3 py-1 px-2.5 rounded-md text-[10px] font-bold ${
              tier.highlight ? "bg-amber-800 text-amber-100" : "bg-gray-200/60 text-gray-600"
            }`}>
              {tier.badge}
            </div>
          </div>
        ))}
      </div>

      {/* Trust Signals Footer */}
      <div className="p-4 bg-emerald-50/60 border border-emerald-200/60 rounded-2xl flex items-start gap-3 text-xs text-emerald-950">
        <ShieldCheck className="text-emerald-700 shrink-0 mt-0.5" size={18} />
        <div>
          <strong className={`font-bold block mb-0.5 ${AgrandirBold.className}`}>Fully Inclusive Pricing:</strong>
          <span className={AgrandirRegular.className}>
            {isKili ? (
              "Includes KPAP-certified porter crews, WFR-certified guides, all park entry/rescue fees, camping gears, high-altitude nutrition, and twice-daily medical monitoring."
            ) : (
              "Includes private custom 4x4 Land Cruiser, professional driver-guide, all national park conservation fees, full-board accommodation, and transfers."
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
