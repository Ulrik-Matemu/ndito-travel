import Link from "next/link";
import Image from "next/image";
import { Mountain, Clock, TrendingUp, ChevronRight } from "lucide-react";
import localFont from "next/font/local";
import { kilimanjaroRoutes } from "@/data/kilimanjaroRoutes";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export function KilimanjaroRouteCards() {
  return (
    <section className="py-16 md:py-24 bg-[#fcfbfa]" id="routes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-amber-900 bg-amber-900/10 px-3 py-1 rounded-full border border-amber-900/20">
            Compare Trail Options
          </span>
          <h2
            className={`text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-4 ${LoubagMedium.className}`}
          >
            Explore Kilimanjaro Routes
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Select a route below to explore detailed day-by-day itineraries, difficulty ratings, summit success rates, and scenic highlights.
          </p>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kilimanjaroRoutes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-3xl border border-black/10 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:scale-[1.02]"
            >
              {/* Image Header */}
              <div className="relative h-56 md:h-64 w-full">
                <Image
                  src={route.heroImage}
                  alt={route.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-400 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10 inline-block mb-1">
                    {route.duration}
                  </span>
                  <h3 className={`text-xl md:text-2xl font-bold ${LoubagMedium.className}`}>
                    {route.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-xs text-amber-900 font-semibold uppercase tracking-wider mb-2">
                    {route.subtitle}
                  </p>
                  <p className={`text-gray-600 text-sm leading-relaxed line-clamp-3 ${AgrandirRegular.className}`}>
                    {route.description}
                  </p>

                  {/* Highlights preview */}
                  <div className="mt-4 pt-4 border-t border-black/5">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-2">
                      Route Highlight
                    </h4>
                    <p className="text-gray-800 text-xs font-medium flex items-start gap-1.5">
                      <span className="text-amber-900">•</span>
                      {route.highlights[0]}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Quick Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-[#f6f2ee] rounded-xl text-center text-[10px] mb-6">
                    <div>
                      <span className="text-gray-500 block font-semibold mb-0.5">Difficulty</span>
                      <span className="font-bold text-gray-900 flex items-center justify-center gap-0.5">
                        <Mountain className="w-3 h-3 text-amber-900 shrink-0" />
                        {route.difficulty}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500 block font-semibold mb-0.5">Success Rate</span>
                      <span className="font-bold text-emerald-800 flex items-center justify-center gap-0.5">
                        <TrendingUp className="w-3 h-3 text-emerald-700 shrink-0" />
                        {route.successRate}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500 block font-semibold mb-0.5">Scenery</span>
                      <span className="font-bold text-amber-700">
                        {route.sceneryRating}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/climbing-kilimanjaro/${route.id}`}
                    className="w-full bg-amber-900 hover:bg-amber-950 text-white font-bold py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-xs"
                  >
                    View Route Details
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
