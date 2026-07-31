"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "../shared/button";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

interface SafariHeroProps {
  photoSrc: string;
  heading: string;
  subheading: string;
  showYear?: boolean;
}

export default function SafariHero({
  photoSrc,
  heading,
  subheading,
  showYear = false,
}: SafariHeroProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative w-full min-h-[340px] sm:min-h-[400px] md:h-[500px] my-6 md:my-10 rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={photoSrc}
        alt={heading}
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 backdrop-brightness-90" />

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1
            className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight drop-shadow-md ${LoubagMedium.className}`}
          >
            {heading} {showYear ? currentYear : ""}
          </h1>
          <p
            className={`text-white/90 text-base sm:text-lg md:text-2xl mt-4 mb-8 max-w-2xl mx-auto drop-shadow-xs ${AgrandirRegular.className}`}
          >
            {subheading}
          </p>
          <Button
            href="https://wa.me/255658883554"
            external
            ariaLabel="Chat on WhatsApp to plan trip"
            variant="secondary"
            size="lg"
            className="shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="tracking-wider">CHAT ON WHATSAPP</span>
              <Image
                src="/icons/whatsapp.png"
                alt=""
                width={22}
                height={22}
                aria-hidden="true"
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}