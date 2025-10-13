"use client"

import Image from "next/image"
import localFont from "next/font/local"
import { Button } from "../shared/button";


const LoubagMedium = localFont({
    src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
    src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const SafariHero = () => {
    return (
        <>
            <div className="relative h-[300px] md:h-[500px] w-full my-10">
                <Image
                    src="/photos/herd-of-buffaloes-nditotravel-safari.png"
                    alt="Herd of Buffaloes"
                    fill
                    className="object-cover rounded"
                    priority
                />
                {/* Overlay to darken the image */}
                <div className="absolute inset-0 bg-black/50 rounded"></div>
                <div className="absolute inset-0 grid items-center justify-center">
                    <div className="text-center">
                        <h1 className={`text-white text-3xl md:text-5xl font-bold drop-shadow-lg ${LoubagMedium.className}`}>
                            Tanzania Safari {new Date().getFullYear()}
                        </h1>
                        <p className={`text-white text-md md:text-2xl my-4 drop-shadow ${AgrandirRegular.className}`}>
                            Full Guide to Tanzania Tours by Ndito Travel
                        </p>
                        <Button ariaLabel="Plan Trip" onClick={() => {}} variant="secondary">PLAN TRIP</Button>
                    </div>
                </div>
            </div>
        </>
    )
}