import { Img, Kanji, Tag } from "../wireframe-primitives";

export const HunterPreviewPanel = ({
  index,
  total,
  role,
  name,
  kanji,
  sig,
  imageLabel,
  minHeight = 460,
}: {
  index: number;
  total: number;
  role: "ASSAULT" | "RECON" | "SUPPORT" | "CONTROL";
  name: string;
  kanji: string;
  sig: string;
  imageLabel: string;
  minHeight?: number;
}) => {
  const idx = String(index).padStart(2, "0");
  const tot = String(total).padStart(2, "0");
  return (
    <div style={{ position: "relative", minHeight }}>
      <Img className="hero-media" label={imageLabel}>
        <Kanji
          size="huge"
          muted
          style={{
            position: "absolute",
            top: 30,
            right: 30,
            color: "var(--accent)",
            opacity: 0.6,
            fontSize: "min(200px, 24vw)",
          }}
        >
          {kanji}
        </Kanji>
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20,
            padding: 16,
            border: "1px solid var(--accent)",
            background: "#000a",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.16em" }}>
              HUNTER {idx} / {tot}
            </div>
            <Tag variant="accent">{role}</Tag>
          </div>
          <div style={{ fontFamily: "var(--font-hand)", fontWeight: 700, fontSize: 34, color: "var(--paper)", marginTop: 4 }}>
            {name}
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dark)", marginTop: 4 }}>
            {sig}
          </div>
        </div>
      </Img>
    </div>
  );
};
