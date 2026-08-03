import { safariDestinations } from "@/data/destinations";
import { TripCategory } from "./bookingSchema";

export interface ExperienceBookingMapping {
  title: string;
  tripCategory: TripCategory;
  destinations: string[];
  activities: string[];
}

/**
 * Maps experience slugs to booking pre-fill data.
 * When a user clicks "Book This Experience", the wizard uses this
 * to intelligently set trip category, destinations, and add-ons.
 */
export function getExperienceMapping(slug: string): ExperienceBookingMapping | null {
  const mappings: Record<string, ExperienceBookingMapping> = {
    "big-five-game-drives": {
      title: "Big Five Game Drives",
      tripCategory: "safari",
      destinations: ["Serengeti National Park", "Ngorongoro Crater"],
      activities: ["Big Five Photography Safari"],
    },
    "hot-air-balloon-safaris": {
      title: "Hot Air Balloon Safari",
      tripCategory: "safari",
      destinations: ["Serengeti National Park"],
      activities: ["Hot Air Balloon Safari over Serengeti ($599/person)"],
    },
    "maasai-cultural-tours": {
      title: "Maasai Cultural Tours",
      tripCategory: "culture",
      destinations: ["Ngorongoro Crater"],
      activities: ["Maasai Cultural Boma Visit"],
    },
    "chimpanzee-trekking": {
      title: "Chimpanzee Trekking Expeditions",
      tripCategory: "safari",
      destinations: ["Mahale Mountains"],
      activities: ["Chimpanzee Trekking (Mahale/Gombe)"],
    },
    "zanzibar-spice-tours": {
      title: "Zanzibar Spice Tours",
      tripCategory: "zanzibar",
      destinations: ["Zanzibar Beaches"],
      activities: ["Zanzibar Spice Tour & Stone Town Walk"],
    },
  };
  return mappings[slug] || null;
}

/**
 * Resolves a destination slug to its canonical display name
 * using the destinations data file.
 */
export function resolveDestinationName(slug: string): string {
  const found = safariDestinations.find((d) => d.slug === slug);
  if (found) return found.name;
  // Fallback: convert slug to Title Case
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}
