"use client";

import { useState } from "react";
import { Button } from "@/components/shared/button";
import { ExpressBookingModal } from "@/components/booking/ExpressBookingModal";
import { Zap } from "lucide-react";

interface DestinationBookingCTAProps {
  destinationSlug: string;
  destinationName: string;
  /** "dark" (default) for use on light/cream backgrounds, "light" for dark backgrounds like the final CTA band. */
  variant?: "dark" | "light";
}

export function DestinationBookingCTA({
  destinationSlug,
  destinationName,
  variant = "dark",
}: DestinationBookingCTAProps) {
  const [isExpressModalOpen, setIsExpressModalOpen] = useState(false);
  const isLight = variant === "light";

  return (
    <>
      <div
        className={`mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isLight ? "border-t border-white/15 sm:justify-center" : "border-t border-black/10"
        }`}
      >
        {!isLight && (
          <div>
            <p className="text-sm font-bold text-gray-100">
              Interested in visiting {destinationName}?
            </p>
            <p className="text-xs text-gray-300">
              Include {destinationName} in your custom safari itinerary or send a quick 60-second inquiry.
            </p>
          </div>
        )}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto shrink-0">
          <Button
            href={`/book?intent=destination&destination=${destinationSlug}`}
            ariaLabel={`Plan custom safari to ${destinationName}`}
            size="md"
          >
            Plan Safari to {destinationName} &rarr;
          </Button>
          <button
            type="button"
            onClick={() => setIsExpressModalOpen(true)}
            className={`w-full sm:w-auto font-bold px-4 py-2.5 rounded-xl transition-all shadow-xs text-xs flex items-center border justify-center gap-1.5 ${
              isLight
                ? "bg-white text-amber-950 hover:bg-amber-50"
                : "bg-amber-950 hover:bg-amber-900 text-white"
            }`}
          >
            <Zap size={14} className={isLight ? "text-amber-600 fill-amber-600" : "text-amber-400 fill-amber-400"} />
            Quick 60-Sec Inquiry
          </button>
          <a
            href={`https://wa.me/255658883554?text=${encodeURIComponent(
              `Hi Ndito Travel! I want to visit ${destinationName}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-semibold underline ${
              isLight ? "text-green-100 hover:text-white" : "text-amber-900 hover:text-black"
            }`}
          >
            Or chat on WhatsApp
          </a>
        </div>
      </div>

      <ExpressBookingModal
        isOpen={isExpressModalOpen}
        onClose={() => setIsExpressModalOpen(false)}
        title={`Inquire About ${destinationName}`}
        contextSubject={destinationName}
      />
    </>
  );
}