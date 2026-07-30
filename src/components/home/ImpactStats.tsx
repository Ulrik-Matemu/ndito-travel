import localFont from "next/font/local";
import { Compass, Users, MapPin, Award } from "lucide-react";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

const stats = [
  {
    number: "500+",
    label: "Safaris Completed",
    description: "Unforgettable wildlife expeditions across Tanzania.",
    icon: Compass,
    isDark: true,
    accentBorder: "",
  },
  {
    number: "30+",
    label: "Unique Destinations",
    description: "From Serengeti plains to Zanzibar coral reefs.",
    icon: MapPin,
    isDark: false,
    accentBorder: "border-l-amber-600",
  },
  {
    number: "1,000+",
    label: "Happy Travelers",
    description: "Guests who explored East Africa with our team.",
    icon: Users,
    isDark: false,
    accentBorder: "border-l-emerald-600",
  },
  {
    number: "8+ Years",
    label: "Local Expertise",
    description: "Licensed local operator based in Arusha.",
    icon: Award,
    isDark: false,
    accentBorder: "border-l-amber-800",
  },
];

export function ImpactStats() {
  return (
    <section className="py-12 md:py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-1">
            ● OUR TRACK RECORD
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 ${LoubagMedium.className}`}
          >
            Real Impact, Real Adventures
          </h2>
        </div>
        <p
          className={`text-sm sm:text-base text-gray-700 max-w-md ${AgrandirRegular.className}`}
        >
          Numbers that reflect our passion for Tanzanian wildlife, authentic hospitality, and unforgettable journeys.
        </p>
      </div>

      {/* Staggered Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const IconComponent = stat.icon;
          // Stagger offsets on desktop layout
          const staggerClasses = [
            "lg:mt-0",
            "lg:mt-6",
            "lg:mt-12",
            "lg:mt-18",
          ][idx];

          if (stat.isDark) {
            return (
              <div
                key={stat.label}
                className={`bg-[#231f20] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between ${staggerClasses} transition-transform hover:-translate-y-1 duration-300`}
              >
                <div>
                  <div className="p-3 bg-amber-900/40 text-amber-400 rounded-xl w-max mb-6">
                    <IconComponent size={24} />
                  </div>
                  <span className={`text-4xl sm:text-5xl font-extrabold text-amber-400 block mb-2 ${LoubagMedium.className}`}>
                    {stat.number}
                  </span>
                  <h3 className="text-lg font-bold mb-1">{stat.label}</h3>
                </div>
                <p className={`text-xs text-gray-300 mt-4 leading-relaxed ${AgrandirRegular.className}`}>
                  {stat.description}
                </p>
              </div>
            );
          }

          return (
            <div
              key={stat.label}
              className={`bg-[#f6f2ee] border-l-4 ${stat.accentBorder} p-6 sm:p-8 rounded-2xl shadow-md border-y border-r border-black/5 flex flex-col justify-between ${staggerClasses} transition-transform hover:-translate-y-1 duration-300`}
            >
              <div>
                <div className="p-3 bg-white text-gray-800 rounded-xl w-max mb-6 shadow-xs">
                  <IconComponent size={24} />
                </div>
                <span className={`text-4xl sm:text-5xl font-extrabold text-gray-900 block mb-2 ${LoubagMedium.className}`}>
                  {stat.number}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{stat.label}</h3>
              </div>
              <p className={`text-xs text-gray-600 mt-4 leading-relaxed ${AgrandirRegular.className}`}>
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
