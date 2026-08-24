"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

export const LanguageSwitcher = ({ isTransparent }: { isTransparent?: boolean }) => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  const handleSelect = (nextLocale: string) => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const hasPrefix = languages.some((l) => currentPath.startsWith(`/${l.code}`));
      let newPath = currentPath;
      if (hasPrefix) {
        newPath = `/${nextLocale}${currentPath.replace(/^\/[a-z]{2}/, "")}`;
      } else {
        newPath = `/${nextLocale}${currentPath === "/" ? "" : currentPath}`;
      }
      window.location.href = newPath;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none ${
          isTransparent
            ? "text-white hover:bg-white/10"
            : "text-gray-900 hover:bg-black/5"
        }`}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="uppercase">{currentLang.code}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 ltr:right-0 rtl:left-0 mt-1 w-36 bg-[#f6f2ee] text-gray-900 shadow-xl rounded-xl border border-black/10 p-1.5 z-50 flex flex-col gap-0.5"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center justify-between w-full px-3 py-1.5 text-xs rounded-lg transition-colors text-left ${
                  lang.code === locale
                    ? "bg-amber-900 text-white font-bold"
                    : "hover:bg-[#eae3dc] text-gray-800"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
