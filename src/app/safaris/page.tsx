import { Navbar } from "@/components/shared/navbar";
import  SafariHero  from "@/components/safaris/hero"
import { TextArea } from "@/components/shared/textArea";
import { TripPackages } from "@/components/home/trip-packages";
import { ShowCase } from "@/components/safaris/showcase";

export default function SafarisPage() {
    return (
        <>
            <div className="p-4 md:p-16 md:pb-0">
                <Navbar />
                <SafariHero photoSrc="/photos/herd-of-buffaloes-nditotravel-safari.png" heading="Tanzania Safari" subheading="Full Guide to Tanzania Tours by Ndito Travel" />
                <TextArea heading="Tanzania Wildlife Safari" content="Tanzania, Africa's safari gem, is a wildlife enthusiast's paradise. Imagine exploring the majestic Ngorongoro Crater and the vast Serengeti National Park. The country is home to the legendary Big Five and countless other species. From graceful giraffes and playful hippos to stealthy caracals, African wild dogs, and a myriad of other lesser-known animals." />
                <ShowCase />
                <TextArea heading="Why Choose Ndito Travel for Your Safari?" content="At Ndito Travel, we specialize in crafting unforgettable safari experiences in Tanzania. Our expert guides are passionate about wildlife and dedicated to ensuring your trip is both safe and exhilarating. We offer personalized itineraries that cater to your interests, whether you're a seasoned safari-goer or embarking on your first adventure. With Ndito Travel, you're not just booking a trip; you're creating lifelong memories." />
                <TripPackages />
            </div>
        </>
    )
}