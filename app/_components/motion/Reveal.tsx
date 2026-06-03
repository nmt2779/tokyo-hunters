"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { createElement, type ComponentProps, type CSSProperties, type ElementType, type ReactNode } from "react";
import { DURATION, EASE, REVEAL_DISTANCE } from "../../_lib/motion";

type Direction = "up" | "down" | "left" | "right" | "none";

const motionComponents = {
  a: motion.a,
  div: motion.div,
} satisfies Record<string, ElementType>;

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":    return { x: 0, y: distance };
    case "down":  return { x: 0, y: -distance };
    case "left":  return { x: distance, y: 0 };
    case "right": return { x: -distance, y: 0 };
    default:      return { x: 0, y: 0 };
  }
};

type RevealOwnProps = {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
};

type RevealElement = keyof typeof motionComponents;

type RevealProps<T extends RevealElement> = RevealOwnProps & {
  as?: T;
} & Omit<ComponentProps<T>, keyof RevealOwnProps | "as">;

export function Reveal<T extends RevealElement = "div">({
  children,
  as,
  direction = "up",
  distance = REVEAL_DISTANCE,
  delay = 0,
  duration = DURATION.base,
  amount = 0.2,
  once = true,
  className,
  style,
  ...rest
}: RevealProps<T>) {
  const reduced = useReducedMotion();
  const component = as ?? "div";

  if (reduced) {
    return createElement(
      component,
      { className, style, ...rest },
      children
    );
  }

  const off = offset(direction, distance);
  const variants: Variants = {
    hidden: { opacity: 0, x: off.x, y: off.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: EASE.out },
    },
  };

  const MotionComponent = motionComponents[component] as ElementType;

  return (
    <MotionComponent
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
