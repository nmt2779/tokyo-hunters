"use client";

import { useState, type FormEvent } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

export const EmailSignup = ({
  placeholder = "operative@tokyo.jp",
  cta = "► REGISTER",
  successMessage = "✓ HUNTER REGISTERED · 東京で会おう",
  errorMessage = "✗ INVALID EMAIL · TRY AGAIN",
}: {
  placeholder?: string;
  cta?: string;
  successMessage?: string;
  errorMessage?: string;
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // TODO: real handler — POST to /api/waitlist or external service
    console.log("[waitlist signup]", email.trim());
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 18px",
          border: "1.5px solid var(--accent)",
          background: "rgba(255, 42, 61, 0.08)",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "var(--paper)",
          letterSpacing: "0.14em",
        }}
      >
        <span style={{ color: "var(--accent)", fontWeight: 700 }}>{successMessage}</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", maxWidth: 460 }}
    >
      <div style={{ display: "flex", gap: 0, border: "1.5px solid var(--paper)", background: "rgba(0,0,0,0.4)" }}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={placeholder}
          aria-label="Email address"
          disabled={status === "submitting"}
          style={{
            flex: 1,
            minWidth: 0,
            padding: "14px 16px",
            background: "transparent",
            border: "none",
            outline: "none",
            color: "var(--paper)",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            letterSpacing: "0.08em",
          }}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          style={{
            padding: "14px 22px",
            background: "var(--accent)",
            color: "#fff",
            border: "none",
            borderLeft: "1.5px solid var(--paper)",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            cursor: status === "submitting" ? "wait" : "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {status === "submitting" ? "..." : cta}
        </button>
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.14em",
          color: status === "error" ? "var(--accent)" : "var(--muted-dark)",
          minHeight: 14,
        }}
      >
        {status === "error" ? errorMessage : "DROP-IN ALERTS · NO SPAM · UNSUBSCRIBE ANYTIME"}
      </div>
    </form>
  );
};
