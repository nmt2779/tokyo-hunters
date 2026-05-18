"use client";
/* eslint-disable react/jsx-no-comment-textnodes */
/* th-shared.tsx — primitives, nav, footer, logo */

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type Style = CSSProperties | undefined;

export const ROUTES = {
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
} as const;

type RouteKey = keyof typeof ROUTES;

/* ---------- atoms ---------- */

export const Line = ({
  w = "100%",
  h = 6,
  accent,
  muted,
  style,
}: {
  w?: number | string;
  h?: number;
  accent?: boolean;
  muted?: boolean;
  style?: Style;
}) => (
  <div
    className={`line ${accent ? "accent" : ""} ${muted ? "muted" : ""}`}
    style={{ width: w, height: h, ...style }}
  />
);

export const Lines = ({
  count = 3,
  widths,
  gap = 8,
  style,
}: {
  count?: number;
  widths?: (string | number)[];
  gap?: number;
  style?: Style;
}) => {
  const ws =
    widths ||
    Array.from({ length: count }, (_, i) => (i === count - 1 ? "55%" : "100%"));
  return (
    <div className="lines" style={{ gap, ...style }}>
      {ws.map((w, i) => (
        <Line key={i} w={w} h={4} muted={i > 0} />
      ))}
    </div>
  );
};

export const Img = ({
  label = "IMG",
  dark = true,
  style,
  className = "",
  children,
}: {
  label?: string;
  dark?: boolean;
  style?: Style;
  className?: string;
  children?: ReactNode;
}) => (
  <div
    className={`img-ph ${dark ? "dark" : ""} ${className}`}
    style={style}
  >
    {label && <div className="ph-label">{label}</div>}
    {children}
  </div>
);

export const Tag = ({
  children,
  variant,
  style,
}: {
  children: ReactNode;
  variant?: "accent" | "dark" | "ghost-dark";
  style?: Style;
}) => (
  <span className={`tag ${variant || ""}`} style={style}>
    {children}
  </span>
);

export const Btn = ({
  children,
  variant = "",
  size = "",
  style,
  href,
}: {
  children: ReactNode;
  variant?: "primary" | "dark" | "ghost" | "";
  size?: "lg" | "xl" | "";
  style?: Style;
  href?: string;
}) => {
  const className = `btn ${variant} ${size}`.trim();
  if (href) {
    return (
      <Link className={className} href={href} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} style={style} type="button">
      {children}
    </button>
  );
};

export const Label = ({
  children,
  accent,
  style,
}: {
  children: ReactNode;
  accent?: boolean;
  style?: Style;
}) => (
  <div className={`label ${accent ? "accent" : ""}`} style={style}>
    {children}
  </div>
);

export const Kanji = ({
  children,
  size = "lg",
  accent,
  muted,
  style,
}: {
  children: ReactNode;
  size?: "huge" | "xl" | "lg" | "md" | "sm";
  accent?: boolean;
  muted?: boolean;
  style?: Style;
}) => (
  <span
    className={`kanji ${size} ${accent ? "accent" : ""} ${muted ? "muted" : ""}`}
    style={style}
  >
    {children}
  </span>
);

export const Brackets = () => <div className="brackets" />;

/* ---------- logo ---------- */

export const Logo = ({
  size = 28,
  withWord = true,
}: {
  size?: number;
  withWord?: boolean;
}) => (
  <Link className="th-logo" href="/" aria-label="TokyoHunters home">
    <svg width={size} height={size} viewBox="0 0 40 40" aria-label="TokyoHunters">
      <circle cx="20" cy="20" r="17" fill="none" stroke="var(--paper)" strokeWidth="2" />
      <circle cx="20" cy="20" r="9"  fill="none" stroke="var(--paper)" strokeWidth="1.5" />
      <line x1="20" y1="2"  x2="20" y2="11" stroke="var(--paper)" strokeWidth="1.5" />
      <line x1="20" y1="29" x2="20" y2="38" stroke="var(--paper)" strokeWidth="1.5" />
      <line x1="2"  y1="20" x2="11" y2="20" stroke="var(--paper)" strokeWidth="1.5" />
      <line x1="29" y1="20" x2="38" y2="20" stroke="var(--paper)" strokeWidth="1.5" />
      <line x1="6" y1="34" x2="34" y2="6" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="20" r="3" fill="var(--accent)" />
    </svg>
    {withWord && (
      <span className="wordmark">Tokyo<span className="dot">·</span>Hunters</span>
    )}
  </Link>
);

