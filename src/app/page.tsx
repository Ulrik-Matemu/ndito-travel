import { Navbar } from "@/components/shared/navbar";
import { Hero } from "@/components/home/hero";
import { TripPackages } from "@/components/home/trip-packages";
import CarouselWithText from "@/components/home/featured";
import { TextArea } from "@/components/shared/textArea";


export default function Home() {
  return (
    <>
      <div className="p-4 md:p-16 md:pb-0">
        <Navbar />
        <Hero />
        <TripPackages />
        <TextArea heading="Why Choose Ndito Travel for Your Safari?" content="At Ndito Travel, we specialize in crafting unforgettable safari experiences in Tanzania. Our expert guides are passionate about wildlife and dedicated to ensuring your trip is both safe and exhilarating. We offer personalized itineraries that cater to your interests, whether you're a seasoned safari-goer or embarking on your first adventure. With Ndito Travel, you're not just booking a trip; you're creating lifelong memories." />
        <CarouselWithText />
      </div>
    </>
  );
}
