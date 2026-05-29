"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type MagneticProps = {
  children: ReactNode;
  /** Fraction of cursor offset to apply (0–1). */
  strength?: number;
  /** Max pull in px. */
  max?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Pulls wrapped element toward the cursor on hover.
 * Wrap a single button or CTA. Disabled on touch + reduced-motion.
 */
export function Magnetic({
  children,
  strength = 0.3,
  max = 12,
  className,
  style,
}: MagneticProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [coarse, setCoarse] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

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
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const pullX = Math.max(-max, Math.min(max, dx * strength));
      const pullY = Math.max(-max, Math.min(max, dy * strength));
      x.set(pullX);
      y.set(pullY);
    },
    [disabled, max, strength, x, y]
  );

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  if (disabled) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={className}
      style={{ ...style, x: sx, y: sy, display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}
