"use client";

import Image from "next/image";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export const culturalGroups = [
  {
    name: "The Maasai Warriors",
    subtitle: "Pastoralist Guardians of the Great Rift Valley",
    image: "/photos/arusha-2-maasai-ndito1920x1280.webp",
    location: "Ngorongoro Highlands & Serengeti Plains",
    description:
      "Renowned worldwide for their distinctive red 'shúkà' robes, intricate beadwork, and iconic high-jumping 'Adumu' dance, the Maasai have preserved their ancient pastoralist lifestyle alongside wild African game for centuries.",
    experienceHighlight: "Visit authentic Maasai bomas (villages), learn traditional fire-making, and understand medicinal bush plants.",
  },
  {
    name: "The Hadzabe Bushmen",
    subtitle: "Africa's Last Authentic Hunter-Gatherer Tribe",
    image: "/photos/Lake_Eyasi_x_21_750_550shar-50brig-20_c1.webp",
    location: "Lake Eyasi Basin",
    description:
      "With fewer than 1,200 members remaining, the Hadzabe live today exactly as our ancestors did 10,000 years ago. They grow no crops, keep no livestock, and speak a fascinating ancient click language unrelated to any other.",
    experienceHighlight: "Join Hadzabe hunters at dawn for bow-and-arrow tracking and learn natural wild honey harvesting.",
  },
  {
    name: "The Datoga Pastoralists & Blacksmiths",
    subtitle: "Ancient Brass Craftsmen & Metalsmiths",
    image: "/photos/Lake_Eyasi_x_23.webp",
    location: "Lake Eyasi & Manyara Region",
    description:
      "Skilled iron smelters and brass crafters, the Datoga melt scrap metal using hand bellows and open fires to forge arrowheads, brass bangles, and traditional jewelry traded with the Hadzabe.",
    experienceHighlight: "Witness live brass-smelting inside traditional Datoga homesteads and see hand-carved bracelets created.",
  },
  {
    name: "Swahili Maritime & Spice Culture",
    subtitle: "A 1,000-Year Synthesis of Africa, Arabia & Persia",
    image: "/photos/historic-building-zanzibar.jpg",
    location: "Zanzibar, Bagamoyo & Coastal Ports",
    description:
      "Forged along ancient Indian Ocean monsoon trade routes, Swahili culture is reflected in ornate carved wooden doors, taarab music, aromatic coconut curry cuisine, and traditional wooden dhow sailboats.",
    experienceHighlight: "Savor authentic Swahili pilau rice, visit organic spice farms, and sail traditional dhows into the sunset.",
  },
];

export const DiscoverCulture = () => {
  return (
    <section id="culture" className="py-16 md:py-24 bg-[#f6f2ee] rounded-3xl p-6 md:p-12 my-12 border border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-900 font-bold bg-amber-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Living Heritage
          </span>
          <h2 className={`text-3xl md:text-5xl text-gray-900 ${LoubagMedium.className}`}>
            Tanzania&apos;s Rich Cultural Tapestry
          </h2>
          <p className={`mt-4 text-gray-700 text-base md:text-lg ${AgrandirRegular.className}`}>
            Beyond spectacular wildlife, Tanzania&apos;s greatest treasure is its warm, welcoming people and ancient tribal heritage.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {culturalGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-[#e8dfd7] rounded-3xl border border-black/10 overflow-hidden shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={group.image}
                    alt={group.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                      {group.location}
                    </span>
                    <h3 className={`text-2xl font-bold ${LoubagMedium.className}`}>{group.name}</h3>
                    <p className="text-xs text-amber-100 mt-0.5">{group.subtitle}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className={`text-xs md:text-sm text-gray-800 leading-relaxed mb-4 ${AgrandirRegular.className}`}>
                    {group.description}
                  </p>
                  <div className="p-3.5 bg-[#f6f2ee] rounded-xl border border-black/5 text-xs text-gray-900 font-medium">
                    <strong>Ndito Travel Cultural Experience:</strong> {group.experienceHighlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
