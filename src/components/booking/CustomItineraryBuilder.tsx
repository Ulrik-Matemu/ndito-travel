"use client";

import { BookingFormData, TripCategory, ComfortLevel } from "@/lib/bookingSchema";
import { trackCustomItineraryChange } from "@/lib/analytics";
import {
  Compass,
  Mountain,
  Palmtree,
  Sparkles,
  Users,
  Check,
  Tent,
  Hotel,
  ShieldAlert,
  LucideIcon,
} from "lucide-react";
import localFont from "next/font/local";

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

interface CustomItineraryBuilderProps {
  formData: BookingFormData;
  onChange: (fields: Partial<BookingFormData>) => void;
  error?: string;
}

const CATEGORIES: { id: TripCategory; label: string; icon: LucideIcon; subtitle: string }[] = [
  {
    id: "safari",
    label: "Wildlife Safari",
    icon: Compass,
    subtitle: "Serengeti, Ngorongoro & Big Five",
  },
  {
    id: "kilimanjaro",
    label: "Kilimanjaro Climb",
    icon: Mountain,
    subtitle: "Roof of Africa Summit Routes",
  },
  {
    id: "zanzibar",
    label: "Zanzibar Escape",
    icon: Palmtree,
    subtitle: "Tropical Beaches & Stone Town",
  },
  {
    id: "bush_and_beach",
    label: "Bush & Beach Combo",
    icon: Sparkles,
    subtitle: "Safari Adventure + Ocean Relax",
  },
  {
    id: "culture",
    label: "Cultural & Tribes",
    icon: Users,
    subtitle: "Maasai, Hadzabe & Local Living",
  },
];

const DESTINATIONS = [
  { id: "Serengeti National Park", label: "Serengeti (Great Migration)" },
  { id: "Ngorongoro Crater", label: "Ngorongoro Crater" },
  { id: "Tarangire National Park", label: "Tarangire (Elephants & Baobabs)" },
  { id: "Lake Manyara", label: "Lake Manyara (Tree Lions)" },
  { id: "Arusha National Park", label: "Arusha National Park" },
  { id: "Zanzibar Beaches", label: "Zanzibar Beaches (Nungwi / Paje / Stone Town)" },
  { id: "Pemba Island", label: "Pemba Island" },
  { id: "Mafia Island", label: "Mafia Island" },
  { id: "Nyerere (Selous)", label: "Nyerere / Selous (Southern Circuit)" },
  { id: "Ruaha National Park", label: "Ruaha Wilderness" },
  { id: "Mikumi National Park", label: "Mikumi National Park" },
  { id: "Mahale Mountains", label: "Mahale Mountains (Chimpanzees)" },
  { id: "Gombe Stream", label: "Gombe Stream (Jane Goodall)" },
  { id: "Lake Natron", label: "Lake Natron (Flamingos & Ol Doinyo)" },
  { id: "Lake Eyasi", label: "Lake Eyasi (Hadzabe Tribe)" },
];

const KILIMANJARO_ROUTES = [
  "Machame Route (7 Days - High Summit Success)",
  "Lemosho Route (8 Days - Scenic & Acclimatization)",
  "Marangu Route (6 Days - Hut Accommodation)",
  "Rongai Route (7 Days - Remote North Trail)",
  "Northern Circuit Route (9 Days - Most Remote & Scenic)",
  "Umbwe Route (6 Days - Steep & Challenging)",
];

const DURATIONS = [
  "3–4 Days (Quick Explorer)",
  "5–7 Days (Classic Safari)",
  "8–11 Days (Complete Northern Circuit)",
  "12+ Days (Grand Tanzania Safari & Beach)",
];

