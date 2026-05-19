"use client";

import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { STAGGER } from "../../_lib/motion";

type StaggerProps = {
  children: ReactNode;
  gap?: number;
  delayStart?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Clone direct Reveal children and inject `delay = delayStart + index * gap`.
 * Each child must accept a `delay` prop (Reveal does).
 */
export function Stagger({
  children,
  gap = STAGGER.base,
  delayStart = 0,
  className,
  style,
}: StaggerProps) {
  const items = Children.toArray(children);
  return (
    <div className={className} style={style}>
      {items.map((child, i) => {
        if (!isValidElement(child)) return child;
        const existing = (child.props as { delay?: number }).delay ?? 0;
        return cloneElement(child as React.ReactElement<{ delay?: number }>, {
          delay: existing + delayStart + i * gap,
        });
      })}
    </div>
  );
}
