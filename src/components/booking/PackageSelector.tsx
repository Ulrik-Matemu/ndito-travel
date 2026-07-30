"use client";

import Image from "next/image";
import { safariPackages } from "@/data/safariTrips";
import { Check, Compass } from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

interface PackageSelectorProps {
  selectedSlug: string;
  onSelect: (slug: string) => void;
}

export function PackageSelector({ selectedSlug, onSelect }: PackageSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-2">
        Choose a Package (or Custom Trip)
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar">
        {/* Option 0: Custom Trip */}
        <button
          type="button"
          onClick={() => onSelect("")}
          className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none ${
            selectedSlug === ""
              ? "bg-amber-950 text-white border-amber-900 shadow-md ring-2 ring-amber-900"
              : "bg-white/80 hover:bg-white border-black/10 text-gray-800"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-lg ${selectedSlug === "" ? "bg-amber-900 text-amber-200" : "bg-amber-100/60 text-amber-900"}`}>
              <Compass size={20} />
            </div>
            <div>
              <p className={`font-bold text-sm ${LoubagMedium.className}`}>Tailor-Made Custom Trip</p>
              <p className={`text-xs ${selectedSlug === "" ? "text-amber-200" : "text-gray-500"}`}>
                Build your itinerary from scratch
              </p>
            </div>
          </div>
          {selectedSlug === "" && <Check size={18} className="text-amber-400 font-bold" />}
        </button>

        {/* Safari Packages */}
        {safariPackages.map((safari) => {
          const isSelected = selectedSlug === safari.slug;
          return (
            <button
              key={safari.id}
              type="button"
              onClick={() => onSelect(safari.slug)}
              className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all duration-200 relative overflow-hidden focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none ${
                isSelected
                  ? "bg-amber-950 text-white border-amber-900 shadow-md ring-2 ring-amber-900"
                  : "bg-white/80 hover:bg-white border-black/10 text-gray-800"
              }`}
            >
              <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={safari.images[0]}
                  alt={safari.title}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className={`font-bold text-sm truncate ${LoubagMedium.className}`}>{safari.title}</p>
                <p className={`text-xs ${isSelected ? "text-amber-200" : "text-gray-500"}`}>
                  {safari.duration}
                </p>
              </div>

              {isSelected && (
                <div className="bg-amber-900 text-amber-300 p-1 rounded-full shrink-0">
                  <Check size={14} className="stroke-[3]" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
