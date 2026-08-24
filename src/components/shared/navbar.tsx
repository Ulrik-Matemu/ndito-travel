"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import { safariDestinations } from "@/data/destinations";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "next-intl";


const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSafarisDropdown, setShowSafarisDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const lastScrollRef = useRef(0);
  const pathname = usePathname();

  const isHomepage = pathname === "/";
  const isNgorongoroPage = pathname === "/ngorongoro-crater";
  const isArabicHomePage = pathname === "/ar"

  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 80);

      if (currentScroll > lastScrollRef.current && currentScroll > 80) {
        setShowNavbar(false);
        setShowSafarisDropdown(false);
        setShowResourcesDropdown(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollRef.current = currentScroll;
    };

    // Initial check
    setIsScrolled(window.scrollY > 80);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key to close mobile menu & dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setShowSafarisDropdown(false);
        setShowResourcesDropdown(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const mainNavLinks = [
    { href: "/ngorongoro-crater", label: t("ngorongoro") },
    { href: "/climbing-kilimanjaro", label: t("kilimanjaro") },
    { href: "/zanzibar", label: t("zanzibar") },
    { href: "/discover-tanzania", label: t("discover-tanzania") },
  ];

  const mobileNavLinks = [
    { href: "/tanzania-safaris", label: t("safaris") },
    { href: "/climbing-kilimanjaro", label: t("kilimanjaro") },
    { href: "/zanzibar", label: t("zanzibar") },
    { href: "/discover-tanzania", label: t("discover-tanzania") },
    { href: "/articles", label: t("articles") },
    { href: "/faq", label: t("faq") },
    { href: "/about", label: t("about") },
  ];

  const isResourcesActive =
    pathname === "/articles" ||
    pathname.startsWith("/articles/") ||
    pathname === "/faq" ||
    pathname === "/about";

  const isTransparent = (isHomepage || isNgorongoroPage || isArabicHomePage) && !isScrolled;


  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-3 left-4 right-4 rounded-xl z-[60] px-4 md:px-12 py-3 transition-all duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        isTransparent
          ? "bg-transparent backdrop-blur-none border-b border-transparent shadow-none"
          : "bg-[#e8dfd7]/95 backdrop-blur-md shadow-xs border-b border-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Logo variant={isTransparent ? "light" : "dark"} />

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center justify-center gap-6 lg:gap-6 text-sm lg:text-xs ${AgrandirBold.className}`}
        >
          {/* SAFARIS with mega dropdown */}
          <li
            className="relative py-2 rounded-xl"
            onMouseEnter={() => setShowSafarisDropdown(true)}
            onMouseLeave={() => setShowSafarisDropdown(false)}
          >
            <div className="flex items-center gap-1 group cursor-pointer rounded-xl">
              <Link
                href="/tanzania-safaris"
                className={`py-1 border-b-2 transition-all ${
                  pathname === "/tanzania-safaris" || pathname.startsWith("/destinations")
                    ? isTransparent
                      ? "border-amber-400 font-extrabold text-amber-400"
                      : "border-black font-extrabold text-black"
                    : isTransparent
                    ? "border-transparent text-white hover:border-white hover:text-amber-300"
                    : "border-transparent text-gray-900 hover:border-black hover:text-black"
                } focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none rounded-xs`}
              >
               {t("safaris")}
              </Link>
              <button
                type="button"
                onClick={() => setShowSafarisDropdown((prev) => !prev)}
                aria-expanded={showSafarisDropdown}
                aria-haspopup="true"
                aria-label="Toggle Safaris destinations menu"
                className={`p-1 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none rounded-xs ${
                  isTransparent ? "text-white hover:text-amber-300" : "text-gray-900 hover:text-black"
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showSafarisDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Mega dropdown */}
            <AnimatePresence>
              {showSafarisDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="fixed left-0 right-0 top-[60px] w-full bg-[#f6f2ee] rounded-xl text-gray-900 shadow-xl border-t border-b border-black/10 py-8 px-8 md:px-16 z-50 max-h-[75vh] overflow-y-auto"
                >
                  <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-6 pb-2 border-b border-black/10">
                      <h3 className="text-xs uppercase tracking-widest text-amber-900 font-bold">
                        {t("topSafariDestinations")}
                      </h3>
                      <Link
                        href="/tanzania-safaris"
                        onClick={() => setShowSafarisDropdown(false)}
                        className="text-xs font-bold text-gray-700 hover:text-black underline"
                      >
                        {t("viewAllSafaris")}
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {safariDestinations.map((dest) => (
                        <Link
                          key={dest.slug}
                          href={`/en/destinations/${dest.slug}`}
                          onClick={() => setShowSafarisDropdown(false)}
                          className="group flex flex-col p-2.5 rounded-lg hover:bg-[#eae3dc] transition-colors focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
                        >
                          <span className="text-base font-semibold group-hover:text-amber-900 group-hover:underline transition-colors text-gray-900">
                            {dest.name}
                          </span>
                          <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                            {dest.shortDescription}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="py-2">
                <Link
                  href={link.href}
                  className={`py-1 border-b-2 transition-all ${
                    isActive
                      ? isTransparent
                        ? "border-amber-400 font-extrabold text-amber-400"
                        : "border-black font-extrabold text-black"
                      : isTransparent
                      ? "border-transparent text-white hover:border-white hover:text-amber-300"
                      : "border-transparent text-gray-900 hover:border-black hover:text-black"
                  } focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none rounded-xs`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          {/* RESOURCES dropdown */}
          <li
            className="relative py-2"
            onMouseEnter={() => setShowResourcesDropdown(true)}
            onMouseLeave={() => setShowResourcesDropdown(false)}
          >
            <div className="flex items-center gap-1 group cursor-pointer">
              <span
                className={`py-1 border-b-2 transition-all ${
                  isResourcesActive
                    ? isTransparent
                      ? "border-amber-400 font-extrabold text-amber-400"
                      : "border-black font-extrabold text-black"
                    : isTransparent
                    ? "border-transparent text-white hover:border-white hover:text-amber-300"
                    : "border-transparent text-gray-900 hover:border-black hover:text-black"
                }`}
              >
                {t("resources")}
              </span>
              <button
                type="button"
                onClick={() => setShowResourcesDropdown((prev) => !prev)}
                aria-expanded={showResourcesDropdown}
                aria-haspopup="true"
                aria-label="Toggle resources menu"
                className={`p-1 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none rounded-xs ${
                  isTransparent ? "text-white hover:text-amber-300" : "text-gray-900 hover:text-black"
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showResourcesDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <AnimatePresence>
              {showResourcesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 w-64 bg-[#f6f2ee] text-gray-900 shadow-xl rounded-xl border border-black/10 p-3 z-50 flex flex-col gap-1"
                >
                  <Link
                    href="/articles"
                    onClick={() => setShowResourcesDropdown(false)}
                    className="group flex flex-col p-2.5 rounded-lg hover:bg-[#eae3dc] transition-colors"
                  >
                    <span className="text-sm font-bold text-gray-900 group-hover:text-amber-900">
                      {t("articles")}
                    </span>
                    <span className="text-xs text-gray-600">{t("articlesSub")}</span>
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setShowResourcesDropdown(false)}
                    className="group flex flex-col p-2.5 rounded-lg hover:bg-[#eae3dc] transition-colors"
                  >
                    <span className="text-sm font-bold text-gray-900 group-hover:text-amber-900">
                      {t("faq")}
                    </span>
                    <span className="text-xs text-gray-600">{t("faqSub")}</span>
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setShowResourcesDropdown(false)}
                    className="group flex flex-col p-2.5 rounded-lg hover:bg-[#eae3dc] transition-colors"
                  >
                    <span className="text-sm font-bold text-gray-900 group-hover:text-amber-900">
                      {t("about")}
                    </span>
                    <span className="text-xs text-gray-600">{t("aboutSub")}</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Right Action: Desktop BOOK NOW CTA & Language Switcher */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher isTransparent={isTransparent} />
          <Link
            href="/book?source=navbar"
            className={`text-xs lg:text-sm font-bold px-4 lg:px-5 py-2 lg:py-2.5 rounded-xl transition-all shadow-xs hover:shadow-md focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none ${
              isTransparent
                ? "bg-amber-500 hover:bg-amber-400 text-black shadow-md"
                : "bg-amber-900 hover:bg-amber-950 text-white"
            }`}
          >
            {t("bookNow")}
          </Link>
        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none rounded-md z-[70] transition-colors ${
            isTransparent ? "text-white" : "text-black"
          }`}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} />}
        </button>

        {/* Mobile Slide-out Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />

              {/* Drawer Content */}
              <motion.div
                id="mobile-navigation"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
                className="fixed top-0 right-0 h-dvh w-4/5 sm:w-2/3 max-w-sm bg-[#f6f2ee] shadow-2xl z-50 overflow-y-auto flex flex-col justify-between"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div>
                  <div className="flex justify-between items-center px-6 py-5 border-b border-black/10 bg-[#e8dfd7]">
                    <Logo variant="dark" />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1 rounded-md text-gray-700 hover:text-black focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <ul
                    className={`flex flex-col gap-4 px-6 py-6 text-base ${AgrandirBold.className}`}
                  >
                    {mobileNavLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block py-2 border-b border-gray-200 text-gray-900 ${
                            pathname === link.href ? "text-amber-900 font-bold" : ""
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 pb-6 space-y-4">
                  <div className="flex justify-center pb-2">
                    <LanguageSwitcher isTransparent={false} />
                  </div>
                  <Link
                    href="/book?source=navbar"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-amber-900 hover:bg-amber-950 text-white font-bold py-3 rounded-xl transition-all shadow-md"
                  >
                    {t("bookNow")}
                  </Link>


                  <div className="p-4 border-t border-black/10 bg-[#e8dfd7] rounded-xl text-xs text-gray-600 space-y-1">
                    <p className="font-semibold text-gray-900">Ndito Travel Tanzania</p>
                    <p>Arusha, Tanzania</p>
                    <p className="text-amber-900 font-medium">+255 658 883 554</p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
