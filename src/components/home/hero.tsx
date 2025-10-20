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
                        <Button ariaLabel="Plan Trip" onClick={() => {}}>PLAN TRIP</Button>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src="/photos/ndito-travel-cars.jpg"
                            alt="Ndito Travel Safari Cars"
                            width={600}
                            height={300}
                            className="w-full h-auto max-w-[400px] md:max-w-[600px] rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </RectangleCard>
        </>
    )
}