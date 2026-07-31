export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: "Trekking" | "Safaris" | "Islands" | "Logistics";
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  heroImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  content: {
    heading: string;
    body: string;
  }[];
  relatedPackageSlugs: string[];
}

export const articles: Article[] = [
  {
    slug: "kilimanjaro-climb-cost-guide",
    title: "Kilimanjaro Climb Cost 2026/2027: Complete Price & Budget Breakdown",
    subtitle: "Understand park fees, guide wages, gear costs, and why budget operators put safety at risk.",
    excerpt:
      "Planning to climb Mount Kilimanjaro? Get an honest, itemized breakdown of mandatory park fees, ethical crew wages, equipment, and hidden costs to budget your trek accurately.",
    category: "Trekking",
    readTime: "8 min read",
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-15",
    heroImage: "/photos/kilimanjaro-hero-nditotravel.webp",
    author: {
      name: "Jackson Mollel",
      role: "Head Kilimanjaro Expedition Leader",
      avatar: "/photos/review-1.webp",
    },
    seo: {
      title: "Kilimanjaro Climb Cost 2026: Complete Price & Budget Breakdown",
      description:
        "Detailed cost breakdown to climb Mount Kilimanjaro in 2026/2027. Learn about park fees, guide & porter wages, safety equipment, and fair pricing.",
      keywords: [
        "kilimanjaro climb cost",
        "how much to climb kilimanjaro",
        "kilimanjaro budget breakdown",
        "kilimanjaro park fees 2026",
        "ethical kilimanjaro tour operator",
      ],
    },
    content: [
      {
        heading: "1. The True Cost of Climbing Mount Kilimanjaro",
        body: `Climbing Mount Kilimanjaro (5,895m / 19,341ft) is a once-in-a-lifetime expedition. However, prices online vary wildly—from budget operators offering $1,400 treks to luxury outfitters charging over $5,000. Understanding where your money goes is crucial for safety, comfort, and ethical porter treatment.

On average, a safe, high-quality 7-day Kilimanjaro climb with Ndito Travel costs between **$2,100 and $2,850 per person** depending on group size and route.`,
      },
      {
        heading: "2. Mandatory National Park Fees (KINAPA)",
        body: `Over 50% to 60% of any legitimate climb price goes directly to the Tanzania National Parks Authority (KINAPA). Mandatory non-negotiable fees per climber include:

- **Conservation Fees:** $70 USD per day ($490 for 7 days)
- **Camping / Hut Fees:** $50 to $60 USD per night ($300 to $360 for 6 nights)
- **Rescue Fees:** $20 USD per trek
- **Guide & Porter Entry Fees:** ~$2 USD per crew member per day
- **18% Tanzanian Value Added Tax (VAT):** Mandated by law on all tourism services.

For a standard 7-day Machame or Lemosho climb, government fees alone total **$1,100 – $1,300 USD per person** before food, transport, or salaries are added.`,
      },
      {
        heading: "3. Crew Salaries & KPAP Ethical Standards",
        body: `A standard 7-day climb requires a team of 10 to 15 crew members for 2 climbers (including 1 Lead Guide, 1 Assistant Guide, 1 Cook, and 10 to 12 Porters). 

Budget operators charging under $1,800 often cut costs by underpaying porters or skimping on their meals and gear. At Ndito Travel, we strictly follow **Kilimanjaro Porters Assistance Project (KPAP)** guidelines:
- Fair, guaranteed wages paid on time
- 3 warm meals a day for all crew
- Proper 4-season waterproof sleeping gear and outerwear
- Maximum weight limit of 20kg (44lbs) per porter.`,
      },
      {
        heading: "4. Medical Equipment & Safety Gear",
        body: `Safety is non-negotiable on high-altitude treks. Reputable operators invest in high-grade equipment:
- Medical-grade emergency bottled oxygen
- Pulse oximeters for twice-daily altitude checkups
- Wilderness First Responder (WFR) certified lead guides
- Four-season Mountain Hardwear / The North Face tents with waterproof rainflies.`,
      },
      {
        heading: "5. Tipping Guidelines & Extra Expenses",
        body: `Tipping is customary on Kilimanjaro to reward your hardworking crew. Recommended crew tipping amounts per group per day:
- **Lead Guide:** $15 – $20 / day
- **Assistant Guide:** $10 – $15 / day
- **Cook:** $10 – $12 / day
- **Porters:** $8 – $10 / day per porter

Other potential costs include pre-climb hotel stays in Moshi/Arusha ($80–$150/night), gear rental (sleeping bag, trekking poles), and Tanzanian entry visa ($50–$100).`,
      },
    ],
    relatedPackageSlugs: ["tanzania-trip-2025"],
  },
  {
    slug: "kilimanjaro-routes-compared",
    title: "Kilimanjaro Routes Compared: Machame vs Lemosho vs Marangu vs Northern Circuit",
    subtitle: "Discover summit success rates, scenery, difficulty levels, and acclimatization profiles.",
    excerpt:
      "Comparing Mount Kilimanjaro's main routes: Machame, Lemosho, Marangu, and Northern Circuit. Find out which route best matches your fitness and timeline.",
    category: "Trekking",
    readTime: "10 min read",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-18",
    heroImage: "/photos/Mount_Kilimanjaro_the_Crater_01.webp",
    author: {
      name: "Jackson Mollel",
      role: "Head Kilimanjaro Expedition Leader",
      avatar: "/photos/review-1.webp",
    },
    seo: {
      title: "Kilimanjaro Routes Compared: Success Rates & Altitude Profiles",
      description:
        "Comprehensive guide comparing Kilimanjaro routes: Lemosho 8-day vs Machame 7-day vs Marangu. Learn summit success rates and acclimatization tips.",
      keywords: [
        "kilimanjaro routes comparison",
        "best kilimanjaro route for beginners",
        "lemosho vs machame route",
        "kilimanjaro summit success rate",
        "machame route 7 days",
      ],
    },
    content: [
      {
        heading: "1. Overview of Kilimanjaro Trekking Routes",
        body: `Choosing the right route is the single most important decision for a successful summit of Mount Kilimanjaro. While all routes eventually lead to Uhuru Peak (5,895m), they differ significantly in scenery, crowd density, acclimatization profiles, and summit success rates.`,
      },
      {
        heading: "2. The Lemosho Route (8 Days) — Recommended Overall",
        body: `**Success Rate:** ~95% | **Difficulty:** Moderate | **Scenery:** Exceptional

Approaching from the west, the Lemosho Route is widely considered the most scenic trail on Kilimanjaro. It spans 8 days, giving your body ample time to adapt to rising altitude ("climb high, sleep low" at Lava Tower). 

- **Highlights:** Remote forest start, Shira Plateau crossing, panoramic Barranco Wall, high summit success rate.
- **Best For:** Hikers seeking maximum comfort, stunning photography, and high summit chances.`,
      },
      {
        heading: "3. The Machame Route (7 Days) — The 'Whiskey' Route",
        body: `**Success Rate:** ~92% (7-day version) | **Difficulty:** Strenuous | **Scenery:** Excellent

The Machame Route is Kilimanjaro's most popular trail. It features diverse landscapes—from tropical rainforest to moorland and alpine desert. The 7-day variation includes key acclimatization milestones such as Lava Tower (4,630m) and the iconic Barranco Wall.

- **Highlights:** Varied terrain, dramatic ridge walks, lively campsites.
- **Best For:** Active hikers looking for a classic high-energy mountain adventure.`,
      },
      {
        heading: "4. The Marangu Route (6 Days) — The 'Coca-Cola' Route",
        body: `**Success Rate:** ~65% | **Difficulty:** Moderate | **Scenery:** Good

Marangu is the only route featuring wooden sleeping huts instead of camping tents. While often perceived as 'easiest' due to its gradual slope, shorter 5-day itineraries have low success rates due to insufficient altitude adjustment. At Ndito Travel, we recommend at least 6 days on Marangu.

- **Highlights:** Sleeping huts, rainforest wildlife, classic ascending & descending path.
- **Best For:** Trekkers who prefer not to sleep in tents.`,
      },
      {
        heading: "5. The Northern Circuit (9 Days) — Ultimate Acclimatization",
        body: `**Success Rate:** ~98% | **Difficulty:** Moderate | **Scenery:** Panoramic 360°

The Northern Circuit is the longest and newest trail on Kilimanjaro. It circles the quiet northern slopes near the Kenyan border. With 9 days of gradual elevation gain, it yields the highest summit success rate of any route.

- **Highlights:** 360-degree mountain views, zero crowds on northern slopes, peak acclimatization.
- **Best For:** Trekkers with extra time seeking solitude and near-guaranteed summit success.`,
      },
    ],
    relatedPackageSlugs: ["tanzania-trip-2025"],
  },
  {
    slug: "tanzania-safari-cost-guide",
    title: "Tanzania Safari Cost Guide: Budget, Mid-Range & Luxury Pricing Explained",
    subtitle: "Breakdown of daily safari budgets, park entry fees, private 4x4 land cruisers, and lodge tiers.",
    excerpt:
      "How much does a Tanzania safari cost in 2026? Read our transparent price guide covering daily expenses, park fees, private vehicle hire, and seasonal lodge rates.",
    category: "Safaris",
    readTime: "7 min read",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-20",
    heroImage: "/photos/ndito-travel-cars.webp",
    author: {
      name: "Ulrik Matemu",
      role: "Safari Director & Founder",
      avatar: "/photos/review-2.webp",
    },
    seo: {
      title: "Tanzania Safari Cost Per Person: Budget, Mid-Range & Luxury Guide",
      description:
        "Transparent price guide for Tanzania safaris in 2026/2027. Compare costs per person per day for Serengeti, Ngorongoro, and Tarangire tours.",
      keywords: [
        "tanzania safari cost per person",
        "how much is a safari in tanzania",
        "tanzania safari price guide",
        "serengeti safari cost 2026",
        "private 4x4 safari land cruiser price",
      ],
    },
    content: [
      {
        heading: "1. How Much Does a Tanzania Safari Really Cost?",
        body: `Tanzania is Africa's premier wildlife destination, housing famous parks like the Serengeti and Ngorongoro Crater. Because Tanzania prioritizes low-density, eco-conscious tourism, prices are higher than mass-market destinations elsewhere.

On average, expect to spend:
- **Budget Camping Safari:** $200 – $350 USD per person / day
- **Mid-Range Tented Lodge Safari:** $350 – $600 USD per person / day
- **Luxury Safari:** $650 – $1,500+ USD per person / day`,
      },
      {
        heading: "2. Key Factors Influencing Safari Prices",
        body: `Several core components determine your total trip price:

1. **Park Conservation Fees:** 
   - Serengeti National Park: $82.60 USD / adult / 24hrs
   - Ngorongoro Crater Entry Fee: $295 USD per vehicle + $70.80 per person
   - Tarangire & Lake Manyara: $59 USD / adult / 24hrs
2. **Private 4x4 Land Cruiser Transport:** Fuel, professional driver-guide, insurance, and vehicle park permits cost roughly **$250 – $350 USD per day** total. When split among 4 to 6 guests, per-person costs drop significantly.
3. **Accommodation Tier:** Public campsites vs mid-range tented camps vs luxury permanent lodges like Serengeti Serena or Four Seasons.`,
      },
      {
        heading: "3. High Season vs Green Season Discounts",
        body: `Timing your travel can save up to 30% on safari accommodation:
- **Peak Dry Season (June – October & Dec – Feb):** Highest rates, dry weather, optimal game viewing around waterholes.
- **Green Season (April – May):** Heavy rainfall, but lodges offer deep discounts, lush landscapes, and zero crowds.`,
      },
      {
        heading: "4. What is Included in Ndito Travel Safari Packages?",
        body: `All Ndito Travel safari quotes are transparent and comprehensive. Included in your price:
- Customized pop-up roof 4x4 Toyota Land Cruiser with guaranteed window seat
- Certified professional English-speaking driver-guide
- All national park entrance fees, crater permits, and government taxes
- Full board accommodation (Breakfast, Safari Lunch Boxes, Dinner)
- Unlimited bottled mineral water during game drives
- Kilimanjaro/Arusha airport pick-up and drop-off transfers.`,
      },
    ],
    relatedPackageSlugs: ["ngorongoro-crater-explorer", "serengeti-hotballoon-adventure"],
  },
  {
    slug: "serengeti-great-migration-guide",
    title: "Serengeti Great Migration Location Guide: Month-by-Month Timing & River Crossings",
    subtitle: "Where to see 2 million wildebeests and zebras across the Serengeti ecosystem throughout the year.",
    excerpt:
      "Master the timing of the Great Wildebeest Migration in Serengeti. Learn where the herds are month-by-month—from Ndutu calving season to dramatic Mara River crossings.",
    category: "Safaris",
    readTime: "9 min read",
    publishedAt: "2026-07-12",
    updatedAt: "2026-07-22",
    heroImage: "/photos/serengeti-the-great-migration.webp",
    author: {
      name: "Ulrik Matemu",
      role: "Safari Director & Founder",
      avatar: "/photos/review-2.webp",
    },
    seo: {
      title: "Serengeti Great Migration Location Guide: Month-by-Month Map",
      description:
        "Month-by-month guide to witnessing the Great Migration in Serengeti National Park. Learn river crossing dates, Ndutu calving season, and safari planning tips.",
      keywords: [
        "serengeti great migration map",
        "best time to visit serengeti for migration",
        "mara river crossing timing",
        "ndutu calving season safari",
        "wildebeest migration timing",
      ],
    },
    content: [
      {
        heading: "1. What is the Great Wildebeest Migration?",
        body: `The Great Migration is the largest movement of overland wildlife on Earth. Over 1.5 million wildebeest, 250,000 zebras, and 300,000 gazelles travel in a continuous clock-wise cycle across the Serengeti-Mara ecosystem, driven by seasonal rains and fresh grazing grass.`,
      },
      {
        heading: "2. January – March: Calving Season in Southern Serengeti (Ndutu)",
        body: `**Location:** Southern Serengeti & Ndutu Conservation Area

During these months, the mega-herds settle on the nutrient-rich short grass plains. Over 8,000 calves are born daily during a 2-to-3 week peak in February! This massive concentration of young animals attracts dense predator activity—lions, cheetahs, leopards, and hyenas.

- **Best For:** Predator hunting action, newborn calves, warm safari weather.`,
      },
      {
        heading: "3. April – May: The Moving Season (Central & Western Corridor)",
        body: `**Location:** Central Serengeti (Seronera) & Western Corridor

As the rains end in the south, the herds move northwards through Central Serengeti into the Western Corridor near the Grumeti River. This period coincides with the 'long rains' in Tanzania, offering discounted green-season lodge rates.`,
      },
      {
        heading: "4. June – July: Grumeti River Crossings",
        body: `**Location:** Western Serengeti & Grumeti Reserve

The herds gather along the banks of the Grumeti River. Here, animals brave giant Nile crocodiles to reach greener pastures on the opposite shore.`,
      },
      {
        heading: "5. August – October: Dramatic Mara River Crossings",
        body: `**Location:** Northern Serengeti (Kogatende) & Kenya Maasai Mara

This is the most famous phase of the migration. Thousands of wildebeest plunge down steep riverbanks into the Mara River, dodging giant crocodiles while panicking herds surge across.

- **Best For:** Epic river crossing footage, crisp dry season wildlife viewing.`,
      },
      {
        heading: "6. November – December: Return South",
        body: `**Location:** Northern & Eastern Serengeti

With the arrival of short rains, the herds trek back south through eastern Serengeti to prepare for the next calving season in Ndutu.`,
      },
    ],
    relatedPackageSlugs: ["serengeti-hotballoon-adventure", "tanzania-trip-2025"],
  },
];
