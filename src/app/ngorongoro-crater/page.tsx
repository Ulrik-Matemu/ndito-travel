"use client";

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

import { useState, useMemo } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { TripPackages } from "@/components/home/trip-packages";
import Link from "next/link";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Compass,
  Clock,
  ShieldCheck,
  Sunrise,
  Sun,
  CloudRain,
  Users,
  Car,
  Camera,
  Mountain,
  Droplets,
  ChevronDown,
  Check,
  X,
  Star,
  Quote,
  Calendar,
  Backpack,
  Info,
} from "lucide-react";
import { Button } from "@/components/shared/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Navbar } from "@/components/shared/navbar";



// export const metadata: Metadata = {
//   title: "Visit Ngorongoro Crater In Tanzania | Ndito Travel",
//   description:
//     "Discover Ngorongoro crater with Ndito Travel.",
//   keywords: [
//     "Ngorongoro Crater",
//   ],
//   openGraph: {
//     title: "Visit Ngorongoro Crater in Tanzania | Ndito Travel",
//     description:
//       "Dive into Africa's largest crater - Ngorongoro Crater",
//     url: "https://nditotravel.co.tz/ngorongoro-crater",
//     images: [
//       {
//         url: "/photos/ngorongoto-crater/ngorongoro-crater-landing-hero.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Visit Ngorongoro Crater with Ndito Travel",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Ngorongoro Crater | Ndito Travel",
//     description:
//       "Dive into Africa's largest caldera/crater - Ngorongoro Crater",
//     images: ["/photos/ngorongoto-crater/ngorongoro-crater-landing-hero.jpg"],
//   },
//   alternates: {
//     canonical: "https://nditotravel.co.tz/ngorongoro-crater",
//   },
// };

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
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

const TIMELINE_STOPS = [
  {
    time: "6:00 AM",
    title: "Pickup in Arusha",
    icon: Sunrise,
    elevation: "1,400m",
    description:
      "Your guide collects you from your Arusha hotel in a private 4x4 Land Cruiser with pop-up roof. Coffee, water, and a packed breakfast are on board for the road.",
    photo: "/photos/ngorongoro-crater/ngorongoro-sunrise.jpg",
  },
  {
    time: "8:30 AM",
    title: "Ngorongoro Conservation Area gate",
    icon: MapPin,
    elevation: "1,700m",
    description:
      "Entry formalities at the NCA gate. This is also where you get your first proper view over the highland forest before the road climbs to the crater rim.",
    photo: "/photos/ngorongoro-crater/ngorongoro-gate-ndito-travel.jpg",
  },
  {
    time: "9:15 AM",
    title: "Crater rim viewpoint",
    icon: Mountain,
    elevation: "2,286m",
    description:
      "The road tops out at the rim — your first look down into the caldera. On a clear morning you can see Lake Magadi as a pale streak on the crater floor, 600m below.",
    photo: "/photos/ngorongoro-crater/Viewpoint-at-Crater.jpg",
  },
  {
    time: "9:45 AM",
    title: "Descent to the crater floor",
    icon: Car,
    elevation: "2,286m → 1,700m",
    description:
      "A steep, switchbacking descent road drops you onto the floor in about 25 minutes. This is the only vehicle route down — the walls that make Ngorongoro spectacular are also what keep it contained.",
    photo: "/photos/ngorongoro-crater/ngorongoro-1c.jpg",
  },
  {
    time: "10:15 AM – 1:00 PM",
    title: "Game drive across the floor",
    icon: Camera,
    elevation: "1,700m",
    description:
      "Open grassland, acacia woodland, swamp, and the soda lake — four habitats inside one caldera. This is where the Big Five sightings happen, often within a few hundred meters of each other.",
    photo: "/photos/ngorongoro-crater/ngorongoro-floor.jpg",
  },
  {
    time: "1:00 PM",
    title: "Picnic lunch at the Ngoitokitok Springs",
    icon: Droplets,
    elevation: "1,700m",
    description:
      "A freshwater spring picnic site on the crater floor — one of the few spots you're permitted to step out of the vehicle. Hippos are usually visible in the pool.",
    photo: "/photos/ngorongoro-crater/lunch-at-ngorongoro.jpg",
  },
  {
    time: "2:00 PM – 3:30 PM",
    title: "Afternoon game drive",
    icon: Camera,
    elevation: "1,700m",
    description:
      "Wildlife tends to be more active as the day cools. Your guide works the areas where sightings have been reported that morning — lion prides, rhino in the open, flamingos at Lake Magadi.",
    photo: "/photos/ngorongoro-crater/ngorongoro-afternoon.jpg",
  },
  {
    time: "4:00 PM",
    title: "Ascent and return to Arusha",
    icon: Sun,
    elevation: "1,700m → 1,400m",
    description:
      "Back up the crater wall and on the road to Arusha, arriving at your hotel in the early evening. Overnight stays inside the crater itself are not permitted for anyone, including the resident Maasai.",
    photo: "/photos/ngorongoro-crater/ngorongoro-ascent.jpg",
  },
];

