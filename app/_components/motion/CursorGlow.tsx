"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/**
 * Soft radial glow that follows the cursor. Desktop-only.
 * Uses rAF + transform writes (no React state per frame) to stay cheap.
 */
export function CursorGlow() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const handler = () => setCoarse(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduced || coarse) return;
    const el = ref.current;
    if (!el) return;

    let pendingX = 0;
    let pendingY = 0;
    let rafId = 0;
    let visible = false;

    const apply = () => {
      el.style.transform = `translate3d(${pendingX - 200}px, ${pendingY - 200}px, 0)`;
      rafId = 0;
    };

    const onMove = (e: PointerEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (!visible) {
        el.style.opacity = "1";
        visible = true;
      }
      if (!rafId) rafId = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      el.style.opacity = "0";
      visible = false;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [reduced, coarse]);

  if (reduced || coarse) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,42,61,0.16) 0%, rgba(255,42,61,0.05) 35%, transparent 70%)",
        /* No mix-blend-mode: blending on every pointer move forced a
           full-viewport recomposite. Plain alpha gradient is far cheaper. */
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0,
        transition: "opacity 200ms var(--ease-out)",
        willChange: "transform",
      }}
    />
  );
}
