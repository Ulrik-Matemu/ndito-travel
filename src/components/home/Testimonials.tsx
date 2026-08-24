"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { Quote, Star } from "lucide-react";
import { useTranslations } from "next-intl";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

export function Testimonials() {
  const t = useTranslations("home.testimonials");

  return (
    <section className="py-12 md:py-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2">
          {t("badge")}
        </span>
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${LoubagMedium.className}`}
        >
          {t("title")}
        </h2>
        <p
          className={`text-base sm:text-lg text-gray-700 leading-relaxed ${AgrandirRegular.className}`}
        >
          {t("subtitle")}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="space-y-6">
        {/* Row 1: Quote Card Left | Photo Right */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
          <div className="md:col-span-2 bg-[#f6f2ee] p-6 sm:p-8 rounded-2xl border border-black/5 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-600 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              <Quote size={28} className="text-amber-900/30 mb-2" />
              <p className={`text-sm sm:text-base text-gray-800 leading-relaxed italic ${AgrandirRegular.className}`}>
                &ldquo;{t("quote1")}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-black/10 mt-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-800">
                <Image
                  src="/photos/user-placeholder.png"
                  alt={t("author1")}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{t("author1")}</p>
                <p className="text-xs text-amber-900 font-medium">{t("info1")}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 relative h-[300px] sm:h-[360px] md:h-auto rounded-2xl overflow-hidden shadow-md border border-black/5">
            <Image
              src="/photos/hot-air-balloon-safari.webp"
              alt="Serengeti hot air balloon safari experience"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white text-xs font-semibold">
              {t("caption1")}
            </div>
          </div>
        </div>

        {/* Row 2: Photo Left | Quote Card Right (Dark theme) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
          <div className="md:col-span-3 relative h-[300px] sm:h-[360px] md:h-auto rounded-2xl overflow-hidden shadow-md border border-black/5">
            <Image
              src="/photos/zanzibar-beach-nditotravel-zanzibar.webp"
              alt="Zanzibar white sand beach relaxation"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white text-xs font-semibold">
              {t("caption2")}
            </div>
          </div>

          <div className="md:col-span-2 bg-[#231f20] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote size={28} className="text-amber-400/30 mb-2" />
              <p className={`text-sm sm:text-base text-gray-200 leading-relaxed italic ${AgrandirRegular.className}`}>
                &ldquo;{t("quote2")}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-white/10 mt-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400">
                <Image
                  src="/photos/user-placeholder.png"
                  alt={t("author2")}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{t("author2")}</p>
                <p className="text-xs text-amber-400 font-medium">{t("info2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
