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
import Image from "next/image";
import { CodexCard } from "./ui/CodexCard";
import { Countdown } from "./ui/Countdown";
import { EmailSignup } from "./ui/EmailSignup";
import { HunterCard } from "./ui/HunterCard";
import { HunterPreviewPanel } from "./ui/HunterPreviewPanel";
import { MediaThumb } from "./ui/MediaThumb";
import { RosterSection } from "./ui/RosterSection";
import { ScrollToTop } from "./ui/ScrollToTop";
import { Pillar } from "./ui/Pillar";
import { StatBlock } from "./ui/StatBlock";

export const HUNTERS = [
  { id: "kira",   name: "KIRA-07", k: "斬", role: "ASSAULT", sig: "Phase Blade · 1.5s i-frame dash",   imageSrc: "/art/hunters/kira-07.png", avatarSrc: "/art/hunter-avatars/kira-07.png" },
  { id: "oni",    name: "ONI",     k: "鬼", role: "CONTROL", sig: "Kinetic Wall · deployable cover",  selected: true, imageSrc: "/art/hunters/oni.png",     avatarSrc: "/art/hunter-avatars/oni.png" },
  { id: "ghost",  name: "GHOST",   k: "影", role: "RECON",   sig: "Spectral Scan · 30m wallhack",     imageSrc: "/art/hunters/ghost.png",   avatarSrc: "/art/hunter-avatars/ghost.png" },
  { id: "medic",  name: "MEDIC-9", k: "癒", role: "SUPPORT", sig: "Nano-Mist · squad heal AOE",       imageSrc: "/art/hunters/medic-9.png", avatarSrc: "/art/hunter-avatars/medic-9.png" },
  { id: "ronin",  name: "RONIN",   k: "侍", role: "ASSAULT", sig: "Twin Katana · execute proc",       imageSrc: "/art/hunters/ronin.png",   avatarSrc: "/art/hunter-avatars/ronin.png" },
  { id: "moth",   name: "MOTH",    k: "蛾", role: "RECON",   sig: "Drone Swarm · vision uplink",      imageSrc: "/art/hunters/moth.png",    avatarSrc: "/art/hunter-avatars/moth.png" },
  { id: "fuji",   name: "FUJI",    k: "藤", role: "CONTROL", sig: "Vine Trap · root + dmg",           imageSrc: "/art/hunters/fuji.png",    avatarSrc: "/art/hunter-avatars/fuji.png" },
  { id: "nova",   name: "NOVA",    k: "星", role: "SUPPORT", sig: "Resurrect Beam · revive ally",     imageSrc: "/art/hunters/nova.png",    avatarSrc: "/art/hunter-avatars/nova.png" },
  { id: "raijin", name: "RAIJIN",  k: "雷", role: "ASSAULT", sig: "Storm Burst · chain dmg",          imageSrc: "/art/hunters/raijin.png",  avatarSrc: "/art/hunter-avatars/raijin.png" },
  { id: "zen",    name: "ZEN",     k: "禅", role: "RECON",   sig: "Time Echo · rewind 4s",            isNew: true, imageSrc: "/art/hunters/zen.png",     avatarSrc: "/art/hunter-avatars/zen.png" },
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
          <p style={{ marginTop: 18, maxWidth: 460, color: "var(--text-dark)", fontSize: 14, lineHeight: 1.6, fontFamily: "var(--font-mono)" }}>
            Twenty squads spawn across neo-Tokyo. Push through two combat belts —
            highway, then arcade — toward the contested center. Last team standing wins.
            Free to play, forever. Drops <span style={{ color: "var(--accent)" }}>06.15.26</span>.
          </p>
          <HeroCTAs />
          <div className="hero-stats">
            {[
              { value: "2.4M", label: "HUNTERS" },
              { value: "10",   label: "ROSTER" },
              { value: "247K", label: "ONLINE" },
              { value: "9.4",  label: "METACRITIC" },
            ].map((s) => (
              <StatBlock key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
        <HunterPreviewPanel
          index={10}
          total={10}
          role="RECON"
          name="ZEN"
          kanji="禅"
          sig={'"TIME ECHO" · REWIND 4s · SEASON 0 DEBUT'}
          imageLabel="HERO PORTRAIT · ZEN · neon rim light"
          imageSrc="/art/hunters/zen.png"
          imageAlt="ZEN — recon hunter, Season 0 debut"
        />
      </div>
    </section>

    <Ticker items={["SEASON 0 LIVE", "100 IN, 1 OUT", "NEW HUNTER ZEN · 06.12", "FREE TO DOWNLOAD", "東京狩人", "BETA OPEN"]} />

    {/* CORE PILLARS — clearly bordered section */}
    <SectionBreak ch="02" title="CORE PILLARS" jp="四柱・基本原則" />
    <section className="th-section">
      <SectionHead
        num="02 / FOUR PILLARS"
        jp="四柱"
        title="WAR IS A"
        titleAccent="SYSTEM."
        lede="Tokyo Hunters isn't a deathmatch with extra steps. Every match is a 30-minute system built on four interlocking pillars — designed so skill compounds and luck dies."
      />
      <div className="col" style={{ gap: 20 }}>
        {[
          {
            n: "I",   t: "100-PLAYER ROYALE",  k: "戦",
            d: "20 squads · 20 spawn zones · 30-minute match",
            body: "Every match is 100 hunters split into 20 squads of five, dropped across a 12 km² slice of neo-Tokyo. No queues. No fillers. Just one collapsing city and a 30-minute clock that won't blink.",
            img: "/art/pillars/royale.png", alt: "100-player royale — Shibuya containment ring",
          },
          {
            n: "II",  t: "10 UNIQUE HUNTERS",  k: "鬼",
            d: "Four roles · ranked queue · hand-tuned kits",
            body: "Ten hunters across four roles — Assault, Recon, Control, Support — each with a hand-tuned passive, active and ultimate. No skill trees. No grind. Pick a hunter, learn the kit, master it for life.",
            img: "/art/pillars/hunters.png", alt: "Ten hunters squad lineup",
            rev: true,
          },
          {
            n: "III", t: "CYBERWARE LOOT",     k: "改",
            d: "40+ implants · install mid-match",
            body: "Forty-plus cybernetic implants pulled live from terminals on the map — neural OS, ocular mods, combat augments. Stack three to rewrite your kit mid-match. Lose them all if your squad falls.",
            img: "/art/pillars/cyberware.png", alt: "Cybernetic implant install close-up",
          },
          {
            n: "IV",  t: "5-STACK SQUADS",     k: "組",
            d: "Voice ping · callouts · role bonus XP",
            body: "Five-stack only. Built-in voice with directional pings, contextual callouts and a role-queue bonus that rewards balanced compositions. Soloqueue exists — but the game is built for the squad.",
            img: "/art/pillars/squads.png", alt: "Five-stack squad in V-formation",
            rev: true,
          },
        ].map((f, i) => (
          <Pillar
            key={i}
            number={f.n}
            title={f.t}
            kanji={f.k}
            description={f.d}
            reverse={f.rev}
            imageSrc={f.img}
            imageAlt={f.alt}
          >
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.65, color: "var(--text-dark)", margin: 0 }}>
              {f.body}
            </p>
          </Pillar>
        ))}
      </div>
    </section>

    {/* HUNTER SELECT */}
    <SectionBreak ch="03" title="HUNTER SELECT" jp="狩人選択" />
    <section className="th-section alt">
      <SectionHead num="03 / ROSTER" jp="狩人" title="TEN HUNTERS." titleAccent="ONE TOKYO." />
      <RosterSection hunters={HUNTERS} />
    </section>

    {/* GAMEPLAY LOOP — 30 MIN */}
    <SectionBreak ch="04" title="MATCH LOOP" jp="戦闘循環" />
    <section className="th-section">
      <SectionHead num="04 / THE LOOP" jp="輪廻" title="ONE LOOP." titleAccent="ZERO MERCY." />
      <div className="split">
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 14, lineHeight: 1.7, color: "var(--text-dark)", margin: 0 }}>
            Every match runs the same six-beat loop — but the system rewards squads that read the
            clock and bend the rhythm. Drop sealed, loot calm, upgrade smart. When the walls fall
            the only thing that matters is how prepared you were when nobody was watching.
          </p>
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
          { category: "WEAPON", name: "TANTO-X",    type: "ENERGY SMG",    rarity: "RARE",      kanji: "短", imageSrc: "/art/weapons/tanto-x.png" },
          { category: "WEAPON", name: "RAIDEN-9",   type: "RAILGUN",       rarity: "EXOTIC",    kanji: "雷", imageSrc: "/art/weapons/raiden-9.png" },
          { category: "CYBER",  name: "VESPA-OS",   type: "NEURAL TIER 3", rarity: "EPIC",      kanji: "脳", imageSrc: "/art/cyber/vespa-os.png" },
          { category: "CYBER",  name: "ARGUS EYE",  type: "VISION TIER 2", rarity: "RARE",      kanji: "眼", imageSrc: "/art/cyber/argus-eye.png" },
          { category: "CYBER",  name: "TITAN ARMS", type: "COMBAT TIER 4", rarity: "LEGENDARY", kanji: "腕", imageSrc: "/art/cyber/titan-arms.png" },
        ].map((item) => (
          <CodexCard key={item.name} item={item} />
        ))}
      </div>
      <div className="row" style={{ justifyContent: "center", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
        <Btn variant="primary" size="lg" href="/weapons">WEAPON CODEX →</Btn>
        <Btn variant="dark" size="lg" href="/cyberware" style={{ borderColor: "var(--paper)" }}>CYBERWARE CODEX →</Btn>
      </div>
    </section>

    {/* MAP TEASER — 3-phase mechanic */}
    <SectionBreak ch="06" title="THE MAP" jp="戦場地図" />
    <section className="th-section">
      <SectionHead num="06 / MAP" jp="区" title="THREE PHASES." titleAccent="ONE CENTER." />
      <div className="split image-r">
        <div>
          <div style={{ fontFamily: "var(--font-hand)", fontSize: 26, color: "var(--paper)", lineHeight: 1.2, marginBottom: 16 }}>
            "No random drops. Spawn in your zone. Cross two belts. Meet at the heart of Tokyo."
          </div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.65, color: "var(--text-dark)", margin: 0 }}>
            The map is built around a single question — how do you get to the center alive?
            Each phase rewards a different toolkit: patience on the spawn ring, mobility on the
            highway belt, room-clearing in the arcades, raw aggression at the core. Build the
            squad that can do all four.
          </p>
          <div className="col" style={{ gap: 10, marginTop: 22 }}>
            {[
              ["PHASE I",   "SPAWN ZONES",      "20 sealed zones, mirrored loot, no PvP"],
              ["PHASE II",  "TRAVERSE BELTS",   "2 terrains · highway then arcade · loot scales"],
              ["PHASE III", "CENTER ARENA",     "1 contested core, exotic loot, final circle"],
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
        <div
          style={{
            position: "relative",
            width: "100%",
            border: "1.5px solid var(--border-dark)",
            overflow: "hidden",
            aspectRatio: "1 / 1",
          }}
        >
          <Image
            src="/art/map/diagram.png"
            alt="Tokyo map diagram — 20 spawn zones, 2 traverse belts (highway, arcade), 1 center arena"
            fill
            sizes="(max-width: 820px) 100vw, 540px"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>

    {/* MEDIA */}
    <SectionBreak ch="07" title="MEDIA" jp="映像" />
    <section className="th-section alt">
      <SectionHead num="07 / MEDIA" jp="映像" title="SEE IT" titleAccent="IN MOTION." />
      <div className="media-stack">
        <a href="#trailer" className="media-trailer" aria-label="Watch trailer · 2:34">
          <Image
            src="/art/media/trailer-poster.png"
            alt=""
            fill
            sizes="(max-width: 1100px) 100vw, 1100px"
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
            <div style={{ width: 76, height: 76, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 30, boxShadow: "0 6px 24px rgba(0,0,0,0.5)" }}>▶</div>
          </div>
          <div style={{ position: "absolute", bottom: 12, left: 12, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--paper)", letterSpacing: "0.14em", background: "rgba(0,0,0,0.65)", padding: "4px 8px", zIndex: 2 }}>TRAILER · 2:34</div>
        </a>
        <div className="media-thumbs">
          <MediaThumb src="/art/media/gameplay.png"    label="GAMEPLAY · 0:48"    />
          <MediaThumb src="/art/media/ability-vfx.png" label="ABILITY VFX · 0:22" />
          <MediaThumb src="/art/media/hero-art.png"    label="HERO ART"          />
          <MediaThumb src="/art/media/cyber-ui.png"    label="CYBER UI"          />
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

    {/* PRE-LAUNCH CTA — countdown + email signup */}
    <section className="th-section" style={{ textAlign: "center", background: "#000", position: "relative", overflow: "hidden" }}>
      <Kanji size="huge" muted style={{ position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)", color: "var(--accent)", opacity: 0.08, fontSize: "min(360px, 40vw)" }}>狩</Kanji>
      <Label accent style={{ position: "relative" }}>09 / OPERATION KIRIN</Label>
      <h2 className="th-sec-title" style={{ position: "relative", fontSize: "clamp(48px, 9vw, 110px)" }}>
        DROPS <span className="accent">06.15.26</span>
      </h2>
      <div style={{ fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--text-dark)", marginTop: 8, position: "relative" }}>
        Free to play. Forever. Pre-register for drop-in priority.
      </div>

      <div style={{ position: "relative", display: "flex", justifyContent: "center", marginTop: 32 }}>
        <Countdown />
      </div>

      <div style={{ position: "relative", display: "flex", justifyContent: "center", marginTop: 36 }}>
        <EmailSignup />
      </div>

      <div className="row" style={{ justifyContent: "center", gap: 12, marginTop: 28, position: "relative", flexWrap: "wrap" }}>
        <Btn variant="dark" size="xl" href="/news" style={{ borderColor: "var(--paper)" }}>▶ WATCH TRAILER</Btn>
      </div>
      <div style={{ marginTop: 16, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)", letterSpacing: "0.14em", position: "relative" }}>
        PC · PLAYSTATION 5 · XBOX SERIES X|S · CLOUD
      </div>
    </section>

    <Footer />
    <ScrollToTop />
  </main>
);
