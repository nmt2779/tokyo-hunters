"use client";

import { motion, useReducedMotion } from "motion/react";
import { createElement, type CSSProperties, type ElementType, type ReactNode } from "react";
import { DURATION, EASE } from "../../_lib/motion";

type MountRevealProps = {
  children: ReactNode;
  as?: ElementType;
  y?: number;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * One-shot entrance animation that fires on mount (not whileInView).
 * Use for above-the-fold hero elements where the viewer is already looking.
 */
export function MountReveal({
  children,
  as = "div",
  y = 12,
  delay = 0,
  duration = DURATION.base,
  className,
  style,
}: MountRevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return createElement(as, { className, style }, children);
  }

  const MotionComponent = motion.create(as);

  return (
    <MotionComponent
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: EASE.out }}
    >
      {children}
    </MotionComponent>
  );
}
