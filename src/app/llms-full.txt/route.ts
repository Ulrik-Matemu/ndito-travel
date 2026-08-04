import { NextResponse } from 'next/server';
import { safariPackages } from '@/data/safariTrips';
import { safariDestinations } from '@/data/destinations';
import { articles } from '@/data/articles';

export async function GET() {
  const baseUrl = 'https://nditotravel.co.tz';

  const packagesSection = safariPackages
    .map(
      (pkg) => `
-  ${pkg.title}
- **Slug**: ${pkg.slug}
- **URL**: ${baseUrl}/itineraries/${pkg.slug}
- **Duration**: ${pkg.duration}
- **Accommodation Style**: ${pkg.difficulty}
- **Scenery**: ${pkg.scenery}
- **Included Services**: ${pkg.included.join(', ')}
- **Excluded**: ${pkg.excluded.join(', ')}

- # Detailed Itinerary:
${pkg.days.map((day) => `  - **${day.title}** (${day.time}): ${day.description} [${day.accommodation}]`).join('\n')}
`
    )
    .join('\n---\n');

  const destinationsSection = safariDestinations
    .map(
      (dest) => `
-  ${dest.name}
- **Slug**: ${dest.slug}
- **URL**: ${baseUrl}/destinations/${dest.slug}
- **Summary**: ${dest.shortDescription}
- **Full Overview**: ${dest.description.trim()}
`
    )
    .join('\n');

  const articlesSection = articles
    .map(
      (art) => `
-  ${art.title}
- **URL**: ${baseUrl}/articles/${art.slug}
- **Summary**: ${art.excerpt}
- **Author**: ${art.author.name} (${art.author.role})
`
    )
    .join('\n');

  const fullContent = `# Ndito Travel - Full Knowledge Base & Itinerary Index for AI Agents

> Complete official reference guide for Ndito Travel Tanzania.

## Business Details
- **Company**: Ndito Travel
- **Location**: Arusha, Tanzania
- **Contact Phone/WhatsApp**: +255 658 883 554
- **Contact Email**: office@nditotravel.co.tz
- **Website**: ${baseUrl}

---

## Safari & Trekking Itineraries
${packagesSection}

---

## Tanzanian Destinations
${destinationsSection}

---

## Educational Guides & Articles
${articlesSection}

---

## Frequently Asked Questions (FAQ Summary)
- **What is the best time for a Serengeti safari?**: Dry season (June to October) offers optimal wildlife viewing and Great Migration river crossings.
- **Which Kilimanjaro route has the highest summit success rate?**: The 7-day Machame Route and 8-day Lemosho Route offer superior acclimatization profiles with success rates above 90%.
- **Do you arrange custom private safaris?**: Yes, Ndito Travel customizes private safaris based on guest group size, dates, and budget preference via ${baseUrl}/book.
`;

  return new NextResponse(fullContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
