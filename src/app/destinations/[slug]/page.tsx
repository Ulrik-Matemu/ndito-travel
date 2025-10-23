// /app/destinations/[slug]/page.tsx
import { safariDestinations } from "@/data/destinations";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DestinationImages } from "@/components/shared/destinationImages";
import { Navbar } from "@/components/shared/navbar";
import localFont from "next/font/local";
import { TripPackages } from "@/components/home/trip-packages";

const AgrandirRegular = localFont({
    src: "../../../../public/fonts/Agrandir-Regular.otf",
});

const LoubagMedium = localFont({
    src: "../../../../public/fonts/Loubag-Medium.ttf",
});

export async function generateStaticParams() {
    return safariDestinations.map((dest) => ({
        slug: dest.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const destination = safariDestinations.find((d) => d.slug === params.slug);
    if (!destination) return {};

    return {
        title: destination.seo.title,
        description: destination.seo.description,
        keywords: destination.seo.keywords,
        openGraph: {
            title: destination.seo.title,
            description: destination.seo.description,
            images: destination.images.map((src) => ({
                url: src,
            })),
        },
    };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
    const destination = safariDestinations.find((d) => d.slug === params.slug);

    if (!destination) return notFound();

    return (
        <>
            <div className="p-4 md:p-16 md:pb-0">
                <Navbar />
            </div>
            <main className="max-w-5xl mx-auto mt-6 px-4 py-12">
                <h1 className={`text-2xl md:text-5xl font-bold mb-4 ${LoubagMedium.className}`}>{destination.name}</h1>
                <p className={`text-2xl text-gray-600 mb-8 ${AgrandirRegular.className}`}>{destination.shortDescription}</p>

                {/* Images */}
                <DestinationImages images={destination.images} name={destination.name} />


                {/* Description */}
                <p className={`text-gray-700 leading-relaxed whitespace-pre-line mb-10 md:text-xl ${AgrandirRegular.className}`}>
                    {destination.description}
                </p>

                {/* Map */}
                <iframe
                    width="100%"
                    height="400"
                    loading="lazy"
                    allowFullScreen
                    className="rounded-lg"
                    src={`https://www.google.com/maps?q=${destination.location.lat},${destination.location.lng}&hl=en&z=10&output=embed`}
                ></iframe>
            </main>
            <div className="p-4 md:p-16 md:pb-0">
                <TripPackages />
            </div>
        </>
    );
}
