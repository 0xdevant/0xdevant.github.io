import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const fontSerif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  adjustFontFallback: false,
  variable: "--font-serif",
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

// Only the 搵食 wordmark uses it; the browser fetches just the glyph slices it needs.
const fontCjk = Noto_Serif_TC({
  weight: "900",
  preload: false,
  variable: "--font-cjk",
});

// The full `description` is a paragraph - share cards truncate it mid-sentence.
const SHARE_DESCRIPTION = `${DATA.tagline} based in ${DATA.location}. Building DeFi protocols and agentic AI infrastructure.`;

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  icons: { icon: "/icon.png" },
  openGraph: {
    title: `${DATA.name}`,
    description: SHARE_DESCRIPTION,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: DATA.name }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    description: SHARE_DESCRIPTION,
    card: "summary_large_image",
    images: ["/og.png"],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(fontSerif.variable, fontMono.variable, fontCjk.variable)}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
