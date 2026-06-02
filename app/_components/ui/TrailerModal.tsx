"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const HASH = "#trailer";

/**
 * Full-screen trailer dialog. Opens when the URL hash is `#trailer` so any
 * anchor (hero CTA, section 09 button, section 07 thumbnail) can trigger it
 * with a plain href — no prop drilling. The heavy game-trailer.mp4 only
 * loads once the dialog opens (preload="none").
 */
export function TrailerModal({ src = "/game-trailer.mp4" }: { src?: string }) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  // Sync open state with the URL hash.
  useEffect(() => {
    const sync = () => setOpen(window.location.hash === HASH);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const close = useCallback(() => {
    const v = videoRef.current;
    if (v) v.pause();
    // Strip the hash without adding a history entry.
    history.replaceState(null, "", window.location.pathname + window.location.search);
    setOpen(false);
    lastFocused.current?.focus?.();
  }, []);

  // Escape to close + body scroll lock while open.
  useEffect(() => {
    if (!open) return;
    lastFocused.current = document.activeElement as HTMLElement;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="trailer-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Game trailer"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <button
        type="button"
        className="trailer-modal__close"
        aria-label="Close trailer"
        onClick={close}
      >
        ✕
      </button>
      <div className="trailer-modal__frame">
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          playsInline
          preload="none"
        />
      </div>
    </div>
  );
}
