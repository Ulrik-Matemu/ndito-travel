export interface RouteInfo {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  difficulty: "Moderate" | "Challenging" | "Strenuous" | "High";
  successRate: string;
  sceneryRating: "★★★★★" | "★★★★☆";
  traffic: "Low" | "Medium" | "High";
  accommodation: "Tents" | "Huts";
  heroImage: string;
  description: string;
  highlights: string[];
  bestFor: string;
  itinerarySummary: string;
}

export const kilimanjaroRoutes: RouteInfo[] = [
  {
    id: "lemosho-route",
    name: "Lemosho Route",
    subtitle: "The Most Scenic & Highest Success Rate Route",
    duration: "7 - 8 Days",
    difficulty: "Challenging",
    successRate: "95%+",
    sceneryRating: "★★★★★",
    traffic: "Medium",
    accommodation: "Tents",
    heroImage: "/photos/kilimanjaro/climbers-towards-kilimanjaro.jpg",
    description: "Approaching Mount Kilimanjaro from the west through pristine rainforests, Lemosho is widely considered the most beautiful trekking route on the mountain. Its extended itinerary provides superb acclimatization by following the 'climb high, sleep low' principle over Shira Plateau.",
    highlights: [
      "Panoramic 360° views across Shira Plateau and Lava Tower",
      "Excellent acclimatization profile for maximum summit success",
      "Less crowded during the first few days",
      "Traverses the spectacular Barranco Wall and Karanga Valley",
    ],
    bestFor: "Trekkers wanting the highest summit success rate combined with stunning scenery.",
    itinerarySummary: "Londorossi Gate → Forest Camp → Shira Camp → Lava Tower → Barranco → Karanga → Barafu → Uhuru Peak",
  },
  {
    id: "machame-route",
    name: "Machame Route",
    subtitle: "The Famous 'Whiskey Route'",
    duration: "6 - 7 Days",
    difficulty: "Strenuous",
    successRate: "90% - 92%",
    sceneryRating: "★★★★★",
    traffic: "High",
    accommodation: "Tents",
    heroImage: "/photos/kilimanjaro-hero-nditotravel.webp",
    description: "Machame is Kilimanjaro's most popular camping route. Known for its varied terrain, dramatic ridges, and stunning vistas of Kibo peak, Machame delivers a thrilling trek through rainforests, moorlands, and high-altitude alpine deserts.",
    highlights: [
      "Diverse landscapes from rainforest to Arctic glaciers",
      "Climb Lava Tower (4,630m) for optimal acclimatization",
      "Scramble up the famous Barranco Wall",
      "High value and classical Kilimanjaro experience",
    ],
    bestFor: "Physically fit adventurers seeking a scenic, classic Kilimanjaro challenge.",
    itinerarySummary: "Machame Gate → Machame Camp → Shira Camp → Lava Tower → Barranco → Barafu → Uhuru Peak",
  },
  {
    id: "marangu-route",
    name: "Marangu Route",
    subtitle: "The Classic 'Coca-Cola Route' with Hut Lodging",
    duration: "5 - 6 Days",
    difficulty: "Moderate",
    successRate: "80% - 85%",
    sceneryRating: "★★★★☆",
    traffic: "High",
    accommodation: "Huts",
    heroImage: "/photos/kilimanjaro/summit-kilimanjaro.jpg",
    description: "Marangu is the oldest and most established route on Mount Kilimanjaro. It is the only route that offers permanent dormitory-style sleeping huts with solar lighting and mattress beds, making it ideal during rainy shoulder months.",
    highlights: [
      "Comfortable wooden A-frame hut accommodation",
      "Gentle, gradual incline through rainforest and alpine meadows",
      "Same route for descent, allowing familiar trail navigation",
      "Great choice during damp weather seasons",
    ],
    bestFor: "Trekkers who prefer indoor hut sleeping over outdoor tent camping.",
    itinerarySummary: "Marangu Gate → Mandara Hut → Horombo Hut → Kibo Hut → Uhuru Peak → Horombo → Marangu Gate",
  },
  {
    id: "northern-circuit",
    name: "Northern Circuit",
    subtitle: "The Ultimate 9-Day Wilderness Trek",
    duration: "9 Days",
    difficulty: "Challenging",
    successRate: "98%",
    sceneryRating: "★★★★★",
    traffic: "Low",
    accommodation: "Tents",
    heroImage: "/photos/kilimanjaro/kilimanjaro-kibo.jpg",
    description: "The Northern Circuit is Kilimanjaro's newest and longest route. Circling the quiet northern slopes near the Kenyan border, it offers unmatched 360-degree scenery and the absolute highest summit success rate of any route.",
    highlights: [
      "9 days of optimal acclimatization (98% summit success rate)",
      "Uncrowded trail traversing the pristine northern face",
      "360-degree panoramic views of Mount Kilimanjaro",
      "Quiet wilderness camping far from main tourist hubs",
    ],
    bestFor: "Hikers looking for a peaceful, extended expedition with near-guaranteed summit success.",
    itinerarySummary: "Londorossi Gate → Big Tree → Shira 2 → Moir Hut → Buffalo Camp → Third Cave → School Hut → Uhuru Peak",
  },
  {
    id: "rongai-route",
    name: "Rongai Route",
    subtitle: "The Only Route Approaching from the North",
    duration: "6 - 7 Days",
    difficulty: "Moderate",
    successRate: "88% - 90%",
    sceneryRating: "★★★★☆",
    traffic: "Low",
    accommodation: "Tents",
    heroImage: "/photos/Kilimanjaro_Climb_Rongai_Route_01.webp",
    description: "Starting near the Tanzanian-Kenyan border, Rongai approaches Kilimanjaro from the north. The northern slopes receive significantly less rainfall, making Rongai the premier choice during rainier months (April, May, November).",
    highlights: [
      "Drier conditions than southern routes",
      "Wilderness feel with frequent colobus monkey sightings",
      "Gentle slope profile suited for steady pacing",
      "Passes Mawenzi Tarn beneath Kibo's rugged sister peak",
    ],
    bestFor: "Trekkers seeking a quiet route or climbing during shoulder rainy seasons.",
    itinerarySummary: "Rongai Gate → Simba Camp → Second Cave → Mawenzi Tarn → Kibo Hut → Uhuru Peak → Horombo",
  },
  {
    id: "umbwe-route",
    name: "Umbwe Route",
    subtitle: "The Steepest & Most Direct Route",
    duration: "6 Days",
    difficulty: "Strenuous",
    successRate: "70% - 75%",
    sceneryRating: "★★★★☆",
    traffic: "Low",
    accommodation: "Tents",
    heroImage: "/photos/kilimanjaro/summit-kilimanjaro.jpg",
    description: "The Umbwe Route is renowned for being the most challenging ascent on Mount Kilimanjaro. Approaching from the south, it offers a steep, direct path up the mountain, minimizing the time spent at lower altitudes. Due to its rapid altitude gain, it has a lower success rate and is strictly recommended for experienced trekkers who are well-acclimatized to high altitudes.",
    highlights: [
      "Most challenging and direct trail to the summit",
      "Quiet, low-traffic path offering quiet wilderness",
      "Spectacular, steep ridge hiking through rainforest and moorland",
      "Joins the Southern Circuit near Barranco Wall",
    ],
    bestFor: "Experienced high-altitude hikers seeking a physically demanding and quiet trek.",
    itinerarySummary: "Umbwe Gate → Umbwe Cave Camp → Barranco Camp → Karanga Camp → Barafu Camp → Uhuru Peak",
  },
  {
    id: "shira-route",
    name: "Shira Route",
    subtitle: "The High-Altitude Western Plateau Route",
    duration: "7 - 8 Days",
    difficulty: "Challenging",
    successRate: "85% - 88%",
    sceneryRating: "★★★★★",
    traffic: "Low",
    accommodation: "Tents",
    heroImage: "/photos/kilimanjaro/climbers-towards-kilimanjaro.jpg",
    description: "The Shira Route approaches Kilimanjaro from the west, starting at a high altitude at Shira Gate. It crosses the magnificent Shira Plateau before joining the Lemosho and Machame routes. Because the starting point is already at 3,600 meters, climbers must be careful with early acclimatization, making it a great option for those with prior altitude experience.",
    highlights: [
      "Starts at high altitude (3,600m) for immediate alpine views",
      "Traverses the vast and scenic Shira Plateau caldera",
      "Quiet and less travelled during the initial days",
      "Excellent scenery and path variation",
    ],
    bestFor: "Trekkers with prior high-altitude experience looking for a unique plateau trail.",
    itinerarySummary: "Shira Gate → Shira 1 Camp → Shira 2 Camp → Lava Tower → Barranco Camp → Barafu Camp → Uhuru Peak",
  }
];
