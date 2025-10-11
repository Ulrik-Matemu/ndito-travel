"use client"
import { useState } from "react"
import Link from "next/link"
import { Logo } from "./logo"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import localFont from "next/font/local"

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
})

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center pt-4 px-6 relative">
      {/* Logo */}
      <Logo />

      {/* Desktop Menu */}
      <ul
        className={`hidden tablet:hidden md:flex justify-center gap-20 text-lg ${AgrandirBold.className}`}
      >
        <li className="border border-transparent border-3 hover:border-b-black transition-all">
          <Link href="/">SAFARIS</Link>
        </li>
        <li className="border border-transparent border-3 hover:border-b-black transition-all">
          <Link href="/">ZANZIBAR</Link>
        </li>
        <li className="border border-transparent border-3 hover:border-b-black transition-all">
          <Link href="/">KILIMANJARO</Link>
        </li>
        <li className="border border-transparent border-3 hover:border-b-black transition-all">
          <Link href="/">DISCOVER TANZANIA</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden tablet:block focus:outline-none z-[60]"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
      </button>

      {/* Animated Mobile Menu  */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-2xl z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="flex justify-between items-center px-6 py-4 border-b">
                <Logo />
                <button onClick={() => setIsOpen(false)} aria-label="Close mobile menu">
                  <X size={28} />
                </button>
              </div>

              <ul
                className={`flex flex-col items-start gap-6 px-8 py-8 text-lg ${AgrandirBold.className}`}
              >
                <li>
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    SAFARIS
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    ZANZIBAR
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    KILIMANJARO
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    DISCOVER TANZANIA
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
