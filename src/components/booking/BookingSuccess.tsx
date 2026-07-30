"use client";

import Link from "next/link";
import { CheckCircle2, ShieldCheck, Compass, MessageCircle } from "lucide-react";
import localFont from "next/font/local";
import { BookingFormData } from "@/lib/bookingSchema";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

interface BookingSuccessProps {
  bookingId: string | null;
  formData?: BookingFormData;
}

export function BookingSuccess({ bookingId, formData }: BookingSuccessProps) {
  const getWhatsAppMessage = () => {
    let msg = `Jambo Ndito Travel! I just submitted a booking request online.\n\n`;
    if (bookingId) msg += `📌 Reference ID: ${bookingId}\n`;
    if (formData) {
      msg += `👤 Name: ${formData.fullName}\n`;
      if (formData.bookingMode === "package") {
        msg += `🗺️ Package: ${formData.packageSlug || "Safari Package"}\n`;
      } else {
        msg += `🎯 Trip Focus: ${formData.customItinerary.tripCategory.toUpperCase()}\n`;
        if (formData.customItinerary.destinations.length > 0) {
          msg += `📍 Destinations: ${formData.customItinerary.destinations.join(", ")}\n`;
        }
        if (formData.customItinerary.kilimanjaroRoute) {
          msg += `🏔️ Route: ${formData.customItinerary.kilimanjaroRoute}\n`;
        }
      }
      msg += `👥 Travelers: ${formData.groupSize}\n`;
      msg += `📅 Date: ${formData.flexibleDates ? "Flexible" : formData.travelDate || "TBD"}\n`;
    }
    msg += `\nI would love to connect with a safari specialist!`;
    return encodeURIComponent(msg);
  };

  const whatsappUrl = `https://wa.me/255658883554?text=${getWhatsAppMessage()}`;

  return (
    <div className="bg-[#f6f2ee] p-8 sm:p-12 rounded-2xl border border-black/5 shadow-xl text-center max-w-xl mx-auto space-y-6">
      {/* Animated Check Icon */}
      <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
        <CheckCircle2 size={48} className="stroke-[2.5]" />
      </div>

      <div>
        <span className="text-xs uppercase tracking-widest font-bold text-amber-900 block mb-1">
          Request Successfully Saved
        </span>
        <h2 className={`text-2xl sm:text-3xl font-bold text-gray-900 ${LoubagMedium.className}`}>
          Asante Sana! (Thank You!)
        </h2>
        {bookingId && (
          <p className="text-xs font-mono bg-white/90 border border-black/10 inline-block px-3.5 py-1.5 rounded-lg mt-2 text-gray-800 shadow-2xs">
            Booking Reference ID: <strong className="text-amber-900">{bookingId}</strong>
          </p>
        )}
      </div>

      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
        Your booking request has been securely recorded into our system. Our native Tanzanian experts in Arusha are reviewing your preferences and crafting your customized proposal.
      </p>

      {/* Trust Timeline */}
      <div className="bg-white/80 p-5 rounded-xl border border-black/5 text-left space-y-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-amber-900 font-bold uppercase tracking-wider text-xs border-b border-black/5 pb-2">
          <ShieldCheck size={16} />
          What Happens Next?
        </div>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-2.5">
            <span className="bg-amber-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
            <span>We check 4x4 land cruiser &amp; lodge availability for your dates.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="bg-amber-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
            <span>You&apos;ll receive a detailed email &amp; proposal within <strong>24 hours</strong>.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="bg-amber-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
            <span>Refine your itinerary with your personal guide until it&apos;s 100% perfect.</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold py-3.5 px-6 rounded-xl transition-all shadow-md"
        >
          <MessageCircle size={18} />
          Chat on WhatsApp with Reference
        </a>
        <Link
          href="/safaris"
          className="inline-flex items-center justify-center gap-2 bg-[#231f20] hover:bg-black text-white text-sm font-semibold py-3.5 px-6 rounded-xl transition-all shadow-xs"
        >
          <Compass size={18} />
          Explore More Safaris
        </Link>
      </div>
    </div>
  );
}
