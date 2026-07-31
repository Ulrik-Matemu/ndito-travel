export interface ExperienceMonthActivity {
  month: string;
  shortMonth: string;
  rating: "High" | "Good" | "Fair";
  description: string;
}

export interface ExperienceHighlight {
  title: string;
  description: string;
  iconName: string; // Lucide icon identifier
}

export interface ExperienceTimelineStep {
  timeOrPhase: string;
  title: string;
  description: string;
}

export interface ExperienceFAQ {
  question: string;
  answer: string;
}

export interface ExperienceData {
  slug: string;
  title: string;
  subtitle: string;
  category: "Wildlife & Safari" | "Aerial & Adventure" | "Cultural Exchange" | "Primate Trekking" | "Island & Cultural";
  heroImage: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  quickFacts: {
    duration: string;
    location: string;
    bestMonths: string;
    difficulty: string;
  };
  overview: {
    heading: string;
    paragraphs: string[];
  };
  highlights: ExperienceHighlight[];
  seasonality: ExperienceMonthActivity[];
  whatToExpect: ExperienceTimelineStep[];
  proTips: string[];
  faqs: ExperienceFAQ[];
  relatedDestinations: { slug: string; name: string }[];
  relatedItineraries: { slug: string; name: string }[];
}

export const experiencesData: Record<string, ExperienceData> = {
  "big-five-game-drives": {
    slug: "big-five-game-drives",
    title: "Big Five Game Drives",
    subtitle: "Tracking Lion, Leopard, Elephant, Rhino, & Buffalo in Tanzania's Premier Wilderness",
    category: "Wildlife & Safari",
    heroImage: "/photos/serengeti-lion.webp",
    seoTitle: "Tanzania Big Five Game Drives & Safaris | Ndito Travel",
    seoDescription: "Experience iconic Big Five game drives in Serengeti, Ngorongoro Crater, & Tarangire with native Tanzanian guides. Custom 4x4 land cruisers & expert tracking.",
    keywords: [
      "Big Five Tanzania",
      "Big Five safari game drives",
      "Serengeti lion game drive",
      "Ngorongoro black rhino safari",
      "Tanzania wildlife safari drive",
      "Ndito Travel Big Five",
    ],
    quickFacts: {
      duration: "Full Day / Multi-Day",
      location: "Serengeti, Ngorongoro Crater, Tarangire & Manyara",
      bestMonths: "Year-Round (Best: June - Oct & Jan - Feb)",
      difficulty: "Easy / Accessible",
    },
    overview: {
      heading: "Encounter Africa’s Most Famous Wildlife in Their Pristine Native Habitat",
      paragraphs: [
        "The term 'Big Five'—originally coined by big-game hunters to describe Africa’s five most formidable species—now represents the pinnacle of wildlife conservation and luxury eco-safaris. Tanzania is one of the few places on Earth where all five species (lion, African leopard, bush elephant, black rhinoceros, and Cape buffalo) still roam freely in vast, unfenced ecosystems.",
        "With Ndito Travel's native guides, game drives are far more than passive sightseeing. Operating custom-modified 4x4 Land Cruisers equipped with pop-up roofs, high-performance binoculars, and onboard VHF radios, our expert tracking team positions you in prime locations during optimal lighting hours.",
        "From watching pride dynamics on Serengeti granite kopjes to spotting rare, critically endangered black rhinos on the volcanic floor of the Ngorongoro Crater, our Big Five game drives offer an intimate, respectful window into wild Africa."
      ],
    },
    highlights: [
      {
        title: "Ngorongoro Crater Rhino Tracking",
        description: "Explore the UNESCO-protected volcanic caldera, home to Tanzania's densest population of endangered black rhinos.",
        iconName: "ShieldCheck",
      },
      {
        title: "Serengeti Apex Predators",
        description: "Observe lions stalking game across vast savannas and elusive leopards resting in acacia trees with fresh prey.",
        iconName: "Compass",
      },
      {
        title: "Tarangire Giant Elephant Herds",
        description: "Drive amidst mega-herds of up to 300 African elephants congregating beneath ancient baobab trees.",
        iconName: "Trees",
      },
      {
        title: "Customized 4x4 Safari Comfort",
        description: "Travel in high-suspension 4x4 vehicles with guaranteed window seating, charging ports, and refrigerated drinks.",
        iconName: "Car",
      },
    ],
    seasonality: [
      { month: "January", shortMonth: "Jan", rating: "High", description: "Southern Serengeti calving season; intense predator action." },
      { month: "February", shortMonth: "Feb", rating: "High", description: "Thousands of wildebeest calves born daily; high lion & cheetah presence." },
      { month: "March", shortMonth: "Mar", rating: "Good", description: "Lush green scenery; great birding & resident wildlife herds." },
      { month: "April", shortMonth: "Apr", rating: "Fair", description: "Long rains peak; low tourist density & beautiful photography light." },
      { month: "May", shortMonth: "May", rating: "Good", description: "Rains taper off; herds begin migrating northwest toward Western Corridor." },
      { month: "June", shortMonth: "Jun", rating: "High", description: "Dry season starts; wildlife concentrates around riverbanks & waterholes." },
      { month: "July", shortMonth: "Jul", rating: "High", description: "Grumeti river crossings & excellent Big Five sightings across Serengeti." },
      { month: "August", shortMonth: "Aug", rating: "High", description: "Mara River crossings peak; top lion & crocodile interactions." },
      { month: "September", shortMonth: "Sep", rating: "High", description: "Dry conditions; outstanding elephant herds in Tarangire & clear skies." },
      { month: "October", shortMonth: "Oct", rating: "High", description: "Prime dry season game drives; high concentration at water sources." },
      { month: "November", shortMonth: "Nov", rating: "Good", description: "Short rains begin; fresh grass returns and herds travel south." },
      { month: "December", shortMonth: "Dec", rating: "High", description: "Holiday season; vibrant wildlife activity across all northern circuit parks." },
    ],
    whatToExpect: [
      {
        timeOrPhase: "06:00 AM - Dawn Departure",
        title: "Early Morning Predators",
        description: "Set off at first light when big cats are most active. Watch lions hunting before the heat of the day sets in.",
      },
      {
        timeOrPhase: "10:30 AM - Riverbanks & Kopjes",
        title: "Tree-Leopards & Elephant Herds",
        description: "Navigate river loops to search tree canopies for resting leopards and track elephant families quenching their thirst.",
      },
      {
        timeOrPhase: "01:00 PM - Bush Lunch",
        title: "Scenic Wilderness Picnic",
        description: "Enjoy a hot or freshly packed lunch at a designated safe picnic site overlooking animal-rich plains.",
      },
      {
        timeOrPhase: "03:30 PM - Afternoon Tracking",
        title: "Crater Floor or Open Savanna",
        description: "Focus on rare species like the black rhino or large buffalo herds under warm golden hour light.",
      },
    ],
    proTips: [
      "Bring a telephoto lens (300mm+) for crisp wildlife action photography without disturbing animal behavior.",
      "Dress in neutral earth tones (khaki, beige, olive green); avoid dark blue/black which can attract tsetse flies.",
      "Stay hydrated and bring sun protection (hat, polarized sunglasses, mineral sunscreen).",
      "Always listen to your guide's safety instructions—never stand outside the vehicle unless at designated picnic areas."
    ],
    faqs: [
      {
        question: "Can I see all Big Five animals in a single day?",
        answer: "While seeing all five in one day is rare, Ngorongoro Crater offers your highest statistical chance of spotting lions, rhinos, elephants, and buffaloes in a single morning, with leopards occasionally seen along the crater rim forest.",
      },
      {
        question: "Are child seats and family-friendly options available?",
        answer: "Yes! Ndito Travel provides private 4x4 vehicles fitted with safety belts, child seats upon request, and customizable drive schedules tailored to families.",
      },
      {
        question: "What makes Ndito Travel game drives different?",
        answer: "Our guides are native Tanzanians with decades of tracking experience, deep knowledge of animal behavior, and a commitment to strict ethical wildlife distance guidelines.",
      },
    ],
    relatedDestinations: [
      { slug: "serengeti-national-park", name: "Serengeti National Park" },
      { slug: "ngorongoro-crater", name: "Ngorongoro Crater" },
      { slug: "tarangire-national-park", name: "Tarangire National Park" },
    ],
    relatedItineraries: [
      { slug: "7-day-serengeti-ngorongoro-migration-safari", name: "7-Day Serengeti & Ngorongoro Migration Safari" },
      { slug: "5-day-essential-tanzania-safari", name: "5-Day Essential Tanzania Safari" },
    ],
  },

  "hot-air-balloon-safaris": {
    slug: "hot-air-balloon-safaris",
    title: "Hot Air Balloon Safaris",
    subtitle: "Float Above the Serengeti & Tarangire Savanna at Sunrise with Bush Champagne Breakfast",
    category: "Aerial & Adventure",
    heroImage: "/photos/hot-air-balloon-safari.webp",
    seoTitle: "Serengeti Hot Air Balloon Safari | Flight & Champagne Breakfast | Ndito Travel",
    seoDescription: "Book an extraordinary hot air balloon safari over the Serengeti or Tarangire. Sunrise flight over wildlife, bush champagne breakfast, and certified pilots.",
    keywords: [
      "Serengeti hot air balloon safari",
      "Tanzania balloon ride price",
      "Sunrise balloon safari Serengeti",
      "Tarangire balloon safari",
      "Bush champagne breakfast Tanzania",
      "Ndito Travel balloon safari",
    ],
    quickFacts: {
      duration: "approx. 4-5 Hours (1 Hr Flight)",
      location: "Serengeti National Park & Tarangire",
      bestMonths: "Year-Round (Weather Permitting)",
      difficulty: "Easy / Luxurious",
    },
    overview: {
      heading: "A Bird’s-Eye View of Africa’s Endless Plains",
      paragraphs: [
        "Gliding silently above the vast wilderness of the Serengeti or Tarangire at dawn is one of the world's most breathtaking travel experiences. As the first rays of sunlight illuminate the golden grasses, herds of wildebeest, zebras, and gazelles move across the plains beneath your basket.",
        "Your journey begins in the early morning darkness with a short transfer to the launch site. As the massive balloon inflates with roaring burners, you'll board with your certified commercial pilot and gently lift off just as dawn breaks.",
        "After an unforgettable one-hour flight taking in panoramic vistas of rivers, acacia forests, and game herds, you land in the open bush to celebrate with a traditional champagne toast followed by a hot multi-course English breakfast served under the shade of an acacia tree."
      ],
    },
    highlights: [
      {
        title: "Sunrise Flight over Savannah",
        description: "Watch the sun rise over the African horizon from 1,000 feet above ground level.",
        iconName: "Sun",
      },
      {
        title: "Silent Aerial Wildlife Tracking",
        description: "Fly low over river courses and treetops to observe hippos, giraffes, and wildebeest herds undisturbed.",
        iconName: "Feather",
      },
      {
        title: "Champagne Bush Celebration",
        description: "Celebrate landing with fine champagne, fresh tropical fruits, and a hot cooked breakfast on fine china in the wild.",
        iconName: "Utensils",
      },
      {
        title: "Official Flight Certificate",
        description: "Receive a personalized hot air balloon flight certificate signed by your captain upon landing.",
        iconName: "Award",
      },
    ],
    seasonality: [
      { month: "January", shortMonth: "Jan", rating: "High", description: "Calving season in Southern Serengeti; epic aerial views of newborn herds." },
      { month: "February", shortMonth: "Feb", rating: "High", description: "Clear skies and massive herd concentrations across Ndutu plains." },
      { month: "March", shortMonth: "Mar", rating: "Good", description: "Dramatic sky contrast; green landscapes and good flight conditions." },
      { month: "April", shortMonth: "Apr", rating: "Fair", description: "Occasional rain delays; early mornings usually remain calm and flyable." },
      { month: "May", shortMonth: "May", rating: "Good", description: "Migrating herds moving through Central & Western Serengeti corridors." },
      { month: "June", shortMonth: "Jun", rating: "High", description: "Dry season begins; crisp morning air and steady winds." },
      { month: "July", shortMonth: "Jul", rating: "High", description: "Spectacular aerial tracking of northern migration movement." },
      { month: "August", shortMonth: "Aug", rating: "High", description: "Pristine weather conditions and high wildlife visibility." },
      { month: "September", shortMonth: "Sep", rating: "High", description: "Clear horizons; excellent ballooning in Central Serengeti & Tarangire." },
      { month: "October", shortMonth: "Oct", rating: "High", description: "Golden sunrise light and great flying conditions before short rains." },
      { month: "November", shortMonth: "Nov", rating: "Good", description: "Passing rain showers create stunning rainbow cloud formations at dawn." },
      { month: "December", shortMonth: "Dec", rating: "High", description: "Holiday flying peak; clear crisp dawns across northern parks." },
    ],
    whatToExpect: [
      {
        timeOrPhase: "05:00 AM - Hotel Pickup",
        title: "Dawn Transfer to Launch Site",
        description: "Your guide picks you up from your lodge or camp for a night drive to the launch field.",
      },
      {
        timeOrPhase: "06:00 AM - Pilot Briefing & Takeoff",
        title: "Inflation & Gentle Ascent",
        description: "Watch crew inflate the balloon, receive safety instructions, and lift off as the horizon glows orange.",
      },
      {
        timeOrPhase: "06:15 AM - 07:15 AM - Air Flight",
        title: "1-Hour Aerial Safari",
        description: "Float at varying altitudes—skimming tree canopy level and climbing up for panoramic 360-degree views.",
      },
      {
        timeOrPhase: "07:30 AM - Bush Breakfast",
        title: "Champagne Toast & Feast",
        description: "Land safely in the wilderness, toast with champagne, and sit down to a full silver-service breakfast.",
      },
    ],
    proTips: [
      "Dress in layers: dawn at launch sites can be chilly (around 12-15°C / 55-60°F), but heats up rapidly after sunrise.",
      "Wear closed-toe sturdy shoes for boarding and landing in brush.",
      "Secure camera straps around your neck; loose items cannot be retrieved if dropped from the basket.",
      "Book well in advance as balloon basket slots are strictly limited per day to protect airspace and park environment."
    ],
    faqs: [
      {
        question: "Is hot air ballooning safe in Tanzania?",
        answer: "Extremely safe. All balloon operators in Tanzania use commercial pilots certified by international aviation authorities, state-of-the-art balloon equipment, and strict daily weather checks before takeoff.",
      },
      {
        question: "What happens if weather cancels my flight?",
        answer: "Safety is always the top priority. If a flight is cancelled due to high winds or heavy rain, you will be offered a full refund or rebooked for the following morning.",
      },
      {
        question: "Is the balloon safari suitable for children?",
        answer: "Children aged 7 years and older are welcome aboard as long as they meet the height requirement to see comfortably over the rim of the basket (typically 1.2m or 4 feet tall).",
      },
    ],
    relatedDestinations: [
      { slug: "serengeti-national-park", name: "Serengeti National Park" },
      { slug: "tarangire-national-park", name: "Tarangire National Park" },
    ],
    relatedItineraries: [
      { slug: "7-day-serengeti-ngorongoro-migration-safari", name: "7-Day Serengeti & Ngorongoro Migration Safari" },
    ],
  },

  "maasai-cultural-tours": {
    slug: "maasai-cultural-tours",
    title: "Maasai Cultural Tours",
    subtitle: "Authentic Heritage, Traditional Dancing, & Medicinal Bush Walks with Indigenous Guardians",
    category: "Cultural Exchange",
    heroImage: "/photos/arusha-2-maasai-ndito1920x1280.webp",
    seoTitle: "Authentic Maasai Cultural Tours & Boma Visit Tanzania | Ndito Travel",
    seoDescription: "Experience an authentic Maasai boma visit in Tanzania. Learn ancient bush survival, traditional Adumu jumping dance, beadwork, and indigenous culture with native hosts.",
    keywords: [
      "Maasai cultural tour Tanzania",
      "Maasai boma visit Arusha",
      "Adumu Maasai jumping dance",
      "Tanzania cultural village tour",
      "Ethical Maasai tribe experience",
      "Ndito Travel Maasai tour",
    ],
    quickFacts: {
      duration: "Half-Day / Full-Day / Overnight",
      location: "Ngorongoro Highlands, Longido & Monduli",
      bestMonths: "Year-Round",
      difficulty: "Easy Walking",
    },
    overview: {
      heading: "Immerse Yourself in the Living Heritage of East Africa’s Iconic Pastoralists",
      paragraphs: [
        "The Maasai people are renowned worldwide for their preserved ancient customs, vibrant red shúkà garments, intricate beadwork, and deep connection with East Africa’s wilderness. Ndito Travel facilitates respectful, ethical cultural encounters with authentic Maasai communities in the Ngorongoro Highlands and Arusha countryside.",
        "Unlike commercialized side-road shows, our partner villages invite travelers into genuine Bomas (traditional homesteads built from acacia branches and mud) to foster meaningful cross-cultural dialogue. You are welcomed with traditional songs and the iconic Adumu jumping dance.",
        "Guided by Maasai elders and young warriors (Morans), you’ll walk through natural bush medicine trails, learn about pastoral cattle rearing, observe hand-crafted beadwork, and gain insight into how modern Maasai balance ancient traditions with contemporary conservation."
      ],
    },
    highlights: [
      {
        title: "Traditional Welcoming Dance (Adumu)",
        description: "Join Maasai warriors and women in high-energy welcoming chants and traditional vertical jumping dances.",
        iconName: "Music",
      },
      {
        title: "Guided Bush Medicine Walk",
        description: "Walk with elders to discover native plants, barks, and roots used for centuries in traditional healing.",
        iconName: "HeartPulse",
      },
      {
        title: "Inside the Traditional Boma",
        description: "Step inside an authentic mud-and-acacia dwelling to learn about family life, cooking, and storytelling.",
        iconName: "Home",
      },
      {
        title: "Ethical Artisan Beadwork",
        description: "Support local women artisans directly by viewing handcrafted jewelry and purchasing authentic beadcraft.",
        iconName: "Sparkles",
      },
    ],
    seasonality: [
      { month: "January", shortMonth: "Jan", rating: "High", description: "Warm dry days; great walking conditions across village trails." },
      { month: "February", shortMonth: "Feb", rating: "High", description: "Ideal weather for village visits and outdoor medicinal plant walks." },
      { month: "March", shortMonth: "Mar", rating: "Good", description: "Lush green landscapes surrounding Ngorongoro highland bomas." },
      { month: "April", shortMonth: "Apr", rating: "Good", description: "Rains make countryside scenic; visits remain accessible with 4x4s." },
      { month: "May", shortMonth: "May", rating: "Good", description: "Cool breezes and vibrant green pastures around Maasai cattle grazing lands." },
      { month: "June", shortMonth: "Jun", rating: "High", description: "Pleasant temperatures for walking tours and cultural exchanges." },
      { month: "July", shortMonth: "Jul", rating: "High", description: "Clear weather; traditional seasonal ceremonies often take place." },
      { month: "August", shortMonth: "Aug", rating: "High", description: "Excellent weather for full-day village immersions and bush walks." },
      { month: "September", shortMonth: "Sep", rating: "High", description: "Warm sunny days; perfect photography conditions in red dust landscapes." },
      { month: "October", shortMonth: "Oct", rating: "High", description: "Dry season peak; great opportunity to observe cattle watering routines." },
      { month: "November", shortMonth: "Nov", rating: "Good", description: "Short rains bring fresh greenery back to tribal territories." },
      { month: "December", shortMonth: "Dec", rating: "High", description: "Festive period; vibrant community gatherings and warm hospitality." },
    ],
    whatToExpect: [
      {
        timeOrPhase: "Arrival & Greeting",
        title: "Song & Adumu Welcome",
        description: "Arrive at the village gate where community members greet you with traditional songs and invitation dances.",
      },
      {
        timeOrPhase: "Boma Exploration",
        title: "Homestead & Family Life",
        description: "Tour the circular enclosure, enter an Inkajijik hut, and chat with elders about family lineage and traditions.",
      },
      {
        timeOrPhase: "Bush Medicine Walk",
        title: "Ethnobotany & Fire Making",
        description: "Trek into surrounding bushland to see natural fire-starting techniques using wild sticks and medicinal flora.",
      },
      {
        timeOrPhase: "Artisan Crafts & Farewell",
        title: "Handmade Beadwork Exchange",
        description: "Learn the symbolic meanings of color in Maasai beadwork and support community craft cooperatives.",
      },
    ],
    proTips: [
      "Always ask permission before photographing individual villagers, especially children and elders.",
      "Dress respectfully with shoulders and knees covered.",
      "Bring small cash denominations in Tanzanian Shillings (TZS) to purchase beadwork directly from artisan women.",
      "Be open to asking questions; Maasai elders love sharing story heritage with curious visitors."
    ],
    faqs: [
      {
        question: "Is this cultural tour ethical and community-focused?",
        answer: "Absolutely. Ndito Travel works directly with community village leaders. Entry fees and donations go straight into village funds for clean water, school supplies, and local healthcare.",
      },
      {
        question: "Can I bring gifts or supplies for the village children?",
        answer: "Yes! Useful gifts include exercise books, pens, solar lamps, and footballs. We recommend giving supplies to the school teacher or village head so they are distributed fairly.",
      },
      {
        question: "How long does a typical Maasai village visit take?",
        answer: "A standard visit lasts between 2 to 3 hours, but full-day excursions including extended medicinal bush walks or traditional meals are also available.",
      },
    ],
    relatedDestinations: [
      { slug: "ngorongoro-crater", name: "Ngorongoro Highlands" },
      { slug: "tarangire-national-park", name: "Tarangire & Manyara Region" },
    ],
    relatedItineraries: [
      { slug: "5-day-essential-tanzania-safari", name: "5-Day Essential Tanzania Safari" },
    ],
  },

  "chimpanzee-trekking": {
    slug: "chimpanzee-trekking",
    title: "Chimpanzee Trekking Expeditions",
    subtitle: "Tracking Wild Primates in the Remote Rainforests of Gombe Stream & Mahale Mountains",
    category: "Primate Trekking",
    heroImage: "/photos/Mahale_Mountains_National_Park_Chimp_44.webp",
    seoTitle: "Chimpanzee Trekking Gombe & Mahale Mountains Tanzania | Ndito Travel",
    seoDescription: "Trek wild chimpanzees in Mahale Mountains & Gombe Stream National Parks along Lake Tanganyika. Expert park rangers, pristine rainforests & crystal beach luxury.",
    keywords: [
      "Chimpanzee trekking Tanzania",
      "Mahale Mountains chimp trek",
      "Gombe Stream National Park safari",
      "Jane Goodall chimpanzee Tanzania",
      "Lake Tanganyika primate safari",
      "Ndito Travel chimp trekking",
    ],
    quickFacts: {
      duration: "3 - 5 Days Expeditions",
      location: "Mahale Mountains & Gombe Stream (Lake Tanganyika)",
      bestMonths: "June - October (Dry Season)",
      difficulty: "Moderate to Challenging Hiking",
    },
    overview: {
      heading: "Walk in the Footsteps of Jane Goodall in Africa’s Most Exclusive Wilderness",
      paragraphs: [
        "Hidden away along the sapphire shores of Lake Tanganyika in Western Tanzania lie Gombe Stream and Mahale Mountains National Parks—two of the world's most sanctuary-like primate habitats. Famous for Jane Goodall’s groundbreaking behavioral studies starting in 1960, these dense tropical rainforests house habituated wild chimpanzee communities.",
        "Reaching these remote parks is an adventure in itself, accessible primarily by boat across Lake Tanganyika or private charter flight. Once there, expert national park trackers lead you on foot into mahogany forests, following calls, cracked nuts, and fresh nests up mist-covered mountain slopes.",
        "Sitting quietly in the forest canopy as wild chimps groom, play, feed, and communicate just meters away is a deeply emotional, life-changing privilege. After trekking, relax on white sand lake beaches and swim in the crystal-clear waters of Lake Tanganyika."
      ],
    },
    highlights: [
      {
        title: "Face-to-Face Chimp Encounters",
        description: "Spend an unforgettable, closely regulated hour observing wild chimpanzee troops in their natural habitat.",
        iconName: "Eye",
      },
      {
        title: "Jane Goodall Research Legacy",
        description: "Explore Gombe Stream’s historic research sites and Kasekela chimp community territories.",
        iconName: "BookOpen",
      },
      {
        title: "Pristine Lake Tanganyika Beaches",
        description: "Unwind on secluded white-sand lake shores backed by lush jungle mountains.",
        iconName: "Waves",
      },
      {
        title: "Snorkeling & Dhow Sunset Cruises",
        description: "Snorkel in clear freshwater inhabited by hundreds of colorful endemic cichlid fish species.",
        iconName: "Compass",
      },
    ],
    seasonality: [
      { month: "January", shortMonth: "Jan", rating: "Good", description: "Lush green forest; chimps stay higher on mountain ridges." },
      { month: "February", shortMonth: "Feb", rating: "Good", description: "Warm temperatures; butterfly species peak in forest canopy." },
      { month: "March", shortMonth: "Mar", rating: "Fair", description: "Rainy season begins; trail trekking requires good mud gear." },
      { month: "April", shortMonth: "Apr", rating: "Fair", description: "Heavy rains; some remote camps close for seasonal maintenance." },
      { month: "May", shortMonth: "May", rating: "Good", description: "Forest dries out; chimps descend lower to feed on forest fruit trees." },
      { month: "June", shortMonth: "Jun", rating: "High", description: "Dry season starts; firm trails and high chimp trekking success." },
      { month: "July", shortMonth: "Jul", rating: "High", description: "Optimal month; chimps forage on lower slopes close to forest trails." },
      { month: "August", shortMonth: "Aug", rating: "High", description: "Pristine beach weather & outstanding chimp tracking conditions." },
      { month: "September", shortMonth: "Sep", rating: "High", description: "Peak dry season; crystal waters in Lake Tanganyika & clear hiking trails." },
      { month: "October", shortMonth: "Oct", rating: "High", description: "Warm dry days; chimps assemble in large social groups near water sources." },
      { month: "November", shortMonth: "Nov", rating: "Good", description: "Short rains start; lush forest foliage returns." },
      { month: "December", shortMonth: "Dec", rating: "Good", description: "Green jungle environment; chimps active throughout lower forest valleys." },
    ],
    whatToExpect: [
      {
        timeOrPhase: "07:30 AM - Forest Briefing",
        title: "Ranger Safety & Hygiene Check",
        description: "Meet park trackers for health protocols, mask fitting, and trail safety instructions.",
      },
      {
        timeOrPhase: "08:00 AM - Jungle Trekking",
        title: "Rainforest Tracking Hike",
        description: "Hike through vine-covered tropical forest listening for wild pant-hoots and tree rustles.",
      },
      {
        timeOrPhase: "Observation Hour",
        title: "60 Minutes with the Troop",
        description: "Spend 1 full hour watching chimps interact, nurse young, groom, and forage right in front of you.",
      },
      {
        timeOrPhase: "Afternoon Relaxation",
        title: "Lake Tanganyika Swim & Relax",
        description: "Return to lake camp for fresh seafood lunch, beach lounging, and sunset boat rides.",
      },
    ],
    proTips: [
      "Wear sturdy waterproof hiking boots with ankle support and long lightweight pants to protect against thorns and ants.",
      "Masks are mandatory during chimp sightings to prevent transmission of human respiratory illnesses to wild primates.",
      "Maintain a physical distance of at least 7–10 meters (23–33 feet) from chimpanzees at all times.",
      "Pack gardening gloves for gripping steep jungle vegetation during uphill mountain climbs."
    ],
    faqs: [
      {
        question: "How difficult is chimpanzee trekking in Mahale & Gombe?",
        answer: "Trekking difficulty ranges from moderate to strenuous depending on where the chimp troop moved that morning. Hikes can take anywhere from 45 minutes to 3-4 hours over uneven terrain.",
      },
      {
        question: "What is the minimum age for chimpanzee trekking?",
        answer: "In order to protect both visitors and primates, TANAPA rules require guests to be at least 15 years old to participate in wild chimpanzee trekking.",
      },
      {
        question: "How do I get to Mahale Mountains and Gombe Stream?",
        answer: "These remote Western Circuit parks are reached by light aircraft charter flights from Arusha/Kilimanjaro or Dar es Salaam to Kigoma/Mahale airstrip, followed by a scenic boat transfer across Lake Tanganyika.",
      },
    ],
    relatedDestinations: [
      { slug: "serengeti-national-park", name: "Western Circuit Connection" },
    ],
    relatedItineraries: [
      { slug: "7-day-serengeti-ngorongoro-migration-safari", name: "7-Day Safari Packages" },
    ],
  },

  "zanzibar-spice-tours": {
    slug: "zanzibar-spice-tours",
    title: "Zanzibar Spice Tours",
    subtitle: "A Sensory Journey Through Organic Farms, Tropical Botanical Gardens, & Stone Town Heritage",
    category: "Island & Cultural",
    heroImage: "/photos/Arab-Fort-Stone-Town-Zanzibar-Tanzania.jpg.webp",
    seoTitle: "Zanzibar Organic Spice Tour & Stone Town Excursion | Ndito Travel",
    seoDescription: "Discover why Zanzibar is known as the Spice Island. Guided organic spice farm tour, sensory tasting of cloves, vanilla, nutmeg, & Swahili lunch.",
    keywords: [
      "Zanzibar spice tour",
      "Organic spice farm Kizimbani",
      "Stone Town spice excursion",
      "Zanzibar cloves nutmeg vanilla",
      "Swahili spice cooking lunch",
      "Ndito Travel Zanzibar tour",
    ],
    quickFacts: {
      duration: "Half-Day (3-4 Hours)",
      location: "Kizimbani & Abeid Organic Spice Farms, Zanzibar",
      bestMonths: "Year-Round",
      difficulty: "Easy Walking",
    },
    overview: {
      heading: "Smell, Touch, and Taste the Flavors of the Historic Spice Island",
      paragraphs: [
        "For centuries, the archipelago of Zanzibar was the center of the global spice trade, enticing Omani merchants, Portuguese explorers, and British traders with aromatic treasures. Today, Zanzibar remains world-famous for producing premium organic cloves, cinnamon, nutmeg, cardamom, black pepper, and vanilla.",
        "Ndito Travel's Spice Tour takes you into lush rural plantations in the Kizimbani region. Led by passionate local botanists, you’ll walk through fragrant orchards where spices grow wild in their natural botanical form—far from supermarket jars.",
        "You’ll smell crushed cinnamon leaves, peel fresh nutmeg pods to reveal scarlet mace, crush aromatic lemongrass, and taste exotic tropical fruits like jackfruit, starfruit, and durian. The tour culminates in a traditional Swahili lunch cooked with spices harvested directly from the surrounding farm."
      ],
    },
    highlights: [
      {
        title: "Sensory Spice Discovery",
        description: "Touch, crush, smell, and taste fresh cinnamon bark, clove buds, green cardamom, and raw vanilla pods.",
        iconName: "Sparkles",
      },
      {
        title: "Coconut Tree Climbing Performance",
        description: "Watch local farm guides scale 20-meter palm trees singing traditional Swahili songs to harvest fresh coconut water.",
        iconName: "TreePalm",
      },
      {
        title: "Handcrafted Leaf Crowns & Accessories",
        description: "Receive custom palm-leaf crowns, rings, and ties hand-woven by local artists during your stroll.",
        iconName: "Gift",
      },
      {
        title: "Authentic Swahili Farm Lunch",
        description: "Savor coconut rice, spiced curry dishes, fresh fish, and farm-picked fruits served in an open garden pavilion.",
        iconName: "Utensils",
      },
    ],
    seasonality: [
      { month: "January", shortMonth: "Jan", rating: "High", description: "Warm beach weather; peak harvest for tropical fruits & cloves." },
      { month: "February", shortMonth: "Feb", rating: "High", description: "Sunny days; great farm strolls & spice tasting." },
      { month: "March", shortMonth: "Mar", rating: "Good", description: "Warm ocean breezes; tropical foliage in full bloom." },
      { month: "April", shortMonth: "Apr", rating: "Good", description: "Rainy season brings lush farm growth & rich aromas." },
      { month: "May", shortMonth: "May", rating: "Good", description: "Rains ease off; fresh green spice trees and calm plantation walks." },
      { month: "June", shortMonth: "Jun", rating: "High", description: "Dry season starts; ideal conditions for spice farm tours & Stone Town." },
      { month: "July", shortMonth: "Jul", rating: "High", description: "Pleasant island temperatures & vibrant market produce." },
      { month: "August", shortMonth: "Aug", rating: "High", description: "Pristine weather; perfect pairing of spice tour with ocean excursions." },
      { month: "September", shortMonth: "Sep", rating: "High", description: "Peak spice drying season; nutmeg and clove scents fill the air." },
      { month: "October", shortMonth: "Oct", rating: "High", description: "Sunny clear days across Zanzibar island plantations." },
      { month: "November", shortMonth: "Nov", rating: "Good", description: "Warm days with refreshing afternoon ocean showers." },
      { month: "December", shortMonth: "Dec", rating: "High", description: "Holiday island season; lively farm tours and fresh coconut refreshments." },
    ],
    whatToExpect: [
      {
        timeOrPhase: "09:00 AM - Hotel Pickup",
        title: "Transfer to Kizimbani Farms",
        description: "Enjoy a scenic drive from your Stone Town or beach resort to rural spice plantations.",
      },
      {
        timeOrPhase: "09:45 AM - Botanical Walk",
        title: "Smell & Taste Interactive Tour",
        description: "Follow your guide through shady groves to touch, scratch, and taste over 20 spices and tropical fruits.",
      },
      {
        timeOrPhase: "11:30 AM - Coconut & Crown Craft",
        title: "King Coconut & Palm Weaving",
        description: "Watch a high-climb coconut performance, drink fresh madafu water, and receive handmade palm jewelry.",
      },
      {
        timeOrPhase: "12:15 PM - Farm Feast",
        title: "Organic Swahili Spiced Lunch",
        description: "Dine on home-cooked Swahili spiced pilau rice, coconut sauce, and fresh tropical fruit platter.",
      },
    ],
    proTips: [
      "Wear comfortable walking shoes or sandals suitable for dirt farm paths.",
      "Bring small cash to buy freshly packed organic spices, essential oils, and vanilla pods directly from local farmers.",
      "Combine your spice tour with a morning tour of Stone Town or a afternoon visit to Prison Island to maximize your day.",
      "Inform your guide in advance if you have any food allergies prior to the Swahili farm lunch."
    ],
    faqs: [
      {
        question: "Can I buy organic spices to take home through customs?",
        answer: "Yes! All spices packaged at the official farms are dried, sealed, and labeled for international travel compliance.",
      },
      {
        question: "Is the Zanzibar Spice Tour family-friendly?",
        answer: "Very family-friendly! Children love the hands-on sensory experience of smelling leaves, receiving palm leaf crowns, and watching the coconut climber.",
      },
      {
        question: "Can I pair the spice tour with a beach resort transfer?",
        answer: "Yes! Ndito Travel frequently arranges spice tour stops en route between Stone Town hotels and northern beach resorts like Nungwi or Kendwa.",
      },
    ],
    relatedDestinations: [
      { slug: "nungwi-beach-zanzibar", name: "Nungwi & Paje Beaches" },
    ],
    relatedItineraries: [
      { slug: "5-day-essential-tanzania-safari", name: "Tanzania & Zanzibar Packages" },
    ],
  },
};
