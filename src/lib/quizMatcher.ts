import { safariPackages, type SafariPackage } from "@/data/safariTrips";
import { kilimanjaroRoutes, type RouteInfo } from "@/data/kilimanjaroRoutes";

export interface QuizPreferences {
  interest: "wildlife" | "climbing" | "beach" | "culture";
  duration: "short" | "medium" | "long";
  comfort: "budget_camping" | "midrange" | "luxury";
}

export type RecommendationItem =
  | { type: "safari"; data: SafariPackage }
  | { type: "kilimanjaro"; data: RouteInfo };

export function matchTrips(prefs: QuizPreferences): RecommendationItem[] {
  const recommendations: RecommendationItem[] = [];

  // ── KILIMANJARO INTEREST ──
  if (prefs.interest === "climbing") {
    // Filter routes by duration preference
    let matchedRoutes = kilimanjaroRoutes;
    if (prefs.duration === "short") {
      // Marangu (5-6 days), Umbwe (6 days), Machame (6-7 days)
      matchedRoutes = kilimanjaroRoutes.filter(
        (r) => r.duration.includes("5") || r.duration.includes("6")
      );
    } else if (prefs.duration === "medium") {
      // Lemosho (7-8 days), Rongai (6-7 days), Shira (7-8 days)
      matchedRoutes = kilimanjaroRoutes.filter(
        (r) => r.duration.includes("7") || r.duration.includes("8")
      );
    } else if (prefs.duration === "long") {
      // Northern Circuit (9 days)
      matchedRoutes = kilimanjaroRoutes.filter(
        (r) => r.duration.includes("9") || r.duration.includes("8")
      );
    }

    matchedRoutes.forEach((route) => {
      recommendations.push({ type: "kilimanjaro", data: route });
    });
  }
  // ── BEACH / ZANZIBAR INTEREST ──
  else if (prefs.interest === "beach") {
    const beachPackages = safariPackages.filter(
      (pkg) =>
        pkg.slug.includes("zanzibar") ||
        pkg.title.toLowerCase().includes("zanzibar")
    );

    const filtered = filterSafariPackages(beachPackages, prefs.duration, prefs.comfort);
    filtered.forEach((pkg) => recommendations.push({ type: "safari", data: pkg }));
  }
  // ── CULTURAL INTEREST ──
  else if (prefs.interest === "culture") {
    const culturalPackages = safariPackages.filter(
      (pkg) =>
        pkg.title.toLowerCase().includes("bushmen") ||
        pkg.title.toLowerCase().includes("maasai") ||
        pkg.title.toLowerCase().includes("hadzabe") ||
        pkg.slug.includes("cultural")
    );

    const filtered = filterSafariPackages(culturalPackages, prefs.duration, prefs.comfort);
    filtered.forEach((pkg) => recommendations.push({ type: "safari", data: pkg }));
  }
  // ── WILDLIFE SAFARIS (DEFAULT) ──
  else {
    const filtered = filterSafariPackages(safariPackages, prefs.duration, prefs.comfort);
    filtered.forEach((pkg) => recommendations.push({ type: "safari", data: pkg }));
  }

  // Fallback if filters are too strict: return general top packages
  if (recommendations.length === 0) {
    const kili = kilimanjaroRoutes.find((r) => r.id === "lemosho-route");
    if (kili) recommendations.push({ type: "kilimanjaro", data: kili });

    const safari = safariPackages.find((p) => p.slug.includes("5-day-serengeti-ngorongoro"));
    if (safari) recommendations.push({ type: "safari", data: safari });
  }

  // Limit to top 3 recommendations
  return recommendations.slice(0, 3);
}

function filterSafariPackages(
  packages: SafariPackage[],
  duration: "short" | "medium" | "long",
  comfort: "budget_camping" | "midrange" | "luxury"
): SafariPackage[] {
  return packages.filter((pkg) => {
    const days = parseInt(pkg.duration.split(" ")[0]) || 0;
    const slug = pkg.slug.toLowerCase();
    const id = pkg.id;

    // 1. Duration filter
    let matchDuration = true;
    if (duration === "short") matchDuration = days <= 3;
    else if (duration === "medium") matchDuration = days >= 4 && days <= 7;
    else if (duration === "long") matchDuration = days >= 8;

    // 2. Comfort filter
    let matchComfort = false;
    const numId = typeof id === "number" ? id : parseInt(id as string) || 0;
    const isBudget = slug.includes("budget") || slug.includes("camping") || numId <= 15;
    const isLuxury = slug.includes("luxury") || slug.includes("fly-in") || (numId >= 31 && numId <= 40);
    const isMidRange = !isBudget && !isLuxury;

    if (comfort === "budget_camping") matchComfort = isBudget;
    else if (comfort === "luxury") matchComfort = isLuxury;
    else matchComfort = isMidRange;

    return matchDuration && matchComfort;
  });
}
