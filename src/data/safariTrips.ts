// app/safari/data.ts

export const safariPackages = [
  {
    id: "1",
    slug: "tanzania-trip-2025",
    title: "Tanzania- Trip 2025",
    duration: "4 Days Ndito Adventure",
    difficulty: "Public Camp Site",
    scenery: "Good",
    traffic: "High",
    images: [
      "/photos/safari-package.png",
      "/photos/ngorongoro.webp",
    ],
    days: [
      {
        title: "DAY 1: JRO PICK UP | DRIVE TO AYA SOPHIA WILDLIFE",
        time: "40 min drive",
        description:
          "Pick up from Kilimanjaro International Airport and drive to Aya Sophia Wildlife for overnight. Arrival time may vary. Hotel: Aya Sophia Wildlife.",
        accommodation: "Hotel: Aya Sophia Wildlife",
        meals: "Lunch, Dinner and Breakfast"
      },
      {
        title: "DAY 2: AYA SOPHIA WILDLIFE TO NGORONGORO CRATER",
        time: "3–4 hours drive",
        description:
          "After breakfast at Aya Sophia Wildlife, drive to Ngorongoro Crater for a game drive until late afternoon, then return to your hotel for dinner and overnight.",
        accommodation: "Camp: Lake Manyara Kilmamoja",
        meals: "Dinner and Breakfast (Lunch on Safari Lunch Box)"
      },
      {
        title: "DAY 3: TARANGIRE NATIONAL PARK | HOT AIR BALLOON FLIGHT",
        time: "Flight time: 40–50 min",
        description:
          "Early morning drive to Tarangire National Park (around 5:30 AM) for a hot air balloon flight, followed by a game drive until late afternoon. Then drive to Lake Manyara Kilmamoja Lodge for dinner and overnight.",
        accommodation: "Camp: Lake Manyara Kilmamoja Lodge",
        meals: "Dinner and Breakfast (Lunch on Safari Lunch Box)"
      },
      {
        title: "DAY 4: MASSAI VILLAGE AND DRIVE BACK TO ARUSHA",
        time: "Full day",
        description:
          "After breakfast, drive to Massai Village to learn about their culture, then head back to Arusha for safari shopping. Depending on your flight timing, transfer to the airport. End of service.",
        accommodation: "N/A",
        meals: "Breakfast"
      }
    ],
    included: [
      "Safari trip according to the itinerary",
      "Aya Sophia Wildlife 1 Night",
      "Lake Manyara Kilmamoja 2 Nights",
      "Hot Balloon Safari",
      "Professional English-speaking Ndito Travel Driver Guide",
      "Safari Car Land Cruiser 4x4 with pop top roof",
      "Meals according to the itinerary",
      "Drinking water",
      "All National Park & Entrance Fees",
      "Accommodation",
      "Transfer from and return to the airport"
    ],
    excluded: [
      "Zanzibar Flights Return",
      "Visa fees",
      "Travel or Medical Insurance (required, ask for recommendation)",
      "Tips for Guide",
      "Personal spending money for souvenirs etc.",
      "Energy food & beverages, alcoholic and soft drinks",
      "Additional hotel nights in Arusha or any city in Tanzania ($150 per room)"
    ]
  },

  // --- New Package 1 ---
  {
    id: "2",
    slug: "ngorongoro-crater-explorer",
    title: "Ngorongoro Explorer",
    duration: "3 Days Adventure",
    difficulty: "Easy",
    scenery: "Crater & Wildlife",
    traffic: "Moderate",
    images: [
      "/photos/ngorongoro.webp",
      "/photos/ngorongoro.webp",
      "/photos/massai-village.webp"
    ],
    days: [
      {
        title: "DAY 1: ARRIVAL & ARUSHA CITY TOUR",
        time: "2–3 hours",
        description:
          "Arrival at Kilimanjaro Airport and transfer to Arusha for a city tour. Evening at leisure at your hotel.",
        accommodation: "Hotel: Arusha Serena Lodge",
        meals: "Dinner"
      },
      {
        title: "DAY 2: NGORONGORO CRATER GAME DRIVE",
        time: "Full day",
        description:
          "Drive to Ngorongoro Crater after breakfast. Full-day game drive exploring the crater and spotting wildlife. Return to lodge for overnight.",
        accommodation: "Lodge: Ngorongoro Serena Safari Lodge",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        title: "DAY 3: LAKE MANYARA & DEPARTURE",
        time: "4–5 hours",
        description:
          "Morning visit to Lake Manyara National Park for a short game drive. Return to Arusha and transfer to Kilimanjaro Airport for departure.",
        accommodation: "N/A",
        meals: "Breakfast"
      }
    ],
    included: [
      "All park entrance fees",
      "Professional English-speaking guide",
      "Safari 4x4 vehicle with pop-top roof",
      "Accommodation as specified",
      "Meals as per itinerary",
      "Transfer from and to airport"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses and tips",
      "Beverages not mentioned in itinerary"
    ]
  },

  // --- New Package Here 2 ---
  {
    id: "3",
    slug: "serengeti-hotballoon-adventure",
    title: "Serengeti From Above",
    duration: "5 Days Serengeti Safari",
    difficulty: "Moderate",
    scenery: "Savannah & Big Five",
    traffic: "Low",
    images: [
      "/photos/hot-air-balloon-safari.png",
      "/photos/hot-air-balloon-safari.png",
      "/photos/hot-air-balloon.webp"
    ],
    days: [
      {
        title: "DAY 1: ARRIVAL IN ARUSHA",
        time: "N/A",
        description:
          "Pick up from Kilimanjaro Airport and transfer to your lodge in Arusha for overnight rest.",
        accommodation: "Hotel: Arusha Serena Lodge",
        meals: "Dinner"
      },
      {
        title: "DAY 2: DRIVE TO SERENGETI NATIONAL PARK",
        time: "6–7 hours",
        description:
          "Drive through the Ngorongoro Highlands to Serengeti National Park. Enjoy first game drive en route. Overnight at Serengeti Lodge.",
        accommodation: "Camp: Serengeti Heritage Camp",
        meals: "Lunch and Dinner"
      },
      {
        title: "DAY 3: SERENGETI GAME DRIVE",
        time: "Full day",
        description:
          "Full-day game drive in Serengeti exploring the Big Five and savannah landscapes. Overnight at Serengeti Heritage Camp.",
        accommodation: "Camp: Serengeti Heritage Camp",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        title: "DAY 4: HOT AIR BALLOON SAFARI",
        time: "Early morning",
        description:
          "Hot air balloon flight over Serengeti at sunrise, followed by a champagne breakfast. Afternoon game drive and return to lodge.",
        accommodation: "Camp: Serengeti Heritage Camp",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        title: "DAY 5: DEPARTURE",
        time: "N/A",
        description:
          "Drive back to Arusha after breakfast and transfer to Kilimanjaro Airport for departure.",
        accommodation: "N/A",
        meals: "Breakfast"
      }
    ],
    included: [
      "Safari trip according to itinerary",
      "Accommodation in lodges/camps",
      "Meals as per itinerary",
      "Professional English-speaking guide",
      "4x4 Land Cruiser with pop-top roof",
      "Hot air balloon safari",
      "All park entrance fees",
      "Drinking water",
      "Transfers to and from airport"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Tips for guide and driver",
      "Personal expenses",
      "Alcoholic drinks"
    ]
  }
];
