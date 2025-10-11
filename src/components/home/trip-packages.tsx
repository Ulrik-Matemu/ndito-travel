import localFont from "next/font/local";
import SafariCarousel from "../shared/carousel";

const LoubagMedium = localFont({
    src: "../../../public/fonts/Loubag-Medium.ttf",
});


export const TripPackages = () => {
    return (
        <div className="my-12">
            <h2 className={`text-2xl md:text-5xl tracking-wider text-center font-bold  ${LoubagMedium.className}`}>Discover Tanzania with us.   </h2>
            <SafariCarousel /> 
        </div>
    )
}