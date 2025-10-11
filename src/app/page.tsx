import { Navbar } from "@/components/shared/navbar";
import { Hero } from "@/components/home/hero";
import { TripPackages } from "@/components/home/trip-packages";
import CarouselWithText from "@/components/home/featured";


export default function Home() {
  return (
    <div className="p-4 md:p-16">
      <Navbar />
      <Hero />
      <TripPackages />
      <CarouselWithText />
    </div>
  );
}
