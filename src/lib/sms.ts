import { BookingSubmission } from "./bookingSchema";

export interface MesejiSmsResponse {
  batch_id?: string;
  total_recipients?: number;
  estimated_cost?: number;
  status?: string;
  error?: string;
}

export function formatAdminBookingSms(booking: BookingSubmission): string {
  const tripDetail =
    booking.bookingMode === "package"
      ? (booking.packageTitle || booking.packageSlug)
      : booking.customItinerary?.tripCategory === "kilimanjaro"
      ? `Kilimanjaro: ${booking.customItinerary.kilimanjaroRoute || "Custom"}`
      : `Safari: ${booking.customItinerary?.destinations?.slice(0, 2).join(", ") || "Custom"}`;

  const dateStr = booking.flexibleDates
    ? "Flexible"
    : booking.travelDate || "TBD";

  return `🚨 NEW NDITO BOOKING!\nRef: ${booking.id}\nGuest: ${booking.fullName} (${booking.country || "N/A"})\nPhone: ${booking.phone}\nTrip: ${tripDetail} (${booking.groupSize} pax)\nDate: ${dateStr}\nPref: ${booking.contactPreference}\n Email: ${booking.email}`;
}

export async function sendAdminBookingSms(booking: BookingSubmission): Promise<MesejiSmsResponse> {
  const apiKey = process.env.MESEJI_API_KEY;
  const senderId = process.env.MESEJI_SENDER_ID || "MESEJI";
  const adminContacts = process.env.ADMIN_PHONE_NUMBER;

  if (!apiKey || !adminContacts) {
    console.warn("⚠️ [Meseji SMS] Missing MESEJI_API_KEY or ADMIN_PHONE_NUMBER env variables.");
    return { error: "SMS service not configured" };
  }

  const message = formatAdminBookingSms(booking);

  try {
    const res = await fetch("https://meseji.co.tz/api/v1/sms/send", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender_id: senderId,
        message: message,
        contacts: adminContacts,
      }),
    });

    const data = await res.json();
    console.log("📲 [Meseji SMS] Sent response:", data);
    return data;
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("❌ [Meseji SMS] Error sending SMS:", err);
    return { error: errorMsg };
  }
}
