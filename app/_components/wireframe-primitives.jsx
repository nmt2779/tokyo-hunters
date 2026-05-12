/* eslint-disable react/jsx-no-comment-textnodes */
/* th-shared.jsx — primitives, nav, footer, logo */

import Link from "next/link";

const ROUTES = {
  home: "/",
  game: "/game",
  hunters: "/hunters",
  weapons: "/weapons",
  cyberware: "/cyberware",
  map: "/map",
  esports: "/esports",
  store: "/store",
  news: "/news",
  patch: "/patch",
};

const Line = ({ w = "100%", h = 6, accent, muted, style }) => (
  <div className={`line ${accent ? "accent" : ""} ${muted ? "muted" : ""}`} style={{ width: w, height: h, ...style }} />
);
const Lines = ({ count = 3, widths, gap = 8, style }) => {
  const ws = widths || Array.from({ length: count }, (_, i) => i === count - 1 ? "55%" : "100%");
  return <div className="lines" style={{ gap, ...style }}>{ws.map((w, i) => <Line key={i} w={w} h={4} muted={i > 0} />)}</div>;
};
const Img = ({ label = "IMG", dark = true, style, className = "", children }) => (
  <div className={`img-ph ${dark ? "dark" : ""} ${className}`} style={style}>{label && <div className="ph-label">{label}</div>}{children}</div>
);
const Tag = ({ children, variant, style }) => <span className={`tag ${variant || ""}`} style={style}>{children}</span>;
const Btn = ({ children, variant = "", size = "", style, href }) => {
  const className = `btn ${variant} ${size}`;

  if (href) {
    return (
      <Link className={className} href={href} style={style}>
        {children}
      </Link>
    );
  }

  return <button className={className} style={style} type="button">{children}</button>;
};
const Label = ({ children, accent, style }) => <div className={`label ${accent ? "accent" : ""}`} style={style}>{children}</div>;
const Kanji = ({ children, size = "lg", accent, muted, style }) => <span className={`kanji ${size} ${accent ? "accent" : ""} ${muted ? "muted" : ""}`} style={style}>{children}</span>;
const Brackets = () => <div className="brackets" />;
const Note = ({ children, style }) => <div className="note" style={style}>{children}</div>;

/* TokyoHunters SVG logo mark */
const Logo = ({ size = 28, withWord = true }) => (
  <Link className="th-logo" href="/" aria-label="TokyoHunters home">
    <svg width={size} height={size} viewBox="0 0 40 40" aria-label="TokyoHunters">
      {/* sketchy circle target + crosshair + slash */}
      <circle cx="20" cy="20" r="17" fill="none" stroke="var(--paper)" strokeWidth="2" />
      <circle cx="20" cy="20" r="9"  fill="none" stroke="var(--paper)" strokeWidth="1.5" />
      <line x1="20" y1="2"  x2="20" y2="11" stroke="var(--paper)" strokeWidth="1.5" />
      <line x1="20" y1="29" x2="20" y2="38" stroke="var(--paper)" strokeWidth="1.5" />
      <line x1="2"  y1="20" x2="11" y2="20" stroke="var(--paper)" strokeWidth="1.5" />
      <line x1="29" y1="20" x2="38" y2="20" stroke="var(--paper)" strokeWidth="1.5" />
      {/* red slash */}
      <line x1="6" y1="34" x2="34" y2="6" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="20" r="3" fill="var(--accent)" />
    </svg>
    {withWord && (
      <span className="wordmark">Tokyo<span className="dot">·</span>Hunters</span>
    )}
  </Link>
);

const NAV_ITEMS = [
  { id: "home",      label: "HOME" },
  { id: "game",      label: "GAME" },
  { id: "hunters",   label: "HUNTERS" },
  { id: "weapons",   label: "WEAPONS" },
  { id: "cyberware", label: "CYBERWARE" },
  { id: "map",       label: "MAP" },
  { id: "esports",   label: "ESPORTS" },
  { id: "store",     label: "STORE" },
  { id: "news",      label: "NEWS" },
  { id: "patch",     label: "PATCH NOTES" },
];

const TopNav = ({ active = "home" }) => (
  <nav className="th-nav" aria-label="Primary navigation">
    <Logo />
    <div className="nav-links">
      {NAV_ITEMS.map(it => (
        <Link key={it.id} className={`nav-link ${active === it.id ? "active" : ""}`} href={ROUTES[it.id]}>
          {it.label}
        </Link>
      ))}
    </div>
    <div className="nav-cta">
      <Btn variant="primary" href="/game">► PLAY FREE</Btn>
      <span className="hamburger">≡</span>
    </div>
  </nav>
);

const SectionHead = ({ num, jp, title, lede, titleAccent }) => (
  <>
    <div className="th-sec-head">
      <div className="num">// {num}</div>
      <div className="rule" />
      <Kanji size="md" accent>{jp}</Kanji>
    </div>
    <h2 className="th-sec-title">{title} {titleAccent && <span className="accent">{titleAccent}</span>}</h2>
    {lede && <div className="th-sec-lede"><Lines count={2} widths={["100%", "70%"]} /></div>}
  </>
);

const SectionBreak = ({ ch, title, jp }) => (
  <div className="th-break">
    <span className="ch">CH.{ch}</span>
    <span>· {title}</span>
    <span style={{ textAlign: "right" }}>{jp}</span>
    <Kanji size="sm" accent>狩</Kanji>
  </div>
);

const Ticker = ({ items }) => (
  <div className="th-ticker">
    {Array.from({ length: 4 }).map((_, i) => (
      <span key={i}>{items.join(" · ")} ·</span>
    ))}
  </div>
);

const Footer = () => (
  <div className="th-footer">
    <div className="cols">
      <div>
        <Logo size={24} />
        <div style={{ marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)", lineHeight: 1.6 }}>
          © 2100 NEONWARE STUDIOS · TOKYO<br/>
          Free to download. Free to play.
        </div>
      </div>
      {[
        ["GAME", ["Game", "Hunters", "Weapons", "Cyberware", "Map"]],
        ["COMMUNITY", ["Esports", "Patch Notes", "News", "Discord", "Reddit"]],
        ["SUPPORT", ["Help", "Bug Report", "Status", "Code of Conduct"]],
        ["STUDIO", ["About", "Careers", "Press Kit"]],
      ].map(([h, items], i) => (
        <div key={i} className="col" style={{ gap: 8 }}>
          <div className="label">{h}</div>
          {items.map((x, j) => (
            <div key={j} style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dark)" }}>{x}</div>
          ))}
        </div>
      ))}
    </div>
    <div className="colophon">
      <span>EULA</span><span>PRIVACY</span><span>COOKIES</span><span>EN / JP</span>
      <span style={{ marginLeft: "auto" }}>X · DC · YT · TW · IG</span>
    </div>
  </div>
);

/* Reusable hero CTA pair */
const HeroCTAs = () => (
  <div className="row" style={{ gap: 12, marginTop: 24, flexWrap: "wrap" }}>
    <Btn variant="primary" size="xl" href="/game">► PLAY FREE NOW</Btn>
    <Btn variant="dark" size="xl" href="/news" style={{ borderColor: "var(--paper)" }}>▶ WATCH TRAILER</Btn>
  </div>
);

export {
  Brackets,
  Btn,
  Footer,
  HeroCTAs,
  Img,
  Kanji,
  Label,
  Line,
  Lines,
  Logo,
  NAV_ITEMS,
  Note,
  ROUTES,
  SectionBreak,
  SectionHead,
  Tag,
  Ticker,
  TopNav,
};
