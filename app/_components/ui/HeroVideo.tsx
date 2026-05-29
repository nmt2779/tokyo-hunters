"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type HeroVideoProps = {
  src?: string;
  poster?: string;
  className?: string;
  style?: CSSProperties;
};

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
};

/**
 * Cinematic background video for the hero. Renders a poster first to avoid
 * blocking LCP, then mounts the video element on the next frame. Honors
 * reduced-motion and Save-Data by sticking with the poster.
 */
export function HeroVideo({
  src = "/trailer.mp4",
  poster = "/art/hero-poster.jpg",
  className,
  style,
}: HeroVideoProps) {
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const nav = navigator as Navigator & { connection?: NetworkInformation };
    const conn = nav.connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType && /^([23]g|slow-2g)$/i.test(conn.effectiveType)) return;
    // Defer mount until after first paint so the poster wins LCP.
    const id = requestAnimationFrame(() => setAllowVideo(true));
    return () => cancelAnimationFrame(id);
  }, [reduced]);

  return (
    <div
      aria-hidden
      className={`hero-video-mask ${className ?? ""}`}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        ...style,
      }}
    >
      {/* Poster wins LCP. Video paints on top once decoded. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {allowVideo && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
}
