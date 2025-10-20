interface Day {
  title: string;
  time: string;
  description: string;
  accommodation?: string;
  meals?: string;
}

export default function ItineraryTimeline({ days }: { days: Day[] }) {
  return (
    <div className="relative border-l-2 border-amber-600/40 pl-6 mt-10 space-y-8">
      {days.map((day, i) => (
        <div key={i} className="relative">
          <div className="absolute -left-[10px] top-1.5 w-4 h-4 bg-amber-600 rounded-full border border-white" />
          <h3 className="text-lg md:text-xl font-semibold text-amber-700">{day.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{day.time}</p>
          <p className="text-gray-700 mb-2">{day.description}</p>
          {day.accommodation && (
            <p className="text-gray-600 text-sm">
              <strong>{day.accommodation}</strong>
            </p>
          )}
          {day.meals && <p className="text-gray-600 text-sm">Meals: {day.meals}</p>}
        </div>
      ))}
    </div>
  );
}
