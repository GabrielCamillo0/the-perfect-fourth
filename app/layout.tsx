import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Suspense } from "react";
import { AnalyticsBridge } from "@/components/Analytics";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const siteUrl = new URL(SITE.url);

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${SITE.name} | Premium Fourth of July Hosting Guide`,
    template: `%s | ${SITE.name}`
  },
  description: SITE.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: `${SITE.name} | Premium Fourth of July Hosting Guide`,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: SITE.socialImage,
        width: 1536,
        height: 1024,
        alt: "Elegant Fourth of July backyard celebration"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Premium Fourth of July Hosting Guide`,
    description: SITE.description,
    images: [SITE.socialImage]
  },
  icons: {
    icon: "/favicons/icon.svg",
    shortcut: "/favicons/icon.svg",
    apple: "/favicons/icon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <AnalyticsScripts />
        <Suspense fallback={null}>
          <AnalyticsBridge />
        </Suspense>
        <Header />
        {children}
        <StickyMobileCta />
        <Footer />
      </body>
    </html>
  );
}
