/* eslint-disable react/no-unescaped-entities */
import {
  Brackets,
  Btn,
  Footer,
  HeroCTAs,
  Img,
  Kanji,
  Label,
  Lines,
  Logo,
  SectionBreak,
  SectionHead,
  Tag,
  Ticker,
  TopNav,
} from "../_components/wireframe-primitives";
import { ActCard } from "../_components/ui/ActCard";
import { CodexCard } from "../_components/ui/CodexCard";
import { Countdown } from "../_components/ui/Countdown";
import { EmailSignup } from "../_components/ui/EmailSignup";
import { HunterAvatar } from "../_components/ui/HunterAvatar";
import { HunterCard, type Hunter } from "../_components/ui/HunterCard";
import { HunterPreviewPanel } from "../_components/ui/HunterPreviewPanel";
import { Pillar } from "../_components/ui/Pillar";
import { StatBlock } from "../_components/ui/StatBlock";

const SAMPLE_HUNTERS: Hunter[] = [
  { id: "kira",  name: "KIRA-07", k: "斬", role: "ASSAULT", sig: "Phase Blade · 1.5s i-frame dash" },
  { id: "oni",   name: "ONI",     k: "鬼", role: "CONTROL", sig: "Kinetic Wall · deployable cover", selected: true },
  { id: "ghost", name: "GHOST",   k: "影", role: "RECON",   sig: "Spectral Scan · 30m wallhack" },
  { id: "zen",   name: "ZEN",     k: "禅", role: "RECON",   sig: "Time Echo · rewind 4s", isNew: true },
];

const COLOR_TOKENS = [
  { name: "--accent",      value: "#ff2a3d", use: "CTA, danger, kanji highlight, 1 detail/section" },
  { name: "--ink",         value: "#111418", use: "Text on paper, ink borders" },
  { name: "--ink-2",       value: "#2a2f36", use: "Secondary ink" },
  { name: "--ink-3",       value: "#4a5159", use: "Muted ink, captions on paper" },
  { name: "--paper",       value: "#f4f1ea", use: "Paper bg sections, text on dark" },
  { name: "--paper-2",     value: "#ebe6db", use: "Paper alt — subtle layering" },
  { name: "--paper-3",     value: "#ddd6c4", use: "Paper fill — strongest contrast" },
  { name: "--bg-dark",     value: "#0a0d12", use: "Main canvas bg" },
  { name: "--bg-dark-2",   value: "#0f1318", use: "Section alt bg" },
  { name: "--border-dark", value: "#2a2f36", use: "Borders on dark" },
  { name: "--text-dark",   value: "#cfd3da", use: "Body text on dark" },
  { name: "--muted-dark",  value: "#9aa1aa", use: "Muted text on dark" },
];

const TYPE_SAMPLES = [
  { token: "h-hero",        label: "Hero headline · Caveat",   className: "h-hero",        sample: "DROP. ADAPT. OUTLAST.",   note: "Use 1× per page max" },
  { token: "th-sec-title",  label: "Section title · Caveat",   className: "th-sec-title",  sample: "WAR IS A SYSTEM.",         note: "Section opener" },
  { token: "pillar-title",  label: "Pillar title · Caveat",    className: "pillar-title",  sample: "100-PLAYER ROYALE",        note: "Card / pillar headlines" },
  { token: "frame-title",   label: "Frame title · Caveat",     className: "frame-title",   sample: "Hunter Detail",            note: "Inline panel titles" },
  { token: "label",         label: "Label · JetBrains Mono",   className: "label",         sample: "HUNTER · ROLE · ASSAULT",  note: "Caption / metadata" },
  { token: "label.accent",  label: "Label accent · Mono",      className: "label accent",  sample: "// 02 / FOUR PILLARS",     note: "Section number" },
];

const SPACING = [
  { name: "4",  px: 4 },
  { name: "8",  px: 8 },
  { name: "12", px: 12 },
  { name: "16", px: 16 },
  { name: "24", px: 24 },
  { name: "32", px: 32 },
  { name: "48", px: 48 },
  { name: "64", px: 64 },
  { name: "96", px: 96 },
];

