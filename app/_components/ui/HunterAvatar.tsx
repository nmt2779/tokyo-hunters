"use client";

import Image from "next/image";
import { Kanji } from "../wireframe-primitives";
import type { Hunter } from "./HunterCard";

export const HunterAvatar = ({
  hunter,
  selected,
  onClick,
}: {
  hunter: Hunter;
  selected?: boolean;
  onClick?: () => void;
}) => {
  const src = hunter.avatarSrc ?? hunter.imageSrc;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`hunter-avatar${selected ? " selected" : ""}`}
      aria-pressed={selected}
      aria-label={`Select ${hunter.name}`}
    >
      {src && (
        <Image
          src={src}
          alt=""
          fill
          sizes="120px"
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
        />
      )}
      <span className="kanji-badge">
        <Kanji size="sm" accent>{hunter.k}</Kanji>
      </span>
      {hunter.isNew && <span className="new-tag">NEW</span>}
      <span className="name">{hunter.name}</span>
    </button>
  );
};
