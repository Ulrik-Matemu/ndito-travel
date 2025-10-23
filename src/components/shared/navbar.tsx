"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import { safariDestinations } from "@/data/destinations"; // ✅ import destinations data

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[60] p-4 md:px-16 bg-[#e8dfd7] transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center pt-4 px-6 relative">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex justify-center gap-20 text-lg ${AgrandirBold.className}`}
        >
          {/* SAFARIS with dropdown */}
          <li
            className="border border-transparent border-3 hover:border-b-black transition-all"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="focus:outline-none">SAFARIS</button>

            {/* Full-width dropdown */}
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-[-70px] top-full w-screen bg-[#f6f2ee] shadow-md border-t border-black py-8 px-16 z-50"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {safariDestinations.map((dest) => (
                      <Link
                        key={dest.slug}
                        href={`/destinations/${dest.slug}`}
                        className={`group flex flex-col hover:text-[#8b5e3c] transition`}
                      >
                        <span className={`text-base font-semibold group-hover:underline`}>
                          {dest.name}
                        </span>
                        <p className="text-sm text-gray-600">
                          {dest.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li className="border border-transparent border-3 hover:border-b-black transition-all">
            <Link href="/zanzibar">ZANZIBAR</Link>
          </li>
          <li className="border border-transparent border-3 hover:border-b-black transition-all">
            <Link href="/kilimanjaro">KILIMANJARO</Link>
          </li>
          <li className="border border-transparent border-3 hover:border-b-black transition-all">
            <Link href="/discover-tanzania">DISCOVER TANZANIA</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none z-[60]"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                className="fixed top-0 right-0 h-[1000px] w-3/4 sm:w-1/2 bg-white shadow-2xl z-50"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <div className="flex justify-between items-center px-6 py-4 border-b">
                  <Logo />
                </div>

                <ul
                  className={`flex flex-col items-start bg-white gap-6 px-8 py-8 text-lg ${AgrandirBold.className}`}
                >
                  <li>
                    <Link href="/safaris" onClick={() => setIsOpen(false)}>
                      SAFARIS
                    </Link>
                  </li>
                  <li>
                    <Link href="/zanzibar" onClick={() => setIsOpen(false)}>
                      ZANZIBAR
                    </Link>
                  </li>
                  <li>
                    <Link href="/kilimanjaro" onClick={() => setIsOpen(false)}>
                      KILIMANJARO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/discover-tanzania"
                      onClick={() => setIsOpen(false)}
                    >
                      DISCOVER TANZANIA
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
