"use client";

import { useState } from "react";
import { X, Send, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitBooking } from "@/lib/booking";
import { initialFormData } from "@/lib/bookingSchema";
import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

interface ExpressBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  contextSubject?: string;
  defaultPackageSlug?: string;
}

export function ExpressBookingModal({
  isOpen,
  onClose,
  title = "Quick Safari Inquiry",
  contextSubject = "General Safari Inquiry",
  defaultPackageSlug = "",
}: ExpressBookingModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [groupSize, setGroupSize] = useState(2);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      setError("Please fill in your name, email, and phone/WhatsApp number.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const payload = {
        ...initialFormData,
        packageSlug: defaultPackageSlug,
        packageTitle: contextSubject,
        fullName,
        email,
        phone,
        travelDate,
        flexibleDates: !travelDate,
        groupSize,
        specialRequests: `Express Inquiry for: ${contextSubject}\nNotes: ${message}`,
      };

      const result = await submitBooking(payload);
      if (result.success) {
        setSubmittedRef(result.bookingId);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to submit inquiry. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmittedRef(null);
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setError("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg bg-[#f6f2ee] rounded-2xl border border-black/10 shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-black hover:bg-black/5 transition-colors"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {submittedRef ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className={`text-2xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                  Inquiry Submitted!
                </h3>
                <p className="text-sm text-gray-700">
                  Thank you, <strong>{fullName}</strong>. We received your request regarding <strong>{contextSubject}</strong>.
                </p>
                <p className="text-xs text-gray-500 bg-white/80 border border-black/10 py-1.5 px-3 rounded-lg inline-block font-mono">
                  Ref ID: {submittedRef}
                </p>
                <div className="pt-2">
                  <button
                    onClick={resetAndClose}
                    className="w-full bg-amber-900 hover:bg-amber-950 text-white font-bold py-3 rounded-xl transition-all shadow-xs text-sm"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-900 text-xs font-bold uppercase tracking-wider mb-1">
                    <ShieldCheck size={14} /> Quick 60-Sec Inquiry
                  </div>
                  <h3 className={`text-2xl font-bold text-gray-900 ${LoubagMedium.className}`}>
                    {title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Inquiring about: <strong className="text-amber-950">{contextSubject}</strong>
                  </p>
                </div>

                {error && (
                  <p role="alert" className="text-xs text-rose-600 bg-rose-50 border border-rose-200 p-2.5 rounded-lg">
                    {error}
                  </p>
                )}

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-black/10 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-black/10 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 555 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-black/10 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Target Month / Date
                      </label>
                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-white border border-black/10 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Travelers
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={30}
                        value={groupSize}
                        onChange={(e) => setGroupSize(parseInt(e.target.value) || 1)}
                        className="w-full bg-white border border-black/10 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Message / Custom Request
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ask us anything about dates, accommodations, or custom plans..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white border border-black/10 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-900 hover:bg-amber-950 text-white font-bold py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> SUBMITTING...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> SUBMIT INQUIRY NOW
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
