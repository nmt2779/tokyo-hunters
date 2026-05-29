"use client";

import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import { Brackets, Kanji, Label } from "../wireframe-primitives";

const BEATS = [
  ["DROP",     "20 teams · 20 isolated zones · loot basics safely", "落"],
  ["LOOT",     "scour your zone for weapons, mods, currency",        "拾"],
  ["UPGRADE",  "install cyberware at street terminals",              "改"],
  ["CONVERGE", "barriers fall · all squads enter open zone",         "集"],
  ["FIGHT",    "premium loot · cyber-shards · contested",            "戦"],
  ["SURVIVE",  "shrinking neon zone, last team wins",                "勝"],
] as const;

const SEGMENTS = BEATS.length;
const DEG_PER_STEP = 360 / SEGMENTS; // 60°
const POS = [0, 60, 120, 180, 240, 300] as const;

function BeatRow({
  i,
  name,
  desc,
  kanji,
  active,
}: {
  i: number;
  name: string;
  desc: string;
  kanji: string;
  active: boolean;
}) {
  return (
    <div className={`match-loop-row${active ? " is-active" : ""}`}>
      <span className="match-loop-row-num" aria-hidden>
        0{i + 1}
      </span>
      <Kanji size="huge" accent={active}>
        {kanji}
      </Kanji>
      <div className="match-loop-row-text">
        <div className="match-loop-row-name">{name}</div>
        <div className="match-loop-row-desc">{desc}</div>
      </div>
      <span className="match-loop-row-tag" aria-hidden>
        {active ? "▸ NOW" : ""}
      </span>
    </div>
  );
}

function StaticFallback() {
  return (
    <div className="match-loop-grid">
      <div className="match-loop-rail">
        <div className="match-loop-list">
          {BEATS.map(([name, desc, k], i) => (
            <BeatRow
              key={name}
              i={i}
              name={name}
              desc={desc}
              kanji={k}
              active={false}
            />
          ))}
        </div>
      </div>
      <LoopDiagram active={-1} rotateDeg={0} />
    </div>
  );
}

function LoopDiagram({ active, rotateDeg }: { active: number; rotateDeg: number }) {
  return (
    <div className="box dark match-loop-diagram" style={{ position: "relative", overflow: "hidden", aspectRatio: "1 / 1", maxHeight: "min(620px, 70vh)", width: "100%" }}>
      <Brackets />
      <Label style={{ position: "absolute", top: 14, left: 16, zIndex: 2 }}>FIG.04 · THE LOOP</Label>
      <svg
        viewBox="0 0 400 400"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          padding: 30,
        }}
      >
        {/* Rotating ring with markers */}
        <g
          style={{
            transform: `rotate(${rotateDeg}deg)`,
            transformOrigin: "200px 200px",
            transition: "transform 480ms var(--ease-out)",
          }}
        >
          <circle cx="200" cy="200" r="150" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="#4a5159" strokeWidth="1" />
          {POS.map((deg, i) => {
            const r = 150;
            const x = 200 + r * Math.cos((deg - 90) * (Math.PI / 180));
            const y = 200 + r * Math.sin((deg - 90) * (Math.PI / 180));
            const isActive = i === active;
            const labels = ["DROP", "LOOT", "UPGRADE", "CONVERGE", "FIGHT", "SURVIVE"];
            return (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r={isActive ? 30 : 20}
                  fill={isActive ? "#fff" : "var(--accent)"}
                  stroke={isActive ? "var(--accent)" : "#fff"}
                  strokeWidth="2"
                  style={{ transition: "r 320ms var(--ease-out), fill 320ms var(--ease-out)" }}
                />
                {/* Counter-rotate text so labels stay upright */}
                <g style={{ transform: `rotate(${-rotateDeg}deg)`, transformOrigin: `${x}px ${y}px`, transition: "transform 480ms var(--ease-out)" }}>
                  <text
                    x={x}
                    y={y + 4}
                    textAnchor="middle"
                    fill={isActive ? "var(--accent)" : "#fff"}
                    fontFamily="var(--font-mono)"
                    fontSize="11"
                    fontWeight="700"
                  >
                    {i + 1}
                  </text>
                  <text
                    x={x}
                    y={y + 44}
                    textAnchor="middle"
                    fill={isActive ? "var(--accent)" : "#cfd3da"}
                    fontFamily="var(--font-mono)"
                    fontSize="10"
                    letterSpacing="2"
                  >
                    {labels[i]}
                  </text>
                </g>
              </g>
            );
          })}
        </g>
        {/* Static center copy */}
        <text x="200" y="195" textAnchor="middle" fill="var(--paper)" fontFamily="var(--font-hand)" fontSize="36" fontWeight="700">30 MIN</text>
        <text x="200" y="222" textAnchor="middle" fill="#9aa1aa" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2">PER MATCH</text>
      </svg>
    </div>
  );
}

export function MatchLoopScene() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Active beat snaps the moment scroll crosses a segment boundary.
  // Visual smoothing comes from CSS transitions on rotate/translate,
  // not from a spring on scroll progress (which would add input lag).
  const [active, setActive] = useState(0);
  const indexMv = useTransform(scrollYProgress, (p) =>
    Math.min(SEGMENTS - 1, Math.max(0, Math.floor(p * SEGMENTS)))
  );
  useMotionValueEvent(indexMv, "change", (v) => setActive(v));

  if (reduced) return <StaticFallback />;

  const rotateDeg = -active * DEG_PER_STEP;

  // Outer height: SEGMENTS × 80vh gives ~80vh of scroll per beat. Total pin
  // distance = SEGMENTS*80vh − 100vh ≈ 380vh, comfortable on a laptop.
  return (
    <div ref={ref} style={{ position: "relative", height: `${SEGMENTS * 80}vh` }}>
      <div className="match-loop-pin">
        <div className="match-loop-grid">
          {/* LEFT: full vertical step list. Active beat is highlighted in
              place — no translate, all 6 always visible. */}
          <div className="match-loop-rail">
            <div className="match-loop-list">
              {BEATS.map(([name, desc, k], i) => (
                <BeatRow
                  key={name}
                  i={i}
                  name={name}
                  desc={desc}
                  kanji={k}
                  active={i === active}
                />
              ))}
            </div>
            <div className="match-loop-progress">
              <span style={{ color: "var(--accent)" }}>
                STEP {String(active + 1).padStart(2, "0")}
              </span>
              <span style={{ color: "var(--muted-dark)" }}>
                {" "}/ {String(SEGMENTS).padStart(2, "0")}
              </span>
              <div className="match-loop-progress-bar">
                <div
                  className="match-loop-progress-fill"
                  style={{
                    width: `${((active + 1) / SEGMENTS) * 100}%`,
                    transition: "width 480ms var(--ease-out)",
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: 10,
                  color: "var(--muted-dark)",
                  letterSpacing: "0.14em",
                }}
              >
                SCROLL TO ADVANCE
              </span>
            </div>
          </div>

          {/* RIGHT: rotating diagram */}
          <LoopDiagram active={active} rotateDeg={rotateDeg} />
        </div>
      </div>
    </div>
  );
}
