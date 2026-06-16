"use client";

import { useReducedMotion } from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Tilt3DProps = {
  children: ReactNode;
  /** Max tilt in degrees. */
  max?: number;
  /** Perspective in px. Higher = subtler. */
  perspective?: number;
  /** Render a moving highlight overlay. */
  glare?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Pointer-tracked 3D tilt. Disabled on touch + reduced-motion.
 *
 * Writes the transform + glare straight to the DOM via refs (no setState per
 * pointermove). Re-rendering on every mouse move — across ~20 cards — produced
 * a render/GC storm that showed up as steadily climbing memory + jank.
 */
export function Tilt3D({
  children,
  max = 8,
  perspective = 1000,
  glare = true,
  className,
  style,
}: Tilt3DProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const handler = () => setCoarse(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const disabled = reduced || coarse;

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotY = (px - 0.5) * 2 * max;
      const rotX = (0.5 - py) * 2 * max;
      el.style.transition = "transform 80ms linear";
      el.style.transform = `perspective(${perspective}px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
      const g = glareRef.current;
      if (g) {
        g.style.background = `radial-gradient(circle at ${(px * 100).toFixed(1)}% ${(py * 100).toFixed(1)}%, rgba(255,255,255,0.22), transparent 45%)`;
        g.style.opacity = "1";
      }
    },
    [max, perspective]
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (el) {
      el.style.transition = "transform 320ms var(--ease-out)";
      el.style.transform = "";
    }
    const g = glareRef.current;
    if (g) g.style.opacity = "0";
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={disabled ? undefined : onMove}
      onPointerLeave={disabled ? undefined : onLeave}
      className={className}
      style={{
        ...style,
        transformStyle: disabled ? undefined : "preserve-3d",
        willChange: disabled ? undefined : "transform",
        position: style?.position ?? "relative",
      }}
    >
      {children}
      {glare && !disabled && (
        <div
          ref={glareRef}
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0,
            mixBlendMode: "screen",
            zIndex: 5,
            transition: "opacity 120ms linear",
          }}
        />
      )}
    </div>
  );
}
