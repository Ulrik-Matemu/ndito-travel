import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/shared/navbar";
import { articles } from "@/data/articles";
import localFont from "next/font/local";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";

const LoubagMedium = localFont({
  src: "../../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../../public/fonts/Agrandir-Regular.otf",

});

export const metadata: Metadata = {
  title: "Tanzania Travel Guides & Articles | Ndito Travel",
  description:
    "Explore expert Tanzania travel guides, Kilimanjaro route comparisons, safari cost breakdowns, and Zanzibar tide advice by local Arusha experts.",
  keywords: [
    "Tanzania travel guides",
    "Kilimanjaro climb guide",
    "Serengeti migration timing",
    "Tanzania safari cost",
    "Ndito Travel blog",
  ],
  openGraph: {
    title: "Tanzania Travel Guides & Articles | Ndito Travel",
    description:
      "Expert guides on Kilimanjaro climbing, Serengeti Great Migration timing, and Tanzania safari costs by local Tanzanian experts.",
    url: "https://nditotravel.co.tz/articles",
    images: [
      {
        url: "/photos/kilimanjaro-hero-nditotravel.webp",
        width: 1200,
        height: 630,
        alt: "Tanzania Travel Articles and Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzania Travel Guides & Articles | Ndito Travel",
    description:
      "Expert guides on Kilimanjaro climbing and Tanzania safaris.",
    images: ["/photos/kilimanjaro-hero-nditotravel.webp"],
  },
  alternates: {
    canonical: "https://nditotravel.co.tz/articles",
  },
};

export default function ArticlesHubPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2 flex items-center justify-center gap-1.5">
            <BookOpen size={16} /> ● LOCAL TANZANIAN KNOWLEDGE
          </span>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${LoubagMedium.className}`}
          >
            Tanzania Travel Guides &amp; Insights
          </h1>
          <p
            className={`text-base sm:text-lg text-gray-700 leading-relaxed ${AgrandirRegular.className}`}
          >
            Deep-dive planning articles, route comparisons, budget breakdowns, and seasonal migration advice written by our native Tanzanian team in Arusha.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-[#f6f2ee] rounded-2xl overflow-hidden border border-black/5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Cover Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={article.heroImage}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold bg-amber-900 text-amber-100 px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
                    <Clock size={12} /> {article.readTime}
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
                    <Calendar size={12} /> {article.publishedAt}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2
                    className={`text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-amber-900 transition-colors mb-3 leading-snug ${LoubagMedium.className}`}
                  >
                    {article.title}
                  </h2>
                  <p className={`text-sm text-gray-700 leading-relaxed mb-6 line-clamp-3 ${AgrandirRegular.className}`}>
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-600 font-semibold">
                    <span>By {article.author.name}</span>
                  </div>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-900 group-hover:text-black transition-colors"
                  >
                    Read Guide <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
