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
  const [coarse, setCoarse] = useState(false);
  const [transform, setTransform] = useState<string>("");
  const [glarePos, setGlarePos] = useState<{ x: number; y: number } | null>(null);

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
      if (disabled) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotY = (px - 0.5) * 2 * max;
      const rotX = (0.5 - py) * 2 * max;
      setTransform(
        `perspective(${perspective}px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`
      );
      if (glare) setGlarePos({ x: px * 100, y: py * 100 });
    },
    [disabled, max, perspective, glare]
  );

  const onLeave = useCallback(() => {
    setTransform("");
    setGlarePos(null);
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={disabled ? undefined : onMove}
      onPointerLeave={disabled ? undefined : onLeave}
      className={className}
      style={{
        ...style,
        transform: disabled ? undefined : transform || undefined,
        transformStyle: disabled ? undefined : "preserve-3d",
        transition: disabled
          ? undefined
          : transform
            ? "transform 80ms linear"
            : "transform 320ms var(--ease-out)",
        willChange: disabled ? undefined : "transform",
        position: style?.position ?? "relative",
      }}
    >
      {children}
      {glare && glarePos && !disabled && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.22), transparent 45%)`,
            mixBlendMode: "screen",
            zIndex: 5,
            transition: "opacity 120ms linear",
          }}
        />
      )}
    </div>
  );
}
