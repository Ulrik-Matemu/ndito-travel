export interface SafariDay {
  title: string;
  time: string;
  description: string;
  accommodation: string;
  meals: string;
}

export interface SafariPackage {
  id: string;
  slug: string;
  title: string;
  duration: string;
  difficulty: string;
  scenery: string;
  traffic: string;
  images: string[];
  days: SafariDay[];
  included: string[];
  excluded: string[];
}

export const safariPackages: SafariPackage[] = [
  // ==========================================
  // SECTION 1: BUDGET CAMPING & GROUP JOINING (4-15)
  // ==========================================
  {
    id: "4",
    slug: "3-day-budget-tarangire-ngorongoro-safari",
    title: "3-Day Tarangire & Ngorongoro Budget Camping Safari",
    duration: "3 Days / 2 Nights",
    difficulty: "Easy - Camping",
    scenery: "Baobab Trees & Crater Rim",
    traffic: "High",
    images: ["/photos/tarangire-elephant.webp", "/photos/ngorongoro.webp"],
    days: [
      {
        title: "DAY 1: ARUSHA TO TARANGIRE NATIONAL PARK",
        time: "2–3 hours drive",
        description: "Depart Arusha after breakfast for Tarangire National Park, famous for giant baobab trees and large elephant herds. Enjoy game driving along the Tarangire River.",
        accommodation: "Public Campsite: Sunbright Campsite",
        meals: "Lunch, Dinner"
      },
      {
        title: "DAY 2: NGORONGORO CRATER GAME DRIVE",
        time: "1–2 hours drive",
        description: "Descend 600 meters into the Ngorongoro Crater for a full-day game drive to spot the Big Five, including endangered black rhinos and flamingos at Lake Magadi.",
        accommodation: "Public Campsite: Simba Public Campsite",
        meals: "Breakfast, Lunch Box, Dinner"
      },
      {
        title: "DAY 3: LAKE MANYARA TO ARUSHA",
        time: "2–3 hours drive",
        description: "Explore Lake Manyara National Park, famous for tree-climbing lions and flamingo-filled shores, before returning to Arusha in the late afternoon.",
        accommodation: "N/A",
        meals: "Breakfast, Lunch"
      }
    ],
    included: ["All park entry fees", "Public camping accommodation", "Safari cook and freshly prepared meals", "4x4 Land Cruiser with pop-top roof", "Professional English-speaking driver guide", "Bottled mineral water"],
    excluded: ["Sleeping bag rental ($20)", "International flights", "Tanzania Visa fees", "Tips for guide and cook", "Personal expenses"]
  },
  {
    id: "5",
    slug: "4-day-budget-serengeti-ngorongoro-camping",
    title: "4-Day Serengeti & Ngorongoro Express Budget Safari",
    duration: "4 Days / 3 Nights",
    difficulty: "Moderate - Budget Camping",
    scenery: "Endless Savannah & Caldera",
    traffic: "Moderate",
    images: ["/photos/serengeti-the-great-migration.webp", "/photos/ngorongoro.webp"],
    days: [
      {
        title: "DAY 1: ARUSHA TO LAKE MANYARA / KARATU",
        time: "3 hours drive",
        description: "Pick up from Arusha and drive to Lake Manyara for an afternoon game drive focusing on primates, giraffes, and birdlife.",
        accommodation: "Public Campsite: Panorama Campsite",
        meals: "Lunch, Dinner"
      },
      {
        title: "DAY 2: TRANSIT TO CENTRAL SERENGETI",
        time: "5–6 hours drive",
        description: "Drive through Ngorongoro Conservation Area into Central Serengeti (Seronera). Enjoy en-route wildlife viewing across the plains.",
        accommodation: "Public Campsite: Seronera Public Campsite",
        meals: "Breakfast, Lunch Box, Dinner"
      },
      {
        title: "DAY 3: SERENGETI TO NGORONGORO RIM",
        time: "4 hours drive",
        description: "Early morning game drive in Central Serengeti searching for big cats, followed by an afternoon drive to the crater rim.",
        accommodation: "Public Campsite: Simba Public Campsite",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        title: "DAY 4: NGORONGORO CRATER TO ARUSHA",
        time: "4 hours drive",
        description: "Early morning crater tour to witness wildlife active at sunrise. Return to Arusha by 5:00 PM.",
        accommodation: "N/A",
        meals: "Breakfast, Lunch"
      }
    ],
    included: ["All TANAPA and NCAA park entry fees", "Camping equipment (tents, mattresses)", "Private safari cook", "4x4 Safari Land Cruiser", "English-speaking safari guide"],
    excluded: ["Sleeping bags", "Alcoholic beverages", "Tips for safari crew", "Travel insurance", "Airport transfers"]
  },
  {
    id: "6",
    slug: "5-day-lake-natron-ngorongoro-serengeti-camping",
    title: "5-Day Lake Natron, Serengeti & Ngorongoro Adventure",
    duration: "5 Days / 4 Nights",
    difficulty: "Moderate - Offbeat Trekking & Camping",
    scenery: "Volcanoes, Salt Lakes & Savannah",
    traffic: "Low to Moderate",
    images: ["/photos/Lake-Natron-Tanzania-2-jpg.webp", "/photos/serengeti-lion.webp"],
    days: [
      {
        title: "DAY 1: ARUSHA TO LAKE NATRON",
        time: "4–5 hours drive",
        description: "Drive to the dramatic rift valley at Lake Natron under Ol Doinyo Lengai volcano. Guided walk to Engaresero Waterfalls and flamingos.",
        accommodation: "Public Campsite: World Safari Camp Natron",
        meals: "Lunch, Dinner"
      },
      {
        title: "DAY 2: LAKE NATRON TO NORTH-CENTRAL SERENGETI",
        time: "5–6 hours rough road drive",
        description: "Traverse via Klein's Gate into Serengeti National Park. Afternoon game drive in search of resident leopards and cheetahs.",
        accommodation: "Public Campsite: Lobo Campsite",
        meals: "Breakfast, Lunch Box, Dinner"
      },
      {
        title: "DAY 3: SERENGETI CENTRAL PLAINS",
        time: "Full day game drive",
        description: "Full day exploring Seronera Valley, home to the highest concentration of big cats in East Africa.",
        accommodation: "Public Campsite: Seronera Public Campsite",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        title: "DAY 4: SERENGETI TO NGORONGORO HIGHLANDS",
        time: "4 hours drive",
        description: "Morning game drive, then transfer to the Ngorongoro Conservation Area with optional stop at Olduvai Gorge.",
        accommodation: "Public Campsite: Simba Campsite",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        title: "DAY 5: NGORONGORO CRATER TO ARUSHA",
        time: "4 hours drive",
        description: "Descend into the crater floor for a 5-hour game drive. Return to Arusha or Kilimanjaro Airport.",
        accommodation: "N/A",
        meals: "Breakfast, Lunch"
      }
    ],
    included: ["Park fees & Lake Natron village fees", "Local Maasai guide fee at Natron", "Camping equipment & Safari cook", "4x4 Land Cruiser with pop-top", "Bottled water"],
    excluded: ["Sleeping bag", "Ol Doinyo Lengai mountain climb fee", "Tips", "Items of personal nature"]
  },
  {
    id: "7",
    slug: "2-day-express-tarangire-ngorongoro-budget",
    title: "2-Day Tarangire & Ngorongoro Express Weekend Safari",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    scenery: "Savannah & Crater Floor",
    traffic: "High",
    images: ["/photos/tarangire-national-park.webp", "/photos/ngorongoro.webp"],
    days: [
      {
        title: "DAY 1: ARUSHA TO TARANGIRE NATIONAL PARK",
        time: "2 hours drive",
        description: "Early pickup from Arusha. Game drive in Tarangire till 4 PM, observing large herds of elephants. Transfer to Karatu.",
        accommodation: "Budget Lodge: Kibo Palace Karatu / Fig Tree Lodge",
        meals: "Lunch Box, Dinner"
      },
      {
        title: "DAY 2: NGORONGORO CRATER TO ARUSHA",
        time: "3.5 hours drive back",
        description: "Descend into Ngorongoro Crater early morning. Enjoy lunch by Hippo Pool before driving back to Arusha.",
        accommodation: "N/A",
        meals: "Breakfast, Lunch Box"
      }
    ],
    included: ["Park fees", "Vehicle & driver-guide", "1 night budget lodge accommodation", "Meals as specified"],
    excluded: ["Pre/post safari hotel", "Tips", "Visas", "Drinks"]
  },
  {
    id: "8",
    slug: "6-day-tanzania-budget-camping-circuit",
    title: "6-Day Complete Northern Circuit Budget Camping Safari",
    duration: "6 Days / 5 Nights",
    difficulty: "Moderate",
    scenery: "Varied Ecosystems",
    traffic: "Moderate",
    images: ["/photos/tarangire-national-park.webp", "/photos/serengeti-the-great-migration.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2.5 hours", description: "Full day game viewing in Tarangire National Park.", accommodation: "Campsite: Sunbright Camp", meals: "Lunch, Dinner" },
      { title: "DAY 2: TARANGIRE TO LAKE MANYARA", time: "1 hour", description: "Discover the groundwater forest and alkaline lake in Manyara.", accommodation: "Campsite: Panorama Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: MANYARA TO SERENGETI", time: "5 hours", description: "Drive across Ngorongoro Highlands into Central Serengeti plains.", accommodation: "Campsite: Seronera Public Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: FULL DAY SERENGETI GAME DRIVE", time: "Full day", description: "Track lions, cheetahs, and herds across Seronera and Retima Hippo Pool.", accommodation: "Campsite: Seronera Public Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: SERENGETI TO NGORONGORO RIM", time: "3 hours", description: "Morning safari, transfer to Simba Campsite overlooking crater.", accommodation: "Campsite: Simba Public Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: CRATER TOUR TO ARUSHA", time: "4 hours", description: "Crater floor game drive and drop-off in Arusha.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["All Park Entry Fees", "Cook & Camping Gear", "4x4 Land Cruiser", "Guide Fees"],
    excluded: ["Sleeping Bags", "Tips", "Personal Items"]
  },
  {
    id: "9",
    slug: "5-day-cultural-safari-hadzabe-datoga-maasai",
    title: "5-Day Bushmen Cultural Trek & Wildlife Budget Safari",
    duration: "5 Days / 4 Nights",
    difficulty: "Moderate - Cultural Walking",
    scenery: "Lake Eyasi & Wildlife Parks",
    traffic: "Low",
    images: ["/photos/Lake_Eyasi_x_21_750_550shar-50brig-20_c1.webp", "/photos/Lake_Eyasi_x_23.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2 hours", description: "Game drive in Tarangire, night at Lake Eyasi campsite.", accommodation: "Campsite: Chemchem Bush Camp", meals: "Lunch, Dinner" },
      { title: "DAY 2: HADZABE & DATOGA CULTURAL IMMERSION", time: "Full day", description: "Early morning hunt with Hadzabe bushmen. Visit Datoga blacksmiths.", accommodation: "Campsite: Chemchem Bush Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: LAKE EYASI TO SERENGETI", time: "5 hours", description: "Travel to Serengeti National Park for afternoon game viewing.", accommodation: "Campsite: Seronera Public Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: SERENGETI TO NGORONGORO", time: "4 hours", description: "Morning game drive, drive to Ngorongoro crater rim.", accommodation: "Campsite: Simba Public Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: CRATER DRIVE TO ARUSHA", time: "4 hours", description: "Ngorongoro Crater floor tour, return to Arusha.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Cultural experience fees", "Park entry fees", "Camping fees & Cook", "4x4 Safari Vehicle"],
    excluded: ["Tips for local cultural guides", "Sleeping bags", "Alcohol"]
  },

  // (Packages 10 to 15 added for complete budget/group joining choices)
  {
    id: "10",
    slug: "3-day-group-joining-serengeti-ngorongoro",
    title: "3-Day Shared Group Joining Safari: Serengeti & Ngorongoro",
    duration: "3 Days / 2 Nights",
    difficulty: "Easy - Group Joiner",
    scenery: "Savannah & Caldera",
    traffic: "High",
    images: ["/photos/serengeti-the-great-migration.webp", "/photos/ngorongoro.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO SERENGETI", time: "6 hours", description: "Join fellow travelers and drive to Central Serengeti.", accommodation: "Public Camp: Seronera", meals: "Lunch, Dinner" },
      { title: "DAY 2: SERENGETI TO NGORONGORO", time: "3 hours", description: "Morning game drive in Serengeti, afternoon transit to Ngorongoro rim.", accommodation: "Public Camp: Simba", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: CRATER TOUR TO ARUSHA", time: "4 hours", description: "Crater safari and afternoon return to Arusha.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Shared 4x4 transport", "Park fees", "Camping gear", "Meals"],
    excluded: ["Single supplement", "Tips", "Personal expenses"]
  },
  {
    id: "11",
    slug: "4-day-lake-manyara-tarangire-ngorongoro-budget",
    title: "4-Day Budget Trio: Tarangire, Manyara & Ngorongoro",
    duration: "4 Days / 3 Nights",
    difficulty: "Easy",
    scenery: "Rift Valley Escarpment",
    traffic: "Moderate",
    images: ["/photos/Lake_Manyara_National_Park_Lake_View_27.webp", "/photos/tarangire-national-park.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2 hours", description: "Tarangire game drive.", accommodation: "Fanaka Campsite", meals: "Lunch, Dinner" },
      { title: "DAY 2: LAKE MANYARA PARK", time: "1 hour", description: "Game drive in Manyara.", accommodation: "Fanaka Campsite", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: NGORONGORO CRATER", time: "2 hours", description: "Full day in Ngorongoro Crater.", accommodation: "Simba Campsite", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: CULTURAL WALK & RETURN", time: "2 hours", description: "Mto wa Mbu cultural village tour and return to Arusha.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Park fees", "Campsites", "Cook", "Guide", "4x4 vehicle"],
    excluded: ["Tips", "Insurance", "Visas"]
  },
  {
    id: "12",
    slug: "1-day-express-tarangire-safari",
    title: "1-Day Tarangire National Park Express Day Trip",
    duration: "1 Day",
    difficulty: "Very Easy",
    scenery: "Baobab & Elephants",
    traffic: "High",
    images: ["/photos/tarangire-elephant.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE & RETURN", time: "2 hours each way", description: "Full day game drive in Tarangire, return to Arusha by 6:00 PM.", accommodation: "N/A", meals: "Lunch Box" }
    ],
    included: ["Park fees", "Private 4x4 vehicle", "English guide", "Lunch box & water"],
    excluded: ["Tips", "Pre/post hotel"]
  },
  {
    id: "13",
    slug: "1-day-express-ngorongoro-crater-safari",
    title: "1-Day Ngorongoro Crater Day Tour from Arusha",
    duration: "1 Day",
    difficulty: "Easy",
    scenery: "Crater Floor",
    traffic: "High",
    images: ["/photos/ngorongoro.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO NGORONGORO & RETURN", time: "3.5 hours each way", description: "Early morning drive to Ngorongoro, 5-hour crater game drive, return to Arusha.", accommodation: "N/A", meals: "Lunch Box" }
    ],
    included: ["Crater entry fees", "4x4 Land Cruiser", "Guide", "Lunch box"],
    excluded: ["Tips", "Personal spending"]
  },
  {
    id: "14",
    slug: "7-day-budget-camping-adventure-tanzania",
    title: "7-Day Backpackers Budget Camping Odyssey",
    duration: "7 Days / 6 Nights",
    difficulty: "Moderate",
    scenery: "Bush & Lakes",
    traffic: "Moderate",
    images: ["/photos/serengeti-the-great-migration.webp", "/photos/Lake-Natron-Tanzania-2-jpg.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2 hours", description: "Tarangire game drive.", accommodation: "Kizumba Camp", meals: "Lunch, Dinner" },
      { title: "DAY 2: LAKE MANYARA", time: "1 hour", description: "Manyara wildlife viewing.", accommodation: "Panorama Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: LAKE NATRON", time: "3 hours", description: "Flamingo walk at Lake Natron.", accommodation: "Natron Campsite", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: SERENGETI NORTH", time: "6 hours", description: "Transit to Northern Serengeti.", accommodation: "Lobo Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: CENTRAL SERENGETI", time: "3 hours", description: "Game drive in Seronera.", accommodation: "Seronera Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: NGORONGORO RIM", time: "4 hours", description: "Drive to Ngorongoro Simba Camp.", accommodation: "Simba Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 7: CRATER TO ARUSHA", time: "4 hours", description: "Crater tour and drive back.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["All park fees", "Camping equipment & cook", "4x4 safari car"],
    excluded: ["Sleeping bag", "Tips"]
  },
  {
    id: "15",
    slug: "3-day-lake-eyasi-hadzabe-and-ngorongoro-budget",
    title: "3-Day Cultural Bushmen & Ngorongoro Crater Budget Escape",
    duration: "3 Days / 2 Nights",
    difficulty: "Easy",
    scenery: "Lake Eyasi & Crater",
    traffic: "Low",
    images: ["/photos/Lake_Eyasi_x_21_750_550shar-50brig-20_c1.webp", "/photos/ngorongoro.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO LAKE EYASI", time: "3.5 hours", description: "Drive to Lake Eyasi, afternoon village walk.", accommodation: "Eyasi Public Camp", meals: "Lunch, Dinner" },
      { title: "DAY 2: HADZABE HUNT & NGORONGORO", time: "3 hours", description: "Morning hunting with Hadzabe, drive to Ngorongoro rim.", accommodation: "Simba Public Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: CRATER TOUR TO ARUSHA", time: "4 hours", description: "Full crater tour and transfer back to Arusha.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Cultural fees", "Park fees", "Cook & Tents"],
    excluded: ["Sleeping bags", "Tips"]
  },

  // ==========================================
  // SECTION 2: MID-RANGE LODGE & TENTED CAMPS (16-30)
  // ==========================================
  {
    id: "16",
    slug: "5-day-classic-tanzania-midrange-safari",
    title: "5-Day Classic Mid-Range Safari: Tarangire, Serengeti & Ngorongoro",
    duration: "5 Days / 4 Nights",
    difficulty: "Easy",
    scenery: "Savannah, Kopjes & Caldera",
    traffic: "Moderate",
    images: ["/photos/serengeti-lion.webp", "/photos/ngorongoro.webp"],
    days: [
      {
        title: "DAY 1: ARUSHA TO TARANGIRE NATIONAL PARK",
        time: "2 hours drive",
        description: "Pickup from Arusha hotel. Game drive in Tarangire, famous for large elephant herds. Dinner and rest at a comfortable mid-range lodge.",
        accommodation: "Lodge: Sangaiwe Tented Lodge",
        meals: "Lunch, Dinner"
      },
      {
        title: "DAY 2: TARANGIRE TO CENTRAL SERENGETI",
        time: "5 hours drive",
        description: "Drive through the Ngorongoro Highlands into the Serengeti plains. Afternoon game drive in Central Serengeti.",
        accommodation: "Tented Camp: Serengeti Heritage Luxury Tented Camp",
        meals: "Breakfast, Lunch Box, Dinner"
      },
      {
        title: "DAY 3: FULL DAY CENTRAL SERENGETI",
        time: "Full day game drive",
        description: "Explore the Seronera Valley for big cats, hyenas, and rich wildlife along the Seronera River.",
        accommodation: "Tented Camp: Serengeti Heritage Luxury Tented Camp",
        meals: "Breakfast, Lunch Box, Dinner"
      },
      {
        title: "DAY 4: SERENGETI TO KARATU",
        time: "4 hours drive",
        description: "Morning game drive in Serengeti. Afternoon transit to Karatu on the outer slopes of Ngorongoro.",
        accommodation: "Lodge: Marera Valley Lodge",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        title: "DAY 5: NGORONGORO CRATER TO ARUSHA",
        time: "4 hours drive",
        description: "Early crater floor game drive. Spot rhinos, lions, and hippos before transferring back to Arusha.",
        accommodation: "N/A",
        meals: "Breakfast, Lunch"
      }
    ],
    included: ["All park entry fees & crater fees", "Mid-range en-suite lodge/camp accommodation", "4x4 Land Cruiser with pop-top roof", "Professional English guide", "Drinking water in vehicle"],
    excluded: ["International flights", "Visas", "Tips for driver-guide ($20–30/day)", "Beverages at lodges"]
  },
  {
    id: "17",
    slug: "7-day-great-migration-river-crossing-midrange",
    title: "7-Day Great Migration Mara River Crossing Safari (Jul-Oct)",
    duration: "7 Days / 6 Nights",
    difficulty: "Moderate",
    scenery: "Mara River & Serengeti Plains",
    traffic: "High (Peak Season)",
    images: ["/photos/discover-tanzania/great-migration.jpg", "/photos/serengeti-the-great-migration.webp"],
    days: [
      { title: "DAY 1: ARRIVAL IN ARUSHA", time: "45 min", description: "Transfer from JRO to Arusha hotel.", accommodation: "Hotel: Planet Lodge Arusha", meals: "Dinner" },
      { title: "DAY 2: ARUSHA TO TARANGIRE", time: "2.5 hours", description: "Game drive in Tarangire.", accommodation: "Lodge: Maramboi Tented Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: TARANGIRE TO NORTHERN SERENGETI", time: "7–8 hours drive", description: "Long scenic drive to Kogatende/Mara River area.", accommodation: "Tented Camp: Heritage Mara Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: FULL DAY MARA RIVER CROSSING SAFARI", time: "Full day", description: "Position near Mara River points 4 and 7 to witness wildebeest river crossings and crocodile encounters.", accommodation: "Tented Camp: Heritage Mara Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: NORTHERN TO CENTRAL SERENGETI", time: "4 hours", description: "Game drive towards Seronera.", accommodation: "Tented Camp: Into Wild Serengeti Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: CENTRAL SERENGETI TO NGORONGORO", time: "3.5 hours", description: "Morning game drive and drive to crater rim.", accommodation: "Lodge: Rhino Lodge Ngorongoro", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 7: NGORONGORO CRATER TO ARUSHA / JRO", time: "4 hours", description: "Crater tour and airport drop-off.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["All park and transit fees", "Mid-range tented camps near Mara River", "Private 4x4 Land Cruiser", "Guide and bottled water"],
    excluded: ["Flights", "Tips", "Items of personal nature"]
  },
  {
    id: "18",
    slug: "6-day-ndutu-calving-season-midrange-safari",
    title: "6-Day Serengeti Great Migration Calving Season Safari (Jan-Mar)",
    duration: "6 Days / 5 Nights",
    difficulty: "Easy",
    scenery: "Ndutu Southern Plains & Calving",
    traffic: "High",
    images: ["/photos/discover-tanzania/great-migration-2.jpg", "/photos/serengeti-lion.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO LAKE MANYARA", time: "2.5 hours", description: "Game drive in Manyara.", accommodation: "Lodge: Manyara Secret Lodge", meals: "Lunch, Dinner" },
      { title: "DAY 2: MANYARA TO NDUTU AREA", time: "3.5 hours", description: "Drive to Ndutu in Southern Serengeti where thousands of wildebeest give birth.", accommodation: "Tented Camp: Ndutu Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: FULL DAY NDUTU OFF-ROAD GAME DRIVE", time: "Full day", description: "Off-road game driving permitted in Ndutu to track cheetahs, lions, and newborn calves.", accommodation: "Tented Camp: Ndutu Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: NDUTU TO CENTRAL SERENGETI", time: "2 hours", description: "Explore Seronera valley and predator strongholds.", accommodation: "Tented Camp: Central Serengeti Bush Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: SERENGETI TO KARATU", time: "3.5 hours", description: "Game drive en-route to Karatu highlands.", accommodation: "Lodge: Farm House Valley Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: NGORONGORO CRATER TO ARUSHA", time: "4 hours", description: "Crater floor game drive and departure.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Ndutu WMA and NCAA fees", "Mid-range tented accommodations", "Private 4x4 Land Cruiser", "Guide"],
    excluded: ["Tips", "Visas", "Personal insurance"]
  },

  // (Packages 19 to 30 added for mid-range choices)
  {
    id: "19",
    slug: "4-day-midrange-tarangire-serengeti-ngorongoro",
    title: "4-Day Highlights Mid-Range Safari: Tarangire, Serengeti & Crater",
    duration: "4 Days / 3 Nights",
    difficulty: "Easy",
    scenery: "Savannah",
    traffic: "Moderate",
    images: ["/photos/tarangire-national-park.webp", "/photos/serengeti-the-great-migration.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2 hours", description: "Tarangire game drive.", accommodation: "Sangaiwe Tented Lodge", meals: "Lunch, Dinner" },
      { title: "DAY 2: TARANGIRE TO SERENGETI", time: "5 hours", description: "Drive to Central Serengeti.", accommodation: "Serengeti Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: SERENGETI TO KARATU", time: "4 hours", description: "Morning Serengeti drive, transfer to Karatu.", accommodation: "Marera Valley Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: NGORONGORO TO ARUSHA", time: "4 hours", description: "Crater tour and drive to Arusha.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Park fees", "Lodges", "4x4 Land Cruiser", "Guide"],
    excluded: ["Tips", "Drinks"]
  },
  {
    id: "20",
    slug: "3-day-midrange-manyara-ngorongoro-tarangire",
    title: "3-Day Northern Circuit Mid-Range Trio",
    duration: "3 Days / 2 Nights",
    difficulty: "Easy",
    scenery: "Crater & Rift Valley",
    traffic: "Moderate",
    images: ["/photos/ngorongoro.webp", "/photos/Lake_Manyara_National_Park_Lake_View_27.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2 hours", description: "Tarangire game drive.", accommodation: "Eileen's Trees Inn", meals: "Lunch, Dinner" },
      { title: "DAY 2: NGORONGORO CRATER", time: "1 hour", description: "Full crater tour.", accommodation: "Eileen's Trees Inn", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: LAKE MANYARA TO ARUSHA", time: "2 hours", description: "Lake Manyara drive and return to Arusha.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["All park fees", "Mid-range lodge", "4x4 vehicle", "Guide"],
    excluded: ["Tips", "Visas"]
  },
  {
    id: "21",
    slug: "5-day-serengeti-baloon-and-ngorongoro-midrange",
    title: "5-Day Serengeti Balloon Safari & Ngorongoro Mid-Range Comfort",
    duration: "5 Days / 4 Nights",
    difficulty: "Easy",
    scenery: "Aerial Savannah",
    traffic: "Moderate",
    images: ["/photos/hot-air-balloon-safari.webp", "/photos/serengeti-the-great-migration.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO MANYARA", time: "2.5 hours", description: "Manyara safari.", accommodation: "Boundary Hill Lodge", meals: "Lunch, Dinner" },
      { title: "DAY 2: MANYARA TO SERENGETI", time: "4 hours", description: "Transit to Central Serengeti.", accommodation: "Serengeti Tortilis Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: HOT AIR BALLOON & GAME DRIVE", time: "Full day", description: "Sunrise hot air balloon ride over Serengeti + game drive.", accommodation: "Serengeti Tortilis Camp", meals: "Breakfast, Champagne Lunch, Dinner" },
      { title: "DAY 4: SERENGETI TO KARATU", time: "3.5 hours", description: "Game drive to Karatu.", accommodation: "Farm House Valley Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: NGORONGORO CRATER TO ARUSHA", time: "4 hours", description: "Crater tour and drop-off.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Serengeti Hot Air Balloon ($550 value)", "All park fees", "Lodge stay"],
    excluded: ["Tips", "International flights"]
  },
  {
    id: "22",
    slug: "6-day-family-midrange-tanzania-safari",
    title: "6-Day Family Friendly Mid-Range Tanzania Safari",
    duration: "6 Days / 5 Nights",
    difficulty: "Very Easy",
    scenery: "Parks & Cultural Villages",
    traffic: "Moderate",
    images: ["/photos/tarangire-national-park.webp", "/photos/arusha-2-maasai-ndito1920x1280.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2 hours", description: "Elephant tracking in Tarangire.", accommodation: "Tarangire Safari Lodge", meals: "Lunch, Dinner" },
      { title: "DAY 2: MAASAI VILLAGE & MANYARA", time: "2 hours", description: "Cultural village visit and Lake Manyara safari.", accommodation: "Mto wa Mbu Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: DRIVE TO SERENGETI", time: "4.5 hours", description: "Travel to Serengeti.", accommodation: "Serengeti Kati Kati Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: SERENGETI FAMILY GAME DRIVE", time: "Full day", description: "Relaxed family game drive.", accommodation: "Serengeti Kati Kati Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: SERENGETI TO KARATU", time: "3.5 hours", description: "Transit to Karatu.", accommodation: "Bougainvillea Safari Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: NGORONGORO TO ARUSHA", time: "4 hours", description: "Crater safari and drop-off.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Family interconnected rooms where available", "All entry fees", "Child-friendly guide"],
    excluded: ["Tips", "Personal items"]
  },
  {
    id: "23",
    slug: "7-day-serengeti-ngorongoro-tarangire-eyasi-midrange",
    title: "7-Day Mid-Range Wildlife & Cultural Safari",
    duration: "7 Days / 6 Nights",
    difficulty: "Easy",
    scenery: "Lakes, Savannah & Caldera",
    traffic: "Low",
    images: ["/photos/Lake_Eyasi_x_21_750_550shar-50brig-20_c1.webp", "/photos/serengeti-the-great-migration.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2 hours", description: "Tarangire game drive.", accommodation: "Sangaiwe Lodge", meals: "Lunch, Dinner" },
      { title: "DAY 2: LAKE EYASI BUSHMEN", time: "2 hours", description: "Hadzabe and Datoga visit.", accommodation: "Lake Eyasi Safari Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: LAKE EYASI TO SERENGETI", time: "5 hours", description: "Drive to Serengeti.", accommodation: "Serengeti Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: FULL DAY SERENGETI", time: "Full day", description: "Serengeti wildlife tracking.", accommodation: "Serengeti Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: SERENGETI TO NGORONGORO", time: "3 hours", description: "Transit to crater rim.", accommodation: "Rhino Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: NGORONGORO CRATER", time: "Full day", description: "Crater floor safari.", accommodation: "Marera Valley Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 7: LAKE MANYARA TO ARUSHA", time: "2.5 hours", description: "Lake Manyara safari & drop-off.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["All activities", "Park fees", "Lodges"],
    excluded: ["Tips", "Drinks"]
  },
  {
    id: "24",
    slug: "4-day-honeymoon-midrange-safari",
    title: "4-Day Romantic Honeymoon Mid-Range Safari Escape",
    duration: "4 Days / 3 Nights",
    difficulty: "Easy",
    scenery: "Romantic Savannah & Caldera",
    traffic: "Moderate",
    images: ["/photos/ngorongoro.webp", "/photos/new-images/hot-air-baloon-serengeti.jpeg"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2 hours", description: "Private Tarangire safari.", accommodation: "Maramboi Tented Lodge", meals: "Lunch, Dinner" },
      { title: "DAY 2: TARANGIRE TO SERENGETI", time: "5 hours", description: "Scenic transfer to Serengeti with bush dinner setup.", accommodation: "Kubu Kubu Tented Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: SERENGETI TO NGORONGORO RIM", time: "3.5 hours", description: "Morning safari, transfer to crater rim.", accommodation: "Ngorongoro Serena Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: CRATER TOUR TO ARUSHA", time: "4 hours", description: "Ngorongoro Crater tour and transfer.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Honeymoon room setup & wine", "Private 4x4 Land Cruiser", "Park fees"],
    excluded: ["Tips", "International flights"]
  },
  {
    id: "25",
    slug: "8-day-grand-tanzania-midrange-circuit",
    title: "8-Day Grand Mid-Range Northern Circuit Explorer",
    duration: "8 Days / 7 Nights",
    difficulty: "Easy",
    scenery: "Complete Northern Ecosystems",
    traffic: "Moderate",
    images: ["/photos/serengeti-the-great-migration.webp", "/photos/tarangire-national-park.webp"],
    days: [
      { title: "DAY 1: ARRIVAL ARUSHA", time: "1 hour", description: "Airport pickup & briefing.", accommodation: "Mount Meru Hotel", meals: "Dinner" },
      { title: "DAY 2: ARUSHA NATIONAL PARK", time: "1 hour", description: "Walking safari and Momella lakes canoeing.", accommodation: "Mount Meru Hotel", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: ARUSHA TO TARANGIRE", time: "2 hours", description: "Full day in Tarangire.", accommodation: "Sangaiwe Tented Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: TARANGIRE TO MANYARA", time: "1 hour", description: "Game drive in Manyara.", accommodation: "Manyara Kilimamojo Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: MANYARA TO SERENGETI", time: "4.5 hours", description: "Travel to Serengeti.", accommodation: "Serengeti Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: FULL DAY SERENGETI", time: "Full day", description: "Full day big cat tracking.", accommodation: "Serengeti Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 7: SERENGETI TO NGORONGORO", time: "3.5 hours", description: "Crater rim accommodation.", accommodation: "Rhino Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 8: NGORONGORO CRATER TO ARUSHA", time: "4 hours", description: "Crater safari and return to Arusha.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Arusha NP canoeing fee", "All park fees", "Lodges"],
    excluded: ["Tips", "Visas"]
  },
  {
    id: "26",
    slug: "3-day-serengeti-fly-in-drive-back-midrange",
    title: "3-Day Serengeti Fly-In & Drive-Back Express",
    duration: "3 Days / 2 Nights",
    difficulty: "Easy",
    scenery: "Aerial & Savannah",
    traffic: "Low",
    images: ["/photos/serengeti-the-great-migration.webp", "/photos/ngorongoro.webp"],
    days: [
      { title: "DAY 1: FLIGHT ARUSHA TO SERENGETI", time: "1 hour flight", description: "Flight from Arusha to Seronera Airstrip. Afternoon game drive.", accommodation: "Serengeti Bush Camp", meals: "Lunch, Dinner" },
      { title: "DAY 2: SERENGETI TO NGORONGORO RIM", time: "3.5 hours drive", description: "Morning safari, transfer to crater rim.", accommodation: "Rhino Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: NGORONGORO CRATER TO ARUSHA", time: "4 hours", description: "Crater game drive and return to Arusha by vehicle.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["One-way flight Arusha to Serengeti", "Park fees", "Mid-range accommodation"],
    excluded: ["Tips", "Personal items"]
  },
  {
    id: "27",
    slug: "5-day-photographic-midrange-safari-tanzania",
    title: "5-Day Photographers Mid-Range Safari Specialist",
    duration: "5 Days / 4 Nights",
    difficulty: "Easy",
    scenery: "Golden Hour Savannah",
    traffic: "Moderate",
    images: ["/photos/serengeti-lion.webp", "/photos/new-images/hyaena.png"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2 hours", description: "Focus on baobab landscape and lighting.", accommodation: "Sangaiwe Lodge", meals: "Lunch, Dinner" },
      { title: "DAY 2: TARANGIRE TO SERENGETI", time: "5 hours", description: "Transit to Central Serengeti with extended golden hour drive.", accommodation: "Serengeti Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: FULL DAY SERENGETI PREDATOR FOCUS", time: "Full day", description: "Dedicated cat tracking and action shots.", accommodation: "Serengeti Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: SERENGETI TO NGORONGORO", time: "3.5 hours", description: "Transit to crater highlands.", accommodation: "Rhino Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: CRATER FLOOR PHOTOGRAPHY TO ARUSHA", time: "4 hours", description: "Early morning crater entry for optimal light.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Beanbags in vehicle for camera stabilization", "Exclusive window seat", "Park fees"],
    excluded: ["Tips", "Camera equipment insurance"]
  },
  {
    id: "28",
    slug: "4-day-green-season-midrange-safari",
    title: "4-Day Green Season Emerald Safari (Apr-May Discounted)",
    duration: "4 Days / 3 Nights",
    difficulty: "Easy",
    scenery: "Lush Green Landscapes & Birdlife",
    traffic: "Very Low",
    images: ["/photos/new-images/giraffe-serengeti.jpeg", "/photos/ngorongoro.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2 hours", description: "Lush scenery and birdwatching.", accommodation: "Maramboi Tented Lodge", meals: "Lunch, Dinner" },
      { title: "DAY 2: TARANGIRE TO SERENGETI", time: "5 hours", description: "Drive into green Serengeti plains.", accommodation: "Kubu Kubu Tented Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: SERENGETI TO KARATU", time: "4 hours", description: "Game drive and transfer to Karatu.", accommodation: "Farm House Valley Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: NGORONGORO TO ARUSHA", time: "4 hours", description: "Crater safari and drive back.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Low season discounted rates", "All park fees", "Private 4x4 Land Cruiser"],
    excluded: ["Tips", "Visas"]
  },
  {
    id: "29",
    slug: "6-day-serengeti-grumeti-river-migration-midrange",
    title: "6-Day Western Corridor & Grumeti River Migration Safari (May-Jul)",
    duration: "6 Days / 5 Nights",
    difficulty: "Moderate",
    scenery: "Grumeti River & Western Plains",
    traffic: "Moderate",
    images: ["/photos/discover-tanzania/great-migration.jpg", "/photos/serengeti-the-great-migration.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO MANYARA", time: "2.5 hours", description: "Lake Manyara drive.", accommodation: "Mto wa Mbu Lodge", meals: "Lunch, Dinner" },
      { title: "DAY 2: MANYARA TO WESTERN SERENGETI", time: "6 hours", description: "Transit to Grumeti River corridor.", accommodation: "Mbalageti Serengeti Bakery Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: FULL DAY GRUMETI RIVER SAFARI", time: "Full day", description: "Track wildebeest crossing giant Nile crocodile infested Grumeti River.", accommodation: "Mbalageti Serengeti Bakery Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: WESTERN TO CENTRAL SERENGETI", time: "2.5 hours", description: "Central Serengeti game drive.", accommodation: "Serengeti Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: SERENGETI TO KARATU", time: "3.5 hours", description: "Drive to Karatu.", accommodation: "Marera Valley Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: NGORONGORO TO ARUSHA", time: "4 hours", description: "Crater tour and drop-off.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Western Corridor transit fees", "Park fees", "Mid-range accommodation"],
    excluded: ["Tips", "Personal items"]
  },
  {
    id: "30",
    slug: "3-day-quick-escape-serengeti-ngorongoro-midrange",
    title: "3-Day Mid-Range Express: Central Serengeti & Ngorongoro",
    duration: "3 Days / 2 Nights",
    difficulty: "Moderate - Long Drives",
    scenery: "Savannah & Crater",
    traffic: "High",
    images: ["/photos/serengeti-the-great-migration.webp", "/photos/ngorongoro.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO CENTRAL SERENGETI", time: "6 hours", description: "Direct drive to Seronera with afternoon game drive.", accommodation: "Serengeti Central Bush Camp", meals: "Lunch, Dinner" },
      { title: "DAY 2: SERENGETI TO NGORONGORO RIM", time: "3.5 hours", description: "Morning safari in Serengeti, afternoon drive to rim.", accommodation: "Rhino Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: CRATER TOUR TO ARUSHA", time: "4 hours", description: "Full crater tour and transfer to Arusha.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Park fees", "Lodges", "4x4 vehicle"],
    excluded: ["Tips", "Visas"]
  },

  // ==========================================
  // SECTION 3: LUXURY & FLY-IN SAFARIS (31-40)
  // ==========================================
  {
    id: "31",
    slug: "5-day-fly-in-luxury-serengeti-ngorongoro",
    title: "5-Day SkySafari: Luxury Fly-In Serengeti & Ngorongoro Crater",
    duration: "5 Days / 4 Nights",
    difficulty: "Very Easy - Fly-In",
    scenery: "Exclusive Luxury Camps & Aerial Views",
    traffic: "Low (Exclusive Areas)",
    images: ["/photos/new-images/fligh-tlink-plane-in-wildlife.png", "/photos/ngorongoro.webp"],
    days: [
      {
        title: "DAY 1: CHARTER FLIGHT ARUSHA TO SERENGETI",
        time: "1 hour flight",
        description: "Board domestic flight from Arusha Airport to Seronera Airstrip. Met by private luxury 4x4 open-sided vehicle. Afternoon luxury game drive.",
        accommodation: "Luxury Tented Camp: Four Seasons Safari Lodge / Elewana Serengeti Pioneer Camp",
        meals: "Lunch, Gourmet Dinner"
      },
      {
        title: "DAY 2: PRIVATE SERENGETI GAME DRIVES",
        time: "Flexible",
        description: "Customized full-day game drive with high-end bush lunch setup and premium sundowners overlooking the savannah.",
        accommodation: "Luxury Tented Camp: Four Seasons Safari Lodge / Elewana Serengeti Pioneer Camp",
        meals: "Breakfast, Bush Lunch, Gourmet Dinner"
      },
      {
        title: "DAY 3: SERENGETI TO NGORONGORO RIM (FLY OR DRIVE)",
        time: "45 min flight or 3 hours drive",
        description: "Scenic transfer to Manyara Airstrip and drive up to the crater rim luxury lodge with floor-to-ceiling glass views.",
        accommodation: "Luxury Lodge: Ngorongoro Crater Lodge (andBeyond)",
        meals: "Breakfast, Lunch, Gourmet Dinner"
      },
      {
        title: "DAY 4: EXCLUSIVE NGORONGORO CRATER FLOOR SAFARI",
        time: "Full day",
        description: "Private early descent into the crater floor. Enjoy a hot plated white-tablecloth lunch near hippo pool.",
        accommodation: "Luxury Lodge: Ngorongoro Crater Lodge (andBeyond)",
        meals: "Breakfast, Plated Bush Lunch, Gourmet Dinner"
      },
      {
        title: "DAY 5: MANYARA AIRSTRIP TO KILIMANJARO AIRPORT",
        time: "1 hour flight",
        description: "Short transfer to Manyara Airstrip for direct bush flight back to Kilimanjaro International Airport for departure.",
        accommodation: "N/A",
        meals: "Breakfast, Lunch"
      }
    ],
    included: ["Internal domestic bush flights", "All park, concession, and crater fees", "Ultra-luxury full board accommodations & top-shelf beverages", "Private 4x4 luxury safari vehicle with dedicated guide", "Laundry services"],
    excluded: ["International flights", "Premium champagne", "Tips for lodge staff and driver-guide", "Tanzania Visa"]
  },
  {
    id: "32",
    slug: "7-day-ultra-luxury-singita-grumeti-serengeti",
    title: "7-Day Singita Grumeti Reserve Ultra-Luxury Private Safari",
    duration: "7 Days / 6 Nights",
    difficulty: "Easy",
    scenery: "Private Reserve Savannah",
    traffic: "Exclusive Private Concession",
    images: ["/photos/new-images/lion-serengeti-4.jpeg", "/photos/ndito-travel-cars.webp"],
    days: [
      { title: "DAY 1: FLY DIRECT TO SINGITA AIRSTRIP", time: "1.5 hour flight", description: "Fly from Kilimanjaro Airport directly into Singita Private Reserve.", accommodation: "Luxury Camp: Singita Sasakwa Lodge / Faru Faru", meals: "Gourmet Lunch & Dinner" },
      { title: "DAY 2: PRIVATE RESERVE GAME DRIVES", time: "Flexible", description: "Off-road tracking, night game drives, and guided walking safaris in private concession.", accommodation: "Luxury Camp: Singita Sasakwa Lodge", meals: "Full Board All Inclusive" },
      { title: "DAY 3: EQUESTRIAN SAFARI OR BALLOON FLIGHT", time: "Flexible", description: "Optional horseback safari across savannah or private hot air balloon flight.", accommodation: "Luxury Camp: Singita Sasakwa Lodge", meals: "Full Board All Inclusive" },
      { title: "DAY 4: TRANSFER TO SINGITA MARA RIVER CAMP", time: "30 min bush flight", description: "Fly to Lamai wedge in Northern Serengeti.", accommodation: "Luxury Camp: Singita Mara River Tented Camp", meals: "Full Board All Inclusive" },
      { title: "DAY 5: MARA RIVER MIGRATION EXCLUSIVITY", time: "Full day", description: "Exclusive wildebeest viewing away from crowded public park zones.", accommodation: "Luxury Camp: Singita Mara River Tented Camp", meals: "Full Board All Inclusive" },
      { title: "DAY 6: BUSH WALKS & SPA RETREAT", time: "Flexible", description: "Morning tracking walk, afternoon spa treatments and wine tasting.", accommodation: "Luxury Camp: Singita Mara River Tented Camp", meals: "Full Board All Inclusive" },
      { title: "DAY 7: FLY TO KILIMANJARO AIRPORT", time: "2 hours flight", description: "Private charter flight to JRO for international return flight.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Private concession fees", "All domestic flights", "Private land cruiser", "All gourmet meals & fine wines", "Night game drives & walking safaris"],
    excluded: ["International flights", "Gratuities", "Items of personal nature"]
  },

  // (Packages 33 to 40 added for luxury options)
  {
    id: "33",
    slug: "4-day-luxury-fly-in-serengeti-experience",
    title: "4-Day Serengeti Fly-In Luxury Escape",
    duration: "4 Days / 3 Nights",
    difficulty: "Very Easy",
    scenery: "Serengeti Plains",
    traffic: "Low",
    images: ["/photos/safari-package.webp", "/photos/serengeti-the-great-migration.webp"],
    days: [
      { title: "DAY 1: FLY ARUSHA TO SERENGETI", time: "1 hour flight", description: "Morning flight to Seronera. Afternoon luxury safari.", accommodation: "Melia Serengeti Lodge", meals: "Lunch, Dinner" },
      { title: "DAY 2: FULL DAY SERENGETI LUXURY SAFARI", time: "Full day", description: "Private 4x4 game drive with champagne lunch.", accommodation: "Melia Serengeti Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: BALLOON SAFARI & PREDATOR TRACKING", time: "Full day", description: "Sunrise hot air balloon flight and game drive.", accommodation: "Melia Serengeti Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: FLY SERENGETI TO JRO", time: "1.5 hour flight", description: "Morning game drive and direct flight to JRO Airport.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Domestic bush flights", "Luxury lodge", "Hot air balloon flight", "All park fees"],
    excluded: ["Tips", "International flights"]
  },
  {
    id: "34",
    slug: "6-day-elewana-sky-safari-tanzania-luxury",
    title: "6-Day Elewana Collection Sky Safari Luxury Experience",
    duration: "6 Days / 5 Nights",
    difficulty: "Very Easy",
    scenery: "Treehouses, Caldera & Serengeti",
    traffic: "Low",
    images: ["/photos/tarangire-national-park.webp", "/photos/ngorongoro-gate.webp"],
    days: [
      { title: "DAY 1: FLY ARUSHA TO TARANGIRE", time: "20 min flight", description: "Arrive Tarangire Treetops camp.", accommodation: "Elewana Tarangire Treetops", meals: "Lunch, Dinner" },
      { title: "DAY 2: TARANGIRE NIGHT DRIVE & WALKING SAFARI", time: "Full day", description: "Bush walk and exclusive night game drive.", accommodation: "Elewana Tarangire Treetops", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: FLY TO NGORONGORO MANOR", time: "30 min flight", description: "Fly to Manyara and transfer to luxury estate.", accommodation: "Elewana The Manor at Ngorongoro", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: EXCLUSIVE NGORONGORO CRATER TOUR", time: "Full day", description: "Private descent into Ngorongoro crater.", accommodation: "Elewana The Manor at Ngorongoro", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: FLY TO SERENGETI PIONEER CAMP", time: "45 min flight", description: "Fly to Central Serengeti.", accommodation: "Elewana Serengeti Pioneer Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: FLY SERENGETI TO ARUSHA", time: "1 hour flight", description: "Morning safari flight back to Arusha.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Executive private plane flight transfers", "Elewana luxury properties", "All drinks & laundry"],
    excluded: ["Tips", "Visas"]
  },
  {
    id: "35",
    slug: "8-day-sanctuary-retreats-luxury-tanzania",
    title: "8-Day Sanctuary Retreats Ultimate Luxury Circuit",
    duration: "8 Days / 7 Nights",
    difficulty: "Easy",
    scenery: "Exclusive Bush Camps",
    traffic: "Low",
    images: ["/photos/tarangire-lions.webp", "/photos/ngorongoro.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2 hours", description: "Transfer to Sanctuary Swala Camp in private area.", accommodation: "Sanctuary Swala Camp", meals: "Lunch, Dinner" },
      { title: "DAY 2: TARANGIRE PRIVACY SAFARI", time: "Full day", description: "Private elephant tracking.", accommodation: "Sanctuary Swala Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: TARANGIRE TO NGORONGORO", time: "3 hours", description: "Transfer to crater rim.", accommodation: "Sanctuary Ngorongoro Crater Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: NGORONGORO CRATER FLOOR", time: "Full day", description: "Full day crater tour with white tablecloth lunch.", accommodation: "Sanctuary Ngorongoro Crater Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: FLY TO SERENGETI KUSINI", time: "45 min flight", description: "Fly to Southern Serengeti.", accommodation: "Sanctuary Kusini Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: FULL DAY SERENGETI TRACKING", time: "Full day", description: "Predator focus in private rock kopje surroundings.", accommodation: "Sanctuary Kusini Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 7: SERENGETI KUSINI TO KOGATENDE", time: "45 min flight", description: "Fly north for river migration.", accommodation: "Sanctuary Kichakani Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 8: FLY NORTH SERENGETI TO JRO", time: "2 hours flight", description: "Fly back to Kilimanjaro Airport.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Internal bush flights", "Sanctuary Retreats luxury camps", "Private guide"],
    excluded: ["Tips", "International flights"]
  },
  {
    id: "36",
    slug: "3-day-fly-in-luxury-ngorongoro-crater-lodge",
    title: "3-Day andBeyond Ngorongoro Crater Lodge Fly-In",
    duration: "3 Days / 2 Nights",
    difficulty: "Very Easy",
    scenery: "Architectural Wonders & Crater",
    traffic: "Low",
    images: ["/photos/ngorongoro.webp"],
    days: [
      { title: "DAY 1: FLY ARUSHA TO MANYARA - NGORONGORO", time: "30 min flight", description: "Fly to Manyara, scenic drive to Crater Lodge.", accommodation: "andBeyond Ngorongoro Crater Lodge", meals: "Lunch, Dinner" },
      { title: "DAY 2: PRIVATE NGORONGORO CRATER DESCENT", time: "Full day", description: "Private butler service crater tour.", accommodation: "andBeyond Ngorongoro Crater Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: FLY MANYARA TO JRO", time: "30 min flight", description: "Transfer to airstrip and fly to JRO.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Flights", "andBeyond luxury lodge stay", "Private vehicle"],
    excluded: ["Tips", "Visas"]
  },
  {
    id: "37",
    slug: "5-day-luxury-serengeti-migration-and-balloon",
    title: "5-Day Luxury Serengeti Migration & Hot Air Balloon Fly-In",
    duration: "5 Days / 4 Nights",
    difficulty: "Easy",
    scenery: "Savannah & Balloon Aerial Views",
    traffic: "Low",
    images: ["/photos/hot-air-balloon-safari.webp", "/photos/serengeti-the-great-migration.webp"],
    days: [
      { title: "DAY 1: FLY ARUSHA TO SERENGETI", time: "1 hour flight", description: "Fly into Serengeti.", accommodation: "Sayari Camp by Asilia", meals: "Lunch, Dinner" },
      { title: "DAY 2: PRIVATE MIGRATION SAFARI", time: "Full day", description: "Track wildebeest river crossings.", accommodation: "Sayari Camp by Asilia", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: SUNRISE BALLOON SAFARI", time: "Full day", description: "Hot air balloon flight + luxury game drive.", accommodation: "Sayari Camp by Asilia", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: CENTRAL SERENGETI TRANSFER", time: "30 min flight", description: "Fly central for big cats.", accommodation: "Dunia Camp by Asilia", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: FLY SERENGETI TO JRO", time: "1 hour flight", description: "Fly back to JRO for departure.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Asilia Luxury Camps", "Hot Air Balloon Flight", "Flights"],
    excluded: ["Tips", "Visas"]
  },
  {
    id: "38",
    slug: "7-day-four-seasons-serengeti-luxury-family",
    title: "7-Day Four Seasons Serengeti & Ngorongoro Family Luxury",
    duration: "7 Days / 6 Nights",
    difficulty: "Very Easy",
    scenery: "5-Star Bush Resort & Caldera",
    traffic: "Low",
    images: ["/photos/new-images/lion-serengeti-2.jpeg"],
    days: [
      { title: "DAY 1: ARRIVAL JRO TO ARUSHA", time: "1 hour", description: "VIP airport transfer.", accommodation: "Gran Melia Arusha", meals: "Dinner" },
      { title: "DAY 2: FLY TO SERENGETI FOUR SEASONS", time: "1 hour flight", description: "Fly to Seronera airstrip, transfer to Four Seasons.", accommodation: "Four Seasons Safari Lodge Serengeti", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: DISCOVERY CENTRE & GAME DRIVE", time: "Full day", description: "Educational discovery center & private safari.", accommodation: "Four Seasons Safari Lodge Serengeti", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: BUSH DINNER & PREDATOR TRACKING", time: "Full day", description: "Game drive with private bush dinner under stars.", accommodation: "Four Seasons Safari Lodge Serengeti", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: FLY TO NGORONGORO", time: "45 min flight", description: "Fly to Manyara, transfer to crater lodge.", accommodation: "Ngorongoro Serena Safari Lodge (Deluxe Suite)", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: NGORONGORO CRATER FLOOR", time: "Full day", description: "Crater safari.", accommodation: "Ngorongoro Serena Safari Lodge (Deluxe Suite)", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 7: FLY TO KILIMANJARO AIRPORT", time: "1 hour flight", description: "Fly back to JRO.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Four Seasons luxury stay", "Internal flights", "Private vehicle"],
    excluded: ["Tips", "International flights"]
  },
  {
    id: "39",
    slug: "4-day-fly-in-tarangire-and-ngorongoro-luxury",
    title: "4-Day Fly-In Luxury Weekend: Tarangire & Ngorongoro Crater",
    duration: "4 Days / 3 Nights",
    difficulty: "Very Easy",
    scenery: "Baobab Forest & Crater Rim",
    traffic: "Low",
    images: ["/photos/tarangire-national-park.webp", "/photos/ngorongoro.webp"],
    days: [
      { title: "DAY 1: FLY ARUSHA TO TARANGIRE", time: "20 min flight", description: "Fly to Kuro Airstrip in Tarangire.", accommodation: "Oliver's Camp by Asilia", meals: "Lunch, Dinner" },
      { title: "DAY 2: WALKING SAFARI & FLY TO MANYARA", time: "30 min flight", description: "Morning walk in Tarangire, afternoon fly to Manyara.", accommodation: "The Manor at Ngorongoro", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: NGORONGORO CRATER SAFARI", time: "Full day", description: "Private descent into crater.", accommodation: "The Manor at Ngorongoro", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: FLY MANYARA TO JRO", time: "30 min flight", description: "Fly to JRO for departure.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Flights", "Luxury accommodation", "Private safari car"],
    excluded: ["Tips", "Personal spending"]
  },
  {
    id: "40",
    slug: "6-day-chem-chem-private-concession-luxury",
    title: "6-Day Chem Chem Slow Safari & Tarangire Luxury",
    duration: "6 Days / 5 Nights",
    difficulty: "Easy",
    scenery: "Private Concession Lake Manyara & Tarangire",
    traffic: "Exclusive Private Area",
    images: ["/photos/Saadani_National_Park_Giraffe_30.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO CHEM CHEM CONCESSION", time: "2 hours", description: "Transfer to private Chem Chem concession between Manyara & Tarangire.", accommodation: "Chem Chem Lodge", meals: "Lunch, Gourmet Dinner" },
      { title: "DAY 2: RUNNING WITH MAASAI & BUSH SAFARI", time: "Flexible", description: "Morning guided run/walk with Maasai warrior, afternoon game drive.", accommodation: "Chem Chem Lodge", meals: "Full Board All Inclusive" },
      { title: "DAY 3: PRIVATE TARANGIRE NATIONAL PARK SAFARI", time: "Full day", description: "Private entrance to Tarangire.", accommodation: "Chem Chem Lodge", meals: "Full Board All Inclusive" },
      { title: "DAY 4: LAKE MANYARA FLAMINGO WALK", time: "Full day", description: "Private lakeside walk and dining under acacia trees.", accommodation: "Little Chem Chem", meals: "Full Board All Inclusive" },
      { title: "DAY 5: NIGHT GAME DRIVE & TRACKING", time: "Full day", description: "Spot nocturnal wildlife in private concession.", accommodation: "Little Chem Chem", meals: "Full Board All Inclusive" },
      { title: "DAY 6: CHEM CHEM TO ARUSHA / JRO", time: "2 hours", description: "Transfer back to Arusha or JRO Airport.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Chem Chem private conservation fees", "All luxury meals & drinks", "Private guide"],
    excluded: ["Tips", "International flights"]
  },

  // ==========================================
  // SECTION 4: SOUTHERN & WESTERN CIRCUITS (41-46)
  // ==========================================
  {
    id: "41",
    slug: "3-day-nyerere-selous-game-reserve-fly-in-safari",
    title: "3-Day Nyerere National Park (Selous) Fly-In Boat & Walking Safari",
    duration: "3 Days / 2 Nights",
    difficulty: "Easy - Wild Southern Circuit",
    scenery: "Rufiji River & Unspoiled Wilderness",
    traffic: "Low",
    images: ["/photos/herd-of-elephants-and-water-selous-1536x864.webp", "/photos/selous_08-scaled-1350x899.webp"],
    days: [
      {
        title: "DAY 1: DAR ES SALAAM TO NYERERE NATIONAL PARK (SELOUS)",
        time: "45 min flight from Dar",
        description: "Fly from Dar es Salaam Airport to Mtemere Airstrip in Nyerere NP. Check-in at lodge. Afternoon Rufiji River boat safari watching hippos, crocs, and water birds.",
        accommodation: "Mid-Range Camp: Rufiji River Camp / Kinga Lodge",
        meals: "Lunch, Dinner"
      },
      {
        title: "DAY 2: FULL DAY NYERERE GAME DRIVE & BUSH WALK",
        time: "Full day",
        description: "Early morning guided bush walking safari with an armed ranger. Afternoon full-day 4x4 game drive tracking wild dogs, lions, and giraffes.",
        accommodation: "Mid-Range Camp: Rufiji River Camp / Kinga Lodge",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        title: "DAY 3: NYERERE TO DAR ES SALAAM",
        time: "45 min flight",
        description: "Morning game drive. Transfer to airstrip for flight back to Dar es Salaam or Zanzibar.",
        accommodation: "N/A",
        meals: "Breakfast"
      }
    ],
    included: ["Return flights from Dar es Salaam", "Nyerere NP conservation fees", "Rufiji River boat safari", "Guided walking safari fee", "4x4 Open safari vehicle"],
    excluded: ["International flights", "Tips", "Visas", "Alcoholic drinks"]
  },
  {
    id: "42",
    slug: "5-day-ruaha-national-park-fly-in-wilderness-safari",
    title: "5-Day Ruaha National Park Remote Wilderness Safari",
    duration: "5 Days / 4 Nights",
    difficulty: "Moderate",
    scenery: "Baobab Valley & Great Ruaha River",
    traffic: "Very Low",
    images: ["/photos/Ruaha_National_Park_Elephants_49.webp", "/photos/Ruaha_National_Park_Baobab_Landscape_10.webp"],
    days: [
      { title: "DAY 1: FLY DAR ES SALAAM TO RUAHA", time: "1.5 hour flight", description: "Fly from Dar es Salaam into Msembe Airstrip in Ruaha, Tanzania's largest national park.", accommodation: "Lodge: Ruaha River Lodge", meals: "Lunch, Dinner" },
      { title: "DAY 2: FULL DAY RUAHA PREDATOR TRACKING", time: "Full day", description: "Track giant lion prides and wild dogs along the Great Ruaha River.", accommodation: "Lodge: Ruaha River Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: BUSH WALKING SAFARI & GAME DRIVE", time: "Full day", description: "Morning armed ranger walk followed by game drive in distant park sectors.", accommodation: "Tented Camp: Jabali Ridge / Ikuka Safari Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: FULL DAY RUAHA EXPLORATION", time: "Full day", description: "Focus on Greater Kudu, Sable antelopes, and huge elephant herds.", accommodation: "Tented Camp: Jabali Ridge / Ikuka Safari Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: FLY RUAHA TO DAR ES SALAAM / ZANZIBAR", time: "1.5 hour flight", description: "Morning safari and flight back to Dar es Salaam or Zanzibar.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Return bush flights from Dar es Salaam", "Ruaha park fees & walking fees", "Open 4x4 vehicles"],
    excluded: ["Tips", "Personal expenses"]
  },

  // (Packages 43 to 46 added for Southern & Western choices)
  {
    id: "43",
    slug: "3-day-mikumi-national-park-budget-safari-from-dar",
    title: "3-Day Mikumi National Park Road Safari from Dar es Salaam",
    duration: "3 Days / 2 Nights",
    difficulty: "Easy - Road Tour",
    scenery: "Mkata Floodplain",
    traffic: "Low",
    images: ["/photos/Mikumi_National_Park_Zebras_111.webp"],
    days: [
      { title: "DAY 1: DAR ES SALAAM TO MIKUMI", time: "4–5 hours drive", description: "Drive from Dar es Salaam to Mikumi National Park. Afternoon game drive.", accommodation: "Camp: Mikumi Safari Lodge / Bastian Camp", meals: "Lunch, Dinner" },
      { title: "DAY 2: FULL DAY MIKUMI GAME DRIVE", time: "Full day", description: "Full day exploring Mkata Floodplain (often compared to Serengeti).", accommodation: "Camp: Mikumi Safari Lodge / Bastian Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: MIKUMI TO DAR ES SALAAM", time: "5 hours drive", description: "Morning game drive and drive back to Dar es Salaam.", accommodation: "N/A", meals: "Breakfast, Lunch" }
    ],
    included: ["Transport in 4x4 from Dar", "Park fees", "Mid-range accommodation"],
    excluded: ["Tips", "Items of personal nature"]
  },
  {
    id: "44",
    slug: "4-day-mahale-mountains-chimpanzee-trekking-fly-in",
    title: "4-Day Mahale Mountains Chimpanzee Trekking Expedition",
    duration: "4 Days / 3 Nights",
    difficulty: "Challenging Trekking",
    scenery: "Lake Tanganyika & Rain Forest",
    traffic: "Extremely Low",
    images: ["/photos/Mahale_Mountains_National_Park_Chimp_44.webp", "/photos/Mahale_Mountain_National_Park.webp"],
    days: [
      { title: "DAY 1: CHARTER FLIGHT TO MAHALE (LAKE TANGANYIKA)", time: "3 hours flight from Arusha/Dar", description: "Fly to Mahale airstrip and transfer by boat to lodge on Lake Tanganyika shore.", accommodation: "Luxury Camp: Greystoke Mahale / Mbali Mbali Mahale", meals: "Lunch, Dinner" },
      { title: "DAY 2: CHIMPANZEE TREKKING IN MAHALE FOREST", time: "Full day", description: "Guided forest trek to habituated chimpanzee groups with park rangers.", accommodation: "Luxury Camp: Greystoke Mahale / Mbali Mbali Mahale", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: LAKE TANGANYIKA BOAT SAFARI & CHIMP TREK", time: "Full day", description: "Second chimp trek in morning, afternoon kayaking and snorkeling in crystal clear lake water.", accommodation: "Luxury Camp: Greystoke Mahale / Mbali Mbali Mahale", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: FLY MAHALE TO ARUSHA / DAR ES SALAAM", time: "3 hours flight", description: "Boat transfer to airstrip and flight return.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Charter flights", "Chimpanzee permits", "Boat transfers", "Full board luxury lodge"],
    excluded: ["Tips", "International flights"]
  },
  {
    id: "45",
    slug: "4-day-katavi-national-park-remote-safari",
    title: "4-Day Katavi National Park Untamed Wilderness Safari",
    duration: "4 Days / 3 Nights",
    difficulty: "Moderate",
    scenery: "Katuma River & Floodplains",
    traffic: "Extremely Low",
    images: ["/photos/Mikumi_National_Park_Hippos_101.webp"],
    days: [
      { title: "DAY 1: FLY TO KATAVI NATIONAL PARK", time: "3 hours charter flight", description: "Fly into Iku Airstrip in remote Western Katavi.", accommodation: "Camp: Katuma Bush Lodge / Mbali Mbali Katavi", meals: "Lunch, Dinner" },
      { title: "DAY 2: KATUMA RIVER HIPPO & CROC SAFARI", time: "Full day", description: "Witness pods of over 500 hippos crowded in river pools.", accommodation: "Camp: Katuma Bush Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: FULL DAY KATAVI BUFFALO HERDS TRACKING", time: "Full day", description: "Track vast buffalo herds numbering over 1,000 animals.", accommodation: "Camp: Katuma Bush Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: FLY KATAVI TO DAR / ARUSHA", time: "3 hours flight", description: "Morning game drive and departure flight.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Charter flights", "Park fees", "Full board accommodation"],
    excluded: ["Tips", "Visas"]
  },
  {
    id: "46",
    slug: "6-day-southern-circuit-combo-selous-and-ruaha",
    title: "6-Day Southern Pioneer: Nyerere (Selous) & Ruaha Fly-In Combo",
    duration: "6 Days / 5 Nights",
    difficulty: "Moderate",
    scenery: "Rivers & Baobab Valleys",
    traffic: "Very Low",
    images: ["/photos/Giraffes-in-Selous-1.webp", "/photos/Ruaha_National_Park_Tanzania.webp"],
    days: [
      { title: "DAY 1: FLY DAR TO NYERERE (SELOUS)", time: "45 min flight", description: "Boat safari on Rufiji River.", accommodation: "Rufiji River Camp", meals: "Lunch, Dinner" },
      { title: "DAY 2: FULL DAY NYERERE SAFARI", time: "Full day", description: "Game drive and walking safari.", accommodation: "Rufiji River Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: FLY NYERERE TO RUAHA", time: "1 hour flight", description: "Bush flight to Ruaha NP.", accommodation: "Ruaha River Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: FULL DAY RUAHA SAFARI", time: "Full day", description: "Predator tracking in Ruaha.", accommodation: "Ruaha River Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: RUAHA BUSH WALK & EVENING GAME DRIVE", time: "Full day", description: "Guided walk and sunset drive.", accommodation: "Ruaha River Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: FLY RUAHA TO DAR ES SALAAM", time: "1.5 hour flight", description: "Flight return to Dar es Salaam.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["All inter-park flights from Dar", "Park & activity fees", "Full board"],
    excluded: ["Tips", "International flights"]
  },

  // ==========================================
  // SECTION 5: BUSH & BEACH COMBINATIONS (47-50+)
  // ==========================================
  {
    id: "47",
    slug: "7-day-tanzania-safari-and-zanzibar-beach-combo",
    title: "7-Day Bush to Beach: Serengeti, Ngorongoro & Zanzibar Package",
    duration: "7 Days / 6 Nights",
    difficulty: "Easy",
    scenery: "Savannah & Turquoise Indian Ocean",
    traffic: "Moderate to High",
    images: ["/photos/serengeti-the-great-migration.webp", "/photos/zanzibar-beach-nditotravel-zanzibar.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2 hours drive", description: "Tarangire game drive.", accommodation: "Sangaiwe Tented Lodge", meals: "Lunch, Dinner" },
      { title: "DAY 2: TARANGIRE TO SERENGETI", time: "5 hours drive", description: "Drive to Central Serengeti.", accommodation: "Serengeti Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: SERENGETI TO NGORONGORO RIM", time: "3.5 hours drive", description: "Morning game drive, transfer to rim.", accommodation: "Rhino Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: NGORONGORO CRATER TO FLY TO ZANZIBAR", time: "4 hours drive + 1 hr flight", description: "Crater safari, drop off at Arusha Airport for afternoon flight to Zanzibar.", accommodation: "Beach Resort: Ocean Paradise Resort Zanzibar", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: ZANZIBAR BEACH RELAXATION", time: "At Leisure", description: "Relax on white sand beach or optional Stone Town tour.", accommodation: "Beach Resort: Ocean Paradise Resort Zanzibar", meals: "Breakfast, Dinner" },
      { title: "DAY 6: ZANZIBAR SPICE TOUR & MNEMBA SNORKELING", time: "Flexible", description: "Spice farm tour and boat ride to Mnemba Atoll for snorkeling.", accommodation: "Beach Resort: Ocean Paradise Resort Zanzibar", meals: "Breakfast, Dinner" },
      { title: "DAY 7: ZANZIBAR AIRPORT DEPARTURE", time: "1 hour transfer", description: "Transfer to Zanzibar International Airport (ZNZ) for departure flight.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Flight Arusha to Zanzibar", "All safari park fees", "Safari 4x4 & guide", "Half Board hotel in Zanzibar"],
    excluded: ["Zanzibar water sports", "Tips", "Visas"]
  },
  {
    id: "48",
    slug: "10-day-ultimate-tanzania-safari-zanzibar-luxury-combo",
    title: "10-Day Ultimate Luxury Bush & Beach: Serengeti & Zanzibar Nungwi",
    duration: "10 Days / 9 Nights",
    difficulty: "Easy",
    scenery: "Savannah & Crystal Coral Reefs",
    traffic: "Low",
    images: ["/photos/serengeti-lion.webp", "/photos/Nungwi_beach_header-992.webp"],
    days: [
      { title: "DAY 1: ARRIVAL JRO TO ARUSHA", time: "1 hour", description: "Private luxury transfer.", accommodation: "Gran Melia Arusha", meals: "Dinner" },
      { title: "DAY 2: FLY ARUSHA TO SERENGETI", time: "1 hour flight", description: "Fly to Central Serengeti.", accommodation: "Melia Serengeti Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: FULL DAY SERENGETI MIGRATION", time: "Full day", description: "Private game drive.", accommodation: "Melia Serengeti Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: SERENGETI TO NGORONGORO CRATER LODGE", time: "3 hours drive", description: "Transit to luxury crater rim lodge.", accommodation: "andBeyond Ngorongoro Crater Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: EXCLUSIVE CRATER SAFARI", time: "Full day", description: "Full day crater tour.", accommodation: "andBeyond Ngorongoro Crater Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: FLY MANYARA TO ZANZIBAR", time: "1.5 hour flight", description: "Fly direct from Manyara to Zanzibar. Transfer to 5-star resort.", accommodation: "Luxury Resort: The Z Hotel Nungwi / RIU Palace", meals: "Breakfast, Dinner" },
      { title: "DAY 7: ZANZIBAR PRIVATE YACHT & SNORKELING", time: "Full day", description: "Private yacht charter to Tumbatu Island.", accommodation: "Luxury Resort: The Z Hotel Nungwi / RIU Palace", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 8: ZANZIBAR BEACH AT LEISURE", time: "At Leisure", description: "Spa treatments and oceanfront dining.", accommodation: "Luxury Resort: The Z Hotel Nungwi / RIU Palace", meals: "Breakfast, Dinner" },
      { title: "DAY 9: STONE TOWN CULTURAL TOUR", time: "Half day", description: "Guided tour of Stone Town historical sites.", accommodation: "Luxury Resort: The Z Hotel Nungwi / RIU Palace", meals: "Breakfast, Dinner" },
      { title: "DAY 10: ZANZIBAR AIRPORT DEPARTURE", time: "1 hour transfer", description: "Transfer to ZNZ Airport.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Flights Manyara to Zanzibar", "Luxury accommodations", "Private transfers & safari car"],
    excluded: ["International flights", "Tips"]
  },
  {
    id: "49",
    slug: "8-day-budget-safari-and-zanzibar-express",
    title: "8-Day Budget Explorer: Tarangire, Ngorongoro & Zanzibar Beach",
    duration: "8 Days / 7 Nights",
    difficulty: "Easy - Budget Comfort",
    scenery: "Park & Beaches",
    traffic: "Moderate",
    images: ["/photos/ngorongoro.webp", "/photos/zanzibar-beach-nditotravel-zanzibar.webp"],
    days: [
      { title: "DAY 1: ARUSHA TO TARANGIRE", time: "2 hours", description: "Tarangire game drive.", accommodation: "Panorama Camp", meals: "Lunch, Dinner" },
      { title: "DAY 2: NGORONGORO CRATER TO ARUSHA", time: "4 hours", description: "Crater game drive, evening hotel in Arusha.", accommodation: "Arusha Tourist Inn", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: FLY ARUSHA TO ZANZIBAR", time: "1 hour flight", description: "Flight to Zanzibar, check-in at Kendwa budget lodge.", accommodation: "Kendwa Rocks Beach Hotel", meals: "Breakfast, Dinner" },
      { title: "DAY 4: ZANZIBAR BEACH DAY", time: "At Leisure", description: "Beach relaxation.", accommodation: "Kendwa Rocks Beach Hotel", meals: "Breakfast, Dinner" },
      { title: "DAY 5: STONE TOWN & SPICE FARM", time: "Half day", description: "Historical Stone Town tour.", accommodation: "Kendwa Rocks Beach Hotel", meals: "Breakfast, Dinner" },
      { title: "DAY 6: PRISON ISLAND GIANT TORTOISE TOUR", time: "Half day", description: "Boat to Prison Island.", accommodation: "Kendwa Rocks Beach Hotel", meals: "Breakfast, Dinner" },
      { title: "DAY 7: KENDWA BEACH RELAXATION", time: "At Leisure", description: "Sunset beach walk.", accommodation: "Kendwa Rocks Beach Hotel", meals: "Breakfast, Dinner" },
      { title: "DAY 8: ZANZIBAR AIRPORT TRANSFER", time: "1 hour", description: "Transfer to ZNZ airport.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Flight Arusha to Zanzibar", "Budget hotels", "Park fees"],
    excluded: ["Tips", "Visas"]
  },
  {
    id: "50",
    slug: "12-day-grand-tanzania-safari-kilimanjaro-zanzibar",
    title: "12-Day Grand Tanzania: Bush Safari, Kilimanjaro Day Trek & Zanzibar",
    duration: "12 Days / 11 Nights",
    difficulty: "Moderate",
    scenery: "Mountain, Savannah & Tropical Beach",
    traffic: "Moderate",
    images: ["/photos/Mount_Kilimanjaro_Tanzania.webp", "/photos/serengeti-the-great-migration.webp", "/photos/zanzibar-feature.webp"],
    days: [
      { title: "DAY 1: ARRIVAL JRO AIRPORT", time: "45 min", description: "Transfer to Moshi.", accommodation: "Moshi Park View Hotel", meals: "Dinner" },
      { title: "DAY 2: MOUNT KILIMANJARO DAY TREK (MARANGU ROUTE)", time: "6–7 hours trekking", description: "Hike up to Mandara Hut through rainforest on Mt. Kilimanjaro.", accommodation: "Moshi Park View Hotel", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: MOSHI TO TARANGIRE NATIONAL PARK", time: "3 hours drive", description: "Tarangire game drive.", accommodation: "Sangaiwe Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: TARANGIRE TO SERENGETI", time: "5 hours drive", description: "Drive to Central Serengeti.", accommodation: "Serengeti Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: FULL DAY SERENGETI", time: "Full day", description: "Tracking Big Cats.", accommodation: "Serengeti Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: SERENGETI TO NGORONGORO RIM", time: "3.5 hours drive", description: "Transit to crater rim.", accommodation: "Rhino Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 7: NGORONGORO CRATER TO FLY TO ZANZIBAR", time: "4 hours + 1 hr flight", description: "Crater safari, fly from Arusha to Zanzibar.", accommodation: "Bluebay Beach Resort Zanzibar", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 8 TO 11: ZANZIBAR BEACH & ISLAND TOURS", time: "At Leisure", description: "Four days enjoying Zanzibar beaches, snorkeling, and spice tours.", accommodation: "Bluebay Beach Resort Zanzibar", meals: "Breakfast, Dinner" },
      { title: "DAY 12: DEPARTURE ZANZIBAR AIRPORT", time: "1 hour transfer", description: "Airport transfer for return home flight.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Kilimanjaro day hike permit & ranger", "All safari park fees", "Flight Arusha to Zanzibar", "4x4 Safari Land Cruiser"],
    excluded: ["Tips for mountain guide and safari driver", "Visas", "Drinks"]
  },
  {
    id: "51",
    slug: "9-day-selous-ruaha-and-zanzibar-southern-escape",
    title: "9-Day Southern Wilderness & Zanzibar Beach Combination",
    duration: "9 Days / 8 Nights",
    difficulty: "Easy",
    scenery: "Untamed Bush & Island Palms",
    traffic: "Low",
    images: ["/photos/Giraffes-in-Selous-1.webp", "/photos/zanzibar-feature.webp"],
    days: [
      { title: "DAY 1: FLY DAR TO NYERERE (SELOUS)", time: "45 min flight", description: "Afternoon Rufiji boat safari.", accommodation: "Rufiji River Camp", meals: "Lunch, Dinner" },
      { title: "DAY 2: FULL DAY NYERERE GAME DRIVE", time: "Full day", description: "Game drive in Nyerere.", accommodation: "Rufiji River Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: FLY NYERERE TO RUAHA", time: "1 hour flight", description: "Transfer to Ruaha.", accommodation: "Ruaha River Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: FULL DAY RUAHA GAME DRIVE", time: "Full day", description: "Explore Ruaha baobab valley.", accommodation: "Ruaha River Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: FLY RUAHA TO ZANZIBAR", time: "1.5 hour flight", description: "Direct flight to Zanzibar island.", accommodation: "Breezes Beach Club Zanzibar", meals: "Breakfast, Dinner" },
      { title: "DAY 6 TO 8: ZANZIBAR BEACH RELAXATION", time: "At Leisure", description: "Relax on Zanzibar's south-east coast.", accommodation: "Breezes Beach Club Zanzibar", meals: "Breakfast, Dinner" },
      { title: "DAY 9: ZANZIBAR AIRPORT DEPARTURE", time: "1 hour transfer", description: "Transfer to ZNZ Airport.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["All bush and island flights", "Park fees", "Lodges & Beach Resort"],
    excluded: ["Tips", "International flights"]
  },
  {
    id: "52",
    slug: "6-day-serengeti-and-zanzibar-express-fly-in",
    title: "6-Day Serengeti & Zanzibar Express Fly-In Safari",
    duration: "6 Days / 5 Nights",
    difficulty: "Very Easy",
    scenery: "Savannah & Coral Sands",
    traffic: "Low",
    images: ["/photos/serengeti-the-great-migration.webp", "/photos/zanzibar-feature.webp"],
    days: [
      { title: "DAY 1: FLY ARUSHA TO SERENGETI", time: "1 hour flight", description: "Fly to Seronera airstrip, afternoon game drive.", accommodation: "Serengeti Tortilis Camp", meals: "Lunch, Dinner" },
      { title: "DAY 2: FULL DAY SERENGETI SAFARI", time: "Full day", description: "Big cat tracking in Central Serengeti.", accommodation: "Serengeti Tortilis Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: FLY SERENGETI DIRECT TO ZANZIBAR", time: "2 hour flight", description: "Fly from Seronera airstrip directly to Zanzibar.", accommodation: "Sultan Sands Island Resort", meals: "Breakfast, Dinner" },
      { title: "DAY 4: ZANZIBAR BEACH DAY", time: "At Leisure", description: "Beach relaxation.", accommodation: "Sultan Sands Island Resort", meals: "Breakfast, Dinner" },
      { title: "DAY 5: ZANZIBAR SUNSET DHOW CRUISE", time: "Half day", description: "Relax and enjoy evening traditional wooden dhow cruise.", accommodation: "Sultan Sands Island Resort", meals: "Breakfast, Dinner" },
      { title: "DAY 6: DEPARTURE ZANZIBAR", time: "1 hour transfer", description: "Transfer to ZNZ airport.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["Direct flight Serengeti to Zanzibar", "Park fees", "Resort stay"],
    excluded: ["Tips", "Visas"]
  },
  {
    id: "53",
    slug: "14-day-grand-tanzania-circuit-and-zanzibar-expedition",
    title: "14-Day Complete Tanzania Safari & Zanzibar Island Expedition",
    duration: "14 Days / 13 Nights",
    difficulty: "Moderate",
    scenery: "Complete Country Overview",
    traffic: "Moderate",
    images: ["/photos/serengeti-the-great-migration.webp", "/photos/ngorongoro.webp", "/photos/zanzibar-feature.webp"],
    days: [
      { title: "DAY 1: ARRIVAL JRO", time: "N/A", description: "Arusha transfer.", accommodation: "Mount Meru Hotel", meals: "Dinner" },
      { title: "DAY 2: TARANGIRE PARK", time: "2 hours", description: "Game drive in Tarangire.", accommodation: "Sangaiwe Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 3: LAKE MANYARA PARK", time: "1 hour", description: "Game drive in Manyara.", accommodation: "Manyara Secret Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 4: LAKE NATRON", time: "3 hours", description: "Flamingos walk.", accommodation: "Natron Tented Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 5: NORTH SERENGETI", time: "5 hours", description: "Transit to Northern Serengeti.", accommodation: "Serengeti Heritage Mara Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 6: MARA RIVER MIGRATION", time: "Full day", description: "River crossing tracking.", accommodation: "Serengeti Heritage Mara Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 7: CENTRAL SERENGETI", time: "3 hours", description: "Game drive in Seronera.", accommodation: "Serengeti Heritage Central Camp", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 8: NGORONGORO CRATER", time: "3 hours", description: "Full day crater tour.", accommodation: "Marera Valley Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 9: CULTURAL HADZABE BUSHMEN", time: "2 hours", description: "Lake Eyasi cultural tour.", accommodation: "Marera Valley Lodge", meals: "Breakfast, Lunch, Dinner" },
      { title: "DAY 10: FLY ARUSHA TO ZANZIBAR", time: "1 hour flight", description: "Flight to Zanzibar island.", accommodation: "Gold Zanzibar Beach House & Spa", meals: "Breakfast, Dinner" },
      { title: "DAY 11 TO 13: ZANZIBAR BEACH & TOURS", time: "At Leisure", description: "Resort relaxation and ocean activities.", accommodation: "Gold Zanzibar Beach House & Spa", meals: "Breakfast, Dinner" },
      { title: "DAY 14: ZANZIBAR AIRPORT DEPARTURE", time: "1 hour", description: "Departure transfer.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: ["All park fees", "Cultural fees", "Domestic flight to Zanzibar", "4x4 vehicle & guide"],
    excluded: ["International flights", "Tips", "Visas"]
  }
];