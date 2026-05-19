"use client";

import Image from "next/image";
import Link from "next/link";
import { Kanji } from "../wireframe-primitives";
import type { Hunter } from "./HunterCard";

export const HunterAvatar = ({
  hunter,
  selected,
  onHover,
}: {
  hunter: Hunter;
  selected?: boolean;
  /**
   * Fired on mouse enter / keyboard focus.
   * Use this to live-update a parent preview while the user browses.
   * Clicking the avatar always navigates to the hunter detail page.
   */
  onHover?: () => void;
}) => {
  const src = hunter.avatarSrc ?? hunter.imageSrc;
  return (
    <Link
      href={`/hunters/${hunter.id}`}
      onMouseEnter={onHover}
      onFocus={onHover}
      className={`hunter-avatar${selected ? " selected" : ""}`}
      aria-label={`View ${hunter.name} dossier`}
      data-selected={selected ? "true" : undefined}
    >
      {src && (
        <Image
          src={src}
          alt=""
          fill
          sizes="160px"
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
        />
      )}
      <span className="kanji-badge">
        <Kanji size="sm" accent>{hunter.k}</Kanji>
      </span>
      {hunter.isNew && <span className="new-tag">NEW</span>}
      <span className="name">{hunter.name}</span>
    </Link>
  );
};
