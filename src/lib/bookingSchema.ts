export type BookingMode = "package" | "custom";

export type BookingIntent =
  | "safari_package"
  | "kilimanjaro"
  | "zanzibar"
  | "destination"
  | "experience"
  | "custom";

export type TripCategory =
  | "safari"
  | "kilimanjaro"
  | "zanzibar"
  | "bush_and_beach"
  | "culture";

export type ComfortLevel = "luxury" | "midrange" | "budget_camping";

export interface CustomItineraryData {
  tripCategory: TripCategory;
  destinations: string[]; // e.g. ["Serengeti", "Ngorongoro Crater", "Zanzibar"]
  kilimanjaroRoute?: string; // e.g. "Machame Route (7 Days)"
  durationDays: string; // e.g. "5-7 Days"
  comfortLevel: ComfortLevel;
  specialActivities: string[]; // e.g. ["Hot Air Balloon Safari", "Maasai Village Visit"]
}

export interface BookingFormData {
  // Mode & Context
  bookingMode: BookingMode;
  intent: BookingIntent;
  sourceUrl?: string;
  referrerPage?: string;

  // Mode 1: Selected Package
  packageSlug: string;
  packageTitle?: string;

  // Mode 2: Experience Context
  experienceSlug?: string;
  experienceTitle?: string;

  // Mode 2: Custom Itinerary
  customItinerary: CustomItineraryData;

  // Logistics & Dates
  travelDate: string;
  flexibleDates: boolean;
  groupSize: number;

  // Guest Info & Contact
  fullName: string;
  email: string;
  phone: string;
  country: string;
  contactPreference: "whatsapp" | "email" | "phone";
  specialRequests: string;
}

export interface BookingSubmission extends BookingFormData {
  id: string;
  submittedAt: string;
  status: "new" | "contacted" | "quote_sent" | "confirmed";
  source: "website";
  firestoreDocId?: string;
}

export type ValidationErrors = Partial<Record<keyof BookingFormData | "destinations", string>>;

export const initialFormData: BookingFormData = {
  bookingMode: "package",
  intent: "custom",
  sourceUrl: "",
  referrerPage: "",
  packageSlug: "",
  packageTitle: "",
  experienceSlug: "",
  experienceTitle: "",
  customItinerary: {
    tripCategory: "safari",
    destinations: ["Serengeti National Park", "Ngorongoro Crater"],
    durationDays: "5–7 Days",
    comfortLevel: "midrange",
    specialActivities: [],
  },
  travelDate: "",
  flexibleDates: false,
  groupSize: 2,
  fullName: "",
  email: "",
  phone: "",
  country: "",
  contactPreference: "whatsapp",
  specialRequests: "",
};

export function validateStep1(data: BookingFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (data.bookingMode === "package" && !data.packageSlug) {
    errors.packageSlug = "Please select a safari or climbing package";
  }

  if (data.bookingMode === "custom") {
    if (
      data.customItinerary.tripCategory !== "kilimanjaro" &&
      data.customItinerary.destinations.length === 0
    ) {
      errors.destinations = "Please select at least one park or destination";
    }
  }

  if (!data.flexibleDates && !data.travelDate) {
    errors.travelDate = "Please select an estimated travel date or check 'My dates are flexible'";
  }

  if (!data.groupSize || data.groupSize < 1) {
    errors.groupSize = "Group size must be at least 1 traveler";
  }

  return errors;
}

export function validateStep2(data: BookingFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name (at least 2 characters)";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.phone || data.phone.trim().length < 6) {
    errors.phone = "Please enter a valid phone or WhatsApp number with country code";
  }

  return errors;
}
