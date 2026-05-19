import Image from "next/image";
import { Kanji, Tag } from "../wireframe-primitives";

export type CodexCategory = "WEAPON" | "CYBER";
export type CodexRarity = "COMMON" | "RARE" | "EPIC" | "LEGENDARY" | "EXOTIC";

export type CodexItem = {
  category: CodexCategory;
  name: string;
  type: string;
  rarity: CodexRarity;
  kanji: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const CodexCard = ({ item }: { item: CodexItem }) => (
  <div className="codex-card">
    <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
      <Tag variant={item.category === "CYBER" ? "accent" : "ghost-dark"}>{item.category}</Tag>
      <span className="rarity">{item.rarity}</span>
    </div>
    <div
      className="art"
      style={{
        position: "relative",
        overflow: "hidden",
        // Override .codex-card .art height: 100px from globals.css so square
        // MJ assets render uncropped.
        height: "auto",
        aspectRatio: "1 / 1",
      }}
    >
      {item.imageSrc && (
        <Image
          src={item.imageSrc}
          alt={item.imageAlt ?? item.name}
          fill
          sizes="(max-width: 720px) 50vw, 220px"
          style={{ objectFit: "cover" }}
        />
      )}
      <Kanji
        size="huge"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 64,
          opacity: item.imageSrc ? 0.55 : 0.4,
          color: "var(--accent)",
          textShadow: item.imageSrc ? "0 4px 16px rgba(0,0,0,0.6)" : undefined,
          pointerEvents: "none",
        }}
      >
        {item.kanji}
      </Kanji>
    </div>
    <div className="name">{item.name}</div>
    <div className="type">{item.type}</div>
  </div>
);