const sectionStyle = { padding: "clamp(40px, 6vw, 72px) clamp(20px, 4vw, 56px)" };
const subHeadStyle = { fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.18em", marginBottom: 16 };
const swatchBox = (bg: string) => ({
  width: "100%", height: 80,
  background: bg, border: "1px solid var(--border-dark)",
});

export default function DesignSystemPage() {
  return (
    <main className="th-canvas">
      <TopNav active="home" />

      {/* Page intro */}
      <section className="th-section flat" style={sectionStyle}>
        <div className="th-sec-head">
          <div className="num">{"//"} 00 / DESIGN SYSTEM</div>
          <div className="rule" />
          <Kanji size="md" accent>規範</Kanji>
        </div>
        <h1 className="h-hero" style={{ fontSize: "clamp(48px, 9vw, 110px)" }}>
          THE <span className="accent">SYSTEM.</span>
        </h1>
        <div style={{ maxWidth: 720, marginTop: 14, fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--text-dark)", lineHeight: 1.4 }}>
          Living style guide. Every token, primitive, and pattern that builds Tokyo Hunters. If it's not here, it shouldn't ship.
        </div>
        <div style={{ marginTop: 24, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)", letterSpacing: "0.14em" }}>
          READ FIRST → app/_components/DESIGN_INTENT.md
        </div>
      </section>

      {/* === COLOR TOKENS === */}
      <SectionBreak ch="01" title="COLOR TOKENS" jp="色彩" />
      <section className="th-section" style={sectionStyle}>
        <SectionHead num="01 / PALETTE" jp="色" title="TWELVE" titleAccent="COLORS." />
        <div style={subHeadStyle}>SOURCE OF TRUTH · :root in globals.css</div>
        <div className="grid-3">
          {COLOR_TOKENS.map((c) => (
            <div key={c.name} className="box dark" style={{ padding: 14 }}>
              <div style={swatchBox(c.value)} />
              <div style={{ marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--paper)", letterSpacing: "0.06em" }}>{c.name}</div>
              <div style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)" }}>{c.value}</div>
              <div style={{ marginTop: 8, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", lineHeight: 1.5 }}>{c.use}</div>
            </div>
          ))}
        </div>
      </section>

      {/* === TYPOGRAPHY === */}
      <SectionBreak ch="02" title="TYPOGRAPHY" jp="書体" />
      <section className="th-section alt" style={sectionStyle}>
        <SectionHead num="02 / TYPE" jp="文字" title="HAND" titleAccent="× MONO." />
        <div style={subHeadStyle}>RULE · Hand for emotion · Mono for information</div>
        <div className="col" style={{ gap: 20 }}>
          {TYPE_SAMPLES.map((t) => (
            <div key={t.token} className="box dark" style={{ padding: 22 }}>
              <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 200px", gap: 20, alignItems: "center" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.14em" }}>.{t.token}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", marginTop: 4 }}>{t.label}</div>
                </div>
                <div className={t.className}>{t.sample}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em", textAlign: "right" }}>{t.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 36 }}>
          <div style={subHeadStyle}>FONT FAMILIES</div>
          <div className="grid-4">
            {[
              { v: "--font-hand",  n: "Caveat",          s: "Drop. Adapt." },
              { v: "--font-mono",  n: "JetBrains Mono",  s: "100 / 1 / OUT" },
              { v: "--font-body",  n: "Inter",           s: "Body paragraph text" },
              { v: "--font-jp",    n: "Noto Sans JP",    s: "東京狩人" },
            ].map((f) => (
              <div key={f.v} className="box dark" style={{ padding: 18 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--accent)", letterSpacing: "0.14em" }}>{f.v}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)", marginTop: 4 }}>{f.n}</div>
                <div style={{ fontFamily: `var(${f.v})`, fontSize: 28, color: "var(--paper)", marginTop: 14, fontWeight: 700 }}>{f.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SPACING === */}
      <SectionBreak ch="03" title="SPACING" jp="間隔" />
      <section className="th-section" style={sectionStyle}>
        <SectionHead num="03 / SCALE" jp="寸法" title="NINE" titleAccent="STEPS." />
        <div style={subHeadStyle}>USE · clamp() for responsive · raw px for fixed-rhythm details</div>
        <div className="col" style={{ gap: 8 }}>
          {SPACING.map((s) => (
            <div key={s.name} className="row" style={{ alignItems: "center", gap: 16 }}>
              <div style={{ width: 48, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)" }}>{s.name}px</div>
              <div style={{ height: 12, width: s.px, background: "var(--accent)" }} />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>
                {s.px <= 12 ? "TIGHT · inside chips, between label lines"
                  : s.px <= 24 ? "DEFAULT · component padding, between cards"
                  : s.px <= 48 ? "SECTION · between blocks within a section"
                  : "BREAK · between sections"}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === BUTTONS === */}
      <SectionBreak ch="04" title="BUTTONS" jp="操作" />
      <section className="th-section alt" style={sectionStyle}>
        <SectionHead num="04 / BUTTONS" jp="押釦" title="THREE VARIANTS." titleAccent="THREE SIZES." />
        <div style={subHeadStyle}>USE · primary = main CTA · ghost = secondary · dark = on light bg</div>

        <div className="box dark" style={{ padding: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "120px repeat(3, 1fr)", gap: 16, alignItems: "center" }}>
            <div />
            <Label>VARIANT · default</Label>
            <Label>VARIANT · primary</Label>
            <Label>VARIANT · dark</Label>

            <Label>SIZE · default</Label>
            <Btn>► PLAY</Btn>
            <Btn variant="primary">► PLAY</Btn>
            <Btn variant="dark">► PLAY</Btn>

            <Label>SIZE · lg</Label>
            <Btn size="lg">► PLAY</Btn>
            <Btn variant="primary" size="lg">► PLAY</Btn>
            <Btn variant="dark" size="lg">► PLAY</Btn>

            <Label>SIZE · xl</Label>
            <Btn size="xl">► PLAY FREE</Btn>
            <Btn variant="primary" size="xl">► PLAY FREE</Btn>
            <Btn variant="dark" size="xl">► PLAY FREE</Btn>
          </div>
        </div>

        <div style={{ marginTop: 28 }}>
          <div style={subHeadStyle}>HERO PAIR · &lt;HeroCTAs /&gt;</div>
          <div className="box dark" style={{ padding: 28 }}>
            <HeroCTAs />
          </div>
        </div>
      </section>

      {/* === TAGS === */}
      <SectionBreak ch="05" title="TAGS" jp="標識" />
      <section className="th-section" style={sectionStyle}>
        <SectionHead num="05 / TAGS" jp="札" title="STATUS." titleAccent="ROLE." />
        <div style={subHeadStyle}>USE · status pill, role badge, season marker — never inline body text</div>
        <div className="box dark" style={{ padding: 28 }}>
          <div className="row" style={{ gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <Tag>DEFAULT</Tag>
            <Tag variant="accent">SEASON 0 · LIVE</Tag>
            <Tag variant="dark">CONTROL</Tag>
            <Tag variant="ghost-dark">RECON</Tag>
          </div>
        </div>
      </section>

      {/* === KANJI === */}
      <SectionBreak ch="06" title="KANJI" jp="漢字" />
      <section className="th-section alt" style={sectionStyle}>
        <SectionHead num="06 / KANJI" jp="装飾" title="DECORATION." titleAccent="NEVER INFO." />
        <div style={subHeadStyle}>RULE · Decorative only · Never carries meaning the user must read</div>
        <div className="box dark" style={{ padding: 28 }}>
          <div className="row" style={{ gap: 32, alignItems: "baseline", flexWrap: "wrap" }}>
            {(["sm", "md", "lg", "xl", "huge"] as const).map((sz) => (
              <div key={sz} className="col" style={{ alignItems: "center", gap: 8 }}>
                <Kanji size={sz} accent>狩</Kanji>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.14em" }}>SIZE · {sz.toUpperCase()}</div>
              </div>
            ))}
          </div>
          <hr className="hr dashed" style={{ margin: "24px 0" }} />
          <div className="row" style={{ gap: 32, alignItems: "baseline", flexWrap: "wrap" }}>
            <div className="col" style={{ alignItems: "center", gap: 8 }}>
              <Kanji size="lg">狩</Kanji>
              <Label>DEFAULT</Label>
            </div>
            <div className="col" style={{ alignItems: "center", gap: 8 }}>
              <Kanji size="lg" accent>狩</Kanji>
              <Label accent>ACCENT</Label>
            </div>
            <div className="col" style={{ alignItems: "center", gap: 8 }}>
              <Kanji size="lg" muted>狩</Kanji>
              <Label>MUTED · for bg deco</Label>
            </div>
          </div>
        </div>
      </section>

      {/* === WIREFRAME PLACEHOLDERS === */}
      <SectionBreak ch="07" title="WIREFRAME ATOMS" jp="下書" />
      <section className="th-section" style={sectionStyle}>
        <SectionHead num="07 / TEMP" jp="仮" title="WIREFRAME" titleAccent="ONLY." />
        <div style={subHeadStyle}>WARNING · Lines & Img are placeholders · Replace with real copy/image before ship</div>
        <div className="grid-2">
          <div className="box dark" style={{ padding: 22 }}>
            <Label accent>&lt;Lines /&gt; · text placeholder</Label>
            <div style={{ marginTop: 16 }}>
              <Lines count={3} widths={["100%", "92%", "55%"]} />
            </div>
          </div>
          <div className="box dark" style={{ padding: 22 }}>
            <Label accent>&lt;Img /&gt; · image placeholder</Label>
            <div style={{ marginTop: 16, height: 160 }}>
              <Img label="HERO PORTRAIT · KIRA-07" />
            </div>
          </div>
          <div className="box dark" style={{ padding: 22, position: "relative", minHeight: 120 }}>
            <Label accent>&lt;Brackets /&gt; · corner deco</Label>
            <Brackets />
          </div>
          <div className="box dark" style={{ padding: 22 }}>
            <Label accent>&lt;Logo /&gt;</Label>
            <div style={{ marginTop: 16 }}>
              <Logo />
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION PATTERNS === */}
      <SectionBreak ch="08" title="SECTION PATTERNS" jp="区画" />
      <section className="th-section alt" style={sectionStyle}>
        <SectionHead num="08 / SECTIONS" jp="節" title="HEAD." titleAccent="BREAK." />
        <div style={subHeadStyle}>USE · SectionHead opens a section · SectionBreak separates major chapters</div>

        <div className="box dark" style={{ padding: 28, marginBottom: 20 }}>
          <Label accent>&lt;SectionHead /&gt;</Label>
          <div style={{ marginTop: 20, padding: 20, background: "var(--bg-dark-2)", border: "1px solid var(--border-dark)" }}>
            <SectionHead num="XX / DEMO" jp="例" title="SECTION TITLE." titleAccent="ACCENT." />
          </div>
        </div>

        <div className="box dark" style={{ padding: 28 }}>
          <Label accent>&lt;SectionBreak /&gt;</Label>
          <div style={{ marginTop: 20 }}>
            <SectionBreak ch="XX" title="CHAPTER NAME" jp="章名" />
          </div>
        </div>
      </section>

      {/* === TICKER === */}
      <SectionBreak ch="09" title="TICKER" jp="速報" />
      <section className="th-section" style={sectionStyle}>
        <SectionHead num="09 / TICKER" jp="流" title="LIVE STATUS." titleAccent="ACCENT BAR." />
        <div style={subHeadStyle}>USE · 1 instance per page max · directly under hero</div>
        <Ticker items={["DESIGN SYSTEM v0.1", "12 TOKENS", "8 PRIMITIVES", "5 PATTERNS", "東京狩人", "READ THE RULES"]} />
      </section>

      {/* === DOMAIN COMPONENTS === */}
      <SectionBreak ch="10" title="DOMAIN COMPONENTS" jp="部品" />
      <section className="th-section alt" style={sectionStyle}>
        <SectionHead num="10 / DOMAIN" jp="部品" title="GAME-SPECIFIC" titleAccent="COMPONENTS." />
        <div style={subHeadStyle}>BUILT · 5 / 5 · All extracted from inline JSX</div>

        {/* HunterCard */}
        <div className="box dark" style={{ padding: 28, marginBottom: 20 }}>
          <Label accent>&lt;HunterCard /&gt; — app/_components/ui/HunterCard.tsx</Label>
          <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>
            VARIANT · grid (default) — for home roster · selectable, no link
          </div>
          <div className="grid-4" style={{ marginTop: 18 }}>
            {SAMPLE_HUNTERS.map((h) => (
              <HunterCard key={h.id} hunter={h} />
            ))}
          </div>

          <div style={{ marginTop: 24, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>
            VARIANT · list — for /hunters page · taller, indexed, shows sig, links to /hunters/[id]
          </div>
          <div className="grid-4" style={{ marginTop: 18 }}>
            {SAMPLE_HUNTERS.map((h, i) => (
              <HunterCard key={h.id} hunter={h} variant="list" index={i + 1} />
            ))}
          </div>
        </div>

        {/* HunterAvatar */}
        <div className="box dark" style={{ padding: 28, marginBottom: 20 }}>
          <Label accent>&lt;HunterAvatar /&gt; — app/_components/ui/HunterAvatar.tsx</Label>
          <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>
            SQUARE 1:1 · USE · roster selector grid · STATES · default · selected · isNew
          </div>
          <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 80px))", gap: 10, maxWidth: 460 }}>
            {SAMPLE_HUNTERS.map((h) => (
              <HunterAvatar key={h.id} hunter={h} selected={h.id === "oni"} />
            ))}
          </div>
        </div>

        {/* Pillar */}
        <div className="box dark" style={{ padding: 28, marginBottom: 20 }}>
          <Label accent>&lt;Pillar /&gt; — app/_components/ui/Pillar.tsx</Label>
          <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>
            STATES · default · reverse · with custom body via children
          </div>
          <div className="col" style={{ gap: 16, marginTop: 18 }}>
            <Pillar number="I" title="100-PLAYER ROYALE" kanji="戦" description="20 squads · 1 city · 30-minute match" />
            <Pillar number="II" title="10 UNIQUE HUNTERS" kanji="鬼" description="Four roles · ranked queue · hand-tuned kits" reverse />
          </div>
        </div>

        {/* StatBlock */}
        <div className="box dark" style={{ padding: 28, marginBottom: 20 }}>
          <Label accent>&lt;StatBlock /&gt; — app/_components/ui/StatBlock.tsx</Label>
          <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>
            VALUE · hand · ACCENT &nbsp;·&nbsp; LABEL · mono · MUTED
          </div>
          <div className="hero-stats" style={{ marginTop: 18 }}>
            <StatBlock value="2.4M" label="HUNTERS" />
            <StatBlock value="10"   label="ROSTER" />
            <StatBlock value="247K" label="ONLINE" />
            <StatBlock value="9.4"  label="METACRITIC" />
          </div>
        </div>

        {/* ActCard */}
        <div className="box dark" style={{ padding: 28, marginBottom: 20 }}>
          <Label accent>&lt;ActCard /&gt; — app/_components/ui/ActCard.tsx</Label>
          <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>
            USE · timeline phase, sequenced steps, chaptered content
          </div>
          <div className="grid-3" style={{ marginTop: 18 }}>
            <ActCard phase="ACT I"   title="DROP & LOOT"   time="0:00 – 8:00"   kanji="拾" description="Spawn in 1 of 20 mirrored zones. Loot baseline gear at your own pace." />
            <ActCard phase="ACT II"  title="CONVERGE"      time="8:00 – 20:00"  kanji="集" description="Zone barriers drop. Pick your fights for premium loot." />
            <ActCard phase="ACT III" title="FINAL CIRCLE"  time="20:00 – 30:00" kanji="勝" description="Neon ring collapses. Last squad standing wins." />
          </div>
        </div>

        {/* CodexCard */}
        <div className="box dark" style={{ padding: 28, marginBottom: 20 }}>
          <Label accent>&lt;CodexCard /&gt; — app/_components/ui/CodexCard.tsx</Label>
          <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>
            CATEGORY · WEAPON | CYBER &nbsp;·&nbsp; RARITY · COMMON | RARE | EPIC | LEGENDARY | EXOTIC
          </div>
          <div className="grid-5" style={{ marginTop: 18 }}>
            <CodexCard item={{ category: "WEAPON", name: "TANTO-X",    type: "ENERGY SMG",    rarity: "RARE",      kanji: "短", imageSrc: "/art/weapons/tanto-x.jpg" }} />
            <CodexCard item={{ category: "WEAPON", name: "RAIDEN-9",   type: "RAILGUN",       rarity: "EXOTIC",    kanji: "雷", imageSrc: "/art/weapons/raiden-9.jpg" }} />
            <CodexCard item={{ category: "CYBER",  name: "VESPA-OS",   type: "NEURAL TIER 3", rarity: "EPIC",      kanji: "脳", imageSrc: "/art/cyber/vespa-os.jpg" }} />
            <CodexCard item={{ category: "CYBER",  name: "ARGUS EYE",  type: "VISION TIER 2", rarity: "RARE",      kanji: "眼", imageSrc: "/art/cyber/argus-eye.jpg" }} />
            <CodexCard item={{ category: "CYBER",  name: "TITAN ARMS", type: "COMBAT TIER 4", rarity: "LEGENDARY", kanji: "腕", imageSrc: "/art/cyber/titan-arms.jpg" }} />
          </div>
        </div>

        {/* HunterPreviewPanel */}
        <div className="box dark" style={{ padding: 28 }}>
          <Label accent>&lt;HunterPreviewPanel /&gt; — app/_components/ui/HunterPreviewPanel.tsx</Label>
          <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>
            COMPOSITE · Img + bg Kanji + glass overlay panel
          </div>
          <div style={{ marginTop: 18, maxWidth: 540 }}>
            <HunterPreviewPanel
              index={1}
              total={10}
              role="ASSAULT"
              name="KIRA-07"
              kanji="斬"
              sig={'"PHASE BLADE" · I-FRAME DASH 1.5s'}
              imageLabel="HERO PORTRAIT · KIRA-07 · neon rim light"
              minHeight={420}
            />
          </div>
        </div>
      </section>

      {/* === PRE-LAUNCH === */}
      <SectionBreak ch="11" title="PRE-LAUNCH" jp="開幕前" />
      <section className="th-section" style={sectionStyle}>
        <SectionHead num="11 / PRE-LAUNCH" jp="開幕" title="COUNTDOWN." titleAccent="SIGNUP." />
        <div style={subHeadStyle}>USE · 1 instance per page max · final CTA section</div>

        <div className="box dark" style={{ padding: 28, marginBottom: 20 }}>
          <Label accent>&lt;Countdown /&gt; — app/_components/ui/Countdown.tsx</Label>
          <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>
            DEFAULT TARGET · 2026-07-15 00:00 JST · ticks every second
          </div>
          <div style={{ marginTop: 18, display: "flex", justifyContent: "center" }}>
            <Countdown />
          </div>
        </div>

        <div className="box dark" style={{ padding: 28 }}>
          <Label accent>&lt;EmailSignup /&gt; — app/_components/ui/EmailSignup.tsx</Label>
          <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>
            STATES · idle · error (invalid email) · submitting · success
          </div>
          <div style={{ marginTop: 18, display: "flex", justifyContent: "center" }}>
            <EmailSignup />
          </div>
          <div style={{ marginTop: 14, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em", textAlign: "center" }}>
            BACKEND · TODO · currently logs to console only
          </div>
        </div>
      </section>

      {/* === INTENTIONAL FLAWS === */}
      <SectionBreak ch="12" title="INTENTIONAL FLAWS" jp="侘寂" />
      <section className="th-section" style={sectionStyle}>
        <SectionHead num="12 / WABI-SABI" jp="美" title="DO NOT" titleAccent="POLISH." />
        <div style={subHeadStyle}>WARNING · These look like bugs · They are the brand · See DESIGN_INTENT.md §4</div>
        <div className="grid-2">
          {[
            { rule: "Shadow lệch 6px 8px (no blur)",   keep: "Cảm giác tờ giấy xếp chồng" },
            { rule: "Image placeholder gạch chéo X",   keep: "Cảm giác field manual" },
            { rule: "Divider dashed perforation",      keep: "Cảm giác sổ tay" },
            { rule: "Border 1.5px (không phải 1px)",   keep: "Ink trên giấy, không phải CSS border" },
            { rule: "Caveat font hand-drawn lệch",     keep: "Khẩu hiệu viết tay trên tường" },
            { rule: "ASCII glyph ► ▶ ≡ thay icon",     keep: "Terminal/HUD low-tech" },
            { rule: "uppercase + 0.18em letter-spacing", keep: "Military stencil" },
          ].map((r, i) => (
            <div key={i} className="box dark" style={{ padding: 18 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.08em" }}>RULE · {String(i + 1).padStart(2, "0")}</div>
              <div style={{ fontFamily: "var(--font-hand)", fontSize: 24, color: "var(--paper)", marginTop: 8, lineHeight: 1.2 }}>{r.rule}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dark)", marginTop: 8 }}>KEEP · {r.keep}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