/* ---------- nav / footer / hero pair ---------- */

export const NAV_ITEMS: { id: RouteKey; label: string }[] = [
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

export const TopNav = ({ active = "home" }: { active?: RouteKey }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`th-nav${scrolled ? " th-nav--scrolled" : ""}`}
      aria-label="Primary navigation"
    >
      <Logo />
      <div className="nav-links">
        {NAV_ITEMS.map((it) => (
          <Link
            key={it.id}
            className={`nav-link ${active === it.id ? "active" : ""}`}
            href={ROUTES[it.id]}
          >
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
};

export const SectionHead = ({
  num,
  jp,
  title,
  titleAccent,
  lede,
}: {
  num: string;
  jp: string;
  title: string;
  titleAccent?: string;
  /**
   * Lede paragraph under the title. Pass a string / JSX for real copy,
   * or `true` for a Lines skeleton placeholder.
   */
  lede?: ReactNode | true;
}) => (
  <>
    <div className="th-sec-head">
      <div className="num">// {num}</div>
      <div className="rule" />
      <Kanji size="md" accent>{jp}</Kanji>
    </div>
    <h2 className="th-sec-title">
      {title} {titleAccent && <span className="accent">{titleAccent}</span>}
    </h2>
    {lede === true ? (
      <div className="th-sec-lede">
        <Lines count={2} widths={["100%", "70%"]} />
      </div>
    ) : lede ? (
      <div className="th-sec-lede">{lede}</div>
    ) : null}
  </>
);

export const SectionBreak = ({
  ch,
  title,
  jp,
}: {
  ch: string;
  title: string;
  jp: string;
}) => (
  <div className="th-break">
    <span className="ch">CH.{ch}</span>
    <span>· {title}</span>
    <span style={{ textAlign: "right" }}>{jp}</span>
    <Kanji size="sm" accent>狩</Kanji>
  </div>
);

export const Ticker = ({ items }: { items: string[] }) => {
  // Render the items twice — animation translates -50% so the second copy
  // arrives exactly where the first started, looping seamlessly.
  const line = items.join("  ·  ") + "  ·  ";
  return (
    <div className="th-ticker" aria-label="Status ticker">
      <div className="th-ticker-track">
        <span>{line}</span>
        <span aria-hidden="true">{line}</span>
      </div>
    </div>
  );
};

export const Footer = () => (
  <div className="th-footer">
    <div className="cols">
      <div>
        <Logo size={24} />
        <div style={{ marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-dark)", lineHeight: 1.6 }}>
          © 2100 NEONWARE STUDIOS · TOKYO<br />
          Free to download. Free to play.
        </div>
      </div>
      {(
        [
          ["GAME",      ["Game", "Hunters", "Weapons", "Cyberware", "Map"]],
          ["COMMUNITY", ["Esports", "Patch Notes", "News", "Discord", "Reddit"]],
          ["SUPPORT",   ["Help", "Bug Report", "Status", "Code of Conduct"]],
          ["STUDIO",    ["About", "Careers", "Press Kit"]],
        ] as const
      ).map(([h, items], i) => (
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

export const HeroCTAs = () => (
  <div className="row" style={{ gap: 12, marginTop: 24, flexWrap: "wrap" }}>
    <Btn variant="primary" size="xl" href="/game">► PLAY FREE NOW</Btn>
    <Btn variant="dark" size="xl" href="/news" style={{ borderColor: "var(--paper)" }}>▶ WATCH TRAILER</Btn>
  </div>
);
