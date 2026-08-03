"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type Message = {
  role: "user" | "model";
  content: string;
};

const GOLD = "#e8a84c";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content:
        "Jambo! 🌍 I'm the Ndito Travel virtual assistant. Ask me about our [safaris](/safaris), [Kilimanjaro treks](/kilimanjaro), wildlife, or let me help you [book a custom trip](/book).",
    },
  ]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function renderMessageContent(content: string) {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | React.ReactNode)[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }

      const label = match[1];
      const url = match[2];
      const isInternal = url.startsWith("/");

      parts.push(
        <a
          key={match.index}
          href={url}
          onClick={(e) => {
            if (isInternal) {
              e.preventDefault();
              router.push(url);
            }
          }}
          target={isInternal ? "_self" : "_blank"}
          rel="noopener noreferrer"
          style={{
            color: GOLD,
            textDecoration: "underline",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {label}
        </a>
      );

      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    // Now format bold text (**text**) inside string elements
    return parts.map((part, pIdx) => {
      if (typeof part === "string" && part.includes("**")) {
        const subParts = part.split(/(\*\*[^*]+\*\*)/g);
        return (
          <span key={pIdx}>
            {subParts.map((sub, sIdx) => {
              if (sub.startsWith("**") && sub.endsWith("**")) {
                return (
                  <strong key={sIdx} style={{ fontWeight: 700, color: "#fff" }}>
                    {sub.slice(2, -2)}
                  </strong>
                );
              }
              return sub;
            })}
          </span>
        );
      }
      return part;
    });
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: nextMessages.slice(0, -1),
          sessionId,
        }),
      });

      if (res.status === 429) {
        setMessages((m) => [
          ...m,
          {
            role: "model",
            content:
              "We've hit our daily chat limit for now — please reach us directly via WhatsApp or the contact form and we'll get back to you fast.",
          },
        ]);
        return;
      }

      const data = await res.json();
      if (data.sessionId) {
        setSessionId(data.sessionId);
      }
      setMessages((m) => [...m, { role: "model", content: data.reply ?? "Sorry, something went wrong." }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "model", content: "Connection hiccup — please try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 50,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: GOLD,
          border: "none",
          boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
        }}
      >
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 92,
            right: 24,
            zIndex: 50,
            width: 340,
            maxWidth: "90vw",
            height: 460,
            maxHeight: "70vh",
            background: "#111111",
            border: `1px solid ${GOLD}33`,
            borderRadius: 16,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            fontFamily: "inherit",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "14px 16px",
              borderBottom: `1px solid ${GOLD}22`,
              color: GOLD,
              fontWeight: 600,
              letterSpacing: 0.5,
              background: "#0a0a0a",
            }}
          >
            NDITO TRAVEL — ASSISTANT
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                  padding: "8px 12px",
                  borderRadius: 12,
                  fontSize: 14,
                  lineHeight: 1.4,
                  background: m.role === "user" ? GOLD : "#222",
                  color: m.role === "user" ? "#1a1a1a" : "#eee",
                }}
              >
                {renderMessageContent(m.content)}
              </div>
            ))}
            {loading && (
              <div style={{ alignSelf: "flex-start", color: "#999", fontSize: 13 }}>
                typing…
              </div>
            )}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              borderTop: `1px solid ${GOLD}22`,
              padding: 10,
              gap: 8,
              background: "#0a0a0a",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about tours, prices, booking…"
              style={{
                flex: 1,
                background: "#1a1a1a",
                border: "1px solid #333",
                borderRadius: 8,
                padding: "8px 10px",
                color: "#eee",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              style={{
                background: GOLD,
                border: "none",
                borderRadius: 8,
                padding: "8px 14px",
                fontWeight: 600,
                cursor: loading ? "default" : "pointer",
                opacity: loading ? 0.6 : 1,
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}