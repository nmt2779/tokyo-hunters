"use client";

import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { Kanji } from "../wireframe-primitives";
import { Tilt3D } from "../motion/Tilt3D";
import { BLUR_DATA_URL } from "../../_lib/image";

export type Hunter = {
  id: string;
  name: string;
  k: string;
  role: "ASSAULT" | "RECON" | "SUPPORT" | "CONTROL";
  sig?: string;
  selected?: boolean;
  isNew?: boolean;
  /** Full-body hero / splash art (3:4). Used by HunterCard and big preview. */
  imageSrc?: string;
  /** Bust / head-and-shoulders avatar (1:1). Used by HunterAvatar. Falls back to imageSrc. */
  avatarSrc?: string;
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
      {hunter.imageSrc && (
        <>
          <ViewTransition name={`hunter-portrait-${hunter.id}`} share="morph">
            <Image
              src={hunter.imageSrc}
              alt={hunter.name}
              fill
              sizes="(max-width: 720px) 50vw, 220px"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              style={{
                objectFit: "cover",
                objectPosition: "center 20%",
                zIndex: 0,
              }}
            />
          </ViewTransition>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(10,13,18,0.15) 0%, rgba(10,13,18,0.75) 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        </>
      )}
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
            zIndex: 2,
          }}
        >
          {String(props.index).padStart(2, "0")}
        </div>
      )}
      <Kanji
        size="huge"
        style={{
          ...(isList ? { fontSize: "clamp(56px, 8vw, 96px)" } : undefined),
          ...(hunter.imageSrc
            ? {
                opacity: 0.85,
                color: "var(--accent)",
                textShadow: "0 4px 16px rgba(0,0,0,0.6)",
                zIndex: 2,
              }
            : undefined),
        }}
      >
        {hunter.k}
      </Kanji>
      <div className="meta" style={{ zIndex: 2 }}>
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
      <Tilt3D max={6} glare>
        <Link
          className="hunter-card"
          href={`/hunters/${hunter.id}`}
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          {body}
        </Link>
      </Tilt3D>
    );
  }

  const { onClick } = props;
  return (
    <Tilt3D max={6} glare>
      <div
        className={`hunter-card ${hunter.selected ? "selected" : ""}`}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        {body}
      </div>
    </Tilt3D>
  );
};
