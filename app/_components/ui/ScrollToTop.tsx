"use client";

import { useEffect, useState } from "react";

export const ScrollToTop = ({
  showAfter = 500,
}: {
  /** Pixels scrolled before button appears. */
  showAfter?: number;
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
      title="Back to top"
      style={{
        position: "fixed",
        bottom: "clamp(16px, 3vw, 28px)",
        right: "clamp(16px, 3vw, 28px)",
        width: 52,
        height: 52,
        border: "1.5px solid var(--paper)",
        background: "var(--accent)",
        color: "#fff",
        cursor: "pointer",
        fontFamily: "var(--font-mono)",
        fontSize: 22,
        lineHeight: 1,
        boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Fade + slide in/out
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 220ms ease, transform 220ms ease",
      }}
    >
      ↑
      <span style={{ position: "absolute", overflow: "hidden", clip: "rect(0 0 0 0)", width: 1, height: 1 }}>
        Back to top
      </span>
    </button>
  );
};
