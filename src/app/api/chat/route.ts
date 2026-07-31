import { NextRequest, NextResponse } from "next/server";
import { buildSystemContext } from "@/lib/chatContext";

// ---------------------------------------------------------------------------
// Ndito Travel — AI chat widget backend
// Uses Gemini's free tier (Flash / Flash-Lite): 1,500 requests/day, no card.
// Get a key at https://aistudio.google.com -> store as GEMINI_API_KEY in .env.local
// ---------------------------------------------------------------------------
import dns from "node:dns";

dns.setDefaultResultOrder("ipv4first");

const GEMINI_MODEL = "gemini-flash-lite-latest"; // swap to "gemini-2.5-flash" if you need more daily headroom
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

// Built once per server process from your real data files
// (data/safariTrips.ts, data/destinations.ts, data/faqs.ts, data/articles.ts).
// Edit lib/chatContext.ts if you want to change what's included or how it's summarized.
const SYSTEM_CONTEXT = buildSystemContext();

interface ChatMessage {
  role: "user" | "model";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server misconfigured: missing GEMINI_API_KEY" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { message, history } = body as {
      message: string;
      history?: ChatMessage[];
    };

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Missing message" }, { status: 400 });
    }

    // Basic guardrail: cap message length to avoid abuse burning your daily quota
    if (message.length > 1000) {
      return NextResponse.json(
        { error: "Message too long" },
        { status: 400 }
      );
    }

    const contents = [
      ...(history || []).slice(-10).map((m) => ({
        role: m.role,
        parts: [{ text: m.content }],
      })),
      { role: "user", parts: [{ text: message }] },
    ];

    const response = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [{ text: SYSTEM_CONTEXT }],
        },
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 300,
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", response.status, errText);

      // 429 = rate limit hit (free tier cap). Give the widget a friendly signal.
      if (response.status === 429) {
        return NextResponse.json(
          { error: "rate_limited" },
          { status: 429 }
        );
      }
      return NextResponse.json(
        { error: "Upstream AI error", detail: errText },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Sorry, I couldn't come up with a response — please try rephrasing, or reach us directly.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}