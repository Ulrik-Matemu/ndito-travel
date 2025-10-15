import SafariHero from "@/components/safaris/hero"
import { Navbar } from "@/components/shared/navbar"
import { TextArea } from "@/components/shared/textArea";
import { TripPackages } from "@/components/home/trip-packages";

export default function ZanzibarPage() {
    return (
        <>
            <div className="p-4 md:p-16 md:pb-0">
                <Navbar />
                <SafariHero photoSrc="/photos/zanzibar-beach-nditotravel-zanzibar.jpg" heading="Zanzibar Beach Holiday" subheading="Explore the Pristine Beaches of Zanzibar with Ndito Travel" />
                <TextArea heading="Zanzibar: A Tropical Paradise" content="Zanzibar, an archipelago off the coast of Tanzania, is renowned for its stunning white-sand beaches, crystal-clear turquoise waters, and vibrant culture. Whether you're looking to relax on the beach, explore historic Stone Town, or indulge in water sports like snorkeling and diving, Zanzibar offers something for every traveler." />
                <TripPackages />
            </div>
        </>
    )
}