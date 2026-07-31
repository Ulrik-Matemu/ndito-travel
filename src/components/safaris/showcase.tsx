import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "../shared/button";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const ShowCase = () => {
  return (
    <section className="my-12 md:my-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 bg-[#f6f2ee] p-6 md:p-10 rounded-2xl border border-black/5 shadow-xs">
        <div className="md:w-1/2 w-full text-center md:text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
            Unforgettable Encounters
          </span>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900 ${LoubagMedium.className}`}
          >
            Experience the Magic of Tanzania
          </h2>
          <p
            className={`text-sm sm:text-base text-gray-700 leading-relaxed mb-6 ${AgrandirRegular.className}`}
          >
            Witness majestic elephant herds in Tarangire, spot rare wildlife in Ngorongoro, and capture memories that last a lifetime on your custom safari adventure.
          </p>
          <Button
            href="https://wa.me/255658883554"
            external
            ariaLabel="Book a safari experience on WhatsApp"
            size="md"
          >
            Plan Your Safari &rarr;
          </Button>
        </div>

        <div className="md:w-1/2 w-full relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/photos/baby-elephant-safari-nditotravel.webp"
            alt="Young baby elephant with wild herd on Tanzania safari"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover hover:scale-103 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};