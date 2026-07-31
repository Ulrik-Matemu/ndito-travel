"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Compass,
  Trees,
  Car,
  Sun,
  Feather,
  Utensils,
  Award,
  Music,
  HeartPulse,
  Home,
  Eye,
  BookOpen,
  Waves,
  TreePalm,
  Gift,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Lightbulb,
} from "lucide-react";
import type { ExperienceData } from "@/data/experiences";
import { Button } from "../shared/button";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

interface ExperienceDetailClientProps {
  experience: ExperienceData;
}

const renderIcon = (iconName: string) => {
  const props = { className: "w-6 h-6 text-amber-900 shrink-0" };
  switch (iconName) {
    case "ShieldCheck": return <ShieldCheck {...props} />;
    case "Compass": return <Compass {...props} />;
    case "Trees": return <Trees {...props} />;
    case "Car": return <Car {...props} />;
    case "Sun": return <Sun {...props} />;
    case "Feather": return <Feather {...props} />;
    case "Utensils": return <Utensils {...props} />;
    case "Award": return <Award {...props} />;
    case "Music": return <Music {...props} />;
    case "HeartPulse": return <HeartPulse {...props} />;
    case "Home": return <Home {...props} />;
    case "Eye": return <Eye {...props} />;
    case "BookOpen": return <BookOpen {...props} />;
    case "Waves": return <Waves {...props} />;
    case "TreePalm": return <TreePalm {...props} />;
    case "Gift": return <Gift {...props} />;
    case "Sparkles": default: return <Sparkles {...props} />;
  }
};

