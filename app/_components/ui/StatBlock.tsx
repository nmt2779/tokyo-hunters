import type { ReactNode } from "react";

export const StatBlock = ({
  value,
  label,
}: {
  value: ReactNode;
  label: string;
}) => (
  <div className="stat-block">
    <div
      style={{
        fontFamily: "var(--font-hand)",
        fontSize: "clamp(24px, 3.2vw, 36px)",
        color: "var(--accent)",
        fontWeight: 700,
        lineHeight: 1,
      }}
    >
      {value}
    </div>
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--muted-dark)",
        letterSpacing: "0.14em",
        marginTop: 4,
      }}
    >
      {label}
    </div>
  </div>
);
