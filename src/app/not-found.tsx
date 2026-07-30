import Link from "next/link";
import { Navbar } from "@/components/shared/navbar";
import { Button } from "@/components/shared/button";
import localFont from "next/font/local";
import { Compass, MapPin, Search } from "lucide-react";

const LoubagMedium = localFont({
  src: "../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../public/fonts/Agrandir-Regular.otf",
});

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex flex-col items-center justify-center text-center">
        <div className="bg-[#f6f2ee] p-8 sm:p-12 rounded-3xl border border-black/5 shadow-lg space-y-6 max-w-2xl">
          <div className="w-16 h-16 rounded-2xl bg-amber-900 text-amber-300 mx-auto flex items-center justify-center shadow-md">
            <Compass size={32} />
          </div>

          <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block">
            ● 404 — TRAIL NOT FOUND
          </span>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 ${LoubagMedium.className}`}
          >
            Looks Like This Path Got Lost in the Serengeti
          </h1>

          <p
            className={`text-sm sm:text-base text-gray-700 leading-relaxed ${AgrandirRegular.className}`}
          >
            The page you are looking for might have been moved, renamed, or doesn&apos;t exist. Let&apos;s guide you back to our main safari routes.
          </p>

          {/* Useful Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-gray-800">
            <Link
              href="/safaris"
              className="p-3 bg-white rounded-xl border border-black/5 hover:bg-amber-900 hover:text-white transition-all flex flex-col items-center gap-1 shadow-xs"
            >
              <MapPin size={16} /> Safaris
            </Link>
            <Link
              href="/kilimanjaro"
              className="p-3 bg-white rounded-xl border border-black/5 hover:bg-amber-900 hover:text-white transition-all flex flex-col items-center gap-1 shadow-xs"
            >
              <Compass size={16} /> Kilimanjaro
            </Link>
            <Link
              href="/articles"
              className="p-3 bg-white rounded-xl border border-black/5 hover:bg-amber-900 hover:text-white transition-all flex flex-col items-center gap-1 shadow-xs"
            >
              <Search size={16} /> Articles
            </Link>
          </div>

          <div className="pt-4">
            <Button href="/" ariaLabel="Return home" variant="secondary" size="md">
              RETURN TO HOMEPAGE &rarr;
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
