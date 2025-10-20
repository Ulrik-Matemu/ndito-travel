"use client"

import { Mail, Phone, Instagram, Facebook, X, Globe, Twitter } from "lucide-react"
import { RectangleCard } from "@/components/shared/rectangleCard"
import { Button } from "./button"
import { Logo } from "./logo"
import localFont from "next/font/local"

const AgrandirRegular = localFont({
    src: "../../../public/fonts/Agrandir-Regular.otf",
})

export default function Footer() {
    return (
        <footer className="w-full mt-auto">
            <div className="bg-black h-1"></div>
            <RectangleCard className="px-0 rounded-md">
                <div
                    className="
            relative w-full flex flex-col items-start justify-between
            p-4 sm:p-8 md:p-0 
            rounded-t-2xl
            bg-[#e8dfd7]
          "
                >
                    <div className="mb-6">
                        <div className="pb-8">
                            <Logo />
                        </div>
                        <Button onClick={() => { }} ariaLabel="Plan Trip">
                            PLAN TRIP
                        </Button>
                    </div>

                    <div className={`mb-6 text-m text-gray-700 ${AgrandirRegular.className}`}>
                        <p>Arusha, Tanzania</p>
                        <p>+255 758 883 554 | office@nditotravel.co.tz</p>
                    </div>

                    <div className="flex items-center w-full max-w-md mb-8">
                        <input
                            type="text"
                            placeholder="Ask us anything...."
                            className="
                flex-1 border border-gray-300 rounded-l-sm
                px-3 py-2 text-sm text-gray-700
                focus:outline-none focus:ring-1 focus:ring-black
                h-12
                bg-white
              "
                        />
                        <Button onClick={() => { }} ariaLabel="Send Message">
                            SEND
                        </Button>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://www.instagram.com/nditotravel/?hl=en" aria-label="Instagram">
                            <Instagram className="w-10 h-10  hover:opacity-70" />
                        </a>
                        <a href="+255658883554" aria-label="Meta">
                            <Phone className="w-10 h-10  hover:opacity-70" />
                        </a>
                        <a href="https://www.facebook.com/p/Ndito-Travel-100083375855257/" aria-label="TripAdvisor">
                            <Facebook className="w-10 h-10 hover:opacity-70" />
                        </a>
                    </div>
                    
                </div>
            </RectangleCard>
        </footer>
    )
}
