/* eslint-disable react/jsx-no-comment-textnodes, react/no-unescaped-entities */
/* th-pages-1.jsx — Game, Map, Hunters list, Hunter detail */

import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import {
  Brackets,
  Btn,
  Footer,
  HeroCTAs,
  Img,
  Kanji,
  Label,
  Lines,
  SectionBreak,
  SectionHead,
  Tag,
  TopNav,
} from "./wireframe-primitives";
import { HUNTERS } from "./wireframe-home";
import { ActCard } from "./ui/ActCard";
import { HunterCard } from "./ui/HunterCard";

export const PageGame = () => (
  <main className="th-canvas">
    <TopNav active="game" />

    {/* Page header */}
    <section className="th-section flat" style={{ paddingBottom: "clamp(24px, 3vw, 40px)" }}>
      <div className="th-sec-head">
        <div className="num">// 01 / THE GAME</div>
        <div className="rule" />
        <Kanji size="md" accent>戦闘</Kanji>
      </div>
      <h1 className="h-hero" style={{ fontSize: "clamp(48px, 9vw, 110px)" }}>HOW IT <span className="accent">PLAYS.</span></h1>
      <div style={{ maxWidth: 720, marginTop: 14, fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--text-dark)", lineHeight: 1.4 }}>
        100 hunters. 20 squads. 30 minutes. One neon city, two phases, no second place.
      </div>
    </section>

    {/* Match anatomy */}
    <SectionBreak ch="02" title="MATCH ANATOMY" jp="試合構造" />
    <section className="th-section">
      <SectionHead num="02 / 30-MIN MATCH" jp="三十分" title="A MATCH IN" titleAccent="THREE ACTS." />
      <div className="grid-3">
        {[
          { ph: "ACT I",   t: "SPAWN & GEAR",    time: "0:00 – 8:00",   k: "拾",
            d: "Your 5-stack spawns in 1 of 20 mirrored zones. Walled off. No PvP. Loot baseline gear and credits at your own pace." },
          { ph: "ACT II",  t: "TRAVERSE",        time: "8:00 – 22:00",  k: "路",
            d: "Walls fall. Push through HIGHWAY (long sightlines, DMRs) then ARCADE (CQB, shotguns). Loot scales. First blood." },
          { ph: "ACT III", t: "CENTER ARENA",    time: "22:00 – 30:00", k: "中",
            d: "Inner ring opens. Exotic loot only. 4 cyberware terminals contested. Neon ring shrinks every 90s. Average finish: 27:12." },
        ].map((a) => (
          <ActCard key={a.ph} phase={a.ph} title={a.t} time={a.time} kanji={a.k} description={a.d} />
        ))}
      </div>

      {/* timeline */}
      <div className="box dark" style={{ padding: 22, marginTop: 24, position: "relative" }}>
        <Label accent>FIG. A · MATCH TIMELINE</Label>
        <svg viewBox="0 0 1000 160" style={{ width: "100%", height: "auto", marginTop: 16 }}>
          <line x1="40" y1="100" x2="960" y2="100" stroke="#4a5159" strokeWidth="1" />
          {/* Act I band */}
          <rect x="40"  y="92" width="246" height="16" fill="#0f1318" stroke="var(--accent)" strokeWidth="1.5" />
          {/* Act II band */}
          <rect x="286" y="92" width="386" height="16" fill="var(--accent)" opacity="0.2" stroke="var(--accent)" strokeWidth="1.5" />
          {/* Act III band */}
          <rect x="672" y="92" width="288" height="16" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1.5" />
          {[0, 4, 8, 12, 16, 20, 24, 28, 30].map((t, i) => {
            const x = 40 + (t / 30) * 920;
            return (
              <g key={i}>
                <line x1={x} y1="96" x2={x} y2="112" stroke="#9aa1aa" strokeWidth="1" />
                <text x={x} y="130" textAnchor="middle" fill="#cfd3da" fontFamily="var(--font-mono)" fontSize="10">{t}:00</text>
              </g>
            );
          })}
          <text x="160" y="78" textAnchor="middle" fill="var(--paper)" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2">ACT I · DROP</text>
          <text x="478" y="78" textAnchor="middle" fill="var(--paper)" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2">ACT II · CONVERGE</text>
          <text x="816" y="78" textAnchor="middle" fill="#fff"          fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2">ACT III · FINAL</text>
          {/* event markers */}
          <g>
            <circle cx="286" cy="100" r="5" fill="var(--accent)" />
            <text x="286" y="44" textAnchor="middle" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">WALLS DROP</text>
            <line x1="286" y1="48" x2="286" y2="92" stroke="var(--accent)" strokeDasharray="2 2" />
          </g>
          <g>
            <circle cx="672" cy="100" r="5" fill="var(--accent)" />
            <text x="672" y="44" textAnchor="middle" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">RING START</text>
            <line x1="672" y1="48" x2="672" y2="92" stroke="var(--accent)" strokeDasharray="2 2" />
          </g>
        </svg>
      </div>
    </section>

    {/* Game modes */}
    <SectionBreak ch="03" title="GAME MODES" jp="競技種別" />
    <section className="th-section alt">
      <SectionHead num="03 / MODES" jp="種別" title="FOUR WAYS" titleAccent="TO HUNT." />
      <div className="grid-4">
        {[
          ["QUICKPLAY",  "casual · solo/duo/squad", "標準",  "RANKED OFF · skill-based MMR"],
          ["RANKED",     "ranked squad · 5-stack",  "段位",  "10 tiers · seasonal · soft reset"],
          ["GAUNTLET",   "limited time mode",        "鬼",   "no cyberware · katana only"],
          ["TRAINING",   "tutorial range",           "練",   "weapon test · ability practice"],
        ].map((m, i) => (
          <div key={i} className="box dark" style={{ padding: 18 }}>
            <Img label={m[0]} style={{ aspectRatio: "4 / 3", marginBottom: 14, position: "relative" }}>
              <Kanji size="xl" accent style={{ position: "absolute", top: 50, left: 50 }}>{m[2]}</Kanji>
            </Img>
            <div style={{ fontFamily: "var(--font-hand)", fontSize: 28, fontWeight: 700, color: "var(--paper)" }}>{m[0]}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.12em", marginTop: 2 }}>{m[1]}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dark)", marginTop: 8, lineHeight: 1.6 }}>{m[3]}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Combat systems */}
    <SectionBreak ch="04" title="COMBAT SYSTEMS" jp="戦闘機構" />
    <section className="th-section">
      <SectionHead num="04 / SYSTEMS" jp="機構" title="WHAT MAKES" titleAccent="IT TICK." />
      <div className="grid-3">
        {[
          ["GUNPLAY",   "tactical TTK · ~0.4s headshot", "撃"],
          ["MOVEMENT",  "wall-run · phase dash · slide", "走"],
          ["ABILITIES", "4 per hunter · cooldown-gated", "技"],
          ["CYBERWARE", "install mid-match · 40+ mods",  "改"],
          ["LOOT",      "4-rarity tier · world drops",   "拾"],
          ["EXTRACTION","Open Zone vaults · risk/reward","金"],
        ].map((s, i) => (
          <div key={i} className="box dark" style={{ padding: 18 }}>
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <Label accent>SYS · 0{i+1}</Label>
              <Kanji size="lg" accent>{s[2]}</Kanji>
            </div>
            <div style={{ fontFamily: "var(--font-hand)", fontSize: 30, fontWeight: 700, color: "var(--paper)", marginTop: 8 }}>{s[0]}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dark)", letterSpacing: "0.08em", marginTop: 6 }}>{s[1]}</div>
            <hr className="hr dashed" style={{ margin: "12px 0" }} />
            <Lines count={2} widths={["100%", "70%"]} />
          </div>
        ))}
      </div>
    </section>

    {/* Spec / requirements */}
    <SectionBreak ch="05" title="SPECS" jp="動作環境" />
    <section className="th-section alt">
      <SectionHead num="05 / TECHNICAL" jp="技術" title="SYSTEM" titleAccent="REQUIREMENTS." />
      <div className="grid-2">
        {[
          ["MINIMUM",     "OS · Windows 11", "CPU · Ryzen 5 3600 / i5-10400", "GPU · RTX 2060 / RX 5700", "RAM · 16 GB", "STORAGE · 80 GB SSD"],
          ["RECOMMENDED", "OS · Windows 11", "CPU · Ryzen 7 7700X / i7-13700", "GPU · RTX 4070 / RX 7800XT", "RAM · 32 GB", "STORAGE · 100 GB NVMe"],
        ].map((s, i) => (
          <div key={i} className="box dark" style={{ padding: 22 }}>
            <Tag variant={i === 1 ? "accent" : "ghost-dark"}>{s[0]}</Tag>
            <div className="col" style={{ gap: 10, marginTop: 16 }}>
              {s.slice(1).map((row, j) => (
                <div key={j} className="row" style={{ alignItems: "baseline", justifyContent: "space-between", paddingBottom: 8, borderBottom: "1px dashed var(--border-dark)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dark)", letterSpacing: "0.06em" }}>{row}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="th-section" style={{ textAlign: "center", background: "#000" }}>
      <h2 className="th-sec-title" style={{ fontSize: "clamp(40px, 7vw, 80px)" }}>READY TO <span className="accent">DROP IN?</span></h2>
      <HeroCTAs />
    </section>

    <Footer />
  </main>
);

/* ---------- MAP PAGE ---------- */

export const PageMap = () => {
  const districts = [
    { id: "shin", k: "新", name: "SHINJUKU", tier: "I", loot: "BASIC", risk: "SAFE" },
    { id: "shib", k: "渋", name: "SHIBUYA",  tier: "I", loot: "BASIC", risk: "SAFE" },
    { id: "akib", k: "秋", name: "AKIHABARA", tier: "I", loot: "BASIC", risk: "SAFE" },
    { id: "harj", k: "原", name: "HARAJUKU", tier: "I", loot: "BASIC", risk: "SAFE" },
    { id: "ueno", k: "上", name: "UENO",     tier: "I", loot: "BASIC", risk: "SAFE" },
    { id: "asak", k: "浅", name: "ASAKUSA",  tier: "I", loot: "BASIC", risk: "SAFE" },
    { id: "ginz", k: "銀", name: "GINZA",    tier: "II", loot: "PREMIUM", risk: "HOT" },
    { id: "rop",  k: "六", name: "ROPPONGI", tier: "II", loot: "PREMIUM", risk: "HOT" },
    { id: "od",   k: "台", name: "ODAIBA",   tier: "II", loot: "PREMIUM", risk: "HOT" },
    { id: "chiy", k: "千", name: "CHIYODA",  tier: "III", loot: "EXOTIC", risk: "DEATH" },
  ];

  return (
    <main className="th-canvas">
      <TopNav active="map" />

      <section className="th-section flat" style={{ paddingBottom: "clamp(24px, 3vw, 40px)" }}>
        <div className="th-sec-head">
          <div className="num">// 01 / THE MAP</div>
          <div className="rule" />
          <Kanji size="md" accent>地図</Kanji>
        </div>
        <h1 className="h-hero" style={{ fontSize: "clamp(48px, 9vw, 110px)" }}>NEW <span className="accent">TOKYO.</span></h1>
        <div style={{ maxWidth: 720, marginTop: 14, fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--text-dark)", lineHeight: 1.4 }}>
          12 km² · 20 spawn zones · 2 traverse belts · 1 center arena. No parachutes. No random landings.
        </div>
      </section>

      <SectionBreak ch="02" title="THE MAP" jp="戦場" />

      {/* big map viewer */}
      <section className="th-section">
        <div className="split image-r">
          <div>
            <SectionHead num="02 / OVERVIEW" jp="概観" title="THE CITY," titleAccent="DIVIDED." />
            <Lines count={3} widths={["100%", "92%", "70%"]} />
            <div className="col" style={{ gap: 8, marginTop: 22 }}>
              {[
                ["20", "spawn zones (Phase I · sealed, no PvP)"],
                ["2",  "traverse belts (Phase II · highway + arcade)"],
                ["1",  "center arena (Phase III · final circle)"],
                ["10", "districts across 4 tiers"],
                ["48", "named POIs · 12 cyberware terminals"],
              ].map((s, i) => (
                <div key={i} className="row" style={{ alignItems: "baseline", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px dashed var(--border-dark)" }}>
                  <span style={{ fontFamily: "var(--font-hand)", fontSize: 32, fontWeight: 700, color: "var(--accent)", minWidth: 80 }}>{s[0]}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dark)", textAlign: "right", flex: 1 }}>{s[1]}</span>
                </div>
              ))}
            </div>
          </div>
          {/* MAP SVG */}
          <div className="box dark" style={{ padding: 20, position: "relative", aspectRatio: "1 / 1" }}>
            <Brackets />
            <Label accent style={{ position: "absolute", top: 14, left: 16 }}>FIG. 01 · TOKYO GRID</Label>
            <Label style={{ position: "absolute", top: 14, right: 16 }}>SCALE 1:50K</Label>
            <svg viewBox="0 0 500 500" style={{ width: "100%", height: "100%" }}>
              {/* compass */}
              <g transform="translate(440, 60)">
                <circle r="22" fill="none" stroke="#4a5159" strokeWidth="1"/>
                <text y="-30" textAnchor="middle" fill="var(--paper)" fontFamily="var(--font-mono)" fontSize="10">N</text>
                <line x1="0" y1="-18" x2="0" y2="18" stroke="var(--accent)" strokeWidth="1.5"/>
                <line x1="-18" y1="0" x2="18" y2="0" stroke="#4a5159" strokeWidth="1"/>
              </g>
              {/* grid */}
              {Array.from({length: 11}).map((_, i) => (
                <g key={i}>
                  <line x1={50 + i*40} y1="50" x2={50 + i*40} y2="450" stroke="#1f242a" strokeWidth="0.5" />
                  <line x1="50" y1={50 + i*40} x2="450" y2={50 + i*40} stroke="#1f242a" strokeWidth="0.5" />
                </g>
              ))}
              {/* 20 Phase-I zones around perimeter */}
              {Array.from({length: 20}).map((_, i) => {
                const ang = (i / 20) * Math.PI * 2 - Math.PI/2;
                const x = 250 + 170 * Math.cos(ang);
                const y = 250 + 170 * Math.sin(ang);
                return (
                  <g key={i}>
                    <rect x={x-16} y={y-16} width="32" height="32" fill="#0f1318" stroke="var(--accent)" strokeWidth="1" />
                    <text x={x} y={y+4} textAnchor="middle" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="9">{String(i+1).padStart(2,'0')}</text>
                  </g>
                );
              })}
              {/* traverse belt 1 — highway (outer) */}
              <circle cx="250" cy="250" r="135" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 5" opacity="0.45" />
              <text x="250" y="115" textAnchor="middle" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2">HIGHWAY 道</text>
              {/* traverse belt 2 — arcade (inner) */}
              <circle cx="250" cy="250" r="95" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.65" />
              <text x="250" y="155" textAnchor="middle" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2">ARCADE 街</text>
              {/* central arena */}
              <circle cx="250" cy="250" r="55" fill="var(--accent)" opacity="0.12" stroke="var(--accent)" strokeWidth="2" />
              <text x="250" y="246" textAnchor="middle" fill="var(--paper)" fontFamily="var(--font-hand)" fontSize="26" fontWeight="700">CENTER</text>
              <text x="250" y="268" textAnchor="middle" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2">中 · ARENA</text>
              {/* paths from spawn zones inward */}
              {Array.from({length: 20}).map((_, i) => {
                const ang = (i / 20) * Math.PI * 2 - Math.PI/2;
                const x1 = 250 + 154 * Math.cos(ang);
                const y1 = 250 + 154 * Math.sin(ang);
                const x2 = 250 + 60 * Math.cos(ang);
                const y2 = 250 + 60 * Math.sin(ang);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--accent)" strokeWidth="0.5" opacity="0.25" />;
              })}
            </svg>
            <Label style={{ position: "absolute", bottom: 14, left: 16, color: "var(--accent)" }}>■ PHASE I · 20 zones</Label>
            <Label style={{ position: "absolute", bottom: 14, right: 16, color: "var(--accent)" }}>◉ PHASE III · Center</Label>
          </div>
        </div>
      </section>

      {/* Phase explainer — the key mechanic */}
      <SectionBreak ch="03" title="THE THREE-PHASE LOOP" jp="三段階" />
      <section className="th-section alt">
        <SectionHead num="03 / MECHANIC" jp="仕組み" title="THREE PHASES." titleAccent="ZERO LUCK." />
        <div style={{ maxWidth: 760, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-dark)", lineHeight: 1.7, marginBottom: 32 }}>
          No parachutes. No "got third-party'd at drop." Twenty squads spawn in twenty mirrored zones,
          gear up safely, then push inward across two distinct combat belts before the final stand at center.
        </div>

        <div className="grid-3" style={{ alignItems: "stretch" }}>
          {/* Phase I — SPAWN */}
          <div className="box dark" style={{ padding: 24, position: "relative" }}>
            <Brackets />
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <Tag variant="accent">PHASE I · 0–8 MIN</Tag>
              <Kanji size="xl" accent>拾</Kanji>
            </div>
            <h3 style={{ fontFamily: "var(--font-hand)", fontSize: 38, color: "var(--paper)", margin: "12px 0 6px", lineHeight: 1 }}>SPAWN ZONES</h3>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.14em" }}>20 ZONES · 20 SQUADS · SEALED</div>
            <hr className="hr dashed" style={{ margin: "16px 0" }} />
            <ul style={{ margin: 0, paddingLeft: 18, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dark)", lineHeight: 1.8 }}>
              <li>Each zone is a sealed ~500m district</li>
              <li>Identical loot: SMGs, ARs, basic mods, meds</li>
              <li>No PvP — positioning + comms only</li>
              <li>1 cyberware terminal per zone</li>
              <li>Inner walls drop at the 8:00 mark</li>
            </ul>
          </div>

          {/* Phase II — TRAVERSE */}
          <div className="box dark" style={{ padding: 24, position: "relative" }}>
            <Brackets />
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <Tag variant="accent">PHASE II · 8–22 MIN</Tag>
              <Kanji size="xl" accent>路</Kanji>
            </div>
            <h3 style={{ fontFamily: "var(--font-hand)", fontSize: 38, color: "var(--paper)", margin: "12px 0 6px", lineHeight: 1 }}>TRAVERSE BELTS</h3>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.14em" }}>2 TERRAINS · WEAPON ROTATION · FIRST BLOOD</div>
            <hr className="hr dashed" style={{ margin: "16px 0" }} />
            <ul style={{ margin: 0, paddingLeft: 18, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dark)", lineHeight: 1.8, marginBottom: 12 }}>
              <li><span style={{ color: "var(--accent)" }}>HIGHWAY 道</span> — long sightlines, DMRs, vehicles, sparse loot</li>
              <li><span style={{ color: "var(--accent)" }}>ARCADE 街</span> — vertical alleys, shotguns + SMG, dense loot</li>
              <li>Belts unlock sequentially · weapon mods scale up</li>
              <li>Each belt has 2 cyberware terminals · contested</li>
              <li>Inner ring opens at the 22:00 mark</li>
            </ul>
          </div>

          {/* Phase III — CENTER */}
          <div className="box dark" style={{ padding: 24, position: "relative", borderColor: "var(--accent)", background: "linear-gradient(180deg, var(--bg-dark), #1a0a0e)" }}>
            <Brackets />
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <Tag variant="accent">PHASE III · 22–30 MIN</Tag>
              <Kanji size="xl" accent>中</Kanji>
            </div>
            <h3 style={{ fontFamily: "var(--font-hand)", fontSize: 38, color: "var(--paper)", margin: "12px 0 6px", lineHeight: 1 }}>CENTER ARENA</h3>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.14em" }}>1 ARENA · EXOTIC LOOT · FINAL CIRCLE</div>
            <hr className="hr dashed" style={{ margin: "16px 0" }} />
            <ul style={{ margin: 0, paddingLeft: 18, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dark)", lineHeight: 1.8 }}>
              <li>Survivors collapse into a single arena</li>
              <li>Exotic loot only: legendaries, cyber-shards</li>
              <li>4 cyberware terminals · contested 24/7</li>
              <li>Neon ring shrinks every 90s</li>
              <li>Last squad standing wins</li>
            </ul>
          </div>
        </div>
      </section>

      {/* District list */}
      <SectionBreak ch="04" title="DISTRICTS" jp="十区" />
      <section className="th-section">
        <SectionHead num="04 / DISTRICTS" jp="十区" title="TEN" titleAccent="DISTRICTS." />
        <div className="col" style={{ gap: 6 }}>
          {districts.map((d, i) => (
            <div key={d.id} className="dist-row">
              <span className="idx">{String(i+1).padStart(2,'0')}</span>
              <div className="row" style={{ alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <span className="jp" style={{ fontSize: 22 }}>{d.k}</span>
                <span className="name">{d.name}</span>
                <Tag variant={d.tier === "III" ? "accent" : "ghost-dark"} style={{ marginLeft: 8 }}>TIER {d.tier}</Tag>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.12em" }}>{d.loot}</span>
              <span className="tag-mini">{d.risk}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="th-section" style={{ textAlign: "center", background: "#000" }}>
        <h2 className="th-sec-title" style={{ fontSize: "clamp(40px, 7vw, 80px)" }}>SEE YOU IN <span className="accent">TOKYO.</span></h2>
        <HeroCTAs />
      </section>

      <Footer />
    </main>
  );
};

/* ---------- HUNTERS LIST ---------- */

export const PageHunters = () => (
  <main className="th-canvas">
    <TopNav active="hunters" />

    <section className="th-section flat" style={{ paddingBottom: "clamp(24px, 3vw, 40px)" }}>
      <div className="th-sec-head">
        <div className="num">// 01 / THE ROSTER</div>
        <div className="rule" />
        <Kanji size="md" accent>狩人</Kanji>
      </div>
      <h1 className="h-hero" style={{ fontSize: "clamp(48px, 9vw, 110px)" }}>TEN <span className="accent">HUNTERS.</span></h1>
      <div style={{ maxWidth: 720, marginTop: 14, fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--text-dark)", lineHeight: 1.4 }}>
        Pick your role. Learn the kit. Defend the city — or take it.
      </div>

      {/* filter bar */}
      <div className="row" style={{ alignItems: "center", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
        <Label>FILTER ·</Label>
        {["ALL · 10", "ASSAULT · 3", "RECON · 3", "SUPPORT · 2", "CONTROL · 2"].map((f, i) => (
          <Tag key={i} variant={i === 0 ? "accent" : "ghost-dark"}>{f}</Tag>
        ))}
        <span style={{ flex: 1 }} />
        <Label>SORT · NAME ▾</Label>
      </div>
    </section>

    <SectionBreak ch="02" title="ROSTER" jp="名簿" />

    <section className="th-section">
      <div className="grid-5">
        {HUNTERS.map((h, i) => (
          <HunterCard key={h.id} hunter={h} variant="list" index={i + 1} />
        ))}
      </div>
    </section>

    <SectionBreak ch="03" title="MEET" jp="鬼" />
    <section className="th-section alt">
      <SectionHead num="03 / SPOTLIGHT" jp="特集" title="NEW HUNTER." titleAccent="ZEN." />
      <div className="split image-r">
        <div>
          <Tag variant="accent">JUST RELEASED · SEASON 0</Tag>
          <div style={{ fontFamily: "var(--font-hand)", fontSize: 80, fontWeight: 700, color: "var(--paper)", lineHeight: 0.9, marginTop: 12 }}>ZEN</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.16em", marginTop: 6 }}>RECON · "THE TIME THAT REMEMBERS"</div>
          <hr className="hr accent" style={{ margin: "20px 0", width: 80, height: 2 }} />
          <Lines count={3} widths={["100%", "92%", "70%"]} />
          <Btn variant="primary" size="lg" href="/hunters/zen" style={{ marginTop: 22 }}>VIEW ZEN'S DOSSIER →</Btn>
        </div>
        <Img label="ZEN · KEY ART" style={{ minHeight: 420 }}>
          <Kanji size="huge" accent style={{ position: "absolute", top: 30, right: 30, opacity: 0.7, fontSize: "min(200px, 25vw)" }}>禅</Kanji>
        </Img>
      </div>
    </section>

    <Footer />
  </main>
);

/* ---------- HUNTER DETAIL ---------- */

export const PageHunterDetail = ({ id = "oni" }) => {
  const h = HUNTERS.find(x => x.id === id) || HUNTERS[1];
  const abilities = [
    { type: "PASSIVE",  key: "P", name: "BULWARK",       cd: "passive", d: "+25 hp overshield · refreshes 4s after no dmg taken. Always active.", k: "盾" },
    { type: "ACTIVE",   key: "E", name: "KINETIC WALL",  cd: "12s",     d: "Deploys 4m x 2m hard cover for 6s. Blocks bullets and abilities.", k: "壁" },
    { type: "ULTIMATE", key: "R", name: "FORTRESS",      cd: "180s",    d: "Dome shield 8s · allies inside take 0 dmg from ranged attacks.",    k: "塞" },
  ];

  return (
    <main className="th-canvas">
      <TopNav active="hunters" />

      {/* Hero of hunter */}
      <section className="th-section" style={{ background: "linear-gradient(180deg, #0a0d12, #1a0a0e 60%, #0a0d12)", paddingTop: "clamp(24px, 3vw, 36px)" }}>
        <div className="row" style={{ alignItems: "center", marginBottom: 20 }}>
          <Link href="/hunters" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)", letterSpacing: "0.14em", cursor: "pointer", textDecoration: "none" }}>← ROSTER</Link>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.14em" }}>02 / 10 · CONTROL</span>
        </div>
        <div className="split image-r">
          <div>
            <Kanji size="huge" accent style={{ fontSize: "min(180px, 22vw)", lineHeight: 0.9 }}>{h.k}</Kanji>
            <h1 className="h-hero" style={{ fontSize: "clamp(64px, 12vw, 160px)", marginTop: -8 }}>
              {h.name}
            </h1>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent)", letterSpacing: "0.18em", marginTop: 8 }}>"THE WALL THAT REMEMBERS"</div>
            <hr className="hr accent" style={{ margin: "20px 0", width: 80, height: 2 }} />
            <Lines count={3} widths={["100%", "92%", "70%"]} />
            <div className="row" style={{ gap: 12, marginTop: 22, flexWrap: "wrap" }}>
              <Btn variant="primary" size="lg" href="/game">► PLAY AS {h.name}</Btn>
              <Btn variant="dark" size="lg" href="/news" style={{ borderColor: "var(--paper)" }}>▶ ABILITY TRAILER</Btn>
            </div>
          </div>
          <div
            className="hero-media"
            style={{
              position: "relative",
              minHeight: 520,
              border: "1.5px solid var(--border-dark)",
              overflow: "hidden",
            }}
          >
            {h.imageSrc ? (
              <ViewTransition name={`hunter-portrait-${h.id}`} share="morph">
                <Image
                  src={h.imageSrc}
                  alt={`${h.name} — full portrait`}
                  fill
                  priority
                  sizes="(max-width: 820px) 100vw, 540px"
                  style={{ objectFit: "cover" }}
                />
              </ViewTransition>
            ) : (
              <Img label={`${h.name} · FULL PORTRAIT`} style={{ position: "absolute", inset: 0 }} />
            )}
            <Kanji size="huge" accent style={{ position: "absolute", top: 20, left: 20, opacity: 0.5, fontSize: "min(240px, 28vw)", pointerEvents: "none", zIndex: 2 }}>{h.k}</Kanji>
          </div>
        </div>
      </section>

      {/* Stats */}
      <SectionBreak ch="02" title="STATS" jp="性能" />
      <section className="th-section">
        <SectionHead num="02 / VITALS" jp="性能" title="THE" titleAccent="NUMBERS." />
        <div className="grid-4">
          {[
            ["HEALTH",    "250", "+50 shield"],
            ["MOBILITY",  "3 / 10", "slow, deliberate"],
            ["DIFFICULTY","2 / 5", "beginner friendly"],
            ["PICK RATE", "12.4%", "↑ 2.1% this week"],
          ].map((s, i) => (
            <div key={i} className="box dark" style={{ padding: 18 }}>
              <Label accent>{s[0]}</Label>
              <div style={{ fontFamily: "var(--font-hand)", fontSize: 48, fontWeight: 700, color: "var(--paper)", lineHeight: 1, marginTop: 8 }}>{s[1]}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em", marginTop: 6 }}>{s[2]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Abilities */}
      <SectionBreak ch="03" title="ABILITIES" jp="技能" />
      <section className="th-section alt">
        <SectionHead num="03 / KIT" jp="技" title="THE" titleAccent="KIT." />
        <div className="grid-3">
          {abilities.map((a, i) => (
            <div key={i} className="box dark" style={{ padding: 22, position: "relative", minHeight: 280, borderColor: a.type === "ULTIMATE" ? "var(--accent)" : "var(--border-dark)" }}>
              <Brackets />
              <Tag variant={a.type === "ULTIMATE" ? "accent" : a.type === "PASSIVE" ? "ghost-dark" : "ghost-dark"}>{a.type}</Tag>
              <div className="row" style={{ alignItems: "baseline", gap: 16, marginTop: 14 }}>
                <div style={{ width: 56, height: 56, border: "2px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-hand)", fontSize: 28, fontWeight: 700, color: "var(--accent)", background: a.type === "ULTIMATE" ? "var(--accent)" : "transparent", color: a.type === "ULTIMATE" ? "#fff" : "var(--accent)" }}>{a.key}</div>
                <Kanji size="xl" accent style={{ marginLeft: "auto", opacity: 0.5 }}>{a.k}</Kanji>
              </div>
              <div style={{ fontFamily: "var(--font-hand)", fontSize: 30, fontWeight: 700, color: "var(--paper)", lineHeight: 1, marginTop: 12 }}>{a.name}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.14em", marginTop: 6 }}>CD · {a.cd}</div>
              <hr className="hr dashed" style={{ margin: "16px 0" }} />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dark)", lineHeight: 1.6 }}>{a.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lore */}
      <SectionBreak ch="04" title="LORE" jp="物語" />
      <section className="th-section">
        <SectionHead num="04 / DOSSIER" jp="記録" title="WHO IS" titleAccent={`${h.name}?`} />
        <div className="split l-heavy">
          <div>
            <div style={{ fontFamily: "var(--font-hand)", fontSize: 26, color: "var(--paper)", lineHeight: 1.3, marginBottom: 16 }}>
              "I don't break walls. I become them."
            </div>
            <Lines count={6} widths={["100%", "94%", "88%", "92%", "78%", "60%"]} />
          </div>
          <div className="box dark" style={{ padding: 18 }}>
            <Label accent>DOSSIER</Label>
            <div className="col" style={{ gap: 10, marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dark)" }}>
              {[
                ["REAL NAME", "CLASSIFIED"],
                ["AGE",        "34"],
                ["ORIGIN",     "ROPPONGI · TOKYO"],
                ["AFFILIATION","UNAFFILIATED"],
                ["VOICE",      "K. MIZUSHIMA"],
                ["RELEASE",    "SEASON 0 · LAUNCH"],
              ].map(([k,v], i) => (
                <div key={i} className="row" style={{ justifyContent: "space-between", paddingBottom: 6, borderBottom: "1px dashed var(--border-dark)" }}>
                  <span style={{ color: "var(--muted-dark)", letterSpacing: "0.12em" }}>{k}</span>
                  <span style={{ color: "var(--paper)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skins / cosmetics */}
      <SectionBreak ch="05" title="SKINS" jp="装" />
      <section className="th-section alt">
        <SectionHead num="05 / COSMETICS" jp="装" title="SIX" titleAccent="SKINS." />
        <div className="grid-3">
          {["DEFAULT", "NEON RONIN", "OBSIDIAN", "FESTIVAL", "GHOST PROTOCOL", "CHAMPION 2099"].map((s, i) => (
            <div key={i} className="box dark" style={{ padding: 0, position: "relative" }}>
              <Img label={s} style={{ aspectRatio: "3 / 4", border: 0 }}>
                <Kanji size="xl" accent style={{ position: "absolute", bottom: 12, right: 12, opacity: 0.4 }}>{h.k}</Kanji>
              </Img>
              <div style={{ padding: 14 }}>
                <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
                  <div style={{ fontFamily: "var(--font-hand)", fontWeight: 700, fontSize: 22, color: "var(--paper)" }}>{s}</div>
                  <Tag variant={i === 0 ? "ghost-dark" : i === 5 ? "accent" : "ghost-dark"}>{i === 0 ? "OWNED" : i === 5 ? "LEGENDARY" : "1200 CRD"}</Tag>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};
