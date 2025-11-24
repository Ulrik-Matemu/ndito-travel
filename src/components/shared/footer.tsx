"use client"

import { Phone, Instagram, Facebook } from "lucide-react"
import { RectangleCard } from "@/components/shared/rectangleCard"
import { Button } from "./button"
import { Logo } from "./logo"
import Image from "next/image"
import localFont from "next/font/local"

const AgrandirRegular = localFont({
    src: "../../../public/fonts/Agrandir-Regular.otf",
})

export default function Footer() {
    return (
        <footer className="w-full mt-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
            <RectangleCard className="px-0 rounded-md">
                <div className="relative w-full px-8 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24 rounded-t-2xl bg-[#e8dfd7]">
                    
                    {/* Hero Section */}
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col items-center text-center mb-20">
                            <div className="mb-8 opacity-90">
                                <Logo />
                            </div>
                            <p className={`text-lg md:text-xl text-gray-600 mb-8 max-w-md leading-relaxed ${AgrandirRegular.className}`}>
                                Start your journey with us
                            </p>
                            <Button 
                                onClick={() => { location.href = "https://wa.me/255658883554"; }} 
                                ariaLabel="Plan Trip"
                            >
                                <div className="flex items-center">
                                    <span className="tracking-wider">CHAT ON WHATSAPP</span>
                                    <Image
                                        src="/icons/whatsapp.png"
                                        alt="WhatsApp"
                                        width={18}
                                        height={18}
                                        className="ml-3 group-hover:scale-110 transition-transform"
                                    />
                                </div>
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mb-16"></div>

                        {/* Contact Grid */}
                        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
                            {/* Visit */}
                            <div className="text-center md:text-left">
                                <h3 className={`text-xs uppercase tracking-widest text-gray-500 mb-4 ${AgrandirRegular.className}`}>
                                    Visit
                                </h3>
                                <p className={`text-sm text-gray-700 leading-relaxed ${AgrandirRegular.className}`}>
                                    Arusha, Tanzania
                                </p>
                            </div>

                            {/* Contact */}
                            <div className="text-center md:text-left">
                                <h3 className={`text-xs uppercase tracking-widest text-gray-500 mb-4 ${AgrandirRegular.className}`}>
                                    Contact
                                </h3>
                                <div className={`text-sm text-gray-700 space-y-2 ${AgrandirRegular.className}`}>
                                    <p className="leading-relaxed">+255 758 883 554</p>
                                    <p className="leading-relaxed">office@nditotravel.co.tz</p>
                                </div>
                            </div>

                            {/* Connect */}
                            <div className="text-center md:text-left">
                                <h3 className={`text-xs uppercase tracking-widest text-gray-500 mb-4 ${AgrandirRegular.className}`}>
                                    Connect
                                </h3>
                                <div className="flex items-center gap-4 justify-center md:justify-start">
                                    <a 
                                        href="https://www.instagram.com/nditotravel/?hl=en" 
                                        aria-label="Instagram"
                                        className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-110"
                                    >
                                        <Instagram className="w-5 h-5" strokeWidth={1.5} />
                                    </a>
                                    <a 
                                        href="tel:+255658883554" 
                                        aria-label="Phone"
                                        className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-110"
                                    >
                                        <Phone className="w-5 h-5" strokeWidth={1.5} />
                                    </a>
                                    <a 
                                        href="https://www.facebook.com/p/Ndito-Travel-100083375855257/" 
                                        aria-label="Facebook"
                                        className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-110"
                                    >
                                        <Facebook className="w-5 h-5" strokeWidth={1.5} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="max-w-2xl mx-auto mb-16">
                            <div className="text-center mb-6">
                                <h3 className={`text-xs uppercase tracking-widest text-gray-500 mb-2 ${AgrandirRegular.className}`}>
                                    Have Questions?
                                </h3>
                                <p className={`text-sm text-gray-600 ${AgrandirRegular.className}`}>
                                    {"We'd love to hear from you"}
                                </p>
                            </div>
                            <div className="flex items-stretch shadow-sm">
                                <input
                                    type="text"
                                    placeholder="Your message..."
                                    className={`
                                        flex-1 border border-gray-200 rounded-l
                                        px-6 py-4 text-sm text-gray-700
                                        focus:outline-none focus:border-gray-400
                                        bg-white/80 backdrop-blur
                                        placeholder:text-gray-400
                                        transition-all duration-300
                                        ${AgrandirRegular.className}
                                    `}
                                />
                                <Button 
                                    onClick={() => { }} 
                                    ariaLabel="Send Message"
                                >
                                    <span className="tracking-wider">SEND</span>
                                </Button>
                            </div>
                        </div>

                        {/* Bottom */}
                        <div className="text-center">
                            <p className={`text-xs text-gray-400 tracking-wide ${AgrandirRegular.className}`}>
                                © {new Date().getFullYear()} Ndito Travel. Crafting unforgettable journeys.
                            </p>
                        </div>
                    </div>
                </div>
            </RectangleCard>
        </footer>
    )
}