"use client";

import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Maximize2 } from "lucide-react";
import "react-photo-view/dist/react-photo-view.css";

export function DestinationImages({
  images,
  name,
  hideFeatured = false,
}: {
  images: string[];
  name: string;
  /** When true, every image is rendered in the grid — use when a featured shot is already shown elsewhere (e.g. the page hero). */
  hideFeatured?: boolean;
}) {
  if (!images || images.length === 0) return null;

  const [featured, ...rest] = images;
  const gallery = hideFeatured ? images : rest;

  return (
    <section className="mb-8" aria-label={`Photo gallery for ${name}`}>
      <PhotoProvider>
        {/* Featured image — skipped when the hero already shows the lead photo */}
        {!hideFeatured && (
          <PhotoView src={featured}>
            <div className="relative w-full h-[280px] sm:h-[380px] md:h-[500px] rounded-2xl overflow-hidden mb-4 shadow-md group cursor-pointer border border-black/5">
              <Image
                src={featured}
                alt={`${name} featured scenic view`}
                fill
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs">
                  <Maximize2 size={14} /> Click to expand
                </span>
              </div>
            </div>
          </PhotoView>
        )}

        {/* Gallery grid */}
        {gallery.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {gallery.map((src, i) => (
              <PhotoView key={i} src={src}>
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${name} photo ${i + 1} in full screen`}
                  className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-xs group border border-black/5 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
                >
                  <Image
                    src={src}
                    alt={`${name} photo ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Maximize2
                      size={20}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md"
                    />
                  </div>
                </div>
              </PhotoView>
            ))}
          </div>
        )}
      </PhotoProvider>
    </section>
  );
}