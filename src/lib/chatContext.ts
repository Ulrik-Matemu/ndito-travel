import { safariPackages } from "@/data/safariTrips";
import { safariDestinations } from "@/data/destinations";
import { faqs } from "@/data/faqs";
import { articles } from "@/data/articles";

// -----------------------------------------------------------------------
// Builds a compact, plain-text summary of the site's real content to feed
// the model as grounding context. Kept intentionally SHORT per item —
// full article bodies / all image paths / SEO metadata are dropped since
// they cost tokens without helping the bot answer visitor questions.
// -----------------------------------------------------------------------

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
You are the virtual travel assistant for Ndito Travel, a Tanzania-based tour
operator (nditotravel.co.tz). Answer visitor questions using ONLY the
information below. If something isn't covered here, say you're not sure and
point them to WhatsApp (+255 658 883 554) or the /book page — never guess or
invent prices, dates, or availability.

RULES:
- Be concise (2-3 sentences max).
- ALWAYS include clickable markdown links [Link Text](/route) when recommending packages, destinations, articles, or booking:
  * To guide a visitor to book a package: [Book {Package Title}](/book?package={slug})
  * To guide a visitor to build a custom trip: [Build Custom Itinerary](/book?intent=custom)
  * To view a safari or climb package: [{Package Title}](/itineraries/{slug})
  * To view a destination: [{Destination Name}](/destinations/{slug})
  * To view Kilimanjaro treks: [Kilimanjaro Treks](/kilimanjaro)
  * To view Zanzibar getaways: [Zanzibar Holidays](/zanzibar)
  * To chat directly on WhatsApp: [Chat on WhatsApp](https://wa.me/255658883554)
- Respond at a greeting from the client if they do greet, if not then just go ahead with providing relevant response.
- Never invent information or routes not present below.

=== SAFARI PACKAGES ===
${buildSafariPackagesContext()}

=== DESTINATIONS ===
${buildDestinationsContext()}

=== FAQS ===
${buildFaqsContext()}

=== ARTICLES (blog) ===
${buildArticlesContext()}
`.trim();
}