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

export const HunterCard = ({
  hunter,
  onClick,
}: {
  hunter: Hunter;
  onClick?: () => void;
}) => (
  <div
    className={`hunter-card ${hunter.selected ? "selected" : ""}`}
    onClick={onClick}
    role={onClick ? "button" : undefined}
    tabIndex={onClick ? 0 : undefined}
  >
    <Kanji size="huge">{hunter.k}</Kanji>
    <div className="meta">
      <div className="hname">{hunter.name}</div>
      <div className="hrole">{hunter.role}</div>
    </div>
    {hunter.isNew && <span className="new-flag">NEW</span>}
  </div>
);
