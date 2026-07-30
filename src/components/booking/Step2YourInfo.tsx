"use client";

import { BookingFormData, ValidationErrors } from "@/lib/bookingSchema";
import { Button } from "@/components/shared/button";
import { User, Mail, Phone, MessageSquare, Globe, MessageCircle } from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

interface Step2Props {
  formData: BookingFormData;
  onChange: (fields: Partial<BookingFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  errors: ValidationErrors;
}

export function Step2YourInfo({ formData, onChange, onNext, onBack, errors }: Step2Props) {
  return (
    <div className="bg-[#f6f2ee] p-6 sm:p-8 rounded-2xl border border-black/5 shadow-lg space-y-6">
      <div className="border-b border-black/10 pb-4">
        <h2 className={`text-xl sm:text-2xl font-bold text-gray-900 ${LoubagMedium.className}`}>
          Step 2: Your Contact Information
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Where should our Tanzanian safari specialists send your personalized itinerary & quote?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1 sm:col-span-2">
          <label htmlFor="full-name" className="block text-xs uppercase tracking-wider font-bold text-gray-700">
            Full Name <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="full-name"
              placeholder="e.g. Jane Doe"
              value={formData.fullName}
              onChange={(e) => onChange({ fullName: e.target.value })}
              className={`w-full bg-white/90 border rounded-xl px-4 py-3 pl-10 text-sm text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none transition-all ${
                errors.fullName ? "border-rose-500" : "border-black/10"
              }`}
            />
            <User size={18} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
          </div>
          {errors.fullName && (
            <p role="alert" className="text-xs text-rose-600 font-semibold mt-1">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-xs uppercase tracking-wider font-bold text-gray-700">
            Email Address <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="e.g. jane@example.com"
              value={formData.email}
              onChange={(e) => onChange({ email: e.target.value })}
              className={`w-full bg-white/90 border rounded-xl px-4 py-3 pl-10 text-sm text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none transition-all ${
                errors.email ? "border-rose-500" : "border-black/10"
              }`}
            />
            <Mail size={18} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
          </div>
          {errors.email && (
            <p role="alert" className="text-xs text-rose-600 font-semibold mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone / WhatsApp Number */}
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-bold text-gray-700">
            Phone / WhatsApp Number <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              placeholder="e.g. +1 555 123 4567"
              value={formData.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              className={`w-full bg-white/90 border rounded-xl px-4 py-3 pl-10 text-sm text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none transition-all ${
                errors.phone ? "border-rose-500" : "border-black/10"
              }`}
            />
            <Phone size={18} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
          </div>
          {errors.phone && (
            <p role="alert" className="text-xs text-rose-600 font-semibold mt-1">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Country & Contact Preference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="country" className="block text-xs uppercase tracking-wider font-bold text-gray-700">
            Country of Residence
          </label>
          <div className="relative">
            <input
              type="text"
              id="country"
              placeholder="e.g. United States, Germany, UK"
              value={formData.country}
              onChange={(e) => onChange({ country: e.target.value })}
              className="w-full bg-white/90 border border-black/10 rounded-xl px-4 py-3 pl-10 text-sm text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none transition-all"
            />
            <Globe size={18} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-xs uppercase tracking-wider font-bold text-gray-700">
            Preferred Way to Connect
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
              { id: "email", label: "Email", icon: Mail },
              { id: "phone", label: "Call", icon: Phone },
            ].map((pref) => {
              const Icon = pref.icon;
              const isSelected = formData.contactPreference === pref.id;
              return (
                <button
                  key={pref.id}
                  type="button"
                  onClick={() => onChange({ contactPreference: pref.id as "whatsapp" | "email" | "phone" })}
                  className={`py-2.5 px-2 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    isSelected
                      ? "bg-amber-900 text-white border-amber-900"
                      : "bg-white text-gray-700 border-black/10 hover:bg-[#f6f2ee]"
                  }`}
                >
                  <Icon size={14} />
                  <span>{pref.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Special Requests / Notes */}
      <div className="space-y-1">
        <label htmlFor="special-requests" className="block text-xs uppercase tracking-wider font-bold text-gray-700">
          Special Requests or Trip Notes (Optional)
        </label>
        <div className="relative">
          <textarea
            id="special-requests"
            rows={3}
            placeholder="Tell us about any specific preferences, dietary needs, child ages, or celebration plans..."
            value={formData.specialRequests}
            onChange={(e) => onChange({ specialRequests: e.target.value })}
            className="w-full bg-white/90 border border-black/10 rounded-xl px-4 py-3 pl-10 text-sm text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none transition-all"
          />
          <MessageSquare size={18} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Buttons */}
      <div className="pt-4 flex flex-col-reverse sm:flex-row justify-between gap-3">
        <Button ariaLabel="Go back to Step 1" onClick={onBack} variant="secondary" size="md">
          &larr; BACK
        </Button>
        <Button ariaLabel="Continue to review" onClick={onNext} size="md">
          REVIEW & CONFIRM &rarr;
        </Button>
      </div>
    </div>
  );
}
