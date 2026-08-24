import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/shared/navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { experiencesData } from "@/data/experiences";
import ExperienceDetailClient from "@/components/experiences/ExperienceDetailClient";

interface ExperiencePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(experiencesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiencesData[slug];

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  const url = `https://nditotravel.co.tz/experiences/${experience.slug}`;

  return {
    title: experience.seoTitle,
    description: experience.seoDescription,
    keywords: experience.keywords,
    openGraph: {
      title: experience.seoTitle,
      description: experience.seoDescription,
      url,
      siteName: "Ndito Travel",
      images: [
        {
          url: experience.heroImage,
          width: 1200,
          height: 630,
          alt: experience.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: experience.seoTitle,
      description: experience.seoDescription,
      images: [experience.heroImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export const dynamic = 'force-dynamic';

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = experiencesData[slug];

  if (!experience) {
    notFound();
  }

  return (
    <>
      {/* Schema.org Structured Data */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TouristExperience",
              "@id": `https://nditotravel.co.tz/experiences/${experience.slug}#experience`,
              name: experience.title,
              description: experience.seoDescription,
              url: `https://nditotravel.co.tz/experiences/${experience.slug}`,
              image: `https://nditotravel.co.tz${experience.heroImage}`,
              offeredBy: {
                "@type": "TravelAgency",
                name: "Ndito Travel",
                url: "https://nditotravel.co.tz",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `https://nditotravel.co.tz/experiences/${experience.slug}#breadcrumb`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://nditotravel.co.tz",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Experiences",
                  item: "https://nditotravel.co.tz/experiences",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: experience.title,
                  item: `https://nditotravel.co.tz/experiences/${experience.slug}`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `https://nditotravel.co.tz/experiences/${experience.slug}#faq`,
              mainEntity: experience.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ],
        }}
      />

      <Navbar />

      <div className="pt-16 md:pt-20">
        <ExperienceDetailClient experience={experience} />
      </div>
    </>
  );
}
