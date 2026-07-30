import localFont from "next/font/local";
import SafariCarousel from "../shared/carousel";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const TripPackages = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto mb-6">
        <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
          ● FEATURED PACKAGES
        </span>
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 ${LoubagMedium.className}`}
        >
          Discover Tanzania With Us
        </h2>
        <p
          className={`text-sm sm:text-base text-gray-700 leading-relaxed ${AgrandirRegular.className}`}
        >
          Specially curated safari &amp; island packages led by expert local guides.
        </p>
      </div>
      <SafariCarousel />
    </section>
  );
};