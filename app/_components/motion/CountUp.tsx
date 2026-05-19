"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  motion,
} from "motion/react";
import { useEffect, useRef } from "react";
import { DURATION, EASE } from "../../_lib/motion";

type CountUpProps = {
  to: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
  format?: (n: number) => string;
};

const formatNumber = (n: number, decimals: number) =>
  decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-US");

export function CountUp({
  to,
  suffix = "",
  decimals = 0,
  duration = DURATION.slow * 2,
  delay = 0,
  format,
}: CountUpProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  // Server renders final value to avoid hydration mismatch; client resets to 0
  // in the effect below before animating.
  const value = useMotionValue(to);
  const display = useTransform(value, (v) =>
    format ? format(v) : `${formatNumber(v, decimals)}${suffix}`
  );

  useEffect(() => {
    if (reduced) {
      value.set(to);
      return;
    }
    value.set(0);
  }, [reduced, to, value]);

  useEffect(() => {
    if (reduced || !inView) return;
    const controls = animate(value, to, {
      duration,
      delay,
      ease: EASE.out,
    });
    return () => controls.stop();
  }, [inView, reduced, to, duration, delay, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
