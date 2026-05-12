/* eslint-disable react/jsx-no-comment-textnodes, react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
/* th-pages-2.jsx — Weapons, Cyberware, Esports, Store, News, Patch Notes */

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

const WEAPONS = [
  { id:"tanto",  k:"短", n:"TANTO-X",   c:"SMG",      r:"RARE",      dps:412, rng:"S", fire:"AUTO",  ammo:"9mm" },
  { id:"raiden", k:"雷", n:"RAIDEN-9",  c:"RAILGUN",  r:"EXOTIC",    dps:980, rng:"L", fire:"CHARGE",ammo:"COIL" },
  { id:"kasumi", k:"霧", n:"KASUMI",    c:"SHOTGUN",  r:"EPIC",      dps:720, rng:"S", fire:"PUMP",  ammo:"12g" },
  { id:"hayate", k:"風", n:"HAYATE",    c:"AR",       r:"COMMON",    dps:380, rng:"M", fire:"AUTO",  ammo:"5.56" },
  { id:"sumi",   k:"墨", n:"SUMI",      c:"SNIPER",   r:"LEGENDARY", dps:920, rng:"L", fire:"BOLT",  ammo:".50" },
  { id:"kage",   k:"影", n:"KAGE",      c:"PISTOL",   r:"RARE",      dps:280, rng:"S", fire:"SEMI",  ammo:"9mm" },
  { id:"oni-b",  k:"鬼", n:"ONI-BREAKR",c:"LMG",      r:"EPIC",      dps:610, rng:"M", fire:"AUTO",  ammo:"7.62" },
  { id:"katana", k:"刀", n:"KATANA-K1", c:"MELEE",    r:"LEGENDARY", dps:1200,rng:"M", fire:"BLADE", ammo:"—" },
  { id:"yumi",   k:"弓", n:"YUMI",      c:"BOW",      r:"RARE",      dps:480, rng:"L", fire:"DRAW",  ammo:"ARROW" },
  { id:"kiri",   k:"霧", n:"KIRI SMG",  c:"SMG",      r:"COMMON",    dps:340, rng:"S", fire:"AUTO",  ammo:"9mm" },
];

