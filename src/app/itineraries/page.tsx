// app/itineraries/page.tsx
import Link from "next/link";
import { safariPackages } from "../../data/safariTrips";

export default function ItinerariesList() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-amber-800">Safari Itineraries</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {safariPackages.map((safari) => (
          <Link
            key={safari.id}
            href={`/itineraries/${safari.slug}`}
            className="block border border-amber-100 rounded-lg p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-amber-700">{safari.title}</h2>
            <p className="text-gray-500">{safari.duration}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
