"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
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
          className={`hidden tablet:hidden md:flex justify-center gap-20 text-lg ${AgrandirBold.className}`}
        >
          <li className="border border-transparent border-3 hover:border-b-black transition-all">
            <Link href="/safaris">SAFARIS</Link>
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
          className="md:hidden tablet:block focus:outline-none z-[60]"
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
                  <button onClick={() => setIsOpen(false)} aria-label="Close mobile menu" className="hidden">
                    <X size={28} />
                  </button>
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
                    <Link href="/discover-tanzania" onClick={() => setIsOpen(false)}>
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
