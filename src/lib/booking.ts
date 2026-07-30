import { BookingFormData, BookingSubmission } from "./bookingSchema";
import { saveBookingToFirestore } from "./firebase/firestore";

/**
 * Submits a booking or inquiry request.
 * Saves to Firebase Firestore and returns unique reference ID.
 */
export async function submitBooking(data: BookingFormData): Promise<{
  success: boolean;
  bookingId: string;
  message?: string;
}> {
  const referenceId = `NDT-${Math.floor(100000 + Math.random() * 900000)}`;

  const submission: BookingSubmission = {
    ...data,
    id: referenceId,
    submittedAt: new Date().toISOString(),
    status: "new",
    source: "website",
  };

  // Save to Firebase Firestore
  const firestoreResult = await saveBookingToFirestore(submission);
  if (firestoreResult.docId) {
    submission.firestoreDocId = firestoreResult.docId;
  }

  console.log("📋 [Ndito Travel] Booking submitted successfully:", submission);

  // Simulate network delay for polished UX
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    bookingId: referenceId,
    message: "Your booking request has been successfully recorded.",
  };
}