const COMFORT_LEVELS: { id: ComfortLevel; title: string; badge: string; desc: string; icon: LucideIcon }[] = [
  {
    id: "luxury",
    title: "Luxury Lodges",
    badge: "5-Star Exclusive",
    desc: "Luxury permanent lodges & high-end safari tented camps with private pools and fine dining.",
    icon: Hotel,
  },
  {
    id: "midrange",
    title: "Mid-Range Comfort",
    badge: "Most Popular",
    desc: "Authentic safari tented lodges with private en-suite bathrooms and hot showers in the wild.",
    icon: Tent,
  },
  {
    id: "budget_camping",
    title: "Budget Adventure",
    badge: "Best Value",
    desc: "Public campsite tent accommodation with private Ndito professional cook preparing fresh meals.",
    icon: Tent,
  },
];

const ADDONS = [
  "Hot Air Balloon Safari over Serengeti ($599/person)",
  "Maasai Cultural Boma Visit",
  "Lake Manyara Night Game Drive",
  "Walking Safari with Armed Ranger",
  "Zanzibar Spice Tour & Stone Town Walk",
  "Mnemba Island Snorkeling Trip",
  "Big Five Photography Safari",
  "Chimpanzee Trekking (Mahale/Gombe)",
  "Coffee Farm Tour (Arusha)",
  "Sunset Dhow Cruise (Zanzibar)",
  "Deep Sea Fishing (Zanzibar)",
];

