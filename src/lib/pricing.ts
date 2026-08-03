import { type SafariPackage } from "@/data/safariTrips";
import { type RouteInfo } from "@/data/kilimanjaroRoutes";

export interface GroupPricing {
  pax2: number;
  pax4: number;
  pax6: number;
  pax8: number;
}

// Round to nearest $5 for clean numbers
const roundPrice = (price: number) => Math.round(price / 5) * 5;

/**
 * Calculates tiered per-person pricing for a safari package
 */
export function getSafariGroupPricing(pkg: SafariPackage): GroupPricing {
  const durationDays = parseInt(pkg.duration.split(" ")[0]) || 1;
  const slug = pkg.slug.toLowerCase();
  const id = pkg.id;
  const numId = typeof id === "number" ? id : parseInt(id as string) || 0;

  // Determine daily rate based on package section/metadata
  let dailyRate = 380; // Default Mid-Range
  if (slug.includes("budget") || slug.includes("camping") || numId <= 15) {
    dailyRate = 220;
  } else if (slug.includes("luxury") || slug.includes("fly-in") || (numId >= 31 && numId <= 40)) {
    dailyRate = 750;
  } else if (slug.includes("southern") || slug.includes("western") || (numId >= 41 && numId <= 46)) {
    dailyRate = 520;
  } else if (slug.includes("zanzibar") || slug.includes("combined") || numId >= 47) {
    dailyRate = 440;
  }

  const basePrice = dailyRate * durationDays;

  return {
    pax2: roundPrice(basePrice * 1.30),
    pax4: roundPrice(basePrice * 1.05),
    pax6: roundPrice(basePrice * 0.95),
    pax8: roundPrice(basePrice * 0.90),
  };
}

/**
 * Calculates tiered per-person pricing for a Kilimanjaro route
 */
export function getKilimanjaroGroupPricing(route: RouteInfo): GroupPricing {
  const id = route.id;
  
  // Set base price for route
  let basePrice = 2450; // Default (Lemosho, Rongai, Shira)
  if (id.includes("marangu")) {
    basePrice = 1950;
  } else if (id.includes("machame") || id.includes("umbwe")) {
    basePrice = 2250;
  } else if (id.includes("northern-circuit")) {
    basePrice = 2850;
  }

  return {
    pax2: roundPrice(basePrice * 1.20),
    pax4: roundPrice(basePrice * 1.00),
    pax6: roundPrice(basePrice * 0.95),
    pax8: roundPrice(basePrice * 0.90),
  };
}
