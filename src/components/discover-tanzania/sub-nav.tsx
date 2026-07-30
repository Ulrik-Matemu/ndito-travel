"use client";

import { useState, useEffect } from "react";
import { Compass, Sparkles, MapPin, Users, Building2, Calendar } from "lucide-react";
import localFont from "next/font/local";

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

const navItems = [
  { id: "overview", label: "Overview", icon: Compass },
  { id: "circuits", label: "Safari Circuits", icon: MapPin },
  { id: "facts", label: "World Firsts", icon: Sparkles },
  { id: "culture", label: "Culture & Tribes", icon: Users },
  { id: "hubs", label: "Urban & Coastal Hubs", icon: Building2 },
  { id: "seasons", label: "Best Season Guide", icon: Calendar },
];

export const DiscoverSubNav = () => {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);

      const sectionIds = navItems.map((item) => item.id);
      for (const id of sectionIds.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div
      className={`sticky top-16 z-40 w-full transition-all duration-300 ${
        isSticky
          ? "bg-[#e8dfd7]/90 backdrop-blur-md shadow-md border-b border-black/10 py-2.5"
          : "bg-[#e8dfd7]/60 backdrop-blur-xs py-2 border-b border-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className={`flex items-center justify-start md:justify-center gap-2 md:gap-4 min-w-max text-xs md:text-sm ${AgrandirBold.className}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-2 rounded-xl transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? "bg-amber-900 text-white shadow-xs font-extrabold"
                    : "text-gray-800 hover:bg-amber-900/10 hover:text-black font-semibold"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-300" : "text-amber-900"}`} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
