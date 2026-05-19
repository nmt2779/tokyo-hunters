"use client";

import { useEffect, useState } from "react";

const LAUNCH_ISO = "2026-06-15T00:00:00+09:00"; // Tokyo midnight

const calc = (target: number) => {
  const diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 86_400_000);
  const h = Math.floor((diff % 86_400_000) / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1_000);
  return { d, h, m, s, done: diff === 0 };
};

const Cell = ({ n, label }: { n: number; label: string }) => (
  <div style={{ minWidth: 72 }}>
    <div
      style={{
        fontFamily: "var(--font-hand)",
        fontSize: "clamp(40px, 6vw, 64px)",
        fontWeight: 700,
        color: "var(--accent)",
        lineHeight: 1,
      }}
    >
      {String(n).padStart(2, "0")}
    </div>
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        color: "var(--muted-dark)",
        letterSpacing: "0.18em",
        marginTop: 4,
      }}
    >
      {label}
    </div>
  </div>
);

export const Countdown = ({ launchIso = LAUNCH_ISO }: { launchIso?: string }) => {
  const target = new Date(launchIso).getTime();
  // First render (server + client first paint) must match — use zeros.
  // Real countdown kicks in after mount.
  const [t, setT] = useState<{ d: number; h: number; m: number; s: number; done: boolean } | null>(null);

  useEffect(() => {
    setT(calc(target));
    const id = setInterval(() => setT(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (t?.done) {
    return (
      <div
        style={{
          fontFamily: "var(--font-hand)",
          fontSize: "clamp(40px, 6vw, 64px)",
          color: "var(--accent)",
          fontWeight: 700,
        }}
      >
        DROP IS LIVE.
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "clamp(16px, 3vw, 36px)",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
      // Hide the placeholder zeros from screen readers until the real value is set.
      aria-busy={t === null}
    >
      <Cell n={t?.d ?? 0} label="DAYS" />
      <Cell n={t?.h ?? 0} label="HOURS" />
      <Cell n={t?.m ?? 0} label="MIN" />
      <Cell n={t?.s ?? 0} label="SEC" />
    </div>
  );
};

export const LAUNCH_DATE = LAUNCH_ISO;
