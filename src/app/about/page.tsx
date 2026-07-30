import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/shared/navbar";
import { Button } from "@/components/shared/button";
import { JsonLd } from "@/components/seo/JsonLd";
import localFont from "next/font/local";
import { ShieldCheck, Heart, Car, CheckCircle2 } from "lucide-react";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const metadata: Metadata = {
  title: "About Us | Ethical Tanzania Tour Operator | Ndito Travel",
  description:
    "Learn about Ndito Travel, a local Tanzanian tour operator based in Arusha. Discover our KPAP ethical porter commitment, 4x4 safari vehicles, and expert driver-guides.",
  keywords: [
    "About Ndito Travel",
    "Arusha tour operator",
    "KPAP ethical safari company",
    "Tanzania local guides",
    "ethical Kilimanjaro operator",
  ],
  openGraph: {
    title: "About Us | Ethical Tanzania Tour Operator | Ndito Travel",
    description:
      "Learn about Ndito Travel, a local Tanzanian tour operator based in Arusha. Discover our KPAP ethical porter commitment, custom 4x4 vehicles, and expert guides.",
    url: "https://nditotravel.co.tz/about",
    images: [
      {
        url: "/photos/ndito-travel-cars.webp",
        width: 1200,
        height: 630,
        alt: "Ndito Travel safari vehicles in Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Ethical Tanzania Tour Operator | Ndito Travel",
    description:
      "Learn about Ndito Travel, a local Tanzanian tour operator based in Arusha.",
    images: ["/photos/ndito-travel-cars.webp"],
  },
  alternates: {
    canonical: "https://nditotravel.co.tz/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Ndito Travel",
          description:
            "Licensed Tanzanian tour operator specializing in wildlife safaris, Kilimanjaro climbs, and Zanzibar holidays.",
          url: "https://nditotravel.co.tz/about",
          mainEntity: {
            "@type": "TravelAgency",
            name: "Ndito Travel",
            url: "https://nditotravel.co.tz",
            telephone: "+255658883554",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Arusha",
              addressCountry: "TZ",
            },
          },
        }}
      />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
            ● BORN &amp; BASED IN ARUSHA, TANZANIA
          </span>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${LoubagMedium.className}`}
          >
            Crafting Authentic African Journeys
          </h1>
          <p
            className={`text-base sm:text-lg text-gray-700 leading-relaxed ${AgrandirRegular.className}`}
          >
            Ndito Travel is a licensed Tanzanian tour operator dedicated to showing you the wild heart of East Africa through the eyes of native experts.
          </p>
        </div>

        {/* Feature Banner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-black/5">
            <Image
              src="/photos/ndito-travel-cars.webp"
              alt="Ndito Travel 4x4 Land Cruisers"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-900">
              OUR MISSION &amp; VALUES
            </span>
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 ${LoubagMedium.className}`}
            >
              First-Hand Local Expertise, Zero Compromise on Safety
            </h2>
            <p className={`text-gray-700 text-sm sm:text-base leading-relaxed ${AgrandirRegular.className}`}>
              When you travel with Ndito Travel, you are not booking through a distant third-party agency. Our office is in Arusha, the gateway to Tanzania&apos;s famous Northern Safari Circuit. From your initial inquiry to your final airport drop-off, our team manages every detail directly.
            </p>
            <ul className={`space-y-2.5 text-sm text-gray-800 ${AgrandirRegular.className}`}>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-amber-900 shrink-0" />
                <span>100% Native Tanzanian driver-guides and mountain leaders</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-amber-900 shrink-0" />
                <span>KPAP-aligned ethical porter treatment &amp; fair wages</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-amber-900 shrink-0" />
                <span>Custom 4x4 Land Cruisers with pop-up roof hatches</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Core Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          {/* Pillar 1 */}
          <div className="bg-[#f6f2ee] p-6 sm:p-8 rounded-2xl border border-black/5 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-900 text-amber-300 flex items-center justify-center">
                <Car size={24} />
              </div>
              <h3 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                Custom 4x4 Safari Fleet
              </h3>
              <p className={`text-sm text-gray-700 leading-relaxed ${AgrandirRegular.className}`}>
                Our modified Toyota Land Cruisers feature heavy-duty suspension, 360° pop-up roof hatches for unobstructed photography, onboard mini-fridges, mobile charging outlets, and guaranteed window seats capped at 6 guests.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#f6f2ee] p-6 sm:p-8 rounded-2xl border border-black/5 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-900 text-amber-300 flex items-center justify-center">
                <Heart size={24} />
              </div>
              <h3 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                Ethical Porter Commitment
              </h3>
              <p className={`text-sm text-gray-700 leading-relaxed ${AgrandirRegular.className}`}>
                We proudly support ethical mountain tourism following KPAP principles. Every mountain porter receives fair wages, 3 warm meals daily, proper high-altitude sleeping gear, and a strict 20kg luggage limit.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#f6f2ee] p-6 sm:p-8 rounded-2xl border border-black/5 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-900 text-amber-300 flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <h3 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                Medical Safety Protocols
              </h3>
              <p className={`text-sm text-gray-700 leading-relaxed ${AgrandirRegular.className}`}>
                Kilimanjaro treks carry emergency bottled oxygen, pulse oximeters for twice-daily health checkups, and Wilderness First Responder (WFR) certified lead guides to monitor your pulse and oxygen saturation levels.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#231f20] text-white p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto shadow-2xl space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
            READY TO PLAN YOUR TRIP?
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold ${LoubagMedium.className}`}>
            Let&apos;s Build Your Custom Tanzania Itinerary
          </h2>
          <p className={`text-sm sm:text-base text-gray-300 max-w-xl mx-auto ${AgrandirRegular.className}`}>
            No upfront fees. Tell us your travel dates, group size, and dream destinations—our Arusha team will send a tailored quote within 24 hours.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button href="/book" ariaLabel="Start planning" variant="secondary" size="md">
              START PLANNING ONLINE &rarr;
            </Button>
            <Button
              href="https://wa.me/255658883554"
              external
              ariaLabel="Chat on WhatsApp"
              variant="tertiary"
              size="md"
              className="text-white hover:bg-white/10 border-white/20"
            >
              CHAT ON WHATSAPP
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
