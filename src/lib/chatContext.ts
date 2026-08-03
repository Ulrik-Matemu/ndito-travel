import { safariPackages } from "@/data/safariTrips";
import { safariDestinations } from "@/data/destinations";
import { faqs } from "@/data/faqs";
import { articles } from "@/data/articles";
import { experiencesData } from "@/data/experiences";

function buildSafariPackagesContext(): string {
  return safariPackages
    .map((pkg) => {
      const included = pkg.included.slice(0, 6).join(", ");
      return `- "${pkg.title}" (slug: ${pkg.slug}) — ${pkg.duration}, difficulty: ${pkg.difficulty}. Includes: ${included}.`;
    })
    .join("\n");
}

function buildDestinationsContext(): string {
  return safariDestinations
    .map((d) => `- ${d.name} (slug: ${d.slug}): ${d.shortDescription}`)
    .join("\n");
}

function buildExperiencesContext(): string {
  return Object.values(experiencesData)
    .map((exp) => `- "${exp.title}" (slug: ${exp.slug}, category: ${exp.category}): ${exp.subtitle}`)
    .join("\n");
}

function buildKilimanjaroRoutesContext(): string {
  return [
    '- "Lemosho Route" (8 Days, 95%+ success, scenic, challenging): Best for highest summit success + 360° Shira Plateau scenery.',
    '- "Machame Route" (6-7 Days, 90-92% success, classic "Whiskey Route", strenuous): Popular camping trail via Lava Tower & Barranco Wall.',
    '- "Marangu Route" (5-6 Days, 80-85% success, moderate): Only route with permanent wooden hut lodging.',
    '- "Northern Circuit" (9 Days, 98% success, challenging): Longest, quietest route with maximum acclimatization.',
    '- "Rongai Route" (6-7 Days, 88-90% success, moderate): Approached from the dry northern slope, ideal for rainy seasons.',
    '- "Umbwe Route" (6 Days, steep & challenging): Direct, strenuous ascent for experienced high-altitude hikers.',
  ].join("\n");
}

function buildFaqsContext(): string {
  return faqs
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n\n");
}

function buildArticlesContext(): string {
  return articles
    .map((a) => `- "${a.title}" (slug: ${a.slug}, category: ${a.category}): ${a.excerpt}`)
    .join("\n");
}

export function buildSystemContext(): string {
  return `
You are the expert virtual safari assistant for Ndito Travel, a premier Tanzania tour operator (nditotravel.co.tz) based in Arusha.

YOUR DUAL KNOWLEDGE SCOPE:
1. NDITO TRAVEL PACKAGES & BOOKING: Use the official site data below for specific package details, route names, destinations, and pricing. Do not invent prices or fake itineraries.
2. GENERAL SAFARI, WILDLIFE & AFRICA TRAVEL EXPERT: You ARE authorized to answer questions about African wildlife (Big Five behavior, migration timing, national park ecology, animal facts), Tanzania visa rules, flight connections, weather/seasons, packing advice, and East African travel culture.

HOW TO HELP VISITORS BOOK A SAFARI:
When a visitor shows interest in booking or planning a trip:
- Ask 1-2 quick questions if needed (e.g. travel dates, group size, or interests).
- Recommend 1-2 matching options from the data below.
- ALWAYS include a direct, clickable booking link with smart parameters:
  * Book specific package: [Book {Package Title}](/book?package={slug}&source=chat-assistant)
  * Book Kilimanjaro climb: [Book {Route Name} Trek](/book?intent=kilimanjaro&route={RouteName}&source=chat-assistant)
  * Book destination safari: [Plan Safari to {Name}](/book?intent=destination&destination={slug}&source=chat-assistant)
  * Book experience: [Book {Experience Title}](/book?experience={slug}&source=chat-assistant)
  * Book Zanzibar getaway: [Book Zanzibar Trip](/book?intent=zanzibar&source=chat-assistant)
  * Custom trip: [Build Custom Itinerary](/book?intent=custom&source=chat-assistant)
  * WhatsApp chat: [Chat on WhatsApp](https://wa.me/255658883554)

RULES:
- Be warm, helpful, and concise (2-4 sentences max per response).
- Respond politely to greetings (e.g., "Jambo! How can I help you plan your Tanzania journey today?").
- Always use standard markdown links [Text](/url) so the UI can render clickable links.

=== SAFARI PACKAGES ===
${buildSafariPackagesContext()}

=== KILIMANJARO ROUTES ===
${buildKilimanjaroRoutesContext()}

=== EXPERIENCES ===
${buildExperiencesContext()}

=== DESTINATIONS ===
${buildDestinationsContext()}

=== FAQS ===
${buildFaqsContext()}

=== ARTICLES (BLOG) ===
${buildArticlesContext()}
`.trim();
}