export default function ExperienceDetailClient({ experience }: ExperienceDetailClientProps) {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const selectedMonth = experience.seasonality[selectedMonthIndex];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const yOffset = -120; // Account for fixed navbar & sticky subnav
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen bg-[#e8dfd7] text-gray-900 pb-16 ${AgrandirRegular.className}`}>
      
      {/* Breadcrumbs Navigation */}
      <div className="bg-[#f6f2ee] border-b border-black/10 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-gray-600 flex-wrap">
            <Link href="/" className="hover:text-amber-900 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-gray-400 shrink-0" />
            <Link href="/experiences" className="hover:text-amber-900 transition-colors">
              Experiences
            </Link>
            <ChevronRight size={12} className="text-gray-400 shrink-0" />
            <span className={`text-amber-900 font-bold truncate max-w-[200px] sm:max-w-none ${AgrandirBold.className}`} aria-current="page">
              {experience.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full min-h-[460px] sm:min-h-[520px] max-h-[660px] flex items-center justify-center overflow-hidden border-b border-black/10">
        <Image
          src={experience.heroImage}
          alt={experience.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.75]"
        />
        {/* Dark Overlay matching site hero standard */}
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-90" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white space-y-4">
          

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide leading-tight drop-shadow-md ${LoubagMedium.className}`}
          >
            {experience.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-xs ${AgrandirRegular.className}`}
          >
            {experience.subtitle}
          </motion.p>

          {/* Quick Facts Bar - Responsive & Wrapping without Overflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-6 max-w-4xl mx-auto text-left"
          >
            <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Clock size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-wider text-gray-300 font-bold">Duration</p>
                <p className={`text-xs sm:text-sm font-semibold text-white leading-snug break-words ${AgrandirBold.className}`}>{experience.quickFacts.duration}</p>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-wider text-gray-300 font-bold">Location</p>
                <p className={`text-xs sm:text-sm font-semibold text-white leading-snug break-words ${AgrandirBold.className}`}>{experience.quickFacts.location}</p>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Calendar size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-wider text-gray-300 font-bold">Best Time</p>
                <p className={`text-xs sm:text-sm font-semibold text-white leading-snug break-words ${AgrandirBold.className}`}>{experience.quickFacts.bestMonths}</p>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Award size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-wider text-gray-300 font-bold">Difficulty</p>
                <p className={`text-xs sm:text-sm font-semibold text-white leading-snug break-words ${AgrandirBold.className}`}>{experience.quickFacts.difficulty}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Sticky Sub-Navigation */}
      <nav aria-label="Experience navigation tabs" className="sticky top-16 z-30 bg-[#f6f2ee]/95 backdrop-blur-md border-b border-black/10 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 py-3">
          {[
            { id: "overview", label: "Overview" },
            { id: "highlights", label: "Key Highlights" },
            { id: "seasonality", label: "Season & Calendar" },
            { id: "timeline", label: "What to Expect" },
            { id: "faqs", label: "Pro Tips & FAQs" },
          ].map((tab) => {
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                aria-current={isTabActive ? "true" : undefined}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${AgrandirBold.className} ${
                  isTabActive
                    ? "bg-amber-900 text-white shadow-sm"
                    : "text-gray-700 hover:text-black hover:bg-black/5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section 1: Overview */}
        <section id="overview" className="space-y-6 scroll-mt-28">
          <div className="bg-[#f6f2ee] rounded-2xl p-6 sm:p-10 border border-black/10 shadow-xs space-y-6">
            <h2 className={`text-2xl sm:text-3xl font-bold text-gray-900 text-center ${LoubagMedium.className}`}>
              {experience.overview.heading}
            </h2>

            {/* Decorative Divider */}
            <div
              aria-hidden="true"
              className="bg-amber-900/80 h-1 w-20 sm:w-28 mx-auto my-4 rounded-full"
            />

            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              {experience.overview.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Key Highlights Grid */}
        <section id="highlights" className="space-y-6 scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className={`text-2xl sm:text-3xl font-bold text-gray-900 ${LoubagMedium.className}`}>
              Experience Highlights
            </h2>
            <p className="text-sm text-gray-600">What makes this journey extraordinary</p>
            <div
              aria-hidden="true"
              className="bg-amber-900/80 h-1 w-16 mx-auto my-3 rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.highlights.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-[#f6f2ee] rounded-2xl p-6 border border-black/10 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="p-3 bg-amber-900/10 rounded-xl shrink-0">
                  {renderIcon(item.iconName)}
                </div>
                <div className="space-y-1 min-w-0">
                  <h3 className={`font-bold text-lg text-gray-900 ${AgrandirBold.className}`}>{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Interactive Month-by-Month Wildlife & Seasonal Calendar */}
        <section id="seasonality" className="space-y-6 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className={`text-2xl sm:text-3xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                Seasonality & Wildlife Calendar
              </h2>
              <p className="text-xs text-gray-600 mt-1">Select a month to inspect seasonal activity and game conditions</p>
            </div>

            <div className={`flex items-center gap-4 text-xs font-bold ${AgrandirBold.className}`}>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-600" /> High Season
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-600" /> Good
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-500" /> Fair
              </span>
            </div>
          </div>

          <div className="bg-[#f6f2ee] rounded-2xl p-6 border border-black/10 shadow-xs space-y-6">
            {/* Months Strip - Responsive 4-col (mobile) -> 6-col (tablet) -> 12-col (desktop) */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2" role="group" aria-label="Month selection calendar">
              {experience.seasonality.map((item, idx) => {
                const isSelected = selectedMonthIndex === idx;
                const badgeColor =
                  item.rating === "High"
                    ? "bg-emerald-600"
                    : item.rating === "Good"
                    ? "bg-amber-600"
                    : "bg-blue-500";

                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedMonthIndex(idx)}
                    aria-pressed={isSelected}
                    aria-label={`Select ${item.month} for seasonal rating: ${item.rating}`}
                    className={`py-3 min-h-[48px] rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      isSelected
                        ? "border-amber-900 bg-amber-900 text-white shadow-md scale-105"
                        : "border-black/10 hover:border-amber-900/50 bg-white text-gray-900"
                    }`}
                  >
                    <span className={`text-xs font-bold ${AgrandirBold.className}`}>{item.shortMonth}</span>
                    <span className={`w-2 h-2 rounded-full ${badgeColor}`} />
                  </button>
                );
              })}
            </div>

            {/* Selected Month Detail Card */}
            <AnimatePresence mode="wait">
              {selectedMonth && (
                <motion.div
                  key={selectedMonth.month}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl p-6 border border-amber-900/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                        {selectedMonth.month}
                      </h3>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider text-white ${AgrandirBold.className} ${
                          selectedMonth.rating === "High"
                            ? "bg-emerald-600"
                            : selectedMonth.rating === "Good"
                            ? "bg-amber-600"
                            : "bg-blue-500"
                        }`}
                      >
                        {selectedMonth.rating} Season
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{selectedMonth.description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Section 4: What to Expect */}
        <section id="timeline" className="space-y-6 scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className={`text-2xl sm:text-3xl font-bold text-gray-900 ${LoubagMedium.className}`}>
              What to Expect
            </h2>
            <p className="text-sm text-gray-600">Your step-by-step experience itinerary</p>
            <div
              aria-hidden="true"
              className="bg-amber-900/80 h-1 w-16 mx-auto my-3 rounded-full"
            />
          </div>

          <div className="relative border-l-2 border-amber-900/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8 py-2">
            {experience.whatToExpect.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-amber-900 border-4 border-[#e8dfd7] shadow-xs group-hover:scale-125 transition-transform" />
                <div className="bg-[#f6f2ee] rounded-2xl p-6 border border-black/10 shadow-xs space-y-2">
                  <span className={`text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-900/10 px-3 py-1 rounded-full inline-block ${AgrandirBold.className}`}>
                    {step.timeOrPhase}
                  </span>
                  <h3 className={`text-lg font-bold text-gray-900 ${AgrandirBold.className}`}>{step.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Pro Tips & FAQs */}
        <section id="faqs" className="grid grid-cols-1 lg:grid-cols-3 gap-8 scroll-mt-28">
          
          {/* Left: Pro Tips */}
          <div className="lg:col-span-1 bg-[#1c1917] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border border-white/10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-500/20 rounded-xl text-amber-400">
                  <Lightbulb size={24} />
                </div>
                <h3 className={`text-xl font-bold ${LoubagMedium.className}`}>Native Safari Tips</h3>
              </div>
              <ul className="space-y-4 text-sm text-gray-300">
                {experience.proTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6 border-t border-white/10 text-xs text-amber-300/90 font-medium">
              Ndito Travel Native Arusha Experts
            </div>
          </div>

          {/* Right: Interactive Accessible FAQ Accordion */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-900/10 flex items-center justify-center text-amber-900">
                <HelpCircle size={22} />
              </div>
              <div>
                <h2 className={`text-2xl font-bold text-gray-900 ${LoubagMedium.className}`}>Frequently Asked Questions</h2>
                <p className="text-xs text-gray-600">Essential travel answers before booking</p>
              </div>
            </div>

            <div className="space-y-3">
              {experience.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                const faqPanelId = `faq-panel-${idx}`;
                const faqButtonId = `faq-button-${idx}`;

                return (
                  <div
                    key={idx}
                    className="bg-[#f6f2ee] rounded-2xl border border-black/10 overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      id={faqButtonId}
                      aria-expanded={isOpen}
                      aria-controls={faqPanelId}
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className={`w-full p-5 text-left font-bold text-base text-gray-900 flex items-center justify-between gap-4 cursor-pointer hover:text-amber-900 transition-colors ${AgrandirBold.className}`}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-amber-900" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          id={faqPanelId}
                          role="region"
                          aria-labelledby={faqButtonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 pb-5 text-sm text-gray-700 leading-relaxed border-t border-black/5 pt-3"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 6: Recommended Destinations & Itineraries */}
        <section className="bg-[#f6f2ee] rounded-2xl p-6 sm:p-8 border border-black/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className={`text-xl font-bold text-gray-900 ${LoubagMedium.className}`}>Recommended Next Steps</h2>
              <p className="text-xs text-gray-600">Combine this experience with Tanzania’s top parks & packages</p>
            </div>
            <Link
              href="/safaris"
              className={`text-xs font-bold text-amber-900 hover:text-amber-950 underline inline-flex items-center gap-1 ${AgrandirBold.className}`}
            >
              Explore All Safaris <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {experience.relatedDestinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="bg-white rounded-xl p-4 border border-black/10 hover:border-amber-900 hover:shadow-md transition-all group flex items-center justify-between"
              >
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Destination</p>
                  <p className={`text-sm font-bold text-gray-900 group-hover:text-amber-900 transition-colors truncate ${AgrandirBold.className}`}>
                    {dest.name}
                  </p>
                </div>
                <ArrowRight size={16} className="text-gray-400 group-hover:text-amber-900 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}

            {experience.relatedItineraries.map((itinerary) => (
              <Link
                key={itinerary.slug}
                href={`/itineraries/${itinerary.slug}`}
                className="bg-white rounded-xl p-4 border border-black/10 hover:border-amber-900 hover:shadow-md transition-all group flex items-center justify-between"
              >
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Safari Package</p>
                  <p className={`text-sm font-bold text-gray-900 group-hover:text-amber-900 transition-colors truncate ${AgrandirBold.className}`}>
                    {itinerary.name}
                  </p>
                </div>
                <ArrowRight size={16} className="text-gray-400 group-hover:text-amber-900 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* Section 7: Booking CTA Banner */}
        <section className="relative overflow-hidden bg-[#1c1917] text-white rounded-2xl p-8 sm:p-12 shadow-2xl text-center space-y-6 border border-white/10">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className={`text-xs font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/10 ${AgrandirBold.className}`}>
              Plan Your Journey
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold text-white leading-tight ${LoubagMedium.className}`}>
              Ready for {experience.title}?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Our native Arusha travel specialists will design a custom itinerary around your schedule, preferences, and budget.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={`/book?experience=${experience.slug}`}
                ariaLabel={`Book ${experience.title}`}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                BOOK THIS EXPERIENCE
              </Button>
              <Button
                href="https://wa.me/255744903927"
                external
                ariaLabel="Chat on WhatsApp"
                variant="tertiary"
                size="lg"
                className="w-full sm:w-auto text-white hover:bg-white/10 border-white/30"
              >
                <div className="flex items-center gap-2">
                  <span>CHAT ON WHATSAPP</span>
                  <Image src="/icons/whatsapp.png" alt="" width={20} height={20} />
                </div>
              </Button>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
