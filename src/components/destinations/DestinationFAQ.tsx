"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

interface FAQ {
  question?: string;
  answer?: string;
}

export function DestinationFAQ({ faqs, headingFont }: { faqs?: FAQ[]; headingFont: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="my-10">
      {/* FAQPage structured data — enables expandable FAQ rich results in Google */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      <h2 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-4 ${headingFont}`}>
        Frequently Asked Questions
      </h2>

      <div className="rounded-2xl border border-black/5 shadow-xs overflow-hidden bg-white">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border-b border-black/5 last:border-b-0">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 hover:bg-[#f6f2ee] transition-colors"
              >
                <span className="font-semibold text-gray-900 text-base sm:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-amber-900 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}