export const PageWeapons = () => (
  <main className="th-canvas">
    <TopNav active="weapons" />

    <section className="th-section flat" style={{ paddingBottom: "clamp(24px, 3vw, 40px)" }}>
      <div className="th-sec-head">
        <div className="num">// 01 / ARSENAL</div>
        <div className="rule" />
        <Kanji size="md" accent>武器</Kanji>
      </div>
      <h1 className="h-hero" style={{ fontSize: "clamp(48px, 9vw, 110px)" }}>THE <span className="accent">ARSENAL.</span></h1>
      <div style={{ maxWidth: 720, marginTop: 14, fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--text-dark)", lineHeight: 1.4 }}>
        80+ weapons across 9 classes. Learn the meta, pick your loadout.
      </div>
      <div className="row" style={{ alignItems: "center", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
        <Label>CLASS ·</Label>
        {["ALL", "SMG", "AR", "SHOTGUN", "SNIPER", "PISTOL", "LMG", "MELEE", "BOW", "EXOTIC"].map((f, i) => (
          <Tag key={i} variant={i === 0 ? "accent" : "ghost-dark"}>{f}</Tag>
        ))}
      </div>
      <div className="row" style={{ alignItems: "center", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
        <Label>RARITY ·</Label>
        {["ALL", "COMMON", "RARE", "EPIC", "LEGENDARY", "EXOTIC"].map((f, i) => (
          <Tag key={i} variant={i === 0 ? "accent" : "ghost-dark"}>{f}</Tag>
        ))}
      </div>
    </section>

    <SectionBreak ch="02" title="CATALOG" jp="目録" />

    <section className="th-section">
      <div className="grid-4">
        {WEAPONS.map((w, i) => (
          <div key={w.id} className="codex-card" style={{ minHeight: 280 }}>
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <Tag variant="ghost-dark">{w.c}</Tag>
              <span className="rarity">{w.r}</span>
            </div>
            <div className="art" style={{ height: 110 }}><Kanji className="kanji">{w.k}</Kanji></div>
            <div className="name">{w.n}</div>
            <div className="type">{w.fire} · {w.ammo}</div>
            <hr className="hr dashed" style={{ margin: "10px 0" }} />
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>DPS</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--paper)" }}>{w.dps}</span>
            </div>
            <div style={{ height: 4, background: "#1f242a", marginBottom: 8 }}>
              <div style={{ height: "100%", width: `${(w.dps/1200)*100}%`, background: "var(--accent)" }} />
            </div>
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)" }}>RANGE</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--paper)" }}>{w.rng}</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    <SectionBreak ch="03" title="WEAPON OF THE WEEK" jp="話題" />
    <section className="th-section alt">
      <SectionHead num="03 / SPOTLIGHT" jp="話題" title="WEAPON OF" titleAccent="THE WEEK." />
      <div className="split image-r">
        <div>
          <Tag variant="accent">PICK RATE +12% · NERF INCOMING</Tag>
          <div style={{ fontFamily: "var(--font-hand)", fontSize: 80, fontWeight: 700, color: "var(--paper)", lineHeight: 0.9, marginTop: 12 }}>RAIDEN-9</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.16em", marginTop: 6 }}>EXOTIC · RAILGUN · CHARGE FIRE</div>
          <hr className="hr accent" style={{ margin: "20px 0", width: 80, height: 2 }} />
          <div className="grid-2" style={{ gap: 12 }}>
            {[["DAMAGE", "980"], ["FIRE RATE", "1.2"], ["RANGE", "LONG"], ["MAG", "3 / 9"], ["RELOAD", "3.8s"], ["MOBILITY", "−40%"]].map(([k,v], i) => (
              <div key={i}>
                <Label>{k}</Label>
                <div style={{ fontFamily: "var(--font-hand)", fontSize: 28, fontWeight: 700, color: "var(--paper)" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
        <Img label="RAIDEN-9 · 3D RENDER" style={{ minHeight: 420 }}>
          <Kanji size="huge" accent style={{ position: "absolute", top: 30, right: 30, opacity: 0.5, fontSize: "min(220px, 26vw)" }}>雷</Kanji>
        </Img>
      </div>
    </section>

    <Footer />
  </main>
);

const CYBER = [
  { k:"脳", n:"VESPA-OS",     s:"NEURAL",  t:"3", r:"EPIC",      d:"+15% ability charge rate" },
  { k:"眼", n:"ARGUS EYE",    s:"VISION",  t:"2", r:"RARE",      d:"30m enemy outline through walls (2s burst)" },
  { k:"腕", n:"TITAN ARMS",   s:"COMBAT",  t:"4", r:"LEGENDARY", d:"+25% melee dmg · +50 hp" },
  { k:"足", n:"PHASE LEGS",   s:"MOVEMENT",t:"3", r:"EPIC",      d:"double-jump · 1s i-frame slide" },
  { k:"心", n:"KIRIN HEART",  s:"CORE",    t:"4", r:"LEGENDARY", d:"+100 hp regen · revive self once" },
  { k:"皮", n:"NEON SKIN",    s:"DEFENSE", t:"2", r:"RARE",      d:"−15% all dmg taken" },
  { k:"耳", n:"ECHO PINS",    s:"AUDIO",   t:"2", r:"RARE",      d:"50m footstep detection radius" },
  { k:"血", n:"BLOODNET-X",   s:"COMBAT",  t:"3", r:"EPIC",      d:"+20% reload speed when below 50% hp" },
];

export const PageCyber = () => (
  <main className="th-canvas">
    <TopNav active="cyberware" />

    <section className="th-section flat" style={{ paddingBottom: "clamp(24px, 3vw, 40px)" }}>
      <div className="th-sec-head">
        <div className="num">// 01 / CYBERWARE</div>
        <div className="rule" />
        <Kanji size="md" accent>改造</Kanji>
      </div>
      <h1 className="h-hero" style={{ fontSize: "clamp(48px, 9vw, 110px)" }}>UPGRADE <span className="accent">YOURSELF.</span></h1>
      <div style={{ maxWidth: 720, marginTop: 14, fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--text-dark)", lineHeight: 1.4 }}>
        40+ implants across 8 slots. Install at city terminals mid-match. Stack effects, break the meta.
      </div>
    </section>

    <SectionBreak ch="02" title="SLOTS" jp="八カ所" />
    <section className="th-section">
      <SectionHead num="02 / ANATOMY" jp="身体" title="EIGHT" titleAccent="SLOTS." />
      <div className="split image-r">
        <div className="col" style={{ gap: 8 }}>
          {["NEURAL · brain · ability mods", "VISION · eyes · awareness", "AUDIO · ears · scout", "CORE · heart · vitality", "COMBAT · arms · damage", "MOVEMENT · legs · mobility", "DEFENSE · skin · mitigation", "WEAPON · grip · handling"].map((s, i) => (
            <div key={i} className="row" style={{ alignItems: "baseline", gap: 14, padding: "10px 12px", borderBottom: "1px dashed var(--border-dark)", background: i === 0 ? "var(--bg-dark-2)" : "transparent" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.14em", minWidth: 28 }}>0{i+1}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dark)", letterSpacing: "0.06em" }}>{s}</span>
            </div>
          ))}
        </div>
        {/* anatomy diagram */}
        <div className="box dark" style={{ padding: 24, position: "relative", aspectRatio: "3 / 4", minHeight: 460 }}>
          <Brackets />
          <Label accent style={{ position: "absolute", top: 14, left: 16 }}>FIG. B · IMPLANT MAP</Label>
          <svg viewBox="0 0 300 400" style={{ width: "100%", height: "100%" }}>
            {/* simple figure */}
            <circle cx="150" cy="60" r="34" fill="none" stroke="var(--paper)" strokeWidth="1.5" />
            <line x1="150" y1="94"  x2="150" y2="240" stroke="var(--paper)" strokeWidth="1.5" />
            <line x1="150" y1="120" x2="90"  y2="180" stroke="var(--paper)" strokeWidth="1.5" />
            <line x1="150" y1="120" x2="210" y2="180" stroke="var(--paper)" strokeWidth="1.5" />
            <line x1="150" y1="240" x2="110" y2="350" stroke="var(--paper)" strokeWidth="1.5" />
            <line x1="150" y1="240" x2="190" y2="350" stroke="var(--paper)" strokeWidth="1.5" />
            {/* slots */}
            {[
              [150, 50, "脳", "NEURAL"], [170, 70, "眼", "VISION"], [130, 75, "耳", "AUDIO"],
              [150, 160, "心", "CORE"], [90, 180, "腕", "COMBAT"], [210, 180, "皮", "DEFENSE"],
              [110, 290, "足", "MOVEMENT"], [190, 250, "手", "WEAPON"],
            ].map(([x,y,k,l], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="11" fill="#000" stroke="var(--accent)" strokeWidth="1.5" />
                <text x={x} y={y+4} textAnchor="middle" fill="var(--accent)" fontFamily="var(--font-jp)" fontSize="11" fontWeight="900">{k}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>

    <SectionBreak ch="03" title="CATALOG" jp="目録" />
    <section className="th-section alt">
      <SectionHead num="03 / CATALOG" jp="目録" title="THE" titleAccent="IMPLANTS." />
      <div className="grid-4">
        {CYBER.map((c, i) => (
          <div key={i} className="codex-card" style={{ minHeight: 260 }}>
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <Tag variant="ghost-dark">{c.s} · T{c.t}</Tag>
              <span className="rarity">{c.r}</span>
            </div>
            <div className="art" style={{ height: 100 }}><Kanji className="kanji">{c.k}</Kanji></div>
            <div className="name">{c.n}</div>
            <hr className="hr dashed" style={{ margin: "10px 0" }} />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dark)", lineHeight: 1.5 }}>{c.d}</div>
          </div>
        ))}
      </div>
      <div className="row" style={{ justifyContent: "center", marginTop: 24 }}>
        <Btn variant="dark" href="/cyberware" style={{ borderColor: "var(--paper)" }}>LOAD MORE · 32 / 40 →</Btn>
      </div>
    </section>

    <SectionBreak ch="04" title="HOW TO INSTALL" jp="装着" />
    <section className="th-section">
      <SectionHead num="04 / INSTALL" jp="装着" title="HOW IT" titleAccent="WORKS." />
      <div className="grid-3">
        {[
          ["FIND A TERMINAL", "Each of the 20 drop-zones has one. The Open Zone has four — contested.", "見"],
          ["SPEND SHARDS",    "Loot cyber-shards from premium crates. Each tier costs 1 / 3 / 5 / 8.",       "金"],
          ["INSTALL LIVE",    "2-second cast time, vulnerable. Stack up to 8 implants per match.",          "改"],
        ].map((s, i) => (
          <div key={i} className="box dark" style={{ padding: 22 }}>
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <Label accent>STEP · 0{i+1}</Label>
              <Kanji size="lg" accent>{s[2]}</Kanji>
            </div>
            <h3 style={{ fontFamily: "var(--font-hand)", fontSize: 32, color: "var(--paper)", margin: "8px 0 12px", lineHeight: 1 }}>{s[0]}</h3>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dark)", lineHeight: 1.6 }}>{s[1]}</div>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </main>
);

/* ---------- ESPORTS ---------- */

export const PageEsports = () => (
  <main className="th-canvas">
    <TopNav active="esports" />

    <section className="th-section flat" style={{ paddingBottom: "clamp(24px, 3vw, 40px)" }}>
      <div className="th-sec-head">
        <div className="num">// 01 / TH PRO LEAGUE</div>
        <div className="rule" />
        <Kanji size="md" accent>競技</Kanji>
      </div>
      <h1 className="h-hero" style={{ fontSize: "clamp(48px, 9vw, 110px)" }}>TH PRO <span className="accent">LEAGUE.</span></h1>
      <div style={{ maxWidth: 720, marginTop: 14, fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--text-dark)", lineHeight: 1.4 }}>
        Season 0 World Championship · $2.5M prize pool · 32 teams · Tokyo Dome · December 2026.
      </div>
    </section>

    {/* Featured next match */}
    <SectionBreak ch="02" title="NEXT MATCH" jp="次戦" />
    <section className="th-section">
      <div className="box dark" style={{ padding: 0, overflow: "hidden", position: "relative" }}>
        <Img label="LIVE STREAM · BROADCAST FEED" style={{ aspectRatio: "16 / 7", border: 0 }}>
          <div style={{ position: "absolute", top: 16, left: 16 }}><Tag variant="accent">● LIVE · 124,400 VIEWERS</Tag></div>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            <div className="col" style={{ alignItems: "center", gap: 8 }}>
              <Kanji size="xl" accent>龍</Kanji>
              <div style={{ fontFamily: "var(--font-hand)", fontSize: 36, fontWeight: 700, color: "var(--paper)" }}>DRAGONS</div>
            </div>
            <div style={{ fontFamily: "var(--font-hand)", fontSize: 64, fontWeight: 700, color: "var(--accent)" }}>VS</div>
            <div className="col" style={{ alignItems: "center", gap: 8 }}>
              <Kanji size="xl" accent>虎</Kanji>
              <div style={{ fontFamily: "var(--font-hand)", fontSize: 36, fontWeight: 700, color: "var(--paper)" }}>TIGERS</div>
            </div>
          </div>
        </Img>
        <div className="row" style={{ padding: 20, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
          <div>
            <Label accent>FINAL · BO5 · GROUP STAGE</Label>
            <div style={{ fontFamily: "var(--font-hand)", fontSize: 26, fontWeight: 700, color: "var(--paper)", marginTop: 4 }}>NEON DRAGONS vs SHIBUYA TIGERS</div>
          </div>
          <Btn variant="primary" size="lg" href="/esports">▶ WATCH LIVE</Btn>
        </div>
      </div>
    </section>

    {/* Standings */}
    <SectionBreak ch="03" title="STANDINGS" jp="順位" />
    <section className="th-section alt">
      <SectionHead num="03 / GROUP A" jp="A組" title="GROUP A" titleAccent="STANDINGS." />
      <div className="col" style={{ gap: 4 }}>
        {[
          ["NEON DRAGONS",   "龍", "8-2", "$ 240K"],
          ["SHIBUYA TIGERS", "虎", "7-3", "$ 180K"],
          ["BLACK CROWS",    "烏", "6-4", "$ 120K"],
          ["IRON FOXES",     "狐", "5-5", "$  80K"],
          ["RED PANDAS",     "熊", "4-6", "$  40K"],
          ["SKY SHARKS",     "鮫", "3-7", "$  20K"],
          ["DUSK WOLVES",    "狼", "2-8", "$  10K"],
          ["GHOST OWLS",     "梟", "1-9", "$   5K"],
        ].map((t, i) => (
          <div key={i} className="row" style={{ alignItems: "center", padding: "12px 16px", background: "var(--bg-dark)", border: "1px solid var(--border-dark)", gap: 16, fontFamily: "var(--font-mono)" }}>
            <span style={{ fontSize: 11, color: i < 3 ? "var(--accent)" : "var(--muted-dark)", minWidth: 24 }}>0{i+1}</span>
            <Kanji size="md" accent>{t[1]}</Kanji>
            <span style={{ fontFamily: "var(--font-hand)", fontSize: 22, fontWeight: 700, color: "var(--paper)", flex: 1 }}>{t[0]}</span>
            <span style={{ fontSize: 12, color: "var(--paper)", minWidth: 50, textAlign: "right" }}>{t[2]}</span>
            <span style={{ fontSize: 11, color: "var(--accent)", minWidth: 80, textAlign: "right" }}>{t[3]}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Schedule */}
    <SectionBreak ch="04" title="SCHEDULE" jp="日程" />
    <section className="th-section">
      <SectionHead num="04 / SCHEDULE" jp="日程" title="THIS" titleAccent="WEEK." />
      <div className="grid-3">
        {[
          ["TUE · 19:00 JST", "DRAGONS vs TIGERS", "BO5 · FINAL"],
          ["WED · 19:00 JST", "CROWS vs FOXES",    "BO3 · SEMI"],
          ["THU · 19:00 JST", "PANDAS vs SHARKS",  "BO3 · SEMI"],
          ["FRI · 19:00 JST", "WOLVES vs OWLS",    "BO3 · QUALIFIER"],
          ["SAT · 17:00 JST", "GRAND FINAL",       "BO7 · LIVE @ TOKYO DOME"],
          ["SUN · 14:00 JST", "ALL-STAR EXHIBITION","SPECIAL · COSMETIC PRIZES"],
        ].map((m, i) => (
          <div key={i} className="box dark" style={{ padding: 18 }}>
            <Label accent>{m[0]}</Label>
            <div style={{ fontFamily: "var(--font-hand)", fontSize: 24, fontWeight: 700, color: "var(--paper)", marginTop: 6, lineHeight: 1.1 }}>{m[1]}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)", marginTop: 6, letterSpacing: "0.12em" }}>{m[2]}</div>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </main>
);

/* ---------- STORE ---------- */

export const PageStore = () => (
  <main className="th-canvas">
    <TopNav active="store" />

    <section className="th-section flat" style={{ paddingBottom: "clamp(24px, 3vw, 40px)" }}>
      <div className="th-sec-head">
        <div className="num">// 01 / THE STORE</div>
        <div className="rule" />
        <Kanji size="md" accent>商店</Kanji>
      </div>
      <h1 className="h-hero" style={{ fontSize: "clamp(48px, 9vw, 110px)" }}>STYLE. <span className="accent">YOURS.</span></h1>
      <div style={{ maxWidth: 720, marginTop: 14, fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--text-dark)", lineHeight: 1.4 }}>
        Cosmetics only. No pay-to-win. The game is free — only the drip costs.
      </div>
      <div className="row" style={{ alignItems: "center", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
        <Tag variant="accent">FEATURED</Tag>
        <Tag variant="ghost-dark">SKINS</Tag>
        <Tag variant="ghost-dark">WEAPON CHARMS</Tag>
        <Tag variant="ghost-dark">EMOTES</Tag>
        <Tag variant="ghost-dark">SPRAYS</Tag>
        <Tag variant="ghost-dark">BATTLE PASS</Tag>
        <span style={{ flex: 1 }} />
        <Label>BALANCE · 2,480 CRD</Label>
      </div>
    </section>

    {/* Featured: Battle Pass */}
    <SectionBreak ch="02" title="BATTLE PASS" jp="戦闘証" />
    <section className="th-section">
      <div className="split">
        <Img label="SEASON 0 · OPERATION KIRIN · KEY ART" style={{ minHeight: 400 }}>
          <Kanji size="huge" accent style={{ position: "absolute", top: 20, right: 20, opacity: 0.5, fontSize: "min(200px, 25vw)" }}>麒</Kanji>
        </Img>
        <div>
          <Tag variant="accent">42 DAYS LEFT</Tag>
          <div style={{ fontFamily: "var(--font-hand)", fontSize: 72, fontWeight: 700, color: "var(--paper)", lineHeight: 0.9, marginTop: 12 }}>OPERATION<br/>KIRIN</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.16em", marginTop: 10 }}>SEASON 0 · BATTLE PASS · 100 TIERS</div>
          <hr className="hr accent" style={{ margin: "20px 0", width: 80, height: 2 }} />
          <Lines count={3} widths={["100%", "92%", "70%"]} />
          <div className="row" style={{ alignItems: "baseline", gap: 14, marginTop: 22, flexWrap: "wrap" }}>
            <div>
              <Label>STANDARD</Label>
              <div style={{ fontFamily: "var(--font-hand)", fontSize: 36, fontWeight: 700, color: "var(--paper)" }}>950 CRD</div>
            </div>
            <div>
              <Label accent>PREMIUM +25 TIERS</Label>
              <div style={{ fontFamily: "var(--font-hand)", fontSize: 36, fontWeight: 700, color: "var(--accent)" }}>2,800 CRD</div>
            </div>
          </div>
          <Btn variant="primary" size="lg" href="/store" style={{ marginTop: 22 }}>UNLOCK BATTLE PASS →</Btn>
        </div>
      </div>
    </section>

    {/* Featured items */}
    <SectionBreak ch="03" title="FEATURED" jp="特集" />
    <section className="th-section alt">
      <SectionHead num="03 / FEATURED" jp="特集" title="THIS WEEK'S" titleAccent="ROTATION." />
      <div className="grid-4">
        {[
          ["NEON RONIN BUNDLE","ONI", "鬼", "LEGENDARY", "2,400"],
          ["KATANA · ROYAL",   "KATANA-K1", "刀", "EPIC", "1,200"],
          ["GHOST PROTOCOL",   "GHOST", "影", "RARE", "600"],
          ["DRAGON DANCE",     "EMOTE", "舞", "EPIC", "800"],
          ["KIRIN SPRAY SET",  "SPRAYS · 5", "麒", "RARE", "400"],
          ["RAILGUN · BLACK",  "RAIDEN-9", "雷", "EPIC", "1,000"],
          ["SUMI SKIN",        "SUMI", "墨", "LEGENDARY", "1,800"],
          ["CHARM · TANUKI",   "CHARM", "狸", "RARE", "300"],
        ].map((it, i) => (
          <div key={i} className="box dark" style={{ padding: 0 }}>
            <Img label={it[1]} style={{ aspectRatio: "1 / 1.05", border: 0, position: "relative" }}>
              <Kanji size="xl" accent style={{ position: "absolute", bottom: 12, right: 12, opacity: 0.5 }}>{it[2]}</Kanji>
              {it[3] === "LEGENDARY" && <span style={{ position: "absolute", top: 10, left: 10, fontFamily: "var(--font-mono)", fontSize: 9, padding: "3px 7px", background: "var(--accent)", color: "#fff", letterSpacing: "0.14em" }}>LEGENDARY</span>}
            </Img>
            <div style={{ padding: 14 }}>
              <div style={{ fontFamily: "var(--font-hand)", fontSize: 22, fontWeight: 700, color: "var(--paper)", lineHeight: 1.1 }}>{it[0]}</div>
              <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between", marginTop: 8 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>{it[3]}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)" }}>{it[4]} CRD</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Currency packs */}
    <SectionBreak ch="04" title="CREDITS" jp="通貨" />
    <section className="th-section">
      <SectionHead num="04 / CURRENCY" jp="通貨" title="GET" titleAccent="CREDITS." />
      <div className="grid-4">
        {[
          ["1,000 CRD",  "$ 9.99",  "STARTER"],
          ["2,800 CRD",  "$ 24.99", "+ 12% BONUS"],
          ["5,800 CRD",  "$ 49.99", "+ 16% BONUS · POPULAR"],
          ["12,000 CRD", "$ 99.99", "+ 20% BONUS"],
        ].map((p, i) => (
          <div key={i} className="box dark" style={{ padding: 22, textAlign: "center", borderColor: i === 2 ? "var(--accent)" : "var(--border-dark)" }}>
            {i === 2 && <Tag variant="accent" style={{ marginBottom: 10 }}>BEST VALUE</Tag>}
            <div style={{ fontFamily: "var(--font-hand)", fontSize: 36, fontWeight: 700, color: "var(--paper)", lineHeight: 1 }}>{p[0]}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.12em", marginTop: 6 }}>{p[2]}</div>
            <hr className="hr dashed" style={{ margin: "14px 0" }} />
            <div style={{ fontFamily: "var(--font-hand)", fontSize: 28, fontWeight: 700, color: "var(--paper)" }}>{p[1]}</div>
            <Btn variant="primary" href="/store" style={{ marginTop: 14, width: "100%" }}>BUY</Btn>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, padding: 16, border: "1px dashed var(--border-dark)", textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)", letterSpacing: "0.12em" }}>
        ⚠ COSMETICS ONLY · NO LOOT BOXES · NO PAY-TO-WIN · ALL GAMEPLAY ITEMS EARNED IN-GAME
      </div>
    </section>

    <Footer />
  </main>
);

/* ---------- NEWS ---------- */

export const PageNews = () => (
  <main className="th-canvas">
    <TopNav active="news" />

    <section className="th-section flat" style={{ paddingBottom: "clamp(24px, 3vw, 40px)" }}>
      <div className="th-sec-head">
        <div className="num">// 01 / NEWS</div>
        <div className="rule" />
        <Kanji size="md" accent>新聞</Kanji>
      </div>
      <h1 className="h-hero" style={{ fontSize: "clamp(48px, 9vw, 110px)" }}>THE <span className="accent">FEED.</span></h1>
      <div style={{ maxWidth: 720, marginTop: 14, fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--text-dark)", lineHeight: 1.4 }}>
        Patch notes, dev blogs, esports, lore drops. Everything from the studio.
      </div>
      <div className="row" style={{ alignItems: "center", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
        {["ALL", "ANNOUNCEMENTS", "DEV BLOG", "PATCH NOTES", "ESPORTS", "LORE", "COMMUNITY"].map((f, i) => (
          <Tag key={i} variant={i === 0 ? "accent" : "ghost-dark"}>{f}</Tag>
        ))}
      </div>
    </section>

    <SectionBreak ch="02" title="LEAD" jp="主筆" />
    <section className="th-section">
      <div className="split">
        <Img label="ZEN · ABILITY REVEAL · KEY ART" style={{ minHeight: 380 }}>
          <Kanji size="huge" accent style={{ position: "absolute", top: 30, right: 30, opacity: 0.6, fontSize: "min(200px, 25vw)" }}>禅</Kanji>
        </Img>
        <div>
          <div className="row" style={{ alignItems: "center", gap: 10 }}>
            <Tag variant="accent">FEATURED</Tag>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)", letterSpacing: "0.14em" }}>05.10.2026 · DEV BLOG</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-hand)", fontSize: 56, fontWeight: 700, color: "var(--paper)", margin: "10px 0", lineHeight: 1 }}>MEET ZEN — THE TIME-BENDER</h2>
          <Lines count={4} widths={["100%", "92%", "85%", "60%"]} />
          <Btn variant="primary" size="lg" href="/patch" style={{ marginTop: 22 }}>READ FULL ARTICLE →</Btn>
        </div>
      </div>
    </section>

    <SectionBreak ch="03" title="LATEST" jp="最新" />
    <section className="th-section alt">
      <SectionHead num="03 / LATEST" jp="最新" title="THIS" titleAccent="WEEK." />
      <div className="grid-3">
        {[
          ["PATCH NOTES","05.10.2026","PATCH 0.7 · RAIDEN-9 NERFS","Server-wide balance pass touching 5 weapons and 3 hunters."],
          ["ESPORTS",    "05.08.2026","DRAGONS TAKE GROUP A","After a 3-1 series win over Shibuya Tigers."],
          ["DEV BLOG",   "05.05.2026","DESIGNING THE OPEN ZONE","Why we ditched random drops for mirrored zones."],
          ["LORE",       "05.02.2026","WHO ARE THE HUNTERS?","A short history of the Tokyo Cyber Pact."],
          ["COMMUNITY",  "04.28.2026","FAN ART FRIDAY · WEEK 04","Top 10 community submissions for May."],
          ["ANNOUNCEMENT","04.25.2026","SEASON 1 ROADMAP TEASED","New map, two hunters, ranked overhaul incoming."],
        ].map((n, i) => (
          <div key={i} className="box dark" style={{ padding: 0 }}>
            <Img label="ARTICLE COVER" style={{ aspectRatio: "16 / 9", border: 0 }} />
            <div style={{ padding: 18 }}>
              <div className="row" style={{ alignItems: "center", justifyContent: "space-between" }}>
                <Tag variant="ghost-dark">{n[0]}</Tag>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.12em" }}>{n[1]}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-hand)", fontSize: 24, fontWeight: 700, color: "var(--paper)", margin: "10px 0", lineHeight: 1.15 }}>{n[2]}</h3>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dark)", lineHeight: 1.6 }}>{n[3]}</div>
              <Btn variant="dark" href="/patch" style={{ marginTop: 14, borderColor: "var(--paper)" }}>READ →</Btn>
            </div>
          </div>
        ))}
      </div>
      <div className="row" style={{ justifyContent: "center", marginTop: 28 }}>
        <Btn variant="dark" size="lg" href="/news" style={{ borderColor: "var(--paper)" }}>LOAD MORE ARTICLES</Btn>
      </div>
    </section>

    <Footer />
  </main>
);

/* ---------- PATCH NOTES ---------- */

export const PagePatch = () => (
  <main className="th-canvas">
    <TopNav active="patch" />

    <section className="th-section flat" style={{ paddingBottom: "clamp(24px, 3vw, 40px)" }}>
      <div className="th-sec-head">
        <div className="num">// 01 / PATCH NOTES</div>
        <div className="rule" />
        <Kanji size="md" accent>更新</Kanji>
      </div>
      <h1 className="h-hero" style={{ fontSize: "clamp(48px, 9vw, 110px)" }}>PATCH <span className="accent">0.7.</span></h1>
      <div style={{ maxWidth: 720, marginTop: 14, fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--text-dark)", lineHeight: 1.4 }}>
        Released 05.10.2026 · "RAIDEN BREAKS" · Balance pass · 14 changes
      </div>
    </section>

    {/* Patch index */}
    <section className="th-section">
      <div className="split image-r">
        <div>
          <Label accent>JUMP TO</Label>
          <div className="col" style={{ gap: 6, marginTop: 12 }}>
            {[
              ["A", "WEAPON CHANGES", "5 items"],
              ["B", "HUNTER CHANGES", "3 items"],
              ["C", "CYBERWARE CHANGES", "2 items"],
              ["D", "MAP & MODES", "2 items"],
              ["E", "BUG FIXES", "12 items"],
              ["F", "QUALITY OF LIFE", "4 items"],
            ].map((j, i) => (
              <div key={i} className="row" style={{ alignItems: "baseline", padding: "10px 14px", border: "1px solid var(--border-dark)", background: "var(--bg-dark)", gap: 14 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.14em", minWidth: 20 }}>{j[0]}</span>
                <span style={{ fontFamily: "var(--font-hand)", fontSize: 20, fontWeight: 700, color: "var(--paper)", flex: 1 }}>{j[1]}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted-dark)", letterSpacing: "0.1em" }}>{j[2]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="box dark" style={{ padding: 22 }}>
          <Label accent>RELEASE NOTES · 0.7</Label>
          <h3 style={{ fontFamily: "var(--font-hand)", fontSize: 36, fontWeight: 700, color: "var(--paper)", margin: "10px 0", lineHeight: 1 }}>RAIDEN BREAKS</h3>
          <Lines count={5} widths={["100%", "94%", "88%", "70%", "55%"]} />
          <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between", marginTop: 22 }}>
            <Label>BUILD · 26.05.10.RC1</Label>
            <Label>DOWNLOAD · 1.2 GB</Label>
          </div>
        </div>
      </div>
    </section>

    {/* Weapon changes section */}
    <SectionBreak ch="A" title="WEAPON CHANGES" jp="武器調整" />
    <section className="th-section alt">
      <SectionHead num="A / WEAPONS" jp="武器" title="WEAPON" titleAccent="CHANGES." />
      <div className="col" style={{ gap: 12 }}>
        {[
          { n: "RAIDEN-9", k: "雷", change: "NERF", diff: "Damage 1100 → 980 · Charge time 1.0s → 1.4s", note: "Reigning in the queen of long-range." },
          { n: "TANTO-X",  k: "短", change: "BUFF", diff: "Mag size 24 → 30 · Reload speed +12%", note: "Bringing the SMG meta back to life." },
          { n: "KASUMI",   k: "霧", change: "NERF", diff: "Spread +8% at hipfire · Effective range −10%", note: "Less rewarding for sloppy peeks." },
          { n: "HAYATE",   k: "風", change: "BUFF", diff: "Headshot multiplier 1.5x → 1.7x", note: "Reward precision." },
          { n: "KATANA-K1",k: "刀", change: "FIX",  diff: "Lunge no longer ignores Kinetic Wall", note: "It was never supposed to." },
        ].map((c, i) => (
          <div key={i} className="box dark" style={{ padding: 18 }}>
            <div className="row" style={{ alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
              <Kanji size="lg" accent>{c.k}</Kanji>
              <div style={{ fontFamily: "var(--font-hand)", fontSize: 28, fontWeight: 700, color: "var(--paper)", minWidth: 160 }}>{c.n}</div>
              <Tag variant={c.change === "BUFF" ? "accent" : c.change === "NERF" ? "dark" : "ghost-dark"}>{c.change}</Tag>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dark)", flex: 1, minWidth: 220 }}>{c.diff}</div>
            </div>
            <div style={{ fontFamily: "var(--font-hand)", fontSize: 16, color: "var(--accent)", marginTop: 8 }}>
              <span style={{ opacity: 0.7 }}>// dev note:</span> {c.note}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Hunter changes */}
    <SectionBreak ch="B" title="HUNTER CHANGES" jp="狩人調整" />
    <section className="th-section">
      <SectionHead num="B / HUNTERS" jp="狩人" title="HUNTER" titleAccent="CHANGES." />
      <div className="grid-3">
        {[
          { n: "ONI",   k: "鬼", change: "BUFF", a: "FORTRESS", d: "Duration 6s → 8s · CD 200s → 180s" },
          { n: "GHOST", k: "影", change: "NERF", a: "SPECTRAL SCAN", d: "Range 40m → 30m · Duration 4s → 3s" },
          { n: "ZEN",   k: "禅", change: "NEW",  a: "TIME ECHO",  d: "Released. 4s state rewind. CD 240s." },
        ].map((c, i) => (
          <div key={i} className="box dark" style={{ padding: 18 }}>
            <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <Kanji size="xl" accent>{c.k}</Kanji>
              <Tag variant={c.change === "BUFF" ? "accent" : c.change === "NEW" ? "accent" : "ghost-dark"}>{c.change}</Tag>
            </div>
            <div style={{ fontFamily: "var(--font-hand)", fontSize: 32, fontWeight: 700, color: "var(--paper)", marginTop: 6 }}>{c.n}</div>
            <hr className="hr dashed" style={{ margin: "12px 0" }} />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.14em" }}>{c.a}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dark)", marginTop: 6, lineHeight: 1.6 }}>{c.d}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Bug fixes — clean list */}
    <SectionBreak ch="E" title="BUG FIXES" jp="修正" />
    <section className="th-section alt">
      <SectionHead num="E / FIXES" jp="修正" title="BUG" titleAccent="FIXES." />
      <div className="grid-2">
        {[
          "Fixed crash when joining a match with 0 cyberware installed",
          "Fixed Phase Legs double-jump triggering twice on Akihabara rooftops",
          "Fixed UI overlap when 5+ allies use voice ping simultaneously",
          "Fixed cyberware terminal interact prompt persisting after death",
          "Fixed party-up invites being silently dropped on slow connections",
          "Fixed Sumi scope sway after revive",
          "Fixed Open Zone ring damage not applying through certain windows",
          "Fixed shop currency display flashing on session start",
          "Fixed audio cutout when 3+ smoke grenades stack",
          "Fixed ranked queue MMR calculation for 4-stacks + fill",
          "Fixed cosmetic preview not reflecting equipped charm",
          "Fixed Japanese localization for Operation Kirin pass description",
        ].map((b, i) => (
          <div key={i} className="row" style={{ alignItems: "baseline", padding: "10px 12px", borderBottom: "1px dashed var(--border-dark)", gap: 14 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--accent)", letterSpacing: "0.14em", minWidth: 28 }}>{String(i+1).padStart(2,'0')}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dark)", lineHeight: 1.6 }}>{b}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Patch archive */}
    <SectionBreak ch="F" title="ARCHIVE" jp="記録" />
    <section className="th-section">
      <SectionHead num="F / ARCHIVE" jp="記録" title="PREVIOUS" titleAccent="PATCHES." />
      <div className="col" style={{ gap: 6 }}>
        {[
          ["0.7", "05.10.2026", "RAIDEN BREAKS", "BALANCE"],
          ["0.6", "04.18.2026", "ZEN ARRIVES",   "NEW HUNTER"],
          ["0.5", "03.30.2026", "OPEN ZONE 2.0", "MAP REWORK"],
          ["0.4", "03.10.2026", "CYBERWARE PASS","NEW IMPLANTS"],
          ["0.3", "02.20.2026", "FIRST BLOOD",   "RANKED LIVE"],
          ["0.2", "02.01.2026", "HOTFIX",        "STABILITY"],
          ["0.1", "01.20.2026", "LAUNCH DAY",    "RELEASE"],
        ].map((p, i) => (
          <div key={i} className="row" style={{ alignItems: "center", padding: "12px 16px", background: "var(--bg-dark)", border: "1px solid var(--border-dark)", gap: 16, fontFamily: "var(--font-mono)", fontSize: 11 }}>
            <span style={{ color: "var(--accent)", minWidth: 40, fontSize: 14 }}>v{p[0]}</span>
            <span style={{ color: "var(--muted-dark)", letterSpacing: "0.12em", minWidth: 100 }}>{p[1]}</span>
            <span style={{ fontFamily: "var(--font-hand)", fontSize: 22, fontWeight: 700, color: "var(--paper)", flex: 1 }}>{p[2]}</span>
            <Tag variant="ghost-dark">{p[3]}</Tag>
            <span style={{ color: "var(--accent)", letterSpacing: "0.14em", cursor: "pointer" }}>READ →</span>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </main>
);
