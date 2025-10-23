// /data/destinations.ts
export const safariDestinations = [
    {
        slug: "serengeti-national-park",
        name: "Serengeti National Park",
        shortDescription: "Home to the Great Migration and endless plains.",
        description: `
      The Serengeti is one of Africa’s most iconic safari destinations,
      known for its vast savannahs, diverse wildlife, and annual wildebeest migration.
      It’s a UNESCO World Heritage Site offering one of the best wildlife viewing experiences on Earth.
    `,
        location: {
            lat: -2.3333,
            lng: 34.8333,
        },
        images: [
            "/photos/serengeti-the-great-migration.webp",
            "/photos/serengeti-lion.webp",
            "/photos/serengeti-gazelles.webp",
        ],
        seo: {
            title: "Serengeti National Park Safari | Ndito Travel Tanzania",
            description:
                "Explore the Serengeti National Park — witness the Great Migration, spot lions, and experience Tanzania’s wild beauty.",
            keywords: "Serengeti safari, Tanzania safaris, Great Migration, Serengeti tours",
        },
    },
    {
        slug: "ngorongoro-crater",
        name: "Ngorongoro Crater",
        shortDescription: "A breathtaking wildlife sanctuary within a collapsed volcano.",
        description: `
      The Ngorongoro Crater is a natural wonder and one of Africa’s most famous wildlife havens.
      The crater’s floor shelters over 25,000 animals including lions, elephants, and rhinos.
    `,
        location: {
            lat: -3.1616,
            lng: 35.5877,
        },
        images: [
            "/photos/ngorongoro-gate.webp",
            "/photos/ngorongoro.webp",
        ],
        seo: {
            title: "Ngorongoro Crater Safari | Ndito Travel Tanzania",
            description:
                "Discover the Ngorongoro Crater — the world's largest intact caldera and a haven for African wildlife.",
            keywords: "Ngorongoro Crater, Tanzania safari, Big Five, Ngorongoro tours",
        },
    },

    // --- ADDITIONAL DESTINATIONS ---

    {
        slug: "tarangire-national-park",
        name: "Tarangire National Park",
        shortDescription: "Famous for large elephant herds and baobab trees.",
        description: `
      Tarangire National Park offers spectacular scenery dotted with ancient baobabs.
      The park is home to huge elephant herds and diverse birdlife, making it a photographer’s dream.
    `,
        location: { lat: -3.983, lng: 36.066 },
        images: ["/photos/tarangire-national-park.webp", "/photos/tarangire-elephant.webp", "/photos/tarangire-lions.webp"],
        seo: {
            title: "Tarangire National Park Safari | Ndito Travel Tanzania",
            description:
                "Experience the land of giants — explore Tarangire National Park, known for elephants and iconic baobab trees.",
            keywords: "Tarangire safari, elephant safari, Tanzania wildlife, baobab trees",
        },
    },
    {
        slug: "lake-manyara-national-park",
        name: "Lake Manyara National Park",
        shortDescription: "Known for tree-climbing lions and pink flamingos.",
        description: `
      Lake Manyara is a lush paradise at the foot of the Rift Valley escarpment.
      It’s famous for its pink flamingos, hippos, and rare tree-climbing lions.
    `,
        location: { lat: -3.376, lng: 35.818 },
        images: ["/photos/Lake_Manyara_National_Park_Lake_View_27.webp", "/photos/Lake_Manyara_National_Park_Giraffes_24_Flamingoes.webp", "/photos/Lake_Manyara_National_Park_Baboons_29.webp"],
        seo: {
            title: "Lake Manyara National Park | Ndito Travel Tanzania",
            description:
                "Visit Lake Manyara National Park — home to tree-climbing lions, flamingos, and stunning Rift Valley scenery.",
            keywords: "Lake Manyara, flamingos, tree-climbing lions, Tanzania safari",
        },
    },
    {
        slug: "arusha-national-park",
        name: "Arusha National Park",
        shortDescription: "A scenic park beneath Mount Meru.",
        description: `
      Arusha National Park is small but incredibly diverse, featuring Mount Meru, lush forests,
      and alkaline Momella Lakes, home to giraffes, buffaloes, and flamingos.
    `,
        location: { lat: -3.25, lng: 36.75 },
        images: ["/photos/arusha-national-park.webp",
            "/photos/arusha-national-park-fig-tree.webp",
            "/photos/arusha-national-park-buffaloes.webp"
        ],
        seo: {
            title: "Arusha National Park | Ndito Travel Tanzania",
            description:
                "Discover Arusha National Park — scenic views, Mount Meru hikes, and tranquil lakes near Arusha city.",
            keywords: "Arusha National Park, Mount Meru, Tanzania safaris",
        },
    },
    {
        slug: "mount-kilimanjaro",
        name: "Mount Kilimanjaro",
        shortDescription: "Africa’s tallest mountain and a world-class hiking destination.",
        description: `
      Mount Kilimanjaro is the roof of Africa and a bucket-list challenge for adventurers.
      With snow-capped peaks and diverse ecosystems, it offers an unforgettable climbing experience.
    `,
        location: { lat: -3.067, lng: 37.355 },
        images: ["/photos/Mount_Kilimanjaro_Tanzania.webp", "/photos/Kilimanjaro_Climb_Rongai_Route_01.webp", "/photos/Mount_Kilimanjaro_the_Crater_01.webp"],
        seo: {
            title: "Mount Kilimanjaro Climb | Ndito Travel Tanzania",
            description:
                "Conquer Mount Kilimanjaro — Africa’s highest peak, with breathtaking routes and stunning alpine views.",
            keywords: "Mount Kilimanjaro climb, Tanzania hiking, Kilimanjaro trekking",
        },
    },
    {
        slug: "zanzibar-stone-town",
        name: "Stone Town Zanzibar",
        shortDescription: "A historic coastal city rich in culture and architecture.",
        description: `
      Stone Town is a UNESCO World Heritage Site filled with ancient architecture,
      winding alleys, spice markets, and a fusion of African, Arab, and European influences.
    `,
        location: { lat: -6.162, lng: 39.191 },
        images: ["/photos/Aerial-wide-shot-of-Zanzibar-Island-Tanzania-1-1536x1025.webp", "/photos/Arab-Fort-Stone-Town-Zanzibar-Tanzania.webp.webp", "/photos/Embankment-with-guns-in-Zanzibars-Stone-Town-with-boats-on-the-ocean.webp.webp"],
        seo: {
            title: "Stone Town Zanzibar | Ndito Travel",
            description:
                "Explore Stone Town — Zanzibar’s historic heart filled with culture, spice markets, and stunning ocean views.",
            keywords: "Stone Town Zanzibar, Zanzibar culture, Zanzibar tours",
        },
    },
    {
        slug: "northern-zanzibar-beaches",
        name: "Nungwi & Kendwa Beaches",
        shortDescription: "Famous white sands and turquoise waters of northern Zanzibar.",
        description: `
      Nungwi and Kendwa are Zanzibar’s most famous beaches, perfect for swimming,
      snorkeling, and sunset views over the Indian Ocean.
    `,
        location: { lat: -5.726, lng: 39.295 },
        images: ["/photos/kendwa-beach-zanzibar-1536x1025.webp.webp", "/photos/Nungwi_beach_header-992.webp"],
        seo: {
            title: "Nungwi & Kendwa Zanzibar | Ndito Travel",
            description:
                "Relax on Nungwi and Kendwa — Zanzibar’s top beaches for turquoise water and vibrant sunsets.",
            keywords: "Zanzibar beaches, Nungwi beach, Kendwa Zanzibar, beach holiday",
        },
    },
    {
        slug: "selous-game-reserve",
        name: "Selous Game Reserve (Nyerere National Park)",
        shortDescription: "Africa’s largest wildlife reserve with untamed beauty.",
        description: `
      Nyerere National Park (formerly Selous) is one of Africa’s wildest and most remote reserves,
      offering boat safaris on the Rufiji River and thrilling game drives.
    `,
        location: { lat: -7.85, lng: 37.95 },
        images: ["/photos/herd-of-elephants-and-water-selous-1536x864.webp", "/photos/selous_08-scaled-1350x899.webp", "/photos/Giraffes-in-Selous-1.webp"],
        seo: {
            title: "Nyerere National Park Safari | Ndito Travel Tanzania",
            description:
                "Explore Nyerere (Selous) — Africa’s largest protected area with wild rivers and abundant wildlife.",
            keywords: "Selous Game Reserve, Nyerere National Park, Tanzania safari",
        },
    },
    {
        slug: "mikumi-national-park",
        name: "Mikumi National Park",
        shortDescription: "A hidden gem close to Dar es Salaam.",
        description: `
      Mikumi National Park offers an easy safari escape from Dar es Salaam,
      with open grasslands resembling the Serengeti and sightings of lions, giraffes, and elephants.
    `,
        location: { lat: -7.0, lng: 37.0 },
        images: ["/photos/Mikumi_National_Park_Zebras_111.webp", "/photos/Mikumi_National_Park_Hippos_101.webp", "/photos/Mikumi_National_Park_Gate_112.webp"],
        seo: {
            title: "Mikumi National Park Safari | Ndito Travel Tanzania",
            description:
                "Discover Mikumi National Park — a convenient, scenic safari near Dar es Salaam with rich wildlife.",
            keywords: "Mikumi safari, Tanzania national parks, Dar es Salaam tours",
        },
    },
    {
        slug: "ruaha-national-park",
        name: "Ruaha National Park",
        shortDescription: "Tanzania’s largest national park, wild and remote.",
        description: `
      Ruaha National Park is a remote wilderness with vast landscapes, predators, and huge elephant herds.
      It’s a top destination for adventurous safari-goers seeking authentic experiences.
    `,
        location: { lat: -7.5, lng: 35.0 },
        images: ["/photos/Ruaha_National_Park_Tanzania.webp", "/photos/Ruaha_National_Park_Baobab_Landscape_10.webp", "/photos/Ruaha_National_Park_Elephants_49.webp"],
        seo: {
            title: "Ruaha National Park Safari | Ndito Travel Tanzania",
            description:
                "Experience the wild Ruaha — Tanzania’s largest park with raw beauty, big cats, and epic landscapes.",
            keywords: "Ruaha safari, Tanzania wildlife, offbeat safaris",
        },
    },
    {
        slug: "mahale-mountains-national-park",
        name: "Mahale Mountains National Park",
        shortDescription: "Home to wild chimpanzees on the shores of Lake Tanganyika.",
        description: `
      Mahale is one of the most remote and beautiful parks in Africa.
      It offers rare opportunities to trek chimpanzees amid forested mountains and pristine beaches.
    `,
        location: { lat: -6.2, lng: 29.8 },
        images: ["/photos/Mahale_Mountain_National_Park.webp", "/photos/Mahale_Mountains_National_Park_Chimp_44.webp", "/photos/Mahale_Mountains_National_Park_x_45.webp"],
        seo: {
            title: "Mahale Mountains National Park | Ndito Travel Tanzania",
            description:
                "Trek wild chimpanzees in Mahale — a hidden paradise on Lake Tanganyika’s shores.",
            keywords: "Mahale Mountains, chimpanzee trekking, Tanzania adventure",
        },
    },
    {
        slug: "gombe-stream-national-park",
        name: "Gombe Stream National Park",
        shortDescription: "Jane Goodall’s legendary chimpanzee research site.",
        description: `
      Gombe Stream is famous for its chimpanzees and scenic hills overlooking Lake Tanganyika.
      Visitors can enjoy intimate wildlife encounters and forest walks.
    `,
        location: { lat: -4.65, lng: 29.63 },
        images: ["/photos/Gombe-Stream-National-park-Jane-Goodall-and-Chimpanzees.webp", "/photos/Gombe_Stream_National_Park_Entrance_34.webp", "/photos/Gombe_Stream_National_Park_Lake_Tanganyika_Shore)line_45.webp"],
        seo: {
            title: "Gombe Stream National Park | Ndito Travel Tanzania",
            description:
                "Walk in the footsteps of Jane Goodall — explore Gombe Stream and meet wild chimpanzees.",
            keywords: "Gombe Stream, chimpanzees, Jane Goodall, Tanzania parks",
        },
    },
    {
        slug: "saadani-national-park",
        name: "Saadani National Park",
        shortDescription: "Where the bush meets the beach.",
        description: `
      Saadani is Tanzania’s only coastal national park — a rare blend of beach and wildlife safaris.
      Lions roam near the shore, and dolphins can be seen offshore.
    `,
        location: { lat: -6.45, lng: 38.75 },
        images: ["/photos/Saadani_National_Park_Wami_River_40.webp", "/photos/Saadani_National_Park_Giraffe_30.webp", "/photos/Saadani_National_Park_Crocodile_33.webp"],
        seo: {
            title: "Saadani National Park | Ndito Travel Tanzania",
            description:
                "Experience Saadani — Tanzania’s only park on the ocean, combining beach and bush safaris.",
            keywords: "Saadani safari, beach and bush Tanzania, coastal safari",
        },
    },
    {
        slug: "pemba-island",
        name: "Pemba Island",
        shortDescription: "Zanzibar’s untouched sister island, perfect for diving.",
        description: `
      Pemba Island offers tranquility, lush forests, and world-class diving reefs.
      It’s an unspoiled paradise away from the crowds.
    `,
        location: { lat: -5.133, lng: 39.733 },
        images: ["/photos/pemba-island.webp", "/photos/The-Manta-Resort-Zanzibar-underwater-room-aerial-2.webp", "/photos/pemba-island-underwater-room.webp"],
        seo: {
            title: "Pemba Island Tanzania | Ndito Travel",
            description:
                "Escape to Pemba Island — Zanzibar’s hidden gem for diving, nature, and peace.",
            keywords: "Pemba Island, Zanzibar islands, diving Tanzania",
        },
    },
    {
        slug: "mnemba-atoll",
        name: "Mnemba Atoll",
        shortDescription: "Zanzibar’s best snorkeling and diving spot.",
        description: `
      Mnemba Atoll is a marine conservation area with crystal-clear waters and colorful coral reefs.
      Ideal for snorkeling, diving, and dolphin watching.
    `,
        location: { lat: -5.761, lng: 39.393 },
        images: ["/photos/and-beyond-mnemba-island-4.webp", "/photos/Maldives-diving-mnemba.webp", "/photos/mnemba-snorkling.webp"],
        seo: {
            title: "Mnemba Atoll Zanzibar | Ndito Travel",
            description:
                "Discover Mnemba Atoll — Zanzibar’s premier marine park for snorkeling and underwater adventures.",
            keywords: "Mnemba Atoll, Zanzibar snorkeling, diving Zanzibar",
        },
    },
    {
        slug: "jambiani-beach",
        name: "Jambiani Beach",
        shortDescription: "A tranquil village with authentic Zanzibari charm.",
        description: `
      Jambiani offers peace and local life along the white beaches of southeast Zanzibar,
      ideal for relaxation and cultural immersion.
    `,
        location: { lat: -6.323, lng: 39.542 },
        images: ["/photos/jambiani-zanzibar9-min-1024x682.webp", "/photos/jambiani-zanzibar-min.webp", "/photos/jambiani-boat.webp"],
        seo: {
            title: "Jambiani Beach Zanzibar | Ndito Travel",
            description:
                "Unwind in Jambiani — a serene coastal village with turquoise waters and warm hospitality.",
            keywords: "Jambiani Zanzibar, beach holiday, Zanzibar culture",
        },
    },
    {
        slug: "paje-beach",
        name: "Paje Beach",
        shortDescription: "Zanzibar’s hub for kite surfing and beach life.",
        description: `
      Paje Beach is a lively stretch famous for kite surfing, beach bars, and clear waters.
      Perfect for adventure and relaxation alike.
    `,
        location: { lat: -6.273, lng: 39.532 },
        images: ["/photos/Aerial-view-of-Paje-Beach-Zanzibar-Easy-Travel-Tanzania-scaled-2-1536x863.webp", "/photos/paje-beach.webp", "/photos/Paje_beach_header-992.webp"],
        seo: {
            title: "Paje Beach Zanzibar | Ndito Travel",
            description:
                "Enjoy kite surfing and beach fun at Paje — Zanzibar’s adventure-filled paradise.",
            keywords: "Paje Zanzibar, kite surfing, Zanzibar beaches",
        },
    },
    {
        slug: "mikindani",
        name: "Mikindani",
        shortDescription: "Historic Swahili town near Mtwara with cultural heritage.",
        description: `
      Mikindani is a charming coastal town with a rich history of trade and exploration,
      offering cultural tours and serene sea views.
    `,
        location: { lat: -10.283, lng: 40.1 },
        images: ["/photos/Mikindani-960x605-2.webp", "/photos/mikindani.", "/photos/Mikindani-960x604-1.webp"],
        seo: {
            title: "Mikindani Tanzania | Ndito Travel",
            description:
                "Explore Mikindani — a historic Swahili port town with timeless charm on Tanzania’s southern coast.",
            keywords: "Mikindani Tanzania, Swahili coast, historical tours",
        },
    },
    {
        slug: "bagamoyo",
        name: "Bagamoyo",
        shortDescription: "Historic port town and UNESCO World Heritage candidate.",
        description: `
      Bagamoyo was once a center of trade and missionary work on the Swahili Coast.
      Today, it’s a quiet coastal town filled with history and art.
    `,
        location: { lat: -6.442, lng: 38.9 },
        images: ["/photos/German_Old_Boma_Bagamoyo_03.webp", "/photos/Caravan_Serai_Museum_Bagamoyo_02.webp", "/photos/Bagamoyo_Port_01.webp"],
        seo: {
            title: "Bagamoyo Tanzania | Ndito Travel",
            description:
                "Step back in time in Bagamoyo — Tanzania’s historic coastal town of art and culture.",
            keywords: "Bagamoyo, Swahili coast, Tanzania history",
        },
    },
    {
        slug: "udzungwa-mountains",
        name: "Udzungwa Mountains National Park",
        shortDescription: "The ‘Galápagos of Africa’ for hiking and waterfalls.",
        description: `
      Udzungwa is a lush mountain park known for endemic species, hiking trails,
      and the breathtaking Sanje Waterfalls.
    `,
        location: { lat: -7.8, lng: 36.85 },
        images: ["/photos/Udzungwa_National_Park_Sanje_Waterfalls_21.webp", "/photos/Udzungwa_National_Park_Sonjo__Natural_Pool_28.webp", "/photos/Udzungwa_National_Park_Udzungwa_Red_Colobus_17.webp"],
        seo: {
            title: "Udzungwa Mountains National Park | Ndito Travel Tanzania",
            description:
                "Hike through Udzungwa Mountains — Tanzania’s green heart filled with waterfalls and wildlife.",
            keywords: "Udzungwa Mountains, hiking Tanzania, waterfalls Tanzania",
        },
    },
    {
        slug: "mkomazi-national-park",
        name: "Mkomazi National Park",
        shortDescription: "A semi-arid wilderness with rhinos and rare species.",
        description: `
      Mkomazi borders Kenya’s Tsavo National Park and is home to endangered black rhinos and African wild dogs.
    `,
        location: { lat: -4.0, lng: 38.0 },
        images: ["/photos/Mkomazi_National_Park_Dindera_Dam_40.webp", "/photos/Mkomazi_National_Park_Rhinos_59.webp", "/photos/Mkomazi_National_Park_Elephants_27.webp"],
        seo: {
            title: "Mkomazi National Park | Ndito Travel Tanzania",
            description:
                "Visit Mkomazi — a hidden gem where rhinos roam and wild dogs thrive in northern Tanzania.",
            keywords: "Mkomazi safari, black rhino Tanzania, northern parks",
        },
    },
    {
        slug: "lake-eyasi",
        name: "Lake Eyasi",
        shortDescription: "Cultural tours with Hadzabe and Datoga tribes.",
        description: `
      Lake Eyasi offers a unique cultural experience with the indigenous Hadzabe hunter-gatherers and Datoga blacksmiths.
    `,
        location: { lat: -3.45, lng: 35.37 },
        images: ["/photos/Lake_Eyasi_x_29.webp", "/photos/Lake_Eyasi_x_23.webp", "/photos/Lake_Eyasi_x_21_750_550shar-50brig-20_c1.webp"],
        seo: {
            title: "Lake Eyasi Cultural Tour | Ndito Travel Tanzania",
            description:
                "Meet the Hadzabe and Datoga tribes at Lake Eyasi — an authentic cultural safari experience.",
            keywords: "Lake Eyasi, Hadzabe tribe, cultural tourism Tanzania",
        },
    },
    {
        slug: "lake-natron",
        name: "Lake Natron",
        shortDescription: "A flamingo haven at the foot of Ol Doinyo Lengai.",
        description: `
      Lake Natron is a surreal salt lake colored pink by algae, attracting thousands of flamingos.
      It lies beneath the active volcano Ol Doinyo Lengai.
    `,
        location: { lat: -2.5, lng: 36.0 },
        images: ["/photos/Lake_Natron_Flamingos_Sunset_28.webp", "/photos/Lake-Natron-Tanzania-2-webp.webp", "/photos/Streams_from_Oldoinyo_Lengai_03.webp"],
        seo: {
            title: "Lake Natron Tanzania | Ndito Travel",
            description:
                "Marvel at Lake Natron — Tanzania’s pink lake and flamingo breeding ground near Ol Doinyo Lengai.",
            keywords: "Lake Natron, flamingos Tanzania, Ol Doinyo Lengai",
        },
    },
    {
        slug: "mt-meru",
        name: "Mount Meru",
        shortDescription: "A scenic volcano hike near Arusha.",
        description: `
      Mount Meru offers a rewarding climb with views of Kilimanjaro and abundant wildlife along the route.
    `,
        location: { lat: -3.25, lng: 36.75 },
        images: ["/photos/Mount-meru.webp", "/photos/Arusha_National_Park_Mount_Meru_Trekking_10.webp", "/photos/Arusha_National_Park_Mount_Meru_Girrafe_11.webp"],
        seo: {
            title: "Mount Meru Trek | Ndito Travel Tanzania",
            description:
                "Climb Mount Meru — a thrilling volcano trek with panoramic views of Kilimanjaro.",
            keywords: "Mount Meru, Arusha hike, Tanzania trekking",
        },
    },
    {
        slug: "dodoma-wine-tours",
        name: "Dodoma Wine Region",
        shortDescription: "Explore Tanzania’s growing wine capital.",
        description: `
      Visit vineyards in Dodoma and enjoy wine tasting experiences surrounded by scenic countryside.
    `,
        location: { lat: -6.163, lng: 35.751 },
        images: ["/photos/dodoma-wine-regions.webp", "/photos/dodoma-wine-grapes.webp"],
        seo: {
            title: "Dodoma Wine Tours | Ndito Travel Tanzania",
            description:
                "Discover Dodoma’s vineyards — Tanzania’s wine capital offering unique local tastings.",
            keywords: "Dodoma wine, Tanzania vineyards, Dodoma tours",
        },
    },
    {
        slug: "arusha-city",
        name: "Arusha City",
        shortDescription: "The safari capital of northern Tanzania.",
        description: `
      Arusha is the gateway to Tanzania’s northern circuit, offering markets, museums, and views of Mount Meru.
    `,
        location: { lat: -3.366, lng: 36.683 },
        images: ["/photos/Arusha-city-view-1960x800.webp", "/photos/Arusha-city-clock-tower-1024x708.webp", "/photos/arusha-2-maasai-ndito1920x1280.webp"],
        seo: {
            title: "Arusha Tanzania | Ndito Travel",
            description:
                "Explore Arusha — Tanzania’s vibrant safari hub with culture, food, and mountain views.",
            keywords: "Arusha Tanzania, safari capital, northern circuit",
        },
    },
    {
        slug: "dar-es-salaam",
        name: "Dar es Salaam",
        shortDescription: "Tanzania’s bustling coastal city.",
        description: `
      Dar es Salaam blends beaches, markets, and modern life.
      It’s the country’s main port and a cultural melting pot by the Indian Ocean.
    `,
        location: { lat: -6.8, lng: 39.283 },
        images: ["/photos/dar-es-salaam-tanzania-7.avif", "/photos/dar-es-salaam-city-tour.webp", "/photos/Dar-es-salaam-Beach-on-the-peninsula-of-Kigamboni.webp"],
        seo: {
            title: "Dar es Salaam | Ndito Travel Tanzania",
            description:
                "Discover Dar es Salaam — Tanzania’s coastal hub with beaches, food, and urban culture.",
            keywords: "Dar es Salaam, Tanzania city, coastal tours",
        },
    },
    {
        slug: "lake-victoria",
        name: "Lake Victoria",
        shortDescription: "Africa’s largest lake shared by Tanzania, Kenya, and Uganda.",
        description: `
      Explore the Tanzanian shores of Lake Victoria, visit fishing villages, or take boat trips to Rubondo Island.
    `,
        location: { lat: -2.0, lng: 32.8 },
        images: ["/photos/lake-victoria.webp", "/photos/rubondo-island.webp"],
        seo: {
            title: "Lake Victoria Tanzania | Ndito Travel",
            description:
                "Visit Lake Victoria — Africa’s largest freshwater lake, rich with culture and birdlife.",
            keywords: "Lake Victoria Tanzania, Rubondo Island, freshwater lakes Africa",
        },
    },
    {
        slug: "rubondo-island-national-park",
        name: "Rubondo Island National Park",
        shortDescription: "A pristine island sanctuary on Lake Victoria.",
        description: `
      Rubondo Island offers forest walks, chimpanzee sightings, and scenic boat rides on Lake Victoria.
    `,
        location: { lat: -2.33, lng: 31.8 },
        images: ["/photos/rubondo-forest.webp", "/photos/rubondo-lake.webp"],
        seo: {
            title: "Rubondo Island National Park | Ndito Travel Tanzania",
            description:
                "Uncover Rubondo Island — Tanzania’s hidden island park on Lake Victoria with pristine nature.",
            keywords: "Rubondo Island, Lake Victoria park, Tanzania islands",
        },
    },
    {
        slug: "mafia-island",
        name: "Mafia Island",
        shortDescription: "Tanzania’s best-kept marine secret.",
        description: `
      Mafia Island Marine Park is a diver’s paradise with coral reefs, whale sharks, and crystal-clear lagoons.
    `,
        location: { lat: -7.916, lng: 39.667 },
        images: ["/photos/mafia-whaleshark.webp", "/photos/mafia-coral.webp"],
        seo: {
            title: "Mafia Island Tanzania | Ndito Travel",
            description:
                "Dive into Mafia Island — Tanzania’s serene marine paradise for whale sharks and coral reefs.",
            keywords: "Mafia Island, whale sharks Tanzania, Tanzania diving",
        },
    },
];
