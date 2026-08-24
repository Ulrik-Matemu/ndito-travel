

/**
 * /destinations/ngorongoro-crater
 *
 * SEO + content strategy notes (remove before shipping if you want a clean file):
 * - Primary commercial targets: "ngorongoro crater day tour", "ngorongoro crater safari price",
 *   "ngorongoro crater tour from arusha", "ngorongoro crater tour operator arusha".
 * - Secondary long-tail targets covered on-page: best time to visit, crater vs serengeti,
 *   what to pack, is one day enough, crater conservation fee, big five odds.
 * - FAQPage + TouristAttraction + BreadcrumbList + Offer schema included at the bottom.
 * - Every price, date, review, and stat below is a clearly marked PLACEHOLDER — swap for
 *   real Ndito figures before launch. Do not ship placeholder numbers into production.
 * - Photo paths follow the existing /photos/*-nditotravel.webp convention but the files
 *   themselves don't exist yet — replace with real shoots before launch.
 */


import { Metadata } from "next";
import { TripPackages } from "@/components/home/trip-packages";
import localFont from "next/font/local";
import {
  Compass,
  ShieldCheck,
  Users,
  Mountain,
  Check,
  Backpack,
} from "lucide-react";
import { Button } from "@/components/shared/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Navbar } from "@/components/shared/navbar";
import NgorongoroHero from "@/components/ngorongoro/hero";
import WhyNdito from "@/components/ngorongoro/why-ngorongoro";
import DayTimeline from "@/components/ngorongoro/day-timeline";
import BestTime from "@/components/ngorongoro/best-time";
import WildlifeGrid from "@/components/ngorongoro/wildlife-grid";
import Pricing from "@/components/ngorongoro/pricing";
import Faqs from "@/components/ngorongoro/faqs";



export const metadata: Metadata = {
  title: "Ngorongoro Crater Day Tours & Safaris from Arusha | Ndito Travel",
  description:
    "Book your Ngorongoro Crater day tour with Ndito Travel. Compare tour pricing, view itinerary timelines, and explore Big Five safari options departing from Arusha.",
  keywords: [
    "Ngorongoro Crater day tour",
    "Ngorongoro Crater safari price",
    "Ngorongoro Crater tour from Arusha",
    "Ngorongoro Crater tour operator Arusha",
    "Ngorongoro conservation fee",
    "Big Five safari Tanzania",
    "Ngorongoro day trip cost",
    "ngorongoro crater safari",
    "crater safari in tanzania",
    "ngorongoro safari",
    "ngorongoro crater safaris",
  ],
  openGraph: {
    title: "Ngorongoro Crater Day Tours & Safaris | Ndito Travel",
    description:
      "Descend 600m into Africa's largest intact volcanic caldera. Guaranteed Big Five day safaris, transparent pricing, and daily departures from Arusha.",
    url: "https://nditotravel.co.tz/destinations/ngorongoro-crater",
    siteName: "Ndito Travel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/photos/ngorongoro-crater/ngorongoro-crater-landing-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Panoramic view of the Ngorongoro Crater floor during a safari with Ndito Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngorongoro Crater Day Tours & Safaris | Ndito Travel",
    description:
      "Explore the UNESCO World Heritage Ngorongoro Crater with local Arusha safari experts. View transparent pricing and itineraries.",
    images: ["/photos/ngorongoro-crater/ngorongoro-crater-landing-hero.jpg"],
  },
  alternates: {
    canonical: "https://nditotravel.co.tz/destinations/ngorongoro-crater",
  },
};

const LoubagMedium = localFont({
  src: "../../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../../public/fonts/Agrandir-Regular.otf",

});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const QUICK_FACTS = [
  { icon: Mountain, label: "Crater depth", value: "600m / 1,968ft" },
  { icon: Compass, label: "Floor area", value: "260 km² / 100mi²" },
  { icon: Users, label: "Large animals", value: "20,000+" },
  { icon: ShieldCheck, label: "Status", value: "UNESCO World Heritage" },
];




const PRICING_TIERS = [
  {
    name: "Shared Group Join-In",
    price: "$260",
    unit: "per person",
    bestFor: "Solo travelers and couples on a budget",
    included: [
      "Seat in a shared 4x4 (max 6–7 travelers)",
      "NCA conservation fees & crater service fee",
      "English-speaking driver-guide",
      "Picnic lunch & bottled water",
    ],
    excluded: ["Private vehicle", "Hotel pickup outside Arusha town", "Tips"],
    highlight: false,
  },
  {
    name: "Private Day Tour",
    price: "$420",
    unit: "per person (2 people)",
    bestFor: "Families and travelers who want their own vehicle and pace",
    included: [
      "Private 4x4 with pop-up roof, just your group",
      "NCA conservation fees & crater service fee",
      "Dedicated English-speaking driver-guide",
      "Picnic lunch & bottled water",
      "Flexible pickup point in Arusha or Moshi",
    ],
    excluded: ["Tips", "Alcoholic drinks"],
    highlight: true,
  },
  {
    name: "Ngorongoro + Serengeti Combo",
    price: "$1,045",
    unit: "per person, multi-day",
    bestFor: "Travelers who want the crater alongside the wider ecosystem",
    included: [
      "Private vehicle for the full itinerary",
      "Crater day + Serengeti game drives",
      "Lodge or tented camp accommodation",
      "All park & conservation fees",
      "Full board meals",
    ],
    excluded: ["International flights", "Tips", "Visa fees"],
    highlight: false,
  },
];

