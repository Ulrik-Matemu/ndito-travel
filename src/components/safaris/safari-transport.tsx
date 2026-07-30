"use client";

import Image from "next/image";
import { Car, Plane, ShieldCheck, Wifi, BatteryCharging, Snowflake, Radio, Check } from "lucide-react";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const vehicleFeatures = [
  {
    icon: Car,
    title: "Pop-Up Roof for 360° Viewing",
    desc: "Every vehicle features a heavy-duty pop-up roof canopy providing unobstructed 360° views for wildlife photography.",
  },
  {
    icon: Snowflake,
    title: "On-Board Fridge & Cold Drinks",
    desc: "Equipped with electric refrigerators stocked daily with ice-cold drinking water, juices, and safari refreshments.",
  },
  {
    icon: BatteryCharging,
    title: "Camera & Phone Charging Outlets",
    desc: "Built-in 220V inverter power outlets and USB ports so your cameras, drones, and phones never run out of battery.",
  },
  {
    icon: Wifi,
    title: "In-Car High-Speed Wi-Fi",
    desc: "Stay connected with family and share real-time safari photos directly from the middle of the Serengeti.",
  },
  {
    icon: Radio,
    title: "Long-Range VHF Radio Communication",
    desc: "Connected directly to wildlife rangers and fellow guides to locate elusive predators (leopards, rhinos, wild dogs).",
  },
  {
    icon: ShieldCheck,
    title: "Heavy-Duty 4x4 Extended Chassis",
    desc: "High ground clearance and specialized off-road suspension engineered specifically for rough Tanzanian bush terrain.",
  },
];

export const SafariTransport = () => {
  return (
    <section className="py-16 md:py-24 bg-[#e8dfd7] rounded-3xl p-6 md:p-12 my-12 border border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            First-Class Transport
          </span>
          <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
            Ndito Travel Custom 4x4 Fleet & Bush Flights
          </h2>
          <p className={`mt-4 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
            Your comfort, safety, and photography vantage point depend directly on your safari vehicle. Discover Ndito Travel&apos;s custom-built 4x4 Toyota Land Cruisers and bush flight connections.
          </p>
        </div>

        {/* 4x4 Vehicle Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 relative h-[320px] md:h-[440px] rounded-3xl overflow-hidden shadow-lg border border-black/10">
            <Image
              src="/photos/ndito-travel-cars.webp"
              alt="Ndito Travel 4x4 Custom Toyota Land Cruiser Safari Vehicles"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="bg-amber-500 text-black font-extrabold text-xs uppercase px-3 py-1 rounded-full mb-2 inline-block">
                Guaranteed Window Seat
              </span>
              <h3 className={`text-2xl md:text-3xl font-bold ${LoubagMedium.className}`}>
                Custom 4x4 Toyota Land Cruisers
              </h3>
              <p className="text-xs md:text-sm text-amber-200 mt-1">
                Max 6 guests per vehicle — everyone gets an open-window seat!
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {vehicleFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="bg-[#f6f2ee] p-4 rounded-2xl border border-black/5 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 bg-amber-900 text-amber-300 rounded-xl flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className={`text-sm font-bold text-gray-900 mb-1 ${LoubagMedium.className}`}>
                      {feat.title}
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bush Flight Section */}
        <div className="bg-[#f6f2ee] rounded-3xl p-6 md:p-10 border border-black/10 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <Plane className="w-5 h-5 text-amber-900" />
              <span className="text-xs uppercase tracking-widest text-amber-900 font-bold">
                Fly-In Bush Safaris
              </span>
            </div>
            <h3 className={`text-2xl md:text-4xl text-gray-900 mb-4 ${LoubagMedium.className}`}>
              Seamless Flightlink Bush Plane Transfers
            </h3>
            <p className={`text-xs md:text-sm text-gray-700 leading-relaxed mb-6 ${AgrandirRegular.className}`}>
              Skip long bumpy road transfers by taking light aircraft bush flights directly into national park airstrips (Serengeti Seronera, Kogatende, Manyara, or Nyerere). Land right in the heart of wildlife and connect seamlessly to Zanzibar beaches.
            </p>

            <ul className="space-y-2 text-xs text-gray-800">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-900 shrink-0" />
                <span>Daily scheduled bush flights from Arusha (JRO/ARK) to Serengeti & Zanzibar</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-900 shrink-0" />
                <span>Breathtaking aerial views of the Great Rift Valley & crater highlands</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-900 shrink-0" />
                <span>Met upon landing by your private Ndito Travel Land Cruiser & driver-guide</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 relative h-[260px] md:h-[340px] rounded-2xl overflow-hidden shadow-sm border border-black/10">
            <Image
              src="/photos/new-images/fligh-tlink-plane-in-wildlife.png"
              alt="Flightlink Bush Plane Safari Transfer in Tanzania"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
