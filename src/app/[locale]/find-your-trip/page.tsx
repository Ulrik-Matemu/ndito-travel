import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";
import { TripQuiz } from "@/components/quiz/TripQuiz";

export const metadata: Metadata = {
  title: "Find Your Ideal Tanzania Trip | Interactive Travel Quiz | Ndito Travel",
  description:
    "Take our 60-second interactive trip planning quiz. Match your budget, comfort style, schedule, and interests to get customized safari or Kilimanjaro climb recommendations instantly.",
  keywords: [
    "Tanzania safari quiz",
    "Find my Tanzania trip",
    "Kilimanjaro route selector",
    "Tanzania travel matching",
    "Ndito Travel",
  ],
  alternates: {
    canonical: "https://nditotravel.co.tz/find-your-trip",
  },
  openGraph: {
    title: "Find Your Ideal Tanzania Trip | Ndito Travel Quiz",
    description:
      "Take our 60-second interactive trip planning quiz. Get custom safari or Kilimanjaro climb recommendations instantly.",
    url: "https://nditotravel.co.tz/find-your-trip",
    images: [
      {
        url: "/photos/safari-package.webp",
        width: 1200,
        height: 630,
        alt: "Find Your Ideal Tanzania Trip Quiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Ideal Tanzania Trip | Ndito Travel Quiz",
    description:
      "Take our 60-second interactive trip planning quiz. Get custom recommendations instantly.",
    images: ["/photos/safari-package.webp"],
  },
};

export default function QuizPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#e8dfd7] pt-24 pb-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl">
          {/* Main Quiz App wrapper */}
          <TripQuiz />
        </div>
      </main>
    </>
  );
}
