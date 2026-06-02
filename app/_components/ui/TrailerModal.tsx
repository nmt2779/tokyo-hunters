"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const HASH = "#trailer";

/**
 * Full-screen trailer dialog playing public/game-trailer.mp4.
 *
 * Opening is driven by clicks on any `#trailer` anchor (hero CTA, section 09
 * button, section 07 thumbnail). We intercept those clicks directly because
 * Next.js <Link> updates the hash via client-side routing WITHOUT firing the
 * native `hashchange` event — so listening to `hashchange` alone misses every
 * in-app button. We still listen to hashchange/popstate so a shared deep-link
 * (…/#trailer) and the browser back button work too.
 *
 * The heavy game-trailer.mp4 only loads when the dialog opens (preload="none").
 */
export function TrailerModal({ src = "/game-trailer.mp4" }: { src?: string }) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const openModal = useCallback(() => {
    lastFocused.current = document.activeElement as HTMLElement;
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    const v = videoRef.current;
    if (v) v.pause();
    // Strip the hash without adding a history entry.
    if (window.location.hash === HASH) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    setOpen(false);
    lastFocused.current?.focus?.();
  }, []);

  // Intercept clicks on any element linking to #trailer (covers Next <Link>).
  // Capture phase so we run before Next Link's handler and before any
  // wrapper (e.g. the Magnetic motion.div) can stopPropagation in bubble.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href$="#trailer"], a[href="#trailer"]');
      if (!anchor) return;
      e.preventDefault();
      e.stopPropagation();
      openModal();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [openModal]);

  // Deep-link + back/forward support.
  useEffect(() => {
    const sync = () => {
      if (window.location.hash === HASH) openModal();
    };
    sync(); // open on initial load if URL already has #trailer
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, [openModal]);

  // Escape to close + body scroll lock while open.
  useEffect(() => {
    if (!open) return;
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
