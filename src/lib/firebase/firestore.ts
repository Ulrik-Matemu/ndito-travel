import { db, isFirebaseConfigured } from "./config";
import { collection, addDoc } from "firebase/firestore";
import { BookingSubmission } from "@/lib/bookingSchema";

/**
 * Persists booking submission to Firebase Firestore 'bookings' collection.
 * Falls back safely to simulation if Firebase credentials are missing.
 */
export async function saveBookingToFirestore(
  submission: BookingSubmission
): Promise<{ success: boolean; docId?: string; error?: string }> {
  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, "bookings"), {
        ...submission,
        createdAt: new Date(),
      });
      console.log("🔥 [Ndito Travel] Booking saved to Firestore ID:", docRef.id);
      return { success: true, docId: docRef.id };
    } catch (error: unknown) {
      const errMsg = error instanceof Error ? error.message : String(error);
      console.error("❌ [Ndito Travel] Firestore Save Error:", errMsg);
      return { success: false, error: errMsg };
    }
  } else {
    console.info(
      "💻 [Ndito Travel] Firestore not active. Booking recorded in local environment simulation."
    );
    return { success: true, docId: `SIM-${Date.now()}` };
  }
}
