import type { CSSProperties, ReactNode } from "react";

type Style = CSSProperties | undefined;

export const Line = ({
  w = "100%",
  h = 4,
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
    className={`line${accent ? " accent" : ""}${muted ? " muted" : ""}`}
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
  style,
  children,
}: {
  label?: string;
  style?: Style;
  children?: ReactNode;
}) => (
  <div className="img-ph" style={style}>
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
  variant?: "accent" | "dark" | "";
  style?: Style;
}) => (
  <span className={`tag${variant ? ` ${variant}` : ""}`} style={style}>
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
  variant?: "primary" | "dark" | "";
  size?: "lg" | "xl" | "";
  style?: Style;
  href?: string;
}) => {
  const cls = `btn${variant ? ` ${variant}` : ""}${size ? ` ${size}` : ""}`;
  if (href) {
    return (
      <a className={cls} style={style} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} style={style} type="button">
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
  <div className={`label${accent ? " accent" : ""}`} style={style}>
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
    className={`kanji ${size}${accent ? " accent" : ""}${muted ? " muted" : ""}`}
    style={style}
  >
    {children}
  </span>
);

export const Brackets = () => <div className="brackets" />;

export const TopNav = ({
  links = ["GAME", "HUNTERS", "MAP", "ESPORTS", "STORE", "NEWS"],
  cta = "DROP IN ►",
}: {
  links?: string[];
  cta?: string;
}) => (
  <div
    className="row"
    style={{
      alignItems: "center",
      gap: 18,
      padding: "16px 28px",
      borderBottom: "1px solid #2a2f36",
      background: "#0a0d12",
      color: "var(--paper)",
      position: "sticky",
      top: 0,
      zIndex: 30,
      backdropFilter: "blur(6px)",
    }}
  >
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        letterSpacing: "0.2em",
        fontSize: 14,
      }}
    >
      TH<span style={{ color: "var(--accent)" }}>/</span>2100
    </div>
    <Kanji size="sm" accent style={{ marginLeft: -6 }}>
      東京狩
    </Kanji>
    <div style={{ flex: 1 }} />
    <div className="row" style={{ gap: 22 }}>
      {links.map((l) => (
        <a
          key={l}
          href={`#${l.toLowerCase()}`}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.18em",
            color: "#b8bec5",
            textDecoration: "none",
          }}
        >
          {l}
        </a>
      ))}
    </div>
    <Btn variant="primary">{cta}</Btn>
  </div>
);
