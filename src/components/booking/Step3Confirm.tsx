"use client";

import { BookingFormData } from "@/lib/bookingSchema";
import { safariPackages } from "@/data/safariTrips";
import { Button } from "@/components/shared/button";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  User,
  Mail,
  Phone,
  Edit2,
  Loader2,
  Compass,
  MapPin,
  Sparkles,
  Globe,
  Tent,
} from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

interface Step3Props {
  formData: BookingFormData;
  onBack: () => void;
  onEditStep: (step: number) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export function Step3Confirm({ formData, onBack, onEditStep, onSubmit, isSubmitting }: Step3Props) {
  const selectedPackage = safariPackages.find((s) => s.slug === formData.packageSlug);

  return (
    <div className="bg-[#f6f2ee] p-6 sm:p-8 rounded-2xl border border-black/5 shadow-lg space-y-6">
      <div className="border-b border-black/10 pb-4">
        <h2 className={`text-xl sm:text-2xl font-bold text-gray-900 ${LoubagMedium.className}`}>
          Step 3: Review & Submit Request
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Please verify your trip selections and contact information before submitting.
        </p>
      </div>

      {/* Summary Card: Selected Trip Details */}
      <div className="bg-white/90 p-5 rounded-xl border border-black/10 space-y-4 relative">
        <div className="flex items-center justify-between border-b border-black/5 pb-2">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-900 flex items-center gap-1.5">
            {formData.bookingMode === "package" ? <Compass size={14} /> : <Sparkles size={14} className="text-amber-500" />}
            {formData.bookingMode === "package" ? "Selected Safari Package" : "Custom Tailored Itinerary"}
          </span>
          <button
            type="button"
            onClick={() => onEditStep(1)}
            className="text-xs text-gray-600 hover:text-black font-semibold flex items-center gap-1"
          >
            <Edit2 size={12} /> Edit
          </button>
        </div>

        {formData.bookingMode === "package" ? (
          <div className="space-y-2 text-sm text-gray-800">
            <div>
              <span className="text-xs text-gray-500 block">Package Title:</span>
              <p className="font-bold text-gray-900">
                {selectedPackage ? selectedPackage.title : formData.packageTitle || "Tanzania Safari"}
              </p>
              {selectedPackage && (
                <p className="text-xs text-amber-900 font-semibold">{selectedPackage.duration}</p>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-3 text-xs sm:text-sm text-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <span className="text-xs text-gray-500 block">Category:</span>
                <span className="font-bold text-amber-900 capitalize">
                  {formData.customItinerary.tripCategory.replace("_", " ")}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Duration & Comfort:</span>
                <span className="font-semibold text-gray-900 flex items-center gap-1">
                  <Tent size={14} className="text-amber-900" />
                  {formData.customItinerary.durationDays} • {formData.customItinerary.comfortLevel.toUpperCase()}
                </span>
              </div>
            </div>

            {formData.customItinerary.kilimanjaroRoute && (
              <div>
                <span className="text-xs text-gray-500 block">Kilimanjaro Summit Route:</span>
                <p className="font-bold text-gray-900">{formData.customItinerary.kilimanjaroRoute}</p>
              </div>
            )}

            {formData.customItinerary.destinations.length > 0 && (
              <div>
                <span className="text-xs text-gray-500 block mb-1">Selected Parks & Destinations:</span>
                <div className="flex flex-wrap gap-1.5">
                  {formData.customItinerary.destinations.map((dest) => (
                    <span
                      key={dest}
                      className="px-2.5 py-1 rounded-md bg-amber-100/80 border border-amber-900/10 text-amber-950 font-semibold text-xs flex items-center gap-1"
                    >
                      <MapPin size={12} className="text-amber-900" />
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {formData.customItinerary.specialActivities.length > 0 && (
              <div>
                <span className="text-xs text-gray-500 block mb-1">Add-on Experiences:</span>
                <ul className="list-disc list-inside text-xs text-gray-700 space-y-0.5">
                  {formData.customItinerary.specialActivities.map((act) => (
                    <li key={act}>{act}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Dates & Travelers */}
        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-black/5">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-amber-900 shrink-0" />
            <div>
              <span className="text-xs text-gray-500 block">Travel Date:</span>
              <span className="font-semibold text-xs sm:text-sm">
                {formData.flexibleDates ? "Flexible Dates" : formData.travelDate || "Not specified"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Users size={16} className="text-amber-900 shrink-0" />
            <div>
              <span className="text-xs text-gray-500 block">Group Size:</span>
              <span className="font-semibold text-xs sm:text-sm">
                {formData.groupSize} {formData.groupSize === 1 ? "Traveler" : "Travelers"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Card: Contact Details */}
      <div className="bg-white/90 p-5 rounded-xl border border-black/10 space-y-3 relative">
        <div className="flex items-center justify-between border-b border-black/5 pb-2">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-900">
            Contact Information
          </span>
          <button
            type="button"
            onClick={() => onEditStep(2)}
            className="text-xs text-gray-600 hover:text-black font-semibold flex items-center gap-1"
          >
            <Edit2 size={12} /> Edit
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <User size={16} className="text-amber-900 shrink-0" />
            <div className="min-w-0">
              <span className="text-xs text-gray-500 block">Name:</span>
              <span className="font-semibold text-xs sm:text-sm truncate block">{formData.fullName}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} className="text-amber-900 shrink-0" />
            <div className="min-w-0">
              <span className="text-xs text-gray-500 block">Email:</span>
              <span className="font-semibold text-xs sm:text-sm truncate block">{formData.email}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} className="text-amber-900 shrink-0" />
            <div className="min-w-0">
              <span className="text-xs text-gray-500 block">Phone/WhatsApp:</span>
              <span className="font-semibold text-xs sm:text-sm truncate block">{formData.phone}</span>
            </div>
          </div>

          {formData.country && (
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-amber-900 shrink-0" />
              <div className="min-w-0">
                <span className="text-xs text-gray-500 block">Country:</span>
                <span className="font-semibold text-xs sm:text-sm truncate block">{formData.country}</span>
              </div>
            </div>
          )}
        </div>

        {formData.specialRequests && (
          <div className="pt-2 border-t border-black/5">
            <span className="text-xs text-gray-500 block">Special Requests & Notes:</span>
            <p className="text-xs text-gray-700 italic mt-0.5">{formData.specialRequests}</p>
          </div>
        )}
      </div>

      {/* Trust Badges Bar */}
      <div className="bg-amber-950/5 border border-amber-900/20 p-4 rounded-xl space-y-2">
        <div className="flex items-center gap-1.5 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck size={16} /> Ndito Travel Guarantees
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-gray-700 font-medium">
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-700 shrink-0" /> Free Consultation</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-700 shrink-0" /> Fast 24-hr Quote</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-700 shrink-0" /> 100% Tailor-made</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-700 shrink-0" /> Licensed Arusha Guide</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 flex flex-col-reverse sm:flex-row justify-between gap-3">
        <Button ariaLabel="Go back to Step 2" onClick={onBack} variant="secondary" size="md" disabled={isSubmitting}>
          &larr; BACK
        </Button>
        <Button
          ariaLabel="Submit final booking request"
          onClick={onSubmit}
          disabled={isSubmitting}
          size="md"
          className="bg-emerald-800 hover:bg-emerald-900 text-white shadow-md"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 size={18} className="animate-spin" /> SUBMITTING TO FIREBASE...
            </span>
          ) : (
            "CONFIRM & SUBMIT REQUEST \u2192"
          )}
        </Button>
      </div>
    </div>
  );
}
