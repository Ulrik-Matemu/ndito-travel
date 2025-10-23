import SafariHero from "@/components/safaris/hero";
import { Navbar } from "@/components/shared/navbar";
import { TextArea } from "@/components/shared/textArea";
import { TripPackages } from "@/components/home/trip-packages";

export default function KilimanjaroPage() {
  return (
    <div className="p-4 md:p-16 md:pb-0">
        <Navbar />
        <SafariHero photoSrc="/photos/kilimanjaro-hero-nditotravel.webp" heading="Kilimanjaro Trekking" subheading="Experience the Majesty of Africa's Highest Peak with Ndito Travel" />
        <TextArea heading="Kilimanjaro Trekking" content="Mount Kilimanjaro, Africa's highest peak, stands as a beacon for adventurers and nature enthusiasts worldwide. Rising majestically to 5,895 meters (19,341 feet), this dormant volcano offers a unique trekking experience that combines breathtaking landscapes, diverse ecosystems, and the thrill of reaching the summit. Ndito Travel specializes in Kilimanjaro trekking tours, providing expertly guided expeditions that cater to all levels of experience. Whether you're a seasoned climber or a first-time trekker, our tailored itineraries ensure a safe and unforgettable journey to the roof of Africa." />
        <TripPackages />
    </div>
  );
}