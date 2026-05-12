import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-hand",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const notoJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TokyoHunters · 100 IN. 1 OUT.",
  description:
    "TokyoHunters — 100-player royale set in neon Tokyo, 2100. Drop. Adapt. Outlast.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${jetbrains.variable} ${inter.variable} ${notoJp.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
