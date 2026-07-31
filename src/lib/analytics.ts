import posthog from 'posthog-js';

/**
 * Safely track an event in PostHog, ensuring sensitive fields (PII) are stripped out.
 */
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return;

  const safeProperties = { ...properties };
  // Ensure no PII fields leak into PostHog event properties
  delete safeProperties.email;
  delete safeProperties.name;
  delete safeProperties.fullName;
  delete safeProperties.phone;
  delete safeProperties.whatsapp;
  delete safeProperties.specialRequests;
  delete safeProperties.dietaryRequirements;
  delete safeProperties.passport;

  if (posthog.__loaded) {
    posthog.capture(eventName, safeProperties);
  }
};

/**
 * Track step transitions in the booking wizard.
 */
export const trackBookingStep = (step: number, mode: string, extra?: Record<string, unknown>) => {
  trackEvent('booking_step_viewed', {
    step,
    step_name: step === 1 ? 'trip_details' : step === 2 ? 'guest_info' : step === 3 ? 'confirm' : 'success',
    booking_mode: mode,
    ...extra,
  });
};

/**
 * Track user clicks on direct contact CTAs (WhatsApp, Call, Email).
 */
export const trackContactClick = (channel: 'whatsapp' | 'phone' | 'email', location: string) => {
  trackEvent('contact_cta_clicked', {
    channel,
    location,
  });
};

/**
 * Track custom itinerary builder interaction.
 */
export const trackCustomItineraryChange = (details: {
  category?: string;
  durationDays?: number;
  destinationsCount?: number;
  destinations?: string[];
  budgetLevel?: string;
  addonsCount?: number;
}) => {
  trackEvent('custom_itinerary_updated', {
    trip_category: details.category,
    duration_days: details.durationDays,
    destinations_count: details.destinationsCount,
    destinations: details.destinations,
    budget_level: details.budgetLevel,
    addons_count: details.addonsCount,
  });
};
