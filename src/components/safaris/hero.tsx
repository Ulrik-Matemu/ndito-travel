"use client"

import Image from "next/image"
import localFont from "next/font/local"
import { Button } from "../shared/button";
import { JSX } from "react";


const LoubagMedium = localFont({
    src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
    src: "../../../public/fonts/Agrandir-Regular.otf",
});

export default function SafariHero({ photoSrc, heading, subheading }: { photoSrc: string; heading: string; subheading: string }): JSX.Element {
    return (
        <>
            <div className="relative h-[300px] md:h-[500px] w-full my-20 md:my-10 mb-2">
                <Image
                    src={photoSrc}
                    alt={heading}
                    fill
                    className="object-cover rounded"
                    priority
                />
                {/* Overlay to darken the image */}
                <div className="absolute inset-0 bg-black/50 rounded"></div>
                <div className="absolute inset-0 grid items-center justify-center">
                    <div className="text-center">
                        <h1 className={`text-white text-3xl md:text-5xl font-bold drop-shadow-lg ${LoubagMedium.className}`}>
                            {heading} {new Date().getFullYear()}
                        </h1>
                        <p className={`text-white text-md md:text-2xl my-4 drop-shadow ${AgrandirRegular.className}`}>
                            {subheading}
                        </p>
                        <Button ariaLabel="Plan Trip" onClick={() => { location.href = "https://wa.me/255658883554"; }} variant="secondary">
                            <div className="flex items-center">
                                <span className="mr-2">CHAT ON WHATSAPP</span>
                                <Image
                                    src="/icons/whatsapp.png"
                                    alt="Arrow Right"
                                    width={24}
                                    height={24}
                                    className="ml-2"
                                />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}