import Image from "next/image"
import localFont from "next/font/local"

const LoubagMedium = localFont({
    src: "../../../public/fonts/Loubag-Medium.ttf",
})

export const ShowCase = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center my-10 gap-8">
                <div className="md:w-1/2 w-full">
                    <h2 className={`text-2xl md:text-4xl font-bold mb-4 text-center md:text-left ${LoubagMedium.className}`}>Experience the Magic of Tanzania</h2>
                </div>
                <div className="md:w-1/2 w-full">
                    <Image
                        src="/photos/baby-elephant-safari-nditotravel.jpg"
                        alt="Baby Elephant"
                        width={1200}
                        height={800}
                        className="object-cover w-full h-auto rounded-lg"
                        priority
                    />
                </div>
            </div>
        </>
    )
}