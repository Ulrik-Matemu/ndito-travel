"use client";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export function DestinationImages({ images, name }: { images: string[]; name: string }) {
    const [featured, ...gallery] = images;

    return (
        <section className="mb-4">
            {/* Featured image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] rounded-2xl overflow-hidden mb-6">
                
                <Image
                    src={featured}
                    alt={`${name} main photo`}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
            </div>

            {/* Gallery grid */}
            <PhotoProvider>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {gallery.map((src, i) => (
                        <PhotoView key={i} src={src}>
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer">
                                <Image
                                    src={src}
                                    alt={`${name} photo ${i + 2}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
        </section>
    );
}
