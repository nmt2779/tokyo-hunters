import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Tokyo Hunters · 100-player royale set in neo-Tokyo, 2100";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const bg = await readFile(join(process.cwd(), "public/art/og-bg.jpg"));
  const bgDataUrl = `data:image/jpeg;base64,${bg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#0a0d12",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background art */}
        <img
          src={bgDataUrl}
          width={1200}
          height={630}
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
          alt=""
        />
        {/* Dark gradient overlay for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0) 100%)",
          }}
        />
        {/* Text block */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            width: "62%",
          }}
        >
          <div
            style={{
              fontFamily: "mono",
              fontSize: 22,
              color: "#ff2a3d",
              letterSpacing: "0.24em",
              marginBottom: 18,
              display: "flex",
            }}
          >
            EAST · 東京 · 2100
          </div>
          <div
            style={{
              fontSize: 130,
              fontWeight: 900,
              color: "#f4f1ea",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            TOKYO&nbsp;
            <span style={{ color: "#ff2a3d" }}>HUNTERS</span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#cfd3da",
              marginTop: 28,
              lineHeight: 1.3,
              maxWidth: 620,
              display: "flex",
            }}
          >
            100-player royale. 20 squads. 2 combat belts.
            One contested center. Drops 07.15.26.
          </div>
        </div>
        {/* Bottom-left tag */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              padding: "8px 16px",
              background: "#ff2a3d",
              color: "#fff",
              fontFamily: "mono",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.2em",
            }}
          >
            FREE TO PLAY
          </div>
          <div
            style={{
              fontFamily: "mono",
              fontSize: 14,
              color: "#9aa1aa",
              letterSpacing: "0.2em",
            }}
          >
            PC · PS5 · XBOX · CLOUD
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
