import { Kanji, Lines } from "../wireframe-primitives";
import type { ReactNode } from "react";

export const Pillar = ({
  number,
  title,
  kanji,
  description,
  reverse,
  children,
}: {
  number: string;
  title: string;
  kanji: string;
  description: string;
  reverse?: boolean;
  children?: ReactNode;
}) => (
  <div className={`pillar ${reverse ? "reverse" : ""}`}>
    <div className="pillar-art">
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
          opacity: 0.5,
          fontSize: 140,
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
