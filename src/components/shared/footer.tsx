"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Instagram, Facebook, Phone, Mail, CheckCircle2 } from "lucide-react";
import { trackContactClick } from "@/lib/analytics";
import { openCookiePreferences } from "@/components/analytics/CookieConsent";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="w-full bg-[#1c1917] text-white pt-12 md:pt-16 pb-8 px-4 sm:px-6 lg:px-12 mt-16 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">
        
        {/* Left Vertical Photo Poster (Desktop / Tablet) */}
        <div className="hidden md:block relative w-64 lg:w-80 min-h-[520px] rounded-3xl overflow-hidden shadow-2xl shrink-0 border border-white/10 group">
          <Image
            src="/photos/giraffe-d.jpg"
            alt="Ndito Travel Tanzanian Safari Landscape"
            fill
            sizes="(max-width: 1024px) 256px, 320px"
            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
           
            <h3 className={`text-xl lg:text-sm font-bold leading-tight ${LoubagMedium.className}`}>
              Unforgettable Wild Safaris &amp; Islands
            </h3>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex-1 flex flex-col justify-between space-y-10">
          
          {/* Top 4 Directory Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column 1: NDITO TRAVEL */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
                NDITO TRAVEL
              </h4>
              <ul className={`space-y-2.5 text-sm text-gray-300 ${AgrandirRegular.className}`}>
                <li>
                  <Link href="/about" className="hover:text-amber-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/safaris" className="hover:text-amber-400 transition-colors">
                    Our Safaris
                  </Link>
                </li>
                <li>
                  <Link href="/discover-tanzania" className="hover:text-amber-400 transition-colors">
                    Discover Tanzania
                  </Link>
                </li>
                <li>
                  <Link href="/kilimanjaro" className="hover:text-amber-400 transition-colors">
                    Mount Kilimanjaro
                  </Link>
                </li>
                <li>
                  <Link href="/zanzibar" className="hover:text-amber-400 transition-colors">
                    Zanzibar Beaches
                  </Link>
                </li>
                <li>
                  <Link href="/book" className="hover:text-amber-400 transition-colors">
                    Book A Trip
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: DESTINATIONS */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
                DESTINATIONS
              </h4>
              <ul className={`space-y-2.5 text-sm text-gray-300 ${AgrandirRegular.className}`}>
                <li>
                  <Link href="/destinations/serengeti-national-park" className="hover:text-amber-400 transition-colors">
                    Serengeti National Park
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/ngorongoro-crater" className="hover:text-amber-400 transition-colors">
                    Ngorongoro Crater
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/tarangire-national-park" className="hover:text-amber-400 transition-colors">
                    Tarangire Park
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/lake-manyara-national-park" className="hover:text-amber-400 transition-colors">
                    Lake Manyara
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/nungwi-beach-zanzibar" className="hover:text-amber-400 transition-colors">
                    Nungwi &amp; Paje Beaches
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: EXPERIENCES */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
                EXPERIENCES
              </h4>
              <ul className={`space-y-2.5 text-sm text-gray-300 ${AgrandirRegular.className}`}>
                <li>
                  <Link href="/experiences/big-five-game-drives" className="hover:text-amber-400 transition-colors">
                    Big Five Game Drives
                  </Link>
                </li>
                <li>
                  <Link href="/experiences/hot-air-balloon-safaris" className="hover:text-amber-400 transition-colors">
                    Hot Air Balloon Safaris
                  </Link>
                </li>
                <li>
                  <Link href="/experiences/maasai-cultural-tours" className="hover:text-amber-400 transition-colors">
                    Maasai Cultural Tours
                  </Link>
                </li>
                <li>
                  <Link href="/experiences/chimpanzee-trekking" className="hover:text-amber-400 transition-colors">
                    Chimpanzee Trekking
                  </Link>
                </li>
                <li>
                  <Link href="/experiences/zanzibar-spice-tours" className="hover:text-amber-400 transition-colors">
                    Zanzibar Spice Tours
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: CONTACT & HELP */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
                RESOURCES
              </h4>
              <ul className={`space-y-2.5 text-sm text-gray-300 ${AgrandirRegular.className}`}>
                <li>
                  <Link href="/articles" className="hover:text-amber-400 transition-colors">
                    Travel Articles &amp; Guides
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-amber-400 transition-colors">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <a href="tel:+255744903927" className="hover:text-amber-400 transition-colors">
                    +255 658 883 554
                  </a>
                </li>
                <li>
                  <a href="mailto:office@nditotravel.co.tz" className="hover:text-amber-400 transition-colors">
                    office@nditotravel.co.tz
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">Arusha, Tanzania</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Social Icons & Newsletter Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end pt-6 border-t border-white/10">
            
            {/* Social Media Buttons */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
                CONNECT WITH US
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/p/Ndito-Travel-100083375855257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ndito Travel Facebook page"
                  className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-amber-400 hover:scale-110 transition-all shadow-md"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/nditotravel/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ndito Travel Instagram page"
                  className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-amber-400 hover:scale-110 transition-all shadow-md"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://wa.me/255744903927"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackContactClick("whatsapp", "footer")}
                  aria-label="Chat on WhatsApp with Ndito Travel"
                  className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-amber-400 hover:scale-110 transition-all shadow-md"
                >
                  <Phone size={18} />
                </a>
                <a
                  href="mailto:office@nditotravel.co.tz"
                  onClick={() => trackContactClick("email", "footer")}
                  aria-label="Email Ndito Travel"
                  className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-amber-400 hover:scale-110 transition-all shadow-md"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://share.google/OtFBIRdxriIEmnjDI"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ndito Travel Google Reviews"
                  className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-amber-400 hover:scale-110 transition-all shadow-md"
                >
                  <Image src="/icons/search.png" alt="Google" width={18} height={18} />
                </a>
                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g297913-d25567874-Reviews-Ndito_Travel-Arusha_Arusha_Region.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ndito Travel TripAdvisor Reviews"
                  className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-amber-400 hover:scale-110 transition-all shadow-md"
                >
                  <Image src="/icons/tripadvisor.png" alt="TripAdvisor" width={18} height={18} />
                </a>
              </div>
            </div>

            {/* Newsletter Pill Input */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
                NEWSLETTER
              </h4>
              <form onSubmit={handleSubscribe} className="relative">
                <div className="bg-[#f6f2ee] rounded-full p-1.5 pl-5 flex items-center shadow-md max-w-md border border-white/20">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className={`bg-transparent text-gray-900 placeholder:text-gray-500 border-none outline-none text-sm w-full pr-2 ${AgrandirRegular.className}`}
                  />
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-600 text-black font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider shrink-0 transition-colors shadow-xs cursor-pointer"
                  >
                    SUBSCRIBE
                  </button>
                </div>
                {subscribed && (
                  <p className="text-xs text-amber-400 font-medium mt-2 flex items-center gap-1.5">
                    <CheckCircle2 size={14} /> Thank you for subscribing! We&apos;ll send safari updates to your email.
                  </p>
                )}
              </form>
              <p className={`text-xs text-gray-400 mt-2 ${AgrandirRegular.className}`}>
                We care about protecting your data. Read our <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>.
              </p>
            </div>

          </div>

          {/* Bottom Legal Line */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
            <p className={AgrandirRegular.className}>
              &copy; {new Date().getFullYear()} Ndito Travel. Crafting authentic African journeys.
            </p>
            <div className="flex gap-6 font-medium">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <button
                type="button"
                onClick={openCookiePreferences}
                className="hover:text-white transition-colors underline cursor-pointer"
              >
                Cookie Preferences
              </button>
              <Link href="/book" className="hover:text-white transition-colors">
                Booking Terms
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}