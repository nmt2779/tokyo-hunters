/* eslint-disable react/no-unescaped-entities */
/* th-home.jsx — Home page (Battle Royale Hype) */

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
  Ticker,
  TopNav,
} from "./wireframe-primitives";
import { HunterCard } from "./ui/HunterCard";
import { Pillar } from "./ui/Pillar";

export const HUNTERS = [
  { id: "kira",   name: "KIRA-07", k: "斬", role: "ASSAULT",  sig: "Phase Blade · 1.5s i-frame dash" },
  { id: "oni",    name: "ONI",     k: "鬼", role: "CONTROL",  sig: "Kinetic Wall · deployable cover", selected: true },
  { id: "ghost",  name: "GHOST",   k: "影", role: "RECON",    sig: "Spectral Scan · 30m wallhack" },
  { id: "medic",  name: "MEDIC-9", k: "癒", role: "SUPPORT",  sig: "Nano-Mist · squad heal AOE" },
  { id: "ronin",  name: "RONIN",   k: "侍", role: "ASSAULT",  sig: "Twin Katana · execute proc" },
  { id: "moth",   name: "MOTH",    k: "蛾", role: "RECON",    sig: "Drone Swarm · vision uplink" },
  { id: "fuji",   name: "FUJI",    k: "藤", role: "CONTROL",  sig: "Vine Trap · root + dmg" },
  { id: "nova",   name: "NOVA",    k: "星", role: "SUPPORT",  sig: "Resurrect Beam · revive ally" },
  { id: "raijin", name: "RAIJIN",  k: "雷", role: "ASSAULT",  sig: "Storm Burst · chain dmg" },
  { id: "zen",    name: "ZEN",     k: "禅", role: "RECON",    sig: "Time Echo · rewind 4s", isNew: true },
];