const MONTHS = [
  {
    key: "jan",
    label: "Jan",
    season: "Dry, warm",
    icon: Sun,
    detail:
      "Short dry spell between the rains. Good visibility, calving season is underway in the wider Serengeti ecosystem.",
    wildlife: "Newborn wildebeest and zebra calves in surrounding plains; predators active near herds.",
  },
  {
    key: "feb",
    label: "Feb",
    season: "Dry, warm",
    icon: Sun,
    detail: "One of the driest, clearest months. Excellent for photography with long visibility across the crater floor.",
    wildlife: "Peak calving continues; high predator activity.",
  },
  {
    key: "mar",
    label: "Mar",
    season: "Start of long rains",
    icon: CloudRain,
    detail: "Rains typically begin. Landscape turns green fast, fewer vehicles on the crater floor.",
    wildlife: "Migratory birds still present; crater wildlife unaffected by rain, viewing remains strong.",
  },
  {
    key: "apr",
    label: "Apr",
    season: "Long rains",
    icon: CloudRain,
    detail: "Wettest month. Some lodges close for maintenance. Roads can be muddy but the crater floor itself drains well.",
    wildlife: "Lush scenery, dramatic skies, lowest crowd levels of the year.",
  },
  {
    key: "may",
    label: "May",
    season: "Long rains easing",
    icon: CloudRain,
    detail: "Rains tapering off through the month. Green season pricing and availability still apply at most lodges.",
    wildlife: "Waterbirds still present at Lake Magadi.",
  },
  {
    key: "jun",
    label: "Jun",
    season: "Dry season begins",
    icon: Sun,
    detail: "Vegetation thins, dry season crowds start building. Cooler mornings on the rim — bring a fleece.",
    wildlife: "Visibility improving fast as grass shortens.",
  },
  {
    key: "jul",
    label: "Jul",
    season: "Peak dry season",
    icon: Sun,
    detail: "High season. Book vehicles and rim lodges well in advance. Clear skies most days.",
    wildlife: "Excellent Big Five visibility; dense wildlife concentration at permanent water sources.",
  },
  {
    key: "aug",
    label: "Aug",
    season: "Peak dry season",
    icon: Sun,
    detail: "Busiest month on the crater floor alongside July. Early departure from Arusha helps beat the vehicle queue at the rim.",
    wildlife: "Consistently strong sightings; short grass makes the floor easy to scan.",
  },
  {
    key: "sep",
    label: "Sep",
    season: "Peak dry season",
    icon: Sun,
    detail: "Still peak season with excellent weather. Good month to pair a crater day trip with the Serengeti.",
    wildlife: "High predator activity around the remaining water points.",
  },
  {
    key: "oct",
    label: "Oct",
    season: "Late dry season",
    icon: Sun,
    detail: "Dry season winding down, slightly thinner crowds than Jul–Sep with similar conditions.",
    wildlife: "Still strong wildlife concentration; landscape starting to dry out further.",
  },
  {
    key: "nov",
    label: "Nov",
    season: "Short rains",
    icon: CloudRain,
    detail: "Short, often afternoon-only rains. Landscape greens up quickly and light turns dramatic for photography.",
    wildlife: "Migratory birds, including flamingos, begin arriving at Lake Magadi in numbers.",
  },
  {
    key: "dec",
    label: "Dec",
    season: "Short rains easing",
    icon: CloudRain,
    detail: "Rains ease through the month. A good value window — green scenery without the full wet-season mud.",
    wildlife: "Birdlife at its best; resident wildlife present year-round regardless of season.",
  },
];

