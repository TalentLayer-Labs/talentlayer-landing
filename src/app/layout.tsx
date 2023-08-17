import "./globals.css";
import localFont from "next/font/local";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/toast";
import { ThemeProvider } from "@/providers/theme-provider";

import type { Metadata } from "next";

// Font files can be colocated inside of `app`
const clashDisplay = localFont({
  src: "./clash-display.ttf",
  display: "swap",
});

export const siteConfig = {
  name: "TalentLayer",
  description:
    "TalentLayer is an open protocol and developer toolkit for building better hiring platforms",
  url: "https://talentlayer.org",
  ogImage: "https://talentlayer.org/og.png",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_UK",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@talentlayer",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clashDisplay.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pb-20">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
