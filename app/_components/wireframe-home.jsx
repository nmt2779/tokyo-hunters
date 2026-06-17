/* eslint-disable react/no-unescaped-entities */
/* th-home.jsx — Home page (Battle Royale Hype) */

import {
  Btn,
  Footer,
  HeroCTAs,
  Kanji,
  Label,
  SectionBreak,
  SectionHead,
  Tag,
  Ticker,
  TopNav,
} from "./wireframe-primitives";
import Image from "next/image";
import { BLUR_DATA_URL } from "../_lib/image";
import { CodexCard } from "./ui/CodexCard";
import { Countdown } from "./ui/Countdown";
import { EmailSignup } from "./ui/EmailSignup";
import { HeroVideo } from "./ui/HeroVideo";
import { HunterPreviewPanel } from "./ui/HunterPreviewPanel";
import { MediaThumb } from "./ui/MediaThumb";
import { RosterSection } from "./ui/RosterSection";
import { ScrollToTop } from "./ui/ScrollToTop";
import { TrailerModal } from "./ui/TrailerModal";
import { Pillar } from "./ui/Pillar";
import { StatBlock } from "./ui/StatBlock";
import { Reveal } from "./motion/Reveal";
import { Stagger } from "./motion/Stagger";
import { MountReveal } from "./motion/MountReveal";
import { ParallaxKanji } from "./motion/ParallaxKanji";
import { ScrollScale } from "./motion/ScrollScale";
import { CountUp } from "./motion/CountUp";
import { Magnetic } from "./motion/Magnetic";
import { MatchLoopScene } from "./ui/MatchLoopScene";

export const HUNTERS = [
  { id: "kira",   name: "KIRA-07", k: "斬", role: "ASSAULT", sig: "Phase Blade · 1.5s i-frame dash",   imageSrc: "/art/hunters/kira-07.jpg", avatarSrc: "/art/hunter-avatars/kira-07.jpg" },
  { id: "oni",    name: "ONI",     k: "鬼", role: "CONTROL", sig: "Kinetic Wall · deployable cover",  selected: true, imageSrc: "/art/hunters/oni.jpg",     avatarSrc: "/art/hunter-avatars/oni.jpg" },
  { id: "ghost",  name: "GHOST",   k: "影", role: "RECON",   sig: "Spectral Scan · 30m wallhack",     imageSrc: "/art/hunters/ghost.jpg",   avatarSrc: "/art/hunter-avatars/ghost.jpg" },
  { id: "medic",  name: "MEDIC-9", k: "癒", role: "SUPPORT", sig: "Nano-Mist · squad heal AOE",       imageSrc: "/art/hunters/medic-9.jpg", avatarSrc: "/art/hunter-avatars/medic-9.jpg" },
  { id: "ronin",  name: "RONIN",   k: "侍", role: "ASSAULT", sig: "Twin Katana · execute proc",       imageSrc: "/art/hunters/ronin.jpg",   avatarSrc: "/art/hunter-avatars/ronin.jpg" },
  { id: "moth",   name: "MOTH",    k: "蛾", role: "RECON",   sig: "Drone Swarm · vision uplink",      imageSrc: "/art/hunters/moth.jpg",    avatarSrc: "/art/hunter-avatars/moth.jpg" },
  { id: "fuji",   name: "FUJI",    k: "藤", role: "CONTROL", sig: "Vine Trap · root + dmg",           imageSrc: "/art/hunters/fuji.jpg",    avatarSrc: "/art/hunter-avatars/fuji.jpg" },
  { id: "nova",   name: "NOVA",    k: "星", role: "SUPPORT", sig: "Resurrect Beam · revive ally",     imageSrc: "/art/hunters/nova.jpg",    avatarSrc: "/art/hunter-avatars/nova.jpg" },
  { id: "raijin", name: "RAIJIN",  k: "雷", role: "ASSAULT", sig: "Storm Burst · chain dmg",          imageSrc: "/art/hunters/raijin.jpg",  avatarSrc: "/art/hunter-avatars/raijin.jpg" },
  { id: "zen",    name: "ZEN",     k: "禅", role: "RECON",   sig: "Time Echo · rewind 4s",            isNew: true, imageSrc: "/art/hunters/zen.jpg",     avatarSrc: "/art/hunter-avatars/zen.jpg" },
];

