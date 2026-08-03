import { db, isFirebaseConfigured } from "./config";
import { collection, addDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";
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

export interface ChatMessageItem {
  role: "user" | "model";
  content: string;
  timestamp?: string;
}

/**
 * Persists AI chat conversation thread to Firebase Firestore 'chat_conversations' collection.
 * Keyed by sessionId so all turns in one session accumulate under a single document.
 */
export async function saveChatConversationToFirestore(
  sessionId: string,
  userMessage: string,
  modelReply: string,
  allMessages: ChatMessageItem[]
): Promise<{ success: boolean; error?: string }> {
  if (!isFirebaseConfigured || !db) {
    console.info("💻 [Ndito Travel] Firestore inactive. Conversation logged locally in dev mode.");
    return { success: true };
  }

  try {
    const docRef = doc(db, "chat_conversations", sessionId);
    const now = new Date().toISOString();

    await setDoc(
      docRef,
      {
        sessionId,
        updatedAt: now,
        messageCount: allMessages.length,
        lastUserMessage: userMessage,
        lastBotReply: modelReply,
        messages: allMessages.map((m) => ({
          role: m.role,
          content: m.content,
          timestamp: m.timestamp || now,
        })),
        createdAt: serverTimestamp(),
      },
      { merge: true }
    );

    console.log("🔥 [Ndito Travel] AI Chat logged to Firestore:", sessionId);
    return { success: true };
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("❌ [Ndito Travel] Chat Firestore Save Error:", errMsg);
    return { success: false, error: errMsg };
  }
}
