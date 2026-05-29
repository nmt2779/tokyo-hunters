"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import type { CSSProperties, ReactNode } from "react";

type Axis = "x" | "y";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Max translate in pixels at full scroll distance. Negative scrolls up/left. */
  range?: number;
  /** Scroll distance (px) over which the full range plays. */
  distance?: number;
  axis?: Axis;
};

/**
 * Generic scroll-driven parallax. Used standalone or wrapped by ParallaxKanji.
 */
export function ParallaxLayer({
  children,
  className,
  style,
  range = -80,
  distance = 600,
  axis = "y",
}: ParallaxLayerProps) {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const offset = useTransform(scrollY, [0, distance], [0, range], {
    clamp: true,
  });

  if (reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const motionStyle: CSSProperties & Record<Axis, typeof offset> =
    axis === "y"
      ? { ...style, x: 0 as never, y: offset as never }
      : { ...style, x: offset as never, y: 0 as never };

  return (
    <motion.div className={className} style={motionStyle}>
      {children}
    </motion.div>
  );
}
