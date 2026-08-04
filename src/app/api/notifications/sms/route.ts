import { NextResponse } from "next/server";
import { sendAdminBookingSms } from "@/lib/sms";
import { BookingSubmission } from "@/lib/bookingSchema";

export async function POST(req: Request) {
  try {
    const booking: BookingSubmission = await req.json();
    if (!booking || !booking.id || !booking.fullName) {
      return NextResponse.json(
        { error: "Invalid booking submission payload" },
        { status: 400 }
      );
    }

    const result = await sendAdminBookingSms(booking);
    return NextResponse.json(result);
  } catch (error: unknown) {
    console.error("Error in SMS API route:", error);
    return NextResponse.json(
      { error: "Failed to dispatch SMS notification" },
      { status: 500 }
    );
  }
}
