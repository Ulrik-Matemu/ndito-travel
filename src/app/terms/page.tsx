import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";
import localFont from "next/font/local";
import { FileText } from "lucide-react";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const metadata: Metadata = {
  title: "Terms of Service & Booking Conditions | Ndito Travel",
  description:
    "Terms of Service and booking conditions for Ndito Travel Tanzania. Review deposit terms, safari cancellation policies, and park entry rules.",
  alternates: {
    canonical: "https://nditotravel.co.tz/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
        <div className="mb-10 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2 flex items-center justify-center gap-1.5">
            <FileText size={16} /> ● TERMS &amp; CONDITIONS
          </span>
          <h1
            className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${LoubagMedium.className}`}
          >
            Terms of Service
          </h1>
          <p className={`text-sm text-gray-600 ${AgrandirRegular.className}`}>
            Last updated: July 30, 2026
          </p>
        </div>

        <div className={`bg-[#f6f2ee] p-6 sm:p-10 rounded-2xl border border-black/5 shadow-xs space-y-8 text-gray-800 leading-relaxed text-sm sm:text-base ${AgrandirRegular.className}`}>
          <section className="space-y-3">
            <h2 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
              1. Safari &amp; Trekking Bookings
            </h2>
            <p>
              By booking a tour, safari, or trekking package with Ndito Travel, you agree to the itinerary details, pricing quote, and payment terms provided in your official trip reservation confirmation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
              2. Deposit &amp; Payment Schedules
            </h2>
            <p>
              Initial inquiry quotes carry no fee or obligation. To confirm a booking, a deposit of 20% to 30% is required to reserve hotel accommodations, park permits, and safari vehicles. The remaining balance is payable prior to or upon arrival in Arusha in USD or by bank wire transfer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
              3. Cancellations &amp; Refund Policy
            </h2>
            <p>
              Cancellations received 60+ days prior to departure receive a full refund minus non-refundable park permits or lodge deposits. Cancellations made 30-59 days prior receive a 50% refund. We strongly advise all travelers to purchase comprehensive travel and emergency medical evacuation insurance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
              4. Travel Insurance &amp; Health Requirements
            </h2>
            <p>
              Travelers are responsible for securing adequate travel insurance covering trip cancellation, medical expenses, emergency evacuation, and loss of luggage. Trekkers ascending Mount Kilimanjaro must be in good physical health and follow the instructions of our certified expedition leaders.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
              5. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the United Republic of Tanzania.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
