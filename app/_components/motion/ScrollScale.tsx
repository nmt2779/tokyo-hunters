"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type CSSProperties, type ReactNode } from "react";

type ScrollScaleProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Scale at scroll start → end. */
  scale?: [number, number];
  /** Blur (px) at scroll start → end. */
  blur?: [number, number];
  /** Opacity at scroll start → end. */
  opacity?: [number, number];
};

/**
 * Element scales / blurs / fades as it leaves the viewport on scroll.
 * Anchor: own element. Range: from "start start" to "end start".
 */
export function ScrollScale({
  children,
  className,
  style,
  scale = [1, 1.18],
  blur = [0, 6],
  opacity = [1, 0],
}: ScrollScaleProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const s = useTransform(scrollYProgress, [0, 1], scale, { clamp: true });
  const b = useTransform(
    scrollYProgress,
    [0, 1],
    [blur[0], blur[1]],
    { clamp: true }
  );
  const o = useTransform(scrollYProgress, [0, 1], opacity, { clamp: true });
  const filter = useTransform(b, (v) => `blur(${v}px)`);

  if (reduced) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, scale: s, filter, opacity: o, willChange: "transform, filter" }}
    >
      {children}
    </motion.div>
  );
}
