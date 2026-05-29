"use client";

import type { CSSProperties, ReactNode } from "react";
import { ParallaxLayer } from "./ParallaxLayer";

type ParallaxKanjiProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Max translateY upwards (px) at full scroll. Positive = drifts up. */
  range?: number;
};

/**
 * Decorative kanji that drifts upward on scroll. Thin wrapper around
 * ParallaxLayer keeping the legacy "positive range = up" API.
 */
export function ParallaxKanji({
  children,
  className,
  style,
  range = 80,
}: ParallaxKanjiProps) {
  return (
    <ParallaxLayer
      className={className}
      style={style}
      range={-Math.abs(range)}
      distance={600}
      axis="y"
    >
      {children}
    </ParallaxLayer>
  );
}
