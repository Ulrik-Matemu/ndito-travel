"use client";
import Image from "next/image";
import { RectangleCard } from "@/components/shared/rectangleCard";
import localFont from "next/font/local";
import { Button } from "@/components/shared/button";


const LoubagMedium = localFont({
    src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
    src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const Hero = () => {
    return (
        <>
            <RectangleCard>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-10 md:mt-0">
                    <div className="w-full md:w-1/2">
                        <h1
                            className={`text-3xl md:text-5xl tracking-wider leading-[1.2] font-bold ${LoubagMedium.className}`}
                        >
                            A Safari With <br /> Ndito Travel
                        </h1>
                        <p
                            className={`text-base md:text-xl my-4 ${AgrandirRegular.className}`}
                        >
                            Explore breathtaking landscapes, encounter incredible wildlife, and immerse yourself in the heart of Africa.
                        </p>
                        <Button ariaLabel="Plan Trip" onClick={() => { location.href = "https://wa.me/255658883554"; }}>
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
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative">
                        <Image
                            src="/photos/ndito-travel-cars.webp"
                            alt="Ndito Travel Safari Cars"
                            width={600}
                            height={300}
                            className="w-full h-auto max-w-[400px] md:max-w-[600px] rounded-lg"
                            priority
                        />
                        <div className="absolute bottom-4 right-4 flex gap-4 bg-white/80 rounded-lg p-2 shadow-md">
                            <a
                                href="https://share.google/OtFBIRdxriIEmnjDI"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Google Reviews"
                            >
                                <Image
                                    src="/icons/search.png"
                                    alt="Google"
                                    width={32}
                                    height={32}
                                    className="hover:scale-110 transition-transform"
                                />
                            </a>
                            <a
                                href="https://www.tripadvisor.com/Attraction_Review-g297913-d25567874-Reviews-Ndito_Travel-Arusha_Arusha_Region.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Tripadvisor Reviews"
                            >
                                <Image
                                    src="/icons/tripadvisor.png"
                                    alt="Tripadvisor"
                                    width={32}
                                    height={32}
                                    className="hover:scale-110 transition-transform"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </RectangleCard>
        </>
    )
}