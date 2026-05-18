import Link from "next/link";
import { Kanji } from "../wireframe-primitives";

export type Hunter = {
  id: string;
  name: string;
  k: string;
  role: "ASSAULT" | "RECON" | "SUPPORT" | "CONTROL";
  sig?: string;
  selected?: boolean;
  isNew?: boolean;
};

type Props = {
  hunter: Hunter;
} & (
  | { variant?: "grid"; index?: never; onClick?: () => void }
  | { variant: "list"; index: number; onClick?: never }
);

export const HunterCard = (props: Props) => {
  const { hunter } = props;
  const isList = props.variant === "list";

  const body = (
    <>
      {isList && (
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 10,
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            color: "var(--accent)",
            letterSpacing: "0.14em",
          }}
        >
          {String(props.index).padStart(2, "0")}
        </div>
      )}
      <Kanji
        size="huge"
        style={isList ? { fontSize: "clamp(56px, 8vw, 96px)" } : undefined}
      >
        {hunter.k}
      </Kanji>
      <div className="meta">
        <div className="hname" style={isList ? { fontSize: 13 } : undefined}>
          {hunter.name}
        </div>
        <div className="hrole">{hunter.role}</div>
        {isList && hunter.sig && (
          <>
            <hr className="hr accent" style={{ margin: "8px 0 6px", width: 24 }} />
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                color: "var(--muted-dark)",
                letterSpacing: "0.06em",
              }}
            >
              {hunter.sig}
            </div>
          </>
        )}
      </div>
      {hunter.isNew && <span className="new-flag">NEW</span>}
    </>
  );

  if (isList) {
    return (
      <Link
        className="hunter-card"
        href={`/hunters/${hunter.id}`}
        style={{ aspectRatio: "1 / 1.35", cursor: "pointer", textDecoration: "none" }}
      >
        {body}
      </Link>
    );
  }

  const { onClick } = props;
  return (
    <div
      className={`hunter-card ${hunter.selected ? "selected" : ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {body}
    </div>
  );
};
