"use client";

import Image from "next/image";
import { Tilt3D } from "../motion/Tilt3D";

export const MediaThumb = ({
  src,
  label,
  alt,
  href,
  aspectRatio = "1 / 1",
}: {
  src: string;
  label: string;
  alt?: string;
  href?: string;
  aspectRatio?: string;
}) => {
  const inner = (
    <>
      <Image
        src={src}
        alt={alt ?? label}
        fill
        sizes="(max-width: 820px) 50vw, 240px"
        style={{ objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 8,
          left: 8,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: "var(--paper)",
          letterSpacing: "0.14em",
          background: "rgba(0,0,0,0.65)",
          padding: "3px 7px",
          zIndex: 2,
        }}
      >
        {label}
      </div>
    </>
  );

  const wrapStyle = {
    position: "relative" as const,
    width: "100%",
    aspectRatio,
    border: "1.5px solid var(--border-dark)",
    overflow: "hidden",
    textDecoration: "none",
    display: "block",
  };

  if (href) {
    return (
      <Tilt3D max={5} glare>
        <a href={href} style={wrapStyle} aria-label={label}>
          {inner}
        </a>
      </Tilt3D>
    );
  }
  return (
    <Tilt3D max={5} glare>
      <div style={wrapStyle}>{inner}</div>
    </Tilt3D>
  );
};
