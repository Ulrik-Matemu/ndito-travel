'use client';

import { useState, useEffect } from 'react';
import posthog from 'posthog-js';
import { ShieldCheck, X } from 'lucide-react';
import Link from 'next/link';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ndito_cookie_consent');
    if (!consent) {
      // Delay display slightly for smooth page load UX
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Event listener for opening preferences from footer or legal page
  useEffect(() => {
    const handleOpenPreferences = () => setShowBanner(true);
    window.addEventListener('open_cookie_preferences', handleOpenPreferences);
    return () => window.removeEventListener('open_cookie_preferences', handleOpenPreferences);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ndito_cookie_consent', 'granted');
    if (posthog.__loaded) {
      posthog.opt_in_capturing();
    }
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('ndito_cookie_consent', 'declined');
    if (posthog.__loaded) {
      posthog.opt_out_capturing();
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-[#231f20] text-white p-5 rounded-2xl shadow-2xl border border-amber-600/30 backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-amber-500/10 rounded-xl text-amber-500 shrink-0">
          <ShieldCheck size={20} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white tracking-wide">Privacy & Cookie Preferences</h3>
            <button
              onClick={() => setShowBanner(false)}
              className="text-gray-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close banner"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed mt-1.5 mb-4">
            We use privacy-preserving analytics to optimize your safari planning experience. We never sell your data or log personal identity details. Read our{' '}
            <Link href="/privacy" className="underline text-amber-400 hover:text-amber-300">
              Privacy Policy
            </Link>.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Accept Analytics
            </button>
            <button
              onClick={handleDecline}
              className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-gray-200 font-medium text-xs rounded-xl transition-colors cursor-pointer"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function openCookiePreferences() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('open_cookie_preferences'));
  }
}
