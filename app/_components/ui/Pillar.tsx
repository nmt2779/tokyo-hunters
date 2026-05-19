import Image from "next/image";
import { Kanji, Lines } from "../wireframe-primitives";
import type { ReactNode } from "react";

export const Pillar = ({
  number,
  title,
  kanji,
  description,
  reverse,
  imageSrc,
  imageAlt,
  children,
}: {
  number: string;
  title: string;
  kanji: string;
  description: string;
  reverse?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
}) => (
  <div className={`pillar ${reverse ? "reverse" : ""}`}>
    <div className="pillar-art">
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 820px) 100vw, 380px"
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(10,13,18,0.15) 0%, rgba(10,13,18,0.55) 100%)",
              pointerEvents: "none",
            }}
          />
        </>
      )}
      <Kanji
        size="huge"
        muted
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--accent)",
          opacity: imageSrc ? 0.85 : 0.5,
          fontSize: "clamp(80px, 11vw, 160px)",
          textShadow: imageSrc ? "0 4px 24px rgba(0,0,0,0.6)" : undefined,
          pointerEvents: "none",
        }}
      >
        {kanji}
      </Kanji>
    </div>
    <div className="pillar-body">
      <div className="row" style={{ alignItems: "baseline", gap: 14 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.18em" }}>
          PILLAR · {number}
        </span>
        <div style={{ flex: 1, height: 1, background: "var(--border-dark)" }} />
      </div>
      <h3 className="pillar-title">{title}</h3>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dark)", letterSpacing: "0.06em", marginBottom: 12 }}>
        {description}
      </div>
      {children ?? <Lines count={3} widths={["100%", "92%", "70%"]} />}
    </div>
  </div>
);
