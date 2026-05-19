"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import type { CSSProperties, ReactNode } from "react";

type ParallaxKanjiProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Max translateY in pixels at full scroll. */
  range?: number;
};

/**
 * Wraps a decorative element with a small parallax y based on window scroll.
 * Capped to `range` (default 80) so it never competes with foreground copy.
 */
export function ParallaxKanji({
  children,
  className,
  style,
  range = 80,
}: ParallaxKanjiProps) {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -range], { clamp: true });

  if (reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div className={className} style={{ ...style, y }}>
      {children}
    </motion.div>
  );
}
