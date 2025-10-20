"use client";

import React from "react";
import { notFound } from "next/navigation";
import { safariPackages } from "../../../data/safariTrips";
import { Navbar } from "@/components/shared/navbar";
import SafariHero from "@/components/safaris/hero";
import localFont from "next/font/local";



const AgrandirRegular = localFont({
    src: "../../../../public/fonts/Agrandir-Regular.otf",
});

export default function SafariPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params); // ✅ unwrap params Promise

  const safari = safariPackages.find((s) => s.slug === slug);
  if (!safari) return notFound();

  return (
    <>
    <div className="p-4 md:p-16 md:pb-0">
        <Navbar />
         <SafariHero photoSrc={safari.images[1]} heading={safari.duration} subheading="Tour Package by Ndito Travel" />
    </div>
    <main className="max-w-5xl mx-auto px-6 py-2">
      {/* Image Carousel */}

      {/* Basic Info */}
      <section className="mt-8">
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm md:text-md ${AgrandirRegular.className}`}>
          <div>
            <span className="font-semibold text-gray-800">Difficulty:</span>{" "}
            {safari.difficulty}
          </div>
          <div>
            <span className="font-semibold text-gray-800">Scenery:</span>{" "}
            {safari.scenery}
          </div>
          <div>
            <span className="font-semibold text-gray-800">Traffic:</span>{" "}
            {safari.traffic}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className={`mt-10 border-l-2 border-amber-600 pl-6 space-y-10 relative ${AgrandirRegular.className}`}>
        {safari.days.map((day, i) => (
          <div key={i} className="relative">
            <h2 className="text-lg font-semibold text-amber-700">{day.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{day.time}</p>
            <p className="text-gray-700 leading-relaxed">{day.description}</p>
            <p className="text-sm text-gray-600 mt-2 italic">
              {day.accommodation}
            </p>
            <p className="text-sm text-gray-600">{day.meals}</p>
          </div>
        ))}
      </section>

      {/* Included / Excluded */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-amber-800 mb-3">
            Included in Safari
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {safari.included.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-amber-800 mb-3">
            Excluded from Safari
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {safari.excluded.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-12 text-center border-t border-gray-200 pt-6 text-gray-500 text-sm">
        <p>End of Safari Service</p>
      </div>
    </main>
    </>
  );
}
