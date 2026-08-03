"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Calendar, Mountain, Mail, Phone, User, Users, ChevronRight, Zap, RefreshCw } from "lucide-react";
import localFont from "next/font/local";
import { submitBooking } from "@/lib/booking";
import { initialFormData, type BookingFormData, type TripCategory } from "@/lib/bookingSchema";
import { matchTrips, type QuizPreferences, type RecommendationItem } from "@/lib/quizMatcher";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

export function TripQuiz() {
  const [step, setStep] = useState<number>(1);
  const [prefs, setPrefs] = useState<QuizPreferences>({
    interest: "wildlife",
    duration: "medium",
    comfort: "midrange",
  });

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [results, setResults] = useState<RecommendationItem[]>([]);
  const [bookingId, setBookingId] = useState("");

  const totalSteps = 5;
  const progressPercent = Math.min(((step - 1) / (totalSteps - 1)) * 100, 100);

  const handleInterestSelect = (interest: QuizPreferences["interest"]) => {
    setPrefs((prev) => ({ ...prev, interest }));
    setStep(2);
  };

  const handleDurationSelect = (duration: QuizPreferences["duration"]) => {
    setPrefs((prev) => ({ ...prev, duration }));
    setStep(3);
  };

  const handleComfortSelect = (comfort: QuizPreferences["comfort"]) => {
    setPrefs((prev) => ({ ...prev, comfort }));
    setStep(4);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      setSubmitError("Please fill in your name and email.");
      return;
    }
    if (!email.includes("@")) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      // Map preferences to custom itinerary structure
      let categoryMapped: TripCategory = "safari";
      if (prefs.interest === "climbing") categoryMapped = "kilimanjaro";
      else if (prefs.interest === "beach") categoryMapped = "zanzibar";
      else if (prefs.interest === "culture") categoryMapped = "culture";

      let durationDaysStr = "5–7 Days";
      if (prefs.duration === "short") durationDaysStr = "1–3 Days";
      else if (prefs.duration === "long") durationDaysStr = "8+ Days";

      const payload: BookingFormData = {
        ...initialFormData,
        bookingMode: "custom",
        intent: "custom",
        fullName,
        email,
        phone,
        travelDate: "",
        flexibleDates: true,
        groupSize: 2,
        customItinerary: {
          tripCategory: categoryMapped,
          destinations: prefs.interest === "climbing" ? ["Mount Kilimanjaro"] : ["Serengeti", "Ngorongoro"],
          durationDays: durationDaysStr,
          comfortLevel: prefs.comfort,
          specialActivities: [],
        },
        specialRequests: `Tanzania Trip Quiz Submission:\n- Interest: ${prefs.interest.toUpperCase()}\n- Duration: ${prefs.duration.toUpperCase()}\n- Comfort level: ${prefs.comfort.toUpperCase()}`,
        referrerPage: "/find-your-trip",
      };

      const res = await submitBooking(payload);
      if (res.success) {
        // Run matching logic
        const matched = matchTrips(prefs);
        setResults(matched);
        setBookingId(res.bookingId);
        setStep(5);
      } else {
        setSubmitError(res.message || "Failed to submit booking inquiry.");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setPrefs({
      interest: "wildlife",
      duration: "medium",
      comfort: "midrange",
    });
    setFullName("");
    setEmail("");
    setPhone("");
    setSubmitError("");
    setResults([]);
    setBookingId("");
  };

  // WhatsApp helper
  const getWhatsAppLink = () => {
    const text = `Hi Ndito Travel! I just took your Tanzania Trip Quiz (Inquiry: ${bookingId}). I'm interested in planning a ${prefs.duration} ${prefs.comfort.replace("_", " ")} trip focusing on ${prefs.interest}. Let's chat!`;
    return `https://wa.me/255658883554?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-[#fcfbfa] rounded-3xl border border-black/10 shadow-xl overflow-hidden p-6 md:p-10 relative">
      {/* Progress Bar (Except for results page) */}
      {step < 5 && (
        <div className="mb-8">
          <div className="flex justify-between items-center text-xs text-amber-900 font-extrabold uppercase tracking-widest mb-2">
            <span>Step {step} of 4</span>
            <span>{Math.round(progressPercent)}% Complete</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-amber-900 rounded-full"
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* STEP 1: INTERESTS */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                What is your primary interest?
              </h2>
              <p className={`text-sm text-gray-600 ${AgrandirRegular.className}`}>
                Select the main highlight you want to experience in Tanzania.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleInterestSelect("wildlife")}
                className="p-6 rounded-2xl border border-black/5 bg-[#f6f2ee] hover:bg-amber-900 hover:text-white transition-all text-left flex flex-col justify-between h-40 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
              >
                <Compass className="w-8 h-8 text-amber-900 group-hover:text-white transition-colors" />
                <div>
                  <h3 className={`text-lg font-bold ${LoubagMedium.className}`}>Wildlife Safari</h3>
                  <p className="text-xs opacity-80 leading-relaxed mt-1">Serengeti, Ngorongoro, Tarangire Big 5 tracking.</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleInterestSelect("climbing")}
                className="p-6 rounded-2xl border border-black/5 bg-[#f6f2ee] hover:bg-amber-900 hover:text-white transition-all text-left flex flex-col justify-between h-40 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
              >
                <Mountain className="w-8 h-8 text-amber-900 group-hover:text-white transition-colors" />
                <div>
                  <h3 className={`text-lg font-bold ${LoubagMedium.className}`}>Climb Kilimanjaro</h3>
                  <p className="text-xs opacity-80 leading-relaxed mt-1">Trek Africa&apos;s highest peak with expert local guides.</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleInterestSelect("beach")}
                className="p-6 rounded-2xl border border-black/5 bg-[#f6f2ee] hover:bg-amber-900 hover:text-white transition-all text-left flex flex-col justify-between h-40 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
              >
                <Compass className="w-8 h-8 text-amber-900 group-hover:text-white transition-colors" />
                <div>
                  <h3 className={`text-lg font-bold ${LoubagMedium.className}`}>Zanzibar Island</h3>
                  <p className="text-xs opacity-80 leading-relaxed mt-1">White sandy beaches, Spice Tours &amp; Stone Town heritage.</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleInterestSelect("culture")}
                className="p-6 rounded-2xl border border-black/5 bg-[#f6f2ee] hover:bg-amber-900 hover:text-white transition-all text-left flex flex-col justify-between h-40 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
              >
                <Users className="w-8 h-8 text-amber-900 group-hover:text-white transition-colors" />
                <div>
                  <h3 className={`text-lg font-bold ${LoubagMedium.className}`}>Cultural Exchange</h3>
                  <p className="text-xs opacity-80 leading-relaxed mt-1">Interact with tribes like Maasai, Hadzabe &amp; Datoga.</p>
                </div>
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2: DURATION */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center max-w-xl mx-auto space-y-2">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-amber-900 underline font-semibold focus-visible:outline-none"
              >
                &larr; Back to Step 1
              </button>
              <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                How many days do you have?
              </h2>
              <p className={`text-sm text-gray-600 ${AgrandirRegular.className}`}>
                Select the length of your dream trip.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => handleDurationSelect("short")}
                className="p-6 rounded-2xl border border-black/5 bg-[#f6f2ee] hover:bg-amber-900 hover:text-white transition-all text-center flex flex-col items-center justify-center h-44 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
              >
                <Calendar className="w-7 h-7 text-amber-900 group-hover:text-white transition-colors mb-4" />
                <h3 className={`text-lg font-bold ${LoubagMedium.className}`}>Short Trip</h3>
                <p className="text-xs opacity-80 leading-normal mt-1">1 - 3 Days</p>
              </button>

              <button
                type="button"
                onClick={() => handleDurationSelect("medium")}
                className="p-6 rounded-2xl border border-black/5 bg-[#f6f2ee] hover:bg-amber-900 hover:text-white transition-all text-center flex flex-col items-center justify-center h-44 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
              >
                <Calendar className="w-7 h-7 text-amber-900 group-hover:text-white transition-colors mb-4" />
                <h3 className={`text-lg font-bold ${LoubagMedium.className}`}>Standard Trip</h3>
                <p className="text-xs opacity-80 leading-normal mt-1">4 - 7 Days</p>
              </button>

              <button
                type="button"
                onClick={() => handleDurationSelect("long")}
                className="p-6 rounded-2xl border border-black/5 bg-[#f6f2ee] hover:bg-amber-900 hover:text-white transition-all text-center flex flex-col items-center justify-center h-44 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
              >
                <Calendar className="w-7 h-7 text-amber-900 group-hover:text-white transition-colors mb-4" />
                <h3 className={`text-lg font-bold ${LoubagMedium.className}`}>Extended Expedition</h3>
                <p className="text-xs opacity-80 leading-normal mt-1">8+ Days</p>
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: COMFORT LEVEL / BUDGET */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center max-w-xl mx-auto space-y-2">
              <button
                onClick={() => setStep(2)}
                className="text-xs text-amber-900 underline font-semibold focus-visible:outline-none"
              >
                &larr; Back to Step 2
              </button>
              <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                Choose your comfort level
              </h2>
              <p className={`text-sm text-gray-600 ${AgrandirRegular.className}`}>
                We offer custom lodging categories matching different travel styles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => handleComfortSelect("budget_camping")}
                className="p-6 rounded-2xl border border-black/5 bg-[#f6f2ee] hover:bg-amber-900 hover:text-white transition-all text-center flex flex-col items-center justify-center h-44 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
              >
                <Mountain className="w-7 h-7 text-amber-900 group-hover:text-white transition-colors mb-4" />
                <h3 className={`text-base font-bold ${LoubagMedium.className}`}>Budget Camping</h3>
                <p className="text-[10px] opacity-80 leading-tight mt-1 max-w-[150px]">Basic dome tents close to nature</p>
              </button>

              <button
                type="button"
                onClick={() => handleComfortSelect("midrange")}
                className="p-6 rounded-2xl border border-black/5 bg-[#f6f2ee] hover:bg-amber-900 hover:text-white transition-all text-center flex flex-col items-center justify-center h-44 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
              >
                <Compass className="w-7 h-7 text-amber-900 group-hover:text-white transition-colors mb-4" />
                <h3 className={`text-base font-bold ${LoubagMedium.className}`}>Mid-Range Lodges</h3>
                <p className="text-[10px] opacity-80 leading-tight mt-1 max-w-[150px]">Comfortable lodges &amp; tented chalets</p>
              </button>

              <button
                type="button"
                onClick={() => handleComfortSelect("luxury")}
                className="p-6 rounded-2xl border border-black/5 bg-[#f6f2ee] hover:bg-amber-900 hover:text-white transition-all text-center flex flex-col items-center justify-center h-44 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
              >
                <Compass className="w-7 h-7 text-amber-900 group-hover:text-white transition-colors mb-4" />
                <h3 className={`text-base font-bold ${LoubagMedium.className}`}>Luxury Camps</h3>
                <p className="text-[10px] opacity-80 leading-tight mt-1 max-w-[150px]">High-end luxury suites &amp; air transfers</p>
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 4: CONTACT INFO CAPTURE */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center max-w-xl mx-auto space-y-2">
              <button
                onClick={() => setStep(3)}
                className="text-xs text-amber-900 underline font-semibold focus-visible:outline-none"
              >
                &larr; Back to Step 3
              </button>
              <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                Where should we send your results?
              </h2>
              <p className={`text-sm text-gray-600 ${AgrandirRegular.className}`}>
                We will match your profile and display recommendations instantly.
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4 max-w-md mx-auto">
              <div className="relative">
                <label htmlFor="quiz-name" className="sr-only">Full Name</label>
                <User className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                <input
                  id="quiz-name"
                  type="text"
                  placeholder="Your Full Name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#f6f2ee] border border-black/5 rounded-xl text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-900 transition-all text-gray-900"
                />
              </div>

              <div className="relative">
                <label htmlFor="quiz-email" className="sr-only">Email Address</label>
                <Mail className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                <input
                  id="quiz-email"
                  type="email"
                  placeholder="Your Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#f6f2ee] border border-black/5 rounded-xl text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-900 transition-all text-gray-900"
                />
              </div>

              <div className="relative">
                <label htmlFor="quiz-phone" className="sr-only">WhatsApp / Phone Number</label>
                <Phone className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                <input
                  id="quiz-phone"
                  type="tel"
                  placeholder="Phone Number (WhatsApp optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#f6f2ee] border border-black/5 rounded-xl text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-900 transition-all text-gray-900"
                />
              </div>

              {submitError && (
                <div className="text-xs text-rose-700 font-semibold bg-rose-50 border border-rose-200/50 p-3 rounded-lg text-center">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-amber-900 hover:bg-amber-950 text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
              >
                {submitting ? (
                  <>
                    <RefreshCw className="animate-spin w-4 h-4" />
                    Finding Best Matches...
                  </>
                ) : (
                  <>
                    View Recommended Trips
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        )}

        {/* STEP 5: RECOMMENDATIONS DISPLAY */}
        {step === 5 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/50 inline-block">
                Inquiry Created: {bookingId}
              </span>
              <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                We found your perfect matches!
              </h2>
              <p className={`text-sm text-gray-600 ${AgrandirRegular.className}`}>
                Based on your budget, schedule, and interests, these are our top recommended packages.
              </p>
            </div>

            {/* Recommendations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.map((item, idx) => {
                const isSafari = item.type === "safari";
                const title = isSafari ? item.data.title : item.data.name;
                const desc = isSafari ? item.data.days[0]?.description : item.data.description;
                const link = isSafari ? `/itineraries/${item.data.slug}` : `/climbing-kilimanjaro/${item.data.id}`;
                const heroImg = isSafari ? item.data.images[0] : item.data.heroImage;
                const duration = isSafari ? item.data.duration : item.data.duration;

                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-md flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={heroImg}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 bg-amber-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                        {duration}
                      </span>
                    </div>

                    <div className="p-4 flex-grow flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className={`text-sm font-bold text-gray-900 line-clamp-2 ${AgrandirBold.className}`}>
                          {title}
                        </h3>
                        <p className={`text-xs text-gray-500 line-clamp-3 leading-relaxed mt-1.5 ${AgrandirRegular.className}`}>
                          {desc}
                        </p>
                      </div>

                      <Link
                        href={link}
                        target="_blank"
                        className="w-full bg-[#f6f2ee] hover:bg-amber-900 hover:text-white text-gray-800 font-bold py-2 rounded-xl transition-all flex items-center justify-center gap-1 text-[11px] border border-black/5"
                      >
                        View Full Details
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs Bar */}
            <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={resetQuiz}
                className="text-xs text-gray-500 hover:text-amber-900 underline flex items-center gap-1.5 focus-visible:outline-none font-semibold shrink-0 cursor-pointer"
              >
                <RefreshCw size={12} />
                Retake the Quiz
              </button>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-xs text-center cursor-pointer"
                >
                  <Zap size={14} className="text-emerald-300 fill-emerald-300" />
                  Chat on WhatsApp &rarr;
                </a>
                <Link
                  href="/book"
                  className="bg-amber-900 hover:bg-amber-950 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-xs text-center"
                >
                  Configure Custom Trip
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
