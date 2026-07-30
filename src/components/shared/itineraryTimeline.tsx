import { Clock, Hotel, Utensils } from "lucide-react";

export interface ItineraryDay {
  title: string;
  time: string;
  description: string;
  accommodation?: string;
  meals?: string;
}

export default function ItineraryTimeline({ days }: { days: ItineraryDay[] }) {
  if (!days || days.length === 0) return null;

  return (
    <ol
      aria-label="Itinerary day by day breakdown"
      className="relative border-l-2 border-amber-800/30 ml-3 sm:ml-4 pl-6 sm:pl-8 mt-8 mb-12 space-y-8"
    >
      {days.map((day, i) => (
        <li key={i} className="relative group">
          {/* Bullet Dot */}
          <div
            aria-hidden="true"
            className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 bg-amber-900 rounded-full border-2 border-[#f6f2ee] shadow-xs group-hover:scale-125 transition-transform"
          />

          {/* Day Card */}
          <div className="bg-[#f6f2ee] p-5 sm:p-6 rounded-xl border border-black/5 shadow-xs hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-amber-950 mb-1">
              {day.title}
            </h3>

            {day.time && (
              <p className="flex items-center gap-1.5 text-xs font-medium text-amber-900/80 mb-3">
                <Clock size={14} aria-hidden="true" />
                <span>{day.time}</span>
              </p>
            )}

            <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-4">
              {day.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-700 pt-3 border-t border-black/5">
              {day.accommodation && (
                <div className="flex items-center gap-1.5 font-medium text-gray-900">
                  <Hotel size={14} className="text-amber-900" aria-hidden="true" />
                  <span>{day.accommodation}</span>
                </div>
              )}
              {day.meals && (
                <div className="flex items-center gap-1.5 font-medium text-gray-900">
                  <Utensils size={14} className="text-amber-900" aria-hidden="true" />
                  <span>Meals: {day.meals}</span>
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
