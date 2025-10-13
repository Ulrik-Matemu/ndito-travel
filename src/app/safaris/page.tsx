import { Navbar } from "@/components/shared/navbar";
import { SafariHero } from "@/components/safaris/hero"
import { TextArea } from "@/components/shared/textArea";
import { TripPackages } from "@/components/home/trip-packages";

export default function SafarisPage() {
    return (
        <>
            <div className="p-4 md:p-16 md:pb-0">
                <Navbar />
                <SafariHero />
                <TextArea heading="Tanzania Wildlife Safari Overview" content="Tanzania, Africa's safari gem, is a wildlife enthusiast's paradise. Imagine exploring the majestic Ngorongoro Crater and the vast Serengeti National Park. The country is home to the legendary Big Five and countless other species. From graceful giraffes and playful hippos to stealthy caracals, African wild dogs, and a myriad of other lesser-known animals." />
                <TripPackages />
            </div>
        </>
    )
}