export function CustomItineraryBuilder({
  formData,
  onChange,
  error,
}: CustomItineraryBuilderProps) {
  const { customItinerary } = formData;

  const setCustomItinerary = (updates: Partial<typeof customItinerary>) => {
    const updatedState = { ...customItinerary, ...updates };
    onChange({
      customItinerary: updatedState,
    });
    trackCustomItineraryChange({
      category: updatedState.tripCategory,
      destinationsCount: updatedState.destinations.length,
      destinations: updatedState.destinations,
      budgetLevel: updatedState.comfortLevel,
      addonsCount: updatedState.specialActivities.length,
    });
  };

  const toggleDestination = (destId: string) => {
    const current = customItinerary.destinations;
    const exists = current.includes(destId);
    const updated = exists
      ? current.filter((item) => item !== destId)
      : [...current, destId];
    setCustomItinerary({ destinations: updated });
  };

  const toggleAddon = (addon: string) => {
    const current = customItinerary.specialActivities;
    const exists = current.includes(addon);
    const updated = exists
      ? current.filter((item) => item !== addon)
      : [...current, addon];
    setCustomItinerary({ specialActivities: updated });
  };

  return (
    <div className="space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-black/10 shadow-xs">
      {/* 1. Trip Focus Category */}
      <div>
        <label className={`block text-sm font-bold text-gray-900 mb-3 ${AgrandirBold.className}`}>
          1. Choose Your Trip Focus
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = customItinerary.tripCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCustomItinerary({ tripCategory: cat.id })}
                className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-900 ${
                  isSelected
                    ? "bg-amber-950 text-white border-amber-950 shadow-md scale-[1.01]"
                    : "bg-[#fcfbfa] text-gray-900 border-black/10 hover:bg-[#f6f2ee] hover:border-amber-900/40"
                }`}
              >
                <div
                  className={`p-2.5 rounded-lg shrink-0 ${
                    isSelected ? "bg-amber-500 text-black" : "bg-amber-100 text-amber-900"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <span className="font-bold text-sm block leading-tight">{cat.label}</span>
                  <span
                    className={`text-xs block mt-1 leading-snug ${
                      isSelected ? "text-amber-200" : "text-gray-500"
                    }`}
                  >
                    {cat.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Dynamic Selection: Destinations OR Kilimanjaro Route */}
      {customItinerary.tripCategory === "kilimanjaro" ? (
        <div>
          <label className={`block text-sm font-bold text-gray-900 mb-3 ${AgrandirBold.className}`}>
            2. Select Kilimanjaro Route
          </label>
          <div className="space-y-2.5">
            {KILIMANJARO_ROUTES.map((route) => {
              const isSelected = customItinerary.kilimanjaroRoute === route;
              return (
                <button
                  key={route}
                  type="button"
                  onClick={() => setCustomItinerary({ kilimanjaroRoute: route })}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-amber-900 text-white border-amber-900 font-bold shadow-xs"
                      : "bg-[#fcfbfa] text-gray-800 border-black/10 hover:bg-[#f6f2ee]"
                  }`}
                >
                  <span>{route}</span>
                  {isSelected && <Check size={18} className="text-amber-400" />}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className={`text-sm font-bold text-gray-900 ${AgrandirBold.className}`}>
              2. Select Parks & Destinations (Multi-Select)
            </label>
            <span className="text-xs text-amber-900 font-semibold">Select all that interest you</span>
          </div>

          {error && (
            <div className="mb-3 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
              <ShieldAlert size={16} />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {DESTINATIONS.map((dest) => {
              const isSelected = customItinerary.destinations.includes(dest.id);
              return (
                <button
                  key={dest.id}
                  type="button"
                  onClick={() => toggleDestination(dest.id)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-amber-900/10 border-amber-900 text-amber-950 font-bold shadow-2xs"
                      : "bg-[#fcfbfa] text-gray-700 border-black/10 hover:bg-[#f6f2ee]"
                  }`}
                >
                  <span>{dest.label}</span>
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                      isSelected
                        ? "bg-amber-900 border-amber-900 text-white"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    {isSelected && <Check size={14} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Duration & Comfort Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-bold text-gray-900 mb-3 ${AgrandirBold.className}`}>
            3. Estimated Trip Duration
          </label>
          <div className="space-y-2">
            {DURATIONS.map((dur) => {
              const isSelected = customItinerary.durationDays === dur;
              return (
                <button
                  key={dur}
                  type="button"
                  onClick={() => setCustomItinerary({ durationDays: dur })}
                  className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-amber-900 text-white border-amber-900 font-bold"
                      : "bg-[#fcfbfa] text-gray-800 border-black/10 hover:bg-[#f6f2ee]"
                  }`}
                >
                  {dur}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className={`block text-sm font-bold text-gray-900 mb-3 ${AgrandirBold.className}`}>
            4. Preferred Accommodation Comfort Level
          </label>
          <div className="space-y-2.5">
            {COMFORT_LEVELS.map((comfort) => {
              const isSelected = customItinerary.comfortLevel === comfort.id;
              const Icon = comfort.icon;
              return (
                <button
                  key={comfort.id}
                  type="button"
                  onClick={() => setCustomItinerary({ comfortLevel: comfort.id })}
                  className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-amber-900/10 border-amber-900 text-amber-950 font-bold"
                      : "bg-[#fcfbfa] text-gray-800 border-black/10 hover:bg-[#f6f2ee]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? "bg-amber-900 text-white" : "bg-amber-100 text-amber-900"}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold">{comfort.title}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-200 text-amber-950 font-semibold">
                          {comfort.badge}
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-600 font-normal block line-clamp-1 mt-0.5">
                        {comfort.desc}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Special Activities / Add-ons */}
      <div>
        <label className={`block text-sm font-bold text-gray-900 mb-3 ${AgrandirBold.className}`}>
          5. Optional Special Activities & Experiences
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {ADDONS.map((addon) => {
            const isSelected = customItinerary.specialActivities.includes(addon);
            return (
              <button
                key={addon}
                type="button"
                onClick={() => toggleAddon(addon)}
                className={`p-2.5 rounded-xl border text-left flex items-center justify-between text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-amber-900 text-white border-amber-900 font-bold"
                    : "bg-[#fcfbfa] text-gray-700 border-black/10 hover:bg-[#f6f2ee]"
                }`}
              >
                <span>{addon}</span>
                <div
                  className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                    isSelected ? "bg-amber-400 text-black border-amber-400" : "border-gray-300 bg-white"
                  }`}
                >
                  {isSelected && <Check size={12} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