const PACKING_LIST = [
  "Warm layer for the crater rim (mornings can be under 10°C / 50°F)",
  "Light, breathable clothing for the crater floor (warms up quickly)",
  "Binoculars — the crater floor is huge and animals are often distant",
  "Camera with a zoom lens; a wide lens for rim landscape shots",
  "Sunscreen, hat, and sunglasses — high-altitude sun is strong",
  "Reusable water bottle",
  "Motion sickness tablets if you're sensitive to switchback roads",
  "Cash (USD or TZS) for tips and souvenirs at rim curio stalls",
];

const FAQS = [
  {
    q: "Is one day enough to see the Ngorongoro Crater?",
    a: "Yes. Because the crater floor is a contained 260 km² area with permanent water and resident wildlife, a single full-day game drive typically delivers stronger sightings per hour than a much larger park like the Serengeti. Most travelers see four or five of the Big Five in one day.",
  },
  {
    q: "Can you stay overnight inside the Ngorongoro Crater?",
    a: "No. Overnight stays on the crater floor are prohibited for everyone, including the Maasai communities who graze cattle there. All accommodation — from budget campsites to luxury lodges — sits up on the crater rim or in nearby Karatu, with game drives descending to the floor for the day.",
  },
  {
    q: "How much does a Ngorongoro Crater safari cost?",
    a: "Pricing depends mainly on whether you join a shared vehicle or book a private one, and whether you combine the crater with other parks. A shared day trip from Arusha is the most affordable option; a private vehicle costs more per person but gives you full control over pace and stops. See the pricing comparison above for a breakdown.",
  },
  {
    q: "What is the best time to visit the Ngorongoro Crater?",
    a: "The crater has resident wildlife year-round, so it's a good destination in any month — unlike parks that depend on migration timing. The dry season (June–October) offers the clearest roads and easiest visibility. The wetter months (November–May) bring green scenery, migratory birdlife on Lake Magadi, and thinner crowds.",
  },
  {
    q: "Is Ngorongoro Crater better than the Serengeti?",
    a: "They're different experiences rather than competitors. Ngorongoro is compact and near-guaranteed for dense wildlife sightings in a single day, including your best shot at black rhino. The Serengeti is vastly larger, better for multi-day exploration and the Great Migration. Many travelers do both — a Ngorongoro day trip pairs naturally with a Serengeti itinerary.",
  },
  {
    q: "How do you get to the Ngorongoro Crater from Arusha?",
    a: "It's roughly a 2.5 to 3 hour drive from Arusha to the crater rim, mostly on tarmac before the final ascent on a gravel road through the Ngorongoro Conservation Area. Day trips leave Arusha around 6:00–6:30 AM to allow a full day on the crater floor.",
  },
  {
    q: "What's the conservation fee for Ngorongoro Crater?",
    a: "Visitors pay a Ngorongoro Conservation Area entry fee plus a separate crater service fee for vehicles descending to the floor, both set by the Ngorongoro Conservation Area Authority (NCAA) and included in Ndito Travel's quoted tour prices — you won't be charged separately at the gate.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function NgorongoroCraterPage() {

  

  // Placeholder estimator — swap TODO base rates for real Ndito pricing before launch.
  

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://nditotravel.co.tz/" },
          { "@type": "ListItem", position: 2, name: "Destinations", item: "https://nditotravel.co.tz/destinations" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Ngorongoro Crater",
            item: "https://nditotravel.co.tz/destinations/ngorongoro-crater",
          },
        ],
      },
      {
        "@type": "TouristAttraction",
        name: "Ngorongoro Crater",
        description:
          "The world's largest intact volcanic caldera, part of the Ngorongoro Conservation Area in northern Tanzania, home to over 20,000 large mammals including the Big Five.",
        touristType: ["Wildlife safari", "Photography", "Nature"],
        isAccessibleForFree: false,
        publicAccess: true,
        geo: {
          "@type": "GeoCoordinates",
          latitude: 3.2,
          longitude: 35.5,
        },
        containedInPlace: {
          "@type": "Place",
          name: "Ngorongoro Conservation Area",
        },
      },
      {
        "@type": "Product",
        name: "Ngorongoro Crater Day Safari",
        description: "Full-day Ngorongoro Crater game drive safari departing from Arusha, Tanzania.",
        brand: { "@type": "Organization", name: "Ndito Travel" },
        offers: PRICING_TIERS.map((tier) => ({
          "@type": "Offer",
          name: tier.name,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          description: tier.bestFor,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <main className={AgrandirRegular.className}>
        {/* ============================================================ */}
        {/* HERO                                                          */}
        {/* ============================================================ */}
        <NgorongoroHero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ============================================================ */}
          {/* INTRO / WHY NGORONGORO                                       */}
          {/* ============================================================ */}
          <WhyNdito />

          {/* ============================================================ */}
          {/* INTERACTIVE TIMELINE — signature element                     */}
          {/* ============================================================ */}
          <DayTimeline />

          {/* ============================================================ */}
          {/* BEST TIME TO VISIT — month picker                            */}
          {/* ============================================================ */}
          <BestTime />
          {/* ============================================================ */}
          {/* WILDLIFE GRID                                                 */}
          {/* ============================================================ */}
         <WildlifeGrid />

          {/* ============================================================ */}
          {/* PRICING TIERS + CALCULATOR                                    */}
          {/* ============================================================ */}
         <Pricing />

          {/* ============================================================ */}
          {/* PACKING LIST                                                  */}
          {/* ============================================================ */}
          <section className="py-14 md:py-20">
            <div className="bg-[#231f20] text-white rounded-3xl p-6 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Backpack size={16} /> WHAT TO BRING
                </div>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${LoubagMedium.className}`}>
                  Packing for the Crater
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  The rim and the floor can differ by 15°C in temperature within the same
                  morning — pack in layers.
                </p>
              </div>
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {PACKING_LIST.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/* TESTIMONIALS (placeholder, schema-ready)                      */}
          {/* ============================================================ */}
          {/* <section className="py-14 md:py-20">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
                  ● GUEST REVIEWS
                </span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
                  Travelers on the Crater Floor
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "TODO: real guest quote — e.g. specifics on rhino/lion sightings, guide name, pacing of the day.",
                  name: "TODO: Guest name",
                  origin: "TODO: Country • Ngorongoro Day Trip",
                },
                {
                  quote:
                    "TODO: real guest quote — e.g. comparison to expectations, comfort of vehicle, lunch spot experience.",
                  name: "TODO: Guest name",
                  origin: "TODO: Country • Ngorongoro + Serengeti Combo",
                },
                {
                  quote:
                    "TODO: real guest quote — e.g. value for money, booking process, communication with Ndito team.",
                  name: "TODO: Guest name",
                  origin: "TODO: Country • Private Day Tour",
                },
              ].map((review, i) => (
                <div
                  key={i}
                  className="bg-[#f6f2ee] p-6 sm:p-7 rounded-2xl border border-black/5 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-600 mb-4">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} size={15} className="fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <Quote size={24} className="text-amber-900/30 mb-2" />
                    <p className="text-sm text-gray-700 leading-relaxed italic">{review.quote}</p>
                  </div>
                  <div className="flex items-center gap-3 pt-5 border-t border-black/10 mt-5">
                    <div className="w-9 h-9 rounded-full bg-amber-900/10 border border-amber-800 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">{review.name}</p>
                      <p className="text-xs text-amber-900 font-medium">{review.origin}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section> */}

          {/* ============================================================ */}
          {/* FAQ — schema-backed accordion                                 */}
          {/* ============================================================ */}
          <Faqs />

          {/* ============================================================ */}
          {/* RELATED ITINERARIES — internal linking / topical authority   */}
          {/* ============================================================ */}
          <TripPackages />
        </div>

        {/* ============================================================ */}
        {/* STICKY MOBILE BOOKING BAR                                     */}
        {/* ============================================================ */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#231f20]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] text-gray-400 uppercase font-bold block">From</span>
            <span className={`text-lg font-extrabold text-amber-400 ${LoubagMedium.className}`}>
              TODO: $260
            </span>
          </div>
          <Button
            href="/book?tour=ngorongoro-crater"
            ariaLabel="Book your Ngorongoro Crater safari"
            variant="secondary"
            size="sm"
          >
            BOOK NOW &rarr;
          </Button>
        </div>

        {/* ============================================================ */}
        {/* FINAL CTA                                                     */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16 sm:mb-8">
          <ScrollReveal direction="up">
            <div className="bg-[#231f20] text-white rounded-3xl overflow-hidden relative p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/10 flex items-center min-h-[320px]">
              <div className="relative z-10 max-w-xl space-y-4">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-400 flex items-center gap-2">
                  <Compass size={16} /> ● READY WHEN YOU ARE
                </span>
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white ${LoubagMedium.className}`}>
                  Descend into Ngorongoro
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Tell us your travel dates and group size — our Arusha-based team will confirm
                  availability and an exact quote within 24 hours.
                </p>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button
                    href="/book?tour=ngorongoro-crater"
                    ariaLabel="Book your Ngorongoro Crater safari online"
                    variant="secondary"
                    size="md"
                  >
                    BOOK YOUR SAFARI &rarr;
                  </Button>
                  <Button
                    href="https://wa.me/255658883554"
                    external
                    ariaLabel="Chat on WhatsApp with Ndito Travel"
                    variant="tertiary"
                    size="md"
                    className="text-white hover:bg-white/10 border-white/20"
                  >
                    CHAT ON WHATSAPP
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}