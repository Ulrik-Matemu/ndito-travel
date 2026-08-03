"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, ChevronRight } from "lucide-react";
import { ExpressBookingModal } from "@/components/booking/ExpressBookingModal";
import { type RouteInfo } from "@/data/kilimanjaroRoutes";

interface RouteDetailClientProps {
  route: RouteInfo;
}

export function RouteDetailClient({ route }: RouteDetailClientProps) {
  const [isExpressModalOpen, setIsExpressModalOpen] = useState(false);

  return (
    <div className="h-full flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
          Route Itinerary Path
        </h4>
        <p className="text-xs text-gray-600 font-mono leading-relaxed bg-gray-50 p-4 rounded-xl border border-black/5">
          {route.itinerarySummary}
        </p>
      </div>

      <div className="space-y-3 pt-6 border-t border-black/5">
        <button
          type="button"
          onClick={() => setIsExpressModalOpen(true)}
          className="w-full bg-amber-950 hover:bg-amber-900 text-white font-bold py-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-sm cursor-pointer"
        >
          <Zap size={16} className="text-amber-400 fill-amber-400" />
          Quick Route Inquiry
        </button>
        <Link
          href={`/book?intent=kilimanjaro&route=${encodeURIComponent(route.name)}`}
          className="w-full bg-amber-900 hover:bg-amber-950 text-white font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
        >
          Book {route.name} Trek
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>

      <ExpressBookingModal
        isOpen={isExpressModalOpen}
        onClose={() => setIsExpressModalOpen(false)}
        title={`Inquire About ${route.name} Trek`}
        contextSubject={`${route.name} Kilimanjaro Trek`}
      />
    </div>
  );
}