export const PageHome = () => (
  <main className="th-canvas">
    <TopNav active="home" />

    {/* HERO */}
    <section className="th-section flat" style={{ paddingTop: "clamp(28px, 4vw, 56px)", paddingBottom: "clamp(28px, 4vw, 56px)" }}>
      <div className="split image-r">
        <div className="col" style={{ position: "relative", justifyContent: "center" }}>
          <Kanji size="huge" muted style={{ position: "absolute", top: -30, left: -30, color: "var(--paper)", opacity: 0.05, fontSize: 320 }}>狩</Kanji>
          <Tag variant="accent" style={{ alignSelf: "flex-start" }}>SEASON 0 · OPERATION KIRIN · LIVE</Tag>
          <h1 className="h-hero" style={{ marginTop: 14 }}>
            DROP.<br/>ADAPT.<br/><span className="accent">OUTLAST.</span>
          </h1>
          <div style={{ marginTop: 18, maxWidth: 460, color: "var(--text-dark)", fontSize: 14, lineHeight: 1.6 }}>
            <Lines count={3} widths={["100%", "92%", "65%"]} />
          </div>
          <HeroCTAs />
          <div className="hero-stats">
            {[["2.4M", "HUNTERS"], ["10", "ROSTER"], ["247K", "ONLINE"], ["9.4", "METACRITIC"]].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "var(--font-hand)", fontSize: 32, color: "var(--accent)", fontWeight: 700, lineHeight: 1 }}>{s[0]}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)", letterSpacing: "0.14em", marginTop: 4 }}>{s[1]}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", minHeight: 460 }}>
          <Img className="hero-media" label="HERO PORTRAIT · KIRA-07 · neon rim light">
            <Kanji size="huge" muted style={{ position: "absolute", top: 30, right: 30, color: "var(--accent)", opacity: 0.6, fontSize: "min(200px, 24vw)" }}>斬</Kanji>
            <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, padding: 16, border: "1px solid var(--accent)", background: "#000a", backdropFilter: "blur(8px)" }}>
              <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.16em" }}>HUNTER 01 / 10</div>
                <Tag variant="accent">ASSAULT</Tag>
              </div>
              <div style={{ fontFamily: "var(--font-hand)", fontWeight: 700, fontSize: 34, color: "var(--paper)", marginTop: 4 }}>KIRA-07</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dark)", marginTop: 4 }}>"PHASE BLADE" · I-FRAME DASH 1.5s</div>
            </div>
          </Img>
        </div>
      </div>
    </section>

    <Ticker items={["SEASON 0 LIVE", "100 IN, 1 OUT", "NEW HUNTER ZEN · 06.12", "FREE TO DOWNLOAD", "東京狩人", "BETA OPEN"]} />

    {/* CORE PILLARS — clearly bordered section */}
    <SectionBreak ch="02" title="CORE PILLARS" jp="四柱・基本原則" />
    <section className="th-section">
      <SectionHead num="02 / FOUR PILLARS" jp="四柱" title="WAR IS A" titleAccent="SYSTEM." lede />
      <div className="col" style={{ gap: 20 }}>
        {[
          { n: "I",   t: "100-PLAYER ROYALE",  k: "戦", d: "20 squads · 1 city · 30-minute match" },
          { n: "II",  t: "10 UNIQUE HUNTERS",  k: "鬼", d: "Four roles · ranked queue · hand-tuned kits", rev: true },
          { n: "III", t: "CYBERWARE LOOT",     k: "改", d: "40+ implants · install mid-match" },
          { n: "IV",  t: "5-STACK SQUADS",     k: "組", d: "Voice ping · callouts · role bonus XP", rev: true },
        ].map((f, i) => (
          <Pillar
            key={i}
            number={f.n}
            title={f.t}
            kanji={f.k}
            description={f.d}
            reverse={f.rev}
          />
        ))}
      </div>
    </section>

    {/* HUNTER SELECT */}
    <SectionBreak ch="03" title="HUNTER SELECT" jp="狩人選択" />
    <section className="th-section alt">
      <SectionHead num="03 / ROSTER" jp="狩人" title="TEN HUNTERS." titleAccent="ONE TOKYO." />
      <div className="split image-r">
        {/* big preview */}
        <div className="box dark" style={{ borderColor: "var(--accent)", position: "relative", minHeight: 520 }}>
          <Img label="SELECTED · ONI" style={{ height: "100%", minHeight: 520 }}>
            <Kanji size="huge" accent style={{ position: "absolute", top: 20, right: 20, opacity: 0.6, fontSize: "min(180px, 22vw)" }}>鬼</Kanji>
          </Img>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 22, background: "linear-gradient(180deg, transparent, #000 60%)" }}>
            <Tag variant="accent">CONTROL</Tag>
            <div style={{ fontFamily: "var(--font-hand)", fontSize: 44, fontWeight: 700, color: "var(--paper)", marginTop: 6 }}>ONI</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dark)", letterSpacing: "0.12em" }}>"THE WALL THAT REMEMBERS"</div>
            <hr className="hr accent" style={{ margin: "12px 0", width: 60, height: 2 }} />
            <div className="col" style={{ gap: 8 }}>
              {[["P · BULWARK",       "PASSIVE",   "+25 hp overshield, 4s after no dmg"],
                ["E · KINETIC WALL",  "ACTIVE",    "deployable cover, 6s · CD 12s"],
                ["R · FORTRESS",      "ULTIMATE",  "dome shield 8s · allies inside take 0 ranged dmg"]].map((a, i) => (
                <div key={i} className="row" style={{ alignItems: "baseline", gap: 10 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: i === 2 ? "#fff" : "var(--accent)", background: i === 2 ? "var(--accent)" : "transparent", border: i === 2 ? "none" : "1px solid var(--accent)", padding: "2px 6px", letterSpacing: "0.12em", minWidth: 64, textAlign: "center" }}>{a[1]}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--paper)", minWidth: 130 }}>{a[0]}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", flex: 1 }}>{a[2]}</span>
                </div>
              ))}
            </div>
            <Btn variant="primary" size="lg" href="/hunters/oni" style={{ marginTop: 16, width: "100%" }}>VIEW FULL DOSSIER →</Btn>
          </div>
        </div>
        <div className="col" style={{ gap: 14 }}>
          <div className="chips">
            {["ASSAULT", "RECON", "SUPPORT", "CONTROL"].map((r, i) => (
              <Tag key={i} variant={i === 3 ? "accent" : "ghost-dark"}>{r}</Tag>
            ))}
            <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.14em" }}>10/10 UNLOCKED</span>
          </div>
          <div className="grid-5">
            {HUNTERS.map((h) => (
              <HunterCard key={h.id} hunter={h} />
            ))}
          </div>
          <div className="box dark" style={{ padding: 16 }}>
            <div className="row" style={{ alignItems: "baseline", gap: 12 }}>
              <Kanji size="md" accent>役割</Kanji>
              <div style={{ fontFamily: "var(--font-hand)", fontSize: 22, fontWeight: 700, color: "var(--paper)" }}>ROLE QUEUE</div>
              <div style={{ flex: 1 }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)" }}>1 OF EACH = +10% XP</span>
            </div>
            <div style={{ marginTop: 10 }}><Lines count={2} widths={["100%", "70%"]} /></div>
          </div>
        </div>
      </div>
    </section>

    {/* GAMEPLAY LOOP — 30 MIN */}
    <SectionBreak ch="04" title="MATCH LOOP" jp="戦闘循環" />
    <section className="th-section">
      <SectionHead num="04 / THE LOOP" jp="輪廻" title="ONE LOOP." titleAccent="ZERO MERCY." />
      <div className="split">
        <div>
          <Lines count={4} widths={["100%", "92%", "85%", "60%"]} />
          <div className="col" style={{ gap: 12, marginTop: 24 }}>
            {[
              ["DROP",     "20 teams · 20 isolated zones · loot basics safely", "落"],
              ["LOOT",     "scour your zone for weapons, mods, currency",        "拾"],
              ["UPGRADE",  "install cyberware at street terminals",              "改"],
              ["CONVERGE", "barriers fall · all squads enter open zone",         "集"],
              ["FIGHT",    "premium loot · cyber-shards · contested",            "戦"],
              ["SURVIVE",  "shrinking neon zone, last team wins",                "勝"],
            ].map((s, i) => (
              <div key={i} className="row" style={{ gap: 14, alignItems: "center", padding: "10px 0", borderBottom: "1px dashed var(--border-dark)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", width: 28 }}>0{i+1}</span>
                <Kanji size="md" accent>{s[2]}</Kanji>
                <div style={{ fontFamily: "var(--font-hand)", fontSize: 26, fontWeight: 700, color: "var(--paper)", minWidth: 130 }}>{s[0]}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)" }}>{s[1]}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="box dark" style={{ minHeight: 520, position: "relative" }}>
          <Brackets />
          <Label style={{ position: "absolute", top: 14, left: 16 }}>FIG.04 · THE LOOP</Label>
          <svg viewBox="0 0 400 400" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", padding: 30 }}>
            <circle cx="200" cy="200" r="150" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="80"  fill="none" stroke="#4a5159" strokeWidth="1" />
            {[0, 60, 120, 180, 240, 300].map((deg, i) => {
              const r = 150;
              const x = 200 + r * Math.cos((deg - 90) * Math.PI / 180);
              const y = 200 + r * Math.sin((deg - 90) * Math.PI / 180);
              const labels = ["DROP", "LOOT", "UPGRADE", "CONVERGE", "FIGHT", "SURVIVE"];
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="22" fill="var(--accent)" stroke="#fff" strokeWidth="2" />
                  <text x={x} y={y+5} textAnchor="middle" fill="#fff" fontFamily="var(--font-mono)" fontSize="11" fontWeight="700">{i+1}</text>
                  <text x={x} y={y+44} textAnchor="middle" fill="#cfd3da" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2">{labels[i]}</text>
                </g>
              );
            })}
            <text x="200" y="195" textAnchor="middle" fill="var(--paper)" fontFamily="var(--font-hand)" fontSize="36" fontWeight="700">30 MIN</text>
            <text x="200" y="222" textAnchor="middle" fill="#9aa1aa" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2">PER MATCH</text>
          </svg>
        </div>
      </div>
    </section>

    {/* WEAPONS + CYBER teaser */}
    <SectionBreak ch="05" title="LOADOUT TEASER" jp="武装一覧" />
    <section className="th-section alt">
      <SectionHead num="05 / LOADOUT" jp="武装" title="80+ WEAPONS." titleAccent="40+ CYBERWARE." />
      <div className="grid-5">
        {[
          { c: "WEAPON", n: "TANTO-X",    t: "ENERGY SMG",       r: "RARE",      k: "短" },
          { c: "WEAPON", n: "RAIDEN-9",   t: "RAILGUN",          r: "EXOTIC",    k: "雷" },
          { c: "CYBER",  n: "VESPA-OS",   t: "NEURAL TIER 3",    r: "EPIC",      k: "脳" },
          { c: "CYBER",  n: "ARGUS EYE",  t: "VISION TIER 2",    r: "RARE",      k: "眼" },
          { c: "CYBER",  n: "TITAN ARMS", t: "COMBAT TIER 4",    r: "LEGENDARY", k: "腕" },
        ].map((w, i) => (
          <div key={i} className="codex-card">
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <Tag variant={w.c === "CYBER" ? "accent" : "ghost-dark"}>{w.c}</Tag>
              <span className="rarity">{w.r}</span>
            </div>
            <div className="art"><Kanji className="kanji">{w.k}</Kanji></div>
            <div className="name">{w.n}</div>
            <div className="type">{w.t}</div>
          </div>
        ))}
      </div>
      <div className="row" style={{ justifyContent: "center", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
        <Btn variant="primary" size="lg" href="/weapons">WEAPON CODEX →</Btn>
        <Btn variant="dark" size="lg" href="/cyberware" style={{ borderColor: "var(--paper)" }}>CYBERWARE CODEX →</Btn>
      </div>
    </section>

    {/* MAP TEASER — new mechanic */}
    <SectionBreak ch="06" title="THE MAP" jp="戦場地図" />
    <section className="th-section">
      <SectionHead num="06 / MAP" jp="区" title="20 ZONES." titleAccent="ONE CITY." />
      <div className="split">
        <div>
          <div style={{ fontFamily: "var(--font-hand)", fontSize: 26, color: "var(--paper)", lineHeight: 1.2, marginBottom: 16 }}>
            "No random drops. Twenty squads, twenty mirrored zones. Loot safely. Then converge."
          </div>
          <Lines count={4} widths={["100%", "92%", "85%", "70%"]} />
          <div className="col" style={{ gap: 10, marginTop: 22 }}>
            {[
              ["PHASE I",  "DROP-IN ZONES",   "20 identical loot zones, walled off"],
              ["PHASE II", "OPEN ZONE",       "central PvP arena, premium loot"],
              ["PHASE III","FINAL CIRCLE",    "shrinking neon, last team wins"],
            ].map((p, i) => (
              <div key={i} className="row" style={{ alignItems: "baseline", gap: 14, padding: "10px 0", borderBottom: "1px dashed var(--border-dark)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--accent)", letterSpacing: "0.14em", minWidth: 70 }}>{p[0]}</span>
                <span style={{ fontFamily: "var(--font-hand)", fontSize: 22, fontWeight: 700, color: "var(--paper)", minWidth: 200 }}>{p[1]}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)" }}>{p[2]}</span>
              </div>
            ))}
          </div>
          <Btn variant="primary" size="lg" href="/map" style={{ marginTop: 20 }}>EXPLORE THE MAP →</Btn>
        </div>
        <Img label="MAP DIAGRAM · 20 isolated loot zones → central open zone" style={{ minHeight: 380 }}>
          {/* phased map preview */}
          <svg viewBox="0 0 400 380" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", padding: 30 }}>
            {/* outer ring of 20 mini-zones */}
            {Array.from({ length: 20 }).map((_, i) => {
              const ang = (i / 20) * Math.PI * 2;
              const x = 200 + 140 * Math.cos(ang);
              const y = 190 + 140 * Math.sin(ang);
              return <rect key={i} x={x-14} y={y-14} width="28" height="28" fill="#0f1318" stroke="var(--accent)" strokeWidth="1.2" />;
            })}
            {/* center open zone */}
            <circle cx="200" cy="190" r="60" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 4" />
            <text x="200" y="186" textAnchor="middle" fill="var(--paper)" fontFamily="var(--font-hand)" fontSize="22" fontWeight="700">OPEN</text>
            <text x="200" y="206" textAnchor="middle" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2">ZONE</text>
          </svg>
        </Img>
      </div>
    </section>

    {/* MEDIA */}
    <SectionBreak ch="07" title="MEDIA" jp="映像" />
    <section className="th-section alt">
      <SectionHead num="07 / MEDIA" jp="映像" title="SEE IT" titleAccent="IN MOTION." />
      <div className="grid-3" style={{ gridTemplateColumns: "2fr 1fr 1fr" }}>
        <Img label="TRAILER · 2:34" style={{ minHeight: 320 }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 76, height: 76, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 30 }}>▶</div>
          </div>
        </Img>
        <div className="col" style={{ gap: 14 }}>
          <Img label="GAMEPLAY · 0:48" style={{ flex: 1, minHeight: 150 }} />
          <Img label="ABILITY VFX · 0:22" style={{ flex: 1, minHeight: 150 }} />
        </div>
        <div className="col" style={{ gap: 14 }}>
          <Img label="HERO ART" style={{ flex: 1, minHeight: 150 }} />
          <Img label="CYBER UI" style={{ flex: 1, minHeight: 150 }} />
        </div>
      </div>
    </section>

    {/* PRESS */}
    <section className="th-section darker">
      <SectionHead num="08 / PRESS" jp="評価" title="WHAT THEY'RE" titleAccent="SAYING." />
      <div className="grid-4">
        {[
          ["\"BEST FPS LAUNCH IN 5 YEARS.\"", "IGN", "9.5"],
          ["\"FUTURE OF BATTLE ROYALE.\"", "PC GAMER", "94"],
          ["\"NEON-DRENCHED, RUTHLESS.\"", "POLYGON", "9/10"],
          ["\"SQUAD UP, OR DIE TRYING.\"", "EUROGAMER", "ESS."],
        ].map((q, i) => (
          <div key={i} className="box dark" style={{ padding: 18 }}>
            <div style={{ fontFamily: "var(--font-hand)", fontWeight: 700, fontSize: 22, color: "var(--paper)", lineHeight: 1.2 }}>{q[0]}</div>
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between", marginTop: 14 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--accent)", letterSpacing: "0.14em" }}>{q[1]}</span>
              <span style={{ fontFamily: "var(--font-hand)", fontSize: 24, fontWeight: 700, color: "var(--accent)" }}>{q[2]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* FINAL CTA — clear purpose, no input */}
    <section className="th-section" style={{ textAlign: "center", background: "#000", position: "relative", overflow: "hidden" }}>
      <Kanji size="huge" muted style={{ position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)", color: "var(--accent)", opacity: 0.08, fontSize: "min(360px, 40vw)" }}>狩</Kanji>
      <Label accent style={{ position: "relative" }}>09 / DOWNLOAD</Label>
      <h2 className="th-sec-title" style={{ position: "relative", fontSize: "clamp(48px, 9vw, 110px)" }}>
        FREE TO PLAY. <span className="accent">FOREVER.</span>
      </h2>
      <div style={{ fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--text-dark)", marginTop: 8, position: "relative" }}>
        No paywalls. No editions. Download, install, drop in.
      </div>
      <div className="row" style={{ justifyContent: "center", gap: 12, marginTop: 28, position: "relative", flexWrap: "wrap" }}>
        <Btn variant="primary" size="xl" href="/game">► DOWNLOAD FREE</Btn>
        <Btn variant="dark" size="xl" href="/news" style={{ borderColor: "var(--paper)" }}>▶ WATCH TRAILER</Btn>
      </div>
      <div style={{ marginTop: 16, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)", letterSpacing: "0.14em", position: "relative" }}>
        PC · PLAYSTATION 5 · XBOX SERIES X|S · CLOUD
      </div>
    </section>

    <Footer />
  </main>
);
