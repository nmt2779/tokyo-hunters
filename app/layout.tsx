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
  metadataBase: new URL("https://tokyohunters.example"),
  title: {
    default: "Tokyo Hunters · 100 IN. 1 OUT.",
    template: "%s · Tokyo Hunters",
  },
  description:
    "100-player royale set in neo-Tokyo 2100. 20 squads, 2 combat belts, one contested center. Free to play. Drops 06.15.26.",
  openGraph: {
    title: "Tokyo Hunters · 100 IN. 1 OUT.",
    description:
      "100-player royale set in neo-Tokyo 2100. Drops 06.15.26.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokyo Hunters · 100 IN. 1 OUT.",
    description:
      "100-player royale set in neo-Tokyo 2100. Drops 06.15.26.",
  },
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
