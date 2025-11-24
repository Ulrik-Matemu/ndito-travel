"use client"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Hero } from "./hero";
import { TripPackages } from "./trip-packages";
import { TextArea } from "../shared/textArea";
import CarouselWithText from "./featured";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function PageContentWrapper() {
    useEffect(() => {
        ScrollSmoother.create({
            wrapper: ".smooth-wrapper",
            content: ".smooth-content",
            smooth: 1,
            effects: true,
        })
    }, [])
    
    return (
        <>
        <div className="smooth-wrapper">
            <div className="smooth-content">
                {/* Page content goes here */}
                <div className="section-1">
                    <Hero />
                </div>
                <div className="section-2">
                    <TripPackages />
                </div>
                <div className="section-3">
                    <TextArea heading="Why Choose Ndito Travel for Your Safari?" content="At Ndito Travel, we specialize in crafting unforgettable safari experiences in Tanzania. Our expert guides are passionate about wildlife and dedicated to ensuring your trip is both safe and exhilarating. We offer personalized itineraries that cater to your interests, whether you're a seasoned safari-goer or embarking on your first adventure. With Ndito Travel, you're not just booking a trip; you're creating lifelong memories." />
                </div>
                <div className="section-4">
                    <CarouselWithText />
                </div>
            </div>
        </div>
        </>
    )
}