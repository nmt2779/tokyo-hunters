import type { CSSProperties } from "react";

type SkeletonProps = {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  className?: string;
  style?: CSSProperties;
};

export function Skeleton({
  width = "100%",
  height = 16,
  radius = 4,
  className,
  style,
}: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={`th-skeleton ${className ?? ""}`}
      style={{ width, height, borderRadius: radius, ...style }}
    />
  );
}
