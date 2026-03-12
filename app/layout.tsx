import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://og-preview.vercel.app";

export const metadata: Metadata = {
  title: "OG Preview – 915-style Unfurl Test",
  description:
    "A test page to preview how 915-style Open Graph unfurls look when shared on Twitter/X.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Amritansh Rai's Verified P&L",
    description:
      "View Amritansh Rai's verified trading P&L on 915 by Groww. Real, broker-verified performance.",
    url: SITE_URL,
    siteName: "915 by Groww",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "915 Verified P&L OG Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amritansh Rai's Verified P&L",
    description:
      "View Amritansh Rai's verified trading P&L on 915 by Groww. Real, broker-verified performance.",
    images: ["/api/og"],
    site: "@915_trade",
  },
  robots: "index,follow,max-image-preview:large",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