const WILDLIFE = [
  {
    name: "Black rhino",
    odds: "Good",
    note: "Ngorongoro is the single best place in Tanzania to see black rhino, usually near Lake Magadi.",
  },
  { name: "Lion", odds: "Excellent", note: "One of the densest lion populations in Africa lives on the crater floor." },
  { name: "Elephant", odds: "Good", note: "Mostly large bulls — crater elephants are known for their size." },
  { name: "Buffalo", odds: "Excellent", note: "Large herds graze the open grassland almost daily." },
  { name: "Leopard", odds: "Fair", note: "Present but shy — your best chance is along the Lerai Forest edge." },
  { name: "Hippo", odds: "Excellent", note: "Resident pool at Ngoitokitok Springs, visible from the picnic site." },
  { name: "Flamingo", odds: "Seasonal", note: "Gather by the thousands on Lake Magadi, best Nov–May." },
  { name: "Hyena", odds: "Excellent", note: "Large clans are active and easy to spot across the open floor." },
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
  const [activeStop, setActiveStop] = useState(0);
  const [activeMonth, setActiveMonth] = useState(6); // July default — peak season
  const [groupSize, setGroupSize] = useState(2);
  const [vehicleType, setVehicleType] = useState<"shared" | "private">("private");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const currentStop = TIMELINE_STOPS[activeStop];
  const currentMonth = MONTHS[activeMonth];

  // Placeholder estimator — swap TODO base rates for real Ndito pricing before launch.
  const estimate = useMemo(() => {
    const baseShared = 260; // TODO: replace with real per-person shared rate
    const basePrivate = 420; // TODO: replace with real per-person private rate (2 pax)
    const rate = vehicleType === "shared" ? baseShared : basePrivate;
    const privateDiscount = vehicleType === "private" && groupSize > 2 ? 0.85 : 1;
    const total = Math.round(rate * groupSize * privateDiscount);
    return { perPerson: Math.round(total / groupSize), total };
  }, [groupSize, vehicleType]);

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
        <section className="relative w-full min-h-[88vh] flex flex-col justify-end pt-28 pb-10 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#231f20] text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/photos/ngorongoro-crater/ngorongoro-crater-landing-hero.jpg"
              alt="Aerial view of the Ngorongoro Crater floor, Tanzania"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-75"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 pointer-events-none z-[1]" />

          {/* Breadcrumb */}
          

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative z-10 max-w-3xl space-y-5"
          >
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 flex items-center gap-2">
              ● NGORONGORO CONSERVATION AREA, TANZANIA
            </span>
            <h1
              className={`text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.2] font-extrabold text-white drop-shadow-lg ${LoubagMedium.className}`}
            >
              Ngorongoro Crater Safari
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
              The world&apos;s largest intact volcanic caldera, and the closest thing to a
              guaranteed Big Five day in Tanzania. Descend 600 meters into a self-contained
              wilderness with over 20,000 large animals on a single crater floor.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/book?tour=ngorongoro-crater"
                ariaLabel="Book your Ngorongoro Crater safari"
                variant="secondary"
                size="md"
              >
                BOOK THIS SAFARI &rarr;
              </Button>
              <Button
                href="https://wa.me/255658883554"
                external
                ariaLabel="Chat on WhatsApp about Ngorongoro Crater tours"
                variant="tertiary"
                size="md"
                className="text-white hover:bg-white/10 border-white/20"
              >
                CHAT ON WHATSAPP
              </Button>
            </div>
          </motion.div>

          {/* Quick facts bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 w-full pt-6 mt-10 border-t border-white/20"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {QUICK_FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/10 text-amber-400 rounded-xl shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">
                        {fact.label}
                      </span>
                      <span className={`text-lg sm:text-xl font-bold text-white ${LoubagMedium.className}`}>
                        {fact.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ============================================================ */}
          {/* INTRO / WHY NGORONGORO                                       */}
          {/* ============================================================ */}
          <section className="py-14 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              <ScrollReveal direction="up" className="lg:col-span-3 space-y-5">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block">
                  ● WHAT MAKES IT DIFFERENT
                </span>
                <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                  A wilderness with walls
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Formed when a volcano roughly the size of Kilimanjaro erupted and collapsed
                  in on itself around 2.5 million years ago, the Ngorongoro Crater is a caldera
                  600 meters deep and 260 square kilometers wide — walled in on every side, yet
                  large enough to hold its own grassland, forest, swamp, and soda lake.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  That containment is what makes it exceptional for wildlife viewing. Animals
                  don&apos;t migrate out at scale, so instead of covering huge distances hoping
                  to find them, you spend your day watching what&apos;s already there — lion
                  prides moving between hunting grounds, black rhino grazing in the open,
                  flamingos crowding the shallows of Lake Magadi.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The Ngorongoro Conservation Area surrounding it is also unusual: it&apos;s the
                  only protected area in Tanzania where wildlife conservation and human habitation
                  coexist by design, and Maasai communities still graze cattle across the
                  highlands above the crater rim.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.15} className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-black/10 h-[340px] lg:h-[440px]">
                <Image
                  src="/photos/ngorongoro-crater/ngorongoro-lion.jpg"
                  alt="Flamingos on Lake Magadi inside the Ngorongoro Crater"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider bg-amber-900/80 px-3 py-1 rounded-full backdrop-blur-xs">
                    Lake Magadi &bull; Crater Floor
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* ============================================================ */}
          {/* INTERACTIVE TIMELINE — signature element                     */}
          {/* ============================================================ */}
          <section className="py-14 md:py-20">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
                  ● YOUR DAY IN THE CRATER
                </span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
                  From Arusha to the Crater Floor and Back
                </h2>
                <p className="mt-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  A Ngorongoro day trip covers a 900-meter descent and climb in a single day.
                  Follow the route stop by stop below.
                </p>
              </div>
            </ScrollReveal>

            <div className="bg-[#e8dfd7] rounded-3xl p-5 sm:p-8 md:p-12 border border-black/5">
              {/* Stepper row */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-8">
                {TIMELINE_STOPS.map((stop, idx) => {
                  const Icon = stop.icon;
                  const isActive = idx === activeStop;
                  return (
                    <button
                      key={stop.title}
                      onClick={() => setActiveStop(idx)}
                      aria-label={`View stop: ${stop.title}`}
                      aria-current={isActive ? "step" : undefined}
                      className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl text-left transition-all duration-200 border flex flex-col items-start gap-1.5 ${
                        isActive
                          ? "bg-amber-900 text-white border-amber-900 shadow-md scale-102"
                          : "bg-[#f6f2ee] text-gray-800 border-black/5 hover:bg-amber-100"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-gray-600"}`} />
                      <span className="text-[10px] sm:text-xs font-mono font-bold leading-tight">
                        {stop.time}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Detail panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStop}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8"
                >
                  <div className="lg:col-span-3 bg-[#231f20] text-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                        <div>
                          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                            Stop {activeStop + 1} of {TIMELINE_STOPS.length}
                          </span>
                          <h3 className={`text-2xl sm:text-3xl font-bold ${LoubagMedium.className}`}>
                            {currentStop.title}
                          </h3>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 flex items-center gap-1.5">
                          <Clock size={13} className="text-amber-400" />
                          {currentStop.time}
                        </div>
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                        {currentStop.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs text-amber-400 font-semibold">
                      <Mountain size={14} />
                      Elevation: {currentStop.elevation}
                    </div>
                  </div>

                  <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-black/10 bg-[#f6f2ee] flex items-center justify-center min-h-[220px]">
                    <div className="text-center px-6 text-xs text-gray-500 font-mono">
                        <Image
                            src={currentStop.photo}
                            fill
                            alt={currentStop.title}
                            />
                     
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* ============================================================ */}
          {/* BEST TIME TO VISIT — month picker                            */}
          {/* ============================================================ */}
          <section className="py-14 md:py-20">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
                  ● PLAN YOUR VISIT
                </span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
                  Best Time to Visit the Ngorongoro Crater
                </h2>
                <p className="mt-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  Unlike migration-dependent parks, the crater has resident wildlife year-round.
                  Pick a month to see what to expect.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 mb-6">
              {MONTHS.map((month, idx) => {
                const Icon = month.icon;
                const isActive = idx === activeMonth;
                return (
                  <button
                    key={month.key}
                    onClick={() => setActiveMonth(idx)}
                    aria-current={isActive ? "true" : undefined}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all duration-200 ${
                      isActive
                        ? "bg-amber-900 text-white border-amber-900 shadow-md"
                        : "bg-[#f6f2ee] text-gray-700 border-black/5 hover:bg-amber-100"
                    }`}
                  >
                    <Icon size={16} className={isActive ? "text-amber-300" : "text-gray-500"} />
                    <span className="text-xs font-bold">{month.label}</span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMonth}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="bg-[#f6f2ee] rounded-2xl p-6 sm:p-8 border border-black/5 shadow-md grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div>
                  <span className="text-xs uppercase font-extrabold text-amber-900 tracking-wider mb-2 block">
                    Season
                  </span>
                  <p className={`text-xl font-bold text-gray-900 mb-2 ${LoubagMedium.className}`}>
                    {currentMonth.season}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">{currentMonth.detail}</p>
                </div>
                <div>
                  <span className="text-xs uppercase font-extrabold text-amber-900 tracking-wider mb-2 block">
                    Wildlife notes
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{currentMonth.wildlife}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-black/5 flex items-start gap-3">
                  <Info size={18} className="text-amber-900 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Conservation fees and resident wildlife are constant year-round — the crater
                    floor doesn&apos;t empty out the way migration routes do elsewhere in Tanzania.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </section>

          {/* ============================================================ */}
          {/* WILDLIFE GRID                                                 */}
          {/* ============================================================ */}
          <section className="py-14 md:py-20">
            <ScrollReveal direction="up">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-1">
                    ● WHAT YOU&apos;LL SEE
                  </span>
                  <h2 className={`text-3xl sm:text-4xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
                    Wildlife of the Crater Floor
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 max-w-md">
                  Sighting odds based on typical single-day game drives — no sighting is ever
                  guaranteed with wild animals.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {WILDLIFE.map((animal) => (
                <div
                  key={animal.name}
                  className="bg-[#f6f2ee] rounded-2xl p-5 border border-black/5 shadow-xs hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">{animal.name}</h3>
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                        animal.odds === "Excellent"
                          ? "bg-emerald-100 text-emerald-800"
                          : animal.odds === "Good"
                          ? "bg-amber-100 text-amber-900"
                          : animal.odds === "Seasonal"
                          ? "bg-sky-100 text-sky-800"
                          : "bg-stone-200 text-stone-700"
                      }`}
                    >
                      {animal.odds}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{animal.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================ */}
          {/* PRICING TIERS + CALCULATOR                                    */}
          {/* ============================================================ */}
          <section className="py-14 md:py-20">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
                  ● TRANSPARENT PRICING
                </span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
                  Ngorongoro Crater Safari Pricing
                </h2>
                <p className="mt-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  All prices include NCA conservation fees, the crater service fee, a
                  driver-guide, and lunch. No hidden charges at the gate.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between border shadow-md ${
                    tier.highlight
                      ? "bg-[#231f20] text-white border-amber-900/40 scale-[1.02] shadow-xl"
                      : "bg-[#f6f2ee] text-gray-900 border-black/5"
                  }`}
                >
                  <div>
                    {tier.highlight && (
                      <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-amber-900/40 px-2.5 py-1 rounded-full inline-block mb-4">
                        Most Popular
                      </span>
                    )}
                    <h3 className={`text-xl font-bold mb-1 ${LoubagMedium.className}`}>{tier.name}</h3>
                    <p className={`text-xs mb-4 ${tier.highlight ? "text-gray-300" : "text-gray-600"}`}>
                      {tier.bestFor}
                    </p>
                    <div className="flex items-baseline gap-1.5 mb-6">
                      <span className={`text-3xl sm:text-4xl font-extrabold ${tier.highlight ? "text-amber-400" : "text-gray-900"} ${LoubagMedium.className}`}>
                        {tier.price}
                      </span>
                      <span className={`text-xs ${tier.highlight ? "text-gray-400" : "text-gray-500"}`}>
                        {tier.unit}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {tier.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs sm:text-sm">
                          <Check size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className={tier.highlight ? "text-gray-200" : "text-gray-700"}>{item}</span>
                        </li>
                      ))}
                      {tier.excluded.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs sm:text-sm opacity-60">
                          <X size={15} className="text-gray-400 shrink-0 mt-0.5" />
                          <span className={tier.highlight ? "text-gray-400" : "text-gray-500"}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    href="/book?tour=ngorongoro-crater"
                    ariaLabel={`Enquire about ${tier.name}`}
                    variant={tier.highlight ? "secondary" : "tertiary"}
                    size="md"
                    className={`w-full mt-4 ${!tier.highlight ? "border-black/20 text-gray-900 hover:bg-black/5" : ""}`}
                  >
                    ENQUIRE NOW
                  </Button>
                </div>
              ))}
            </div>

            {/* Interactive estimator */}
            <div className="bg-[#e8dfd7] rounded-3xl p-6 sm:p-10 border border-black/5">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
                    ● QUICK ESTIMATE
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-3 ${LoubagMedium.className}`}>
                    Estimate your trip cost
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    A rough starting figure — your guide will confirm an exact quote based on
                    dates, lodge choice, and season.
                  </p>
                </div>

                <div className="lg:col-span-3 bg-[#f6f2ee] rounded-2xl p-6 sm:p-8 border border-black/5 shadow-md">
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    <div className="flex-1">
                      <label className="text-xs uppercase font-bold text-gray-600 tracking-wider block mb-2">
                        Vehicle type
                      </label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setVehicleType("shared")}
                          className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                            vehicleType === "shared"
                              ? "bg-amber-900 text-white"
                              : "bg-white text-gray-700 border border-black/10"
                          }`}
                        >
                          Shared
                        </button>
                        <button
                          onClick={() => setVehicleType("private")}
                          className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                            vehicleType === "private"
                              ? "bg-amber-900 text-white"
                              : "bg-white text-gray-700 border border-black/10"
                          }`}
                        >
                          Private
                        </button>
                      </div>
                    </div>

                    <div className="flex-1">
                      <label className="text-xs uppercase font-bold text-gray-600 tracking-wider block mb-2">
                        Travelers: {groupSize}
                      </label>
                      <input
                        type="range"
                        min={1}
                        max={7}
                        value={groupSize}
                        onChange={(e) => setGroupSize(Number(e.target.value))}
                        className="w-full accent-amber-900"
                        aria-label="Number of travelers"
                      />
                      <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                        <span>1</span>
                        <span>7</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end justify-between pt-4 border-t border-black/10">
                    <div>
                      <span className="text-[11px] uppercase text-gray-500 font-bold block">
                        Estimated total
                      </span>
                      <span className={`text-3xl sm:text-4xl font-extrabold text-gray-900 ${LoubagMedium.className}`}>
                        ${estimate.total.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] uppercase text-gray-500 font-bold block">
                        Per person
                      </span>
                      <span className="text-lg font-bold text-amber-900">
                        ${estimate.perPerson.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-3">
                    TODO: illustrative estimate only — replace base rates with confirmed Ndito
                    pricing before launch.
                  </p>
                </div>
              </div>
            </div>
          </section>

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
          <section className="py-14 md:py-20">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
                  ● COMMON QUESTIONS
                </span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
                  Ngorongoro Crater FAQ
                </h2>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="bg-[#f6f2ee] rounded-2xl border border-black/5 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    >
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{faq.q}</span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-amber-900 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-gray-700 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

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
              TODO: $XXX
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