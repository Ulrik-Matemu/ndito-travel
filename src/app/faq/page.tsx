"use client";

import { useState } from "react";
import { Navbar } from "@/components/shared/navbar";
import { faqs } from "@/data/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import localFont from "next/font/local";
import { HelpCircle, ChevronDown, Search, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

const categories = [
  "All",
  "Visas & Transfers",
  "Kilimanjaro Trekking",
  "Wildlife Safaris",
  "Zanzibar & Booking",
] as const;

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("visa-1");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const faqSchemaData = {
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
  };

  return (
    <>
      <JsonLd data={faqSchemaData} />
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-900 block mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle size={16} /> ● FREQUENTLY ASKED QUESTIONS
          </span>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${LoubagMedium.className}`}
          >
            Everything You Need to Know
          </h1>
          <p
            className={`text-base sm:text-lg text-gray-700 leading-relaxed ${AgrandirRegular.className}`}
          >
            Got questions about Tanzania visas, Kilimanjaro acclimatization, safari land cruiser vehicles, or Zanzibar tides? Find clear answers below.
          </p>

          {/* Search Input */}
          <div className="mt-8 relative max-w-md mx-auto">
            <div className="bg-[#f6f2ee] rounded-full p-2 pl-5 flex items-center shadow-md border border-black/10">
              <Search size={18} className="text-gray-500 mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any question..."
                className={`bg-transparent text-gray-900 placeholder:text-gray-500 border-none outline-none text-sm w-full ${AgrandirRegular.className}`}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-amber-900 text-white shadow-md"
                    : "bg-[#f6f2ee] text-gray-700 hover:bg-gray-200 border border-black/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-[#f6f2ee] rounded-2xl border border-black/5 p-6">
              <p className="text-gray-700 font-semibold">No questions found matching your search.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs font-bold text-amber-900 underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#f6f2ee] rounded-2xl border border-black/5 shadow-xs overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-base sm:text-lg font-bold text-gray-900 ${LoubagMedium.className}`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-amber-900 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div
                          className={`px-5 sm:px-6 pb-6 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-black/5 pt-4 ${AgrandirRegular.className}`}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="mt-12 bg-amber-950 text-white p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <span className="text-xs uppercase font-bold text-amber-400 block mb-1">
              HAVE A SPECIFIC QUESTION?
            </span>
            <h2 className={`text-2xl font-bold text-white ${LoubagMedium.className}`}>
              Talk Directly with a Local Safari Expert
            </h2>
            <p className="text-xs sm:text-sm text-amber-100/90 mt-1">
              Our Arusha team is ready to answer questions about custom dates, child discounts, or trip adjustments.
            </p>
          </div>
          <a
            href="https://wa.me/255658883554"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
          >
            <MessageCircle size={16} /> CHAT ON WHATSAPP
          </a>
        </div>
      </main>
    </>
  );
}
