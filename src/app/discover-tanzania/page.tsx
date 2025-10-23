import SafariHero from "@/components/safaris/hero";
import { Navbar } from "@/components/shared/navbar";
import { TextArea } from "@/components/shared/textArea";
import { TripPackages } from "@/components/home/trip-packages";

export default function DiscoverTanzaniaPage() {
  return (
    <div className="p-4 md:p-16 md:pb-0">
       <Navbar />
       <SafariHero photoSrc="/photos/tanzanite-bridge-nditotravel.webp" heading="Discover Tanzania" subheading="Unveiling the Wonders of Tanzania with Ndito Travel" />
       <TextArea heading="Discover Tanzania" content="Tanzania, a land of unparalleled natural beauty and rich cultural heritage, beckons travelers from around the globe. From the iconic Serengeti National Park, home to the Great Migration, to the breathtaking Ngorongoro Crater, Tanzania offers a safari experience like no other. Beyond its wildlife wonders, Tanzania boasts pristine beaches along the Zanzibar Archipelago, where turquoise waters meet white sandy shores. Ndito Travel is your gateway to exploring this diverse and enchanting country, providing expertly crafted itineraries that showcase the best of Tanzania's landscapes, wildlife, and culture." />
       <TripPackages />
    </div>
  );
}