export const PageHome = () => (
  <main className="th-canvas">
    <TopNav active="home" />

    {/* HERO — full viewport height across all breakpoints */}
    <section
      className="th-section flat hero-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <HeroVideo />
      <ParallaxKanji style={{ position: "absolute", top: "12%", right: "8%", pointerEvents: "none", zIndex: 0 }} range={140}>
        <Kanji size="huge" muted style={{ color: "var(--accent)", opacity: 0.04, fontSize: 420 }}>戦</Kanji>
      </ParallaxKanji>
      <ParallaxKanji style={{ position: "absolute", bottom: "8%", left: "30%", pointerEvents: "none", zIndex: 0 }} range={60}>
        <Kanji size="huge" muted style={{ color: "var(--paper)", opacity: 0.03, fontSize: 240 }}>東京</Kanji>
      </ParallaxKanji>
      <div className="split image-r" style={{ position: "relative", zIndex: 2 }}>
        <div className="col" style={{ position: "relative", justifyContent: "center" }}>
          <ParallaxKanji style={{ position: "absolute", top: -30, left: -30, pointerEvents: "none" }} range={80}>
            <Kanji size="huge" muted style={{ color: "var(--paper)", opacity: 0.05, fontSize: 320 }}>狩</Kanji>
          </ParallaxKanji>
          <MountReveal delay={0.08} y={12}>
            <Tag variant="accent" style={{ alignSelf: "flex-start" }}>SEASON 0 · OPERATION KIRIN · LIVE</Tag>
          </MountReveal>
          <ScrollScale scale={[1, 1.08]} blur={[0, 3]} opacity={[1, 0.4]}>
            <h1 className="h-hero" style={{ marginTop: 14 }}>
              <MountReveal as="span" delay={0.18} y={20} style={{ display: "block" }}>DROP.</MountReveal>
              <MountReveal as="span" delay={0.26} y={20} style={{ display: "block" }}>ADAPT.</MountReveal>
              <MountReveal as="span" delay={0.34} y={20} style={{ display: "block" }}>
                <span className="accent">OUTLAST.</span>
              </MountReveal>
            </h1>
          </ScrollScale>
          <MountReveal delay={0.48} y={12}>
            <p style={{ marginTop: 18, maxWidth: 460, color: "var(--text-dark)", fontSize: 14, lineHeight: 1.6, fontFamily: "var(--font-mono)" }}>
              Twenty squads spawn across neo-Tokyo. Push through two combat belts —
              highway, then arcade — toward the contested center. Last team standing wins.
              Free to play, forever. Drops <span style={{ color: "var(--accent)" }}>07.31.26</span>.
            </p>
          </MountReveal>
          <MountReveal delay={0.58} y={12}>
            <HeroCTAs />
          </MountReveal>
          <div className="hero-stats">
            {[
              { to: 2.4, suffix: "M", decimals: 1, label: "HUNTERS" },
              { to: 10,  suffix: "",  decimals: 0, label: "ROSTER" },
              { to: 247, suffix: "K", decimals: 0, label: "ONLINE" },
              { to: 9.4, suffix: "",  decimals: 1, label: "METACRITIC" },
            ].map((s, i) => (
              <MountReveal key={s.label} delay={0.7 + i * 0.09} y={10}>
                <StatBlock value={<CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} delay={0.1} />} label={s.label} />
              </MountReveal>
            ))}
          </div>
        </div>
        <MountReveal delay={0.2} y={0} duration={0.6}>
          <HunterPreviewPanel
            index={10}
            total={10}
            role="RECON"
            name="ZEN"
            kanji="禅"
            sig={'"TIME ECHO" · REWIND 4s · SEASON 0 DEBUT'}
            imageLabel="HERO PORTRAIT · ZEN · neon rim light"
            imageSrc="/art/hunters/zen.jpg"
            imageAlt="ZEN — recon hunter, Season 0 debut"
            href="/hunters/zen"
            viewTransitionName="hunter-portrait-zen"
          />
        </MountReveal>
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
      <Stagger className="col" style={{ gap: 20 }} gap={0.09}>
        {[
          {
            n: "I",   t: "100-PLAYER ROYALE",  k: "戦",
            d: "20 squads · 20 spawn zones · 30-minute match",
            body: "Every match is 100 hunters split into 20 squads of five, dropped across a 12 km² slice of neo-Tokyo. No queues. No fillers. Just one collapsing city and a 30-minute clock that won't blink.",
            img: "/art/pillars/royale.jpg", alt: "100-player royale — Shibuya containment ring",
          },
          {
            n: "II",  t: "10 UNIQUE HUNTERS",  k: "鬼",
            d: "Four roles · ranked queue · hand-tuned kits",
            body: "Ten hunters across four roles — Assault, Recon, Control, Support — each with a hand-tuned passive, active and ultimate. No skill trees. No grind. Pick a hunter, learn the kit, master it for life.",
            img: "/art/pillars/hunters.jpg", alt: "Ten hunters squad lineup",
            rev: true,
          },
          {
            n: "III", t: "CYBERWARE LOOT",     k: "改",
            d: "40+ implants · install mid-match",
            body: "Forty-plus cybernetic implants pulled live from terminals on the map — neural OS, ocular mods, combat augments. Stack three to rewrite your kit mid-match. Lose them all if your squad falls.",
            img: "/art/pillars/cyberware.jpg", alt: "Cybernetic implant install close-up",
          },
          {
            n: "IV",  t: "5-STACK SQUADS",     k: "組",
            d: "Voice ping · callouts · role bonus XP",
            body: "Five-stack only. Built-in voice with directional pings, contextual callouts and a role-queue bonus that rewards balanced compositions. Soloqueue exists — but the game is built for the squad.",
            img: "/art/pillars/squads.jpg", alt: "Five-stack squad in V-formation",
            rev: true,
          },
        ].map((f, i) => (
          <Reveal key={i} direction="up" distance={24}>
            <Pillar
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
          </Reveal>
        ))}
      </Stagger>
    </section>

    {/* HUNTER SELECT */}
    <SectionBreak ch="03" title="HUNTER SELECT" jp="狩人選択" />
    <section className="th-section alt">
      <SectionHead num="03 / ROSTER" jp="狩人" title="TEN HUNTERS." titleAccent="ONE TOKYO." />
      <Reveal direction="up" distance={20} amount={0.15}>
        <RosterSection hunters={HUNTERS} />
      </Reveal>
    </section>

    {/* GAMEPLAY LOOP — 30 MIN */}
    <SectionBreak ch="04" title="MATCH LOOP" jp="戦闘循環" />
    <section className="th-section">
      <SectionHead num="04 / THE LOOP" jp="輪廻" title="ONE LOOP." titleAccent="ZERO MERCY." />
      <MatchLoopScene />
    </section>

    {/* WEAPONS + CYBER teaser */}
    <SectionBreak ch="05" title="LOADOUT TEASER" jp="武装一覧" />
    <section className="th-section alt">
      <SectionHead num="05 / LOADOUT" jp="武装" title="80+ WEAPONS." titleAccent="40+ CYBERWARE." />
      <Stagger className="grid-5" gap={0.09}>
        {[
          { category: "WEAPON", name: "TANTO-X",    type: "ENERGY SMG",    rarity: "RARE",      kanji: "短", imageSrc: "/art/weapons/tanto-x.jpg" },
          { category: "WEAPON", name: "RAIDEN-9",   type: "RAILGUN",       rarity: "EXOTIC",    kanji: "雷", imageSrc: "/art/weapons/raiden-9.jpg" },
          { category: "CYBER",  name: "VESPA-OS",   type: "NEURAL TIER 3", rarity: "EPIC",      kanji: "脳", imageSrc: "/art/cyber/vespa-os.jpg" },
          { category: "CYBER",  name: "ARGUS EYE",  type: "VISION TIER 2", rarity: "RARE",      kanji: "眼", imageSrc: "/art/cyber/argus-eye.jpg" },
          { category: "CYBER",  name: "TITAN ARMS", type: "COMBAT TIER 4", rarity: "LEGENDARY", kanji: "腕", imageSrc: "/art/cyber/titan-arms.jpg" },
        ].map((item) => (
          <Reveal key={item.name} direction="up" distance={16}>
            <CodexCard item={item} />
          </Reveal>
        ))}
      </Stagger>
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
        <Reveal direction="right" distance={20} amount={0.25}>
          <div style={{ fontFamily: "var(--font-hand)", fontSize: "clamp(20px, 2.4vw, 28px)", color: "var(--paper)", lineHeight: 1.2, marginBottom: 16 }}>
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
        </Reveal>
        <Reveal direction="left" distance={20} amount={0.25}
          style={{
            position: "relative",
            width: "100%",
            border: "1.5px solid var(--border-dark)",
            overflow: "hidden",
            aspectRatio: "1 / 1",
          }}
        >
          <Image
            src="/art/map/diagram.jpg"
            alt="Tokyo map diagram — 20 spawn zones, 2 traverse belts (highway, arcade), 1 center arena"
            fill
            sizes="(max-width: 820px) 100vw, 540px"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            style={{ objectFit: "contain" }}
          />
        </Reveal>
      </div>
    </section>

    {/* MEDIA */}
    <SectionBreak ch="07" title="MEDIA" jp="映像" />
    <section className="th-section alt">
      <SectionHead num="07 / MEDIA" jp="映像" title="SEE IT" titleAccent="IN MOTION." />
      <div className="media-stack">
        <Reveal direction="up" distance={20} as="a" amount={0.2} href="#trailer" className="media-trailer" aria-label="Watch trailer · 0:15">
          <Image
            src="/art/media/trailer-poster.jpg"
            alt=""
            fill
            sizes="(max-width: 1100px) 100vw, 1100px"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
            <div style={{ width: 76, height: 76, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 30, boxShadow: "0 6px 24px rgba(0,0,0,0.5)" }}>▶</div>
          </div>
          <div style={{ position: "absolute", bottom: 12, left: 12, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--paper)", letterSpacing: "0.14em", background: "rgba(0,0,0,0.65)", padding: "4px 8px", zIndex: 2 }}>TRAILER · 0:15</div>
        </Reveal>
        <Stagger className="media-thumbs" gap={0.06}>
          <Reveal direction="up" distance={12}><MediaThumb src="/art/media/gameplay.jpg"    label="GAMEPLAY · 0:48"    /></Reveal>
          <Reveal direction="up" distance={12}><MediaThumb src="/art/media/ability-vfx.jpg" label="ABILITY VFX · 0:22" /></Reveal>
          <Reveal direction="up" distance={12}><MediaThumb src="/art/media/hero-art.jpg"    label="HERO ART"          /></Reveal>
          <Reveal direction="up" distance={12}><MediaThumb src="/art/media/cyber-ui.jpg"    label="CYBER UI"          /></Reveal>
        </Stagger>
      </div>
    </section>

    {/* PRESS */}
    <section className="th-section darker">
      <SectionHead num="08 / PRESS" jp="評価" title="WHAT THEY'RE" titleAccent="SAYING." />
      <Stagger className="grid-4" gap={0.09}>
        {[
          ["\"BEST FPS LAUNCH IN 5 YEARS.\"", "IGN", "9.5"],
          ["\"FUTURE OF BATTLE ROYALE.\"", "PC GAMER", "94"],
          ["\"NEON-DRENCHED, RUTHLESS.\"", "POLYGON", "9/10"],
          ["\"SQUAD UP, OR DIE TRYING.\"", "EUROGAMER", "ESS."],
        ].map((q, i) => (
          <Reveal key={i} direction="up" distance={16} className="box dark" style={{ padding: 18 }}>
            <div style={{ fontFamily: "var(--font-hand)", fontWeight: 700, fontSize: 22, color: "var(--paper)", lineHeight: 1.2 }}>{q[0]}</div>
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between", marginTop: 14 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--accent)", letterSpacing: "0.14em" }}>{q[1]}</span>
              <span style={{ fontFamily: "var(--font-hand)", fontSize: 24, fontWeight: 700, color: "var(--accent)" }}>{q[2]}</span>
            </div>
          </Reveal>
        ))}
      </Stagger>
    </section>

    {/* PRE-LAUNCH CTA — countdown + email signup */}
    <section className="th-section" style={{ textAlign: "center", background: "#000", position: "relative", overflow: "hidden" }}>
      <Kanji size="huge" muted style={{ position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)", color: "var(--accent)", opacity: 0.08, fontSize: "min(360px, 40vw)" }}>狩</Kanji>
      <Stagger gap={0.14}>
        <Reveal direction="up" distance={16}>
          <Label accent style={{ position: "relative" }}>09 / OPERATION KIRIN</Label>
        </Reveal>
        <Reveal direction="up" distance={16}>
          <h2 className="th-sec-title" style={{ position: "relative", fontSize: "clamp(48px, 9vw, 110px)" }}>
            DROPS <span className="accent">07.31.26</span>
          </h2>
        </Reveal>
        <Reveal direction="up" distance={16}>
          <div style={{ fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--text-dark)", marginTop: 8, position: "relative" }}>
            Free to play. Forever. Pre-register for drop-in priority.
          </div>
        </Reveal>
        <Reveal direction="up" distance={16} style={{ position: "relative", display: "flex", justifyContent: "center", marginTop: 32 }}>
          <Countdown />
        </Reveal>
        <Reveal direction="up" distance={16} style={{ position: "relative", display: "flex", justifyContent: "center", marginTop: 36 }}>
          <EmailSignup />
        </Reveal>
        <Reveal direction="up" distance={16} className="row" style={{ justifyContent: "center", gap: 12, marginTop: 28, position: "relative", flexWrap: "wrap" }}>
          <Magnetic>
            <Btn variant="dark" size="xl" href="#trailer" style={{ borderColor: "var(--paper)" }}>▶ WATCH TRAILER</Btn>
          </Magnetic>
        </Reveal>
      </Stagger>
      <div style={{ marginTop: 16, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)", letterSpacing: "0.14em", position: "relative" }}>
        PC · PLAYSTATION 5 · XBOX SERIES X|S · CLOUD
      </div>
    </section>

    <Footer />
    <ScrollToTop />
    <TrailerModal />
  </main>
);
