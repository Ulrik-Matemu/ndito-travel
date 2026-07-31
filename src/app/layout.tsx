import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/shared/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
import { PostHogProvider } from './providers'
import { PostHogPageView } from '@/components/analytics/PostHogPageView'
import { CookieConsent } from '@/components/analytics/CookieConsent'
import { NavigationLoader } from '@/components/shared/NavigationLoader'
import ChatWidget from "@/components/shared/chatWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://nditotravel.co.tz"),
  title: {
    default: "Ndito Travel | Tanzania Safaris, Kilimanjaro Climbs & Zanzibar Holidays",
    template: "%s | Ndito Travel",
  },
  description:
    "Experience authentic Tanzania safaris, Serengeti Great Migration tours, Mount Kilimanjaro trekking, and Zanzibar beach holidays with expert local guides based in Arusha.",
  keywords: [
    "Tanzania safari",
    "Serengeti safari",
    "Kilimanjaro climbing",
    "Zanzibar holiday",
    "Ngorongoro Crater tour",
    "Tanzania tour operator",
    "Arusha safari company",
    "Big Five safari",
    "East Africa safari",
    "Tanzania travel",
  ],
  authors: [{ name: "Ndito Travel", url: "https://nditotravel.co.tz" }],
  creator: "Ndito Travel",
  publisher: "Ndito Travel",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nditotravel.co.tz",
    siteName: "Ndito Travel",
    title: "Ndito Travel | Authentic Tanzania Safaris & Kilimanjaro Treks",
    description:
      "Tailor-made Tanzania safaris, ethical Kilimanjaro climbs, and Zanzibar beach getaways with expert Tanzanian guides in Arusha.",
    images: [
      {
        url: "/photos/ndito-travel-cars.webp",
        width: 1200,
        height: 630,
        alt: "Ndito Travel safari fleet in Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ndito Travel | Tanzania Safaris & Kilimanjaro Climbs",
    description:
      "Authentic Tanzania safaris and ethical Kilimanjaro trekking packages with local experts.",
    images: ["/photos/ndito-travel-cars.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nditotravel.co.tz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#e8dfd7]">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#231f20] focus:text-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"
        >
          Skip to content
        </a>

        {/* Main content fills remaining height */}
        <main id="main-content" className="flex-grow">
          <PostHogProvider>
            <NavigationLoader />
            <PostHogPageView />
            {children}
          </PostHogProvider>
        </main>

        {/* Cookie Consent Banner */}
        <CookieConsent />

        {/* Footer stays pinned at bottom */}
        <div className="mx-0 md:mx-0">
          <Footer />
        </div>
        <ChatWidget />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

