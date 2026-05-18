"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Kanji, Tag } from "../wireframe-primitives";
import type { Hunter } from "./HunterCard";
import { HunterAvatar } from "./HunterAvatar";

export const RosterSection = ({
  hunters,
  initialSelectedId,
}: {
  hunters: Hunter[];
  initialSelectedId?: string;
}) => {
  const fallback = hunters.find((h) => h.selected) ?? hunters[0];
  const [selectedId, setSelectedId] = useState<string>(
    initialSelectedId ?? fallback.id
  );
  const selected = hunters.find((h) => h.id === selectedId) ?? fallback;

  return (
    <div className="roster-split">
      {/* Big preview — left */}
      <Link
        href={`/hunters/${selected.id}`}
        className="box dark"
        style={{
          borderColor: "var(--accent)",
          position: "relative",
          width: "100%",
          aspectRatio: "3 / 4",
          overflow: "hidden",
          display: "block",
          textDecoration: "none",
          color: "inherit",
        }}
        aria-label={`View ${selected.name} dossier`}
      >
        {selected.imageSrc ? (
          <Image
            src={selected.imageSrc}
            alt={`${selected.name} — ${selected.role.toLowerCase()} hunter`}
            fill
            sizes="(max-width: 820px) 100vw, 540px"
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            // key forces re-mount on selection change for clean fade
            key={selected.id}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, transparent calc(50% - 0.6px), #4a5159 calc(50% - 0.6px) calc(50% + 0.6px), transparent calc(50% + 0.6px)), linear-gradient(45deg, transparent calc(50% - 0.6px), #4a5159 calc(50% - 0.6px) calc(50% + 0.6px), transparent calc(50% + 0.6px)), #14171c",
            }}
          />
        )}
        <Kanji
          size="huge"
          accent
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            opacity: 0.75,
            fontSize: "min(180px, 22vw)",
            textShadow: "0 4px 24px rgba(0,0,0,0.7)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          {selected.k}
        </Kanji>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 22,
            background:
              "linear-gradient(180deg, transparent, rgba(0,0,0,0.92) 65%)",
            zIndex: 2,
          }}
        >
          <Tag variant="accent">{selected.role}</Tag>
          <div
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: "clamp(36px, 4vw, 48px)",
              fontWeight: 700,
              color: "var(--paper)",
              marginTop: 6,
              lineHeight: 1,
            }}
          >
            {selected.name}
          </div>
          {selected.sig && (
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text-dark)",
                letterSpacing: "0.12em",
                marginTop: 6,
              }}
            >
              {selected.sig.toUpperCase()}
            </div>
          )}
          <hr
            className="hr accent"
            style={{ margin: "14px 0", width: 60, height: 2 }}
          />
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--accent)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            View full dossier
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </Link>

      {/* Roster grid — right */}
      <div className="col" style={{ gap: 14 }}>
        <div className="chips">
          {["ASSAULT", "RECON", "SUPPORT", "CONTROL"].map((r) => (
            <Tag
              key={r}
              variant={r === selected.role ? "accent" : "ghost-dark"}
            >
              {r}
            </Tag>
          ))}
          <span
            style={{
              marginLeft: "auto",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--muted-dark)",
              letterSpacing: "0.14em",
            }}
          >
            10/10 UNLOCKED
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 10,
          }}
        >
          {hunters.map((h) => (
            <HunterAvatar
              key={h.id}
              hunter={h}
              selected={h.id === selected.id}
              onClick={() => setSelectedId(h.id)}
            />
          ))}
        </div>
        <div
          className="box dark"
          style={{ padding: 16 }}
        >
          <div
            className="row"
            style={{ alignItems: "baseline", gap: 12, flexWrap: "wrap" }}
          >
            <Kanji size="md" accent>役割</Kanji>
            <div
              style={{
                fontFamily: "var(--font-hand)",
                fontSize: 22,
                fontWeight: 700,
                color: "var(--paper)",
              }}
            >
              ROLE QUEUE
            </div>
            <span style={{ flex: 1 }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--muted-dark)",
              }}
            >
              1 OF EACH = +10% XP
            </span>
          </div>
          <Link
            href="/hunters"
            style={{
              marginTop: 10,
              display: "block",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--accent)",
              letterSpacing: "0.14em",
              textDecoration: "none",
            }}
          >
            SEE FULL ROSTER →
          </Link>
        </div>
      </div>
    </div>
  );
};
