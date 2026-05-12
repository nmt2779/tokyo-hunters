import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TokyoHunters · 100 IN. 1 OUT.",
  description:
    "TokyoHunters — 100-player royale set in neon Tokyo, 2100. Drop. Adapt. Outlast.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
