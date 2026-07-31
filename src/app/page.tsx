
import { Navbar } from "@/components/shared/navbar";
import { Hero } from "@/components/home/hero";
import { TripPackages } from "@/components/home/trip-packages";
import { WhyNdito } from "@/components/home/WhyNdito";
import CarouselWithText from "@/components/home/featured";
import { ExperienceShowcase } from "@/components/home/ExperienceShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TravelAgency",
              "@id": "https://nditotravel.co.tz/#organization",
              name: "Ndito Travel",
              url: "https://nditotravel.co.tz",
              logo: "https://nditotravel.co.tz/photos/ndito-travel-cars.webp",
              description:
                "Licensed Tanzanian tour operator specializing in wildlife safaris, Kilimanjaro climbs, and Zanzibar holidays.",
              telephone: "+255744903927",
              email: "office@nditotravel.co.tz",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Arusha",
                addressRegion: "Arusha",
                addressCountry: "TZ",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -3.3869,
                longitude: 36.683,
              },
              sameAs: [
                "https://www.facebook.com/p/Ndito-Travel-100083375855257/",
                "https://www.instagram.com/nditotravel/",
                "https://www.tripadvisor.com/Attraction_Review-g297913-d25567874-Reviews-Ndito_Travel-Arusha_Arusha_Region.html",
              ],
              priceRange: "$$",
              areaServed: {
                "@type": "Country",
                name: "Tanzania",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://nditotravel.co.tz/#website",
              url: "https://nditotravel.co.tz",
              name: "Ndito Travel",
              publisher: { "@id": "https://nditotravel.co.tz/#organization" },
            },
          ],
        }}
      />
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhyNdito />
        <CarouselWithText />
        <ExperienceShowcase />
        <TripPackages />
        <Testimonials />
      </div>
      <CtaBanner />
    </>
  );
}
