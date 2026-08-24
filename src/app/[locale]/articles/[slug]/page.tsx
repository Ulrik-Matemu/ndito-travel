import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import { safariPackages } from "@/data/safariTrips";
import { Navbar } from "@/components/shared/navbar";
import { Button } from "@/components/shared/button";
import { JsonLd } from "@/components/seo/JsonLd";
import localFont from "next/font/local";
import { ChevronRight, Clock, Calendar, ArrowLeft, ShieldCheck } from "lucide-react";

const LoubagMedium = localFont({
  src: "../../../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../../../public/fonts/Agrandir-Regular.otf",

});

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  const canonicalUrl = `https://nditotravel.co.tz/articles/${slug}`;

  return {
    title: `${article.seo.title} | Ndito Travel`,
    description: article.seo.description,
    keywords: article.seo.keywords,
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      url: canonicalUrl,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.heroImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seo.title,
      description: article.seo.description,
      images: [article.heroImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export const dynamic = 'force-dynamic';

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return notFound();

  const relatedPackages = safariPackages.filter((pkg) =>
    article.relatedPackageSlugs.includes(pkg.slug)
  );

  return (
    <>
      {/* Structured JSON-LD Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": `https://nditotravel.co.tz/articles/${article.slug}#article`,
              headline: article.title,
              description: article.excerpt,
              image: `https://nditotravel.co.tz${article.heroImage}`,
              datePublished: article.publishedAt,
              dateModified: article.updatedAt,
              author: {
                "@type": "Person",
                name: article.author.name,
                jobTitle: article.author.role,
              },
              publisher: {
                "@type": "Organization",
                name: "Ndito Travel",
                url: "https://nditotravel.co.tz",
                logo: {
                  "@type": "ImageObject",
                  url: "https://nditotravel.co.tz/photos/ndito-travel-cars.webp",
                },
              },
              mainEntityOfPage: `https://nditotravel.co.tz/articles/${article.slug}`,
            },
            {
              "@type": "BreadcrumbList",
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
                  name: "Articles",
                  item: "https://nditotravel.co.tz/articles",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: article.title,
                  item: `https://nditotravel.co.tz/articles/${article.slug}`,
                },
              ],
            },
          ],
        }}
      />
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-700">
            <li>
              <Link href="/" className="hover:text-black hover:underline">
                Home
              </Link>
            </li>
            <ChevronRight size={14} className="text-gray-400" />
            <li>
              <Link href="/articles" className="hover:text-black hover:underline">
                Articles
              </Link>
            </li>
            <ChevronRight size={14} className="text-gray-400" />
            <li className="font-semibold text-amber-900 truncate" aria-current="page">
              {article.title}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-1 text-xs font-bold text-gray-700 hover:text-black mb-6"
        >
          <ArrowLeft size={14} /> Back to all articles
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
            ● {article.category} Guide
          </span>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 ${LoubagMedium.className}`}
          >
            {article.title}
          </h1>
          <p
            className={`text-lg sm:text-xl text-gray-700 font-medium max-w-3xl leading-relaxed mb-6 ${AgrandirRegular.className}`}
          >
            {article.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 border-y border-black/10 py-3">
            <span className="font-bold text-gray-900">By {article.author.name} ({article.author.role})</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {article.readTime}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Calendar size={14} /> Updated {article.updatedAt}
            </span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-black/5 mb-10">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Layout Grid: Article Body Left | Sidebar Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content (2 Cols) */}
          <article className="lg:col-span-2 space-y-8">
            {article.content.map((section, i) => (
              <section key={i} className="bg-[#f6f2ee] p-6 sm:p-8 rounded-2xl border border-black/5 shadow-xs">
                <h2
                  className={`text-2xl font-bold text-gray-900 mb-4 ${LoubagMedium.className}`}
                >
                  {section.heading}
                </h2>
                <div
                  className={`text-gray-800 leading-relaxed text-base sm:text-lg whitespace-pre-line space-y-4 ${AgrandirRegular.className}`}
                >
                  {section.body}
                </div>
              </section>
            ))}

            {/* Related Packages Banner */}
            {relatedPackages.length > 0 && (
              <section className="mt-12 bg-amber-950 text-white p-8 rounded-2xl shadow-xl">
                <h3 className={`text-2xl font-bold text-white mb-2 ${LoubagMedium.className}`}>
                  Recommended Safari Packages Mentioned in This Guide
                </h3>
                <p className="text-sm text-amber-100/90 mb-6">
                  Experience this route firsthand with Ndito Travel&apos;s licensed local team.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="bg-white/10 p-4 rounded-xl border border-white/10 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-bold text-white mb-1">{pkg.title}</h4>
                        <p className="text-xs text-amber-300">{pkg.duration}</p>
                      </div>
                      <Link
                        href={`/itineraries/${pkg.slug}`}
                        className="mt-4 inline-flex items-center text-xs font-bold text-amber-400 hover:text-white underline"
                      >
                        View Itinerary Details &rarr;
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sticky Sidebar (1 Col) */}
          <aside className="space-y-6">
            <div className="bg-[#f6f2ee] p-6 rounded-2xl border border-black/5 shadow-xs sticky top-28 space-y-6">
              <div className="flex items-center gap-2 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={18} />
                Local Arusha Experts
              </div>
              <h3 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                Plan Your Safari With Ndito Travel
              </h3>
              <p className={`text-xs text-gray-700 leading-relaxed ${AgrandirRegular.className}`}>
                Have questions about safari pricing, Kilimanjaro dates, or airport transfers? Talk directly with our team in Arusha.
              </p>
              <div className="space-y-3 pt-2">
                <Button href="/book?source=articles" ariaLabel="Book custom safari" size="md" className="w-full text-center">
                  BOOK SAFARI ONLINE &rarr;
                </Button>
                <Button
                  href="https://wa.me/255658883554"
                  external
                  variant="tertiary"
                  ariaLabel="Chat on WhatsApp"
                  size="md"
                  className="w-full text-center"
                >
                  CHAT ON WHATSAPP
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
