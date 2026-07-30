import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";
import localFont from "next/font/local";
import { ShieldCheck } from "lucide-react";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const metadata: Metadata = {
  title: "Privacy Policy | Ndito Travel",
  description:
    "Privacy Policy for Ndito Travel Tanzania. Learn how we collect, store, and protect your personal information when booking safaris.",
  alternates: {
    canonical: "https://nditotravel.co.tz/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
        <div className="mb-10 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2 flex items-center justify-center gap-1.5">
            <ShieldCheck size={16} /> ● LEGAL &amp; PRIVACY
          </span>
          <h1
            className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${LoubagMedium.className}`}
          >
            Privacy Policy
          </h1>
          <p className={`text-sm text-gray-600 ${AgrandirRegular.className}`}>
            Last updated: July 30, 2026
          </p>
        </div>

        <div className={`bg-[#f6f2ee] p-6 sm:p-10 rounded-2xl border border-black/5 shadow-xs space-y-8 text-gray-800 leading-relaxed text-sm sm:text-base ${AgrandirRegular.className}`}>
          <section className="space-y-3">
            <h2 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
              1. Information We Collect
            </h2>
            <p>
              When you submit an inquiry or booking form on Ndito Travel, we collect personal information necessary to plan your safari or Kilimanjaro climb, including your name, email address, phone number/WhatsApp contact, nationality, travel dates, and dietary or health requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
              2. How We Use Your Information
            </h2>
            <p>
              We use your information exclusively to provide customized itinerary quotes, secure hotel &amp; lodge reservations, purchase national park entry permits, and communicate trip logistics with you. We do NOT sell, rent, or trade your personal data to third-party marketers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
              3. Data Security &amp; Protection
            </h2>
            <p>
              We implement industry-standard administrative and electronic security measures to safeguard your data against unauthorized access. Booking inquiries and payment confirmation details are handled strictly between you and our authorized trip planning staff in Arusha.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
              4. Cookies &amp; Analytics
            </h2>
            <p>
              Our website uses basic session cookies and privacy-friendly analytics tools (Vercel Analytics and PostHog) to analyze website traffic and improve user experience. No sensitive financial information is tracked or stored via analytics.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
              5. Contact Us
            </h2>
            <p>
              If you have questions regarding this Privacy Policy, please contact our team at:
            </p>
            <p className="font-semibold text-gray-900">
              Email: office@nditotravel.co.tz<br />
              Phone/WhatsApp: +255 658 883 554<br />
              Address: Arusha, Tanzania
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
