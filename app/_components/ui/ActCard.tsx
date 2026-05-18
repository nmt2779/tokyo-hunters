import { Kanji, Tag } from "../wireframe-primitives";

export const ActCard = ({
  phase,
  title,
  time,
  kanji,
  description,
}: {
  phase: string;
  title: string;
  time: string;
  kanji: string;
  description: string;
}) => (
  <div className="box dark" style={{ padding: 22, minHeight: 280 }}>
    <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
      <Tag variant="accent">{phase}</Tag>
      <Kanji size="md" accent>{kanji}</Kanji>
    </div>
    <div
      style={{
        fontFamily: "var(--font-hand)",
        fontSize: 36,
        fontWeight: 700,
        color: "var(--paper)",
        marginTop: 12,
        lineHeight: 1,
      }}
    >
      {title}
    </div>
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--accent)",
        letterSpacing: "0.14em",
        marginTop: 6,
      }}
    >
      {time}
    </div>
    <hr className="hr dashed" style={{ margin: "14px 0" }} />
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--text-dark)",
        lineHeight: 1.6,
      }}
    >
      {description}
    </div>
  </div>
);
