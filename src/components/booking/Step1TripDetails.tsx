"use client";

import { BookingFormData, ValidationErrors } from "@/lib/bookingSchema";
import { PackageSelector } from "./PackageSelector";
import { CustomItineraryBuilder } from "./CustomItineraryBuilder";
import { Button } from "@/components/shared/button";
import { Calendar, Users, Minus, Plus, Compass, Sparkles } from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

interface Step1Props {
  formData: BookingFormData;
  onChange: (fields: Partial<BookingFormData>) => void;
  onNext: () => void;
  errors: ValidationErrors;
}

export function Step1TripDetails({ formData, onChange, onNext, errors }: Step1Props) {
  const handleGroupChange = (delta: number) => {
    const newSize = Math.max(1, Math.min(20, formData.groupSize + delta));
    onChange({ groupSize: newSize });
  };

  return (
    <div className="bg-[#f6f2ee] p-6 sm:p-8 rounded-2xl border border-black/5 shadow-lg space-y-6">
      <div className="border-b border-black/10 pb-4">
        <h2 className={`text-xl sm:text-2xl font-bold text-gray-900 ${LoubagMedium.className}`}>
          Step 1: Select Your Trip & Experience
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Choose a pre-designed itinerary or build a fully tailored safari & climbing experience.
        </p>

        {/* Mode Switcher Tabs */}
        <div className="mt-4 flex items-center gap-2 p-1.5 bg-[#eae3dc] rounded-xl border border-black/5">
          <button
            type="button"
            onClick={() => onChange({ bookingMode: "package" })}
            className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              formData.bookingMode === "package"
                ? "bg-amber-950 text-white shadow-xs"
                : "text-gray-700 hover:text-gray-900 hover:bg-black/5"
            }`}
          >
            <Compass size={16} />
            <span>Curated Package</span>
          </button>

          <button
            type="button"
            onClick={() => onChange({ bookingMode: "custom" })}
            className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              formData.bookingMode === "custom"
                ? "bg-amber-950 text-white shadow-xs"
                : "text-gray-700 hover:text-gray-900 hover:bg-black/5"
            }`}
          >
            <Sparkles size={16} className="text-amber-400" />
            <span>Custom Tailor-Made</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Curated Package */}
      {formData.bookingMode === "package" ? (
        <div className="space-y-4">
          <PackageSelector
            selectedSlug={formData.packageSlug}
            onSelect={(slug) => onChange({ packageSlug: slug })}
          />
          {errors.packageSlug && (
            <p role="alert" className="text-xs text-rose-600 font-semibold">
              {errors.packageSlug}
            </p>
          )}
        </div>
      ) : (
        /* Mode 2: Custom Itinerary Builder */
        <CustomItineraryBuilder
          formData={formData}
          onChange={onChange}
          error={errors.destinations}
        />
      )}

      {/* Date Picker & Group Size */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Estimated Date */}
        <div className="space-y-2">
          <label htmlFor="travel-date" className={`block text-xs uppercase tracking-wider font-bold text-gray-800 ${AgrandirBold.className}`}>
            Estimated Travel Date
          </label>
          <div className="relative">
            <input
              type="date"
              id="travel-date"
              disabled={formData.flexibleDates}
              value={formData.travelDate}
              onChange={(e) => onChange({ travelDate: e.target.value })}
              min={new Date().toISOString().split("T")[0]}
              className={`w-full bg-white/90 border rounded-xl px-4 py-3 text-sm text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none transition-all ${
                errors.travelDate ? "border-rose-500" : "border-black/10"
              } disabled:opacity-50 disabled:bg-gray-100`}
            />
            <Calendar size={18} className="absolute right-3.5 top-3.5 text-gray-400 pointer-events-none" />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="flexible-dates"
              checked={formData.flexibleDates}
              onChange={(e) =>
                onChange({
                  flexibleDates: e.target.checked,
                  ...(e.target.checked ? { travelDate: "" } : {}),
                })
              }
              className="w-4 h-4 rounded text-amber-900 focus:ring-amber-800 accent-amber-900 cursor-pointer"
            />
            <label htmlFor="flexible-dates" className="text-xs text-gray-700 font-medium cursor-pointer">
              My dates are flexible / Not fixed yet
            </label>
          </div>

          {errors.travelDate && (
            <p role="alert" className="text-xs text-rose-600 font-semibold mt-1">
              {errors.travelDate}
            </p>
          )}
        </div>

        {/* Group Size Stepper */}
        <div className="space-y-2">
          <label className={`block text-xs uppercase tracking-wider font-bold text-gray-800 ${AgrandirBold.className}`}>
            Number of Travelers
          </label>
          <div className="flex items-center justify-between bg-white/90 border border-black/10 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Users size={20} className="text-amber-900" />
              <span className="text-sm font-semibold text-gray-900">
                {formData.groupSize} {formData.groupSize === 1 ? "Traveler" : "Travelers"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleGroupChange(-1)}
                disabled={formData.groupSize <= 1}
                aria-label="Decrease traveler count"
                className="w-9 h-9 rounded-lg bg-[#e8dfd7] hover:bg-amber-900 hover:text-white flex items-center justify-center transition-colors disabled:opacity-40 disabled:hover:bg-[#e8dfd7] disabled:hover:text-gray-800"
              >
                <Minus size={16} />
              </button>
              <span className="w-6 text-center font-bold text-sm text-gray-900">{formData.groupSize}</span>
              <button
                type="button"
                onClick={() => handleGroupChange(1)}
                disabled={formData.groupSize >= 20}
                aria-label="Increase traveler count"
                className="w-9 h-9 rounded-lg bg-[#e8dfd7] hover:bg-amber-900 hover:text-white flex items-center justify-center transition-colors disabled:opacity-40 disabled:hover:bg-[#e8dfd7] disabled:hover:text-gray-800"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Next Step CTA */}
      <div className="pt-4 flex justify-end">
        <Button ariaLabel="Continue to contact details" onClick={onNext} size="md" className="w-full sm:w-auto">
          CONTINUE TO CONTACT DETAILS &rarr;
        </Button>
      </div>
    </div>
  );
}
